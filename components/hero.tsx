"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { portfolio } from "@/data/portfolio";
import { skillIconMap } from "@/lib/icon-map";

const FLOATING_ICONS = [
  { name: "React", x: "8%", y: "15%", size: 40, delay: 0 },
  { name: "Node.js", x: "85%", y: "20%", size: 36, delay: 0.5 },
  { name: "MongoDB", x: "75%", y: "70%", size: 38, delay: 1 },
  { name: "TypeScript", x: "12%", y: "72%", size: 34, delay: 0.8 },
  { name: "Next.js", x: "50%", y: "10%", size: 32, delay: 0.3 },
  { name: "Python", x: "90%", y: "50%", size: 30, delay: 1.2 },
  { name: "Git", x: "5%", y: "45%", size: 28, delay: 0.6 },
  { name: "Firebase", x: "60%", y: "85%", size: 26, delay: 0.9 },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface FloatingIconProps {
  item: (typeof FLOATING_ICONS)[number];
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}

function FloatingIcon({ item, mouseX, mouseY }: FloatingIconProps) {
  const entry = skillIconMap[item.name];
  const parallaxX = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);
  const parallaxY = useTransform(mouseY, [-0.5, 0.5], [-8, 8]);

  if (!entry) return null;
  const { Icon, color } = entry;

  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ left: item.x, top: item.y, x: parallaxX, y: parallaxY }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.08, 0.14, 0.08], y: [0, -15, 0] }}
      transition={{
        opacity: { duration: 4, repeat: Infinity, delay: item.delay, ease: "easeInOut" },
        y: { duration: 5 + item.delay, repeat: Infinity, delay: item.delay, ease: "easeInOut" },
      }}
    >
      <Icon
        size={item.size}
        style={{ color: color === "currentColor" ? "var(--foreground)" : color }}
      />
    </motion.div>
  );
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left - rect.width / 2) / rect.width);
      mouseY.set((e.clientY - rect.top - rect.height / 2) / rect.height);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='%233b82f6' stroke-width='0.5'/%3E%3C/svg%3E\")",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Aurora blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Floating brand logos */}
      {FLOATING_ICONS.map((item) => (
        <FloatingIcon key={item.name} item={item} mouseX={mouseX} mouseY={mouseY} />
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Availability pill */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          variants={itemVariants}
          className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-4"
        >
          Senior MERN Developer &amp; Founder @{" "}
          <a
            href="https://www.apixel.net"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-primary/40 underline-offset-2 hover:text-accent transition-colors"
          >
            Apixel
          </a>
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-bold tracking-tight text-foreground mb-6"
          style={{ fontSize: "clamp(2.75rem, 8vw, 6rem)", lineHeight: 1.05 }}
        >
          Hi, I&apos;m{" "}
          <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Marina Akter
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8"
        >
          {portfolio.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
            <ArrowRight size={16} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail size={16} />
            Get In Touch
          </Button>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {portfolio.heroTechStack.map((tech) => {
            const entry = skillIconMap[tech];
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-muted text-xs font-mono text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
              >
                {entry && (
                  <entry.Icon
                    size={13}
                    style={{
                      color:
                        entry.color === "currentColor"
                          ? "var(--foreground)"
                          : entry.color,
                    }}
                  />
                )}
                {tech}
              </span>
            );
          })}
        </motion.div>

        {/* Quick stats */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {portfolio.stats.slice(0, 3).map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold font-mono text-foreground">
                {stat.value}
                <sup className="text-primary text-base">{stat.suffix}</sup>
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
