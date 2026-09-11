import Image from "next/image";
import Reveal from "./Reveal";
import { creativeWork } from "@/lib/data";

export default function Creative() {
  return (
    <section className="py-16 md:py-20">
      <div className="section-container">
        <Reveal>
          <div className="group relative overflow-hidden rounded-3xl p-[1.5px] transition-shadow duration-500 hover:shadow-lift">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-line to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0 dark:from-line-dark" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent via-soft-accent to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative grid grid-cols-1 gap-8 rounded-[calc(1.5rem-1.5px)] bg-card dark:bg-card-dark p-6 md:grid-cols-[280px_1fr] md:items-center md:p-8">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl">
                <Image
                  src={creativeWork.poster.image}
                  alt={creativeWork.poster.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <span className="eyebrow">Brand &amp; Poster Design</span>
                <h3 className="mt-2 font-display text-xl font-bold text-ink dark:text-ink-dark">
                  {creativeWork.poster.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted dark:text-muted-dark">
                  {creativeWork.poster.description}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
