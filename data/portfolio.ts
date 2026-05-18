export const portfolio = {
  name: "Marina Akter",
  role: "Senior MERN Stack Developer & Problem Solver",
  tagline:
    "Building scalable web applications and solving complex problems with clean, performant code.",
  shortBio:
    "I'm Marina, a MERN stack developer who loves turning hard problems into elegant, performant code. I build full-stack web applications end-to-end and sharpen my engineering edge through algorithmic problem solving and competitive programming.",
  longBio:
    "I'm a full-stack engineer specializing in the MERN stack — React, Next.js, Node.js, Express, and MongoDB. I architect and ship complete web applications with a strong emphasis on clean code, scalable architecture, and real-world performance. Outside of building products, I actively pursue algorithmic problem solving and competitive programming, which sharpens my ability to break down complex engineering challenges and design efficient solutions. I'm currently pursuing my BSc in Computer Science and Engineering at IUB, where I deepen my foundations in data structures, algorithms, and system design.",
  location: "Dhaka, Bangladesh",
  university: "Independent University, Bangladesh (IUB)",
  email: "marina.akter.dev@gmail.com",
  whatsapp: "+8801XXXXXXXXX",
  whatsappLink: "https://wa.me/8801XXXXXXXXX",
  github: "https://github.com/marinaakter",
  linkedin: "https://linkedin.com/in/marinaakter",

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  stats: [
    { value: "50", label: "Projects Shipped", suffix: "+" },
    { value: "30", label: "Happy Clients", suffix: "+" },
    { value: "6", label: "Tech Domains", suffix: "+" },
    { value: "∞", label: "Problem-Solving Mindset", suffix: "" },
  ],

  heroTechStack: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
  ],

  services: [
    {
      id: "01",
      title: "Full-Stack Web Applications",
      description:
        "End-to-end MERN apps with React/Next frontends and Node/Express APIs",
      icon: "Code2",
      bullets: [
        "React & Next.js front-ends with TypeScript",
        "Node.js + Express REST APIs",
        "MongoDB data layer with Mongoose",
      ],
    },
    {
      id: "02",
      title: "RESTful APIs & Backend Systems",
      description:
        "Scalable, well-documented APIs with auth, validation, and clean architecture",
      icon: "Server",
      bullets: [
        "Clean RESTful API design",
        "Input validation & error handling",
        "Swagger/OpenAPI documentation",
      ],
    },
    {
      id: "03",
      title: "Next.js & SSR Solutions",
      description:
        "SEO-friendly, performant Next.js apps with App Router and server components",
      icon: "Layers",
      bullets: [
        "App Router with Server Components",
        "Static & dynamic rendering strategies",
        "Edge-ready deployment",
      ],
    },
    {
      id: "04",
      title: "Database Design & MongoDB",
      description:
        "Schema design, aggregation pipelines, indexing, and data modeling",
      icon: "Database",
      bullets: [
        "Efficient schema & data modeling",
        "Aggregation pipeline queries",
        "Indexing & performance tuning",
      ],
    },
    {
      id: "05",
      title: "Performance Optimization",
      description:
        "Lighthouse 95+, Core Web Vitals, code-splitting, caching strategies",
      icon: "Gauge",
      bullets: [
        "Core Web Vitals & Lighthouse 95+",
        "Code splitting & lazy loading",
        "Caching & CDN strategies",
      ],
    },
    {
      id: "06",
      title: "Authentication & Security",
      description: "JWT, OAuth, session management, secure API design",
      icon: "ShieldCheck",
      bullets: [
        "JWT & OAuth 2.0 flows",
        "Secure session management",
        "OWASP-aware API hardening",
      ],
    },
  ],

  skills: {
    frontend: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 92 },
      { name: "Tailwind CSS", level: 90 },
    ],
    backend: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 87 },
      { name: "REST API", level: 90 },
      { name: "JWT Auth", level: 82 },
    ],
    database: [
      { name: "MongoDB", level: 88 },
      { name: "Firebase", level: 75 },
    ],
    "problem-solving": [
      { name: "Data Structures", level: 85 },
      { name: "Algorithms", level: 82 },
      { name: "Competitive Programming", level: 78 },
      { name: "C++", level: 80 },
      { name: "Python", level: 75 },
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Google Analytics", level: 72 },
    ],
    additional: [
      { name: "SEO Optimization", level: 78 },
      { name: "Social Media Marketing", level: 72 },
      { name: "Google Ads", level: 68 },
      { name: "Meta Ads", level: 68 },
      { name: "Content Strategy", level: 70 },
      { name: "Analytics & Reporting", level: 73 },
    ],
  },

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with product management, cart, checkout, and order tracking. Built with Next.js App Router, MongoDB, and Stripe integration.",
      tags: ["Next.js", "MongoDB", "Stripe", "TypeScript", "Tailwind CSS"],
      status: "completed" as const,
      featured: true,
      liveLink: "https://example.com",
      codeLink: "https://github.com/marinaakter",
      image: "/images/project-ecommerce.png",
    },
    {
      id: 2,
      title: "Task Management SaaS",
      description:
        "Real-time collaborative task board with drag-and-drop, team workspaces, and role-based access control. Powered by Node/Express WebSocket API.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      status: "completed" as const,
      featured: true,
      liveLink: "https://example.com",
      codeLink: "https://github.com/marinaakter",
      image: "/images/project-tasks.png",
    },
    {
      id: 3,
      title: "Developer Portfolio CMS",
      description:
        "A headless CMS-backed portfolio system with live preview, markdown support, and analytics dashboard. Achieved Lighthouse 98+ score.",
      tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
      status: "completed" as const,
      featured: true,
      liveLink: "https://example.com",
      codeLink: "https://github.com/marinaakter",
      image: "/images/project-cms.png",
    },
    {
      id: 4,
      title: "Restaurant Booking System",
      description:
        "Full-stack reservation platform with real-time slot availability, email confirmation, and admin panel for table management.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      status: "completed" as const,
      featured: false,
      liveLink: "https://example.com",
      codeLink: "https://github.com/marinaakter",
      image: "/images/project-restaurant.png",
    },
    {
      id: 5,
      title: "Algorithm Visualizer",
      description:
        "Interactive visualizer for sorting and graph algorithms. Supports BFS, DFS, Dijkstra, QuickSort, MergeSort with step-by-step animation.",
      tags: ["React", "TypeScript", "Framer Motion"],
      status: "in-progress" as const,
      featured: false,
      liveLink: "https://example.com",
      codeLink: "https://github.com/marinaakter",
      image: "/images/project-algo.png",
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard aggregating metrics from multiple social platforms with trend analysis, scheduled reporting, and custom KPI widgets.",
      tags: ["Next.js", "Node.js", "Firebase", "Chart.js"],
      status: "in-progress" as const,
      featured: false,
      liveLink: "https://example.com",
      codeLink: "https://github.com/marinaakter",
      image: "/images/project-social.png",
    },
  ],

  experiences: [
    {
      id: 1,
      type: "work" as const,
      title: "Full-Stack Developer",
      organization: "Tech Startup (Remote)",
      location: "Dhaka, Bangladesh",
      period: "2023 – Present",
      description:
        "Building and maintaining full-stack MERN applications for clients across e-commerce, SaaS, and content platforms. Responsible for architecture decisions, API design, and front-end performance.",
      highlights: [
        "Reduced page load time by 60% through SSR and caching strategies",
        "Designed a multi-tenant MongoDB schema supporting 10k+ active users",
        "Implemented JWT + refresh-token auth flow across 5 production apps",
      ],
    },
    {
      id: 2,
      type: "work" as const,
      title: "Frontend Developer",
      organization: "Digital Agency",
      location: "Dhaka, Bangladesh",
      period: "2022 – 2023",
      description:
        "Developed responsive React web applications and collaborated with designers to translate Figma mockups into pixel-perfect, accessible UI.",
      highlights: [
        "Delivered 12 client projects with 100% on-time record",
        "Built a reusable component library reducing dev time by 30%",
        "Integrated Google Analytics and Search Console across client sites",
      ],
    },
    {
      id: 3,
      type: "education" as const,
      title: "BSc in Computer Science & Engineering",
      organization: "Independent University, Bangladesh (IUB)",
      location: "Dhaka, Bangladesh",
      period: "2021 – Present",
      description:
        "Studying core CS disciplines: data structures, algorithms, operating systems, databases, and software engineering. Active in competitive programming and hackathons.",
      highlights: [
        "Top 10% academic ranking in the CSE department",
        "Participated in ICPC regional rounds",
        "Completed 300+ algorithmic problems on Codeforces & LeetCode",
      ],
    },
  ],

  traits: [
    {
      icon: "Code2",
      title: "Clean Architecture",
      description:
        "I write code that future-me (and teammates) can maintain — modular, well-typed, and documented where it counts.",
    },
    {
      icon: "Binary",
      title: "Algorithmic Thinking",
      description:
        "Competitive programming sharpened my ability to break down complex problems and design efficient, optimal solutions.",
    },
    {
      icon: "Gauge",
      title: "Performance First",
      description:
        "Every feature ships with Lighthouse metrics in mind. Slow UX is a bug, not a feature request.",
    },
    {
      icon: "Users",
      title: "User-Centered",
      description:
        "Engineering decisions are anchored by real user impact. I ship features that matter, not just features.",
    },
  ],

  highlightChips: [
    "User-focused thinking",
    "Problem-solving mindset",
    "Clean architecture",
    "Competitive programming",
    "Full-stack ownership",
  ],
};

export type Project = (typeof portfolio.projects)[number];
export type Experience = (typeof portfolio.experiences)[number];
export type Skill = { name: string; level: number };
export type SkillCategory = keyof typeof portfolio.skills;
