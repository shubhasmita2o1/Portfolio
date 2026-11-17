import { portfolioData } from '../data/portfolioData';
import { Skills } from './Skills';

export function About() {
  const { tag, heading, paragraphs, image } = portfolioData.about;

  return (
    <section id="About" className="relative z-10 bg-[#151515] text-[#e0ded4] px-6 py-24 md:px-16 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* Skills Subsection */}
        <Skills />

        {/* About Me Narrative Subsection */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start border-t border-white/10 pt-16">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-neutral-800 shadow-2xl">
              <img
                src={image}
                alt="About Portrait"
                className="w-full h-full object-cover filter contrast-110"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = portfolioData.personal.portraitFallback;
                }}
              />
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col gap-6">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              {tag}
            </span>
            <h3 className="text-2xl md:text-4xl font-bold leading-snug text-white font-display">
              {heading}
            </h3>
            {paragraphs.map((p, i) => (
              <p key={i} className="text-neutral-400 leading-relaxed text-base md:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
