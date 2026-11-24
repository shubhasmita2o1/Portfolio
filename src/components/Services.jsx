import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const DESKTOP_TOP_CLASSES = [
  'md:top-[18vh]',
  'md:top-[calc(18vh+6rem)]',
  'md:top-[calc(18vh+12rem)]',
];

const CARD_MARGIN_CLASSES = [
  'mb-[6em] sm:mb-[8em] md:mb-[19em] lg:mb-[20em]',
  'mb-[6em] sm:mb-[8em] md:mb-[13.5em] lg:mb-[14em]',
  'mb-[8em] sm:mb-[8em] md:mb-[7.5em] lg:mb-[8em]',
];

function renderServiceTitle(title) {
  if (!title) return null;
  const words = title.trim().split(/\s+/);
  if (words.length < 2) return title;
  const lastWord = words.pop();
  return (
    <>
      {words.join(' ')} <br className="block sm:hidden" />
      {lastWord}
    </>
  );
}

export function Services() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const introRef = useRef(null);
  const headerRefs = useRef([]);
  const bodyRefs = useRef([]);

  const [mobileSticky, setMobileSticky] = useState(() => {
    const isMob = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
    return {
      isMobile: isMob,
      tops: ['3.25rem', 'calc(3.25rem + 6.25rem)', 'calc(3.25rem + 12.5rem)'],
      minHeights: ['auto', 'auto', 'auto'],
    };
  });

  // Real data from portfolioData
  const services = portfolioData.services || [
    {
      index: '01',
      title: 'Full-Stack Development',
      description:
        'I build complete web applications using React + TypeScript on the frontend and Java/Spring Boot or Node.js on the backend. Comfortable owning features end-to-end — from REST API design and database modeling to production-ready UI.',
      features: [
        'React, TypeScript, Vite, Tailwind CSS',
        'Java, Spring Boot, Node.js, REST APIs',
        'MongoDB, PostgreSQL, MySQL, JWT Auth',
      ],
    },
    {
      index: '02',
      title: 'Frontend Development',
      description:
        'I develop clean, responsive, and accessible interfaces with React, Vite, and Tailwind CSS. Focus on component architecture, translating wireframes into production code, and delivering smooth user experiences.',
      features: [
        'React, TypeScript, Vite, Tailwind CSS',
        'Component Architecture & State Management',
        'Responsive & Cross-browser UI',
      ],
    },
    {
      index: '03',
      title: 'Backend & Architecture',
      description:
        'I design and implement backend services with Spring Boot and Node.js, applying RBAC, multi-tenancy, and clean layered architecture (Controller–Service–Repository). Focused on scalable and maintainable systems.',
      features: [
        'Spring Boot, Spring Security, JWT, RBAC',
        'Multi-tenancy & Modular Monolith',
        'REST APIs, Database Design, Git Workflows',
      ],
    },
  ];

  const servicesIntro =
    portfolioData.servicesIntro ||
    'I specialize in building fast, reliable, and user-friendly full-stack web applications. I help small businesses and startups turn ideas into high-quality websites and products that actually work and scale.';

  // Word-by-word structure matching SelectedWorks for clean masking transition
  const headingWords = ['WHAT', 'I', 'DO', '/'];

  // Mobile-only adaptive sticky layout:
  // Desktop (>=768px) stays pure CSS (md:top-[18vh], +6rem, +12rem) untouched.
  // Mobile (<768px) adapts to exact row heights and locks all 3 card bottoms together on exit.
  useEffect(() => {
    let rafId = null;

    const updateStickyLayout = () => {
      const isMob = window.innerWidth < 768;
      if (!isMob) {
        setMobileSticky((prev) =>
          prev.isMobile ? { ...prev, isMobile: false } : prev
        );
        return;
      }

      const baseTop = 52;
      const measureHeight = (el, fallback) =>
        el ? Math.ceil(el.getBoundingClientRect().height) : fallback;

      const h1 = measureHeight(headerRefs.current[0], 98) + 1;
      const h2 = measureHeight(headerRefs.current[1], 98) + 1;
      const h3 = measureHeight(headerRefs.current[2], 98) + 1;

      const b1 = measureHeight(bodyRefs.current[0], 290);
      const b2 = measureHeight(bodyRefs.current[1], 290);
      const b3 = measureHeight(bodyRefs.current[2], 290);

      const ch1 = h1 + b1;
      const ch2 = h2 + b2;
      const ch3 = h3 + b3;

      const targetSpanFromT1 = Math.max(ch1, h1 + ch2, h1 + h2 + ch3);

      const nextTops = [
        `${baseTop}px`,
        `${baseTop + h1}px`,
        `${baseTop + h1 + h2}px`,
      ];
      const nextMinHeights = [
        `${targetSpanFromT1}px`,
        `${Math.max(ch2, targetSpanFromT1 - h1)}px`,
        `${Math.max(ch3, targetSpanFromT1 - h1 - h2)}px`,
      ];

      setMobileSticky((prev) => {
        if (
          prev.isMobile &&
          prev.tops[0] === nextTops[0] &&
          prev.tops[1] === nextTops[1] &&
          prev.tops[2] === nextTops[2] &&
          prev.minHeights[0] === nextMinHeights[0] &&
          prev.minHeights[1] === nextMinHeights[1] &&
          prev.minHeights[2] === nextMinHeights[2]
        ) {
          return prev;
        }
        return { isMobile: true, tops: nextTops, minHeights: nextMinHeights };
      });
    };

    const scheduleUpdate = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        rafId = null;
        updateStickyLayout();
      });
    };

    updateStickyLayout();

    const ro = new ResizeObserver(scheduleUpdate);
    headerRefs.current.forEach((el) => {
      if (!el) return;
      ro.observe(el);
      const headingEl = el.querySelector('h3');
      if (headingEl) ro.observe(headingEl);
    });
    bodyRefs.current.forEach((el) => el && ro.observe(el));

    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('load', scheduleUpdate);

    if (document.fonts) {
      document.fonts.ready?.then(scheduleUpdate);
      document.fonts.addEventListener?.('loadingdone', scheduleUpdate);
    }

    const t1 = setTimeout(scheduleUpdate, 250);
    const t2 = setTimeout(scheduleUpdate, 1000);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
      ro.disconnect();
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('load', scheduleUpdate);
      document.fonts?.removeEventListener?.('loadingdone', scheduleUpdate);
    };
  }, [services.length]);

  // Masked letter reveal transition matching SelectedWorks & About
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    let ctx;
    const rafId = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const letterEls = headingRef.current?.querySelectorAll('.letter');
        if (letterEls?.length) {
          gsap.fromTo(
            letterEls,
            { yPercent: 110, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.85,
              stagger: 0.03,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: headingRef.current || sectionRef.current,
                start: window.innerWidth < 768 ? 'top 75%' : 'top 85%',
                toggleActions: 'play none none none',
                once: true,
              },
            }
          );
        }

        if (introRef.current) {
          gsap.fromTo(
            introRef.current,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              delay: 0.2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: headingRef.current || sectionRef.current,
                start: window.innerWidth < 768 ? 'top 75%' : 'top 85%',
                toggleActions: 'play none none none',
                once: true,
              },
            }
          );
        }
      }, sectionRef);
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      id="Services"
      ref={sectionRef}
      className="section-padding pb-8 md:pb-[var(--space-2xl)] rounded-t-3xl bg-[var(--color-secondary-400)] text-[var(--color-text-bg)] relative z-20"
    >
      {/* Title + intro: stacked rows with letter masking reveal */}
      <div className="relative flex w-full flex-col gap-y-[var(--space-lg)] md:gap-y-[var(--space-2xl)]">
        <h2 className="section-heading relative leading-[1.02] text-[var(--color-accent-400)] text-[length:var(--text-h1-alt)] md:text-[length:var(--text-h1)]">
          <div className="overflow-hidden py-[0.08em] -my-[0.08em]">
            <span
              ref={headingRef}
              className="block leading-[1.02]"
            >
              {headingWords.map((word, wordIdx) => (
                <span
                  key={wordIdx}
                  className="inline-block whitespace-nowrap mr-[0.25em]"
                >
                  {word.split('').map((char, i) => (
                    <span
                      key={i}
                      className="inline-block letter"
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          </div>
        </h2>

        <div
          ref={introRef}
          className="flex grid-cols-12 gap-x-[var(--gap-fluid)] md:grid"
        >
          <div className="col-span-7 flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-2xs)] sm:flex-row md:col-start-6">
            <span className="flex h-full font-medium uppercase text-nowrap text-[var(--color-secondary-75)] text-[16px] select-none">
              (Services)
            </span>
            <p className="w-full max-w-[35ch] text-balance text-[length:var(--text-base-large)] font-medium leading-relaxed text-[var(--color-secondary-50)]">
              {servicesIntro}
            </p>
          </div>
        </div>
      </div>

      {/* Sticky cards container: mobile adaptive stacking + pure CSS desktop stacking */}
      <div className="w-full pt-[var(--space-lg)]">
        <div className="mt-8 sm:mt-12 flex flex-col bg-[var(--color-secondary-400)]">
          {services.slice(0, 3).map((service, idx) => (
            <div
              key={service.index || idx}
              className={`sticky border-t border-[var(--color-secondary-300)] bg-[var(--color-secondary-400)] ${DESKTOP_TOP_CLASSES[idx]} ${CARD_MARGIN_CLASSES[idx]}`}
              style={
                mobileSticky.isMobile
                  ? {
                      zIndex: idx + 1,
                      top: mobileSticky.tops[idx],
                      minHeight: mobileSticky.minHeights[idx],
                    }
                  : { zIndex: idx + 1 }
              }
            >
              {/* Header row: fixed number column + generous gap + flexible title column */}
              <div
                ref={(el) => {
                  headerRefs.current[idx] = el;
                }}
                className="grid grid-cols-[4.25rem_1fr] sm:grid-cols-[5.5rem_1fr] gap-x-3.5 sm:gap-x-6 md:grid-cols-12 md:gap-x-[var(--gap-fluid)] items-baseline md:items-center text-left text-[length:var(--text-heading-2)] font-semibold text-[var(--color-accent-400)] md:justify-between py-3.5 sm:py-4 md:py-[var(--space-md)] 2xl:py-[var(--space-sm)]"
              >
                <span className="col-span-1 md:col-span-2 select-none tracking-tight tabular-nums">
                  ({service.index || `0${idx + 1}`})
                </span>
                <h3 className="col-span-1 md:col-span-8 md:col-start-6 tracking-tight leading-[1.06] md:leading-snug">
                  {renderServiceTitle(service.title)}
                </h3>
              </div>

              {/* Service Body: description + feature list */}
              <div
                ref={(el) => {
                  bodyRefs.current[idx] = el;
                }}
                className="relative flex flex-col place-items-start pt-4 sm:pt-6 md:pt-[var(--space-3xs)] pb-4 sm:pb-6 md:pb-0 md:grid md:min-h-[40vh] md:grid-cols-12"
              >
                <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-4 sm:gap-y-6 md:gap-y-[var(--space-sm)] md:pt-[var(--space-sm)]">
                  <p className="w-full max-w-[40ch] text-[15px] sm:text-[length:var(--text-base)] font-medium leading-[1.45] sm:leading-snug text-[var(--color-secondary-50)]">
                    {service.description}
                  </p>
                  <div className="flex w-full flex-col divide-y divide-[var(--color-secondary-300)] md:divide-[var(--color-secondary-200)] pt-1 sm:pt-2">
                    {service.features?.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-baseline gap-x-4 sm:gap-x-[var(--space-sm)] py-2.5 sm:py-3 md:py-1.5 xl:gap-x-[var(--space-md)]"
                      >
                        <span className="font-mono text-xs sm:text-[length:var(--text-base)] font-medium leading-none text-[var(--color-secondary-75)] select-none mr-1 sm:mr-4">
                          0{fIdx + 1}
                        </span>
                        <span className="font-bold text-[var(--color-accent-400)] md:text-[var(--color-accent-500)] text-[17px] sm:text-xl md:text-[length:var(--text-heading-4)] leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
