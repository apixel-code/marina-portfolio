"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "backdrop-blur-xl bg-background/70 border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            aria-label="Marina Akter — home"
          >
            <span className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white text-xs font-bold font-mono shadow-[0_0_15px_-3px_rgba(59,130,246,0.6)]">
              MA
            </span>
            <span className="font-semibold text-foreground text-sm hidden sm:block">
              Marina Akter
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {portfolio.navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => handleNavClick("#contact")}
            >
              Contact Me
            </Button>
            {/* Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
              onClick={() => setIsMobileOpen((v) => !v)}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 backdrop-blur-xl bg-background/95 flex flex-col p-6 md:hidden"
          >
            <ul className="flex flex-col gap-2 mt-4" role="list">
              {portfolio.navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-muted rounded-xl transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => handleNavClick("#contact")}
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
