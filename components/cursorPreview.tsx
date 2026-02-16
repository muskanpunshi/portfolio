"use client";

import { useEffect, useRef } from "react";

export function CursorPreview() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate(${e.clientX + 20}px, ${e.clientY + 20}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed w-40 h-24 bg-white shadow-xl rounded-xl pointer-events-none"
    />
  );
}
