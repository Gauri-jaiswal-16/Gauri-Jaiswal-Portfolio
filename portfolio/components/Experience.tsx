"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Maximize2, X } from "lucide-react";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";

function CertificateCard({ job }: { job: (typeof experience)[number] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="relative mx-auto w-full max-w-[260px] self-center md:max-w-none">
      <div className="group/cert relative overflow-hidden rounded-xl border border-line dark:border-line-dark bg-white shadow-soft transition-shadow duration-500 hover:shadow-lift">
        <button
          onClick={() => setOpen(true)}
          aria-label={`View full-size ${job.company} certificate of completion`}
          className="focus-ring relative block w-full cursor-zoom-in"
        >
          <div className="relative w-full transition-transform duration-500 ease-out group-hover/cert:scale-[1.02]" style={{ aspectRatio: "3 / 2" }}>
            <Image
              src={job.certificateImage}
              alt={`${job.company} certificate of completion — ${job.role}`}
              fill
              sizes="(min-width: 768px) 300px, 90vw"
              className="object-contain p-1.5"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover/cert:bg-ink/5">
            <span className="flex h-9 w-9 scale-75 items-center justify-center rounded-full bg-white/95 text-primary opacity-0 shadow-soft transition-all duration-300 group-hover/cert:scale-100 group-hover/cert:opacity-100">
              <Maximize2 size={15} />
            </span>
          </div>
        </button>
      </div>
      <p className="mt-2 text-center text-xs text-muted dark:text-muted-dark">
        Certificate of completion — click to view full size
      </p>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setOpen(false)}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close certificate preview"
              className="focus-ring absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:top-8"
            >
              <X size={18} />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-3xl rounded-lg bg-white p-2 shadow-lift"
              style={{ aspectRatio: "3 / 2" }}
            >
              <Image
                src={job.certificateImage}
                alt={`${job.company} certificate of completion — ${job.role}`}
                fill
                sizes="90vw"
                className="rounded object-contain p-2"
              />
            </motion.div>

            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white">
              {job.company} · Certificate of completion
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-3">Experience</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink dark:text-ink-dark sm:text-4xl">
            Real client work, not a simulation.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-8">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.08}>
              <div className="group relative rounded-3xl p-[1.5px] transition-shadow duration-500 hover:shadow-lift">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-line to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0 dark:from-line-dark" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent via-soft-accent to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative grid grid-cols-1 gap-8 rounded-[calc(1.5rem-1.5px)] bg-card dark:bg-card-dark p-6 md:grid-cols-[1fr_300px] md:p-8">
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-xl font-bold text-ink dark:text-ink-dark">
                        {job.role}
                      </h3>
                      <span className="text-sm font-medium text-accent">{job.period}</span>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-primary dark:text-soft-accent">
                      {job.company}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-muted dark:text-muted-dark">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <CertificateCard job={job} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
