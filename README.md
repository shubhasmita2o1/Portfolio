# Zuned Aalim Portfolio — Pixel-Accurate React + Vite Recreation

A pixel-accurate, high-fidelity reverse-engineered recreation of [https://zunedaalim.com/](https://zunedaalim.com/), engineered with React, Vite, JavaScript (zero TypeScript), Tailwind CSS, GSAP 3 + ScrollTrigger, Lenis smooth scrolling, and Lucide React.

---

## 🛠️ Technology Stack

| Technology | Role |
| :--- | :--- |
| **React 18** | UI component architecture and state management |
| **Vite 6** | Modern, lightning-fast build tool and dev server |
| **JavaScript (ESM)** | 100% JavaScript (`.jsx` / `.js`). Strictly zero TypeScript |
| **Tailwind CSS 3** | Fluid utility-first styling with exact production tokens |
| **GSAP 3 + ScrollTrigger** | High-performance animation timelines, scroll pinning, and scrub scaling |
| **Lenis v1.1.20** | Smooth inertial scrolling synchronized directly with the GSAP ticker |
| **Lucide React** | Clean SVG iconography |
| **Vercel** | One-click deployment configuration (`vercel.json`) |

---

## 📐 Architecture & Component Breakdown

```text
src/
  components/
    Preloader.jsx      # SVG morphing wave curtain entrance
    CustomCursor.jsx   # Lerp (0.12) "View" magnetic follower badge
    Navbar.jsx         # Absolute top bar with brand and nav anchors
    FloatingMenu.jsx   # Fixed circular toggle button + frosted glass drawer
    Hero.jsx           # Sticky h-svh hero with negative-margin spacer for ScrollTrigger
    Services.jsx       # What I Do / with 3 numbered rows & divide-y dividers
    SelectedWorks.jsx  # Sticky digital pagination counter (01–05) + project stack
    ProjectCard.jsx    # Individual project card with alphanumeric hacker text scramble
    Skills.jsx         # 3 categorized columns for Languages, Frameworks, Core CS
    About.jsx          # Portrait visual asset + narrative statement
    Contact.jsx        # Frosted glassmorphic card with form validation and submit feedback
    Footer.jsx         # Real-time IST clock, menu, socials, and responsive scroll-to-top
  data/
    portfolioData.js   # Centralized data file for easy personal customization
  hooks/
    useLenis.js        # Single unified rAF Lenis loop synchronized with GSAP ScrollTrigger
  styles/
    globals.css        # CSS custom properties, clamp typography, custom scrollbars
  App.jsx              # Root page orchestrator
  main.jsx             # React DOM entry
```

---

## 🎬 Recreated Animations & Micro-Interactions

1. **Curtain Wave Preloader:**
   - SVG path curve morph (`M0 0 L926 0 L926 1000 Q463 730 0 1000 L0 0` → `Q463 0`) followed by vertical curtain slide (`y: -100vh`) using GSAP.
2. **Hero Sticky Pin & Scroll Scrub:**
   - Hero container is pinned `sticky top-0 h-svh` with a paired spacer `<section class="hero-spacer"><div class="hero-spacer-inner"></div></section>` (`mb-[-100svh]`).
   - GSAP ScrollTrigger scrubs `scale: 0.94` and `opacity: 0.85` as `#Services` scrolls into view.
3. **Works Section Sticky Pagination:**
   - Left column (`lg:col-span-2 sticky top-28`): Digital counter `01` through `05`.
   - ScrollTrigger highlights the active digit in `#ffffff` while non-active numbers remain `#737373`.
4. **Interactive Text Scramble Decoder:**
   - Project titles on hover cycle random alphanumeric characters (`A-Z`, `0-9`) before resolving to the true title.
5. **Magnetic Follower Cursor ("View" Badge):**
   - 80px white circular badge that tracks mouse coordinates with `lerp: 0.12` interpolation.
   - Appears exclusively when hovering `.custom-cursor-area` (the 5 project cards).
6. **Floating Hamburger & Slide-in Drawer:**
   - Hidden at scroll 0 (Hero) and smoothly fades in via ScrollTrigger once the user reaches `#Services`.
   - SVG icon animates into an `✕` upon opening the full-screen frosted glass drawer (`backdrop-blur-2xl bg-black/85`).
7. **Single Unified Smooth Scroll Ticker:**
   - Lenis updates on GSAP's RAF ticker (`gsap.ticker.add`) with `lagSmoothing(0)`, avoiding duplicate animation loops.
   - Respects user accessibility preferences (`prefers-reduced-motion`).

---

## 🚀 Running the Project Locally

### 1. Start Development Server:
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 2. Build for Production:
```bash
npm run build
```
Creates an optimized production bundle in `/dist`.

### 3. Preview Production Build:
```bash
npm run preview
```

---

## ☁️ Deploying to Vercel

### Option 1: Vercel CLI
```bash
npx vercel
```

### Option 2: Git Integration
Push this repository to GitHub/GitLab and import it into your Vercel Dashboard. Vercel automatically detects `vite` and deploys using `vercel.json`.

---

## 🎨 Customizing for Your Portfolio

To personalize this website with your own information, edit **`src/data/portfolioData.js`**:
- `personal.name`: Your display name.
- `personal.role`: Your professional title.
- `personal.email`: Your contact email.
- `personal.tagline`: Your headline statement.
- `projects`: Your project titles, thumbnails, categories, and live links.
- `skills`: Your tech stack and core competencies.
- `socials`: Your LinkedIn, GitHub, Instagram, and other profile URLs.
