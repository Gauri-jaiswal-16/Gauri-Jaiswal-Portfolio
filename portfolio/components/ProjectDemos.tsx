import Image from "next/image";
import { PlayCircle } from "lucide-react";
import Reveal from "./Reveal";
import { projectDemos } from "@/lib/data";

export default function ProjectDemos() {
  return (
    <section id="demos" className="py-16 md:py-20">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-2">Project Demonstrations</p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink dark:text-ink-dark sm:text-3xl">
            Watch a demo
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted dark:text-muted-dark">
            Independent from the UI/UX case studies above — these are video-editing reels, hosted
            on Google Drive. Each opens in a new tab.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {projectDemos.map((demo, i) => (
            <Reveal key={demo.title} delay={i * 0.08}>
              <div className="group relative h-full rounded-2xl p-[1.5px] transition-shadow duration-500 hover:shadow-lift">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-line to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0 dark:from-line-dark" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent via-soft-accent to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem-1.5px)] bg-card dark:bg-card-dark">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={demo.thumbnail}
                      alt={demo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-ink/15 transition-colors group-hover:bg-ink/25">
                      <PlayCircle size={36} className="text-white drop-shadow" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-base font-bold text-ink dark:text-ink-dark">
                      {demo.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted dark:text-muted-dark">
                      {demo.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {demo.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-soft-accent/70 dark:bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary dark:text-soft-accent"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={demo.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent"
                    >
                      <PlayCircle size={13} /> {demo.cta}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
