import { ArrowUpRight, Compass, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { realWorldProjects } from "@/lib/data";

export default function RealWorldProjects() {
  return (
    <section id="real-world" className="py-20 md:py-28">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-3">Real-World Technology Work</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink dark:text-ink-dark sm:text-4xl">
            Live platforms, not simulations.
          </h2>
          <p className="mt-3 max-w-2xl text-muted dark:text-muted-dark">
            Beyond UI/UX design, I&apos;ve contributed to the technology and website side of real,
            operational products — working on how they function, coordinating between business
            needs and technical execution, and solving problems that only show up once something
            is actually running in the real world.
          </p>
        </Reveal>

        <div className="mt-12 space-y-8">
          {realWorldProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <div className="group relative rounded-3xl p-[1.5px] transition-shadow duration-500 hover:shadow-lift">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-line to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0 dark:from-line-dark" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent via-soft-accent to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative rounded-[calc(1.5rem-1.5px)] bg-card dark:bg-card-dark p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span className="eyebrow">{project.tag}</span>
                      <h3 className="mt-1.5 font-display text-xl font-bold text-ink dark:text-ink-dark">
                        {project.name}
                      </h3>
                    </div>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-line dark:border-line-dark px-4 py-2 text-sm font-semibold text-ink dark:text-ink-dark transition-colors hover:border-accent hover:text-accent"
                    >
                      Visit site
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted dark:text-muted-dark">
                    {project.summary}
                  </p>

                  <div className="mt-5 flex gap-2.5">
                    <Compass size={16} className="mt-0.5 shrink-0 text-accent" />
                    <div>
                      <p className="font-semibold text-sm text-ink dark:text-ink-dark">My involvement</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted dark:text-muted-dark">
                        {project.involvement}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <ul className="space-y-1.5">
                      {project.focusAreas.map((f) => (
                        <li
                          key={f}
                          className="text-sm leading-relaxed text-muted dark:text-muted-dark before:mr-2 before:text-accent before:content-['—']"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2.5 rounded-2xl bg-soft-accent/40 dark:bg-primary/10 p-4">
                      <Sparkles size={16} className="mt-0.5 shrink-0 text-accent" />
                      <div>
                        <p className="font-semibold text-sm text-ink dark:text-ink-dark">What this demonstrates</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted dark:text-muted-dark">
                          {project.demonstrates}
                        </p>
                      </div>
                    </div>
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
