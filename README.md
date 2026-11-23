## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Modular UI component architecture and state management |
| **Vite 6** | Lightning-fast HMR and optimized production bundling |
| **JavaScript (ESM)** | Modern ES Modules (`.jsx` / `.js`) |
| **Tailwind CSS 3** | Fluid utility-first design tokens with viewport-clamp typography |
| **GSAP 3 + ScrollTrigger** | GPU-accelerated motion timelines, pinned sections, and letter-reveal animations |
| **Lenis v1.1.20** | Inertial smooth scrolling synchronized with GSAP's requestAnimationFrame ticker |
| **Lucide React** | Minimalist SVG iconography |
| **Vercel** | Edge deployment and serverless static hosting |

---

## 📐 Project Structure

```text
Portfolio/
├── src/
│   ├── components/
│   │   ├── About.jsx          # Narrative statement, portrait asset, and DEVELOPER DESIGNER CREATOR/ reveal
│   │   ├── Contact.jsx        # Glassmorphic contact card with interactive form validation
│   │   ├── CustomCursor.jsx   # Lerp follower "VIEW" badge with layer priority over menu
│   │   ├── FloatingMenu.jsx   # Sticky hamburger toggle + fullscreen frosted-glass drawer
│   │   ├── Footer.jsx         # Live IST clock, navigational anchors, and smooth scroll-to-top
│   │   ├── Hero.jsx           # Fullscreen hero with sticky pin & scrub scale effect
│   │   ├── Navbar.jsx         # Top absolute navigation bar with interactive link hovers
│   │   ├── Preloader.jsx      # Morphing SVG wave curtain intro
│   │   ├── ProjectCard.jsx    # Project showcase cards with alphanumeric text scramble decoder
│   │   ├── SelectedWorks.jsx  # Sticky digital pagination counter (01–05) + stacked work cards
│   │   ├── Services.jsx       # WHAT I DO / with stacked service breakdown
│   │   └── Skills.jsx         # 3 categorized columns for Languages & Tools, Frameworks, Core CS
│   ├── data/
│   │   └── portfolioData.js   # Centralized data store (personal info, projects, skills, socials)
│   ├── hooks/
│   │   └── useLenis.js        # Unified Lenis smooth scroll ticker synced with GSAP ScrollTrigger
│   ├── styles/
│   │   ├── fonts.css          # PP Neue Montreal & editorial font definitions
│   │   └── globals.css        # Fluid clamps, custom scrollbar, animations, and color tokens
│   ├── App.jsx                # Core layout orchestrator
│   └── main.jsx               # React DOM entry point
├── public/                    # Static assets, favicon, and images
├── index.html                 # HTML entry point
├── tailwind.config.js         # Tailwind theme customizations
├── vite.config.js             # Vite build configuration
└── vercel.json                # Vercel deployment routes
```

---

## 🎬 Key Features & Motion Architecture

1. **Curtain Wave Preloader:**
   - SVG cubic Bézier curve morph (`M0 0 L926 0 L926 1000 Q463 730 0 1000 L0 0` → `Q463 0`) with smooth vertical curtain exit.
2. **Hero Sticky Pin & Scrub:**
   - Fullscreen viewport hero pinned while scrolling, smoothly scaling to `0.94` scale and `0.85` opacity as Services comes into view.
3. **Masked Letter & Line-Wise Slide-Up Reveals:**
   - Staggered overflow-hidden reveals on section titles (`WHAT I DO /`, `SELECTED WORKS /`, and line-by-line on `DEVELOPER`, `DESIGNER`, `CREATOR/`).
4. **Sticky Works Counter & Odometer Roll:**
   - Left-column sticky digital counter (`01` through `05`) synchronizing automatically with the active project card.
5. **Interactive Alphanumeric Decoder:**
   - Project titles scramble through random characters on mouse hover before resolving cleanly to the true title.
6. **Smart Custom Follower Cursor ("VIEW"):**
   - Lerp-interpolated 80px badge tracking mouse movements on project cards, automatically hidden and layered underneath the floating hamburger menu button.
7. **Dual-Span Rolling Text Hover:**
   - Dual-layer text transition on skills and navigation items, rolling from muted tone to bright white on hover.
8. **Inertial Smooth Scrolling:**
   - Integrated Lenis smooth scroll hooked directly into GSAP's RAF ticker with full accessibility checks (`prefers-reduced-motion`).

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or pnpm

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/shubhasmita2o1/portfolio.git
cd portfolio/Portfolio
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Customization

All portfolio content is centralized in **`src/data/portfolioData.js`**:
- **`personal`**: Name, title, tagline, email, and portrait image.
- **`services`**: Service descriptions, features, and tech stacks.
- **`projects`**: Project titles, categories, thumbnails, and live links.
- **`skills`**: Languages, frameworks, and core CS concepts.
- **`socials`**: Social media and portfolio links (GitHub, LinkedIn, etc.).

---

## 📄 License


