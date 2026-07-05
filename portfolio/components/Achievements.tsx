import Reveal from "./Reveal";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-accent/5 blur-[100px]"
      />
      <div className="section-container relative">
        <Reveal>
          <p className="eyebrow mb-3">Timeline</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink dark:text-ink-dark sm:text-4xl">
            Milestones so far
          </h2>
        </Reveal>

        <div className="relative mt-12 pl-8">
          <div className="absolute left-[7px] top-1 bottom-1 w-px bg-line dark:bg-line-dark" />
          <div className="space-y-10">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08} className="group relative">
                <span className="absolute -left-8 top-1 h-3.5 w-3.5 rounded-full border-2 border-accent bg-canvas shadow-[0_0_0_0_rgba(63,166,107,0.4)] transition-shadow duration-500 group-hover:shadow-[0_0_0_6px_rgba(63,166,107,0.15)] dark:bg-canvas-dark" />
                <p className="text-sm font-semibold text-accent">{a.period}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-ink dark:text-ink-dark">
                  {a.title}
                </h3>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted dark:text-muted-dark">
                  {a.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
