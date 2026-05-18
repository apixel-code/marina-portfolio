"use client";

import { motion, type Variants } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar, ArrowRight } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-20 md:py-28 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Background"
          title="Experience & Education"
          description="My journey in full-stack engineering and academia."
          id="experience-heading"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary/40 via-border to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-10">
            {portfolio.experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              const isWork = exp.type === "work";

              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={cn(
                    "relative flex gap-8",
                    "pl-12 md:pl-0",
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-8 h-8 rounded-full border-2 border-primary bg-card flex items-center justify-center transform md:-translate-x-1/2 z-10">
                    {isWork ? (
                      <Briefcase size={14} className="text-primary" />
                    ) : (
                      <GraduationCap size={14} className="text-primary" />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={cn(
                      "flex-1 md:max-w-[calc(50%-2rem)]",
                      isLeft ? "md:pr-10" : "md:pl-10"
                    )}
                  >
                    <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-colors">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border text-xs font-mono text-muted-foreground">
                          <Calendar size={11} />
                          {exp.period}
                        </span>
                        <span
                          className={cn(
                            "text-xs font-mono px-2 py-0.5 rounded-full",
                            isWork
                              ? "bg-blue-500/10 text-blue-400"
                              : "bg-emerald-500/10 text-emerald-400"
                          )}
                        >
                          {isWork ? "Work" : "Education"}
                        </span>
                      </div>

                      <h3 className="font-semibold text-foreground text-lg mb-1">{exp.title}</h3>
                      <p className="text-primary text-sm font-medium mb-1">{exp.organization}</p>
                      <p className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                        <MapPin size={11} />
                        {exp.location}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <ul className="space-y-1.5">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ArrowRight size={13} className="text-primary mt-0.5 shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for opposite column */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
