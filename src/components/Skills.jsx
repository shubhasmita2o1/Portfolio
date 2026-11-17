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
    <section className="self-start md:px-6 py-5 c370:px-3 px-0 bg-[var(--color-secondary-400)] text-[var(--color-accent-400)] w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="md:text-[length:var(--text-h1-alt)] text-[length:var(--text-menu)] font-bold mb-8 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-3 c343:gap-1 gap-0 md:gap-5 md:p-5 c370:p-1 p-0">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="c370:p-2 p-0 rounded-2xl shadow-md hover:shadow-lg transition self-start"
            >
              <h3 className="hidden md:flex text-xl font-semibold mb-4 text-[var(--color-accent-400)]">
                {cat.title}
              </h3>
              <ul className="space-y-3 md:text-base">
                {cat.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex relative items-start gap-2 text-[var(--color-secondary-50)] c343:text-[length:var(--text-base)] text-[length:var(--text-skill)]"
                  >
                    <span className="group relative block h-fit overflow-hidden font-medium select-none cursor-pointer">
                      <span className="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                        <span className="font-mono cursor-default">{skill}</span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0 text-[var(--color-accent-200)]"
                      >
                        <span className="font-mono cursor-default">{skill}</span>
                      </span>
                    </span>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}