/**
 * Leysin Trip Hub — Cloudflare Worker
 * --------------------------------------------------------------
 * Two jobs:
 *   1) Claude assistant proxy (default route): holds the Anthropic API key
 *      server-side so it is never exposed in the browser or the repo.
 *   2) Short share links (/save + /load): stores a plan in KV and returns a
 *      tiny id, so share links look like  .../#p=...  instead of a huge blob.
 *
 * Bindings to set (see ASSISTANT_SETUP.md):
 *   ANTHROPIC_API_KEY  (secret)  – your Anthropic API key
 *   TRIP_PASSPHRASE    (secret)  – shared word the site must send (assistant + save)
 *   ALLOWED_ORIGIN     (var)     – e.g. https://bamuzal.github.io
 *   TRIP_KV            (KV namespace binding)  – stores shared plans
 */

const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_VERSION = "2023-06-01";
const ALLOWED_MODELS = new Set(["claude-haiku-4-5-20251001", "claude-sonnet-4-6"]);
const DEFAULT_MODEL = "claude-haiku-4-5-20251001";
const MAX_TOKENS_CAP = 1536;
const MAX_BODY_BYTES = 200000; // ~200 KB ceiling (plans + assistant requests)
const PLAN_TTL_SECONDS = 60 * 60 * 24 * 180; // shared plans auto-expire after ~180 days

function corsHeaders(origin, allowed) {
  const allow = allowed && origin === allowed ? origin : allowed || "";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "content-type, x-trip-pass",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
}

function json(body, status, cors) {
  return new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json", ...cors } });
}

function makeId() {
  const alphabet = "abcdefghijkmnpqrstuvwxyz23456789"; // no look-alike chars
  const bytes = crypto.getRandomValues(new Uint8Array(7));
  let id = "";
  for (const b of bytes) id += alphabet[b % alphabet.length];
  return id;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = corsHeaders(origin, env.ALLOWED_ORIGIN);
    const url = new URL(request.url);
    const path = url.pathname;

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (env.ALLOWED_ORIGIN && origin && origin !== env.ALLOWED_ORIGIN) {
      return json({ error: "Origin not allowed" }, 403, cors);
    }

    // ---- Short share links -------------------------------------------------
    if (path.endsWith("/load")) {
      if (request.method !== "GET") return json({ error: "Use GET" }, 405, cors);
      if (!env.TRIP_KV) return json({ error: "Worker missing TRIP_KV binding" }, 500, cors);
      const id = url.searchParams.get("id") || "";
      if (!/^[a-z0-9]{4,16}$/.test(id)) return json({ error: "Bad id" }, 400, cors);
      const data = await env.TRIP_KV.get(id);
      if (!data) return json({ error: "Not found or expired" }, 404, cors);
      return new Response(data, { status: 200, headers: { "content-type": "application/json", ...cors } });
    }

    if (path.endsWith("/save")) {
      if (request.method !== "POST") return json({ error: "Use POST" }, 405, cors);
      if (!env.TRIP_KV) return json({ error: "Worker missing TRIP_KV binding" }, 500, cors);
      if (env.TRIP_PASSPHRASE && request.headers.get("x-trip-pass") !== env.TRIP_PASSPHRASE) {
        return json({ error: "Bad or missing passphrase" }, 401, cors);
      }
      let text;
      try {
        text = await request.text();
        if (text.length > MAX_BODY_BYTES) return json({ error: "Plan too large" }, 413, cors);
        const parsed = JSON.parse(text);
        if (!parsed || !Array.isArray(parsed.i)) return json({ error: "Not a plan" }, 400, cors);
      } catch {
        return json({ error: "Invalid JSON" }, 400, cors);
      }
      const id = makeId();
      await env.TRIP_KV.put(id, text, { expirationTtl: PLAN_TTL_SECONDS });
      return json({ id }, 200, cors);
    }

    // ---- Shared mutable plan: overwrite a fixed slug (family schedule) ------
    if (path.endsWith("/put")) {
      if (request.method !== "POST") return json({ error: "Use POST" }, 405, cors);
      if (!env.TRIP_KV) return json({ error: "Worker missing TRIP_KV binding" }, 500, cors);
      if (env.TRIP_PASSPHRASE && request.headers.get("x-trip-pass") !== env.TRIP_PASSPHRASE) {
        return json({ error: "Bad or missing passphrase" }, 401, cors);
      }
      const putId = url.searchParams.get("id") || "";
      if (!/^[a-z0-9]{4,16}$/.test(putId)) return json({ error: "Bad id" }, 400, cors);
      let text;
      try {
        text = await request.text();
        if (text.length > MAX_BODY_BYTES) return json({ error: "Plan too large" }, 413, cors);
        const parsed = JSON.parse(text);
        if (!parsed || !Array.isArray(parsed.i)) return json({ error: "Not a plan" }, 400, cors);
      } catch {
        return json({ error: "Invalid JSON" }, 400, cors);
      }
      await env.TRIP_KV.put(putId, text, { expirationTtl: PLAN_TTL_SECONDS });
      return json({ id: putId, ok: true }, 200, cors);
    }

    // ---- Claude assistant proxy (default) ----------------------------------
    if (request.method !== "POST") return json({ error: "Method not allowed" }, 405, cors);
    if (!env.ANTHROPIC_API_KEY) return json({ error: "Worker missing ANTHROPIC_API_KEY secret" }, 500, cors);
    if (env.TRIP_PASSPHRASE && request.headers.get("x-trip-pass") !== env.TRIP_PASSPHRASE) {
      return json({ error: "Bad or missing passphrase" }, 401, cors);
    }

    let body;
    try {
      const text = await request.text();
      if (text.length > MAX_BODY_BYTES) return json({ error: "Request too large" }, 413, cors);
      body = JSON.parse(text);
    } catch {
      return json({ error: "Invalid JSON body" }, 400, cors);
    }

    const model = ALLOWED_MODELS.has(body.model) ? body.model : DEFAULT_MODEL;
    const maxTokens = Math.min(Number(body.max_tokens) || 1024, MAX_TOKENS_CAP);
    const payload = {
      model,
      max_tokens: maxTokens,
      system: typeof body.system === "string" ? body.system : undefined,
      messages: Array.isArray(body.messages) ? body.messages : [],
    };

    let upstream;
    try {
      upstream = await fetch(ANTHROPIC_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": ANTHROPIC_VERSION,
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      return json({ error: "Upstream request failed", detail: String(err) }, 502, cors);
    }

    const data = await upstream.text();
    return new Response(data, { status: upstream.status, headers: { "content-type": "application/json", ...cors } });
  },
};
