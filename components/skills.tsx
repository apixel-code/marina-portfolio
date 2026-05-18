"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, type Variants } from "framer-motion";
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

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(8px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, filter: "blur(4px)", transition: { duration: 0.18 } },
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

  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, margin: "-40px" });

  return (
    <motion.div
      ref={cardRef}
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
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${level}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          style={{
            background: `linear-gradient(to right, ${glowColor}aa, ${glowColor})`,
          }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [prevTabIndex, setPrevTabIndex] = useState(0);

  const handleTabChange = (key: TabKey) => {
    const prev = TABS.findIndex((t) => t.key === activeTab);
    const next = TABS.findIndex((t) => t.key === key);
    setPrevTabIndex(prev < next ? -1 : 1);
    setActiveTab(key);
  };

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
      className="py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Skills"
          title="My Toolkit"
          description="Real brand logos, real proficiency levels — no fluff."
          centered
          id="skills-heading"
        />

        {/* Tabs — horizontal scroll on mobile, wrap on larger screens */}
        <div className="overflow-x-auto pb-2 mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-2 sm:flex-wrap sm:justify-center w-max sm:w-auto mx-auto">
          {TABS.map((tab) => (
            <motion.button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "relative whitespace-nowrap px-3 py-1.5 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 border shrink-0 cursor-pointer",
                activeTab === tab.key
                  ? "text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary/30 bg-card",
                tab.key === "ai" && activeTab !== tab.key && "border-purple-500/30 text-purple-400/80",
                tab.key === "problem-solving" && activeTab !== tab.key && "border-primary/20 text-primary/70"
              )}
            >
              {activeTab === tab.key && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-lg bg-primary shadow-[0_0_15px_-3px_rgba(59,130,246,0.5)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </motion.button>
          ))}
          </div>
        </div>

        {/* Grid — slides in from direction of tab change */}
        <AnimatePresence mode="wait" custom={prevTabIndex}>
          <motion.div
            key={activeTab}
            custom={prevTabIndex}
            variants={{
              hidden: (dir: number) => ({ opacity: 0, x: dir * 40, filter: "blur(4px)" }),
              visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.3, ease: "easeOut" } },
              exit: (dir: number) => ({ opacity: 0, x: dir * -20, filter: "blur(4px)", transition: { duration: 0.18 } }),
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          >
            <AnimatePresence>
              {skills.map((skill, i) => (
                <motion.div
                  key={`${activeTab}-${skill.name}`}
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.04 }}
                >
                  <SkillCard {...skill} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
