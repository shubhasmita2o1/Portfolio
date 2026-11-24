import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Skills } from './Skills';

gsap.registerPlugin(ScrollTrigger);

const TITLE_LINES = ['DEVELOPER', 'DESIGNER', 'CREATOR/'];

export function About() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    let ctx;
    const rafId = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        // 1. Masked line reveal for DEVELOPER / DESIGNER / CREATOR/
        const letterEls = titleRef.current?.querySelectorAll('.letter');
        if (letterEls?.length) {
          gsap.fromTo(
            letterEls,
            { yPercent: 110, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.85,
              stagger: 0.025,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true,
              },
            }
          );
        }

        // 2. Scale Down + Slide Up (Section Shrink on Exit) as user scrolls into Contact
        if (cardRef.current) {
          gsap.to(cardRef.current, {
            scale: 0.93,
            yPercent: -4,
            transformOrigin: 'bottom center',
            ease: 'none',
            scrollTrigger: {
              trigger: '#Contact',
              start: 'top bottom',
              end: 'top 20%',
              scrub: true,
            },
          });
        }
      });
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section id="About" ref={sectionRef} className="mt-[-2vh] relative z-20">
      <div className="relative">
        <div
          ref={cardRef}
          className="section-padding sm:pb-[10em] pb-[5em] flex flex-col gap-y-[var(--space-lg)] rounded-b-3xl bg-[var(--color-secondary-400)] lg:gap-y-[var(--space-2xl)] md:pt-[15vh] will-change-transform"
        >
          
          {/* Top: DEVELOPER / DESIGNER / CREATOR/ + Skills */}
          <div className="custom-grid">
            <h2
              ref={titleRef}
              className="section-heading text-[length:var(--text-h1-display)] relative z-30 flex w-full flex-col col-span-full leading-none text-[var(--color-accent-400)] mix-blend-exclusion md:col-span-6 lg:col-span-6 mb-8 md:mb-0 order-1 font-bold"
            >
              {TITLE_LINES.map((line, lineIdx) => (
                <div key={lineIdx} className="overflow-hidden py-[0.08em] -my-[0.08em]">
                  <span className="inline-block">
                    {line.split('').map((char, charIdx) =>
                      char === ' ' ? (
                        <span key={charIdx} className="inline-block">
                          &nbsp;
                        </span>
                      ) : (
                        <span key={charIdx} className="inline-block letter">
                          {char}
                        </span>
                      )
                    )}
                  </span>
                </div>
              ))}
            </h2>
            <div className="relative z-0 col-span-full md:col-span-6 lg:col-span-6 flex w-full items-start order-2">
              <Skills />
            </div>
          </div>

          {/* Bottom: Image + About Me */}
          <div className="custom-grid col-span-full gap-y-[var(--space-lg)] lg:gap-y-[var(--space-2xl)]">
            <div className="pointer-events-none max-h-[30rem] relative z-0 col-span-3 flex aspect-square w-full items-center overflow-clip rounded-md sm:aspect-auto md:items-end">
              <img
                alt="Portrait"
                width="1536"
                height="2040"
                className="h-full w-full object-cover object-center grayscale contrast-110"
                src="/1.webp"
              />
            </div>

            <div className="col-span-7 col-start-6 flex flex-col gap-y-[var(--space-xl)] lg:gap-y-[var(--space-2xl)]">
              {/* Main Heading */}
              <div className="relative w-full max-w-[39ch] text-balance text-[length:var(--text-heading-4)] font-medium leading-snug text-[var(--color-accent-400)]">
                I build clean, scalable web applications that feel effortless to use.
              </div>

              {/* About Me Content */}
              <div className="flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-sm)] lg:flex-row">
                <span className="flex h-fit overflow-clip font-mono tracking-[var(--tracking-mono)]">
                  <span className="flex h-full font-medium uppercase text-nowrap text-[var(--color-secondary-50)]">
                    (About Me)
                  </span>
                </span>

                <div className="flex w-full gap-y-4 max-w-[38ch] flex-col text-balance text-[length:var(--text-base)] font-medium leading-base text-[var(--color-secondary-50)]">
                  <p>
                    I’m a full-stack developer who enjoys turning ideas into reliable products. From designing APIs and database architecture to crafting responsive interfaces, I take ownership of the entire process.
                  </p>
                  <p>
                    I’ve worked on multi-tenant platforms, role-based systems, and production websites for clients. My focus is always on writing clean code, creating smooth experiences, and building things that actually last.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}