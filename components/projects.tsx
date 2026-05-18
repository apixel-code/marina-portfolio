"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { SectionHeading } from "./ui/section-heading";
import { Badge } from "./ui/badge";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type Filter = "all" | "completed" | "in-progress";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "completed", label: "Completed" },
  { key: "in-progress", label: "In Progress" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function ProjectCard({
  project,
  featured,
}: {
  project: (typeof portfolio.projects)[number];
  featured?: boolean;
}) {
  return (
    <motion.article
      variants={itemVariants}
      layout
      className={cn(
        "group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]",
        featured && "lg:col-span-1"
      )}
    >
      {/* Image placeholder */}
      <div className="relative h-48 bg-linear-to-br from-muted to-card overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-1.5 opacity-20">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-8 h-8 rounded bg-primary/40" />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-card/80 to-transparent" />
        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <Badge variant={project.status === "completed" ? "success" : "warning"}>
            {project.status === "completed" ? "Completed" : "In Progress"}
          </Badge>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium"
          >
            <ExternalLink size={14} />
            Live
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-card border border-border text-foreground text-sm font-medium"
          >
            <SiGithub size={14} />
            Code
          </a>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
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
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 md:py-28 px-4 sm:px-6 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects I've Shipped"
          description="A selection of full-stack applications, tools, and experiments."
          id="projects-heading"
        />

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                "px-4 py-1.5 rounded-lg text-sm border transition-all duration-200",
                filter === f.key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground bg-card"
              )}
            >
              {f.label}
            </button>
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
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
              >
                {featured.map((p) => (
                  <ProjectCard key={p.id} project={p} featured />
                ))}
              </motion.div>
            )}

            {/* Rest */}
            {rest.length > 0 && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {rest.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
