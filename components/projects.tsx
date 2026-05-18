"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { SectionHeading } from "./ui/section-heading";
import { Badge } from "./ui/badge";
import { portfolio } from "@/data/portfolio";
import { stagger } from "@/lib/animations";
import { cn } from "@/lib/utils";

type Filter = "all" | "completed" | "in-progress";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "completed", label: "Completed" },
  { key: "in-progress", label: "In Progress" },
];

// Featured cards fan in from different directions based on position
const featuredVariants: Variants[] = [
  { hidden: { opacity: 0, x: -60, rotate: -2 }, visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } } },
  { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } } },
  { hidden: { opacity: 0, x: 60, rotate: 2 }, visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.05 } } },
];

function ProjectCard({
  project,
  featured,
  index,
}: {
  project: (typeof portfolio.projects)[number];
  featured?: boolean;
  index: number;
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
      className="group rounded-2xl border border-border bg-card overflow-hidden cursor-default"
      whileHover={{
        y: -6,
        borderColor: "rgba(59,130,246,0.4)",
        boxShadow: "0 0 40px -10px rgba(59,130,246,0.5)",
        transition: { duration: 0.25 },
      }}
    >
      {/* Image placeholder with 3D tilt on hover */}
      <motion.div
        className="relative h-48 bg-linear-to-br from-muted to-card overflow-hidden"
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-1.5 opacity-20">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-8 h-8 rounded bg-primary/40" />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-card/80 to-transparent" />

        <div className="absolute top-3 left-3">
          <Badge variant={project.status === "completed" ? "success" : "warning"}>
            {project.status === "completed" ? "Completed" : "In Progress"}
          </Badge>
        </div>

        {/* Hover overlay buttons */}
        <motion.div
          className="absolute inset-0 bg-primary/10 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={14} />
            Live
          </motion.a>
          <motion.a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-card border border-border text-foreground text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SiGithub size={14} />
            Code
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="p-5">
        <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? portfolio.projects
      : portfolio.projects.filter((p) => p.status === filter);

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-16 md:py-24 px-4 sm:px-6 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects I've Shipped"
          description="A selection of full-stack applications, tools, and experiments."
          centered
          id="projects-heading"
        />

        {/* Filter chips with spring active indicator */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <motion.button
              key={f.key}
              onClick={() => setFilter(f.key)}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "relative px-4 py-1.5 rounded-lg text-sm border transition-colors duration-200",
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
            {/* Featured row */}
            {featured.length > 0 && (
              <motion.div
                variants={stagger(0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-80px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
              >
                {featured.map((p, i) => (
                  <ProjectCard key={p.id} project={p} featured index={i} />
                ))}
              </motion.div>
            )}

            {/* Rest */}
            {rest.length > 0 && (
              <motion.div
                variants={stagger(0.06)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-80px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {rest.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} />
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
