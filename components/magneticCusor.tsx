"use client";
import { useEffect, useRef } from "react";

const MagneticCursor = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[999]">
      <div
        ref={ref}
        className="w-5 h-5 rounded-full bg-emerald-500/70 blur-sm"
      />
    </div>
  );
};
export default MagneticCursor;
