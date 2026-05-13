/* ============================================
   REVEAL ON SCROLL
   Configurable IntersectionObserver reveals.
   Supports old .reveal class AND new [data-reveal].
   Per-template animation is defined via CSS —
   JS only toggles the .revealed class.
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal, [data-reveal]');
  if (!revealElements.length) return;

  const threshold = parseFloat(document.documentElement.dataset.revealThreshold || '0.15');
  const margin = document.documentElement.dataset.revealMargin || '0px 0px -50px 0px';

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        if (entry.target.dataset.reveal !== 'repeat') {
          observer.unobserve(entry.target);
        }
      } else if (entry.target.dataset.reveal === 'repeat') {
        entry.target.classList.remove('revealed');
      }
    });
  }, {
    threshold: threshold,
    rootMargin: margin
  });

  revealElements.forEach(el => observer.observe(el));
});
