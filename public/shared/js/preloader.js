/* ============================================
   PRELOADER — Tier 3 atmospheric templates
   Activates when <div class="preloader"> exists.
   Animates out using GSAP if available, fade otherwise.
   ============================================ */

(function () {
  function hidePreloader(pre) {
    if (typeof gsap !== 'undefined') {
      gsap.to(pre, {
        opacity: 0,
        duration: 0.7,
        ease: 'power3.inOut',
        delay: 0.2,
        onComplete: function () { pre.remove(); }
      });
    } else {
      pre.style.transition = 'opacity 0.7s ease 0.2s';
      pre.style.opacity = '0';
      setTimeout(function () { pre.remove(); }, 1000);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var pre = document.querySelector('.preloader');
    if (pre) {
      if (document.readyState === 'complete') {
        hidePreloader(pre);
      } else {
        window.addEventListener('load', function () {
          setTimeout(function () { hidePreloader(pre); }, 250);
        });
      }
    }

    // Scroll progress bar fallback (browsers without animation-timeline)
    var fill = document.querySelector('.scroll-progress-bar__fill');
    if (fill && !CSS.supports('animation-timeline', 'scroll()')) {
      window.addEventListener('scroll', function () {
        var scrolled = window.scrollY;
        var total = document.documentElement.scrollHeight - window.innerHeight;
        var pct = total > 0 ? (scrolled / total) * 100 : 0;
        fill.style.width = pct + '%';
      }, { passive: true });
    }
  });
})();
