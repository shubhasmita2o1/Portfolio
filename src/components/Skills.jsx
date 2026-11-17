import { portfolioData } from '../data/portfolioData';

export function Skills() {
  const { languagesAndTools, frameworksAndLibraries, coreCS } = portfolioData.skills;

  return (
    <div>
      <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
        D E V E L O P E R &nbsp; D E S I G N E R &nbsp; C R E A T O R /
      </span>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mt-2 mb-12 font-display">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-8">
        {/* Col 1 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-wider mb-2">
            Languages &amp; Tools
          </h3>
          <ul className="flex flex-col gap-2 text-xl md:text-2xl font-bold text-neutral-200">
            {languagesAndTools.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-wider mb-2">
            Frameworks &amp; Libraries
          </h3>
          <ul className="flex flex-col gap-2 text-xl md:text-2xl font-bold text-neutral-200">
            {frameworksAndLibraries.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-wider mb-2">
            Core CS Concepts
          </h3>
          <ul className="flex flex-col gap-2 text-xl md:text-2xl font-bold text-neutral-200">
            {coreCS.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
