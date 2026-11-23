import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const curtainRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisible(false);
      window.dispatchEvent(new CustomEvent('hero-enter'));
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setVisible(false);
        }
      });

      // 1. Initial short hold, then arch the bottom of the curtain upward
      tl.to(pathRef.current, {
        attr: { d: "M0 0 L926 0 L926 1000 Q463 800 0 1000 L0 0" },
        duration: 0.35,
        ease: "power2.in",
        delay: 0.1
      })
      // 2. Smoothly sweep the curtain up and off screen
      .to(curtainRef.current, {
        yPercent: -100,
        duration: 0.85,
        ease: "power3.inOut"
      }, "-=0.15")
      // 3. Relax the arch flat as it leaves the top of the viewport
      .to(pathRef.current, {
        attr: { d: "M0 0 L926 0 L926 1000 Q463 1000 0 1000 L0 0" },
        duration: 0.3,
        ease: "power2.out"
      }, "-=0.3")
      // 4. Trigger hero entrance right as curtain clears
      .call(() => {
        window.dispatchEvent(new CustomEvent('hero-enter'));
      }, null, "-=0.15");
    }, curtainRef);

    return () => ctx.revert();
  }, []);

  if (!visible) return null;

  return (
    <div id="intro-curtain" ref={curtainRef}>
      <svg viewBox="0 0 926 1000" preserveAspectRatio="none">
        <path
          ref={pathRef}
          className="fill-[#1c1b18]"
          d="M0 0 L926 0 L926 1000 Q463 1000 0 1000 L0 0"
        />
      </svg>
    </div>
  );
}
