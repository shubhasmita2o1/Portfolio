import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Skills } from './Skills';

gsap.registerPlugin(ScrollTrigger);

const TITLE_LINES = ['DEVELOPER', 'DESIGNER', 'CREATOR/'];

export function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    let ctx;
    const rafId = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
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
        <div className="section-padding sm:pb-[10em] pb-[5em] flex flex-col gap-y-[var(--space-lg)] rounded-b-3xl bg-[var(--color-secondary-400)] lg:gap-y-[var(--space-2xl)] md:pt-[15vh]">
          
          {/* Top Custom Grid: DEVELOPER / DESIGNER / CREATOR/ + Skills */}
          <div className="custom-grid">
            <h2
              ref={titleRef}
              className="section-heading cs5:text-[length:var(--text-h1-display)] text-[length:var(--text-menu)] relative z-30 flex w-full flex-col col-span-full leading-none text-[var(--color-accent-400)] mix-blend-exclusion lg:col-span-6 mb-8 lg:mb-0 order-1 font-bold"
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
            <div className="relative z-0 lg:col-span-6 col-span-full flex w-full items-start order-2">
              <Skills />
            </div>
          </div>

          {/* Bottom Custom Grid: Image 1.webp + About Me narrative */}
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
              <div className="relative w-full max-w-[39ch] text-balance text-[length:var(--text-heading-4)] font-medium leading-snug text-[var(--color-accent-400)]">
                I'm a software engineer driven by a passion for turning ideas into clean, intuitive digital experiences.
              </div>
              <div className="flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-sm)] lg:flex-row">
                <span className="flex h-fit overflow-clip font-mono tracking-[var(--tracking-mono)]">
                  <span className="flex h-full font-medium uppercase text-nowrap text-[var(--color-secondary-50)]">
                    (About Me)
                  </span>
                </span>
                <div className="flex w-full gap-y-4 max-w-[38ch] flex-col text-balance text-[length:var(--text-base)] font-medium leading-base text-[var(--color-secondary-50)]">
                  <p>
                    I’m a full-stack developer who builds fast, modern web applications mostly with Next.js and Tailwind CSS because they just work. I work with businesses and startups to turn ideas into reliable, user-friendly products built to scale.
                  </p>
                  <p>
                    I've been building websites long enough to have strong opinions about things that don't matter to most people, like whether a transition should be 150ms or 200ms. (It's 150ms, btw). Build the thing, make it work, make it feel good. That's the gig.
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