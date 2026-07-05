"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type GalleryImage = { src: string; alt: string; width: number; height: number };

export default function CaseStudyGallery({ images, name }: { images: GalleryImage[]; name: string }) {
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const total = images.length;
  const current = images[idx];

  const next = useCallback(() => setIdx((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIdx((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, next, prev]);

  return (
    <div>
      {/* Frame */}
      <div className="group relative overflow-hidden rounded-2xl border border-line dark:border-line-dark bg-canvas dark:bg-canvas-dark p-2 shadow-soft">
        {/* gradient border glow on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 via-accent/0 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-accent/10 group-hover:to-primary/5" />

        <button
          onClick={() => setOpen(true)}
          aria-label={`Enlarge ${name} preview, image ${idx + 1} of ${total}`}
          className="focus-ring relative block w-full cursor-zoom-in overflow-hidden rounded-xl"
        >
          <div
            className="relative mx-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            style={{ aspectRatio: `${current.width} / ${current.height}` }}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain"
              priority={idx === 0}
            />
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/5">
            <span className="flex h-10 w-10 scale-75 items-center justify-center rounded-full bg-white/90 text-primary opacity-0 shadow-soft transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
              <Maximize2 size={16} />
            </span>
          </div>
        </button>

        {/* controls */}
        <div className="mt-2 flex items-center justify-between px-1">
          <div className="flex gap-1.5">
            {images.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setIdx(i)}
                aria-label={`Show slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === idx ? "w-6 bg-accent" : "w-1.5 bg-line dark:bg-line-dark hover:bg-accent/50"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted dark:text-muted-dark">
              {idx + 1} / {total}
            </span>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="focus-ring flex h-7 w-7 items-center justify-center rounded-full border border-line dark:border-line-dark transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronLeft size={13} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="focus-ring flex h-7 w-7 items-center justify-center rounded-full border border-line dark:border-line-dark transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronRight size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setOpen(false)}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close preview"
              className="focus-ring absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:top-8"
            >
              <X size={18} />
            </button>

            <motion.div
              key={current.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-4xl"
              style={{ aspectRatio: `${current.width} / ${current.height}` }}
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="90vw"
                className="rounded-lg object-contain"
              />
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="focus-ring absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="focus-ring absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
            >
              <ChevronRight size={20} />
            </button>

            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white">
              {name} · {idx + 1} / {total}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
