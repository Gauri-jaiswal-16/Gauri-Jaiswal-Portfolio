"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, FileText, Mail } from "lucide-react";
import Magnetic from "./Magnetic";
import { profile } from "@/lib/data";

function useTypewriter(words: string[], speed = 55, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* Floating background elements */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 animate-floaty rounded-full bg-soft-accent/60 blur-3xl dark:bg-primary/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-32 h-64 w-64 animate-floaty rounded-full bg-accent/10 blur-3xl"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="section-container relative grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-5"
          >
            Portfolio · {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink dark:text-ink-dark sm:text-5xl lg:text-[3.4rem]"
          >
            Hi, I&apos;m {profile.name}.
            <br />
            <span className="text-primary dark:text-accent">
              {typed}
              <span className="animate-pulse text-accent">|</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted dark:text-muted-dark sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic strength={10}>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="focus-ring group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:shadow-lift"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">View Projects</span>
                <ArrowDown size={15} className="relative transition-transform group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
            <a
              href={profile.resumeUrl}
              download
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-line dark:border-line-dark px-5 py-3 text-sm font-semibold text-ink dark:text-ink-dark transition-colors hover:border-accent hover:text-accent"
            >
              <FileText size={15} /> Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-line dark:border-line-dark transition-colors hover:border-accent hover:text-accent"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-line dark:border-line-dark transition-colors hover:border-accent hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-line dark:border-line-dark transition-colors hover:border-accent hover:text-accent"
              aria-label="Contact"
            >
              <Mail size={17} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[320px]"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/25 to-soft-accent/60 blur-2xl dark:from-accent/10 dark:to-primary/10" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-line dark:border-line-dark shadow-lift">
            <Image
              src="/images/misc/profile.jpg"
              alt={`${profile.name} portrait`}
              width={640}
              height={800}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
