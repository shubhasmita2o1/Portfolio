import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticButton } from './MagneticButton';
import { portfolioData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnHero, setIsOnHero] = useState(true); // true = light background
  const buttonRef = useRef(null);
  const drawerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Always show the button (including on Hero)
      gsap.set(buttonRef.current, { opacity: 1, scale: 1, pointerEvents: 'auto' });

      // Detect when we enter / leave the Services section
      ScrollTrigger.create({
        trigger: '#Services',
        start: 'top 80px',
        onEnter: () => setIsOnHero(false),
        onLeaveBack: () => setIsOnHero(true),
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      drawerRef.current.classList.remove('hidden');
      drawerRef.current.classList.add('flex');
      gsap.fromTo(
        contentRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.7, ease: 'power3.out' }
      );
    } else {
      document.body.style.overflow = '';
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          x: '100%',
          duration: 0.5,
          ease: 'power3.inOut',
          onComplete: () => {
            if (drawerRef.current) {
              drawerRef.current.classList.remove('flex');
              drawerRef.current.classList.add('hidden');
            }
          },
        });
      }
    }
  }, [isOpen]);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <>
      {/* Floating Toggle Button – always visible */}
      <div
        ref={buttonRef}
        className="fixed top-6 right-6 z-[99999999] md:top-8 md:right-8"
      >
        <MagneticButton strength={0.45}>
          <button
            id="menu-toggle-btn"
            onClick={toggle}
            className={`p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              isOnHero
                ? 'bg-[var(--color-secondary-300)] text-[#f1f0ed]' // dark button on light hero
                : 'bg-[#E8E8E3] text-black' // original light button on dark sections
            } ${isOpen ? 'menu-btn-active' : ''}`}
            aria-label="Toggle navigation menu"
          >
            <svg width="28" height="28" viewBox="0 0 35 35">
              <line
                id="menu-line-1"
                x1="2"
                y1="13.5"
                x2="33"
                y2="13.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                id="menu-line-2"
                x1="2"
                y1="21.5"
                x2="33"
                y2="21.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </MagneticButton>
      </div>

      {/* Fullscreen Drawer Overlay */}
      <div
        ref={drawerRef}
        id="drawer-overlay"
        className="fixed top-0 right-0 z-[99999998] h-screen w-screen justify-end backdrop-blur-3xl bg-black/55 supports-[backdrop-filter]:bg-black/40 text-[#eae8dc] hidden"
      >
        <div
          ref={contentRef}
          className="w-full relative z-20 flex max-w-2xl flex-col justify-between overflow-hidden rounded-md xl:max-w-3xl 3xl:max-w-4xl p-8 md:p-16 h-full ml-auto"
        >
          {/* Watermark Graphic */}
          <div className="absolute right-0 top-0 opacity-20 pointer-events-none select-none">
            <svg width="245" height="327" viewBox="0 0 245 327" fill="none" className="w-64 md:w-80">
              <circle cx="163.5" cy="163.5" r="163.5" fill="currentColor" fillOpacity="0.2" />
            </svg>
          </div>

          {/* Navigation Links */}
          <nav className="relative h-full flex items-center text-4xl sm:text-6xl md:text-7xl font-bold uppercase leading-tight font-display">
            <ul className="flex flex-col gap-4">
              <li><a href="#Home" onClick={close} className="drawer-link">Home</a></li>
              <li><a href="#Services" onClick={close} className="drawer-link">Services</a></li>
              <li><a href="#Works" onClick={close} className="drawer-link">Works</a></li>
              <li><a href="#About" onClick={close} className="drawer-link">About</a></li>
              <li><a href="#Contact" onClick={close} className="drawer-link">Contact</a></li>
            </ul>
          </nav>

          {/* Drawer Footer Info */}
          <div className="flex flex-col gap-4 border-t border-white/20 pt-6">
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest">
                EMAIL ADDRESS
              </span>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="font-mono text-sm md:text-base text-neutral-200 hover:text-white mt-1"
              >
                {portfolioData.personal.email}
              </a>
            </div>
            <div className="flex gap-6 font-mono text-xs md:text-sm text-neutral-300 uppercase">
              {portfolioData.socials.map((social) => (
                <a
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.url}
                  className="hover:text-white"
                >
                  {social.name} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}