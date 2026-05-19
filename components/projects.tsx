"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ExternalLink, Info, X, ArrowUpRight, CheckCircle2, AlertTriangle, Layers, Zap, Code2 } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";
import { Badge } from "./ui/badge";
import { portfolio } from "@/data/portfolio";
import { stagger } from "@/lib/animations";
import { cn } from "@/lib/utils";

type Project = (typeof portfolio.projects)[number];
type Filter = "all" | "completed" | "in-progress";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "completed", label: "Completed" },
  { key: "in-progress", label: "In Progress" },
];

const featuredVariants: Variants[] = [
  { hidden: { opacity: 0, x: -60, rotate: -2 }, visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } } },
  { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } } },
  { hidden: { opacity: 0, x: 60, rotate: 2 }, visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.05 } } },
];

// ─── Section label helper ────────────────────────────────────────────────────

function CaseLabel({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 text-primary shrink-0">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">{title}</h3>
    </div>
  );
}

// ─── Case Study Modal ────────────────────────────────────────────────────────

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const cs = project.caseStudy;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal */}
      <motion.div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-2xl dark:shadow-none"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
      >
        {/* Top bar — always visible, never scrolls away */}
        <div className="shrink-0 flex items-center justify-between px-5 py-3 border-b border-border bg-card/95 backdrop-blur-sm">
          <div className="flex items-center gap-3 min-w-0">
            <Badge variant={project.status === "completed" ? "success" : "warning"}>
              {project.status === "completed" ? "Completed" : "In Progress"}
            </Badge>
            <span className="text-sm font-semibold text-foreground truncate hidden sm:block">{project.title}</span>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors ml-3"
            aria-label="Close modal"
          >
            <X size={14} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">

          {/* ── Hero: 2-column on desktop ─────────────────────────────────── */}
          <div className="grid lg:grid-cols-2">

            {/* Left — image */}
            <div className="relative h-56 sm:h-72 lg:h-full lg:min-h-95 bg-muted overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2 opacity-20">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded bg-primary/40" />
                    ))}
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
              {/* Subtle left accent line */}
              <div className="absolute left-0 inset-y-0 w-1 bg-linear-to-b from-primary/60 via-primary/30 to-transparent" />
            </div>

            {/* Right — project info */}
            <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 lg:border-l border-border">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 leading-tight">
                  {project.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>

              {/* Action */}
              <div className="flex items-center gap-3 pt-1">
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium shadow-[0_0_20px_-4px_rgba(59,130,246,0.5)]"
                  whileHover={{ scale: 1.04, boxShadow: "0 0 28px -4px rgba(59,130,246,0.7)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ArrowUpRight size={15} />
                  View Live
                </motion.a>
              </div>
            </div>
          </div>

          {/* ── Case Study Content ─────────────────────────────────────────── */}
          {cs && (
            <div className="border-t border-border">

              {/* Overview */}
              <section className="px-6 sm:px-8 py-7 border-b border-border">
                <CaseLabel icon={<Layers size={14} />} title="Project Overview" />
                <p className="text-sm text-muted-foreground leading-relaxed">{cs.overview}</p>
              </section>

              {/* Features */}
              <section className="px-6 sm:px-8 py-7 border-b border-border">
                <CaseLabel icon={<Zap size={14} />} title="Core Features & Functionalities" />
                <div className="grid sm:grid-cols-2 gap-3">
                  {cs.features.map((f) => (
                    <div
                      key={f.title}
                      className="flex gap-3 p-4 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{f.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{f.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Challenges */}
              <section className="px-6 sm:px-8 py-7 border-b border-border">
                <CaseLabel icon={<AlertTriangle size={14} />} title="Technical Challenges & Solutions" />
                <div className="space-y-3">
                  {cs.challenges.map((c) => (
                    <div key={c.title} className="rounded-xl border border-border overflow-hidden">
                      <div className="flex items-start gap-3 px-4 py-3 bg-amber-500/5 border-b border-border">
                        <AlertTriangle size={13} className="text-amber-500 dark:text-amber-400 mt-0.5 shrink-0" />
                        <p className="text-sm font-semibold text-foreground">{c.title}</p>
                      </div>
                      <div className="flex items-start gap-3 px-4 py-3 bg-emerald-500/5">
                        <CheckCircle2 size={13} className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                        <p className="text-sm text-muted-foreground leading-relaxed">{c.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tech Stack */}
              <section className="px-6 sm:px-8 py-7">
                <CaseLabel icon={<Code2 size={14} />} title="Tech Stack Deep Dive" />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {cs.techGroups.map((group) => (
                    <div
                      key={group.label}
                      className="p-4 rounded-xl border border-border bg-muted/20"
                    >
                      <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-3">{group.label}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <Badge key={item} variant="outline">{item}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Project Card ────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  featured,
  index,
  onDetails,
}: {
  project: Project;
  featured?: boolean;
  index: number;
  onDetails: () => void;
}) {
  const fallbackVariant: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut", delay: (index % 3) * 0.07 } },
  };
  const variant = (featured ? featuredVariants[index % 3] : undefined) ?? fallbackVariant;

  return (
    <motion.article
      variants={variant}
      layout
      className="group rounded-2xl border border-border bg-card overflow-hidden cursor-default shadow-sm dark:shadow-none"
      whileHover={{
        y: -6,
        borderColor: "rgba(59,130,246,0.4)",
        boxShadow: "0 0 40px -10px rgba(59,130,246,0.5)",
        transition: { duration: 0.25 },
      }}
    >
      {/* Image */}
      <motion.div
        className="relative h-48 bg-linear-to-br from-muted to-card overflow-hidden"
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-1.5 opacity-20">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-8 h-8 rounded bg-primary/40" />
              ))}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

        <div className="absolute top-3 left-3">
          <Badge variant={project.status === "completed" ? "success" : "warning"}>
            {project.status === "completed" ? "Completed" : "In Progress"}
          </Badge>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium shadow-lg"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={13} />
            Live
          </motion.a>
          <motion.button
            onClick={onDetails}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 border border-white/25 text-white text-sm font-medium backdrop-blur-sm shadow-lg"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            <Info size={13} />
            Details
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="p-5">
        <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

// ─── Projects Section ────────────────────────────────────────────────────────

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filtered =
    filter === "all"
      ? portfolio.projects
      : portfolio.projects.filter((p) => p.status === filter);

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects I've Shipped"
          description="A selection of full-stack applications, tools, and experiments."
          centered
          id="projects-heading"
        />

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <motion.button
              key={f.key}
              onClick={() => setFilter(f.key)}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "relative px-4 py-1.5 rounded-lg text-sm border transition-colors duration-200 cursor-pointer",
                filter === f.key
                  ? "text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground bg-card"
              )}
            >
              {filter === f.key && (
                <motion.span
                  layoutId="project-filter-pill"
                  className="absolute inset-0 rounded-lg bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{f.label}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {featured.length > 0 && (
              <motion.div
                variants={stagger(0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-80px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
              >
                {featured.map((p, i) => (
                  <ProjectCard key={p.id} project={p} featured index={i} onDetails={() => setActiveProject(p)} />
                ))}
              </motion.div>
            )}

            {rest.length > 0 && (
              <motion.div
                variants={stagger(0.06)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-80px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {rest.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} onDetails={() => setActiveProject(p)} />
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal — outside the grid so it overlays everything */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
