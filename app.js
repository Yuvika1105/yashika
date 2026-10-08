/* ============================================================
   🎂 BIRTHDAY WEBSITE — app.js (Clean Flow)
   ============================================================ */

'use strict';

const state = {
  envelopeOpened: false,
  reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
};

let dom = {};

const BALLOON_PALETTES = [
  { body: '#f48fb1', shadow: '#d4607e', shine: 'rgba(255,255,255,0.42)' },
  { body: '#ce93d8', shadow: '#9c5fa8', shine: 'rgba(255,255,255,0.40)' },
  { body: '#ffcc80', shadow: '#e8a040', shine: 'rgba(255,255,255,0.38)' },
  { body: '#80cbc4', shadow: '#4e9c97', shine: 'rgba(255,255,255,0.38)' },
  { body: '#f06292', shadow: '#c0306a', shine: 'rgba(255,255,255,0.40)' },
  { body: '#aed581', shadow: '#7da542', shine: 'rgba(255,255,255,0.38)' },
  { body: '#90caf9', shadow: '#5090c0', shine: 'rgba(255,255,255,0.40)' },
];

const CONFETTI_COLORS = [
  '#f06292', '#ce93d8', '#64b5f6', '#ffd54f',
  '#aed581', '#ff8a65', '#4dd0e1', '#f48fb1',
];

document.addEventListener('DOMContentLoaded', () => {
  cacheDom();
  applyBirthdayData();
  initParticles();
  initScrollObserver();
  initScrollListener();
  initNavDots();
  populateTimeline();
  populateFamily();
  populateFriends();
  populateQuotes();
  populatePolaroids();
  populateFifteenThings();

  dom.envelopeWrapper.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openEnvelope();
    }
  });
});

function cacheDom() {
  dom = {
    sceneEnvelope: document.getElementById('scene-envelope'),
    sceneReveal: document.getElementById('scene-reveal'),
    mainContent: document.getElementById('main-content'),
    envelopeWrapper: document.getElementById('envelope-wrapper'),
    envParticles: document.getElementById('env-particles'),
    lightFlash: document.getElementById('light-flash'),
    revealDecorations: document.getElementById('reveal-decorations'),
    headlineAge: document.getElementById('headline-age'),
    headlineName: document.getElementById('headline-name'),
    heroPhoto: document.getElementById('hero-photo'),
    photoSparkles: document.getElementById('photo-sparkles'),
    timelineContainer: document.getElementById('timeline-container'),
    familyGrid: document.getElementById('family-grid'),
    friendsGrid: document.getElementById('friends-grid'),
    quotesTrack: document.getElementById('quotes-track'),
    polaroidGrid: document.getElementById('polaroid-grid'),
    fifteenGrid: document.getElementById('fifteen-grid'),
    sectionNav: document.getElementById('section-nav'),
    finaleConfetti: document.getElementById('finale-confetti'),
    envNameText: document.getElementById('env-name-text'),
    envTagline: document.getElementById('env-tagline-text'),
  };
}

function applyBirthdayData() {
  const d = BIRTHDAY_DATA;

  if (dom.envNameText) dom.envNameText.textContent = d.envelope.to;
  if (dom.envTagline) dom.envTagline.textContent = d.envelope.tagline;

  const envBtn = document.getElementById('env-btn');
  if (envBtn) envBtn.textContent = d.envelope.buttonLabel;

  if (dom.headlineAge) dom.headlineAge.textContent = `${d.age}th`;
  if (dom.headlineName) dom.headlineName.textContent = `Birthday, ${d.name} 💗`;

  const sub1 = document.getElementById('reveal-subtitle-1');
  const sub2 = document.getElementById('reveal-subtitle-2');
  if (sub1) sub1.textContent = d.reveal.subtitle;
  if (sub2) sub2.textContent = d.reveal.subtext;

  const scrollPromptText = document.getElementById('scroll-prompt-text');
  const scrollCtaText = document.getElementById('scroll-cta-text');
  if (scrollPromptText) scrollPromptText.textContent = d.reveal.scrollPrompt;
  if (scrollCtaText) scrollCtaText.innerHTML = `${d.reveal.scrollCTA} <span class="scroll-arrow">↓</span>`;

  if (dom.heroPhoto) {
    dom.heroPhoto.src = d.heroPhoto;
    dom.heroPhoto.alt = `Birthday girl — ${d.name}`;
  }

  const photoCap = document.getElementById('photo-caption');
  if (photoCap) photoCap.textContent = `The birthday girl ✨`;

  const introTitle = document.getElementById('intro-title');
  if (introTitle) introTitle.textContent = d.intro.title;

  setTextContent('family-title', d.family.title);
  setTextContent('family-subtitle', d.family.subtitle);
  setTextContent('friends-title', d.friends.title);
  setTextContent('friends-subtitle', d.friends.subtitle);
  setTextContent('finale-title', d.finale.title);
  setTextContent('finale-message', d.finale.message);
  setTextContent('finale-signoff', d.finale.signoff);
  setTextContent('finale-small', d.finale.smallText);

  document.title = `Happy ${d.age}th Birthday, ${d.name}! 💗`;
}

function setTextContent(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function initParticles() {
  if (state.reducedMotion) return;
  const container = dom.envParticles;
  if (!container) return;

  const count = window.innerWidth < 600 ? 14 : 26;

  for (let i = 0; i < count; i++) {
    const type = Math.random() < 0.35 ? 'heart'
      : Math.random() < 0.5 ? 'sparkle'
        : 'star';
    const el = document.createElement('span');
    el.classList.add('particle', type);

    const left = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = 10 + Math.random() * 14;

    el.style.left = `${left}%`;
    el.style.animationDelay = `${delay}s`;
    el.style.animationDuration = `${duration}s`;

    if (type === 'heart') {
      el.textContent = ['💗', '🌸', '✨', '💕'][Math.floor(Math.random() * 4)];
      el.style.fontSize = `${9 + Math.random() * 8}px`;
      el.style.opacity = String(0.3 + Math.random() * 0.3);
    } else if (type === 'sparkle') {
      el.style.width = `${3 + Math.random() * 4}px`;
      el.style.height = el.style.width;
      el.style.background = `radial-gradient(circle, rgba(255,220,240,0.9), transparent)`;
      el.style.opacity = String(0.4 + Math.random() * 0.4);
    } else {
      el.textContent = '✦';
      el.style.fontSize = `${7 + Math.random() * 6}px`;
      el.style.color = `hsl(${300 + Math.random() * 70}, 65%, 80%)`;
      el.style.opacity = String(0.3 + Math.random() * 0.3);
    }

    container.appendChild(el);
  }
}

window.openEnvelope = function () {
  if (state.envelopeOpened) return;
  state.envelopeOpened = true;

  const wrapper = dom.envelopeWrapper;
  wrapper.classList.add('opening');
  wrapper.style.pointerEvents = 'none';

  const flashDelay = state.reducedMotion ? 80 : 900;
  const revealDelay = state.reducedMotion ? 180 : 1250;

  setTimeout(triggerLightFlash, flashDelay);
  setTimeout(showReveal, revealDelay);
};

function triggerLightFlash() {
  const el = dom.lightFlash;
  if (!el) return;
  el.classList.add('flashing');
  el.addEventListener('animationend', () => el.classList.remove('flashing'), { once: true });
}

function showReveal() {
  dom.sceneEnvelope.classList.add('hiding');
  setTimeout(() => dom.sceneEnvelope.classList.add('hidden'), 850);

  // Show main content naturally
  dom.mainContent.classList.add('visible');

  if (!state.reducedMotion) {
    spawnBalloons();
    spawnConfetti();
    addPhotoSparkles();
  }

  if (dom.sectionNav) {
    dom.sectionNav.classList.add('visible');
  }
}

function spawnBalloons() {
  const container = dom.revealDecorations;
  if (!container) return;

  const isMobile = window.innerWidth < 600;
  const totalCount = isMobile ? 6 : 12;

  for (let i = 0; i < totalCount; i++) {
    setTimeout(() => createBalloon(container), i * 280 + Math.random() * 150);
  }

  let extra = 0;
  const trickle = setInterval(() => {
    if (extra++ > 6) { clearInterval(trickle); return; }
    createBalloon(container);
  }, 700);
}

function createBalloon(container) {
  const palette = BALLOON_PALETTES[Math.floor(Math.random() * BALLOON_PALETTES.length)];
  const size = 44 + Math.random() * 28;
  const left = 5 + Math.random() * 90;
  const duration = 7 + Math.random() * 6;
  const delay = Math.random() * 0.4;
  const lean = (Math.random() - 0.5) * 10;
  const stringH = 60 + Math.random() * 50;

  const bW = size;
  const bH = size * 1.15;
  const kW = bW * 0.18;
  const kH = bH * 0.08;

  const wrap = document.createElement('div');
  wrap.classList.add('balloon-wrap');
  wrap.style.left = `${left}%`;
  wrap.style.setProperty('--lean', `${lean}deg`);
  wrap.style.animationDuration = `${duration}s`;
  wrap.style.animationDelay = `${delay}s`;
  wrap.style.setProperty('--string-h', `${stringH}px`);

  const svgNS = 'http://www.w3.org/2000/svg';
  const svgWrap = document.createElement('div');
  svgWrap.classList.add('balloon-svg-wrap');

  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('width', String(bW));
  svg.setAttribute('height', String(bH + kH));
  svg.setAttribute('viewBox', `0 0 ${bW} ${bH + kH}`);
  svg.setAttribute('fill', 'none');
  svg.setAttribute('aria-hidden', 'true');

  const cx = bW / 2;
  const cy = bH / 2;
  const rx = bW / 2 - 1;

  const shadow = document.createElementNS(svgNS, 'ellipse');
  shadow.setAttribute('cx', String(cx + 3));
  shadow.setAttribute('cy', String(cy + 4));
  shadow.setAttribute('rx', String(rx));
  shadow.setAttribute('ry', String(bH * 0.5 - 1));
  shadow.setAttribute('fill', 'rgba(0,0,0,0.08)');
  svg.appendChild(shadow);

  const body = document.createElementNS(svgNS, 'ellipse');
  body.setAttribute('cx', String(cx));
  body.setAttribute('cy', String(cy));
  body.setAttribute('rx', String(rx));
  body.setAttribute('ry', String(bH * 0.5 - 1));
  body.setAttribute('fill', palette.body);
  svg.appendChild(body);

  const shine = document.createElementNS(svgNS, 'ellipse');
  shine.setAttribute('cx', String(cx - rx * 0.28));
  shine.setAttribute('cy', String(cy - bH * 0.22));
  shine.setAttribute('rx', String(rx * 0.3));
  shine.setAttribute('ry', String(bH * 0.18));
  shine.setAttribute('fill', palette.shine);
  shine.setAttribute('transform', `rotate(-25, ${cx - rx * 0.28}, ${cy - bH * 0.22})`);
  svg.appendChild(shine);

  const edge = document.createElementNS(svgNS, 'ellipse');
  edge.setAttribute('cx', String(cx + rx * 0.3));
  edge.setAttribute('cy', String(cy + bH * 0.1));
  edge.setAttribute('rx', String(rx * 0.25));
  edge.setAttribute('ry', String(bH * 0.22));
  edge.setAttribute('fill', palette.shadow);
  edge.setAttribute('opacity', '0.22');
  svg.appendChild(edge);

  const kX1 = cx - kW / 2;
  const kX2 = cx + kW / 2;
  const kY0 = bH - 2;
  const kY1 = bH + kH;
  const knot = document.createElementNS(svgNS, 'polygon');
  knot.setAttribute('points', `${kX1},${kY0} ${kX2},${kY0} ${cx},${kY1}`);
  knot.setAttribute('fill', palette.shadow);
  svg.appendChild(knot);

  svgWrap.appendChild(svg);
  wrap.appendChild(svgWrap);

  const string = document.createElement('div');
  string.classList.add('balloon-string');
  string.style.height = `${stringH}px`;
  wrap.appendChild(string);

  container.appendChild(wrap);

  const removeDuration = (duration + delay + 1) * 1000;
  setTimeout(() => { try { container.removeChild(wrap); } catch (e) { } }, removeDuration);
}

function spawnConfetti() {
  const container = dom.revealDecorations;
  if (!container) return;

  const isMobile = window.innerWidth < 600;
  const count = isMobile ? 28 : 56;

  for (let i = 0; i < count; i++) {
    setTimeout(() => createConfettiPiece(container), i * 35);
  }
}

function createConfettiPiece(container) {
  const el = document.createElement('div');
  el.classList.add('confetti-piece');
  const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
  const left = Math.random() * 100;
  const size = 6 + Math.random() * 8;
  const duration = 3 + Math.random() * 4;
  const delay = Math.random() * 2;

  Object.assign(el.style, {
    left: `${left}%`,
    width: `${size}px`,
    height: `${size + 3}px`,
    backgroundColor: color,
    borderRadius: Math.random() > 0.5 ? '50%' : '2px',
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
  });

  container.appendChild(el);
  setTimeout(() => { try { container.removeChild(el); } catch (e) { } }, (duration + delay + 1.5) * 1000);
}

function addPhotoSparkles() {
  const container = dom.photoSparkles;
  if (!container) return;

  const positions = [
    { top: '2%', left: '2%' },
    { top: '8%', right: '4%' },
    { top: '45%', left: '-10%' },
    { top: '40%', right: '-8%' },
    { top: '85%', left: '5%' },
    { top: '80%', right: '8%' },
  ];

  positions.forEach((pos, i) => {
    const dot = document.createElement('div');
    dot.classList.add('sparkle-dot');
    Object.assign(dot.style, pos);
    const sz = `${6 + Math.random() * 6}px`;
    dot.style.width = sz;
    dot.style.height = sz;
    dot.style.animationDuration = `${1 + Math.random() * 1.4}s`;
    dot.style.animationDelay = `${i * 0.18}s`;
    container.appendChild(dot);
  });
}

function initScrollListener() {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

function handleScroll() {
  updateNavDots();
}

function initScrollObserver() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll(
      '.fade-in-up, .timeline-item, .family-card, .friend-card, .quote-item, .polaroid, .fifteen-item'
    ).forEach(el => el.classList.add('visible'));
    return;
  }

  const generalObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        generalObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.fade-in-up').forEach(el => generalObs.observe(el));

  const finaleSection = document.getElementById('section-finale');
  if (finaleSection) {
    const finaleObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        triggerFinaleConfetti();
        finaleObs.disconnect();
      }
    }, { threshold: 0.25 });
    finaleObs.observe(finaleSection);
  }
}

function triggerFinaleConfetti() {
  if (state.reducedMotion) return;
  const container = dom.finaleConfetti;
  if (!container) return;
  for (let i = 0; i < 72; i++) {
    setTimeout(() => createConfettiInEl(container), i * 36);
  }
}

function createConfettiInEl(container) {
  const el = document.createElement('div');
  const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
  const sz = 6 + Math.random() * 8;
  const dur = 3 + Math.random() * 3;
  const delay = Math.random() * 0.8;

  Object.assign(el.style, {
    position: 'absolute',
    top: '-20px',
    left: `${Math.random() * 100}%`,
    width: `${sz}px`,
    height: `${sz + 3}px`,
    backgroundColor: color,
    borderRadius: Math.random() > 0.5 ? '50%' : '2px',
    animationName: 'confettiFall',
    animationDuration: `${dur}s`,
    animationDelay: `${delay}s`,
    animationFillMode: 'forwards',
    animationTimingFunction: 'linear',
  });

  container.appendChild(el);
  setTimeout(() => { try { container.removeChild(el); } catch (e) { } }, (dur + delay + 1.5) * 1000);
}

function initNavDots() {
  document.querySelectorAll('.nav-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const target = document.getElementById(dot.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function updateNavDots() {
  const sections = document.querySelectorAll('.birthday-section[id]');
  const dots = document.querySelectorAll('.nav-dot');
  const midpoint = window.innerHeight * 0.5;
  let activeId = null;

  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= midpoint && rect.bottom >= midpoint) activeId = sec.id;
  });

  dots.forEach(dot => dot.classList.toggle('active', dot.dataset.target === activeId));
}

function populateTimeline() {
  const container = dom.timelineContainer;
  if (!container) return;

  BIRTHDAY_DATA.chapters.forEach((chapter, i) => {
    const item = document.createElement('div');
    item.classList.add('timeline-item');
    item.style.transitionDelay = `${i * 0.04}s`;

    const dot = document.createElement('div');
    dot.classList.add('timeline-dot');
    dot.textContent = chapter.emoji;
    dot.setAttribute('aria-hidden', 'true');

    const card = document.createElement('div');
    card.classList.add('timeline-card');
    card.style.setProperty('--card-accent', chapter.accent);
    card.innerHTML = `
      <p class="timeline-year">${chapter.year}</p>
      <p class="timeline-age">Age ${chapter.age}</p>
      <h3 class="timeline-title">${escHtml(chapter.title)}</h3>
      <p class="timeline-story">${escHtml(chapter.story)}</p>
    `;

    if (chapter.photo) {
      const photoWrap = document.createElement('div');
      photoWrap.classList.add('timeline-photo-wrapper');
      const tilt = (i % 2 === 0) ? -2 : 2;
      photoWrap.style.transform = `rotate(${tilt}deg)`;
      photoWrap.innerHTML = `
        <img class="timeline-photo" src="${chapter.photo}" alt="${escHtml(chapter.title)}" loading="lazy" />
      `;
      item.appendChild(photoWrap);
      item.classList.add('has-photo');
    }

    item.appendChild(dot);
    item.appendChild(card);
    container.appendChild(item);
  });

  observeAll('.timeline-item');
}

function populateFamily() {
  const grid = dom.familyGrid;
  if (!grid) return;

  BIRTHDAY_DATA.family.members.forEach((member, i) => {
    const card = document.createElement('div');
    card.classList.add('family-card');
    const accentColors = ['#f48fb1', '#ce93d8', '#aed581', '#ffcc80'];
    card.style.setProperty('--card-accent', accentColors[i % accentColors.length]);
    card.style.transitionDelay = `${i * 0.07}s`;

    let photoHtml = '';
    if (member.photo) {
      photoHtml = `
        <div class="family-photo-wrap">
          <img class="family-photo" src="${member.photo}" alt="${escHtml(member.name)}" loading="lazy" />
        </div>
      `;
    }

    card.innerHTML = `
      ${photoHtml}
      <span class="family-emoji" aria-hidden="true">${member.emoji}</span>
      <h3 class="family-name">${escHtml(member.name)}</h3>
      <p class="family-message">"${escHtml(member.message)}"</p>
    `;
    grid.appendChild(card);
  });

  observeAll('.family-card');
}

function populateFriends() {
  const grid = dom.friendsGrid;
  if (!grid) return;

  BIRTHDAY_DATA.friends.messages.forEach((friend, i) => {
    const card = document.createElement('div');
    card.classList.add('friend-card');
    card.style.transitionDelay = `${i * 0.06}s`;
    card.innerHTML = `
      <div class="friend-top">
        <div class="friend-avatar" aria-hidden="true">${friend.emoji}</div>
        <h3 class="friend-name">${escHtml(friend.name)}</h3>
      </div>
      <p class="friend-message">"${escHtml(friend.message)}"</p>
    `;
    grid.appendChild(card);
  });

  observeAll('.friend-card');
}

function populateQuotes() {
  const track = dom.quotesTrack;
  if (!track) return;

  BIRTHDAY_DATA.quotes.forEach((q, i) => {
    const item = document.createElement('div');
    item.classList.add('quote-item');
    item.style.transitionDelay = `${i * 0.08}s`;
    item.innerHTML = `
      <span class="quote-emoji" aria-hidden="true">${q.emoji}</span>
      <p class="quote-text">"${escHtml(q.text)}"</p>
      <p class="quote-source">${escHtml(q.source)}</p>
    `;
    track.appendChild(item);
  });

  observeAll('.quote-item');
}

const PH_COMBOS = [
  { from: '#fce4ec', to: '#f3e5f5', emoji: '🌸' },
  { from: '#f3e5f5', to: '#e3f2fd', emoji: '💫' },
  { from: '#fff8e1', to: '#fce4ec', emoji: '✨' },
  { from: '#e8f5e9', to: '#f3e5f5', emoji: '🦋' },
  { from: '#fce4ec', to: '#fff3e0', emoji: '💗' },
  { from: '#e3f2fd', to: '#fce4ec', emoji: '🌟' },
];

function populatePolaroids() {
  const grid = dom.polaroidGrid;
  if (!grid) return;

  BIRTHDAY_DATA.memories.photos.forEach((photo, i) => {
    const polaroid = document.createElement('div');
    polaroid.classList.add('polaroid');
    polaroid.style.setProperty('--angle', `${photo.angle}deg`);
    polaroid.style.animationDelay = `${i * 0.09}s`;

    const combo = PH_COMBOS[i % PH_COMBOS.length];

    polaroid.innerHTML = `
      <img class="polaroid-photo"
           src="${photo.src}"
           alt="${escHtml(photo.caption)}"
           loading="lazy"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
      <div class="polaroid-photo-placeholder"
           style="--ph-from: ${combo.from}; --ph-to: ${combo.to}; display: none;">
        <span aria-hidden="true">${combo.emoji}</span>
      </div>
      <p class="polaroid-caption">${escHtml(photo.caption)}</p>
    `;

    grid.appendChild(polaroid);
  });

  observeAll('.polaroid');
}

function populateFifteenThings() {
  const grid = dom.fifteenGrid;
  if (!grid) return;

  BIRTHDAY_DATA.fifteenThings.items.forEach((item, i) => {
    const el = document.createElement('div');
    el.classList.add('fifteen-item');
    el.style.transitionDelay = `${i * 0.035}s`;
    el.innerHTML = `
      <span class="fifteen-number" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
      <p class="fifteen-text">${escHtml(item)}</p>
    `;
    grid.appendChild(el);
  });

  observeAll('.fifteen-item');
}

function observeAll(selector) {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll(selector).forEach(el => el.classList.add('visible'));
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

  document.querySelectorAll(selector).forEach(el => obs.observe(el));
}

function escHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[tag]));
}