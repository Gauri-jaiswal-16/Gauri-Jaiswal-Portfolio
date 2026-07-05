"use client";

import { Sparkles, Target, Wrench, Layers, Lightbulb, Github, ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import { aiJourney, aiProjects } from "@/lib/data";

const STATUS_STYLES: Record<string, string> = {
  Working: "bg-accent/15 text-primary dark:text-soft-accent",
  Experimental: "bg-highlight/15 text-highlight",
};

function statusClass(status: string) {
  if (status.startsWith("Working")) return STATUS_STYLES.Working;
  return STATUS_STYLES.Experimental;
}

function AIProjectCard({ project, i }: { project: (typeof aiProjects)[number]; i: number }) {
  return (
    <Reveal delay={i * 0.06}>
      <div className="group relative h-full rounded-2xl p-[1.5px] transition-shadow duration-500 hover:shadow-lift">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-line to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0 dark:from-line-dark" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent via-soft-accent to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex h-full flex-col rounded-[calc(1rem-1.5px)] bg-card dark:bg-card-dark p-6">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-base font-bold text-ink dark:text-ink-dark">
              {project.name}
            </h3>
            <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${statusClass(project.status)}`}>
              {project.status}
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted dark:text-muted-dark">
            {project.objective}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-soft-accent/70 dark:bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary dark:text-soft-accent transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-white"
              >
                {t}
              </span>
            ))}
          </div>

          <details className="group/d mt-4 flex-1">
            <summary className="focus-ring cursor-pointer list-none text-sm font-semibold text-primary dark:text-soft-accent">
              <span className="inline-flex items-center gap-1">
                Architecture &amp; what I learned
                <ChevronDown size={13} className="transition-transform duration-300 group-open/d:rotate-180" />
              </span>
            </summary>
            <div className="mt-3 space-y-3 text-sm">
              <div className="flex gap-2">
                <Layers size={14} className="mt-0.5 shrink-0 text-accent" />
                <p className="leading-relaxed text-muted dark:text-muted-dark">{project.architecture}</p>
              </div>
              <div className="flex gap-2">
                <Wrench size={14} className="mt-0.5 shrink-0 text-accent" />
                <div className="text-muted dark:text-muted-dark">
                  <p className="font-semibold text-ink dark:text-ink-dark">Features</p>
                  <ul className="mt-1 list-disc space-y-1 pl-4">
                    {project.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-2">
                <Target size={14} className="mt-0.5 shrink-0 text-accent" />
                <div className="text-muted dark:text-muted-dark">
                  <p className="font-semibold text-ink dark:text-ink-dark">Concepts demonstrated</p>
                  <p className="mt-1">{project.concepts.join(", ")}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Lightbulb size={14} className="mt-0.5 shrink-0 text-accent" />
                <p className="leading-relaxed text-muted dark:text-muted-dark">{project.learned}</p>
              </div>
            </div>
          </details>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-soft-accent transition-colors hover:text-accent"
          >
            <Github size={14} /> View source
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function AIJourney() {
  return (
    <section id="ai-journey" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-accent/10 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-[110px]"
      />

      <div className="section-container relative">
        <Reveal>
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-accent" />
            <p className="eyebrow">Generative AI Engineering</p>
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink dark:text-ink-dark sm:text-4xl">
            Hands-on GenAI experiments — real code, not a roadmap
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted dark:text-muted-dark">
            {aiJourney.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiProjects.map((project, i) => (
            <AIProjectCard key={project.slug} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
