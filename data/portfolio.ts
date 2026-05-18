export const portfolio = {
  name: "Marina Akter",
  role: "MERN Stack Developer & Problem Solver",
  roleHero: "MERN Developer & Founder @ Apixel",
  tagline:
    "Building scalable web applications, integrating AI into products, and solving complex problems with clean, performant code.",
  shortBio:
    "I'm Marina, a MERN stack developer and Founder & COO of Apixel — an IT company delivering full-stack web solutions. I love turning hard problems into elegant, performant code and I'm actively integrating AI into the products we build at Apixel.",
  longBio:
    "I'm a full-stack engineer specializing in the MERN stack — React, Next.js, Node.js, Express, and MongoDB. As Founder & COO of Apixel (apixel.net), I lead engineering and product delivery for clients across multiple industries. I architect and ship complete web applications with a strong emphasis on clean code, scalable architecture, and real-world performance. With AI transforming every industry, I'm building AI-powered features into our products — integrating OpenAI APIs, LangChain pipelines, and vector search into MERN applications. I'm also an active competitive programmer, which keeps my algorithmic thinking sharp for complex engineering challenges.",
  location: "Dhaka, Bangladesh",
  university: "Independent University, Bangladesh (IUB)",
  email: "marinaakter878@gmail.com",
  whatsapp: "+8801603277275",
  whatsappLink: "https://wa.me/8801603277275",
  github: "https://github.com/marinaakter",
  linkedin: "https://linkedin.com/in/marinaakter",
  apixel: {
    name: "Apixel",
    url: "https://www.apixel.net",
    role: "Founder & COO",
  },

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
    "MongoDB",
    "OpenAI",
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
      title: "AI-Powered Features",
      description:
        "Integrating LLMs, chatbots, semantic search, and intelligent automation into MERN apps",
      icon: "Sparkles",
      bullets: [
        "OpenAI & LangChain API integration",
        "Streaming AI responses with Vercel AI SDK",
        "Vector search & semantic embeddings",
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
    ai: [
      { name: "OpenAI API", level: 82 },
      { name: "LangChain", level: 72 },
      { name: "Prompt Engineering", level: 80 },
      { name: "Vercel AI SDK", level: 75 },
      { name: "Hugging Face", level: 65 },
      { name: "AI-Assisted Dev", level: 90 },
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
      title: "AI Chat Assistant",
      description:
        "Production-grade AI chat app built with Next.js App Router, OpenAI GPT-4o, and Vercel AI SDK. Features streaming responses, conversation history, and a clean chat UI.",
      tags: ["Next.js", "OpenAI", "Vercel AI SDK", "TypeScript", "Tailwind CSS"],
      status: "completed" as const,
      featured: true,
      liveLink: "https://askaichat.app/",
      codeLink: "https://github.com/marinaakter",
      image: "/images/project-ai-chat.png",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution for ARM Group with product catalogue, cart, checkout flow, and order management. Built with Next.js App Router and MongoDB.",
      tags: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS"],
      status: "completed" as const,
      featured: true,
      liveLink: "https://armgroup.vercel.app/",
      codeLink: "https://github.com/marinaakter",
      image: "/images/project-ecommerce.png",
    },
    {
      id: 3,
      title: "Task Management SaaS",
      description:
        "Apixel's internal task flow platform with project boards, team workspaces, and role-based access control. Built with React and a Node/Express backend.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      status: "completed" as const,
      featured: true,
      liveLink: "https://apixeltaskflow.vercel.app/",
      codeLink: "https://github.com/marinaakter",
      image: "/images/project-tasks.png",
    },
    {
      id: 4,
      title: "IT Solutions Website",
      description:
        "Corporate website for an IT solutions company with service showcases, project portfolio, client testimonials, and a contact system. Fully responsive and SEO-optimised.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Netlify"],
      status: "completed" as const,
      featured: false,
      liveLink: "https://youritsolutionn.netlify.app/",
      codeLink: "https://github.com/marinaakter",
      image: "/images/project-cms.png",
    },
    {
      id: 5,
      title: "Medical & Health",
      description:
        "Healthcare information platform for a medical institution featuring department listings, doctor profiles, appointment details, and patient resources.",
      tags: ["React", "Next.js", "Tailwind CSS"],
      status: "completed" as const,
      featured: false,
      liveLink: "https://www.dmsbcsh.com/",
      codeLink: "https://github.com/marinaakter",
      image: "/images/project-medical.png",
    },
    {
      id: 6,
      title: "Restaurant Booking System",
      description:
        "Full-stack reservation platform with real-time slot availability, email confirmation, and an admin panel for table management.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      status: "completed" as const,
      featured: false,
      liveLink: "https://example.com",
      codeLink: "https://github.com/marinaakter",
      image: "/images/project-restaurant.png",
    },
    {
      id: 7,
      title: "Student Consultancy Site",
      description:
        "Full-stack consultancy platform for student services with course listings, inquiry forms, admission guidance, and an admin management panel.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      status: "in-progress" as const,
      featured: false,
      liveLink: "https://example.com",
      codeLink: "https://github.com/marinaakter",
      image: "/images/project-consultancy.png",
    },
    {
      id: 8,
      title: "Real Estate Website",
      description:
        "Property listing platform with advanced search filters, property detail pages, agent profiles, virtual tour support, and a contact inquiry system.",
      tags: ["Next.js", "MongoDB", "Tailwind CSS", "TypeScript"],
      status: "in-progress" as const,
      featured: false,
      liveLink: "https://example.com",
      codeLink: "https://github.com/marinaakter",
      image: "/images/project-realestate.png",
    },
    {
      id: 9,
      title: "Algorithm Visualizer",
      description:
        "Interactive visualizer for sorting and graph algorithms. Supports BFS, DFS, Dijkstra, QuickSort, and MergeSort with step-by-step animation controls.",
      tags: ["React", "TypeScript", "Framer Motion"],
      status: "in-progress" as const,
      featured: false,
      liveLink: "https://example.com",
      codeLink: "https://github.com/marinaakter",
      image: "/images/project-algo.png",
    },
  ],

  experiences: [
    {
      id: 1,
      type: "work" as const,
      title: "Founder & COO",
      organization: "Apixel — IT Company",
      organizationUrl: "https://www.apixel.net",
      location: "Dhaka, Bangladesh",
      period: "2023 – Present",
      description:
        "Co-founded and run Apixel, an IT company delivering full-stack web solutions, AI-integrated products, and digital transformation services to clients across industries.",
      highlights: [
        "Built and scaled the company from 0 to 30+ satisfied clients",
        "Lead engineering architecture across all client projects",
        "Integrating AI (OpenAI, LangChain) into client products as a core offering",
      ],
    },
    {
      id: 2,
      type: "work" as const,
      title: "Full-Stack Developer",
      organization: "Tech Startup (Remote)",
      location: "Dhaka, Bangladesh",
      period: "2022 – 2023",
      description:
        "Built and maintained full-stack MERN applications for clients across e-commerce, SaaS, and content platforms. Responsible for architecture decisions, API design, and front-end performance.",
      highlights: [
        "Reduced page load time by 60% through SSR and caching strategies",
        "Designed a multi-tenant MongoDB schema supporting 10k+ active users",
        "Implemented JWT + refresh-token auth flow across 5 production apps",
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
      icon: "Sparkles",
      title: "AI Integration",
      description:
        "I build LLM-powered features into production apps — OpenAI, LangChain, streaming responses, and vector search.",
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
  ],

  highlightChips: [
    "Founder @ Apixel",
    "AI-powered features",
    "Problem-solving mindset",
    "Clean architecture",
    "Full-stack ownership",
  ],
};

export type Project = (typeof portfolio.projects)[number];
export type Experience = (typeof portfolio.experiences)[number];
export type Skill = { name: string; level: number };
export type SkillCategory = keyof typeof portfolio.skills;
