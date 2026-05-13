/* ============================================
   CURSOR BLOB
   Soft glowing orb that follows the cursor with
   elastic lag. On hovering interactive elements
   it scales up and pulses. Disabled on touch and
   reduced-motion.
   ============================================ */

(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

  document.addEventListener('DOMContentLoaded', function () {
    var tpl = document.body.getAttribute('data-tpl') || '';
    // Skip on templates that don't want a cursor effect (Tier 1 functional services)
    var skipList = ['farmacia-a', 'farmacia-b', 'balzan-a', 'balzan-b', '3dservice-a', 'climaworld-a'];
    if (skipList.indexOf(tpl) > -1) return;

    var blob = document.createElement('div');
    blob.className = 'cursor-blob';
    blob.setAttribute('aria-hidden', 'true');
    document.body.appendChild(blob);

    var dot = document.createElement('div');
    dot.className = 'cursor-dot';
    dot.setAttribute('aria-hidden', 'true');
    document.body.appendChild(dot);

    var targetX = window.innerWidth / 2;
    var targetY = window.innerHeight / 2;
    var blobX = targetX, blobY = targetY;
    var dotX = targetX, dotY = targetY;
    var scale = 1;
    var targetScale = 1;

    window.addEventListener('pointermove', function (e) {
      targetX = e.clientX;
      targetY = e.clientY;
    });

    // Detect interactive elements
    var hoverSelector = 'a, button, .btn, .card, [role="button"], input, textarea, select, .nav__hamburger';

    document.addEventListener('pointerover', function (e) {
      if (e.target.closest && e.target.closest(hoverSelector)) {
        targetScale = 2.6;
        blob.classList.add('cursor-blob--hover');
      }
    });
    document.addEventListener('pointerout', function (e) {
      if (e.target.closest && e.target.closest(hoverSelector)) {
        targetScale = 1;
        blob.classList.remove('cursor-blob--hover');
      }
    });

    function loop() {
      blobX += (targetX - blobX) * 0.12;
      blobY += (targetY - blobY) * 0.12;
      dotX += (targetX - dotX) * 0.35;
      dotY += (targetY - dotY) * 0.35;
      scale += (targetScale - scale) * 0.15;
      blob.style.transform = 'translate3d(' + (blobX - 24) + 'px,' + (blobY - 24) + 'px,0) scale(' + scale.toFixed(3) + ')';
      dot.style.transform = 'translate3d(' + (dotX - 3) + 'px,' + (dotY - 3) + 'px,0)';
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    // Hide cursor blob when window loses focus
    window.addEventListener('blur', function () { blob.style.opacity = '0'; dot.style.opacity = '0'; });
    window.addEventListener('focus', function () { blob.style.opacity = ''; dot.style.opacity = ''; });
  });
})();
