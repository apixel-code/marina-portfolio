"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  id?: string;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const wordVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] } },
};

export function SectionHeading({ eyebrow, title, description, centered = false, id }: SectionHeadingProps) {
  const words = title.split(" ");

  return (
    <motion.div
      className={cn("mb-12", centered && "text-center")}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-80px" }}
      variants={containerVariants}
    >
      {eyebrow && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          className="text-xs font-mono uppercase tracking-widest text-primary mb-3"
        >
          {eyebrow}
        </motion.p>
      )}

      {/* Word-by-word mask reveal */}
      <h2
        id={id}
        className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 overflow-hidden"
        aria-label={title}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
            <motion.span className="inline-block" variants={wordVariants}>
              {word}
            </motion.span>
          </span>
        ))}
      </h2>

      {description && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
          }}
          className={cn("text-muted-foreground max-w-2xl leading-relaxed", centered && "mx-auto")}
        >
          {description}
        </motion.p>
      )}

      <motion.div
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: { scaleX: 1, opacity: 1, transition: { duration: 0.5, delay: 0.15, ease: "easeOut" } },
        }}
        className={cn(
          "mt-4 h-px w-16 bg-linear-to-r from-blue-600 to-cyan-400 origin-left",
          centered && "mx-auto"
        )}
      />
    </motion.div>
  );
}
