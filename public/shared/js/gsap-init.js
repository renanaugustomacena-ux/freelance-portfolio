/* ============================================
   GSAP INITIALIZATION
   Optional: only runs if GSAP is loaded via CDN.
   Registers ScrollTrigger and syncs with Lenis
   if present. Load BEFORE template-specific JS.
   ============================================ */

(function () {
  if (typeof gsap === 'undefined') return;

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  if (typeof SplitText !== 'undefined') {
    gsap.registerPlugin(SplitText);
  }

  if (typeof Lenis !== 'undefined') {
    var lenis = new Lenis({
      duration: 1.2,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    window.__lenis = lenis;
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(100);
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.config({ limitCallbacks: true });
    }
  }
})();
