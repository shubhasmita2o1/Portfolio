import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export function Footer() {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative flex flex-col items-center justify-between py-12 px-6 md:px-16 bg-[#e0ded4] text-black">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-black/10 pb-12">
        {/* Footer Navigation */}
        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-widest">
            Menu
          </h3>
          <ul className="flex flex-wrap gap-6 text-sm font-semibold">
            <li><a href="#Home" className="hover:opacity-60 transition-opacity">Home</a></li>
            <li><a href="#Services" className="hover:opacity-60 transition-opacity">Services</a></li>
            <li><a href="#Works" className="hover:opacity-60 transition-opacity">Works</a></li>
            <li><a href="#About" className="hover:opacity-60 transition-opacity">About</a></li>
            <li><a href="#Contact" className="hover:opacity-60 transition-opacity">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-widest">
            Socials
          </h3>
          <ul className="flex gap-6 text-sm font-semibold">
            {portfolioData.socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
                  {social.name} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Local Time & Scroll to top */}
        <div className="flex items-center gap-6">
          <div className="text-sm font-mono text-neutral-700">
            Local time · <span className="font-bold">{timeStr || '--:-- --'}</span> , IST
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group relative hidden w-fit flex-col items-center justify-center overflow-hidden rounded-full bg-[#888879] p-4 duration-300 hover:scale-95 md:flex text-white hover:bg-black transition-all cursor-pointer"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
