import { Skills } from './Skills';

export function About() {
  return (
    <section id="About" className="mt-[-2vh] relative z-20">
      <div className="relative">
        <div className="section-padding sm:pb-[10em] pb-[5em] flex flex-col gap-y-[var(--space-lg)] rounded-b-3xl bg-[var(--color-secondary-400)] lg:gap-y-[var(--space-2xl)] md:pt-[15vh]">
          
          {/* Top Custom Grid: DEVELOPER / DESIGNER / CREATOR/ + Skills */}
          <div className="custom-grid">
            <h2 className="section-heading cs5:text-[length:var(--text-h1-display)] text-[length:var(--text-menu)] relative z-30 flex w-full flex-col col-span-full leading-none text-[var(--color-accent-400)] mix-blend-exclusion lg:col-span-8 lg:col-end-7 mt-[1em] mb-[1em] order-2 md:order-1 font-bold">
              <span>DEVELOPER</span>
              <span>DESIGNER</span>
              <span>CREATOR/</span>
            </h2>
            <div className="relative z-0 lg:col-span-6 col-span-full flex w-full items-center overflow-clip rounded-md md:items-end order-1 md:order-2">
              <Skills />
            </div>
          </div>

          {/* Bottom Custom Grid: Image 1.webp + About Me narrative */}
          <div className="custom-grid col-span-full gap-y-[var(--space-lg)] lg:gap-y-[var(--space-2xl)]">
            <div className="pointer-events-none max-h-[30rem] relative z-0 col-span-3 flex aspect-square w-full items-center overflow-clip rounded-md sm:aspect-auto md:items-end">
              <img
                alt="Portrait"
                width="1536"
                height="2040"
                className="h-full w-full object-cover object-center grayscale contrast-110"
                src="/1.webp"
              />
            </div>
            <div className="col-span-7 col-start-6 flex flex-col gap-y-[var(--space-xl)] lg:gap-y-[var(--space-2xl)]">
              <div className="relative w-full max-w-[39ch] text-balance text-[length:var(--text-heading-4)] font-medium leading-snug text-[var(--color-accent-400)]">
                I'm a software engineer driven by a passion for turning ideas into clean, intuitive digital experiences.
              </div>
              <div className="flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-sm)] lg:flex-row">
                <span className="flex h-fit overflow-clip font-mono tracking-[var(--tracking-mono)]">
                  <span className="flex h-full font-medium uppercase text-nowrap text-[var(--color-secondary-50)]">
                    (About Me)
                  </span>
                </span>
                <div className="flex w-full gap-y-4 max-w-[38ch] flex-col text-balance text-[length:var(--text-base)] font-medium leading-base text-[var(--color-secondary-50)]">
                  <p>
                    I’m a full-stack developer who builds fast, modern web applications mostly with Next.js and Tailwind CSS because they just work. I work with businesses and startups to turn ideas into reliable, user-friendly products built to scale.
                  </p>
                  <p>
                    I've been building websites long enough to have strong opinions about things that don't matter to most people, like whether a transition should be 150ms or 200ms. (It's 150ms, btw). Build the thing, make it work, make it feel good. That's the gig.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}