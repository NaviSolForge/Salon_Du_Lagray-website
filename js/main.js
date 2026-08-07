(() => {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mobileNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

(() => {
  const splash = document.getElementById('splash');
  if (!splash) return;

  document.body.classList.add('splash-active');

  const dismiss = () => {
    if (splash.classList.contains('is-hidden')) return;
    splash.classList.add('is-hidden');
    document.body.classList.remove('splash-active');
  };

  splash.addEventListener('click', dismiss);
  window.addEventListener('scroll', dismiss, { once: true, passive: true });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.setTimeout(dismiss, reduceMotion ? 900 : 2200);

  splash.addEventListener('transitionend', () => {
    splash.style.display = 'none';
  });
})();

(() => {
  const slides = document.querySelectorAll('.hero__slide');
  if (slides.length < 2) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let current = 0;
  window.setInterval(() => {
    const next = (current + 1) % slides.length;
    slides[current].classList.remove('is-active');
    slides[next].classList.add('is-active');
    current = next;
  }, 5000);
})();
