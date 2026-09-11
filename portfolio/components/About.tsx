import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";
import { about, education, languages } from "@/lib/data";

const STATS = [
  { value: 6, suffix: "mo", label: "Difmo Internship" },
  { value: 2, suffix: "", label: "UI/UX Case Studies Shipped" },
  { value: 7, suffix: "", label: "GenAI Experiments" },
  { value: 1, suffix: "", label: "B.Tech In Progress" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-container grid grid-cols-1 gap-12 md:grid-cols-[0.4fr_0.6fr]">
        <Reveal>
          <p className="eyebrow mb-3">About</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink dark:text-ink-dark sm:text-4xl">
            Where I am, honestly.
          </h2>
          <div className="mt-8 space-y-4 rounded-2xl border border-line dark:border-line-dark bg-card dark:bg-card-dark p-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted dark:text-muted-dark">
                Education
              </p>
              <p className="mt-1 font-medium text-ink dark:text-ink-dark">{education.degree}</p>
              <p className="text-sm text-muted dark:text-muted-dark">
                {education.school} · {education.period}
              </p>
            </div>
            <div className="h-px bg-line dark:bg-line-dark" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted dark:text-muted-dark">
                Languages
              </p>
              <p className="mt-1 text-sm text-ink dark:text-ink-dark">{languages.join(" · ")}</p>
            </div>
          </div>
        </Reveal>

        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-muted dark:text-muted-dark sm:text-[1.05rem]">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.15}>
        <div className="section-container mt-14">
          <div className="grid grid-cols-2 gap-6 rounded-3xl border border-line dark:border-line-dark bg-card dark:bg-card-dark p-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <AnimatedCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
