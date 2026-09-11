import Link from "next/link";
import { Github, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { personalProjects } from "@/lib/data";

export default function PersonalProjects() {
  return (
    <section className="py-4 md:py-6">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-3">Also Built</p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink dark:text-ink-dark sm:text-3xl">
            Smaller, self-directed projects
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {personalProjects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <TiltCard className="group relative h-full rounded-2xl p-[1.5px] transition-shadow duration-500 hover:shadow-lift">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-line to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0 dark:from-line-dark" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent via-soft-accent to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative h-full rounded-[calc(1rem-1.5px)] bg-card dark:bg-card-dark p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="eyebrow">{p.tag}</span>
                      <h3 className="mt-1.5 font-display text-lg font-bold text-ink dark:text-ink-dark">
                        {p.name}
                      </h3>
                    </div>
                    {p.github ? (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.name} on GitHub`}
                        className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line dark:border-line-dark text-ink dark:text-ink-dark transition-all duration-300 hover:rotate-6 hover:border-accent hover:text-accent"
                      >
                        <Github size={15} />
                      </a>
                    ) : p.url ? (
                      p.url?.startsWith("/") ? (
                        <Link
                          href={p.url}
                          aria-label={`Open ${p.name} project`}
                          className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line dark:border-line-dark text-ink dark:text-ink-dark transition-all duration-300 hover:rotate-6 hover:border-accent hover:text-accent"
                        >
                          <Github size={15} />
                        </Link>
                      ) : (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.name} project link`}
                          className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line dark:border-line-dark text-ink dark:text-ink-dark transition-all duration-300 hover:rotate-6 hover:border-accent hover:text-accent"
                        >
                          <Github size={15} />
                        </a>
                      )
                    ) : null}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted dark:text-muted-dark">
                    {p.summary}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-sm text-muted dark:text-muted-dark before:mr-2 before:text-accent before:content-['—']"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-soft-accent/70 dark:bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary dark:text-soft-accent transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.note && (
                    <p className="mt-4 text-xs italic text-muted dark:text-muted-dark">{p.note}</p>
                  )}

                  {p.url ? (
                    p.url?.startsWith("/") ? (
                      <Link
                        href={p.url}
                        className="focus-ring mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary dark:text-soft-accent transition-colors hover:text-accent"
                      >
                        View project
                        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    ) : (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary dark:text-soft-accent transition-colors hover:text-accent"
                      >
                        View project
                        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )
                  ) : null}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary dark:text-soft-accent transition-colors hover:text-accent"
                    >
                      View source
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
