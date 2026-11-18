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
            if (i < iteration) {
              return original[i];
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

  // Render a high-fidelity visual mockup preview for each project
  const renderPreview = () => {
    switch (project.title) {
      case "NURA":
        return (
          <div className="w-full h-full bg-[#181816] text-[#e8e8e3] p-5 flex flex-col justify-between select-none">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="font-mono text-xs tracking-widest text-[#a29e9a]">NURA STUDIO</span>
              <span className="font-mono text-[10px] text-white/40">COLLECTION 2025</span>
            </div>
            <div className="my-auto py-4">
              <div className="text-[10px] font-mono text-[#8c8c73] tracking-widest uppercase mb-1">Architectural Living</div>
              <div className="text-2xl sm:text-3xl font-bold font-editorial tracking-tight text-[#e8e8e3]">
                Sculpted Simplicity.
              </div>
              <p className="text-xs text-[#a29e9a] mt-2 max-w-xs font-editorial">
                Bespoke furniture crafted for functional elegance and enduring architectural presence.
              </p>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-white/50 pt-3 border-t border-white/10">
              <span>EXPLORE LOOKBOOK</span>
              <span>INDEX ↗</span>
            </div>
          </div>
        );

      case "Job Portal":
        return (
          <div className="w-full h-full bg-[#111315] text-[#e2e8f0] p-5 flex flex-col justify-between select-none">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                <span className="font-mono text-xs font-bold tracking-wider">TALENTHUB</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-neutral-300">RECRUITMENT</span>
            </div>
            <div className="my-auto">
              <div className="bg-white/5 border border-white/10 rounded-lg p-3 mb-3 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">Search "Senior Full Stack Dev"...</span>
                <span className="text-xs font-mono text-emerald-400">34 Found</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-white/5 border border-white/5 rounded p-2 flex justify-between items-center">
                  <div>
                    <div className="text-xs font-bold">Staff Systems Engineer</div>
                    <div className="text-[10px] text-neutral-400">Stripe • Remote</div>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-300 bg-white/10 px-2 py-0.5 rounded">$190k - $240k</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-neutral-400 border-t border-white/10 pt-2">
              <span>1,420 ACTIVE OPENINGS</span>
              <span className="text-emerald-400">APPLY NOW ↗</span>
            </div>
          </div>
        );

      case "Productivity SAAS":
        return (
          <div className="w-full h-full bg-[#141517] text-[#e8e8e3] p-5 flex flex-col justify-between select-none">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded bg-purple-400"></div>
                <span className="font-mono text-xs font-semibold">FLOWSYNC</span>
              </div>
              <span className="text-[10px] font-mono text-purple-300 bg-purple-950/60 border border-purple-800/40 px-2 py-0.5 rounded">
                SPRINT 14
              </span>
            </div>
            <div className="my-auto py-2">
              <div className="text-xs font-bold text-neutral-200 mb-2">Team Velocity & Goals</div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mb-3">
                <div className="bg-purple-400 h-full w-[82%] rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="bg-white/5 rounded p-2 border border-white/5">
                  <div className="text-lg font-bold text-white">94.8%</div>
                  <div className="text-[9px] font-mono text-neutral-400">ON-TIME DELIVERY</div>
                </div>
                <div className="bg-white/5 rounded p-2 border border-white/5">
                  <div className="text-lg font-bold text-purple-300">12 ms</div>
                  <div className="text-[9px] font-mono text-neutral-400">SYNC LATENCY</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 border-t border-white/10 pt-2">
              <span>REALTIME AGENT ENGINE</span>
              <span>LAUNCH APP ↗</span>
            </div>
          </div>
        );

      case "CineRec":
        return (
          <div className="w-full h-full bg-[#0d0f12] text-[#f1f5f9] p-5 flex flex-col justify-between select-none">
            <div className="flex justify-between items-center">
              <span className="font-mono text-xs font-bold tracking-widest text-amber-400">CINEREC AI</span>
              <span className="text-[10px] font-mono text-neutral-400">NEURAL RECOMMENDER</span>
            </div>
            <div className="my-auto py-2">
              <div className="text-xs font-medium text-neutral-400 mb-2">Predicted Taste Affinity</div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-neutral-800/80 border border-neutral-700/50 rounded p-2 flex flex-col justify-between h-20">
                  <span className="text-[9px] font-mono text-amber-300">99.4% MATCH</span>
                  <span className="text-[11px] font-bold leading-tight">Oppenheimer</span>
                </div>
                <div className="bg-neutral-800/80 border border-neutral-700/50 rounded p-2 flex flex-col justify-between h-20">
                  <span className="text-[9px] font-mono text-amber-300">97.8% MATCH</span>
                  <span className="text-[11px] font-bold leading-tight">Interstellar</span>
                </div>
                <div className="bg-neutral-800/80 border border-neutral-700/50 rounded p-2 flex flex-col justify-between h-20">
                  <span className="text-[9px] font-mono text-amber-300">96.2% MATCH</span>
                  <span className="text-[11px] font-bold leading-tight">Blade Runner</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-neutral-500 border-t border-white/10 pt-2">
              <span>COLLABORATIVE FILTERING</span>
              <span className="text-amber-400">EXPLORE MODEL ↗</span>
            </div>
          </div>
        );

      case "Code2Img":
      default:
        return (
          <div className="w-full h-full bg-[#121316] text-[#e2e8f0] p-5 flex flex-col justify-between select-none">
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
              </div>
              <span className="font-mono text-[10px] text-neutral-400">render.tsx</span>
            </div>
            <div className="my-auto py-2 font-mono text-[11px] leading-relaxed text-neutral-300">
              <div><span className="text-purple-400">export</span> <span className="text-blue-400">const</span> <span className="text-yellow-300">snapshot</span> = (<span className="text-emerald-300">code</span>) =&gt; &#123;</div>
              <div className="pl-4 text-neutral-400">// Generate 4K carbon export</div>
              <div className="pl-4"><span className="text-blue-400">return</span> <span className="text-purple-400">new</span> <span className="text-amber-300">ImageCanvas</span>(code, &#123;</div>
              <div className="pl-8 text-neutral-400">preset: <span className="text-emerald-300">"dracula"</span>,</div>
              <div className="pl-8 text-neutral-400">scale: <span className="text-orange-400">3</span></div>
              <div className="pl-4">&#125;);</div>
              <div>&#125;;</div>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-neutral-500 border-t border-white/10 pt-2">
              <span>CANVAS SVG EXPORTER</span>
              <span className="text-white">LIVE DEMO ↗</span>
            </div>
          </div>
        );
    }
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
        <div className="custom-cursor-area relative mt-5 flex aspect-square items-center justify-center overflow-clip rounded-md bg-[var(--color-secondary-300)] p-[var(--space-md)] sm:p-[var(--space-lg)] xl:p-[var(--space-2xl)]">
          <div className="z-10 aspect-[4/3] w-full overflow-clip rounded-lg border border-white/10 shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]">
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover select-none"
                loading="lazy"
              />
            ) : (
              renderPreview()
            )}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-y-[var(--space-sm)] pt-[var(--space-xs)] lg:flex-row">
          <div className="flex flex-col gap-y-[var(--space-3xs)]">
            <span className="font-mono text-[length:var(--text-base-small)] font-medium uppercase text-[var(--color-secondary-50)]">
              <span className="cursor-default">{project.subtitle}</span>
            </span>
            <div className="w-fit text-[length:var(--text-heading-3)] font-semibold text-[var(--color-accent-400)]">
              <h3 className="cursor-default tracking-tight font-editorial">{displayText}</h3>
            </div>
          </div>
          <div className="flex items-end gap-x-[var(--space-3xs)] tracking-base text-[var(--color-secondary-50)]">
            <span className="tag px-3 py-1 rounded-full border border-white/10 font-mono text-xs uppercase">{project.category || "Development"}</span>
            <span className="tag px-3 py-1 rounded-full border border-[var(--color-secondary-50)] bg-[var(--color-secondary-50)] text-[var(--color-secondary-400)] font-mono text-xs">
              {project.year || "2025"}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}