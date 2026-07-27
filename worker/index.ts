/// <reference types="@cloudflare/workers-types" />

/**
 * Static site + geo-switched analytics, all in one Worker.
 *
 * `run_worker_first` (see wrangler.jsonc) makes this Worker run before assets
 * are served, so it can fetch the static file and rewrite the HTML at the edge:
 *
 *   EU / EEA / UK   -> Cloudflare Web Analytics (cookieless, no consent banner)
 *   Everyone else   -> Google Analytics 4
 *   Unknown / Tor   -> cookieless (safe default; never risk GA4 on an EU visitor)
 *
 * Country comes from the `cf-ipcountry` header Cloudflare sets on every request.
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

// Countries where a cookie/consent banner would otherwise be required for GA4.
const CONSENT_REQUIRED = new Set<string>([
  // EU
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU',
  'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  // EEA (non-EU)
  'IS', 'LI', 'NO',
  // UK
  'GB',
]);

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const response = await env.ASSETS.fetch(request);

    // Only rewrite HTML documents; pass CSS/JS/images through untouched.
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
  },
} satisfies ExportedHandler<Env>;
