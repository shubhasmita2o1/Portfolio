/**
 * Portfolio Configuration File
 * Easily personalize your replicated portfolio by changing the values below!
 */
window.PORTFOLIO_DATA = {
  // Personal Info
  name: "YOUR NAME", // e.g. "ALEX RIVERA"
  role: "Full-Stack Web Developer & Designer",
  status: "AVAILABLE FOR WORK",
  period: "NOV'26",
  email: "yourname@example.com",
  locationTimezone: "IST", // e.g. "IST", "PST", "EST", "UTC"
  
  // Hero Section
  hero: {
    tagline: "I build fast, modern websites that help businesses grow, available for freelance projects worldwide.",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    ctaText: "CONTACT ↗",
    ctaLink: "#Contact"
  },

  // Services Section
  services: [
    {
      number: "01",
      title: "Full-Stack Development",
      description: "From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.",
      features: [
        "React, Node.js, Express.js",
        "REST APIs, Firebase, Docker",
        "Git, GitHub, Postman"
      ]
    },
    {
      number: "02",
      title: "UI/UX & Frontend",
      description: "Good design feels effortless. I design and develop responsive, intuitive interfaces that work smoothly across devices, with a strong focus on clarity, accessibility, and performance.",
      features: [
        "NextJs, TailwindCSS, GSAP",
        "Figma → Pixel-perfect code",
        "HTML, CSS, JavaScript"
      ]
    },
    {
      number: "03",
      title: "Optimization & Architecture",
      description: "I focus on building systems that stay reliable as things scale. From handling data efficiently to designing clean architecture, I apply core computer science principles to keep applications fast, stable, and future-ready.",
      features: [
        "Data Structures & Algorithms",
        "DBMS, OOP, OS Fundamentals",
        "Scalable systems & data pipelines"
      ]
    }
  ],

  // Selected Works
  projects: [
    {
      index: "01",
      title: "NURA",
      category: "DEVELOPMENT",
      year: "2025",
      description: "Modern marketing website featuring high-performance animations, fluid typography, and bespoke design systems.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      link: "https://nurabyzuned.netlify.app/",
      github: "https://github.com"
    },
    {
      index: "02",
      title: "JOB PORTAL",
      category: "FULL-STACK",
      year: "2025",
      description: "Full-stack recruitment and talent matching platform connecting enterprise recruiters with qualified candidates.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
      link: "https://zunedjobs.netlify.app/",
      github: "https://github.com"
    },
    {
      index: "03",
      title: "PRODUCTIVITY SAAS",
      category: "DEVELOPMENT",
      year: "2025",
      description: "Comprehensive SaaS application to track project progress, manage sprints, and optimize developer workflow.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      link: "https://productivity-saas-zuned.netlify.app/",
      github: "https://github.com"
    },
    {
      index: "04",
      title: "CINEREC",
      category: "MACHINE LEARNING",
      year: "2025",
      description: "Machine learning recommendation engine suggesting personalized media content with real-time vector embeddings.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
      link: "https://movierecommendation-sbjn.onrender.com/",
      github: "https://github.com"
    },
    {
      index: "05",
      title: "CODE2IMG",
      category: "DEV TOOLS",
      year: "2025",
      description: "Code snippet transformation utility creating visually stunning, exportable code cards with syntax highlighting.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      link: "https://code2img-zuned.netlify.app/",
      github: "https://github.com"
    }
  ],

  // Skills
  skills: {
    languagesAndTools: [
      "Python", "SQL", "C++", "Java", "TypeScript", 
      "JavaScript", "Git", "Postman", "Docker", "Firebase"
    ],
    frameworksAndLibraries: [
      "React", "Node.js", "Express.js", "Flask", "Bootstrap", 
      "TailwindCSS", "Framer Motion", "GSAP", "Next.js"
    ],
    coreCS: [
      "Data Structures & Algorithms", "DBMS", "OOP", 
      "Operating Systems", "System Design"
    ]
  },

  // About Section
  about: {
    heading: "I'm a software engineer driven by a passion for turning ideas into clean, intuitive digital experiences.",
    paragraphs: [
      "I'm a full-stack developer who builds fast, modern web applications mostly with Next.js and Tailwind CSS because they just work. I work with businesses and startups to turn ideas into reliable, user-friendly products built to scale.",
      "I've been building websites long enough to have strong opinions about things that don't matter to most people, like whether a transition should be 150ms or 200ms. (It's 150ms, btw). Build the thing, make it work, make it feel good. That's the gig."
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
  },

  // Social Links
  socials: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    instagram: "https://www.instagram.com/",
    leetcode: "https://leetcode.com/"
  }
};
