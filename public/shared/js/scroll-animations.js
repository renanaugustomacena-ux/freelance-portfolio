/* ============================================
   SCROLL ANIMATIONS — Tier 2/3 templates
   Reads data-tpl attribute on body and applies
   tier-appropriate scroll animations using GSAP.
   No-op if GSAP isn't loaded.
   ============================================ */

(function () {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.addEventListener('DOMContentLoaded', function () {
    var tpl = (document.body.getAttribute('data-tpl') || '').toLowerCase();
    if (!tpl) return;

    // === Universal: Card batch reveal with template-tuned easing ===
    var cards = gsap.utils.toArray('.card, [data-reveal-card]');
    if (cards.length) {
      var ease = 'power3.out';
      var y = 40;
      var stagger = 0.1;

      if (tpl.indexOf('sfizio') === 0 || tpl.indexOf('bottega') === 0) {
        ease = 'back.out(1.6)';
        y = 50;
        stagger = 0.08;
      } else if (tpl.indexOf('armonia') === 0 || tpl.indexOf('rbdesign') === 0 || tpl.indexOf('effebi') === 0) {
        ease = 'power4.out';
        y = 60;
        stagger = 0.14;
      } else if (tpl.indexOf('rosati') === 0 || tpl.indexOf('girasole') === 0 || tpl.indexOf('maracaibo') === 0) {
        ease = 'power3.out';
        y = 50;
        stagger = 0.12;
      }

      ScrollTrigger.batch(cards, {
        onEnter: function (elements) {
          gsap.fromTo(elements,
            { opacity: 0, y: y, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: ease, stagger: stagger, overwrite: true }
          );
        },
        start: 'top 88%'
      });
    }

    // === Section headers reveal ===
    var sectionHeaders = gsap.utils.toArray('.section-header');
    sectionHeaders.forEach(function (header) {
      gsap.from(header.children, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });

    // === Hero parallax (for atmospheric templates) ===
    var heroBgSelectors = '.hero__image, .hero__bg, .hero__diagonal, .hero__visual';
    var heroBg = document.querySelector(heroBgSelectors);
    if (heroBg && (tpl.indexOf('rosati') === 0 || tpl.indexOf('effebi') === 0 || tpl.indexOf('armonia') === 0 || tpl.indexOf('rbdesign') === 0 || tpl.indexOf('maracaibo') === 0 || tpl.indexOf('girasole') === 0)) {
      gsap.to(heroBg, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
    }

    // === Counter animations for stats ===
    var counters = document.querySelectorAll('[data-counter]');
    counters.forEach(function (counter) {
      var target = parseInt(counter.getAttribute('data-counter'), 10);
      if (isNaN(target)) return;
      var obj = { val: 0 };

      ScrollTrigger.create({
        trigger: counter,
        start: 'top 85%',
        once: true,
        onEnter: function () {
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            onUpdate: function () {
              counter.textContent = Math.round(obj.val).toLocaleString('it-IT');
            }
          });
        }
      });
    });

    // === Hero title SplitText reveal (Tier 3) ===
    if (typeof SplitText !== 'undefined') {
      var heroTitle = document.querySelector('.hero__title, .hero h1');
      if (heroTitle && !heroTitle.dataset.splitDone) {
        heroTitle.dataset.splitDone = 'true';
        try {
          var split = new SplitText(heroTitle, { type: 'lines, words' });
          gsap.from(split.lines, {
            opacity: 0,
            y: 60,
            rotationX: -10,
            stagger: 0.12,
            duration: 1,
            ease: 'power4.out',
            delay: 0.2
          });
        } catch (e) {
          // SplitText may fail on some font configurations — fail silently
        }
      }

      // SplitText for section titles
      var sectionTitles = document.querySelectorAll('.section-header__title');
      sectionTitles.forEach(function (title) {
        if (title.dataset.splitDone) return;
        title.dataset.splitDone = 'true';
        try {
          var s = new SplitText(title, { type: 'words' });
          gsap.from(s.words, {
            opacity: 0,
            y: 20,
            stagger: 0.04,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: title,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          });
        } catch (e) {}
      });
    }

    // === Magnetic buttons (Tier 3) ===
    var magneticTpls = ['armonia-a', 'armonia-b', 'rbdesign-a', 'rbdesign-c', 'effebi-a', 'effebi-c', 'maracaibo-a'];
    if (magneticTpls.indexOf(tpl) > -1 && !window.matchMedia('(hover: none)').matches) {
      var magBtns = document.querySelectorAll('.btn--primary, .btn--magnetic');
      magBtns.forEach(function (btn) {
        btn.classList.add('btn--magnetic');
        btn.addEventListener('mousemove', function (e) {
          var rect = btn.getBoundingClientRect();
          var x = e.clientX - rect.left - rect.width / 2;
          var y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, { x: x * 0.25, y: y * 0.25, duration: 0.4, ease: 'power2.out' });
        });
        btn.addEventListener('mouseleave', function () {
          gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
        });
      });
    }

    // === Image reveal clip-path ===
    var revealImages = document.querySelectorAll('[data-img-reveal]');
    revealImages.forEach(function (img) {
      gsap.from(img, {
        clipPath: 'inset(100% 0 0 0)',
        duration: 1.2,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: img,
          start: 'top 80%'
        }
      });
    });
  });
})();
