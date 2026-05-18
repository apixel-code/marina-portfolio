"use client";

import { motion, type Variants } from "framer-motion";
import { Code2, Server, Layers, Database, Gauge, ShieldCheck, Check } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";
import { portfolio } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={24} />,
  Server: <Server size={24} />,
  Layers: <Layers size={24} />,
  Database: <Database size={24} />,
  Gauge: <Gauge size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 md:py-28 px-4 sm:px-6 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="What I Build"
          title="Services & Expertise"
          description="End-to-end engineering from database to deployment — everything you need to ship a production-grade web application."
          centered
          id="services-heading"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolio.services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-primary/20 bg-primary/10 text-primary group-hover:border-primary/40 transition-colors">
                    {iconMap[service.icon]}
                  </div>
                  <span className="text-2xl font-mono font-bold text-muted/50 group-hover:text-primary/30 transition-colors">
                    {service.id}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-primary mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
