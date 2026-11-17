import { useState, useRef } from 'react';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function ProjectCard({ project, onRegisterRef }) {
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
          .map((char, index) => {
            if (index < iteration) {
              return original[index];
            }
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
    <a
      ref={onRegisterRef}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="custom-cursor-area project-card-element group relative block bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500"
    >
      <div className="aspect-video w-full overflow-hidden bg-neutral-900">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
      </div>
      <div className="p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
            {project.subtitle}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-1 font-display">
            {displayText}
          </h3>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-neutral-400">
          <span className="px-3 py-1 rounded-full border border-white/10">
            {project.category}
          </span>
          <span>{project.year}</span>
        </div>
      </div>
    </a>
  );
}
