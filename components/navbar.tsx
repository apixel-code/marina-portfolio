"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const NAV_OFFSET = 80; // px from top of viewport to trigger active state

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = portfolio.navLinks.map((l) => l.href.slice(1));

    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= NAV_OFFSET) {
          current = `#${id}`;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8">
        <header
          className={cn(
            "w-full max-w-6xl rounded-b-2xl border-x border-b transition-all duration-300",
            isScrolled
              ? "bg-background/80 backdrop-blur-xl border-border shadow-[0_8px_32px_-8px_rgba(0,0,0,0.25)]"
              : "bg-background/60 backdrop-blur-md border-border/40 shadow-sm"
          )}
        >
        <nav
          className="px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between"
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
            <span className="font-semibold text-foreground text-sm sm:block">
              Marina Akter
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {portfolio.navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "relative px-3 py-1.5 text-sm rounded-lg transition-colors duration-200 cursor-pointer",
                      isActive
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                </li>
              );
            })}
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
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-14 z-40 backdrop-blur-xl bg-background/95 flex flex-col p-6 md:hidden"
          >
            <ul className="flex flex-col gap-2 mt-4" role="list">
              {portfolio.navLinks.map((link, i) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={cn(
                        "w-full text-left px-4 py-3 text-lg font-medium rounded-xl transition-colors cursor-pointer",
                        isActive
                          ? "text-primary bg-primary/10 border border-primary/20"
                          : "text-foreground hover:text-primary hover:bg-muted"
                      )}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                );
              })}
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
