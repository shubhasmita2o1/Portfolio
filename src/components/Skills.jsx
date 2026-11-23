export function Skills() {
  const skillCategories = [
    {
      title: "Languages & Tools",
      items: [
        "Python",
        "SQL",
        "C++",
        "Java",
        "Typescript",
        "JavaScript",
        "Git",
        "Postman",
        "Docker",
        "Firebase",
      ],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        "React",
        "Node.js",
        "Express.js",
        "Flask",
        "Bootstrap",
        "jQuery",
        "TailwindCSS",
        "Framer Motion",
        "GSAP",
      ],
    },
    {
      title: "Core CS Concepts",
      items: [
        "DSA",
        "DBMS",
        "OOP",
        "Operating Systems",
        "System Design",
      ],
    },
  ];

  return (
    <div className="w-full self-start text-[var(--color-accent-400)] font-editorial">
      {/* Skills Heading Row: aligned directly above Column 2 (Frameworks & Libraries) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 lg:gap-x-10 mb-6 md:mb-8">
        <div className="hidden sm:block" />
        <h2 className="text-5xl md:text-6xl lg:text-[length:var(--text-h1-alt)] font-bold tracking-tight text-[var(--color-accent-400)] leading-none">
          Skills
        </h2>
        <div className="hidden sm:block" />
      </div>

      {/* 3 Columns for Skill Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-8 lg:gap-x-10">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="flex flex-col self-start">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[var(--color-accent-400)] tracking-tight">
              {cat.title}
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
        ))}
      </div>
    </div>
  );
}