import { useState } from 'react';

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
    <section id="Contact" className="relative z-10 bg-[#151515] text-[#e0ded4] px-6 py-24 md:px-16 flex flex-col items-center border-t border-white/10">
      <div className="w-full max-w-xl backdrop-blur-xl bg-[rgba(209,209,199,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
            Let's Make It Happen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
            Have a project in mind?
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs text-neutral-400">Your name</label>
            <input
              type="text"
              required
              placeholder="John Doe"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs text-neutral-400">Your email address</label>
            <input
              type="email"
              required
              placeholder="john@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs text-neutral-400">Tell me about your business or project</label>
            <textarea
              rows="4"
              required
              placeholder="Hello Zuned, I'm looking to build..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full px-6 py-4 rounded-xl font-semibold tracking-wide text-sm bg-[#eae8dc] text-black hover:bg-white active:scale-[0.98] transition-all font-mono uppercase"
          >
            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent! ✓' : 'Get a quote'}
          </button>
        </form>

        {status === 'success' && (
          <div className="text-center text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 py-3 rounded-xl animate-fade-in">
            Thank you! Your inquiry has been sent successfully.
          </div>
        )}
      </div>
    </section>
  );
}
