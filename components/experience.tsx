"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, MapPin, Calendar, ArrowRight } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";
import { portfolio } from "@/data/portfolio";
import { swingInLeft, swingInRight, stagger } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: false, margin: "-100px" });

  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Background"
          title="Experience & Education"
          description="My journey in full-stack engineering and academia."
          centered
          id="experience-heading"
        />

        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
          className="relative"
        >
          {/* Timeline line — draws itself downward */}
          <div ref={lineRef} className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/30 transform md:-translate-x-1/2 overflow-hidden">
            <motion.div
              className="w-full bg-linear-to-b from-primary via-primary/60 to-transparent"
              initial={{ height: "0%" }}
              animate={lineInView ? { height: "100%" } : { height: "0%" }}
              transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
              style={{ originY: 0 }}
            />
          </div>

          <div className="space-y-10">
            {portfolio.experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              const isWork = exp.type === "work";

              return (
                <motion.div
                  key={exp.id}
                  variants={isLeft ? swingInLeft : swingInRight}
                  className={cn(
                    "relative flex gap-8",
                    "pl-12 md:pl-0",
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Dot */}
                  <motion.div
                    className="absolute left-0 md:left-1/2 top-6 w-8 h-8 rounded-full border-2 border-primary bg-card flex items-center justify-center transform md:-translate-x-1/2 z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ type: "spring", stiffness: 500, damping: 25, delay: i * 0.15 + 0.3 }}
                    whileHover={{ scale: 1.2, boxShadow: "0 0 20px -4px rgba(59,130,246,0.7)" }}
                  >
                    {isWork ? (
                      <Briefcase size={14} className="text-primary" />
                    ) : (
                      <GraduationCap size={14} className="text-primary" />
                    )}
                  </motion.div>

                  {/* Card */}
                  <div className={cn("flex-1 md:max-w-[calc(50%-2rem)]", isLeft ? "md:pr-10" : "md:pl-10")}>
                    <motion.div
                      className="rounded-2xl border border-border bg-card p-4 md:p-6"
                      whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.3)", boxShadow: "0 0 30px -10px rgba(59,130,246,0.3)", transition: { duration: 0.2 } }}
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border text-xs font-mono text-muted-foreground">
                          <Calendar size={11} />
                          {exp.period}
                        </span>
                        <span className={cn(
                          "text-xs font-mono px-2 py-0.5 rounded-full",
                          isWork ? "bg-blue-500/10 text-blue-400" : "bg-emerald-500/10 text-emerald-400"
                        )}>
                          {isWork ? "Work" : "Education"}
                        </span>
                      </div>

                      <h3 className="font-semibold text-foreground text-lg mb-1">{exp.title}</h3>
                      {"organizationUrl" in exp && exp.organizationUrl ? (
                        <a
                          href={exp.organizationUrl as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary text-sm font-medium mb-1 hover:underline underline-offset-2 inline-block"
                        >
                          {exp.organization} ↗
                        </a>
                      ) : (
                        <p className="text-primary text-sm font-medium mb-1">{exp.organization}</p>
                      )}
                      <p className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                        <MapPin size={11} />
                        {exp.location}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                      <ul className="space-y-1.5">
                        {exp.highlights.map((h, hi) => (
                          <motion.li
                            key={h}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: isLeft ? -12 : 12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: hi * 0.08 + 0.3 }}
                          >
                            <ArrowRight size={13} className="text-primary mt-0.5 shrink-0" />
                            {h}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
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
