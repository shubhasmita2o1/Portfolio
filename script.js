document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA || {};

  // ========================================================
  // 1. DATA PERSONALIZATION (If customized in portfolio-config.js)
  // ========================================================
  if (data.name && data.name !== "YOUR NAME") {
    const heroHeadline = document.getElementById('hero-headline');
    if (heroHeadline) heroHeadline.innerText = data.name;
    document.title = `${data.name} - ${data.role || 'Full Stack Developer'}`;
  }

  // ========================================================
  // 2. LENIS SMOOTH SCROLL (v1.3.1)
  // ========================================================
  let lenis;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      smoothWheel: true,
      syncTouch: false,
      syncTouchLerp: 0.075,
      touchInertiaMultiplier: 35,
      lerp: 0.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }

  // ========================================================
  // 3. SVG CURTAIN WAVE PRELOADER (Intro Animation)
  // ========================================================
  const curtain = document.getElementById('intro-curtain');
  const curtainPath = document.getElementById('curtain-path');

  if (curtain && curtainPath && typeof gsap !== 'undefined') {
    const tl = gsap.timeline({
      onComplete: () => {
        if (curtain && curtain.parentNode) {
          curtain.parentNode.removeChild(curtain);
        }
      }
    });

    tl.to(curtainPath, {
      attr: { d: "M0 0 L926 0 L926 0 Q463 0 0 0 L0 0" },
      duration: 1.3,
      ease: "power2.inOut",
      delay: 0.2
    })
    .to(curtain, {
      y: "-100vh",
      duration: 1.1,
      ease: "power3.inOut"
    }, "-=0.7");
  } else if (curtain) {
    curtain.style.display = 'none';
  }

  // ========================================================
  // 4. GSAP SCROLLTRIGGER HERO PARALLAX & STICKY COUNTER
  // ========================================================
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Scale Scrub
    const heroSticky = document.querySelector('.hero-sticky-container');
    const heroSpacer = document.querySelector('.hero-spacer');
    if (heroSticky && heroSpacer) {
      gsap.to(heroSticky, {
        scale: 0.94,
        opacity: 0.85,
        ease: "none",
        scrollTrigger: {
          trigger: heroSpacer,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }

    // Selected Works: Sticky Digital Counter (01 to 05)
    const projectCards = document.querySelectorAll('.project-card-element');
    const counterItems = [
      document.getElementById('work-num-0'),
      document.getElementById('work-num-1'),
      document.getElementById('work-num-2'),
      document.getElementById('work-num-3'),
      document.getElementById('work-num-4')
    ];

    projectCards.forEach((card, idx) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => setActiveIndex(idx),
        onEnterBack: () => setActiveIndex(idx),
      });
    });

    function setActiveIndex(idx) {
      counterItems.forEach((item, i) => {
        if (!item) return;
        if (i === idx) {
          item.classList.add('text-white');
          item.classList.remove('text-neutral-500');
        } else {
          item.classList.remove('text-white');
          item.classList.add('text-neutral-500');
        }
      });
    }
  }

  // ========================================================
  // 5. CUSTOM LERP CURSOR ("VIEW" BADGE OVER CARDS)
  // ========================================================
  const cursor = document.getElementById('custom-cursor');
  if (cursor) {
    let mouseX = -100, mouseY = -100;
    let currentX = -100, currentY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const cursorLoop = () => {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;
      cursor.style.transform = `translate3d(${currentX - 40}px, ${currentY - 40}px, 0)`;

      const areas = document.querySelectorAll('.custom-cursor-area');
      let isHovering = false;
      areas.forEach((area) => {
        const rect = area.getBoundingClientRect();
        if (
          mouseX >= rect.left &&
          mouseX <= rect.right &&
          mouseY >= rect.top &&
          mouseY <= rect.bottom
        ) {
          isHovering = true;
        }
      });

      cursor.style.opacity = isHovering ? '1' : '0';
      requestAnimationFrame(cursorLoop);
    };
    requestAnimationFrame(cursorLoop);
  }

  // ========================================================
  // 6. HACKER / MATRIX TEXT SCRAMBLE DECODER
  // ========================================================
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const scrambleElements = document.querySelectorAll('[data-scramble]');

  scrambleElements.forEach(element => {
    let interval = null;
    element.addEventListener('mouseenter', event => {
      let iteration = 0;
      const targetText = event.target.dataset.value || event.target.innerText;
      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = targetText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        if (iteration >= targetText.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 30);
    });
  });

  // ========================================================
  // 7. FULLSCREEN MENU DRAWER TOGGLE
  // ========================================================
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerLinks = document.querySelectorAll('.drawer-nav-link');
  let isDrawerOpen = false;

  const toggleDrawer = () => {
    isDrawerOpen = !isDrawerOpen;
    menuToggleBtn.classList.toggle('menu-btn-active', isDrawerOpen);

    if (isDrawerOpen) {
      drawerOverlay.classList.remove('hidden');
      drawerOverlay.classList.add('flex');
      document.body.style.overflow = 'hidden';
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(drawerOverlay.firstElementChild, 
          { x: "100%" }, 
          { x: "0%", duration: 0.8, ease: "power3.out" }
        );
      }
    } else {
      if (typeof gsap !== 'undefined') {
        gsap.to(drawerOverlay.firstElementChild, {
          x: "100%",
          duration: 0.6,
          ease: "power3.inOut",
          onComplete: () => {
            drawerOverlay.classList.remove('flex');
            drawerOverlay.classList.add('hidden');
            document.body.style.overflow = '';
          }
        });
      } else {
        drawerOverlay.classList.remove('flex');
        drawerOverlay.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }
  };

  if (menuToggleBtn && drawerOverlay) {
    menuToggleBtn.addEventListener('click', toggleDrawer);
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (isDrawerOpen) toggleDrawer();
      });
    });
  }

  // ========================================================
  // 8. LIVE IST CLOCK (Format: 5:45 PM)
  // ========================================================
  const updateClock = () => {
    const clockEl = document.getElementById('live-ist-clock');
    if (!clockEl) return;
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    clockEl.textContent = timeStr;
  };
  updateClock();
  setInterval(updateClock, 1000);

  // ========================================================
  // 9. SCROLL TO TOP & FORM HANDLER
  // ========================================================
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerText;
      submitBtn.disabled = true;
      submitBtn.innerText = "Sending...";

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerText = "Message Sent! ✓";
        contactForm.reset();
        if (formSuccess) {
          formSuccess.classList.remove('hidden');
          setTimeout(() => {
            formSuccess.classList.add('hidden');
            submitBtn.innerText = originalText;
          }, 4000);
        }
      }, 700);
    });
  }
});
