import { portfolioData } from "../data/portfolioData";

export function Skills() {
  const { skills } = portfolioData;

  return (
    <div className="w-full self-start text-[var(--color-accent-400)] font-editorial">
      {/* Skills Heading - Centered above Frameworks & Libraries (Column 2) on desktop matching reference */}
      <div className="mb-8 md:mb-10 lg:mb-12 grid grid-cols-3 gap-x-4 sm:gap-x-8 lg:gap-x-12">
        <div className="col-start-1 col-span-3 sm:col-start-2 sm:col-span-1 text-center">
          <h2 className="text-[clamp(2.875rem,4vw,3.8rem)] font-bold tracking-tight text-[var(--color-accent-400)] leading-none">
            Skills
          </h2>
        </div>
      </div>

      {/* 
        Mobile  → 3 columns (like original)
        Desktop → 3 columns with category titles
      */}
      <div className="grid grid-cols-3 gap-x-4 gap-y-6 sm:gap-x-8 lg:gap-x-12">
        {skills.map((cat, idx) => (
          <div key={idx} className="flex flex-col">
            {/* Category title - hidden on mobile, shown on larger screens */}
            <h3 className="hidden sm:block text-[15px] md:text-[16px] font-medium mb-5 text-[var(--color-accent-400)] tracking-tight">
              {cat.title}
            </h3>

            <ul className="space-y-2.5 sm:space-y-3">
              {cat.items.map((skill, sIdx) => (
                <li
                  key={sIdx}
                  className="text-[13px] sm:text-[15px] md:text-[16px] font-normal leading-snug text-[var(--color-secondary-50)]"
                >
                  <span className="group relative inline-block overflow-hidden cursor-pointer">
                    <span className="block transition-transform duration-400 ease-[cubic-bezier(.51,.92,.24,1.15)] group-hover:-translate-y-full">
                      {skill}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute top-0 left-0 block translate-y-full transition-transform duration-400 ease-[cubic-bezier(.51,.92,.24,1.15)] group-hover:translate-y-0 text-white"
                    >
                      {skill}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}