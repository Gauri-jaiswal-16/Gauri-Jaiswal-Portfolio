import { Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { skills, currentlyLearning } from "@/lib/data";

const SKILL_GROUPS: { label: string; items: string[] }[] = [
  { label: "Design", items: skills.design },
  { label: "Web Foundations", items: skills.webFoundations },
  { label: "Languages", items: skills.languages },
  { label: "GenAI Tools", items: skills.genai },
  { label: "Creative", items: skills.creative },
  { label: "Tools", items: skills.tools },
];

export default function Skills() {
  return (
    <section id="learning" className="py-20 md:py-28">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-3">Skills</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink dark:text-ink-dark sm:text-4xl">
            What I can do today — and what I&apos;m building next
          </h2>
          <p className="mt-3 max-w-2xl text-muted dark:text-muted-dark">
            I keep this split on purpose. The badges below are things I&apos;ve actually shipped.
            The learning list is real progress, not finished expertise — I&apos;d rather you know
            exactly where I stand.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Established skills */}
          <Reveal>
            <div className="space-y-6">
              {SKILL_GROUPS.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted dark:text-muted-dark">
                    {group.label}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line dark:border-line-dark bg-card dark:bg-card-dark px-3.5 py-1.5 text-sm font-medium text-ink dark:text-ink-dark transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-primary hover:shadow-soft dark:hover:text-soft-accent"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Currently learning */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-dashed border-accent/50 bg-soft-accent/40 dark:bg-primary/10 p-6 md:p-8">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-accent" />
                <h3 className="font-display text-lg font-bold text-ink dark:text-ink-dark">
                  Currently learning
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted dark:text-muted-dark">
                Beyond the AI/ML engineering journey above, here&apos;s what else is actively in
                progress.
              </p>

              <div className="mt-5 space-y-2">
                {currentlyLearning.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-xl bg-card dark:bg-card-dark px-4 py-2.5 text-sm"
                  >
                    <span className="font-medium text-ink dark:text-ink-dark">{item.name}</span>
                    <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-primary dark:text-soft-accent">
                      {item.area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
