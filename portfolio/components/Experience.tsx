import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";

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

                <div className="relative grid gap-8 rounded-[calc(1.5rem-1.5px)] bg-card dark:bg-card-dark p-6 md:grid-cols-[1fr_260px] md:p-8">
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

                <div className="relative mx-auto w-full max-w-[220px] self-center md:max-w-none">
                  <div className="overflow-hidden rounded-xl border border-line dark:border-line-dark shadow-soft transition-transform duration-500 hover:-translate-y-1 hover:rotate-1">
                    <Image
                      src={job.certificateImage}
                      alt={`${job.company} internship completion certificate`}
                      width={480}
                      height={340}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <p className="mt-2 text-center text-xs text-muted dark:text-muted-dark">
                    Certificate of completion
                  </p>
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
