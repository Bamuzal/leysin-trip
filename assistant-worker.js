/**
 * Leysin Trip Hub — Claude assistant proxy (Cloudflare Worker)
 * --------------------------------------------------------------
 * Holds the Anthropic API key server-side so it is NEVER exposed in the
 * browser or committed to the GitHub repo. The static site calls THIS worker;
 * the worker adds the secret key and forwards the request to Anthropic.
 *
 * Secrets/vars to set (see ASSISTANT_SETUP.md):
 *   ANTHROPIC_API_KEY  (secret)  – your Anthropic API key
 *   TRIP_PASSPHRASE    (secret)  – a shared word the site must send; basic abuse gate
 *   ALLOWED_ORIGIN     (var)     – e.g. https://bamuzal.github.io
 *
 * Abuse protection here: passphrase gate + origin allow-list + hard caps on
 * model, max_tokens, and body size. For stricter limits, add a Cloudflare
 * Rate Limiting rule in the dashboard for this worker's route.
 */

const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_VERSION = "2023-06-01";
const ALLOWED_MODELS = new Set([
  "claude-haiku-4-5-20251001",
  "claude-sonnet-4-6",
]);
const DEFAULT_MODEL = "claude-haiku-4-5-20251001";
const MAX_TOKENS_CAP = 1536;
const MAX_BODY_BYTES = 60000; // ~60 KB request ceiling

function corsHeaders(origin, allowed) {
  // Echo the origin only if it matches the allow-list; otherwise omit (blocks the call in-browser).
  const allow = allowed && origin === allowed ? origin : allowed || "";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type, x-trip-pass",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
}

function json(body, status, cors) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", ...cors },
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = corsHeaders(origin, env.ALLOWED_ORIGIN);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }
    if (request.method !== "POST") {
      return json({ error: "Method not allowed" }, 405, cors);
    }
    if (env.ALLOWED_ORIGIN && origin && origin !== env.ALLOWED_ORIGIN) {
      return json({ error: "Origin not allowed" }, 403, cors);
    }
    if (!env.ANTHROPIC_API_KEY) {
      return json({ error: "Worker missing ANTHROPIC_API_KEY secret" }, 500, cors);
    }
    if (env.TRIP_PASSPHRASE && request.headers.get("x-trip-pass") !== env.TRIP_PASSPHRASE) {
      return json({ error: "Bad or missing passphrase" }, 401, cors);
    }

    let body;
    try {
      const text = await request.text();
      if (text.length > MAX_BODY_BYTES) {
        return json({ error: "Request too large" }, 413, cors);
      }
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
    return new Response(data, {
      status: upstream.status,
      headers: { "content-type": "application/json", ...cors },
    });
  },
};
