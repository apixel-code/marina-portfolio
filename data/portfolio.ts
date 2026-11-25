export const portfolio = {
  name: "Marina Akter",
  role: "MERN Stack Developer & Problem Solver",
  roleHero: "MERN Stack Developer & Founder @ Apixel",
  tagline:
    "Building scalable web applications, integrating AI into products, and solving complex problems with clean, performant code.",
  shortBio:
    "I'm Marina, a MERN stack developer and Founder & CTO of Apixel — an IT company delivering full-stack web solutions. I love turning hard problems into elegant, performant code and I'm actively integrating AI into the products we build at Apixel.",
  longBio:
    "I'm a full-stack engineer specializing in the MERN stack — React, Next.js, Node.js, Express, and MongoDB. As Founder & CTO of Apixel (apixel.net), I lead engineering and product delivery for clients across multiple industries. I architect and ship complete web applications with a strong emphasis on clean code, scalable architecture, and real-world performance. With AI transforming every industry, I'm building AI-powered features into our products — integrating OpenAI APIs, LangChain pipelines, and vector search into MERN applications. I'm also an active competitive programmer, which keeps my algorithmic thinking sharp for complex engineering challenges.",
  location: "Dhaka, Bangladesh",
  university: "Independent University, Bangladesh (IUB)",
  email: "marinaakter.me@gmail.com",
  whatsapp: "+8801754407239",
  whatsappLink: "https://wa.me/8801754407239",
  github: "https://github.com/marinaakter",
  linkedin: "https://www.linkedin.com/in/marina-akter",
  // facebook: "https://www.facebook.com/marinaakter.me",
  apixel: {
    name: "Apixel",
    url: "https://www.apixel.net",
    role: "Founder & CTO",
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
      // { name: "VS Code", level: 95 },
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
      title: "ApixelPost — AI Social Media SaaS",
      description:
        "Apixel's own SaaS product: write one line, AI writes the post, and one click publishes it to Facebook, Instagram, TikTok, YouTube, Pinterest, LinkedIn and more. Scheduling, Google Drive autopilot, subscriptions in USD and BDT.",
      tags: ["SaaS", "AI", "OAuth", "Chrome Extension", "PWA"],
      status: "completed" as const,
      featured: true,
      liveLink: "https://apixelpost.tech/",
      codeLink: "https://github.com/marinaakter",
      image: "/images/ApixelPost.jpg",
      caseStudy: {
        overview:
          "ApixelPost is a SaaS product built and run by Apixel for shops, creators, agencies and local businesses who need to post on many social networks every day. A user writes one line, AI turns it into a ready post tailored to each network, and one click publishes or schedules it everywhere. It runs as a web app, an installable phone app (PWA) and a Chrome extension, with paid plans for customers in Bangladesh and worldwide.",
        features: [
          {
            title: "AI Post Writing",
            description:
              "One line in, a separate ready-to-post caption out for each network — in English or Bangla — with a preview and edit step before publishing.",
          },
          {
            title: "One-Click Multi-Network Publishing",
            description:
              "Publishes to Facebook Pages, Instagram, TikTok, YouTube, Pinterest, LinkedIn, Threads, Bluesky, Telegram and WordPress, including photos, videos, Reels, Shorts and albums.",
          },
          {
            title: "Scheduling & Calendar",
            description:
              "Post now or pick a time; a calendar shows what goes out next.",
          },
          {
            title: "Google Drive Autopilot",
            description:
              "Users fill a shared Drive folder with media and a Google Sheet of topics; ApixelPost writes captions and posts 1–6 times a day automatically, in order.",
          },
          {
            title: "Secure Account Connection",
            description:
              "Every network is connected through its official OAuth login, so passwords are never seen or stored.",
          },
          {
            title: "Subscriptions & Licensing",
            description:
              "7-day free trial with email code sign-up and license keys; three paid plans billed in USD (card/PayPal via Lemon Squeezy) or BDT (bKash, Nagad, Rocket via Paymently).",
          },
        ],
        challenges: [
          {
            title: "One post, many very different platforms",
            solution:
              "Each network has its own API, media rules and tone, so the AI writes a separate version per network and the publisher handles each platform's upload and format requirements behind a single 'Post' button.",
          },
          {
            title: "Serving local and global customers",
            solution:
              "Built two payment paths — international card/PayPal subscriptions and local Taka payments through mobile wallets — feeding one license-key system, so both groups get the same product.",
          },
          {
            title: "Reaching users wherever they work",
            solution:
              "Shipped the same product as a web app, an installable PWA for phones and a Chrome extension, all activated with the same license key.",
          },
        ],
        techGroups: [
          { label: "Platforms", items: ["Web App", "PWA", "Chrome Extension"] },
          { label: "AI", items: ["AI Captions", "English & Bangla"] },
          { label: "Integrations", items: ["Meta", "TikTok", "YouTube", "LinkedIn", "Pinterest", "Google Drive", "Google Sheets"] },
          { label: "Auth", items: ["OAuth", "Email OTP", "License Keys"] },
          { label: "Payments", items: ["Lemon Squeezy", "bKash / Nagad"] },
        ],
      },
    },
    {
      id: 2,
      title: "GlowRak — E-Commerce Store",
      description:
        "Full-stack online store for a UAE retailer selling lighting, chandeliers, hardware, toys and electronics. Category browsing, product search, cart, order tracking and cash-on-delivery across the UAE.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      status: "completed" as const,
      featured: true,
      liveLink: "https://glowrak.com/",
      codeLink: "https://github.com/marinaakter",
      image: "/images/GlowRak.jpg",
      caseStudy: {
        overview:
          "GlowRak is a UAE retail brand selling lighting, chandeliers, hardware, toys and electronics. I built their complete online store: a fast storefront where customers browse curated categories, search products, add to cart and order with cash on delivery anywhere in the UAE. The client is happy with the result and the store is live and taking orders.",
        features: [
          {
            title: "Category Shopping",
            description:
              "Eight product categories (ceiling lights, chandeliers, wall lights, hardware, toys and more) with shareable, URL-based category filters.",
          },
          {
            title: "Product Search",
            description:
              "Search bar in the header so customers can find any product, brand or style in seconds.",
          },
          {
            title: "Featured & Trending Sections",
            description:
              "Homepage hero carousel, promo ticker, and curated Featured and Trending product rows with ratings and AED pricing.",
          },
          {
            title: "Cart, Checkout & Order Tracking",
            description:
              "Cart, cash-on-delivery checkout across the UAE, and a Track Order page so customers can follow their order after purchase.",
          },
          {
            title: "WhatsApp Support",
            description:
              "Floating WhatsApp button for instant customer support and pre-sales questions.",
          },
          {
            title: "Store Policies",
            description:
              "Privacy, terms and return & refund policy pages that build trust for first-time buyers.",
          },
        ],
        challenges: [
          {
            title: "Many very different product types in one store",
            solution:
              "Designed a flexible product and category model so lighting, hardware, toys and electronics share one catalogue, with category filters driven by the URL so every filtered view can be shared or bookmarked.",
          },
          {
            title: "Building trust for cash-on-delivery buyers",
            solution:
              "Added clear delivery and returns messaging, visible policies, order tracking and one-tap WhatsApp support, so new customers feel safe ordering from a new brand.",
          },
        ],
        techGroups: [
          { label: "Frontend", items: ["React", "Vite", "Tailwind CSS"] },
          { label: "Backend", items: ["Node.js", "Express", "REST API"] },
          { label: "Database", items: ["MongoDB"] },
          { label: "Payments", items: ["Cash on Delivery"] },
        ],
      },
    },
    {
      id: 3,
      title: "Iqos Haven — Age-Restricted Store",
      description:
        "Adults-only e-commerce store in Dubai built with Next.js. Server-side 18+ age gate, UAE-wide delivery, multiple payment options and full compliance pages for a regulated product category.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      status: "completed" as const,
      featured: true,
      liveLink: "https://iqoshaven.com/",
      codeLink: "https://github.com/marinaakter",
      image: "/images/IqosHaven.png",
      caseStudy: {
        overview:
          "Iqos Haven is a Dubai-based, adults-only retailer delivering across all seven emirates. Because it sells an age-restricted, regulated product, the store had to be built around compliance from the first screen to delivery: a server-side age gate, age confirmation at checkout, and clear terms, privacy and responsible-use policies. The client is satisfied and the store is live.",
        features: [
          {
            title: "Server-Side Age Gate",
            description:
              "18+ check on entry, handled on the server so it works even without JavaScript. The answer is remembered on the device for 30 days.",
          },
          {
            title: "Compliant Checkout",
            description:
              "Age confirmed again at checkout, with delivery fee and expected delivery time shown for the customer's area before ordering.",
          },
          {
            title: "Flexible Payments",
            description:
              "Cash on delivery, bank transfer, or a secure online payment link — the store never asks for card details on-site.",
          },
          {
            title: "Order Flow & Confirmation",
            description:
              "Order number on screen, email confirmation, discount codes, and order confirmation by call or WhatsApp before dispatch.",
          },
          {
            title: "Moderated Reviews",
            description:
              "Review requests sent by email after delivery, moderated before they are published.",
          },
          {
            title: "Compliance & SEO",
            description:
              "Terms, privacy and responsible-use pages, plus auto-generated social preview images for every share.",
          },
        ],
        challenges: [
          {
            title: "A reliable age gate for a regulated product",
            solution:
              "Built the age check with Next.js server routes and a 30-day cookie instead of a client-only popup, so it can't be skipped by disabling JavaScript, and repeated the check at checkout.",
          },
          {
            title: "Payments without collecting card data",
            solution:
              "Designed the order flow around cash on delivery, bank transfer and secure payment links sent via WhatsApp, keeping card details off the site entirely.",
          },
        ],
        techGroups: [
          { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
          { label: "Backend", items: ["Next.js Route Handlers"] },
          { label: "Payments", items: ["COD", "Bank Transfer", "Payment Links"] },
          { label: "Deployment", items: ["Vercel"] },
        ],
      },
    },
    {
      id: 4,
      title: "Student Consultancy App",
      description:
        "Full-stack consultancy platform for student services with course listings, inquiry forms, admission guidance, and an admin management panel.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      status: "completed" as const,
      featured: true,
      liveLink: "https://student-consultancy-six.vercel.app",
      codeLink: "https://github.com/marinaakter",
      image: "/images/StudentConsultancy.png",
      caseStudy: {
        overview:
          "A full-stack consultancy platform guiding prospective students from initial inquiry through to enrollment. Features a content-rich public site paired with a private admin panel for managing inquiries and updating course listings in real time.",
        features: [
          {
            title: "Course Listings",
            description:
              "Dynamic course catalogue with category filters, eligibility requirements, and application CTAs.",
          },
          {
            title: "Multi-Step Inquiry Form",
            description:
              "Guided form capturing student details, course interest, and preferred contact method with per-step validation.",
          },
          {
            title: "Admin Dashboard",
            description:
              "Protected panel for managing inquiries, updating course content, and tracking lead conversion metrics.",
          },
          {
            title: "Admission Guidance",
            description:
              "Structured pages covering eligibility, visa requirements, and a step-by-step application walkthrough.",
          },
        ],
        challenges: [
          {
            title: "Multi-step form state without data loss",
            solution:
              "Built a controlled multi-step form with Zod validation at each step and progress persistence in component state, preventing data loss on back-navigation.",
          },
          {
            title: "Securing the admin panel",
            solution:
              "Protected all admin routes with JWT middleware and refresh-token rotation, with automatic session invalidation on password change.",
          },
        ],
        techGroups: [
          { label: "Frontend", items: ["React", "Tailwind CSS"] },
          { label: "Backend", items: ["Node.js", "Express", "JWT Auth"] },
          { label: "Database", items: ["MongoDB"] },
          { label: "Deployment", items: ["Vercel"] },
        ],
      },
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution for ARM Group with product catalogue, cart, checkout flow, and order management. Built with Next.js App Router and MongoDB.",
      tags: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS"],
      status: "completed" as const,
      featured: true,
      liveLink: "https://arm-shop.apixel.net/",
      codeLink: "https://github.com/marinaakter",
      image: "/images/e-commerce.png",
      caseStudy: {
        overview:
          "Delivered a full e-commerce solution for ARM Group covering the complete purchase journey from product discovery to order confirmation. Built on Next.js App Router with MongoDB for flexible catalogue management and a clean, conversion-focused UI.",
        features: [
          {
            title: "Product Catalogue",
            description:
              "Dynamic listings with categories, filters, and search powered by MongoDB aggregation pipelines.",
          },
          {
            title: "Cart & Checkout",
            description:
              "Persistent cart with localStorage sync, quantity management, and a streamlined multi-step checkout flow.",
          },
          {
            title: "Order Management",
            description:
              "Full order lifecycle — placement, confirmation emails, and admin-side status tracking.",
          },
          {
            title: "Responsive Design",
            description:
              "Mobile-first layout optimised for conversion with fast image loading via Next.js Image component.",
          },
        ],
        challenges: [
          {
            title: "Cart state persistence across sessions",
            solution:
              "Combined Zustand for in-memory cart state with localStorage serialization, maintaining cart contents across browser sessions.",
          },
          {
            title: "Product filtering performance at scale",
            solution:
              "Offloaded filtering to MongoDB aggregation pipelines with compound indexes, keeping API response times under 80ms.",
          },
        ],
        techGroups: [
          {
            label: "Frontend",
            items: ["Next.js", "TypeScript", "Tailwind CSS"],
          },
          { label: "Backend", items: ["Node.js", "REST API"] },
          { label: "Database", items: ["MongoDB", "Mongoose"] },
          { label: "Deployment", items: ["Vercel"] },
        ],
      },
    },
    {
      id: 6,
      title: "Task Management SaaS",
      description:
        "Apixel's internal task flow platform with project boards, team workspaces, and role-based access control. Built with React and a Node/Express backend.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      status: "completed" as const,
      featured: true,
      liveLink: "http://taskflow.apixel.net/",
      codeLink: "https://github.com/marinaakter",
      image: "/images/TaskFlow.png",
      caseStudy: {
        overview:
          "Apixel's internal project management platform, built to replace ad-hoc Slack threads and spreadsheets. Designed around team workspaces with role-based access so project leads, developers, and clients each see the right level of detail without overlap.",
        features: [
          {
            title: "Kanban Boards",
            description:
              "Drag-and-drop task boards with status columns, priority labels, and due date tracking.",
          },
          {
            title: "Team Workspaces",
            description:
              "Isolated workspaces per project with member invitations, role assignment, and activity feeds.",
          },
          {
            title: "Role-Based Access",
            description:
              "Granular RBAC — Admin, Manager, and Member roles controlling visibility and edit permissions.",
          },
          {
            title: "Task Assignment",
            description:
              "Assign tasks to team members with descriptions, attachments, and real-time status updates.",
          },
        ],
        challenges: [
          {
            title: "Designing a flexible RBAC system",
            solution:
              "Built a middleware-level permission layer that checks role-action mappings before every protected API route, keeping business logic out of controllers.",
          },
          {
            title: "Real-time board updates for concurrent teams",
            solution:
              "Implemented optimistic UI updates with server reconciliation so board changes feel instant without full-page refreshes.",
          },
        ],
        techGroups: [
          { label: "Frontend", items: ["React", "Tailwind CSS"] },
          { label: "Backend", items: ["Node.js", "Express", "JWT Auth"] },
          { label: "Database", items: ["MongoDB", "Mongoose"] },
          { label: "Deployment", items: ["Vercel"] },
        ],
      },
    },
    {
      id: 7,
      title: "Medical & Health",
      description:
        "Healthcare information platform for a medical institution featuring department listings, doctor profiles, appointment details, and patient resources.",
      tags: ["React", "Next.js", "Tailwind CSS"],
      status: "completed" as const,
      featured: true,
      liveLink: "https://www.bananiclinic.com/",
      codeLink: "https://github.com/marinaakter",
      image: "/images/dentalsite.png",
      caseStudy: {
        overview:
          "Healthcare information platform for a medical institution, giving patients clear and accessible information about departments, doctors, and available services. Built with a strong emphasis on accessibility, readability, and trust — critical factors in a medical context.",
        features: [
          {
            title: "Department Listings",
            description:
              "Structured department pages covering specialties, facilities, and available services for each unit.",
          },
          {
            title: "Doctor Profiles",
            description:
              "Individual profiles with qualifications, specialties, consultation schedule, and direct contact details.",
          },
          {
            title: "Appointment Information",
            description:
              "Clear booking guidance with department-specific contact details and operating hours per service.",
          },
          {
            title: "Patient Resources",
            description:
              "Library of patient guides, downloadable forms, and FAQs organised by department for easy self-service.",
          },
        ],
        challenges: [
          {
            title: "Accessibility compliance for a medical audience",
            solution:
              "Implemented WCAG 2.1 AA — semantic HTML, ARIA labels, sufficient colour contrast ratios, and full keyboard navigation throughout.",
          },
          {
            title: "Managing a large nested content structure",
            solution:
              "Designed a hierarchical data model separating departments, doctors, and resources with shared layout components to eliminate duplication.",
          },
        ],
        techGroups: [
          { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
          { label: "Deployment", items: ["Vercel"] },
        ],
      },
    },
    {
      id: 8,
      title: "IT Solutions Website",
      description:
        "Corporate website for an IT solutions company with service showcases, project portfolio, client testimonials, and a contact system. Fully responsive and SEO-optimised.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Netlify"],
      status: "completed" as const,
      featured: false,
      liveLink: "https://youritsolutionn.netlify.app/",
      codeLink: "https://github.com/marinaakter",
      image: "/images/youritsolution.png",
      caseStudy: {
        overview:
          "A professional corporate website for an IT solutions provider, built to convert visitors into leads. Focused on page speed, SEO, and a clean service-oriented layout that communicates technical credibility to both technical and non-technical decision-makers.",
        features: [
          {
            title: "Service Showcases",
            description:
              "Structured service pages with clear value propositions, process breakdowns, and case highlights.",
          },
          {
            title: "SEO Optimisation",
            description:
              "Server-side rendering, semantic HTML, Open Graph meta tags, and Lighthouse 95+ across all pages.",
          },
          {
            title: "Contact System",
            description:
              "Multi-field inquiry form with server-side validation and email notification via SMTP integration.",
          },
          {
            title: "Project Portfolio",
            description:
              "Filterable portfolio grid showcasing past work with client details and measurable outcomes.",
          },
        ],
        challenges: [
          {
            title: "Achieving Lighthouse 95+ performance",
            solution:
              "Used Next.js static generation, next/image lazy loading, and eliminated render-blocking resources to score 97+ performance consistently.",
          },
          {
            title: "Filtering contact form spam",
            solution:
              "Integrated honeypot fields and server-side rate limiting on the contact API route to filter automated bot submissions without CAPTCHA friction.",
          },
        ],
        techGroups: [
          {
            label: "Frontend",
            items: ["Next.js", "TypeScript", "Tailwind CSS"],
          },
          { label: "Backend", items: ["Next.js API Routes"] },
          { label: "Deployment", items: ["Netlify"] },
        ],
      },
    },
    {
      id: 9,
      title: "AI Chat Assistant",
      description:
        "Production-grade AI chat app built with Next.js App Router, OpenAI GPT-4o, and Vercel AI SDK. Features streaming responses, conversation history, and a clean chat UI.",
      tags: [
        "Next.js",
        "OpenAI",
        "Vercel AI SDK",
        "TypeScript",
        "Tailwind CSS",
      ],
      status: "in-progress" as const,
      featured: false,
      liveLink: "https://example.app/",
      codeLink: "https://github.com/marinaakter",
      image:
        "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=450&fit=crop&q=80",
      caseStudy: {
        overview:
          "Built to solve the UX problem of slow AI responses — users shouldn't wait for a full output before reading. Integrated OpenAI GPT-4o with Vercel AI SDK's streaming pipeline to deliver instant, character-by-character responses, creating a conversational experience comparable to ChatGPT itself.",
        features: [
          {
            title: "Real-Time Streaming",
            description:
              "Token-by-token response streaming using Vercel AI SDK's useChat hook for sub-100ms perceived latency.",
          },
          {
            title: "Multi-Turn Context",
            description:
              "Maintains full conversation history for coherent multi-turn dialogue without manual state management.",
          },
          {
            title: "GPT-4o Integration",
            description:
              "Direct OpenAI API integration with configurable temperature, system prompts, and token limit controls.",
          },
          {
            title: "Clean Chat Interface",
            description:
              "Auto-scrolling message feed with distinct user/AI bubbles, loading states, and graceful error handling.",
          },
        ],
        challenges: [
          {
            title: "Managing streaming response state cleanly",
            solution:
              "Used Vercel AI SDK's built-in readableStream utilities, eliminating manual chunk parsing and complex state reconciliation.",
          },
          {
            title: "Context overflow on long sessions",
            solution:
              "Implemented a sliding-window context strategy that trims older messages while preserving the system prompt and recent turns.",
          },
        ],
        techGroups: [
          {
            label: "Frontend",
            items: ["Next.js", "TypeScript", "Tailwind CSS"],
          },
          { label: "AI / API", items: ["OpenAI GPT-4o", "Vercel AI SDK"] },
          { label: "Deployment", items: ["Vercel"] },
        ],
      },
    },
    {
      id: 10,
      title: "Real Estate Website",
      description:
        "Property listing platform with advanced search filters, property detail pages, agent profiles, virtual tour support, and a contact inquiry system.",
      tags: ["Next.js", "MongoDB", "Tailwind CSS", "TypeScript"],
      status: "completed" as const,
      featured: true,
      liveLink: "https://realestatesite-seven.vercel.app/",
      codeLink: "https://github.com/marinaakter",
      image: "/images/RealEstate.png",
      caseStudy: {
        overview:
          "A property listing platform enabling buyers and renters to search, filter, and enquire about properties. Focused on fast search UX and rich property detail pages that reduce the need for in-person pre-qualification visits.",
        features: [
          {
            title: "Advanced Search & Filters",
            description:
              "Multi-parameter filtering by price, location, bedrooms, type, and amenities with URL-synced state for shareable searches.",
          },
          {
            title: "Property Detail Pages",
            description:
              "Rich pages with image galleries, floor plans, nearby amenities, and a direct contact form per listing.",
          },
          {
            title: "Agent Profiles",
            description:
              "Dedicated agent pages with listed properties, contact details, and aggregated review summaries.",
          },
          {
            title: "Contact Inquiry System",
            description:
              "Property-specific inquiry forms routed to the managing agent with instant auto-confirmation emails.",
          },
        ],
        challenges: [
          {
            title: "Complex multi-parameter filter queries",
            solution:
              "Designed a MongoDB query builder that dynamically constructs filter objects from URL params, supporting any combination without hardcoded conditionals.",
          },
          {
            title: "Image performance for property galleries",
            solution:
              "Used Next.js Image with blur placeholders and priority loading for above-fold images, reducing LCP by 40%.",
          },
        ],
        techGroups: [
          {
            label: "Frontend",
            items: ["Next.js", "TypeScript", "Tailwind CSS"],
          },
          { label: "Backend", items: ["Next.js API Routes"] },
          { label: "Database", items: ["MongoDB"] },
          { label: "Deployment", items: ["Vercel"] },
        ],
      },
    },
    {
      id: 11,
      title: "Ember & Oak — Café Website",
      description:
        "Warm, conversion-focused website for a specialty coffee & bakery café. Full menu with filters, order-ahead cart, combo deals, a live 'next tray' countdown and WhatsApp ordering.",
      tags: ["Next.js", "React", "Tailwind CSS"],
      status: "completed" as const,
      featured: false,
      liveLink: "https://demo.apixel.net/",
      codeLink: "https://github.com/marinaakter",
      image: "/images/EmberOak.jpg",
      caseStudy: {
        overview:
          "Ember & Oak is a café website built for specialty coffee shops and bakeries. The goal: make the place feel warm and inviting online, and turn visitors into orders. Guests can browse the full menu, build an order for pickup, grab combo deals and send their order on WhatsApp in a few taps — while live touches like 'still warm' badges and a countdown to the next fresh tray create real urgency.",
        features: [
          {
            title: "Filterable Online Menu",
            description:
              "23 items across 6 categories with search, favourites and dietary filters (Vegan, Gluten-free, Contains nuts), plus allergens on every item.",
          },
          {
            title: "Order Ahead & Checkout",
            description:
              "Add drinks and bakes to a cart, customise coffee options, and check out for pickup — ready in about 10 minutes.",
          },
          {
            title: "WhatsApp Ordering",
            description:
              "One-tap 'Order on WhatsApp' with a pre-filled message, so guests can order the way they already chat.",
          },
          {
            title: "Live Freshness & Scarcity",
            description:
              "Countdown to the next tray out of the oven, 'still warm' and 'only 4 left' badges, and an 'Open now' status from the opening hours.",
          },
          {
            title: "Combo Deals & Craving Picker",
            description:
              "Time-based coffee + pastry combos with savings shown, and a 'What are you craving?' picker that recommends an item instantly.",
          },
          {
            title: "Trust & Visit Info",
            description:
              "Google rating and reviews, Instagram feed, opening hours, map directions and a birthday newsletter signup.",
          },
        ],
        challenges: [
          {
            title: "Making a small café feel alive online",
            solution:
              "Added time-aware UI — open/closed status, next-tray countdown, time-limited combos and stock badges — so the site reflects what is happening in the café right now, not a static brochure.",
          },
          {
            title: "Ordering without forcing an app or account",
            solution:
              "Kept ordering lightweight: a guest cart with pickup checkout, plus a pre-filled WhatsApp message as a zero-friction alternative.",
          },
        ],
        techGroups: [
          { label: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
          { label: "Ordering", items: ["Cart & Checkout", "WhatsApp"] },
          { label: "Integrations", items: ["Google Maps", "Instagram"] },
        ],
      },
    },
    {
      id: 12,
      title: "Algorithm Visualizer",
      description:
        "Interactive visualizer for sorting and graph algorithms. Supports BFS, DFS, Dijkstra, QuickSort, and MergeSort with step-by-step animation controls.",
      tags: ["React", "TypeScript", "Framer Motion"],
      status: "in-progress" as const,
      featured: false,
      liveLink: "https://example.com",
      codeLink: "https://github.com/marinaakter",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop&q=80",
      caseStudy: {
        overview:
          "An interactive tool built to make abstract algorithms tangible. Designed for students and competitive programmers who learn better by watching an algorithm execute step-by-step rather than reading pseudocode. Supports both graph traversal and sorting algorithms with full playback controls.",
        features: [
          {
            title: "Graph Algorithms",
            description:
              "Visual BFS, DFS, and Dijkstra on an interactive canvas with node and edge traversal highlighted in real time.",
          },
          {
            title: "Sorting Algorithms",
            description:
              "Step-through QuickSort and MergeSort with bar chart visualisations and live comparison counters.",
          },
          {
            title: "Step-by-Step Controls",
            description:
              "Play, pause, step-forward, and step-backward controls giving full control over execution flow.",
          },
          {
            title: "Speed Control",
            description:
              "Adjustable animation speed from 0.25× to 4× catering to beginners and advanced learners alike.",
          },
        ],
        challenges: [
          {
            title: "Synchronising animation frames with algorithm steps",
            solution:
              "Pre-computed all steps into a step-array before animating, decoupling algorithm logic from the animation engine and enabling precise seek-to-any-step.",
          },
          {
            title: "Performance on large input arrays",
            solution:
              "Capped visualisation input at 100 elements and used React's useMemo to memoize step computations, preventing redundant recalculations on re-renders.",
          },
        ],
        techGroups: [
          { label: "Frontend", items: ["React", "TypeScript"] },
          { label: "Animation", items: ["Framer Motion"] },
          {
            label: "Algorithms",
            items: ["BFS", "DFS", "Dijkstra", "QuickSort", "MergeSort"],
          },
        ],
      },
    },
  ],

  experiences: [
    {
      id: 1,
      type: "work" as const,
      title: "Founder & CTO",
      organization: "Apixel — IT Company",
      organizationUrl: "https://www.apixel.net",
      location: "Dhaka, Bangladesh",
      period: "2024 – Present",
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
      period: "2023 – 2024",
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
      period: "2023 – Present",
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
