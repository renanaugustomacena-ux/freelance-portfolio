/* ============================================
   3D MOUSE TILT
   Antigravity-inspired card tilt that follows
   the mouse with eased rotation around X/Y axes.
   Auto-activates on .card-tilt or cards within
   [data-tilt] containers.
   Disabled on touch and prefers-reduced-motion.
   ============================================ */

(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

  function setup(el) {
    var rect;
    var rafId;
    var targetRX = 0, targetRY = 0, targetTZ = 0, targetSc = 1;
    var currRX = 0, currRY = 0, currTZ = 0, currSc = 1;
    var inner = el.querySelector('.card-tilt__inner') || el.querySelector('.card__content') || el;
    var glow  = el.querySelector('.card-tilt__glow');

    el.style.transformStyle = 'preserve-3d';
    el.style.perspective = '1000px';
    if (inner !== el) {
      inner.style.transformStyle = 'preserve-3d';
      inner.style.willChange = 'transform';
    } else {
      el.style.willChange = 'transform';
    }

    function loop() {
      currRX += (targetRX - currRX) * 0.12;
      currRY += (targetRY - currRY) * 0.12;
      currTZ += (targetTZ - currTZ) * 0.12;
      currSc += (targetSc - currSc) * 0.12;
      var t = 'rotateX(' + currRX.toFixed(3) + 'deg) rotateY(' + currRY.toFixed(3)
            + 'deg) translateZ(' + currTZ.toFixed(2) + 'px) scale(' + currSc.toFixed(4) + ')';
      inner.style.transform = t;
      if (Math.abs(targetRX-currRX)+Math.abs(targetRY-currRY)+Math.abs(targetSc-currSc) > 0.001) {
        rafId = requestAnimationFrame(loop);
      } else {
        rafId = null;
      }
    }

    el.addEventListener('mouseenter', function () {
      rect = el.getBoundingClientRect();
      targetSc = 1.02; targetTZ = 8;
      if (!rafId) rafId = requestAnimationFrame(loop);
    });
    el.addEventListener('mousemove', function (e) {
      if (!rect) rect = el.getBoundingClientRect();
      var px = (e.clientX - rect.left) / rect.width  - 0.5;
      var py = (e.clientY - rect.top)  / rect.height - 0.5;
      targetRY =  px * 14;
      targetRX = -py * 10;
      if (glow) {
        glow.style.background = 'radial-gradient(circle at '
          + (px*100+50).toFixed(1) + '% '
          + (py*100+50).toFixed(1) + '%, '
          + 'rgba(255,255,255,0.18), transparent 50%)';
      }
      if (!rafId) rafId = requestAnimationFrame(loop);
    });
    el.addEventListener('mouseleave', function () {
      targetRX = 0; targetRY = 0; targetTZ = 0; targetSc = 1;
      if (glow) glow.style.background = '';
      if (!rafId) rafId = requestAnimationFrame(loop);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Manual opt-in selectors
    document.querySelectorAll('.card-tilt').forEach(setup);
    document.querySelectorAll('[data-tilt] .card').forEach(setup);

    // Auto-attach for premium templates — any .card element will tilt
    var tpl = document.body.getAttribute('data-tpl') || '';
    var autoTilt = [
      'effebi-a', 'effebi-b', 'effebi-c',
      'armonia-a', 'armonia-b', 'armonia-c',
      'rbdesign-a', 'rbdesign-b', 'rbdesign-c',
      'maracaibo-a', 'maracaibo-b', 'maracaibo-c',
      'rosati-a', 'rosati-b',
      'girasole-a', 'girasole-b', 'girasole-c',
      'sambenini-a', 'sambenini-b',
      'sfizio-a', 'sfizio-b', 'sfizio-c',
      'bottega-a', 'bottega-b', 'bottega-c',
      'balzan-c',
      'climaworld-b',
      'farmacia-c',
      '3dservice-b'
    ];
    if (autoTilt.indexOf(tpl) > -1) {
      var cards = document.querySelectorAll('.card, .servizio-card, .menu-card, .testimonial, .feature');
      cards.forEach(setup);
    }
  });
})();
