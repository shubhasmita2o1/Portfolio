import { useState } from 'react';
import { MagneticButton } from './MagneticButton';

export function Contact() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      e.target.reset();
      setTimeout(() => setStatus('idle'), 4000);
    }, 700);
  };

  return (
    <section id="Contact" className="section-padding-x py-[var(--space-lg)] bg-[#E8E8E3] relative z-30">
      <div className="relative flex h-full w-full flex-col items-center justify-between rounded-2xl md:rounded-3xl bg-[linear-gradient(0deg,_#393632,_#080807)] bg-cover border border-white/10 shadow-xl backdrop-blur-xl p-[var(--space-md)] md:p-[var(--space-xl)] pt-16 md:pt-24 pb-16 md:pb-24">
        {/* Massive Bold Centered Heading: LET'S MAKE IT HAPPEN */}
        <h2 className="max-w-[10ch] text-center text-[length:var(--text-heading-1)] font-semibold uppercase text-[var(--color-accent-400)] leading-none tracking-tight font-editorial mb-8 md:mb-12">
          LET'S MAKE IT HAPPEN
        </h2>

        {/* Floating Glassmorphic Contact Card */}
        <div
          className="sm:w-[36rem] w-full mx-auto my-4 px-6 sm:px-10 xl:px-14 py-12 rounded-2xl backdrop-blur-xl bg-[rgba(209,209,199,0.05)] border border-[rgba(255,255,255,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
        >
          <h2 className="text-center text-[length:var(--text-h4)] font-medium mb-8 text-[var(--color-accent-200)] tracking-tight font-editorial">
            Have a project in mind?
          </h2>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full placeholder:font-mono font-mono text-[length:var(--text-base)] rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-[var(--color-text-bg)] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                required
                placeholder="Your email address"
                className="w-full placeholder:font-mono font-mono text-[length:var(--text-base)] rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-[var(--color-text-bg)] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
              />
            </div>

            <div>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me about your business or project"
                className="w-full placeholder:font-mono font-mono rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-[var(--color-text-bg)] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition resize-none"
              />
            </div>

            <MagneticButton strength={0.25} className="w-full">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3.5 rounded-xl font-semibold tracking-wide text-[length:var(--text-base-small)] transition-all duration-100 bg-[var(--color-accent-200)] text-black hover:bg-white active:scale-[0.98] active:shadow-inner cursor-pointer font-editorial"
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent! ✓' : 'Get a quote'}
              </button>
            </MagneticButton>
          </form>

          {status === 'success' && (
            <div className="mt-4 text-center text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 py-2.5 rounded-xl">
              Thank you! Your inquiry has been sent successfully.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
