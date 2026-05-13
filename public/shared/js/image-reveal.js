/* ============================================
   IMAGE REVEAL — floema.com pattern
   Two stacked clip-path layers. Colored bg layer
   leads by 100ms, image follows.
   Activate on: <div class="image-reveal">
                  <div class="image-reveal__bg"></div>
                  <img class="image-reveal__img" ...>
                </div>
   The CSS for these classes lives in
   template-presets.css.
   ============================================ */

(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // make all clip-paths immediately open
    document.addEventListener('DOMContentLoaded', function () {
      document.querySelectorAll('.image-reveal__bg, .image-reveal__img').forEach(function (el) {
        el.style.clipPath = 'inset(0 0 0 0)';
      });
    });
    return;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var reveals = document.querySelectorAll('.image-reveal');
    if (!reveals.length) return;

    function animate(el) {
      var bg = el.querySelector('.image-reveal__bg');
      var img = el.querySelector('.image-reveal__img');

      if (typeof gsap !== 'undefined') {
        var tl = gsap.timeline();
        if (bg) {
          tl.fromTo(bg,
            { clipPath: 'inset(0 0 100% 0)' },
            { clipPath: 'inset(0 0 0 0)', duration: 0.7, ease: 'expo.out' });
        }
        if (img) {
          tl.fromTo(img,
            { clipPath: 'inset(0 0 100% 0)' },
            { clipPath: 'inset(0 0 0 0)', duration: 1.0, ease: 'expo.inOut' },
            '<0.1');
        }
      } else {
        // CSS-only fallback
        if (bg) {
          bg.style.transition = 'clip-path 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
          bg.style.clipPath = 'inset(0 0 0 0)';
        }
        if (img) {
          img.style.transition = 'clip-path 1.0s cubic-bezier(0.76, 0, 0.24, 1) 0.1s';
          img.style.clipPath = 'inset(0 0 0 0)';
        }
      }
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !e.target.dataset.revealed) {
          e.target.dataset.revealed = '1';
          animate(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });

    reveals.forEach(function (el) { io.observe(el); });
  });
})();
