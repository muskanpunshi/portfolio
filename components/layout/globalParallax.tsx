"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface GlobalParallaxProps {
  children: ReactNode;
}

export default function GlobalParallax({ children }: GlobalParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  /**
   * Different layers move at different speeds
   * Small values = subtle & premium
   */
  const slowY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const mediumY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const fastY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Background Layer – very slow */}
      <motion.div
        style={{ y: slowY }}
        className="pointer-events-none fixed inset-0 -z-30"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.04),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.03),transparent_40%)]" />
      </motion.div>

      {/* Mid ambient layer */}
      <motion.div
        style={{ y: mediumY }}
        className="pointer-events-none fixed inset-0 -z-20"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 via-transparent to-neutral-950/60" />
      </motion.div>

      {/* Content Layer – slight parallax */}
      <motion.div
        style={{ y: fastY }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}
