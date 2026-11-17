import { portfolioData } from '../data/portfolioData';

export function Services() {
  const services = portfolioData.services || [
    {
      index: "01",
      title: "Full-Stack Development",
      description: "From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.",
      features: [
        "React, Node.js, Express.js",
        "REST APIs, Firebase, Docker",
        "Git, GitHub, Postman"
      ]
    },
    {
      index: "02",
      title: "UI/UX & Frontend",
      description: "Good design feels effortless. I design and develop responsive, intuitive interfaces that work smoothly across devices, with a strong focus on clarity, accessibility, and performance.",
      features: [
        "NextJs, TailwindCSS, GSAP",
        "Figma → Pixel-perfect code",
        "HTML, CSS, JavaScript"
      ]
    },
    {
      index: "03",
      title: "Optimization",
      description: "I focus on building systems that stay reliable as things scale. From handling data efficiently to designing clean architecture, I apply core computer science principles to keep applications fast, stable, and future-ready.",
      features: [
        "Data Structures & Algorithms",
        "DBMS, OOP, OS Fundamentals",
        "Scalable systems & data pipelines"
      ]
    }
  ];

  return (
    <section id="Services" className="relative z-20">
      <div className="relative min-h-screen w-full overflow-x-clip">
        <section className="section-padding rounded-t-3xl bg-[var(--color-secondary-400)] text-[var(--color-text-bg)]">
          {/* Header Row */}
          <div className="relative flex w-full flex-col gap-y-[var(--space-lg)] md:gap-y-[var(--space-2xl)]">
            <h1 className="cs2:text-[length:var(--text-h1)] section-heading col-span-6 max-w-[18ch] text-[var(--color-accent-400)]">
              What I Do /
            </h1>
            <div className="flex grid-cols-12 gap-x-[var(--gap-fluid)] md:grid">
              <div className="col-span-7 flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-2xs)] sm:flex-row md:col-start-6">
                <span className="flex h-full font-medium uppercase text-nowrap text-[var(--color-secondary-75)] text-[16px]">
                  (Services)
                </span>
                <div className="w-full max-w-[35ch] text-balance text-[length:var(--text-base-large)] font-medium leading-base text-[var(--color-secondary-50)]">
                  I specialize in building fast, reliable, and user-friendly full-stack web applications. I help small businesses and startups turn ideas into high-quality websites and products that actually work and scale.
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Accordion Stacking Cards */}
          <div className="w-full pt-[var(--space-lg)]">
            <div className="mt-12 gap-y-16 flex flex-col justify-between bg-[var(--color-secondary-400)]">
              
              {/* Card 1 */}
              <div 
                className="sticky border-t border-t-[var(--color-secondary-300)] bg-[var(--color-secondary-400)] mb-[21.5em] lg:mb-[20.1em] top-[20vh]"
              >
                <div className="flex grid-cols-12 items-center justify-start gap-x-[var(--space-xs)] text-left text-[length:var(--text-heading-2)] font-semibold text-[var(--color-accent-400)] md:grid md:justify-between md:gap-x-[var(--gap-fluid)]">
                  <span className="col-span-2">(01)</span>
                  <h3 className="col-span-8 col-start-6 py-[var(--space-md)] 2xl:py-[var(--space-sm)]">
                    {services[0]?.title || "Full-Stack Development"}
                  </h3>
                </div>
                <div className="grid-gap relative flex min-h-[30vh] flex-col place-items-start pt-[var(--space-3xs)] md:grid md:min-h-[40vh] md:grid-cols-12">
                  <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-[var(--space-sm)] pt-[var(--space-sm)] text-[length:var(--text-heading-4)]">
                    <p className="max-w-[40ch] text-balance text-[length:var(--text-base)] font-medium text-[var(--color-secondary-50)]">
                      {services[0]?.description}
                    </p>
                    <div className="flex flex-col divide-y divide-[var(--color-secondary-200)]">
                      {services[0]?.features?.map((feat, fIdx) => (
                        <span 
                          key={fIdx}
                          className="flex items-start gap-x-[var(--space-sm)] py-[var(--space-3xs)] font-bold text-[var(--color-accent-500)] xl:gap-x-[var(--space-md)] xl:py-[var(--space-2xs)] text-[length:var(--text-heading-4)]"
                        >
                          <span className="font-mono text-[length:var(--text-base)] font-medium leading-[200%] text-[var(--color-secondary-75)] mr-4">
                            0{fIdx + 1}
                          </span>
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div 
                className="sticky border-t border-t-[var(--color-secondary-300)] bg-[var(--color-secondary-400)] mb-[15.5em] lg:mb-[14em] top-[calc(20vh+7rem)] sm:top-[calc(20vh+6rem)]"
              >
                <div className="flex grid-cols-12 items-center justify-start gap-x-[var(--space-xs)] text-left text-[length:var(--text-heading-2)] font-semibold text-[var(--color-accent-400)] md:grid md:justify-between md:gap-x-[var(--gap-fluid)]">
                  <span className="col-span-2">(02)</span>
                  <h3 className="col-span-8 col-start-6 py-[var(--space-md)] 2xl:py-[var(--space-sm)]">
                    {services[1]?.title || "UI/UX & Frontend"}
                  </h3>
                </div>
                <div className="grid-gap relative flex min-h-[30vh] flex-col place-items-start pt-[var(--space-3xs)] md:grid md:min-h-[40vh] md:grid-cols-12">
                  <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-[var(--space-sm)] pt-[var(--space-sm)] text-[length:var(--text-heading-4)]">
                    <p className="max-w-[40ch] text-balance text-[length:var(--text-base)] font-medium text-[var(--color-secondary-50)]">
                      {services[1]?.description}
                    </p>
                    <div className="flex flex-col divide-y divide-[var(--color-secondary-200)]">
                      {services[1]?.features?.map((feat, fIdx) => (
                        <span 
                          key={fIdx}
                          className="flex items-start gap-x-[var(--space-sm)] py-[var(--space-3xs)] font-bold text-[var(--color-accent-500)] xl:gap-x-[var(--space-md)] xl:py-[var(--space-2xs)] text-[length:var(--text-heading-4)]"
                        >
                          <span className="font-mono text-[length:var(--text-base)] font-medium leading-[200%] text-[var(--color-secondary-75)] mr-4">
                            0{fIdx + 1}
                          </span>
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div 
                className="sticky border-t border-t-[var(--color-secondary-300)] bg-[var(--color-secondary-400)] mb-[7.5em] lg:mb-[8em] top-[calc(20vh+14rem)] sm:top-[calc(20vh+12rem)]"
              >
                <div className="flex grid-cols-12 items-center justify-start gap-x-[var(--space-xs)] text-left text-[length:var(--text-heading-2)] font-semibold text-[var(--color-accent-400)] md:grid md:justify-between md:gap-x-[var(--gap-fluid)]">
                  <span className="col-span-2">(03)</span>
                  <h3 className="col-span-8 col-start-6 py-[var(--space-md)] 2xl:py-[var(--space-sm)]">
                    {services[2]?.title || "Optimization"}
                  </h3>
                </div>
                <div className="grid-gap relative flex min-h-[30vh] flex-col place-items-start pt-[var(--space-3xs)] md:grid md:min-h-[40vh] md:grid-cols-12">
                  <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-[var(--space-sm)] pt-[var(--space-sm)] text-[length:var(--text-heading-4)]">
                    <p className="max-w-[40ch] text-balance text-[length:var(--text-base)] font-medium text-[var(--color-secondary-50)]">
                      {services[2]?.description}
                    </p>
                    <div className="flex flex-col divide-y divide-[var(--color-secondary-200)]">
                      {services[2]?.features?.map((feat, fIdx) => (
                        <span 
                          key={fIdx}
                          className="flex items-start gap-x-[var(--space-sm)] py-[var(--space-3xs)] font-bold text-[var(--color-accent-500)] xl:gap-x-[var(--space-md)] xl:py-[var(--space-2xs)] text-[length:var(--text-heading-4)]"
                        >
                          <span className="font-mono text-[length:var(--text-base)] font-medium leading-[200%] text-[var(--color-secondary-75)] mr-4">
                            0{fIdx + 1}
                          </span>
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </section>
  );
}