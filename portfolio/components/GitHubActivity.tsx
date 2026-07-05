"use client";

import { useState } from "react";
import { Github, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { profile, repoHighlights } from "@/lib/data";

export default function GitHubActivity() {
  const [failed, setFailed] = useState(false);
  const username = profile.github.split("/").filter(Boolean).pop() ?? "";

  return (
    <section className="py-6 md:py-8">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-2">GitHub</p>
          <h3 className="font-display text-xl font-bold text-ink dark:text-ink-dark">
            Repository highlights
          </h3>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {repoHighlights.map((repo, i) => (
            <Reveal key={repo.name} delay={i * 0.06}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-line dark:border-line-dark bg-card dark:bg-card-dark p-4 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lift"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate font-display text-sm font-bold text-ink dark:text-ink-dark">
                    {repo.name}
                  </span>
                  <ArrowUpRight size={13} className="shrink-0 text-muted transition-colors group-hover:text-accent dark:text-muted-dark" />
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-muted dark:text-muted-dark">
                  {repo.description}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        {!failed && (
          <Reveal delay={0.15}>
            <div className="mt-6 rounded-2xl border border-line dark:border-line-dark bg-card dark:bg-card-dark p-6">
              <div className="flex items-center gap-2">
                <Github size={16} className="text-accent" />
                <p className="text-sm font-semibold text-ink dark:text-ink-dark">Contribution activity</p>
              </div>
              <div className="mt-4 overflow-x-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://ghchart.rshah.org/3FA66B/${username}`}
                  alt={`${username}'s GitHub contribution graph`}
                  className="min-w-[600px]"
                  loading="lazy"
                  onError={() => setFailed(true)}
                />
              </div>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-3 inline-block text-xs font-semibold text-primary dark:text-soft-accent hover:text-accent"
              >
                View full profile →
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
