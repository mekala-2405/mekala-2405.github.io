# Portfolio — Harsh Vardhan Reddy Mekala

Single-page portfolio. Vite + TypeScript, deployed on Cloudflare Pages with
geo-switched, privacy-first analytics.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # type-checks with tsc, then bundles to dist/
npm run preview  # preview the built dist/ locally
```

## Edit content

All content lives in **`src/data.ts`** — a single typed `DATA` object.
Add or reorder a project / skill / job / publication by editing its array.
Array order = display order (first project becomes `_01.`). TypeScript will
flag a typo or missing field before it ever ships.

Project hover previews: set `preview: true` only when `live` is a site that
allows iframe embedding (your own sites usually do). GitHub repo pages and
some hosts block embedding — use `preview: false` there and the card shows a
lettered placeholder instead of a blank frame.

## Analytics (who visited)

Analytics show **aggregate** visits — count, country, referrer, device, top
pages — never personal identities. `functions/_middleware.ts` runs at the
Cloudflare edge and picks the tracker by visitor country:

| Visitor location   | Tracker                         | Cookie banner |
| ------------------ | ------------------------------- | ------------- |
| EU / EEA / UK      | Cloudflare Web Analytics        | Not needed    |
| Everywhere else    | Google Analytics 4              | Not needed*   |
| Unknown / Tor      | Cloudflare (cookieless)         | Not needed    |

\* GA4 needs a privacy notice (included at `/privacy.html`), not a blocking banner.

### One-time setup on Cloudflare Pages

1. Push this repo to GitHub and create a Pages project from it.
2. Build command: `npm run build` · Output directory: `dist`
3. **Settings → Environment variables** add:
   - `GA4_ID` = your GA4 Measurement ID (`G-XXXXXXXXXX`)
   - `CF_BEACON_TOKEN` = your Cloudflare Web Analytics token
     (Cloudflare dashboard → Web Analytics → add a site → copy the token)
4. Redeploy. Leaving either variable unset simply disables that tracker for its audience.

Do **not** also enable Cloudflare's automatic Web Analytics injection for this
project — the middleware injects the beacon itself, and auto-injection would
double it.

## Structure

```
index.html              shell (fonts, pre-paint theme, static scaffold)
src/
  main.ts               render + interactions (typed)
  data.ts               ← edit content here
  types.ts              content shape
  styles.css
functions/
  _middleware.ts        edge geo-switch analytics injection
public/
  privacy.html          privacy notice (copied to /privacy.html)
```
