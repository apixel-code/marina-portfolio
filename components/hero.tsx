"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { portfolio } from "@/data/portfolio";
import { skillIconMap } from "@/lib/icon-map";

const FLOATING_ICONS = [
  { name: "React",      x: "8%",  y: "15%", size: 38, delay: 0   },
  { name: "Node.js",   x: "85%", y: "20%", size: 34, delay: 0.5 },
  { name: "MongoDB",   x: "75%", y: "70%", size: 36, delay: 1   },
  { name: "TypeScript",x: "12%", y: "72%", size: 32, delay: 0.8 },
  { name: "Next.js",   x: "50%", y: "8%",  size: 30, delay: 0.3 },
  { name: "Python",    x: "90%", y: "50%", size: 28, delay: 1.2 },
  { name: "Git",       x: "5%",  y: "45%", size: 26, delay: 0.6 },
  { name: "Firebase",  x: "60%", y: "85%", size: 24, delay: 0.9 },
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
  const rawX = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const rawY = useTransform(mouseY, [-0.5, 0.5], [-6, 6]);
  const springX = useSpring(rawX, { stiffness: 50, damping: 18, mass: 0.8 });
  const springY = useSpring(rawY, { stiffness: 50, damping: 18, mass: 0.8 });
  if (!entry) return null;
  const { Icon, color } = entry;
  return (
    // Outer div: smooth spring parallax on mouse move
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ left: item.x, top: item.y, x: springX, y: springY }}
    >
      {/* Inner div: floating bob + opacity pulse — separated so they don't conflict */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.15, 0.26, 0.15], y: [0, -12, 0] }}
        transition={{
          opacity: { duration: 4, repeat: Infinity, delay: item.delay, ease: "easeInOut" },
          y:       { duration: 5 + item.delay, repeat: Infinity, delay: item.delay, ease: "easeInOut" },
        }}
      >
        <Icon size={item.size} style={{ color: color === "currentColor" ? "var(--foreground)" : color }} />
      </motion.div>
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
      mouseX.set((e.clientX - rect.left - rect.width  / 2) / rect.width);
      mouseY.set((e.clientY - rect.top  - rect.height / 2) / rect.height);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[88vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28 pb-20"
      aria-label="Hero"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='%233b82f6' stroke-width='0.5'/%3E%3C/svg%3E\")",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Aurora blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Floating brand logos — hidden on mobile to avoid overlap */}
      <div className="hidden md:block">
        {FLOATING_ICONS.map((item) => (
          <FloatingIcon key={item.name} item={item} mouseX={mouseX} mouseY={mouseY} />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Availability pill */}
        <motion.div variants={itemVariants} className="flex justify-center mb-5 md:mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs md:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          variants={itemVariants}
          className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-primary mb-4 px-2"
        >
          MERN Developer &amp; Founder @{" "}
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
          className="font-bold tracking-tight text-foreground mb-5 md:mb-6"
          style={{ fontSize: "clamp(2.2rem, 8vw, 6rem)", lineHeight: 1.08 }}
        >
          Hi, I&apos;m{" "}
          <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Marina Akter
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-7 md:mb-8 px-2"
        >
          {portfolio.tagline}
        </motion.p>

        {/* CTAs — stacked on mobile, side-by-side on sm+ */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 md:mb-10 px-4 sm:px-0"
        >
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work <ArrowRight size={16} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail size={16} /> Get In Touch
          </Button>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10 px-2"
        >
          {portfolio.heroTechStack.map((tech) => {
            const entry = skillIconMap[tech];
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border bg-muted text-[11px] md:text-xs font-mono text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
              >
                {entry && (
                  <entry.Icon
                    size={12}
                    style={{ color: entry.color === "currentColor" ? "var(--foreground)" : entry.color }}
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
          className="flex flex-wrap justify-center gap-5 md:gap-10"
        >
          {portfolio.stats.slice(0, 3).map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold font-mono text-foreground">
                {stat.value}<sup className="text-primary text-sm md:text-base">{stat.suffix}</sup>
              </p>
              <p className="text-[11px] md:text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
