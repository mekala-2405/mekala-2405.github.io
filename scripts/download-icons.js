/**
 * Download SVG icons from freeicons.io.
 *
 * Usage:
 *   1. Open the freeicons.io icon page in your browser
 *   2. Open DevTools Console
 *   3. Paste and run:
 *      fetch('https://freeicons.io/icon/42303')
 *        .then(r => r.text())
 *        .then(html => {
 *          const m = html.match(/<svg[^>]*>.*?<\/svg>/s);
 *          if (m) console.log(m[0]);
 *        })
 *
 * Icon IDs (freeicons.io):
 *   GitHub    — https://freeicons.io/icon/42303
 *   LinkedIn  — https://freeicons.io/icon/42568
 *   Discord   — https://freeicons.io/icon/45889
 *   Mail      — https://freeicons.io/icon/43445
 */

// Known icon IDs on freeicons.io
const ICONS = {
  github: 42303,
  linkedin: 42568,
  discord: 45889,
  mail: 43445,
};
