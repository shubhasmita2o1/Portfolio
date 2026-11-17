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
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setVisible(false);
        }
      });

      tl.to(pathRef.current, {
        attr: { d: "M0 0 L926 0 L926 0 Q463 0 0 0 L0 0" },
        duration: 1.3,
        ease: "power2.inOut",
        delay: 0.2
      })
      .to(curtainRef.current, {
        y: "-100vh",
        duration: 1.1,
        ease: "power3.inOut"
      }, "-=0.7");
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
          d="M0 0 L926 0 L926 1000 Q463 730 0 1000 L0 0"
        />
      </svg>
    </div>
  );
}
