"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function GlobalCursor() {
  const [isPointer, setIsPointer] = useState(false);

  const mouseX = useSpring(0, { stiffness: 600, damping: 40 });
  const mouseY = useSpring(0, { stiffness: 600, damping: 40 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handlePointer = () => setIsPointer(true);
    const handleLeave = () => setIsPointer(false);

    window.addEventListener("mousemove", move);

    // Detect hover elements globally
    const elements = document.querySelectorAll(
      "a, button, [data-cursor='pointer']"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", handlePointer);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handlePointer);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* OUTER RING */}
      <motion.div
        className="fixed top-0 left-0 z-9999 pointer-events-none mix-blend-exclusion"
        style={{
          translateX: mouseX,
          translateY: mouseY,
        }}
      >
        <motion.div
          animate={{
            width: isPointer ? 70 : 40,
            height: isPointer ? 70 : 40,
            backgroundColor: isPointer
              ? "rgba(255,255,255,0.15)"
              : "rgba(255,255,255,0.05)",
            borderWidth: isPointer ? 0 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          className="rounded-full border border-white/40 backdrop-blur-md -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>

      {/* INNER DOT */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          translateX: mouseX,
          translateY: mouseY,
        }}
      >
        <motion.div
          animate={{
            scale: isPointer ? 1.6 : 1,
          }}
          transition={{ type: "spring", stiffness: 500 }}
          className="w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
    </>
  );
}
