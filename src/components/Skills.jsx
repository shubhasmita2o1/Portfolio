import { portfolioData } from "../data/portfolioData";

export function Skills() {
  const { skills } = portfolioData;

  const categories = Array.isArray(skills) ? skills : [];

  return (
    <div className="w-full self-start text-[var(--color-accent-400)] font-editorial">
      {/* 2-Row CSS Grid: 
          Row 1 (sm+): Empty Col 1 | Giant Skills Title in Col 2 | Empty Col 3
          Row 2 (sm+): Languages & Tools | Frameworks & Libraries | Core CS Concepts
      */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 lg:gap-x-10 gap-y-6 md:gap-y-8 w-full">
        {/* Row 1 - Col 1: Empty placeholder matching Column 1 */}
        <div className="hidden sm:block" aria-hidden="true" />

        {/* Row 1 - Col 2: Giant Skills title aligned directly above Column 2 */}
        <div className="col-span-1">
          <h2 className="text-6xl md:text-7xl lg:text-[clamp(4.2rem,5.5vw,5.5rem)] font-bold tracking-tight text-[var(--color-accent-400)] leading-none mb-2 md:mb-4">
            Skills
          </h2>
        </div>

        {/* Row 1 - Col 3: Empty placeholder matching Column 3 */}
        <div className="hidden sm:block" aria-hidden="true" />

        {/* Row 2: 3 Categorized Columns */}
        {categories.map((cat, idx) => {
          const isFrameworks = cat.title.toLowerCase().includes("framework");

          return (
            <div key={idx} className="flex flex-col self-start">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[var(--color-accent-400)] tracking-tight leading-tight">
                {isFrameworks ? (
                  <>
                    Frameworks <br className="hidden md:inline" />
                    &amp; Libraries
                  </>
                ) : (
                  cat.title
                )}
              </h3>
              <ul className="space-y-3.5 md:space-y-4">
                {cat.items.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-start text-base md:text-[17px] lg:text-[18px] font-normal leading-normal text-[var(--color-secondary-50)]"
                  >
                    <span className="group relative block h-fit overflow-hidden select-none cursor-pointer">
                      <span className="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                        <span className="cursor-default">{skill}</span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0 text-white font-medium"
                      >
                        <span className="cursor-default">{skill}</span>
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
