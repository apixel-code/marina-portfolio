"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Binary, Network, GitBranch, Workflow, Trophy, Sparkles, Bot } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";
import { portfolio } from "@/data/portfolio";
import { skillIconMap } from "@/lib/icon-map";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type TabKey = keyof typeof portfolio.skills | "all";

const TABS: { key: TabKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "ai", label: "AI & LLMs" },
  { key: "problem-solving", label: "Problem Solving" },
  { key: "tools", label: "Tools" },
  { key: "additional", label: "Additional" },
];

const fallbackIconMap: Record<string, { Icon: LucideIcon; color: string }> = {
  // Problem solving
  "Data Structures": { Icon: Binary, color: "var(--primary)" },
  "Algorithms": { Icon: GitBranch, color: "var(--primary)" },
  "Competitive Programming": { Icon: Trophy, color: "var(--primary)" },
  "REST API": { Icon: Network, color: "var(--primary)" },
  "JWT Auth": { Icon: Workflow, color: "var(--primary)" },
  // AI
  "Prompt Engineering": { Icon: Sparkles, color: "#a855f7" },
  "AI-Assisted Dev": { Icon: Bot, color: "#8b5cf6" },
  // Additional
  "SEO Optimization": { Icon: Network, color: "var(--primary)" },
  "Content Strategy": { Icon: Workflow, color: "var(--primary)" },
  "Analytics & Reporting": { Icon: GitBranch, color: "var(--primary)" },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

interface SkillCardProps {
  name: string;
  level: number;
}

function SkillCard({ name, level }: SkillCardProps) {
  const brand = skillIconMap[name];
  const fallback = fallbackIconMap[name];
  const iconColor = brand?.color === "currentColor" ? "var(--foreground)" : brand?.color ?? fallback?.color ?? "var(--primary)";

  const isHex = iconColor.startsWith("#");
  const glowColor = isHex ? iconColor : "#3b82f6";

  return (
    <motion.div
      variants={cardVariants}
      layout
      className="group rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30"
      style={{
        "--hover-glow": glowColor,
      } as React.CSSProperties}
      whileHover={{
        boxShadow: `0 0 30px -10px ${glowColor}`,
        borderColor: `${glowColor}40`,
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="shrink-0">
          {brand ? (
            <brand.Icon size={28} style={{ color: iconColor }} />
          ) : fallback ? (
            <fallback.Icon size={28} style={{ color: iconColor }} />
          ) : (
            <div className="w-7 h-7 rounded bg-primary/20" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">{name}</p>
          <p className="text-xs font-mono text-muted-foreground">{level}%</p>
        </div>
      </div>
      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-linear-to-r from-blue-600 to-cyan-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          style={{
            background: `linear-gradient(to right, ${iconColor}aa, ${iconColor})`,
          }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");

  const getSkills = () => {
    if (activeTab === "all") {
      return Object.values(portfolio.skills).flat();
    }
    return portfolio.skills[activeTab as keyof typeof portfolio.skills] ?? [];
  };

  const skills = getSkills();

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-20 md:py-28 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Technical Skills"
          title="My Toolkit"
          description="Real brand logos, real proficiency levels — no fluff."
          centered
          id="skills-heading"
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 border",
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_-3px_rgba(59,130,246,0.5)]"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary/30 bg-card",
                tab.key === "problem-solving" &&
                  activeTab !== tab.key &&
                  "border-primary/20 text-primary/70"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          >
            {skills.map((skill) => (
              <SkillCard key={`${activeTab}-${skill.name}`} {...skill} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
