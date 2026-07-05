"use client";

import { Lightbulb, Target, Wrench, ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import CaseStudyGallery from "./CaseStudyGallery";
import { caseStudies } from "@/lib/data";

function CaseStudyCard({ study, reverse }: { study: (typeof caseStudies)[number]; reverse: boolean }) {
  return (
    <div className="group/card relative rounded-[1.75rem] p-[1.5px] transition-all duration-500 hover:shadow-lift">
      {/* animated gradient border */}
      <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-line via-transparent to-line opacity-100 transition-opacity duration-500 group-hover/card:opacity-0 dark:from-line-dark dark:to-line-dark" />
      <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-accent via-soft-accent to-primary opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

      <div
        className={`relative grid gap-10 rounded-[1.7rem] bg-card dark:bg-card-dark p-6 md:grid-cols-2 md:p-8 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <CaseStudyGallery images={study.images} name={study.name} />
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <span className="eyebrow">{study.tag}</span>
          <h3 className="mt-2 font-display text-2xl font-bold text-ink dark:text-ink-dark">
            {study.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted dark:text-muted-dark">
            {study.summary}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {study.tech.map((t, i) => (
              <span
                key={t}
                style={{ transitionDelay: `${i * 30}ms` }}
                className="rounded-full bg-soft-accent/70 dark:bg-primary/15 px-3 py-1 text-xs font-medium text-primary dark:text-soft-accent transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-white hover:shadow-soft"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 space-y-4 text-sm">
            <div className="flex gap-2.5">
              <Wrench size={16} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-ink dark:text-ink-dark">My role &amp; process</p>
                <p className="mt-1 leading-relaxed text-muted dark:text-muted-dark">{study.process}</p>
              </div>
            </div>
            <div className="flex gap-2.5">
              <Target size={16} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-ink dark:text-ink-dark">Challenge</p>
                <p className="mt-1 leading-relaxed text-muted dark:text-muted-dark">{study.challenge}</p>
              </div>
            </div>
            <div className="flex gap-2.5">
              <Lightbulb size={16} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-ink dark:text-ink-dark">What I learned</p>
                <p className="mt-1 leading-relaxed text-muted dark:text-muted-dark">{study.learned}</p>
              </div>
            </div>
          </div>

          <details className="group mt-5">
            <summary className="focus-ring cursor-pointer list-none text-sm font-semibold text-primary dark:text-soft-accent">
              <span className="inline-flex items-center gap-1">
                Responsibilities &amp; outcome
                <ChevronDown size={14} className="transition-transform duration-300 group-open:rotate-180" />
              </span>
            </summary>
            <div className="mt-3 space-y-3 text-sm text-muted dark:text-muted-dark">
              <ul className="list-disc space-y-1.5 pl-4">
                {study.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <p className="leading-relaxed">
                <span className="font-semibold text-ink dark:text-ink-dark">Outcome: </span>
                {study.outcome}
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[860px] -translate-x-1/2 rounded-full bg-soft-accent/30 blur-[100px] dark:bg-primary/10"
      />
      <div className="section-container relative">
        <Reveal>
          <p className="eyebrow mb-3">Featured Work</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink dark:text-ink-dark sm:text-4xl">
            UI/UX case studies
          </h2>
          <p className="mt-3 max-w-2xl text-muted dark:text-muted-dark">
            Two products I designed end-to-end during my internship at Difmo — shown with the
            actual screens, not placeholders. Click any preview to view it full-size.
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 0.1}>
              <CaseStudyCard study={study} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
