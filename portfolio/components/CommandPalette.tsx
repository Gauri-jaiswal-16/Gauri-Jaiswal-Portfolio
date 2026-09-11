"use client";

import { useEffect, useState, useMemo, ElementType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ArrowRight, Github, Linkedin, FileDown, Mail, Moon } from "lucide-react";
import { profile } from "@/lib/data";

type Action = {
  label: string;
  hint: string;
  icon: ElementType;
  run: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const actions: Action[] = useMemo(
    () => [
      { label: "Go to About", hint: "Section", icon: ArrowRight, run: () => scrollTo("about") },
      { label: "Go to Experience", hint: "Section", icon: ArrowRight, run: () => scrollTo("experience") },
      { label: "Go to Real-World Work", hint: "Section", icon: ArrowRight, run: () => scrollTo("real-world") },
      { label: "Go to AI Engineering", hint: "Section", icon: ArrowRight, run: () => scrollTo("ai-journey") },
      { label: "Go to Projects", hint: "Section", icon: ArrowRight, run: () => scrollTo("work") },
      { label: "Go to Skills", hint: "Section", icon: ArrowRight, run: () => scrollTo("learning") },
      { label: "Go to Achievements", hint: "Section", icon: ArrowRight, run: () => scrollTo("achievements") },
      { label: "Go to Contact", hint: "Section", icon: ArrowRight, run: () => scrollTo("contact") },
      {
        label: "Open GitHub",
        hint: "External",
        icon: Github,
        run: () => window.open(profile.github, "_blank", "noopener,noreferrer"),
      },
      {
        label: "Open LinkedIn",
        hint: "External",
        icon: Linkedin,
        run: () => window.open(profile.linkedin, "_blank", "noopener,noreferrer"),
      },
      {
        label: "Download Resume",
        hint: "PDF",
        icon: FileDown,
        run: () => {
          const a = document.createElement("a");
          a.href = profile.resumeUrl;
          a.download = "";
          a.click();
        },
      },
      {
        label: "Copy Email Address",
        hint: profile.email,
        icon: Mail,
        run: () => navigator.clipboard?.writeText(profile.email),
      },
      {
        label: "Toggle Theme",
        hint: "Light / Dark",
        icon: Moon,
        run: () => document.documentElement.classList.toggle("dark"),
      },
    ],
    []
  );

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  const filtered = actions.filter((a) => a.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) setQuery("");
  }, [open]);

  return (
    <>
      {/* subtle trigger hint, desktop only */}
      <button
        onClick={() => setOpen(true)}
        className="focus-ring hidden items-center gap-1.5 rounded-full border border-line dark:border-line-dark px-3 py-1.5 text-xs font-medium text-muted dark:text-muted-dark transition-colors hover:border-accent hover:text-accent lg:flex"
        aria-label="Open command palette"
      >
        <Search size={13} />
        <span>Search</span>
        <kbd className="ml-1 rounded border border-line dark:border-line-dark bg-canvas dark:bg-canvas-dark px-1.5 py-0.5 text-[10px] font-semibold">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-start justify-center bg-ink/50 pt-[12vh] backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg overflow-hidden rounded-2xl border border-line dark:border-line-dark bg-card dark:bg-card-dark shadow-lift"
            >
              <div className="flex items-center gap-2.5 border-b border-line dark:border-line-dark px-4 py-3">
                <Search size={16} className="text-muted dark:text-muted-dark" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Jump to a section or action..."
                  className="w-full bg-transparent text-sm text-ink dark:text-ink-dark outline-none placeholder:text-muted/60"
                />
                <kbd className="rounded border border-line dark:border-line-dark px-1.5 py-0.5 text-[10px] text-muted dark:text-muted-dark">
                  Esc
                </kbd>
              </div>
              <div className="max-h-80 overflow-y-auto p-2">
                {filtered.length === 0 && (
                  <p className="px-3 py-6 text-center text-sm text-muted dark:text-muted-dark">
                    No matches.
                  </p>
                )}
                {filtered.map((a) => (
                  <button
                    key={a.label}
                    onClick={() => {
                      a.run();
                      setOpen(false);
                    }}
                    className="focus-ring flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-ink dark:text-ink-dark transition-colors hover:bg-soft-accent/60 dark:hover:bg-primary/15"
                  >
                    <a.icon size={15} className="text-accent" />
                    <span className="flex-1">{a.label}</span>
                    <span className="text-xs text-muted dark:text-muted-dark">{a.hint}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
