"use client";

import { Github, Linkedin, Mail, FileText, ArrowUpRight } from "lucide-react";
import CopyEmailButton from "./CopyEmailButton";
import { profile } from "@/lib/data";

const QUICK_LINKS = [
  { id: "about", label: "About" },
  { id: "ai-journey", label: "AI Engineering" },
  { id: "work", label: "UI/UX Work" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-line dark:border-line-dark bg-card dark:bg-card-dark">
      <div className="section-container grid grid-cols-1 gap-10 py-14 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold text-primary dark:text-soft-accent">
            Gauri Jaiswal
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted dark:text-muted-dark">
            AI/ML engineering student, AI Product Design intern, and creative editor — building toward
            applied AI, one real project at a time.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted dark:text-muted-dark">
            Quick Links
          </p>
          <ul className="mt-3 space-y-2">
            {QUICK_LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(l.id);
                  }}
                  className="focus-ring text-sm text-ink dark:text-ink-dark transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted dark:text-muted-dark">
            Connect
          </p>
          <div className="mt-3 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-line dark:border-line-dark text-muted dark:text-muted-dark transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={15} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-line dark:border-line-dark text-muted dark:text-muted-dark transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-line dark:border-line-dark text-muted dark:text-muted-dark transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={15} />
            </a>
            <CopyEmailButton email={profile.email} />
            <a
              href={profile.resumeUrl}
              download
              aria-label="Download resume"
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-line dark:border-line-dark text-muted dark:text-muted-dark transition-colors hover:border-accent hover:text-accent"
            >
              <FileText size={15} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line dark:border-line-dark py-5">
        <div className="section-container flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-muted dark:text-muted-dark">
            © {new Date().getFullYear()} {profile.name}. Designed and developed by {profile.name}.
          </p>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-1 text-xs font-medium text-muted dark:text-muted-dark transition-colors hover:text-accent"
          >
            View source <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
