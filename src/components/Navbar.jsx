import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.set(navRef.current, { y: -20, opacity: 0 });

    const handleEnter = () => {
      gsap.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.25
      });
    };

    window.addEventListener('hero-enter', handleEnter);
    const fallbackTimer = setTimeout(handleEnter, 1400);

    return () => {
      window.removeEventListener('hero-enter', handleEnter);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <header
      ref={navRef}
      style={{ opacity: 0, transform: 'translateY(-20px)', willChange: 'opacity, transform' }}
      className="absolute top-0 z-40 w-full"
    >
      <div className="section-padding-x mt-[var(--space-md)] flex flex-row items-start justify-between gap-x-[var(--gap-fluid)] lg:grid lg:grid-cols-12 lg:items-center">
        <div className="col-span-8 flex flex-col items-start gap-x-[var(--space-2xl)] gap-y-[var(--space-3xs)] lg:flex-row lg:items-center">
          <span className="block w-fit max-w-[14ch] text-balance font-medium leading-snug text-[var(--color-secondary-100)] text-[length:var(--text-base)] sm:max-w-max md:text-[length:var(--text-base-small)] 2xl:text-[length:var(--text-base)]">
            <div>Design. Code. Impact.</div>
          </span>
        </div>

        {/* Desktop only navigation */}
        <nav className="col-span-4 hidden md:flex justify-end text-[length:var(--text-base)] md:text-[length:var(--text-base-small)] 2xl:text-[length:var(--text-base)]">
          <ul className="m-0 flex flex-row items-center gap-x-[var(--space-2xs)] font-medium text-[var(--color-secondary-100)]">
            {['Services', 'Works', 'About', 'Contact'].map((item) => (
              <li key={item} className="flex leading-snug">
                <a
                  href={`/#${item}`}
                  className="group relative block h-fit overflow-hidden font-medium cursor-pointer select-none"
                >
                  <span className="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                    {item}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0"
                  >
                    {item}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}