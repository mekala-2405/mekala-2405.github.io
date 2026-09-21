/// <reference types="@cloudflare/workers-types" />

/**
 * Static site + geo-switched analytics + SPA fallback, all in one Worker.
 *
 * `run_worker_first` (see wrangler.jsonc) makes this Worker run before assets
 * are served, so it can serve index.html for SPA routes and rewrite the HTML
 * at the edge for analytics.
 *
 * SPA fallback: any request whose path has no file extension (e.g. /projects/punchio)
 * receives index.html instead of a 404, letting the client-side router take over.
 *
 * Analytics:
 *   EU / EEA / UK   -> Cloudflare Web Analytics (cookieless, no consent banner)
 *   Everyone else   -> Google Analytics 4
 *   Unknown / Tor   -> cookieless (safe default; never risk GA4 on an EU visitor)
 *
 * Set these as Variables in the Cloudflare dashboard
 * (Workers & Pages > your project > Settings > Variables and Secrets):
 *   GA4_ID           e.g. G-XXXXXXXXXX
 *   CF_BEACON_TOKEN  your Cloudflare Web Analytics token
 * Leave one unset and that tracker simply isn't injected for its audience.
 */

interface Env {
  ASSETS: Fetcher;
  GA4_ID?: string;
  CF_BEACON_TOKEN?: string;
}

const CONSENT_REQUIRED = new Set<string>([
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU',
  'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  'IS', 'LI', 'NO',
  'GB',
]);

const NOT_FOUND_HTML = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Not found — Harsh Vardhan Reddy Mekala</title>
<meta name="robots" content="noindex" />
<style>body{background:#101010;color:#dedede;font-family:system-ui,sans-serif;display:grid;place-items:center;min-height:100vh;margin:0}a{color:#c9a84c}</style>
</head><body><main style="text-align:center">
<h1>404 — page not found</h1>
<p><a href="/">← Back to mharsh.me</a></p>
</main></body></html>`;

function notFound(): Response {
  return new Response(NOT_FOUND_HTML, {
    status: 404,
    headers: { 'content-type': 'text/html; charset=UTF-8', 'cache-control': 'no-store' },
  });
}

function withAnalytics(response: Response, request: Request, env: Env): Response {
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) return response;

  const country = (request.headers.get('cf-ipcountry') || '').toUpperCase();
  const cookieless =
    country === '' || country === 'XX' || country === 'T1' || CONSENT_REQUIRED.has(country);

  let snippet = '';
  if (cookieless) {
    if (env.CF_BEACON_TOKEN) {
      snippet = `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token":"${env.CF_BEACON_TOKEN}"}'></script>`;
    }
  } else if (env.GA4_ID) {
    snippet =
      `<script async src="https://www.googletagmanager.com/gtag/js?id=${env.GA4_ID}"></script>` +
      `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${env.GA4_ID}');</script>`;
  }

  if (!snippet) return response;

  return new HTMLRewriter()
    .on('head', {
      element(el) {
        el.append(snippet, { html: true });
      },
    })
    .transform(response);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Normalize trailing slash (except root) so /projects/x/ matches /projects/x.
    let path = url.pathname;
    if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);

    // Extensionless URLs are app routes, not files. Only known routes serve
    // the site root — everything else is a real 404. Previously every such
    // path (e.g. /project_gig) served the homepage with a 200, which looks
    // like a soft-404/duplicate to Google.
    // NOTE: /privacy is exempt — the asset service strips the .html and
    // serves privacy.html's content at /privacy, so redirecting between the
    // two forms loops forever. /privacy.html itself 307s to /privacy.
    if (!path.match(/\.\w+$/) && path !== '/privacy') {
      if (path === '/') {
        url.pathname = '/';
      } else if (/^\/projects\/[^/]+$/.test(path)) {
        // Project detail page — serve the pre-rendered file when the build
        // produced one. The asset service only serves a directory's index.html
        // for the trailing-slash path, so request that shape explicitly.
        // Unknown slugs 404 here and fall back to the homepage, where the
        // client-side router sends the visitor home.
        const dirUrl = new URL(url.toString());
        dirUrl.pathname = `${path}/`;
        const direct = await env.ASSETS.fetch(new Request(dirUrl.toString(), request));
        const directType = direct.headers.get('content-type') || '';
        if (direct.ok && directType.includes('text/html')) {
          return withAnalytics(direct, request, env);
        }
        url.pathname = '/';
      } else {
        return notFound();
      }
    }

    const response = await env.ASSETS.fetch(new Request(url.toString(), request));
    return withAnalytics(response, request, env);
  },
} satisfies ExportedHandler<Env>;
