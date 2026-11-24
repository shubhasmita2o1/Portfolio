import { useState, useEffect } from 'react';
import { MagneticButton } from './MagneticButton';

export function Footer() {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
      });
      setTimeStr(`${time}, IST`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#E8E8E3] text-[#080807] font-editorial pt-6 pb-16">
      <div className="section-padding-equal relative flex flex-col items-center justify-center gap-y-[var(--space-xl)] py-[var(--space-lg)]">
        {/* Top 12-Column Grid: Menu & Socials */}
        <div className="grid-gap grid w-full grid-cols-2 gap-y-[var(--space-md)] text-[length:var(--text-base)] md:grid-cols-12">
          {/* Menu Column (col-6) */}
          <div className="flex flex-col md:col-span-6">
            <h3 className="mb-[var(--space-xs)] flex border-b-[1.5px] border-[var(--color-accent-500)] pb-[var(--space-2xs)] font-bold tracking-base text-[var(--color-secondary-300)] font-editorial">
              Menu
            </h3>
            <ul className="flex flex-col gap-y-[var(--space-3xs)]">
              <li>
                <a
                  className="group relative block h-fit overflow-hidden font-medium cursor-pointer select-none flex w-fit leading-base text-[var(--color-secondary-100)] sm:leading-snug"
                  href="#Home"
                >
                  <span className="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                    Home
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0"
                  >
                    Home
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="group relative block h-fit overflow-hidden font-medium cursor-pointer select-none flex w-fit leading-base text-[var(--color-secondary-100)] sm:leading-snug"
                  href="#Services"
                >
                  <span className="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                    Services
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0"
                  >
                    Services
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="group relative block h-fit overflow-hidden font-medium cursor-pointer select-none flex w-fit leading-base text-[var(--color-secondary-100)] sm:leading-snug"
                  href="#Works"
                >
                  <span className="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                    Works
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0"
                  >
                    Works
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="group relative block h-fit overflow-hidden font-medium cursor-pointer select-none flex w-fit leading-base text-[var(--color-secondary-100)] sm:leading-snug"
                  href="#About"
                >
                  <span className="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                    About
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0"
                  >
                    About
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="group relative block h-fit overflow-hidden font-medium cursor-pointer select-none flex w-fit leading-base text-[var(--color-secondary-100)] sm:leading-snug"
                  href="#Contact"
                >
                  <span className="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                    Contact
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0"
                  >
                    Contact
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Column (col-3) */}
          <div className="flex flex-col md:col-span-3">
            <h3 className="mb-[var(--space-xs)] flex border-b-[1.5px] border-[var(--color-accent-500)] pb-[var(--space-2xs)] font-bold tracking-base text-[var(--color-secondary-300)] font-editorial">
              Socials
            </h3>
            <ul className="flex flex-col gap-y-[var(--space-3xs)]">
              <li>
                <a
                  className="group relative block h-fit overflow-hidden font-medium cursor-pointer select-none flex w-fit leading-base text-[var(--color-secondary-100)] sm:leading-snug"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/zunedaalim/"
                >
                  <span className="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                    Linkedin
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0"
                  >
                    Linkedin
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="group relative block h-fit overflow-hidden font-medium cursor-pointer select-none flex w-fit leading-base text-[var(--color-secondary-100)] sm:leading-snug"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/zuned_aalim/"
                >
                  <span className="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                    Instagram
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0"
                  >
                    Instagram
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="group relative block h-fit overflow-hidden font-medium cursor-pointer select-none flex w-fit leading-base text-[var(--color-secondary-100)] sm:leading-snug"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/zunedaalim"
                >
                  <span className="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                    Github
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0"
                  >
                    Github
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Local Time & Scroll to Top */}
        <div className="grid-gap flex w-full items-end justify-between md:grid md:grid-cols-12 pt-6">
          <span className="flex font-[500] flex-col text-[length:var(--text-heading-3)] leading-tight tracking-[var(--tracking-heading)] text-[var(--color-secondary-300)] sm:order-first sm:text-[length:var(--text-heading-3)] md:col-span-6"></span>

          {/* Local Time (col-3) */}
          <div className="flex flex-col text-[length:var(--text-base-small)] md:col-span-3">
            <span className="font-bold uppercase text-[var(--color-secondary-300)] font-mono text-xs tracking-wider mb-1">
              LOCAL TIME
            </span>
            <span className="font-mono font-medium uppercase tracking-[var(--tracking-mono)] text-[var(--color-secondary-100)] text-sm">
              {timeStr || 'Loading...'}
            </span>
          </div>

          {/* Circular Scroll To Top Button (col-3) */}
          <div className="hidden h-fit w-full justify-end md:col-span-3 md:flex">
            <div className="w-fit">
              <MagneticButton strength={0.45}>
                <button
                  onClick={scrollToTop}
                  aria-label="Scroll to top"
                  className="group relative hidden w-fit flex-col items-center justify-center overflow-hidden rounded-full bg-[var(--color-accent-500)] p-[var(--space-lg)] duration-1000 ease-expo hover:scale-90 md:flex cursor-pointer shadow-sm"
                >
                  <span className="absolute flex transition-all duration-500 ease-in-out-cubic group-hover:-translate-y-20">
                    <img alt="Scroll to top arrow" width="26" height="28" src="/arrow.svg" />
                  </span>
                  <span className="absolute flex translate-y-20 transition-all duration-500 ease-in-out-cubic group-hover:translate-y-0">
                    <img alt="Scroll to top arrow" width="26" height="28" src="/arrow.svg" />
                  </span>
                </button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
