// Pre-render one static HTML file per project route so crawlers (and no-JS
// visitors) get real content without running JavaScript.
//
// Runs after `vite build`: reads dist/index.html as the template, swaps the
// head tags per project (same values the client-side router sets at runtime),
// and injects a static snapshot of the project detail into <main id="app">.
// The client router replaces that snapshot on load, so visitors see no difference.
import { execSync } from 'node:child_process';
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const tmp = join(root, '.prerender-tmp');

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

try {
  execSync(
    'npx tsc src/data.ts src/types.ts --outDir .prerender-tmp --module es2020 --target es2020 --moduleResolution bundler --skipLibCheck',
    { cwd: root, stdio: 'inherit' },
  );
  const { DATA } = await import(join(tmp, 'data.js'));

  const template = readFileSync(join(root, 'dist', 'index.html'), 'utf8');
  if (!template.includes('<main id="app"></main>')) {
    throw new Error('template marker <main id="app"></main> not found in dist/index.html');
  }

  for (const p of DATA.projects) {
    const title = `${p.name} — Projects by Harsh Vardhan Reddy Mekala`;
    const url = `https://mharsh.me/projects/${p.slug}`;
    const tech = p.tech.map((t) => `<span>${esc(t)}</span>`).join('');
    const links = [
      p.live ? `<a href="${esc(p.live)}" rel="noopener">Live demo ↗</a>` : '',
      p.github ? `<a href="${esc(p.github)}" rel="noopener">GitHub ↗</a>` : '',
    ]
      .filter(Boolean)
      .join(' ');
    const snapshot =
      `<section class="proj-detail"><div class="container">` +
      `<a class="proj-detail-back" href="/#projects">← Back to projects</a>` +
      `<h1 class="proj-detail-title display">${esc(p.name)}</h1>` +
      `<p class="proj-detail-desc">${esc(p.desc)}</p>` +
      `<div class="project-tech">${tech}</div>` +
      (links ? `<div class="proj-detail-links">${links}</div>` : '') +
      `</div></section>`;

    const html = template
      .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
      .replace(/(<meta name="description" content=").*?(")/, `$1${esc(p.desc)}$2`)
      .replace(/(<link rel="canonical" href=").*?(")/, `$1${url}$2`)
      .replace(/(<meta property="og:title" content=").*?(")/, `$1${esc(`${p.name} | Harsh Vardhan Reddy Mekala`)}$2`)
      .replace(/(<meta property="og:description" content=").*?(")/, `$1${esc(p.desc)}$2`)
      .replace(/(<meta property="og:url" content=").*?(")/, `$1${url}$2`)
      .replace('<main id="app"></main>', `<main id="app">${snapshot}</main>`);

    const dir = join(root, 'dist', 'projects', p.slug);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
    console.log(`prerendered /projects/${p.slug}`);
  }

  // Homepage hero: inline the key text (role, name, headline) so crawlers see
  // real content before JavaScript runs. The client router replaces this
  // snapshot on load, so visitors see no difference. Plain classes only (no
  // `reveal`) so the text stays visible even with JS disabled.
  const homePath = join(root, 'dist', 'index.html');
  const home = readFileSync(homePath, 'utf8');
  const heroSnapshot =
    `<section id="hero"><div class="container">` +
    `<p class="hero-eyebrow">${esc(DATA.role)}</p>` +
    `<div class="hero-firstname display">${esc(DATA.name)}</div>` +
    `<h1 class="hero-name display">${esc(DATA.lastName)}</h1>` +
    `<p class="hero-desc">${DATA.tagline}</p>` +
    `</div></section>`;
  writeFileSync(homePath, home.replace('<main id="app"></main>', `<main id="app">${heroSnapshot}</main>`));
  console.log('homepage hero inlined');

  // Sitemap: keep public/sitemap.xml as the source for the static entries
  // (home, privacy) and inject one entry per pre-rendered project page, so
  // the sitemap can never go stale when slugs change.
  const today = new Date().toISOString().slice(0, 10);
  const sitemapPath = join(root, 'dist', 'sitemap.xml');
  const projectUrls = DATA.projects
    .map(
      (p) =>
        `  <url>\n    <loc>https://mharsh.me/projects/${p.slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
    )
    .join('\n');
  const sitemap = readFileSync(sitemapPath, 'utf8').replace('</urlset>', `${projectUrls}\n</urlset>`);
  writeFileSync(sitemapPath, sitemap);
  console.log(`sitemap updated with ${DATA.projects.length} project URLs`);
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
