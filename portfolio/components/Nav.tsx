"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import CommandPalette from "./CommandPalette";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "real-world", label: "Real-World Work" },
  { id: "ai-journey", label: "AI/ML" },
  { id: "work", label: "Work" },
  { id: "learning", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="glass-nav fixed top-0 left-0 right-0 z-50">
      <nav className="section-container flex h-16 items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="focus-ring font-display text-lg font-bold tracking-tight text-primary dark:text-soft-accent"
        >
          Gauri Jaiswal
        </button>

        <ul className="hidden lg:flex items-center gap-6 xl:gap-7">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className={`focus-ring group relative py-1 text-sm font-medium transition-colors ${
                  active === link.id
                    ? "text-accent"
                    : "text-ink/70 dark:text-ink-dark/70 hover:text-primary dark:hover:text-soft-accent"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left bg-accent transition-transform duration-300 ease-out ${
                    active === link.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <CommandPalette />
          <ThemeToggle />
          <a
            href="/resume.pdf"
            download
            className="focus-ring rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-accent transition-colors"
          >
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-line dark:border-line-dark"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden glass-nav overflow-hidden border-t border-line dark:border-line-dark"
          >
            <ul className="section-container flex flex-col gap-1 py-3">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <button
                    onClick={() => handleClick(link.id)}
                    className="focus-ring block w-full text-left py-2.5 text-sm font-medium text-ink dark:text-ink-dark"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <li className="pt-2">
                <a
                  href="/resume.pdf"
                  download
                  className="focus-ring inline-block rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
