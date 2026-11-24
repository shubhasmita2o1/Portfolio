import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const introRef = useRef(null);
  const header1Ref = useRef(null);
  const header2Ref = useRef(null);

  const [stickyOffsets, setStickyOffsets] = useState({
    card1Top: '3.5rem',
    card2Top: 'calc(3.5rem + 6rem)',
    card3Top: 'calc(3.5rem + 12rem)',
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

  // Dynamically calculate and adapt sticky offsets to actual row dimensions
  useEffect(() => {
    const updateStickyOffsets = () => {
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        const baseTop = 56; // 3.5rem (sits cleanly below mobile nav)
        const h1 = Math.max(header1Ref.current?.offsetHeight || 0, 92);
        const h2 = Math.max(header2Ref.current?.offsetHeight || 0, 92);

        setStickyOffsets({
          card1Top: `${baseTop}px`,
          card2Top: `${baseTop + h1}px`,
          card3Top: `${baseTop + h1 + h2}px`,
        });
      } else {
        const baseTopPx = Math.round(window.innerHeight * 0.18);
        const h1 = Math.max(header1Ref.current?.offsetHeight || 0, 96);
        const h2 = Math.max(header2Ref.current?.offsetHeight || 0, 96);

        setStickyOffsets({
          card1Top: `${baseTopPx}px`,
          card2Top: `${baseTopPx + h1}px`,
          card3Top: `${baseTopPx + h1 + h2}px`,
        });
      }
    };

    updateStickyOffsets();

    const ro = new ResizeObserver(() => {
      updateStickyOffsets();
    });

    if (header1Ref.current) ro.observe(header1Ref.current);
    if (header2Ref.current) ro.observe(header2Ref.current);
    window.addEventListener('resize', updateStickyOffsets);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(updateStickyOffsets);
    }

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateStickyOffsets);
    };
  }, []);

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
      className="section-padding rounded-t-3xl bg-[var(--color-secondary-400)] text-[var(--color-text-bg)] relative z-20"
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

      {/* Sticky cards container with dynamically adapting offsets */}
      <div className="w-full pt-[var(--space-lg)]">
        <div className="mt-8 sm:mt-12 flex flex-col bg-[var(--color-secondary-400)]">
          {/* ==================== Service 01 ==================== */}
          <div
            className="sticky z-[1] border-t border-[var(--color-secondary-300)] bg-[var(--color-secondary-400)] mb-[22em] sm:mb-[20em] md:mb-[19em] lg:mb-[20em]"
            style={{ top: stickyOffsets.card1Top }}
          >
            {/* Header row: fixed number column + generous gap + flexible title column */}
            <div
              ref={header1Ref}
              className="grid grid-cols-[4.5rem_1fr] sm:grid-cols-[5.5rem_1fr] gap-x-4 sm:gap-x-6 md:grid-cols-12 md:gap-x-[var(--gap-fluid)] items-baseline md:items-center text-left text-[length:var(--text-heading-2)] font-semibold text-[var(--color-accent-400)] md:justify-between py-3 sm:py-4 md:py-[var(--space-md)] 2xl:py-[var(--space-sm)]"
            >
              <span className="col-span-1 md:col-span-2 select-none tracking-tight tabular-nums">
                ({services[0]?.index || '01'})
              </span>
              <h3 className="col-span-1 md:col-span-8 md:col-start-6 tracking-tight leading-[1.08] md:leading-snug">
                {services[0]?.title?.toLowerCase().includes('full-stack') ? (
                  <>
                    Full-Stack <br className="block sm:hidden" />Development
                  </>
                ) : (
                  services[0]?.title
                )}
              </h3>
            </div>

            {/* Service 01 Body: description + feature list */}
            <div className="relative flex flex-col place-items-start pt-6 sm:pt-8 md:pt-[var(--space-3xs)] pb-10 sm:pb-12 md:pb-6 md:grid md:min-h-[38vh] md:grid-cols-12">
              <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-6 sm:gap-y-8 md:gap-y-[var(--space-sm)] md:pt-[var(--space-sm)]">
                <p className="w-full max-w-[42ch] text-[length:var(--text-base)] md:text-[17px] font-medium leading-relaxed sm:leading-relaxed text-[var(--color-secondary-50)]">
                  {services[0]?.description}
                </p>
                <div className="flex w-full flex-col divide-y divide-[var(--color-secondary-300)] pt-2 sm:pt-4">
                  {services[0]?.features?.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-baseline gap-x-4 sm:gap-x-6 py-3.5 sm:py-4 md:py-2.5"
                    >
                      <span className="font-mono text-sm sm:text-base font-medium leading-none text-[var(--color-secondary-75)] select-none mr-2 sm:mr-3">
                        0{i + 1}
                      </span>
                      <span className="font-bold text-[var(--color-accent-400)] sm:text-[var(--color-accent-500)] text-lg sm:text-xl md:text-[length:var(--text-heading-4)] leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ==================== Service 02 ==================== */}
          <div
            className="sticky z-[2] border-t border-[var(--color-secondary-300)] bg-[var(--color-secondary-400)] mb-[18em] sm:mb-[16em] md:mb-[13.5em] lg:mb-[14em]"
            style={{ top: stickyOffsets.card2Top }}
          >
            {/* Header row */}
            <div
              ref={header2Ref}
              className="grid grid-cols-[4.5rem_1fr] sm:grid-cols-[5.5rem_1fr] gap-x-4 sm:gap-x-6 md:grid-cols-12 md:gap-x-[var(--gap-fluid)] items-baseline md:items-center text-left text-[length:var(--text-heading-2)] font-semibold text-[var(--color-accent-400)] md:justify-between py-4 sm:py-5 md:py-[var(--space-md)] 2xl:py-[var(--space-sm)]"
            >
              <span className="col-span-1 md:col-span-2 select-none tracking-tight tabular-nums">
                ({services[1]?.index || '02'})
              </span>
              <h3 className="col-span-1 md:col-span-8 md:col-start-6 tracking-tight leading-[1.08] md:leading-snug">
                {services[1]?.title}
              </h3>
            </div>

            {/* Service 02 Body */}
            <div className="relative flex flex-col place-items-start pt-6 sm:pt-8 md:pt-[var(--space-3xs)] pb-10 sm:pb-12 md:pb-6 md:grid md:min-h-[38vh] md:grid-cols-12">
              <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-6 sm:gap-y-8 md:gap-y-[var(--space-sm)] md:pt-[var(--space-sm)]">
                <p className="w-full max-w-[42ch] text-[length:var(--text-base)] md:text-[17px] font-medium leading-relaxed sm:leading-relaxed text-[var(--color-secondary-50)]">
                  {services[1]?.description}
                </p>
                <div className="flex w-full flex-col divide-y divide-[var(--color-secondary-300)] pt-2 sm:pt-4">
                  {services[1]?.features?.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-baseline gap-x-4 sm:gap-x-6 py-3.5 sm:py-4 md:py-2.5"
                    >
                      <span className="font-mono text-sm sm:text-base font-medium leading-none text-[var(--color-secondary-75)] select-none mr-2 sm:mr-3">
                        0{i + 1}
                      </span>
                      <span className="font-bold text-[var(--color-accent-400)] sm:text-[var(--color-accent-500)] text-lg sm:text-xl md:text-[length:var(--text-heading-4)] leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ==================== Service 03 ==================== */}
          <div
            className="sticky z-[3] border-t border-[var(--color-secondary-300)] bg-[var(--color-secondary-400)] mb-[14em] sm:mb-[12em] md:mb-[7.5em] lg:mb-[8em]"
            style={{ top: stickyOffsets.card3Top }}
          >
            {/* Header row */}
            <div className="grid grid-cols-[4.5rem_1fr] sm:grid-cols-[5.5rem_1fr] gap-x-4 sm:gap-x-6 md:grid-cols-12 md:gap-x-[var(--gap-fluid)] items-baseline md:items-center text-left text-[length:var(--text-heading-2)] font-semibold text-[var(--color-accent-400)] md:justify-between py-4 sm:py-5 md:py-[var(--space-md)] 2xl:py-[var(--space-sm)]">
              <span className="col-span-1 md:col-span-2 select-none tracking-tight tabular-nums">
                ({services[2]?.index || '03'})
              </span>
              <h3 className="col-span-1 md:col-span-8 md:col-start-6 tracking-tight leading-[1.08] md:leading-snug">
                {services[2]?.title}
              </h3>
            </div>

            {/* Service 03 Body */}
            <div className="relative flex flex-col place-items-start pt-6 sm:pt-8 md:pt-[var(--space-3xs)] pb-10 sm:pb-12 md:pb-6 md:grid md:min-h-[38vh] md:grid-cols-12">
              <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-6 sm:gap-y-8 md:gap-y-[var(--space-sm)] md:pt-[var(--space-sm)]">
                <p className="w-full max-w-[42ch] text-[length:var(--text-base)] md:text-[17px] font-medium leading-relaxed sm:leading-relaxed text-[var(--color-secondary-50)]">
                  {services[2]?.description}
                </p>
                <div className="flex w-full flex-col divide-y divide-[var(--color-secondary-300)] pt-2 sm:pt-4">
                  {services[2]?.features?.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-baseline gap-x-4 sm:gap-x-6 py-3.5 sm:py-4 md:py-2.5"
                    >
                      <span className="font-mono text-sm sm:text-base font-medium leading-none text-[var(--color-secondary-75)] select-none mr-2 sm:mr-3">
                        0{i + 1}
                      </span>
                      <span className="font-bold text-[var(--color-accent-400)] sm:text-[var(--color-accent-500)] text-lg sm:text-xl md:text-[length:var(--text-heading-4)] leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
