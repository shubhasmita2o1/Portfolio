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
          start: 'top 55%',
          end: 'bottom 45%',
          onEnter: () => setActiveIndex(idx),
          onEnterBack: () => setActiveIndex(idx),
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const projects = portfolioData.projects || [
    {
      id: "01",
      title: "NURA",
      subtitle: "Modern Marketing Website",
      category: "Development",
      year: "2025",
      link: "https://nurabyzuned.netlify.app/"
    },
    {
      id: "02",
      title: "Job Portal",
      subtitle: "Full-Stack Recruitment Platform",
      category: "Development",
      year: "2025",
      link: "https://zunedjobs.netlify.app/"
    },
    {
      id: "03",
      title: "Productivity SAAS",
      subtitle: "SAAS Platform",
      category: "Development",
      year: "2025",
      link: "https://productivity-saas-zuned.netlify.app/"
    },
    {
      id: "04",
      title: "CineRec",
      subtitle: "ML Recommendation Engine",
      category: "Development",
      year: "2025",
      link: "https://movierecommendation-sbjn.onrender.com/"
    },
    {
      id: "05",
      title: "Code2Img",
      subtitle: "Code-to-Image Tool",
      category: "Development",
      year: "2025",
      link: "https://code2img-zuned.netlify.app/"
    }
  ];

  return (
    <section id="Works" className="relative z-20">
      <div className="section-padding bg-[var(--color-secondary-400)]">
        {/* Header Section */}
        <div className="flex flex-col gap-y-[var(--space-lg)] md:gap-y-[var(--space-2xl)]">
          <h1 className="section-heading relative text-[var(--color-accent-400)]">
            SELECTED WORKS /
          </h1>
          <div className="grid-gap flex grid-cols-12 sm:justify-end lg:grid">
            <div className="col-span-7 col-start-1 flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-2xs)] sm:col-start-6 sm:flex-row">
              <span className="flex h-full font-medium uppercase text-nowrap text-[var(--color-secondary-75)]">
                (PROJECTS)
              </span>
              <div className="w-full max-w-[25ch] text-balance font-medium leading-base text-[var(--color-secondary-50)] text-[length:var(--text-base-large)]">
                Thoughtfully crafted digital experiences that blend utility and aesthetics into something functional, memorable, and refined.
              </div>
            </div>
          </div>
        </div>

        {/* 12-Column Grid with Giant Sticky Number and Project Cards */}
        <div className="grid-gap grid grid-cols-12 pt-[var(--space-lg)]">
          
          {/* Left Column: Sticky 22vw Number (01, 02, 03, 04, 05) */}
          <div className="sticky top-12 col-span-5 hidden h-fit w-full overflow-hidden text-[22vw] font-normal leading-[0.8] text-[var(--color-secondary-50)] md:flex select-none">
            <span className="relative">0</span>
            <div className="relative h-[22vw] overflow-hidden">
              <div 
                className="flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: `translateY(-${activeIndex * 20}%)` }}
              >
                <span className="inline-block h-[22vw]">1</span>
                <span className="inline-block h-[22vw]">2</span>
                <span className="inline-block h-[22vw]">3</span>
                <span className="inline-block h-[22vw]">4</span>
                <span className="inline-block h-[22vw]">5</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Project Cards */}
          <aside className="relative col-span-12 flex flex-col gap-y-[var(--space-xl)] md:col-span-7 md:gap-y-[var(--space-2xl)]">
            {projects.map((project, idx) => (
              <ProjectCard
                key={project.id || idx}
                project={project}
                index={idx}
                onRegisterRef={(el) => (cardRefs.current[idx] = el)}
              />
            ))}
          </aside>

        </div>
      </div>
    </section>
  );
}