import { useState, useRef } from 'react';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function ProjectCard({ project, index, onRegisterRef }) {
  const [displayText, setDisplayText] = useState(project.title);
  const intervalRef = useRef(null);

  const handleMouseEnter = () => {
    let iteration = 0;
    const original = project.title;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        original
          .split("")
          .map((char, i) => {
            if (i < iteration) return original[i];
            if (char === " ") return " ";
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= original.length) {
        clearInterval(intervalRef.current);
      }
      iteration += 1 / 3;
    }, 30);
  };

  const handleMouseLeave = () => {
    clearInterval(intervalRef.current);
    setDisplayText(project.title);
  };

  return (
    <div ref={onRegisterRef} className="@container" data-index={index}>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="block group"
      >
        {/* Image Container */}
        <div className="custom-cursor-area relative mt-5 flex aspect-square items-center justify-center overflow-clip rounded-md bg-[var(--color-secondary-300)] p-[var(--space-md)] sm:p-[var(--space-lg)] xl:p-[var(--space-2xl)]">
          <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-lg border border-white/10 shadow-2xl">
            
            {/* Image */}
            <img
              src={project.thumbnail || "/projects/placeholder.webp"}
              alt={project.title}
              className="h-full w-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40" />

            {/* View Project Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
              <span className="rounded-full border border-white/30 bg-black/40 px-5 py-2 text-sm font-medium tracking-wide text-white backdrop-blur-sm">
                View Project →
              </span>
            </div>
          </div>
        </div>

        {/* Title + Meta */}
        <div className="flex flex-col justify-between gap-y-[var(--space-sm)] pt-[var(--space-xs)] lg:flex-row">
          <div className="flex flex-col gap-y-[var(--space-3xs)]">
            <span className="font-mono text-[length:var(--text-base-small)] font-medium uppercase text-[var(--color-secondary-50)]">
              {project.subtitle}
            </span>
            <div className="w-fit text-[length:var(--text-heading-3)] font-semibold text-[var(--color-accent-400)]">
              <h3 className="cursor-default tracking-tight font-editorial">
                {displayText}
              </h3>
            </div>
          </div>

          <div className="flex items-end gap-x-[var(--space-3xs)] tracking-base text-[var(--color-secondary-50)]">
            <span className="tag px-3 py-1 rounded-full border border-white/10 font-mono text-xs uppercase">
              {project.category || "Development"}
            </span>
            <span className="tag px-3 py-1 rounded-full border border-[var(--color-secondary-50)] bg-[var(--color-secondary-50)] text-[var(--color-secondary-400)] font-mono text-xs">
              {project.year || "2025"}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}