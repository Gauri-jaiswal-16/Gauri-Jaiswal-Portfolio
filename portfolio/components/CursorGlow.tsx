"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip on touch

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`;
        el.style.opacity = "1";
      });
    };
    const hide = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerleave", hide);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", hide);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[400px] w-[400px] rounded-full opacity-0 transition-opacity duration-500 hidden md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(63,166,107,0.07) 0%, rgba(63,166,107,0) 70%)",
      }}
    />
  );
}
