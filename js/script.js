'use strict';
// La navegación y las consultas siguen funcionando sin JavaScript.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window) {
  const navLinks = [...document.querySelectorAll('.aisle-nav a')];
  const route = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, {rootMargin: '-5% 0px -55% 0px', threshold: 0});
  document.querySelectorAll('#visita, #ubicacion').forEach(section => route.observe(section));
  const topObserver = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      navLinks.forEach((link, i) => i === 0 ? link.setAttribute('aria-current', 'location') : link.removeAttribute('aria-current'));
    }
  }, {threshold: .15});
  topObserver.observe(document.querySelector('.shopfront'));
  const signs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      if (!reducedMotion.matches) entry.target.classList.add('sign-enter');
      signs.unobserve(entry.target);
    });
  }, {threshold: .3});
  document.querySelectorAll('.section-sign, .street-sign').forEach(sign => signs.observe(sign));
}
