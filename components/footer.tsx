import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { portfolio } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      {/* Thin gradient line */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand block */}
          <div>
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
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                aria-label="GitHub"
              >
                <SiGithub size={16} />
              </a>
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href={`mailto:${portfolio.email}`}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Explore</h3>
            <ul className="space-y-2.5">
              {portfolio.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Connect</h3>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Open to full-time roles, freelance projects, and interesting collaborations.
            </p>
            <a
              href={`mailto:${portfolio.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-blue-600 via-blue-500 to-cyan-400 text-white text-sm font-medium shadow-[0_0_20px_-5px_rgba(59,130,246,0.6)] hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.8)] transition-shadow"
            >
              <Mail size={14} />
              Email Me
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year} Marina Akter. All rights reserved.</p>
          <p>
            Built with Next.js, Tailwind v4, and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
