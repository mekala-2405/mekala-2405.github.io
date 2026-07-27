import './styles.css';
import { DATA } from './data';
import type { ListItem } from './types';

/* ---------- tiny DOM helpers (typed) ---------- */
function byId<T extends HTMLElement = HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Element #${id} not found`);
  return el as T;
}
function qs<T extends HTMLElement = HTMLElement>(sel: string): T | null {
  return document.querySelector<T>(sel);
}

const html = String.raw;

const FLOWER =
  '<svg class="flower" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.4 6.9L21 4.5l-4.5 5.4L24 12l-7.5 2.1L21 19.5l-6.6-2.4L12 24l-2.4-6.9L3 19.5l4.5-5.4L0 12l7.5-2.1L3 4.5l6.6 2.4z"/></svg>';

const secTitle = (t: string) => `<div class="sec-title reveal">${FLOWER}<h2>${t}</h2><div class="rule"></div></div>`;

const ICONS: Record<string, string> = {
  github:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7L22 6"/></svg>',
};

function renderApp(): void {
  const d = DATA;

  const statHtml = d.stats
    .map(
      (s, i) => html`
        <div class="stat reveal reveal-${(i % 4) + 1}"><h5 data-count="${s.value}" data-suffix="${s.suffix}">0</h5><p>${s.label}</p></div>`
    )
    .join('');

  const skillsHtml = d.skills
    .map(
      (g) => html`
        <div class="skills-group">
          <p class="skills-group-label">${g.group}</p>
          <div class="skills-list">${g.items.map((x) => `<span class="skill-tag">${x}</span>`).join('')}</div>
        </div>`
    )
    .join('');

  const aboutHtml = d.about.map((p) => `<p>${p}</p>`).join('');

  const expHtml = d.experience
    .map(
      (e) => html`
        <div class="work-item reveal reveal-1">
          <div class="work-meta">
            <p class="work-company">${e.company}</p>
            <p class="work-period">${e.period}</p>
          </div>
          <div>
            <h3 class="work-role display">${e.role}</h3>
            <p class="work-desc">${e.desc}</p>
            <div class="work-tags">${e.tags.map((t) => `<span class="work-tag">${t}</span>`).join('')}</div>
          </div>
        </div>`
    )
    .join('');

  const projHtml = d.projects
    .map((p, i) => {
      const num = '_' + String(i + 1).padStart(2, '0') + '.';
      const titleTag = p.live || p.github;
      const nameEl = titleTag
        ? `<a class="project-name display" href="${titleTag}" target="_blank" rel="noopener" data-cursor>${p.name} <span class="arw">↗</span></a>`
        : `<h3 class="project-name display">${p.name}</h3>`;
      const links = [
        p.live ? `<a class="project-link" href="${p.live}" target="_blank" rel="noopener" data-cursor>Live demo ↗</a>` : '',
        p.github ? `<a class="project-link" href="${p.github}" target="_blank" rel="noopener" data-cursor>GitHub ↗</a>` : '',
      ]
        .filter(Boolean)
        .join('');
      const media =
        p.preview && p.live
          ? html`<div class="project-media" data-live="${p.live}">
                   <iframe title="${p.name} preview" loading="lazy" data-src="${p.live}" scrolling="no"></iframe>
                   <a class="open-live" href="${p.live}" target="_blank" rel="noopener" data-cursor><span>Open live ↗</span></a>
                 </div>`
          : html`<div class="project-media"><div class="ph"><span>${p.name.charAt(0)}</span></div>
                   ${p.live ? `<a class="open-live" href="${p.live}" target="_blank" rel="noopener" data-cursor><span>Open live ↗</span></a>` : ''}
                 </div>`;
      return html`
        <div class="project-card reveal reveal-${(i % 4) + 1}">
          <div class="project-body">
            <p class="project-num">${num}</p>
            ${nameEl}
            <p class="project-desc">${p.desc}</p>
            <div class="project-tech">${p.tech.map((t) => `<span>${t}</span>`).join('')}</div>
            ${links ? `<div class="project-links">${links}</div>` : ''}
          </div>
          ${media}
        </div>`;
    })
    .join('');

  const listRows = (arr: ListItem[]) =>
    arr
      .map(
        (x) => html`
        <div class="list-row">
          <div><p class="list-title">${x.title}</p><p class="list-meta">${x.meta}</p></div>
          <a class="list-link" href="${x.link}" target="_blank" rel="noopener" data-cursor>${x.cta} ↗</a>
        </div>`
      )
      .join('');

  byId('app').innerHTML = html`
    <section id="hero">
      <div class="hero-glow"></div>
      <div class="container">
        <p class="hero-eyebrow reveal">${d.role}</p>
        <div class="hero-firstname display reveal reveal-1">${d.name}</div>
        <h1 class="hero-name display">${d.lastName}</h1>
        <div class="hero-words reveal reveal-2">
          <div class="hw-line"><span class="hw-back display">ROBOTICS</span><span class="hw-front display">ROBOTICS</span></div>
          <div class="hw-line"><span class="hw-back display">AUTOMATION</span><span class="hw-front display">AUTOMATION</span></div>
        </div>
        <p class="hero-desc reveal reveal-3">${d.tagline}</p>
        <div class="hero-cta reveal reveal-3">
          <a href="#contact" class="btn btn-primary" data-cursor>Let's talk</a>
          <a href="#projects" class="btn btn-ghost" data-cursor>View work</a>
        </div>
        <div class="hero-avail reveal reveal-4"><span class="dot"></span> Available for opportunities</div>
        <div class="hero-stats">${statHtml}</div>
      </div>
    </section>

    <section id="about"><div class="container">
      ${secTitle('About Me')}
      <div class="about-grid">
        <div class="about-bio reveal reveal-1">${aboutHtml}</div>
        <div class="reveal reveal-2">${skillsHtml}</div>
      </div>
    </div></section>

    <section id="experience"><div class="container">
      ${secTitle('Experience')}
      ${expHtml}
    </div></section>

    <section id="projects"><div class="container">
      ${secTitle('Projects')}
      <div class="projects">${projHtml}</div>
    </div></section>

    <section id="publications"><div class="container">
      ${secTitle('Publications & Certifications')}
      <div class="reveal reveal-1">${listRows(d.publications)}${listRows(d.certifications)}</div>
    </div></section>

    <section id="contact"><div class="container">
      <p class="contact-eyebrow reveal">What's next</p>
      <h2 class="contact-heading display reveal reveal-1">LET'S BUILD<br>SOMETHING</h2>
      <p class="contact-sub reveal reveal-2">Open to internships, collaborations, and interesting problems in robotics and AI.</p>
      <a href="mailto:${d.email}" class="btn btn-primary reveal reveal-3" data-cursor>Say hello</a>
    </div></section>`;

  byId('sideLeft').innerHTML =
    `<a href="${d.socials.github}" target="_blank" rel="noopener" data-cursor aria-label="GitHub">${ICONS.github}</a>` +
    `<a href="${d.socials.linkedin}" target="_blank" rel="noopener" data-cursor aria-label="LinkedIn">${ICONS.linkedin}</a>` +
    `<a href="mailto:${d.email}" data-cursor aria-label="Email">${ICONS.mail}</a>`;
  byId('sideRight').innerHTML = `<a href="mailto:${d.email}" class="email-vert" data-cursor>${d.email}</a>`;

  byId('footerCopy').textContent = `© 2026 ${d.name} Mekala`;
  byId('footerSocial').innerHTML =
    `<a href="${d.socials.github}" target="_blank" rel="noopener" data-cursor>GitHub</a>` +
    `<a href="${d.socials.linkedin}" target="_blank" rel="noopener" data-cursor>LinkedIn</a>` +
    `<a href="${d.website}" target="_blank" rel="noopener" data-cursor>mharsh.me</a>` +
    `<a href="/privacy.html" data-cursor>Privacy</a>`;
}

function init(): void {
  // reveal on scroll
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // count-up stats
  const cio = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target.querySelector<HTMLElement>('[data-count]') ?? (e.target as HTMLElement);
        const target = Number(el.dataset.count ?? '0');
        const suffix = el.dataset.suffix ?? '';
        let cur = 0;
        const step = Math.max(1, Math.round(target / 20));
        const t = window.setInterval(() => {
          cur += step;
          if (cur >= target) {
            cur = target;
            window.clearInterval(t);
          }
          el.textContent = cur + suffix;
        }, 45);
        cio.unobserve(e.target);
      }),
    { threshold: 0.6 }
  );
  document.querySelectorAll<HTMLElement>('.stat').forEach((el) => cio.observe(el));

  // load project iframe previews on hover (perf: not upfront)
  document.querySelectorAll<HTMLIFrameElement>('.project-media[data-live] iframe[data-src]').forEach((f) => {
    const card = f.closest('.project-card');
    if (!card) return;
    const load = () => {
      const src = f.dataset.src;
      if (src) {
        f.src = src;
        delete f.dataset.src;
        f.addEventListener('load', () => f.classList.add('shown'));
      }
    };
    card.addEventListener('mouseenter', load);
    // also load when scrolled into view (touch devices have no hover)
    new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          load();
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    ).observe(card);
  });

  // scroll progress + hero fade
  const bar = byId('progress');
  const heroInner = qs('#hero .container');
  window.addEventListener(
    'scroll',
    () => {
      const h = document.documentElement;
      bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + '%';
      if (heroInner && h.scrollTop < window.innerHeight) {
        heroInner.style.transform = `translateY(${-h.scrollTop * 0.2}px)`;
        heroInner.style.opacity = String(Math.max(0, 1 - h.scrollTop / (window.innerHeight * 0.75)));
      }
    },
    { passive: true }
  );

  // theme toggle (initial theme set pre-paint in index.html)
  byId('themeToggle').addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', cur);
    localStorage.setItem('theme', cur);
  });

  // custom cursor (pointer:fine only, respects reduced motion)
  if (window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const dot = qs('.cursor-dot');
    const ring = qs('.cursor-ring');
    if (dot && ring) {
      let mx = 0,
        my = 0,
        rx = 0,
        ry = 0;
      window.addEventListener('mousemove', (e) => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
      });
      const loop = () => {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        requestAnimationFrame(loop);
      };
      loop();
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', () => ring.classList.add('hover'));
        el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
      });
    }
  }
}

// Preloader -> hero MEKALA morph (FLIP). Feels like MEKALA was there all along.
function runIntro(): void {
  const pre = byId('preloader');
  const preName = byId('preName');
  const heroName = qs('.hero-name');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce || !heroName) {
    pre.classList.add('done');
    return;
  }

  const a = preName.getBoundingClientRect();
  const b = heroName.getBoundingClientRect();
  const dx = b.left - a.left;
  const dy = b.top - a.top;
  const scale = b.width / a.width;

  heroName.style.opacity = '0';
  preName.style.transformOrigin = 'top left';

  requestAnimationFrame(() => {
    pre.style.transition = 'background 0.9s ease';
    pre.style.background = 'transparent';
    preName.style.transition = 'transform 0.9s cubic-bezier(0.7,0,0.2,1)';
    preName.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
  });

  preName.addEventListener(
    'transitionend',
    () => {
      heroName.style.opacity = '1';
      pre.classList.add('done');
    },
    { once: true }
  );
}

// preloader letters
byId('preName').innerHTML = DATA.lastName
  .split('')
  .map((c, i) => `<span style="animation-delay:${i * 0.05}s">${c}</span>`)
  .join('');

renderApp();
init();

window.addEventListener('load', () => {
  const start = () => window.setTimeout(runIntro, 950);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(start);
  else start();
});
