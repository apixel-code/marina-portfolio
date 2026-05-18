"use client";

import { motion, type Variants } from "framer-motion";
import { Code2, Binary, Gauge, Sparkles } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";
import { Card } from "./ui/card";
import { portfolio } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} />,
  Binary: <Binary size={20} />,
  Gauge: <Gauge size={20} />,
  Sparkles: <Sparkles size={20} />,
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left: bio */}
          <motion.div variants={itemVariants}>
            <SectionHeading
              eyebrow="About Me"
              title="Engineer by Craft, Problem Solver by Nature"
              id="about-heading"
            />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{portfolio.shortBio}</p>
              <p>{portfolio.longBio}</p>
            </div>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-2 mt-6">
              {portfolio.highlightChips.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 rounded-lg border border-border bg-muted text-xs font-mono text-muted-foreground"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: trait cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {portfolio.traits.map((trait) => (
              <motion.div key={trait.title} variants={itemVariants}>
                <Card className="h-full">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary mb-4">
                    {iconMap[trait.icon]}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{trait.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {trait.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
