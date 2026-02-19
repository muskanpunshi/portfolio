"use client";

import { useEffect, useContext } from "react";
import ScrollValueContext from "@lib/context/scrollValueContext";

export default function useScrollSections() {
  const { handleScrollValue } = useContext(ScrollValueContext);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              entry.target.getAttribute("data-scroll")
            );

            handleScrollValue(index);
          }
        });
      },
      {
        threshold: 0.6, // when 60% visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
}
