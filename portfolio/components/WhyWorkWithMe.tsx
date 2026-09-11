import { Handshake, Zap, Ruler, ShieldCheck, ListChecks, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";
import { strengths } from "@/lib/data";

const ICONS = [Handshake, Zap, Ruler, ShieldCheck, ListChecks, TrendingUp];

export default function WhyWorkWithMe() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-3">Why Work With Me</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink dark:text-ink-dark sm:text-4xl">
            How I work
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="group relative h-full rounded-2xl p-[1.5px] transition-shadow duration-500 hover:shadow-lift">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-line to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0 dark:from-line-dark" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent via-soft-accent to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative h-full -translate-y-0 rounded-[calc(1rem-1.5px)] bg-card dark:bg-card-dark p-6 transition-transform duration-500 group-hover:-translate-y-1.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-soft-accent dark:bg-primary/15 text-primary dark:text-soft-accent transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold text-ink dark:text-ink-dark">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted dark:text-muted-dark">
                      {s.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
