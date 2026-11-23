import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const introRef = useRef(null);

  const services = portfolioData.services || [
    {
      index: '01',
      title: 'Full-Stack Development',
      description:
        'From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.',
      features: [
        'React, Node.js, Express.js',
        'REST APIs, Firebase, Docker',
        'Git, GitHub, Postman',
      ],
    },
    {
      index: '02',
      title: 'UI/UX & Frontend',
      description:
        'Good design feels effortless. I design and develop responsive, intuitive interfaces that work smoothly across devices, with a strong focus on clarity, accessibility, and performance.',
      features: [
        'NextJs, TailwindCSS, GSAP',
        'Figma → Pixel-perfect code',
        'HTML, CSS, JavaScript',
      ],
    },
    {
      index: '03',
      title: 'Optimization',
      description:
        'I focus on building systems that stay reliable as things scale. From handling data efficiently to designing clean architecture, I apply core computer science principles to keep applications fast, stable, and future-ready.',
      features: [
        'Data Structures & Algorithms',
        'DBMS, OOP, OS Fundamentals',
        'Scalable systems & data pipelines',
      ],
    },
  ];

  const servicesIntro =
    portfolioData.servicesIntro ||
    'I specialize in building fast, reliable, and user-friendly full-stack web applications. I help small businesses and startups turn ideas into high-quality websites and products that actually work and scale.';

  const headingChars = 'WHAT I DO /'.split('');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
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
              trigger: headingRef.current,
              start: 'top 85%',
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
              trigger: headingRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="Services"
      ref={sectionRef}
      className="section-padding rounded-t-3xl bg-[var(--color-secondary-400)] text-[var(--color-text-bg)] relative z-20"
    >
      {/* Title + intro: stacked rows matching reference site */}
      <div className="relative flex w-full flex-col gap-y-[var(--space-lg)] md:gap-y-[var(--space-2xl)]">
        <h2 className="section-heading text-[var(--color-accent-400)] text-[length:var(--text-h1-alt)] md:text-[length:var(--text-h1)]">
          <div className="overflow-hidden">
            <span ref={headingRef} className="inline-block">
              {headingChars.map((char, i) =>
                char === ' ' ? (
                  <span key={i} className="inline-block">
                    &nbsp;
                  </span>
                ) : (
                  <span key={i} className="inline-block letter">
                    {char}
                  </span>
                )
              )}
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

      {/* Sticky cards – original technique with correct header offsets */}
      <div className="w-full pt-[var(--space-lg)]">
        <div className="mt-12 flex flex-col bg-[var(--color-secondary-400)]">
          {/* Service 01 — sticks at 18vh */}
          <div
            className="sticky z-[1] border-t border-[var(--color-secondary-300)] bg-[var(--color-secondary-400)] mb-[21.5em] sm:mb-[19em] md:mb-[19em] lg:mb-[20em]"
            style={{ top: '18vh' }}
          >
            <div className="flex grid-cols-12 items-center justify-start gap-x-[var(--space-xs)] text-left text-[length:var(--text-heading-2)] font-semibold text-[var(--color-accent-400)] md:grid md:justify-between md:gap-x-[var(--gap-fluid)]">
              <span className="col-span-2">(01)</span>
              <h3 className="col-span-8 col-start-6 py-[var(--space-md)] 2xl:py-[var(--space-sm)]">
                {services[0]?.title}
              </h3>
            </div>
            <div className="relative flex min-h-[30vh] flex-col place-items-start pt-[var(--space-3xs)] md:grid md:min-h-[40vh] md:grid-cols-12">
              <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-[var(--space-sm)] pt-[var(--space-sm)]">
                <p className="max-w-[40ch] text-balance text-[length:var(--text-base)] font-medium leading-snug text-[var(--color-secondary-50)]">
                  {services[0]?.description}
                </p>
                <div className="flex flex-col divide-y divide-[var(--color-secondary-200)] pt-1">
                  {services[0]?.features?.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-baseline gap-x-[var(--space-sm)] py-1 md:py-1.5 xl:gap-x-[var(--space-md)]"
                    >
                      <span className="font-mono text-[length:var(--text-base)] font-medium leading-none text-[var(--color-secondary-75)] mr-4 select-none">
                        0{i + 1}
                      </span>
                      <span className="font-bold text-[var(--color-accent-500)] text-[length:var(--text-heading-4)] leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Service 02 — sticks just under 01 header (~7em lower) */}
          <div
            className="sticky z-[2] border-t border-[var(--color-secondary-300)] bg-[var(--color-secondary-400)] mb-[15.5em] sm:mb-[13em] md:mb-[13.5em] lg:mb-[14em]"
            style={{ top: 'calc(18vh + 7em)' }}
          >
            <div className="flex grid-cols-12 items-center justify-start gap-x-[var(--space-xs)] text-left text-[length:var(--text-heading-2)] font-semibold text-[var(--color-accent-400)] md:grid md:justify-between md:gap-x-[var(--gap-fluid)]">
              <span className="col-span-2">(02)</span>
              <h3 className="col-span-8 col-start-6 py-[var(--space-md)] 2xl:py-[var(--space-sm)]">
                {services[1]?.title}
              </h3>
            </div>
            <div className="relative flex min-h-[30vh] flex-col place-items-start pt-[var(--space-3xs)] md:grid md:min-h-[40vh] md:grid-cols-12">
              <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-[var(--space-sm)] pt-[var(--space-sm)]">
                <p className="max-w-[40ch] text-balance text-[length:var(--text-base)] font-medium leading-snug text-[var(--color-secondary-50)]">
                  {services[1]?.description}
                </p>
                <div className="flex flex-col divide-y divide-[var(--color-secondary-200)] pt-1">
                  {services[1]?.features?.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-baseline gap-x-[var(--space-sm)] py-1 md:py-1.5 xl:gap-x-[var(--space-md)]"
                    >
                      <span className="font-mono text-[length:var(--text-base)] font-medium leading-none text-[var(--color-secondary-75)] mr-4 select-none">
                        0{i + 1}
                      </span>
                      <span className="font-bold text-[var(--color-accent-500)] text-[length:var(--text-heading-4)] leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Service 03 — sticks just under 02 header (~14em lower) */}
          <div
            className="sticky z-[3] border-t border-[var(--color-secondary-300)] bg-[var(--color-secondary-400)] mb-[7.5em] sm:mb-[7em] lg:mb-[8em]"
            style={{ top: 'calc(18vh + 14em)' }}
          >
            <div className="flex grid-cols-12 items-center justify-start gap-x-[var(--space-xs)] text-left text-[length:var(--text-heading-2)] font-semibold text-[var(--color-accent-400)] md:grid md:justify-between md:gap-x-[var(--gap-fluid)]">
              <span className="col-span-2">(03)</span>
              <h3 className="col-span-8 col-start-6 py-[var(--space-md)] 2xl:py-[var(--space-sm)]">
                {services[2]?.title}
              </h3>
            </div>
            <div className="relative flex min-h-[30vh] flex-col place-items-start pt-[var(--space-3xs)] md:grid md:min-h-[40vh] md:grid-cols-12">
              <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-[var(--space-sm)] pt-[var(--space-sm)]">
                <p className="max-w-[40ch] text-balance text-[length:var(--text-base)] font-medium leading-snug text-[var(--color-secondary-50)]">
                  {services[2]?.description}
                </p>
                <div className="flex flex-col divide-y divide-[var(--color-secondary-200)] pt-1">
                  {services[2]?.features?.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-baseline gap-x-[var(--space-sm)] py-1 md:py-1.5 xl:gap-x-[var(--space-md)]"
                    >
                      <span className="font-mono text-[length:var(--text-base)] font-medium leading-none text-[var(--color-secondary-75)] mr-4 select-none">
                        0{i + 1}
                      </span>
                      <span className="font-bold text-[var(--color-accent-500)] text-[length:var(--text-heading-4)] leading-snug">
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
