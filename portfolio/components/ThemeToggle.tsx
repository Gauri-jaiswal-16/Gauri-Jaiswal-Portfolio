"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored ? stored === "dark" : prefersDark;
    setDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-line dark:border-line-dark text-ink dark:text-ink-dark hover:border-accent hover:text-accent transition-colors"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
