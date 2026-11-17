import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

export function SelectedWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        ScrollTrigger.create({
          trigger: card,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => setActiveIndex(idx),
          onEnterBack: () => setActiveIndex(idx),
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="Works" className="relative z-10 bg-[#151515] text-[#e0ded4] px-6 py-24 md:px-16 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-8 gap-4">
          <div>
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">(PROJECTS)</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mt-2 font-display">
              S E L E C T E D   W O R K S  /
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-neutral-400">
            Thoughtfully crafted digital experiences that blend utility and aesthetics into something functional, memorable, and refined.
          </p>
        </div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sticky Pagination Left Column */}
          <div className="lg:col-span-2 sticky top-28 font-mono text-2xl font-bold flex lg:flex-col gap-4 select-none">
            {portfolioData.projects.map((project, idx) => (
              <span
                key={project.id}
                className={`transition-colors duration-300 ${
                  activeIndex === idx ? 'text-white' : 'text-neutral-500'
                }`}
              >
                {project.id}
              </span>
            ))}
          </div>

          {/* Project Cards Stack Right Column */}
          <div className="lg:col-span-10 flex flex-col gap-24">
            {portfolioData.projects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                onRegisterRef={(el) => (cardRefs.current[idx] = el)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
