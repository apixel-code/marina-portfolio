"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { portfolio } from "@/data/portfolio";
import { fadeUp, stagger } from "@/lib/animations";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="h-px w-full bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10"
        >
          {/* Brand block */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white text-xs font-bold font-mono">
                MA
              </span>
              <span className="font-semibold text-foreground">Marina Akter</span>
            </div>
            <a
              href={portfolio.apixel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono hover:border-primary/60 hover:bg-primary/20 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {portfolio.apixel.role} @ {portfolio.apixel.name}
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs">
              {portfolio.tagline}
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: portfolio.github, icon: <SiGithub size={16} />, label: "GitHub" },
                { href: portfolio.linkedin, icon: <FaLinkedin size={16} />, label: "LinkedIn" },
                { href: `mailto:${portfolio.email}`, icon: <Mail size={16} />, label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Explore */}
          <motion.div variants={fadeUp}>
            <h3 className="text-sm font-semibold text-foreground mb-4">Explore</h3>
            <ul className="space-y-2.5">
              {portfolio.navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.06 + 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={fadeUp}>
            <h3 className="text-sm font-semibold text-foreground mb-4">Connect</h3>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Open to full-time roles, freelance projects, and interesting collaborations.
            </p>
            <motion.a
              href={`mailto:${portfolio.email}`}
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px -5px rgba(59,130,246,0.8)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-blue-600 via-blue-500 to-cyan-400 text-white text-sm font-medium shadow-[0_0_20px_-5px_rgba(59,130,246,0.6)] transition-shadow"
            >
              <Mail size={14} />
              Email Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
        >
          <p>© {year} Marina Akter. All rights reserved.</p>
          <p>Built with Next.js, Tailwind v4, and lots of ☕</p>
        </motion.div>
      </div>
    </footer>
  );
}
