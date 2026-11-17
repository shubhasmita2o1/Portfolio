import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef(null);
  const spacerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        scale: 0.94,
        opacity: 0.85,
        ease: 'none',
        scrollTrigger: {
          trigger: spacerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={containerRef} className="hero-sticky-container bg-[#E8E8E3]" id="Home">
        {/* Top Spacer for Absolute Navbar */}
        <div className="h-16 md:h-20"></div>

        {/* ========================================================
            EXACT INLINE SVG HEADLINE (100% 1:1 Vector Paths from Live Site)
            ======================================================== */}
        <div className="w-full flex items-center justify-center overflow-hidden my-auto py-2">
          <h1 className="w-full overflow-clip">
            {/* Desktop & Tablet: Exact Single-Line Vector SVG */}
            <svg
              width="1430"
              height="163"
              viewBox="0 0 1430 163"
              className="hidden h-auto w-full md:block text-[#080807]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Z */}
              <path d="M0.169983 160V138.53L89.44 15.586V24.852H0.169983V0.669983H117.238V21.914L27.742 144.858V135.818H120.176V160H0.169983Z" fill="currentColor" />
              {/* U */}
              <path d="M200.27 162.26C177.519 162.26 160.569 156.61 149.42 145.31C138.421 133.859 132.922 116.985 132.922 94.686V0.669983H162.076V94.46C162.076 108.623 165.089 119.32 171.116 126.552C177.293 133.784 187.011 137.4 200.27 137.4C212.926 137.4 222.418 133.784 228.746 126.552C235.225 119.32 238.464 108.623 238.464 94.46V0.669983H267.166V94.686C267.166 116.985 261.516 133.859 250.216 145.31C239.067 156.61 222.418 162.26 200.27 162.26Z" fill="currentColor" />
              {/* N */}
              <path d="M289.819 160V0.669983H311.741L404.175 120.224H398.299V0.669983H425.419V160H403.497L311.289 40.446H316.939V160H289.819Z" fill="currentColor" />
              {/* E */}
              <path d="M449.123 160V0.669983H556.473V23.496H477.147V67.566H551.275V90.618H477.147V136.948H556.473V160H449.123Z" fill="currentColor" />
              {/* D */}
              <path d="M572.231 160V0.669983H630.087C648.317 0.669983 663.685 3.83398 676.191 10.162C688.847 16.3393 698.414 25.3793 704.893 37.282C711.371 49.034 714.611 63.3473 714.611 80.222C714.611 96.946 711.371 111.259 704.893 123.162C698.414 135.065 688.847 144.18 676.191 150.508C663.685 156.836 648.317 160 630.087 160H572.231ZM601.385 135.818H628.279C647.564 135.818 661.877 131.223 671.219 122.032C680.56 112.841 685.231 98.9047 685.231 80.222C685.231 61.3887 680.56 47.452 671.219 38.412C661.877 29.2213 647.564 24.626 628.279 24.626H601.385V135.818Z" fill="currentColor" />
              {/* A (1) */}
              <path d="M766.169 160L838.263 0.669983H862.671L935.669 160H906.063L886.627 115.252L898.379 123.162H802.781L814.985 115.252L795.549 160H766.169ZM850.241 31.858L818.375 107.342L812.499 100.336H888.435L883.689 107.342L851.145 31.858H850.241Z" fill="currentColor" />
              {/* A (2) */}
              <path d="M924.369 160L996.463 0.669983H1020.87L1093.87 160H1064.26L1044.83 115.252L1056.58 123.162H960.981L973.185 115.252L953.749 160H924.369ZM1008.44 31.858L976.575 107.342L970.699 100.336H1046.63L1041.89 107.342L1009.34 31.858H1008.44Z" fill="currentColor" />
              {/* L */}
              <path d="M1100.2 160V0.669983H1129.35V135.366H1204.38V160H1100.2Z" fill="currentColor" />
              {/* I */}
              <path d="M1215.36 160V0.669983H1244.51V160H1215.36Z" fill="currentColor" />
              {/* M */}
              <path d="M1268.51 160V0.669983H1294.05L1352.58 132.428H1345.58L1404.11 0.669983H1429.42V160H1402.98V41.802H1411.12L1357.55 160H1340.15L1286.59 41.802H1294.95V160H1268.51Z" fill="currentColor" />
            </svg>

            {/* Mobile Fallback (< md) */}
            <span className="flex flex-col text-5xl sm:text-6xl font-bold uppercase leading-tight tracking-tight text-[#080807] md:hidden font-editorial">
              <span>ZUNED</span>
              <span>AALIM</span>
            </span>
          </h1>
        </div>

        {/* ========================================================
            LOWER 3-COLUMN CONTENT GRID (Pixel-Aligned to Live Site)
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-end justify-between gap-6 lg:gap-8 pb-4 md:pb-6">
          {/* Left Column: Arrow, Manifesto, Pill Button */}
          <div className="md:col-span-4 flex flex-col items-start justify-between h-full">
            {/* Down-Right Diagonal Arrow */}
            <div className="hidden md:block mb-6 lg:mb-8">
              <svg 
                stroke="currentColor" 
                fill="none" 
                strokeWidth="1.25" 
                viewBox="6 6 12 12" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-6 h-6" 
                style={{ color: "rgb(140, 140, 115)" }}
              >
                <line x1="7" y1="7" x2="17" y2="17" />
                <polyline points="17 7 17 17 7 17" />
              </svg>
            </div>

            {/* Subtitle / Manifesto - Exact 3-line wrap */}
            <p className="max-w-[30ch] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-normal leading-[1.38] text-[#524d47] font-editorial mb-6 lg:mb-8">
              I build fast, modern websites that<br className="hidden md:inline" /> help businesses grow, available<br className="hidden md:inline" /> for freelance projects worldwide.
            </p>

            {/* Pill Button */}
            <a href="#Contact">
              <button className="group pointer-events-auto relative flex h-fit w-fit items-center justify-center overflow-hidden rounded-full bg-[#242320] px-8 py-4 font-bold uppercase tracking-wider text-[#f1f0ed] text-xs font-editorial transition-all hover:bg-black active:scale-95 shadow-md">
                <span className="relative z-20 flex items-center gap-1.5">
                  CONTACT ↗
                </span>
              </button>
            </a>
          </div>

          {/* Center Column: Grayscale Map Portrait Image */}
          <div className="md:col-span-4 flex justify-center items-end h-full">
            <div className="relative w-56 sm:w-64 md:w-72 lg:w-[320px] h-[360px] sm:h-[390px] md:h-[420px] lg:h-[450px] rounded-2xl overflow-hidden shadow-sm border border-black/10 bg-neutral-300">
              <img
                src="/1.webp"
                alt="Map Interior"
                className="w-full h-full object-cover object-center grayscale contrast-110"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://zunedaalim.com/1.webp";
                }}
              />
            </div>
          </div>

          {/* Right Column: Status Banner & Huge NOV'26 */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-end text-left md:text-right h-full">
            <span className="font-mono text-xs uppercase tracking-widest text-[#6b645c] mb-2 font-medium">
              AVAILABLE FOR WORK
            </span>
            <span className="font-editorial text-6xl sm:text-7xl md:text-8xl lg:text-[90px] font-semibold uppercase leading-none tracking-tight text-[#242320]">
              NOV'26
            </span>
          </div>
        </div>
      </section>

      {/* Negative-margin scroll spacer for ScrollTrigger pinning */}
      <section ref={spacerRef} className="hero-spacer">
        <div className="hero-spacer-inner"></div>
      </section>
    </>
  );
}
