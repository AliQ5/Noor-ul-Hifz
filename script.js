/* Noor-ul-Hifz GitHub repository & release links */
const GITHUB_REPO_URL = "https://github.com/AliQ5/Noor-ul-Hifz_App";
const V4_2_2_DOWNLOAD_URL = "https://github.com/AliQ5/Noor-ul-Hifz_App/releases/download/Version_4.2.2/Noor-ul-Hifz-Setup-4.2.2.zip";
const V4_2_1_DOWNLOAD_URL = "https://github.com/AliQ5/Noor-ul-Hifz_App/releases/download/Version_4.2.1/Noor-ul-Hifz-Setup-4.2.1.zip";
const V4_2_DOWNLOAD_URL = "https://github.com/AliQ5/Noor-ul-Hifz_App/releases/download/Version_4.2/Noor-ul-Hifz-Setup-4.2.zip";
const V4_1_DOWNLOAD_URL = "https://github.com/AliQ5/Noor-ul-Hifz_App/releases/download/Version_4.1/Noor-ul-Hifz-Setup-4.1.zip";
const V4_0_DOWNLOAD_URL = "https://github.com/AliQ5/Noor-ul-Hifz_App/releases/download/Version_4/Noor-ul-Hifz-Setup-4.0.zip";
const V3_DOWNLOAD_URL = "https://github.com/AliQ5/Noor-ul-Hifz_App/releases/download/Version_3/Noor-ul-Hifz-Setup-3.0.zip";
const V2_DOWNLOAD_URL = "https://github.com/AliQ5/Noor-ul-Hifz_App/releases/download/Version_2/Noor-ul-Hifz-Setup-2.0.zip";
const V1_DOWNLOAD_URL = "https://github.com/AliQ5/Noor-ul-Hifz_App/releases/download/Version_1/Noor-ul-Hifz_V1.zip";

const DOWNLOAD_URL = V4_2_2_DOWNLOAD_URL;

document.querySelectorAll('[data-download]').forEach(a => {
  a.href = DOWNLOAD_URL;
  a.target = '_blank';
  a.rel = 'noopener';
});
document.querySelectorAll('[data-github]').forEach(a => {
  a.href = GITHUB_REPO_URL;
  a.target = '_blank';
  a.rel = 'noopener';
});
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* Header: solid after scrolling, hides on scroll down, returns on scroll up */
const header = document.querySelector('.site-header');
let lastY = window.scrollY;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 20);
  const menuOpen = document.body.classList.contains('menu-open');
  header.classList.toggle('hidden', !menuOpen && y > 400 && y > lastY);
  lastY = y;
}, { passive: true });

/* Mobile menu */
const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('mobile-menu');
const setMenu = open => {
  document.body.classList.toggle('menu-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.querySelector('.sr-only').textContent = open ? 'Close menu' : 'Open menu';
  if (open) menu.hidden = false;
  document.body.style.overflow = open ? 'hidden' : '';
};
toggle.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

/* Screenshots Showcase Tabs */
const tourTabs = document.querySelectorAll('.tour-tab');
const tourPanes = document.querySelectorAll('.tour-pane');

tourTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetId = tab.getAttribute('data-tab');
    tourTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tourPanes.forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    const targetPane = document.getElementById(targetId);
    if (targetPane) targetPane.classList.add('active');
  });
});

/* Screenshot Image Preview Switchers (Theme, Settings, Ingestion, etc.) */
const themePillBtns = document.querySelectorAll('.theme-pill-btn');
themePillBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const parentRow = btn.closest('.theme-toggle-row');
    if (parentRow) {
      parentRow.querySelectorAll('.theme-pill-btn').forEach(b => b.classList.remove('active'));
    }
    btn.classList.add('active');
    const targetId = btn.getAttribute('data-target') || 'theme-preview-img';
    const targetImg = document.getElementById(targetId);
    const imgSrc = btn.getAttribute('data-img');
    if (targetImg && imgSrc) {
      targetImg.src = imgSrc;
    }
  });
});

/* Scroll reveals, staggered within each parent */
const reveals = document.querySelectorAll('.reveal, .hero-stage');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const siblings = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
      el.style.transitionDelay = `${Math.max(0, siblings.indexOf(el)) * 70}ms`;
      el.classList.add('is-in');
      io.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => io.observe(el));
} else {
  reveals.forEach(el => el.classList.add('is-in'));
}
