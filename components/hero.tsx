"use client";

import { motion } from "framer-motion";
import LetterHoverText from "./animatedWord";
import useScrollSections from "@lib/hooks/useScrollSections";
import Container from "./layout/container";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  useScrollSections();

  return (
    <section
      id="home"
      data-scroll="1"
   
      className="relative h-screen overflow-hidden  "
      style={{
        background: `
      radial-gradient(1200px at 90% 30%, rgba(255,255,255,0.06), transparent 60%),
      linear-gradient(10deg, #7B0D1E 0%, #5E0A18 100%)
    `
      }}
    >
      <Container className="h-full">
        {/* ✅ FIX 1 cont: changed min-h-screen → h-full so it matches the section */}
        <div className="flex h-full flex-col items-center  justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="leading-none"
          >
            <LetterHoverText text="MONTOYA" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="mt-12 max-w-xl text-[13px] tracking-[0.18em] text-white/55 uppercase leading-[1.9]"
          >
            We are a creative studio specialized in strategy, branding, design,
            and development. Our work lives at the intersection of design and
            technology.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 w-24 h-[2px] bg-white/30"
          />
        </div>

        {/* Scroll To Explore */}
        <motion.button
          onClick={() => scrollToSection("about")}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="absolute bottom-10 left-10 flex flex-col items-center gap-3 group cursor-pointer  "
        >
          <div className="relative w-10.5 h-10.5 rounded-full border border-white/40 flex justify-center overflow-hidden ">
            <motion.div
              animate={{ y: [-8, 10, -8] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-[8px] h-[8px] bg-white rounded-full mt-2"
            />
          </div>

          <span className="text-xs tracking-[0.25em] uppercase text-white/70 group-hover:text-white transition">
            Scroll
          </span>
        </motion.button>

        <motion.button
          onClick={() => scrollToSection("projects")}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ x: 6 }}
          className="absolute bottom-10 right-10 flex items-center gap-3 text-sm text-white/50 group"
        >
          <span className="tracking-widest uppercase group-hover:text-white transition">
            Featured Projects
          </span>

          <motion.span
            animate={{ x: [0, 6, 0] }}
            whileHover={{ y: 6 }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            →
          </motion.span>
        </motion.button>
      </Container>
    </section>
  );
}
