/* ============================================
   COLOR SHIFT ON SCROLL
   gethapply.com pattern: ScrollTrigger.batch over
   [data-c] sections swaps a data-color attribute
   on <body>. CSS transitions handle the visible
   easing via attribute selectors in
   template-presets.css.
   ============================================ */

(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('[data-c]');
    if (!sections.length) return;
    var body = document.body;

    // GSAP ScrollTrigger path (preferred)
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      var nav = document.querySelector('.nav');
      var navOffset = nav ? nav.offsetHeight / 2 : 60;

      ScrollTrigger.batch(sections, {
        start: function () { return 'top ' + navOffset + 'px'; },
        end:   function () { return 'bottom ' + navOffset + 'px'; },
        onEnter:     function (els) { body.setAttribute('data-color', els[els.length-1].dataset.c); },
        onEnterBack: function (els) { body.setAttribute('data-color', els[0].dataset.c); },
      });
      return;
    }

    // IntersectionObserver fallback
    var nav2 = document.querySelector('.nav');
    var navOffset2 = nav2 ? nav2.offsetHeight : 60;
    var io = new IntersectionObserver(function (entries) {
      var best = null;
      entries.forEach(function (e) {
        if (e.isIntersecting && (!best || e.intersectionRatio > best.intersectionRatio)) {
          best = e;
        }
      });
      if (best) {
        body.setAttribute('data-color', best.target.dataset.c);
      }
    }, {
      rootMargin: '-' + navOffset2 + 'px 0px -50% 0px',
      threshold: [0, 0.5, 1],
    });
    sections.forEach(function (s) { io.observe(s); });
  });
})();
