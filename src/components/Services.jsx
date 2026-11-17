import { portfolioData } from '../data/portfolioData';

export function Services() {
  return (
    <section id="Services" className="relative z-10 bg-[#151515] text-[#e0ded4] px-6 py-24 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-8 gap-6">
          <div>
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">(Services)</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mt-2 font-display">
              W h a t I D o /
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-neutral-400 leading-relaxed">
            I specialize in building fast, reliable, and user-friendly full-stack web applications. I help small businesses and startups turn ideas into high-quality websites and products that actually work and scale.
          </p>
        </div>

        {/* 3 Services Rows with Dividers */}
        <div className="flex flex-col divide-y divide-white/10">
          {portfolioData.services.map((service) => (
            <div key={service.index} className="grid grid-cols-1 md:grid-cols-12 py-12 gap-8 items-start">
              <div className="md:col-span-2 font-mono text-xl md:text-2xl text-neutral-400 font-bold">
                ({service.index})
              </div>
              <div className="md:col-span-5 flex flex-col gap-4">
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="md:col-span-5 flex flex-col gap-3 font-mono text-sm text-neutral-300">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <span className="text-neutral-500">0 {fIdx + 1}</span> {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
