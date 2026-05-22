"use client";

import { motion } from "framer-motion";
import { Code2, Server, Layers, Database, Gauge, Sparkles, Check } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";
import { portfolio } from "@/data/portfolio";
import { tiltIn, stagger } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={24} />,
  Server: <Server size={24} />,
  Layers: <Layers size={24} />,
  Database: <Database size={24} />,
  Gauge: <Gauge size={24} />,
  Sparkles: <Sparkles size={24} />,
};

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-16 md:py-24 bg-muted/30 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I Build"
          title="Services & Expertise"
          description="End-to-end engineering from database to deployment — everything you need to ship a production-grade web application."
          centered
          id="services-heading"
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolio.services.map((service) => (
            <motion.div
              key={service.id}
              variants={tiltIn}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group h-full rounded-2xl border border-border bg-card p-6 cursor-default transition-colors shadow-sm dark:shadow-none hover:border-primary/40 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]"
            >
              <div className="flex items-start justify-between mb-5">
                <motion.div
                  className="flex items-center justify-center w-12 h-12 rounded-xl border border-primary/20 bg-primary/10 text-primary group-hover:border-primary/50 transition-colors"
                  whileHover={{ scale: 1.15, rotate: -8, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                >
                  {iconMap[service.icon]}
                </motion.div>
                <motion.span
                  className="text-2xl font-mono font-bold text-foreground/15 group-hover:text-primary/40 transition-colors"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 }}
                >
                  {service.id}
                </motion.span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.bullets.map((b, i) => (
                  <motion.li
                    key={b}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.15 + i * 0.07 }}
                  >
                    <Check size={14} className="text-primary mt-0.5 shrink-0" />
                    {b}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
