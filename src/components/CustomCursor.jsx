import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices (desktops)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId = null;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const loop = () => {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX - 40}px, ${currentY - 40}px, 0)`;

        const hovered = document.elementsFromPoint(mouseX, mouseY);
        const isOverCard = hovered.some((el) => el.classList && el.classList.contains('custom-cursor-area'));

        cursorRef.current.style.opacity = isOverCard ? '1' : '0';
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="custom-cursor"
      className="custom-cursor"
      aria-hidden="true"
    >
      <span>View</span>
    </div>
  );
}
