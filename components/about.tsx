"use client";

import { motion } from "framer-motion";
import { Code2, Binary, Gauge, Sparkles } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";
import { portfolio } from "@/data/portfolio";
import { fadeLeft, fadeRight, scaleIn, stagger } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} />,
  Binary: <Binary size={20} />,
  Gauge: <Gauge size={20} />,
  Sparkles: <Sparkles size={20} />,
};

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: bio — slides in from left */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            <SectionHeading
              eyebrow="About Me"
              title="Engineer by Craft, Problem Solver by Nature"
              id="about-heading"
            />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{portfolio.shortBio}</p>
              <p>{portfolio.longBio}</p>
            </div>

            {/* Highlight chips — staggered bounce-in */}
            <motion.div
              className="flex flex-wrap gap-2 mt-6"
              variants={stagger(0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              {portfolio.highlightChips.map((chip) => (
                <motion.span
                  key={chip}
                  variants={scaleIn}
                  className="px-3 py-1.5 rounded-lg border border-border bg-muted text-xs font-mono text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
                >
                  {chip}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: trait cards — slides in from right */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {portfolio.traits.map((trait) => (
              <motion.div
                key={trait.title}
                variants={fadeRight}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-2xl border border-border bg-card p-6 cursor-default group transition-colors hover:border-primary/40 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)]"
              >
                <motion.div
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary mb-4"
                  whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
                >
                  {iconMap[trait.icon]}
                </motion.div>
                <h3 className="font-semibold text-foreground mb-2">{trait.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{trait.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
