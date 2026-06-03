"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

type BeforeAfterScrollProps = {
  before: ReactNode;
  after: ReactNode;
};

export function BeforeAfterScroll({ before, after }: BeforeAfterScrollProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 72%", "end 34%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.2,
  });

  const beforeOpacity = useTransform(smoothProgress, [0, 0.42, 0.72, 1], [1, 1, 0, 0]);
  const afterOpacity = useTransform(smoothProgress, [0, 0.42, 0.72, 1], [0, 0, 1, 1]);
  const beforeScale = useTransform(smoothProgress, [0, 1], [1, 0.985]);
  const afterScale = useTransform(smoothProgress, [0, 1], [1.015, 1]);
  const beforeY = useTransform(smoothProgress, [0, 1], [0, -8]);
  const afterY = useTransform(smoothProgress, [0, 1], [8, 0]);

  if (prefersReducedMotion) {
    return (
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {before}
        {after}
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="relative mt-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[#0B1F3A]/10 bg-[#f8fbfa] p-2 shadow-[0_28px_80px_rgba(11,31,58,0.12)] sm:p-3">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(200,169,106,0.16),transparent_34%),radial-gradient(circle_at_82%_72%,rgba(43,179,163,0.16),transparent_36%)]"
          style={{ opacity: afterOpacity }}
        />
        <div className="pointer-events-none relative min-h-[21rem] sm:min-h-[24rem] lg:min-h-[27rem]">
          <motion.div
            className="pointer-events-none absolute inset-0 [&>*]:h-full"
            style={{
              opacity: beforeOpacity,
              scale: beforeScale,
              y: beforeY,
            }}
          >
            {before}
          </motion.div>
          <motion.div
            className="pointer-events-none absolute inset-0 [&>*]:h-full"
            style={{
              opacity: afterOpacity,
              scale: afterScale,
              y: afterY,
            }}
          >
            {after}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
