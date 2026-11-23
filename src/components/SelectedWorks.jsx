import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

export function SelectedWorks() {
  const sectionRef = useRef(null);
  const digitStripRef = useRef(null);
  const activeIndexRef = useRef(0);
  const cardRefs = useRef([]);
  const headingRef = useRef(null);

  const headingChars = 'SELECTED WORKS /'.split('');

  const defaultProjects = [
    {
      id: "01",
      title: "NURA",
      subtitle: "Modern Marketing Website",
      category: "DEVELOPMENT",
      year: "2025",
      thumbnail: "https://image.mux.com/1D1Nf6aN00i94N6pC1fAedqWj5oXjK6kR43026Z02aWcxg/thumbnail.webp?time=0",
      link: "https://nurabyzuned.netlify.app/"
    },
    {
      id: "02",
      title: "Job Portal",
      subtitle: "Full-Stack Recruitment Platform",
      category: "DEVELOPMENT",
      year: "2025",
      thumbnail: "https://image.mux.com/NkWX5J5c73rFpZz7fV4IeA6yV01N7Xo5J01uF8v2hHn1k/thumbnail.webp?time=0",
      link: "https://zunedjobs.netlify.app/"
    },
    {
      id: "03",
      title: "Productivity SAAS",
      subtitle: "SAAS Platform",
      category: "DEVELOPMENT",
      year: "2025",
      thumbnail: "https://image.mux.com/vH977r6FzDq00KxL00F02g17n6m4j7B8lE9Fw6A00L1w6M/thumbnail.webp?time=0",
      link: "https://productivity-saas-zuned.netlify.app/"
    },
    {
      id: "04",
      title: "CineRec",
      subtitle: "ML Recommendation Engine",
      category: "DEVELOPMENT",
      year: "2025",
      thumbnail: "https://image.mux.com/00lO00x12r1E5N81zG5u00k5p800eP5yR2tK1jC7B901bS4/thumbnail.webp?time=0",
      link: "https://movierecommendation-sbjn.onrender.com/"
    },
    {
      id: "05",
      title: "Code2Img",
      subtitle: "Code-to-Image Tool",
      category: "DEVELOPMENT",
      year: "2025",
      thumbnail: "https://image.mux.com/f02e6hE4hG9zM15sC7a8bZ9C6B02C7l00G3C9Yk5Ew5lU/thumbnail.webp?time=0",
      link: "https://code2img-zuned.netlify.app/"
    }
  ];

  const projects = (portfolioData.projects && portfolioData.projects.length > 0)
    ? portfolioData.projects
    : defaultProjects;

  // Direct GPU-accelerated tween for silky-smooth odometer roll without React re-render lag
  const setCardIndex = (newIndex, immediate = false) => {
    if (newIndex < 0) newIndex = 0;
    if (newIndex > projects.length - 1) newIndex = projects.length - 1;
    if (activeIndexRef.current === newIndex && !immediate) return;

    activeIndexRef.current = newIndex;

    if (digitStripRef.current) {
      if (immediate) {
        gsap.set(digitStripRef.current, { yPercent: -newIndex * 20 });
      } else {
        gsap.to(digitStripRef.current, {
          yPercent: -newIndex * 20,
          duration: 0.5,
          ease: 'power3.out',
          overwrite: 'auto'
        });
      }
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ctx;
    const rafId = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        // Masked letter-by-letter reveal for SELECTED WORKS /
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
                trigger: headingRef.current || sectionRef.current || '#Works',
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true,
              },
            }
          );
        }

        // Symmetric boundary triggers between consecutive cards:
        // When card[i] crosses the 50% viewport line downward -> index becomes i
        // When card[i] crosses the 50% viewport line upward (leaveBack) -> index becomes i - 1
        for (let i = 1; i < projects.length; i++) {
          const card = cardRefs.current[i];
          if (!card) continue;
          ScrollTrigger.create({
            trigger: card,
            start: 'top 50%',
            refreshPriority: 0,
            onEnter: () => setCardIndex(i),
            onLeaveBack: () => setCardIndex(i - 1),
          });
        }

        // Initialize correct index on mount or page refresh
        const updateInitialIndex = () => {
          const vhCenter = window.innerHeight * 0.5;
          let active = 0;
          for (let i = 0; i < cardRefs.current.length; i++) {
            const el = cardRefs.current[i];
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= vhCenter) {
                active = i;
              }
            }
          }
          setCardIndex(active, true);
        };

        ScrollTrigger.sort();
        ScrollTrigger.refresh();
        updateInitialIndex();
      });
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      if (ctx) ctx.revert();
    };
  }, [projects.length]);

  return (
    <section id="Works" ref={sectionRef} className="relative z-20">
      <div className="section-padding bg-[var(--color-secondary-400)]">
        {/* Header Section */}
        <div className="flex flex-col gap-y-[var(--space-lg)] md:gap-y-[var(--space-2xl)]">
          <h2 className="section-heading relative text-[var(--color-accent-400)] text-[length:var(--text-h1-alt)] md:text-[length:var(--text-h1)]">
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
          <div className="grid-gap flex grid-cols-12 sm:justify-end lg:grid">
            <div className="col-span-7 col-start-1 flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-2xs)] sm:col-start-6 sm:flex-row">
              <span className="flex h-full font-medium uppercase text-nowrap text-[var(--color-secondary-75)] text-[16px] select-none">
                (PROJECTS)
              </span>
              <div className="w-full max-w-[28ch] text-balance font-medium leading-relaxed text-[var(--color-secondary-50)] text-[length:var(--text-base-large)]">
                Thoughtfully crafted digital experiences that blend utility and aesthetics into something functional, memorable, and refined.
              </div>
            </div>
          </div>
        </div>

        {/* 12-Column Grid with Giant Sticky Number and Project Cards */}
        <div className="grid-gap grid grid-cols-12 pt-[var(--space-lg)]">
          
          {/* Left Column: Sticky 22vw Number (01, 02, 03, 04, 05) */}
          <div className="sticky top-20 col-span-5 hidden h-fit w-full overflow-hidden text-[22vw] font-normal leading-[0.8] text-[var(--color-secondary-50)] md:flex select-none">
            <span className="relative">0</span>
            <div className="relative h-[22vw] overflow-hidden">
              <div 
                ref={digitStripRef}
                className="flex flex-col will-change-transform"
                style={{ transform: 'translateY(0%)' }}
              >
                <span className="inline-block h-[22vw]">1</span>
                <span className="inline-block h-[22vw]">2</span>
                <span className="inline-block h-[22vw]">3</span>
                <span className="inline-block h-[22vw]">4</span>
                <span className="inline-block h-[22vw]">5</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Project Cards */}
          <aside className="relative col-span-12 flex flex-col gap-y-[var(--space-xl)] md:col-span-7 md:gap-y-[var(--space-2xl)]">
            {projects.map((project, idx) => (
              <ProjectCard
                key={project.id || idx}
                project={project}
                index={idx}
                onRegisterRef={(el) => (cardRefs.current[idx] = el)}
              />
            ))}
          </aside>

        </div>
      </div>
    </section>
  );
}
