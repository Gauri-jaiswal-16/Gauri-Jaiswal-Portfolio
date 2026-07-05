"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[300] flex items-center justify-center bg-canvas dark:bg-canvas-dark"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-3"
          >
            <span className="font-display text-xl font-bold tracking-tight text-primary dark:text-soft-accent">
              GJ
            </span>
            <span className="h-[2px] w-16 overflow-hidden rounded-full bg-line dark:bg-line-dark">
              <motion.span
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                className="block h-full w-full bg-accent"
              />
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
