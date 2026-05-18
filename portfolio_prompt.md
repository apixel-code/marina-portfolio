# Senior MERN Stack Developer Portfolio — Build Prompt

> Paste this entire prompt into Claude Code in your project root.

---

## 🎯 Project Goal

Build a **production-grade, senior-level MERN Stack Developer & Problem Solver portfolio website** for **Marina Akter**. The site must look and feel like it belongs to a top 1% developer — think the visual polish of **Vercel, Linear, Raycast, and Cal.com**. Not a typical "freelancer portfolio." This is a **tech-forward, engineering-credible** portfolio with a strong emphasis on:

- Full-stack MERN engineering
- Algorithmic / competitive problem-solving
- Clean, scalable architecture & performant UX

---

## 🛠 Tech Stack (Strict — do not substitute)

- **Next.js 15** (App Router, TypeScript, Server Components by default, Client Components only when needed)
- **React 19**
- **Tailwind CSS v4** (use the new `@theme` directive in `globals.css`, CSS-first config, no `tailwind.config.js`)
- **Framer Motion** for animations
- **lucide-react** → for UI icons only (arrows, check, copy, sun/moon, hamburger, social icons not covered below)
- **react-icons** → for **brand logos in their official colors** (Simple Icons set: `react-icons/si`). This is the key icon library for the skills section and hero tech pills.
- **next-themes** for theme switching
- **clsx** + **tailwind-merge** (export a `cn()` utility)
- No UI kit like shadcn unless you generate the components manually; keep dependencies lean

---

## 🎨 Design System

### Color Palette — Deep Blue Tech Aesthetic

Define these as CSS variables inside `@theme` in `app/globals.css` with `:root` (light) and `.dark` overrides:

**Light Mode**
- `--background`: `#f8fafc` (slate-50)
- `--foreground`: `#0f172a` (slate-900)
- `--card`: `#ffffff`
- `--muted`: `#f1f5f9`
- `--muted-foreground`: `#475569`
- `--border`: `#e2e8f0`
- `--primary`: `#1e40af` (deep blue — blue-800)
- `--primary-foreground`: `#ffffff`
- `--accent`: `#3b82f6` (blue-500)
- `--ring`: `#1e40af`

**Dark Mode** (default theme)
- `--background`: `#020617` (slate-950, near-black with blue undertone)
- `--foreground`: `#e2e8f0`
- `--card`: `#0a1428` (custom deep navy)
- `--muted`: `#0f1e3a`
- `--muted-foreground`: `#94a3b8`
- `--border`: `#1e293b`
- `--primary`: `#3b82f6` (blue-500 — brighter for dark bg)
- `--primary-foreground`: `#ffffff`
- `--accent`: `#60a5fa` (blue-400)
- `--ring`: `#3b82f6`

**Gradients & Glow**
- Primary gradient: `from-blue-600 via-blue-500 to-cyan-400`
- Use subtle blue glow shadows on hovered cards/buttons: `shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]`

### Typography

- Headings: **Geist Sans** (via `next/font`) — tight tracking, weights 600/700
- Body: **Geist Sans** — weight 400/500
- Code/Mono: **Geist Mono** — for stat numbers, tech tags, terminal-style accents
- Use clamp() for fluid hero text: `text-[clamp(2.5rem,7vw,5.5rem)]`

### Visual Language (this is critical — don't make it look generic)

- **Grid backgrounds**: subtle dotted or grid SVG pattern on hero (low opacity, fades out at edges with radial mask)
- **Noise texture**: faint noise overlay on dark mode for depth
- **Aurora/blob gradients**: blurred blue radial gradients positioned absolutely in hero corners
- **Borders over shadows**: use 1px borders with `border-border` more than drop shadows
- **Card style**: rounded-2xl, subtle border, hover lifts with a faint blue glow + border color shift to `border-primary/40`
- **Numbers/stats**: render in mono font, slightly oversized, with a small `+` superscript
- **Tech tags**: small pill badges with mono font, border + low-opacity bg, NOT solid colored
- **Section dividers**: thin gradient lines, never harsh `<hr>`

---

## 🌗 Theme Switching

- **Dark mode is the DEFAULT** — set `defaultTheme="dark"` in `next-themes` ThemeProvider
- Wrap root layout in ThemeProvider with `attribute="class"`, `defaultTheme="dark"`, `enableSystem={false}` (we want dark by default regardless of OS preference; users can opt into light via toggle)
- Theme toggle in navbar: Sun/Moon icon, smooth icon-swap animation
- Avoid hydration flash — use `suppressHydrationWarning` on `<html>`
- All colors must respond via CSS variables, never hardcoded hex in components

---

## 📁 Project Structure

```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  navbar.tsx
  hero.tsx
  about.tsx
  services.tsx
  skills.tsx
  projects.tsx
  experience.tsx
  contact.tsx
  footer.tsx
  theme-toggle.tsx
  ui/
    button.tsx
    badge.tsx
    card.tsx
    section-heading.tsx
lib/
  utils.ts          # cn() helper
  icon-map.ts       # maps skill name → react-icons brand component
data/
  portfolio.ts      # all content (see below)
public/
  images/           # project images go here
```

---

## 📦 Data File — Use Provided Content

I have attached a file `Portfolio_Content` with all the data. **Migrate it into `data/portfolio.ts`** with the following adjustments.

### Identity / Positioning Updates

- `name`: **"Marina Akter"**
- `role`: **"Senior MERN Stack Developer & Problem Solver"**
- `tagline`: **"Building scalable web applications and solving complex problems with clean, performant code."**
- `shortBio`: Rewrite — developer-first voice. Lead with MERN + problem solving. Example tone: *"I'm Marina, a MERN stack developer who loves turning hard problems into elegant, performant code. I build full-stack web applications end-to-end and sharpen my engineering edge through algorithmic problem solving and competitive programming."*
- `longBio`: Expanded version of the above. Cover: full-stack engineering with React/Next.js/Node/Express/MongoDB, focus on clean architecture and performance, passion for data structures, algorithms, and competitive programming, currently pursuing CSE at IUB. Marketing/design can get ONE supporting sentence — not the focus.

### What to KEEP
- `location`, `university`
- `email`, `whatsapp`, `whatsappLink`, `github`
- All `projects` (6 items) with their tags, descriptions, status, liveLink
- All `experiences` (3 items)
- `stats` array — update labels to be developer-focused: "Projects Shipped", "Happy Clients", "Tech Domains", "Problem-Solving Mindset"
- `navLinks` — remove "Handover"
- `services` data shape — but rewrite content (see below)

### Services Section — Rewrite as "What I Build"

Rename label to **"What I Build"**, keep 6 items, rewrite toward dev work:

1. **Full-Stack Web Applications** — End-to-end MERN apps with React/Next frontends and Node/Express APIs
2. **RESTful APIs & Backend Systems** — Scalable, well-documented APIs with auth, validation, and clean architecture
3. **Next.js & SSR Solutions** — SEO-friendly, performant Next.js apps with App Router and server components
4. **Database Design & MongoDB** — Schema design, aggregation pipelines, indexing, and data modeling
5. **Performance Optimization** — Lighthouse 95+, Core Web Vitals, code-splitting, caching strategies
6. **Authentication & Security** — JWT, OAuth, session management, secure API design

(Use Lucide icons for these service cards: `Code2`, `Server`, `Layers`, `Database`, `Gauge`, `ShieldCheck`.)

### Skills Section — Categories

Reorganize categories. **Marketing skills move into a new "Additional" category — do NOT drop them.**

Final category list (use exactly these keys):
- `frontend` → React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS
- `backend` → Node.js, Express.js, REST API, JWT Auth
- `database` → MongoDB, Firebase
- `problem-solving` → Data Structures, Algorithms, Competitive Programming, C++, Python *(new dedicated category — promote this prominently)*
- `tools` → Git, GitHub, Postman, VS Code, Figma, Google Analytics, Search Console
- `additional` → SEO Optimization, Social Media Marketing, Google Ads, Meta Ads, Content Strategy, Analytics & Reporting *(parked here — visible and well-designed, but not the headline)*

### Skill Icons — Use Real Brand Logos in Brand Colors

**This is critical.** Replace ALL emoji icons in the skills array with **actual brand logos** from `react-icons/si` (Simple Icons), each rendered **in its official brand color**.

Build `lib/icon-map.ts` that exports an object mapping skill names → `{ Icon, color }`:

```ts
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiFirebase,
  SiPython, SiCplusplus, SiGit, SiGithub, SiPostman, SiFigma,
  SiGoogleanalytics, SiGoogleads, SiMeta, SiCanva
} from "react-icons/si";

export const skillIconMap: Record<string, { Icon: IconType; color: string }> = {
  "React.js":              { Icon: SiReact,         color: "#61DAFB" },
  "Next.js":               { Icon: SiNextdotjs,     color: "#FFFFFF" }, // theme-aware
  "TypeScript":            { Icon: SiTypescript,    color: "#3178C6" },
  "JavaScript":            { Icon: SiJavascript,    color: "#F7DF1E" },
  "HTML5":                 { Icon: SiHtml5,         color: "#E34F26" },
  "CSS3":                  { Icon: SiCss3,          color: "#1572B6" },
  "Tailwind CSS":          { Icon: SiTailwindcss,   color: "#06B6D4" },
  "Node.js":               { Icon: SiNodedotjs,     color: "#339933" },
  "Express.js":            { Icon: SiExpress,       color: "#FFFFFF" }, // theme-aware
  "MongoDB":               { Icon: SiMongodb,       color: "#47A248" },
  "Firebase":              { Icon: SiFirebase,      color: "#FFCA28" },
  "Python":                { Icon: SiPython,        color: "#3776AB" },
  "C++":                   { Icon: SiCplusplus,     color: "#00599C" },
  "Git":                   { Icon: SiGit,           color: "#F05032" },
  // ... fill in the rest
};
```

For skills without a clean brand match (e.g., "Data Structures", "Algorithms", "REST API"), fall back to a tasteful Lucide icon (`Binary`, `Network`, `GitBranch`, `Workflow`) in `--primary` color.

For brand logos that are monochrome white/black (Next.js, Express, Vercel), use `currentColor` and let CSS handle it: white in dark mode, black in light mode.

### Hero Tech Pills — Also Brand Logos

The `hero.techStack` array should render as pills with the small brand logo + name. Same icon map applies. Keep these: React, Next.js, TypeScript, Node.js, Express, MongoDB, Tailwind. Drop "SEO" and "Meta Ads" from this list.

### What to DROP entirely
- "Handover" nav link
- Hero profile image / right-column visual (see Hero section below)

---

## 📄 Sections to Build (in order)

### 1. Navbar
- Sticky, blurred backdrop (`backdrop-blur-xl bg-background/70 border-b border-border`)
- Logo on left (initials "MA" in a small gradient square + name)
- Center: nav links (desktop only)
- Right: theme toggle + "Contact Me" CTA (gradient button)
- Mobile: hamburger → full-screen slide-down menu

### 2. Hero — Centered Single-Column Layout (NO image)

**The hero has NO image of Marina and NO right-side visual.** All content is **centered horizontally** in a single column with a max-width of ~`max-w-4xl`. Vertically, center the content in the viewport (`min-h-[90vh] flex items-center justify-center`).

**Content stack (top to bottom, all centered):**

1. **Availability pill** — small, green dot + "Available for opportunities" — fades in first
2. **Eyebrow** — mono font, uppercase, small: `SENIOR MERN STACK DEVELOPER & PROBLEM SOLVER`
3. **Massive name** — `text-[clamp(2.75rem,8vw,6rem)]`, weight 700, tight tracking. Apply gradient (`from-blue-400 via-cyan-300 to-blue-500`) to "Marina Akter" or to her first name only — pick what reads stronger
4. **Tagline paragraph** — `max-w-2xl mx-auto`, muted-foreground, generous line-height: *"Building scalable web applications and solving complex problems with clean, performant code."*
5. **Two CTAs side-by-side** — Primary gradient button "View My Work" + ghost/outline button "Get In Touch" — both with smooth hover scale
6. **Tech stack pills row** — centered, wrap on mobile, each pill = small brand logo (in its real color) + tech name in mono. Show 6-7 key techs.
7. **Quick stats** — 3-column inline bar (mono numbers): `50+ Projects` · `30+ Clients` · `6+ Tech Domains`

**Background decoration (since no main image, this is what carries the visual interest):**
- **Animated grid pattern** behind everything, low opacity, fades at edges via radial mask
- **Two aurora blobs** — one top-left (blue-600 → transparent), one bottom-right (cyan-500 → transparent), heavy blur (`blur-3xl`), `opacity-30`, slow drift animation
- **Floating brand-logo decorations** — 6-8 small brand logos (React, Node, MongoDB, TypeScript, Next.js, MongoDB, Git, Python) scattered in the background at very low opacity (~10-15%), with gentle parallax-on-mouse-move and slow continuous float. They should feel like ambient tech "stars," not overpowering.
- **Scroll indicator** at the very bottom — small mouse-scroll icon or "Scroll" + chevron, gentle bounce animation

**Why this works**: A centered, image-free hero puts ALL focus on the name, role, and tech stack — exactly the senior-dev signal we want. The floating brand logos do the visual heavy lifting that an avatar would have done, while reinforcing the tech identity.

### 3. About
- Section heading with eyebrow label + title
- Two columns: left = bio paragraph(s), right = 4 trait cards in a 2×2 grid
- Each trait card: small icon, title, description, hover state with border glow
- Below: highlight chips ("User-focused thinking", "Problem-solving mindset", "Clean architecture") as mono pills
- Lean into the **problem solver** angle — at least one trait or paragraph should explicitly reference algorithmic thinking, competitive programming, or breaking down hard problems

### 4. Services / "What I Build"
- 6 cards in a 3-column grid (2 on tablet, 1 on mobile)
- Each card: Lucide icon in a gradient-bordered square, title, description, 3 bullet points with check icons
- Hover: card lifts, border becomes primary, faint blue glow
- Number prefix (`01`, `02`, `03`…) in mono font on each card

### 5. Skills
- Tabbed filter at top: **All / Frontend / Backend / Database / Problem Solving / Tools / Additional**
- "Problem Solving" tab gets first-class visual weight — equal to Frontend
- "Additional" tab is where the marketing skills live — present and clean, but clearly secondary in the tab order
- Below: animated grid of skill cards filtered by tab
- **Each skill card**: brand logo (in its official color, from `react-icons/si` via `icon-map.ts`) on the left in a slightly larger size (28-32px), skill name + level number on top, animated progress bar (Framer Motion `whileInView`) below
- Progress bar fills using the skill's brand color with a primary-gradient overlay for theme consistency
- Hover: card lifts + glow in the icon's brand color via `boxShadow: 0 0 30px -10px ${color}`. This makes each card feel unique to its tech.

### 6. Projects
- Featured projects (top 3, `featured: true`) in a larger 2-column layout
- Remaining projects in a 3-column grid below
- Project card: image with overlay on hover, title, description, tags (mono pills), status badge (in-progress = amber, completed = green, all subtle), "Live →" and "Code →" buttons
- Filter chips: All / Completed / In Progress

### 7. Experience
- Vertical timeline on desktop (alternating left/right), single column on mobile
- Each entry: date range pill, title, organization, location, description, highlight bullet points with arrow icons
- Education entries visually distinguished (graduation cap icon vs briefcase)

### 8. Contact
- Two columns: left = headline + supporting copy + contact info cards (email, WhatsApp, GitHub each with icon + value + copy button), right = a working form (Name, Email, Subject, Message) styled with the design system
- Form submission: client-side validation, on submit show a toast/inline success (no real backend needed — log to console with a TODO comment)

### 9. Footer
- 3 columns: brand block (logo + short tagline + socials), Explore nav, Connect (with CTA button)
- Bottom row: copyright + "Built with Next.js, Tailwind v4, and lots of ☕"
- Thin gradient line above footer content

---

## ✨ Animation Guidelines

- Use Framer Motion `whileInView` with `once: true` + `viewport={{ margin: "-100px" }}`
- Staggered children on lists (cards, skills, projects)
- Default: subtle `y: 20 → 0` + `opacity: 0 → 1` over 0.5s, ease-out
- Hero content: staggered fade-up cascade — availability pill → eyebrow → name → tagline → CTAs → tech pills → stats (each ~80ms apart)
- Hero background brand logos: gentle continuous float + parallax on mouse move (use `useMotionValue` + `useTransform`)
- Buttons: scale 0.97 on tap, scale 1.02 on hover
- Page transitions: not needed (single page)
- Respect `prefers-reduced-motion` everywhere

---

## ♿ Accessibility & Performance

- Semantic HTML: `<header>`, `<main>`, `<section>` with `aria-labelledby`, `<nav>`, `<footer>`
- Every interactive element keyboard-accessible, visible focus rings using `--ring`
- Images: Next.js `<Image>` with width/height, `alt` text, `priority` only on hero (project images further down)
- Brand-color icons should still meet contrast against backgrounds — add a subtle dark backdrop where needed
- Color contrast: AA minimum in both themes
- Lighthouse target: 95+ across the board
- No layout shift — reserve space for dynamic content
- Lazy-load below-the-fold sections

---

## 🧱 Code Quality

- TypeScript everywhere, strict mode
- Each section is a separate component, kept under ~150 lines — split into subcomponents if longer
- Use Server Components by default; add `"use client"` only where needed (theme toggle, framer-motion, forms, filters)
- All content imported from `data/portfolio.ts` — no hardcoded strings in components
- All skill/tech icons resolved through `lib/icon-map.ts` — no inline imports in components
- Export reusable UI primitives (`Button`, `Badge`, `Card`, `SectionHeading`) from `components/ui/`
- Clean, commented, production-ready. No dead code, no `console.log` left behind (except the one TODO in the contact form)

---

## 🚀 Setup Steps Claude Should Run

1. Initialize Next.js 15 with TypeScript and Tailwind v4
2. Install: `framer-motion`, `lucide-react`, `react-icons`, `next-themes`, `clsx`, `tailwind-merge`
3. Set up Geist Sans and Geist Mono fonts via `next/font/google`
4. Create the design system in `globals.css` with `@theme` directive
5. Build `data/portfolio.ts` from the provided content (with the repositioning described above)
6. Build `lib/icon-map.ts` mapping every skill + hero-tech-pill to its brand logo + color
7. Build components section-by-section in the order listed
8. Verify dark mode is the default and that the theme toggle switches to light without hydration flash
9. Run a final responsive check at 375px, 768px, 1280px, 1920px

---

## ✅ Definition of Done

- Site loads with **dark mode as the default**; toggle to light works smoothly
- All 9 sections render with real data from `data/portfolio.ts`
- Hero is **centered, image-free**, with floating brand-logo background decorations
- Skills section uses **real brand logos in their official brand colors**, organized across 6 tabs including a first-class "Problem Solving" category and an "Additional" tab for marketing skills
- Marina is consistently positioned as a **MERN Stack Developer & Problem Solver** across the role, tagline, bio, and About section
- Looks unmistakably like a **senior tech portfolio** — deep blue tones, mono accents, grid patterns, brand-color glows on hover, clean typography
- Fully responsive 375px → 1920px
- No console errors, no hydration warnings
- TypeScript builds cleanly with `next build`

---

**Important**: Do not ask me clarifying questions before starting — make sensible decisions based on this brief and execute. If something is genuinely ambiguous, leave a clear `TODO` comment and continue.
