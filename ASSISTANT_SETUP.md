# Leysin Trip Hub — Claude Assistant Setup

The planner can call Claude to add, move, update, or remove itinerary items from a
plain-English prompt. Because GitHub Pages is static (no server), a tiny **Cloudflare
Worker** holds your Anthropic API key server-side. The site calls the worker; the worker
adds the key and talks to Anthropic. **Your key is never in the browser or the repo.**

You set this up once. It is free at this usage level.

## 1. Get an Anthropic API key
- Sign in at https://console.anthropic.com → **API Keys** → create a key.
- Recommended: set a low **monthly spend limit** on the account (Billing → Limits). The
  assistant uses the cheap Haiku model, so typical edits cost a tiny fraction of a cent.

## 2. Create the Cloudflare Worker
1. Sign up / log in at https://dash.cloudflare.com (free).
2. **Workers & Pages → Create → Create Worker.** Give it a name (e.g. `leysin-assistant`). Deploy the starter.
3. Click **Edit code**, delete the starter, and paste the entire contents of
   [`assistant-worker.js`](./assistant-worker.js). Click **Deploy**.
4. Note the worker URL, e.g. `https://leysin-assistant.<your-subdomain>.workers.dev`.

## 3. Add the secrets/variables
In the worker's **Settings → Variables and Secrets**:
- `ANTHROPIC_API_KEY` — **Encrypt** (secret) → paste your Anthropic key.
- `TRIP_PASSPHRASE` — **Encrypt** (secret) → pick any shared word (you'll enter the same one in the site).
- `ALLOWED_ORIGIN` — plain text → `https://bamuzal.github.io`

Re-deploy if prompted.

## 4. Add a KV namespace (enables tiny share links)
The same worker also turns big share links into short codes (`.../#p=...`) by storing the
plan. This needs one free KV namespace:
1. **Workers & Pages → KV → Create a namespace.** Name it e.g. `leysin-plans`.
2. Open your worker → **Settings → Bindings → Add → KV namespace.**
3. Variable name: `TRIP_KV`  →  select the `leysin-plans` namespace. Save and re-deploy.

(If you skip this, sharing still works — it just falls back to the longer self-contained link.)

## 5. Connect the site
1. Open the planner: https://bamuzal.github.io/leysin-trip/
2. Click **Ask Claude → Settings** (gear).
3. Paste the **Worker URL** and the **passphrase** you chose. Save.
4. These are stored only in your browser. To give family the assistant with no setup, use
   **Copy invite link for family** in that same Settings panel.

Share links are created with the **Copy share link** button on the Overview tab. With the
KV namespace bound, the editor (anyone with the worker + passphrase configured) gets a tiny
`#p=` link; everyone else can still open it with no setup, because the link carries the
worker address. Plans auto-expire from storage after ~180 days.

## 6. Use the assistant
Type things like:
- "Add a wine tasting in Yvorne on the 26th around 3pm."
- "Move the June 22 bike day dinner to 7:30pm."
- "Suggest a rainy-day backup for the 28th and add it."
- "Remove the optional drinks on the 20th."

Claude proposes specific changes; you review the preview and click **Confirm** before
anything touches your itinerary. Nothing is applied automatically.

## Security & cost notes
- The key lives only as an encrypted Worker secret. The browser only ever sees the worker URL + passphrase.
- The worker rejects requests from other origins, requires the passphrase, and caps model,
  token count, and body size. For extra protection, add a **Rate Limiting** rule to the
  worker route in the Cloudflare dashboard.
- Rotate or delete the key anytime in the Anthropic console; the planner keeps working
  without the assistant if the worker is unset.
