import { useLenis } from './hooks/useLenis';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { FloatingMenu } from './components/FloatingMenu';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { SelectedWorks } from './components/SelectedWorks';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  // Initialize unified Lenis smooth scroll and synchronize with GSAP ScrollTrigger
  useLenis();

  return (
    <div className="relative min-h-screen bg-[#E8E8E3] text-[#080807] font-editorial selection:bg-[#080807] selection:text-[#E8E8E3]">
      {/* Introductory SVG Curtain Wave Preloader */}
      <Preloader />

      {/* Magnetic Follower Cursor */}
      <CustomCursor />

      {/* Floating Hamburger Toggle Button & Fullscreen Drawer */}
      <FloatingMenu />

      {/* Top Absolute Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Services />
        <SelectedWorks />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
