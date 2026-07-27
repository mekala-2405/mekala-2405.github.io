/// <reference types="@cloudflare/workers-types" />

/**
 * Geo-switched analytics, injected at the Cloudflare edge.
 *
 *   EU / EEA / UK  -> Cloudflare Web Analytics (cookieless, no consent banner)
 *   Everyone else  -> Google Analytics 4
 *   Unknown country -> cookieless (safe default)
 *
 * Country comes from the `cf-ipcountry` header Cloudflare sets on every request,
 * so detection is server-side and reliable — no client-side guessing.
 *
 * Set these in the Cloudflare Pages dashboard (Settings > Environment variables):
 *   GA4_ID           e.g. G-XXXXXXXXXX
 *   CF_BEACON_TOKEN  your Cloudflare Web Analytics token
 * Leave one unset and that tracker simply isn't injected for its audience.
 */

interface Env {
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

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, next, env } = context;
  const response = await next();

  // Only rewrite HTML documents.
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) return response;

  const country = (request.headers.get('cf-ipcountry') || '').toUpperCase();
  // Unknown ('', 'XX') and Tor ('T1') default to cookieless — never risk GA4 on an EU visitor.
  const cookieless = country === '' || country === 'XX' || country === 'T1' || CONSENT_REQUIRED.has(country);

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
};
