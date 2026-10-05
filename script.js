/* Replace these two values with the real GitHub repository/release URL. */
const GITHUB_RELEASE_URL = "https://github.com/AliQ5/Noor-ul-Hifz_App/releases/download/Version_2/Noor-ul-Hifz-Setup-2.0.zip";
const DOWNLOAD_URL = GITHUB_RELEASE_URL;

document.querySelectorAll('[data-download]').forEach(a => {
  a.href = DOWNLOAD_URL;
  a.target = '_blank';
  a.rel = 'noopener';
});
document.querySelectorAll('[data-github]').forEach(a => {
  a.href = GITHUB_RELEASE_URL;
});
document.getElementById('year').textContent = new Date().getFullYear();

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
