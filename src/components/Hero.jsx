import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticButton } from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const mobileWordsRef = useRef(null);
  const arrowRef = useRef(null);
  const manifestoRef = useRef(null);
  const ctaRef = useRef(null);
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);
  const statusRef = useRef(null);
  const dateRef = useRef(null);
  const playedRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const letters = svgRef.current
        ? svgRef.current.querySelectorAll('.name-letter')
        : [];

      if (letters.length > 0) {
        gsap.set(letters, { y: 200 });
      }

      const mobileSpans = mobileWordsRef.current
        ? mobileWordsRef.current.querySelectorAll('.mobile-word')
        : [];

      if (mobileSpans.length > 0) {
        gsap.set(mobileSpans, { yPercent: 110 });
      }

      if (imageWrapRef.current) {
        gsap.set(imageWrapRef.current, {
          clipPath: 'inset(50% 0% 50% 0% round 8px)',
        });
      }

      if (imageRef.current) {
        gsap.set(imageRef.current, { scale: 1.25 });
      }

      if (arrowRef.current) {
        gsap.set(arrowRef.current, {
          opacity: 0,
          scale: 0.5,
        });
      }

      if (manifestoRef.current) {
        gsap.set(manifestoRef.current, { yPercent: 110 });
      }

      if (ctaRef.current) {
        gsap.set(ctaRef.current, { yPercent: 110 });
      }

      if (statusRef.current) {
        gsap.set(statusRef.current, { yPercent: 110 });
      }

      if (dateRef.current) {
        gsap.set(dateRef.current, { yPercent: 110 });
      }

      const playEntrance = () => {
        if (playedRef.current) return;
        playedRef.current = true;

        const tl = gsap.timeline({
          defaults: { ease: 'power3.out' },
        });

        if (imageWrapRef.current) {
          tl.to(
            imageWrapRef.current,
            {
              clipPath: 'inset(0% 0% 0% 0% round 8px)',
              duration: 0.9,
              ease: 'power3.inOut',
            },
            0
          );
        }

        if (imageRef.current) {
          tl.to(
            imageRef.current,
            {
              scale: 1,
              duration: 1.1,
              ease: 'power3.out',
            },
            0
          );
        }

        if (letters.length > 0) {
          tl.to(
            letters,
            {
              y: 0,
              duration: 1,
              stagger: 0.04,
              ease: 'power4.out',
              force3D: true,
            },
            0.1
          );
        }

        if (mobileSpans.length > 0) {
          tl.to(
            mobileSpans,
            {
              yPercent: 0,
              duration: 0.95,
              stagger: 0.1,
              ease: 'power4.out',
              clearProps: 'transform',
            },
            0.1
          );
        }

        if (arrowRef.current) {
          tl.to(
            arrowRef.current,
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: 'power2.out',
              clearProps: 'transform',
            },
            0.25
          );
        }

        if (manifestoRef.current) {
          tl.to(
            manifestoRef.current,
            {
              yPercent: 0,
              duration: 0.85,
              ease: 'power3.out',
              clearProps: 'transform',
            },
            0.3
          );
        }

        if (ctaRef.current) {
          tl.to(
            ctaRef.current,
            {
              yPercent: 0,
              duration: 0.85,
              ease: 'power3.out',
              clearProps: 'transform',
            },
            0.4
          );
        }

        if (statusRef.current) {
          tl.to(
            statusRef.current,
            {
              yPercent: 0,
              duration: 0.8,
              ease: 'power3.out',
              clearProps: 'transform',
            },
            0.3
          );
        }

        if (dateRef.current) {
          tl.to(
            dateRef.current,
            {
              yPercent: 0,
              duration: 0.9,
              ease: 'power4.out',
              clearProps: 'transform',
            },
            0.4
          );
        }
      };

      const updateLetterSpacing = () => {
        if (!svgRef.current) return;

        const letterNodes =
          svgRef.current.querySelectorAll('.name-letter');

        if (letterNodes.length !== 11) return;

        const widths = [];

        for (let i = 0; i < letterNodes.length; i++) {
          const len = letterNodes[i].getComputedTextLength();

          if (!len || len <= 0) return;

          widths.push(len);
        }

        const totalWidth = 1430;
        const sumWidths = widths.reduce((acc, w) => acc + w, 0);
        const remaining = totalWidth - sumWidths;
        const gap = remaining / (widths.length - 1);

        let currentX = 0;

        letterNodes.forEach((node, i) => {
          node.setAttribute('x', currentX.toFixed(1));
          currentX += widths[i] + gap;
        });
      };

      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(updateLetterSpacing);
      } else {
        setTimeout(updateLetterSpacing, 50);
      }

      window.addEventListener('resize', updateLetterSpacing);
      window.addEventListener('hero-enter', playEntrance);

      const fallbackTimer = setTimeout(playEntrance, 1200);

      const heroSection = sectionRef.current;
      const heroContainer = containerRef.current;
      const servicesSection = document.getElementById('Services');

      if (heroSection && heroContainer) {
        ScrollTrigger.create({
          trigger: heroSection,
          start: 'top top',
          endTrigger: servicesSection || '#Services',
          end: 'top top',
          pin: true,
          pinSpacing: false,
        });

        gsap.to(heroContainer, {
          scale: 0.94,
          opacity: 0.35,
          ease: 'none',
          scrollTrigger: {
            trigger: servicesSection || '#Services',
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        });
      }

      return () => {
        window.removeEventListener('hero-enter', playEntrance);
        window.removeEventListener('resize', updateLetterSpacing);
        clearTimeout(fallbackTimer);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-svh w-full py-0 z-10"
      id="Home"
    >
      <div
        ref={containerRef}
        className="section-padding-equal flex h-svh w-full items-end bg-[#E8E8E3] will-change-transform"
      >
        <div className="relative flex w-full flex-col md:gap-y-[var(--space-lg)]">

          {/* ========== NAME ========== */}
          <h1 className="w-full overflow-visible leading-none">
            {/* Desktop SVG */}
            <svg
              ref={svgRef}
              width="100%"
              height="163"
              viewBox="0 0 1430 163"
              className="hidden h-auto w-full md:block text-[#080807]"
              xmlns="http://www.w3.org/2000/svg"
              style={{ overflow: 'visible' }}
            >
              {[
                { char: 'S', x: 0 },
                { char: 'H', x: 128 },
                { char: 'U', x: 269 },
                { char: 'B', x: 410 },
                { char: 'H', x: 543 },
                { char: 'A', x: 684 },
                { char: 'S', x: 819 },
                { char: 'M', x: 947 },
                { char: 'I', x: 1119 },
                { char: 'T', x: 1175 },
                { char: 'A', x: 1297 },
              ].map((item, index) => (
                <text
                  key={index}
                  x={item.x}
                  y="152"
                  className="name-letter font-editorial"
                  style={{
                    transform: 'translateY(200px)',
                    willChange: 'transform',
                    fontFamily: "montreal, 'PP Neue Montreal', sans-serif",
                    fontWeight: 800,
                    fontSize: '196px',
                    fill: 'var(--color-secondary-400, #080807)',
                  }}
                >
                  {item.char}
                </text>
              ))}
            </svg>

            {/* Mobile Name - Full name, no cutting */}
            <div
              ref={mobileWordsRef}
              className="flex w-full flex-col items-center md:hidden select-none pt-4"
            >
              <div className="w-full text-center overflow-visible px-3">
                <span className="mobile-word block font-editorial font-bold uppercase leading-[0.9] tracking-tight text-[var(--color-secondary-400)] text-[clamp(2.8rem,12.5vw,4.1rem)]">
                  SHUBHASMITA
                </span>
              </div>
            </div>
          </h1>

          {/* ========== LOWER CONTENT ========== */}
          <div className="relative grid w-full grid-cols-12 justify-between gap-x-[var(--gap-fluid)] gap-y-6 md:gap-y-[var(--space-md)] mt-5 md:mt-0">

            {/* LEFT COLUMN */}
            <div className="col-span-12 flex flex-col justify-between gap-y-6 pt-2 md:col-span-4 md:gap-y-[var(--space-md)]">

              <div className="flex flex-col gap-5 md:gap-y-[var(--space-xl)]">

                {/* ARROW - desktop only */}
                <div className="hidden overflow-clip md:block">
                  <span ref={arrowRef} className="block">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="1.25"
                      viewBox="6 6 12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="m-0 size-4 p-0 md:size-6"
                      style={{ color: '#8C8C73' }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="7" y1="7" x2="17" y2="17"></line>
                      <polyline points="17 7 17 17 7 17"></polyline>
                    </svg>
                  </span>
                </div>

                {/* TAGLINE + BUTTON */}
                <div className="flex flex-col gap-y-4 md:gap-y-[var(--space-md)] items-center md:items-start text-center md:text-left">

                  <div className="overflow-clip">
                    <div
                      ref={manifestoRef}
                      className="flex w-full max-w-[34ch] flex-col gap-y-2 text-balance"
                    >
                      <p className="text-[15px] md:text-[length:var(--text-base)] font-medium leading-snug text-[var(--color-secondary-100)]">
                        Thoughtful design. Powerful engineering. Meaningful experiences.
                      </p>

                      <p className="text-[13px] md:text-[length:var(--text-base-small)] font-medium leading-relaxed text-[var(--color-secondary-100)]">
                        Available for freelance projects worldwide.
                      </p>
                    </div>
                  </div>

                  {/* CONTACT BUTTON */}
                  <div className="overflow-visible">
                    <div ref={ctaRef} className="overflow-visible">
                      <MagneticButton strength={0.4}>
                        <a href="#Contact" className="inline-flex">
                          <span className="group pointer-events-auto relative flex h-fit w-fit items-center justify-center overflow-hidden rounded-full bg-[var(--color-secondary-300)] px-6 py-3 font-bold uppercase tracking-wide text-[#f1f0ed] text-[14px] md:text-[length:var(--text-base)]">
                            <span className="absolute inset-0 z-10 block overflow-hidden">
                              <span className="block h-full w-full translate-y-full rounded-t-[15rem] bg-[var(--color-accent-600)] transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] sm:group-hover:translate-y-0 sm:group-hover:rounded-none"></span>
                            </span>

                            <span className="relative z-20 block overflow-hidden transition-all">
                              <span
                                className="block after:absolute after:left-0 after:block after:translate-y-0 after:transition-all after:duration-500 after:ease-[cubic-bezier(0.77,0,0.175,1)] after:content-[attr(data-after)] sm:group-hover:after:-translate-y-full"
                                data-after="CONTACT ↗"
                              >
                                <span className="flex transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] sm:group-hover:-translate-y-full">
                                  CONTACT ↗
                                </span>
                              </span>
                            </span>
                          </span>
                        </a>
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CENTER IMAGE */}
            <div className="col-span-12 md:col-span-4 flex flex-col items-center order-last md:order-none mt-2 md:mt-0">
              <div className="flex h-fit w-fit flex-col items-center justify-center overflow-hidden">
                <div
                  ref={imageWrapRef}
                  style={{
                    clipPath: 'inset(50% 0% 50% 0% round 12px)',
                    willChange: 'clip-path',
                  }}
                  className="pointer-events-none h-[26vh] w-[240px] rounded-xl md:h-[50vh] md:w-auto md:max-w-lg md:rounded-lg overflow-hidden"
                >
                  <img
                    ref={imageRef}
                    style={{
                      transform: 'scale(1.25)',
                      willChange: 'transform',
                    }}
                    alt="Portrait"
                    width="1536"
                    height="2040"
                    className="h-full w-full object-cover object-center grayscale"
                    src="/1.webp"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Availability */}
            <div className="col-span-12 md:col-span-4 flex w-full flex-row md:flex-col items-center md:items-end justify-between md:justify-end gap-4 mt-1 md:mt-0">
              <div className="overflow-clip">
                <span
                  ref={statusRef}
                  className="block font-mono text-[12px] md:text-[length:var(--text-base-small)] font-medium uppercase leading-snug tracking-wider text-[var(--color-secondary-100)]"
                >
                  Available for work
                </span>
              </div>

              <div className="overflow-clip">
                <span
                  ref={dateRef}
                  className="block text-[2.2rem] md:text-[length:var(--text-heading-2)] font-semibold uppercase leading-none tracking-tight text-[var(--color-secondary-300)]"
                >
                  Nov'26
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}