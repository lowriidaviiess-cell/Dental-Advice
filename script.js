const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
const navLinks = document.querySelectorAll('.primary-nav a');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const header = document.querySelector('.site-header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > 40) header.classList.add('is-scrolled');
  else header.classList.remove('is-scrolled');
  lastScroll = current;
}, { passive: true });
