import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  const header1Ref = useRef(null);
  const header2Ref = useRef(null);
  const header3Ref = useRef(null);

  const content1Ref = useRef(null);
  const content2Ref = useRef(null);
  const content3Ref = useRef(null);

  const services = portfolioData.services || [
    {
      index: "01",
      title: "Full-Stack Development",
      description: "From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.",
      features: [
        "React, Node.js, Express.js",
        "REST APIs, Firebase, Docker",
        "Git, GitHub, Postman"
      ]
    },
    {
      index: "02",
      title: "UI/UX & Frontend",
      description: "Good design feels effortless. I design and develop responsive, intuitive interfaces that work smoothly across devices, with a strong focus on clarity, accessibility, and performance.",
      features: [
        "NextJs, TailwindCSS, GSAP",
        "Figma â†’ Pixel-perfect code",
        "HTML, CSS, JavaScript"
      ]
    },
    {
      index: "03",
      title: "Optimization",
      description: "I focus on building systems that stay reliable as things scale. From handling data efficiently to designing clean architecture, I apply core computer science principles to keep applications fast, stable, and future-ready.",
      features: [
        "Data Structures & Algorithms",
        "DBMS, OOP, OS Fundamentals",
        "Scalable systems & data pipelines"
      ]
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const stage = stageRef.current;
      const row1 = row1Ref.current;
      const row2 = row2Ref.current;
      const row3 = row3Ref.current;
      const header1 = header1Ref.current;
      const header2 = header2Ref.current;
      const content1 = content1Ref.current;
      const content2 = content2Ref.current;

      if (!stage || !row1 || !row2 || !row3 || !header1 || !header2) return;

      // Dynamic header height getters
      const getH1 = () => Math.min(header1.offsetHeight || 75, 95);
      const getH2 = () => Math.min(header2.offsetHeight || 75, 95);

      // Update stage height so the container exactly holds all 3 stacked rows and skills,
      // allowing the following section (SelectedWorks) to scroll up naturally right below it
      const updateStageHeight = () => {
        const h1 = getH1();
        const h2 = getH2();
        const h3Total = row3.offsetHeight || 340;
        stage.style.height = `${h1 + h2 + h3Total + 30}px`;
      };

      updateStageHeight();

      // Initial positions:
      // Row 1 starts docked at y = 0
      // Row 2 and Row 3 start positioned below the viewport
      gsap.set(row1, { y: 0, opacity: 1 });
      gsap.set(row2, { y: () => window.innerHeight, opacity: 1 });
      gsap.set(row3, { y: () => window.innerHeight, opacity: 1 });
      gsap.set(content1, { opacity: 1 });
      gsap.set(content2, { opacity: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: 'top 20px',
          end: '+=2000',
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          refreshPriority: 1,
          invalidateOnRefresh: true,
          onRefresh: updateStageHeight,
        }
      });

      // Phase 1: Service 01 is sticky at y = 0 (user inspects 01)
      tl.to({}, { duration: 0.5 });

      // Phase 2: Service 02 scrolls upward from below and stacks directly under Service 01 header
      tl.to(row2, {
        y: () => getH1(),
        ease: 'none',
        duration: 1.5
      });
      tl.to(content1, {
        opacity: 0,
        ease: 'power1.out',
        duration: 0.7
      }, '<+=0.4');

      // Brief pause on Service 02
      tl.to({}, { duration: 0.4 });

      // Phase 3: Service 03 scrolls upward from below and stacks directly under Service 02 header
      tl.to(row3, {
        y: () => getH1() + getH2(),
        ease: 'none',
        duration: 1.5
      });
      tl.to(content2, {
        opacity: 0,
        ease: 'power1.out',
        duration: 0.7
      }, '<+=0.4');

      // Phase 4: All 3 stacked (Header 1, Header 2, Header 3 + active description & all 3 skills)
      tl.to({}, { duration: 0.6 });

      // Post-mount refresh to synchronize all pinned coordinates
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <section 
      id="Services" 
      ref={sectionRef} 
      className="relative z-20 bg-[var(--color-secondary-400)] text-[var(--color-text-bg)] rounded-t-3xl"
    >
      {/* Header Row: WHAT I DO / */}
      <div className="section-padding pb-6 md:pb-10">
        <div className="relative flex w-full flex-col gap-y-[var(--space-lg)] md:gap-y-[var(--space-2xl)]">
          <h2 className="section-heading max-w-[18ch] text-[var(--color-accent-400)] text-[length:var(--text-h1-alt)] md:text-[length:var(--text-h1)]">
            What I Do /
          </h2>
          <div className="flex grid-cols-12 gap-x-[var(--gap-fluid)] md:grid">
            <div className="col-span-7 flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-2xs)] sm:flex-row md:col-start-6">
              <span className="flex h-full font-medium uppercase text-nowrap text-[var(--color-secondary-75)] text-[16px] select-none">
                (Services)
              </span>
              <p className="w-full max-w-[35ch] text-balance text-[length:var(--text-base-large)] font-medium leading-relaxed text-[var(--color-secondary-50)]">
                Full Stack Developer with 1+ years of experience building responsive, high-performance web applications using Java, Spring Boot, and React. I enjoy owning features end-to-end and believe in clean architecture mixed with a bit of vibe coding.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stacking Stage (Pinned during accordion stacking, then scrolls naturally) */}
      <div 
        ref={stageRef} 
        className="relative w-full"
      >
        {/* Service 01 */}
        <div
          ref={row1Ref}
          className="absolute top-0 left-0 right-0 section-padding-x bg-[var(--color-secondary-400)] text-[var(--color-text-bg)]"
          style={{ zIndex: 10 }}
        >
          {/* Header 1 */}
          <div
            ref={header1Ref}
            className="border-t border-[var(--color-secondary-300)] py-2 md:py-2.5 bg-[var(--color-secondary-400)] select-none"
          >
            <div className="flex grid-cols-12 items-center justify-start gap-x-[var(--space-xs)] text-left text-[length:var(--text-heading-2)] font-semibold text-[var(--color-accent-400)] leading-tight md:grid md:justify-between md:gap-x-[var(--gap-fluid)]">
              <span className="col-span-2 tracking-tight leading-tight">(01)</span>
              <h3 className="col-span-8 col-start-6 tracking-tight leading-tight">
                {services[0]?.title || "Full-Stack Development"}
              </h3>
            </div>
          </div>

          {/* Content 1 */}
          <div
            ref={content1Ref}
            className="bg-[var(--color-secondary-400)] pt-1 pb-3"
          >
            <div className="grid-gap relative flex flex-col place-items-start md:grid md:grid-cols-12">
              <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-2 md:gap-y-2.5 text-[length:var(--text-heading-4)]">
                <p className="max-w-[40ch] text-balance text-[length:var(--text-base)] font-medium leading-snug text-[var(--color-secondary-50)]">
                  {services[0]?.description}
                </p>
                <div className="flex flex-col divide-y divide-[var(--color-secondary-200)] pt-1">
                  {services[0]?.features?.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-baseline gap-x-[var(--space-sm)] py-1 md:py-1.5 xl:gap-x-[var(--space-md)]"
                    >
                      <span className="font-mono text-[length:var(--text-base)] font-medium leading-none text-[var(--color-secondary-75)] mr-4 select-none">
                        0{fIdx + 1}
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

        {/* Service 02 */}
        <div
          ref={row2Ref}
          className="absolute top-0 left-0 right-0 section-padding-x bg-[var(--color-secondary-400)] text-[var(--color-text-bg)]"
          style={{ zIndex: 20 }}
        >
          {/* Header 2 */}
          <div
            ref={header2Ref}
            className="border-t border-[var(--color-secondary-300)] py-2 md:py-2.5 bg-[var(--color-secondary-400)] select-none"
          >
            <div className="flex grid-cols-12 items-center justify-start gap-x-[var(--space-xs)] text-left text-[length:var(--text-heading-2)] font-semibold text-[var(--color-accent-400)] leading-tight md:grid md:justify-between md:gap-x-[var(--gap-fluid)]">
              <span className="col-span-2 tracking-tight leading-tight">(02)</span>
              <h3 className="col-span-8 col-start-6 tracking-tight leading-tight">
                {services[1]?.title || "UI/UX & Frontend"}
              </h3>
            </div>
          </div>

          {/* Content 2 */}
          <div
            ref={content2Ref}
            className="bg-[var(--color-secondary-400)] pt-1 pb-3"
          >
            <div className="grid-gap relative flex flex-col place-items-start md:grid md:grid-cols-12">
              <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-2 md:gap-y-2.5 text-[length:var(--text-heading-4)]">
                <p className="max-w-[40ch] text-balance text-[length:var(--text-base)] font-medium leading-snug text-[var(--color-secondary-50)]">
                  {services[1]?.description}
                </p>
                <div className="flex flex-col divide-y divide-[var(--color-secondary-200)] pt-1">
                  {services[1]?.features?.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-baseline gap-x-[var(--space-sm)] py-1 md:py-1.5 xl:gap-x-[var(--space-md)]"
                    >
                      <span className="font-mono text-[length:var(--text-base)] font-medium leading-none text-[var(--color-secondary-75)] mr-4 select-none">
                        0{fIdx + 1}
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

        {/* Service 03 */}
        <div
          ref={row3Ref}
          className="absolute top-0 left-0 right-0 section-padding-x bg-[var(--color-secondary-400)] text-[var(--color-text-bg)]"
          style={{ zIndex: 30 }}
        >
          {/* Header 3 */}
          <div
            ref={header3Ref}
            className="border-t border-[var(--color-secondary-300)] py-2 md:py-2.5 bg-[var(--color-secondary-400)] select-none"
          >
            <div className="flex grid-cols-12 items-center justify-start gap-x-[var(--space-xs)] text-left text-[length:var(--text-heading-2)] font-semibold text-[var(--color-accent-400)] leading-tight md:grid md:justify-between md:gap-x-[var(--gap-fluid)]">
              <span className="col-span-2 tracking-tight leading-tight">(03)</span>
              <h3 className="col-span-8 col-start-6 tracking-tight leading-tight">
                {services[2]?.title || "Optimization"}
              </h3>
            </div>
          </div>

          {/* Content 3 */}
          <div
            ref={content3Ref}
            className="bg-[var(--color-secondary-400)] pt-1 pb-3"
          >
            <div className="grid-gap relative flex flex-col place-items-start md:grid md:grid-cols-12">
              <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-2 md:gap-y-2.5 text-[length:var(--text-heading-4)]">
                <p className="max-w-[40ch] text-balance text-[length:var(--text-base)] font-medium leading-snug text-[var(--color-secondary-50)]">
                  {services[2]?.description}
                </p>
                <div className="flex flex-col divide-y divide-[var(--color-secondary-200)] pt-1">
                  {services[2]?.features?.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-baseline gap-x-[var(--space-sm)] py-1 md:py-1.5 xl:gap-x-[var(--space-md)]"
                    >
                      <span className="font-mono text-[length:var(--text-base)] font-medium leading-none text-[var(--color-secondary-75)] mr-4 select-none">
                        0{fIdx + 1}
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
