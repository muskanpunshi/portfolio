"use client";

import { motion } from "framer-motion";
import LetterHoverText from "./animatedWord";

export default function HeroSection() {
  return (
    // <section className="relative min-h-screen bg-[#7B0D1E] text-white overflow-hidden" id="home">

    <section
      id="home"
      className="relative min-h-screen text-yellow overflow-hidden"
      style={{
        background: `
      radial-gradient(1200px at 90% 30%, rgba(255,255,255,0.06), transparent 60%),
      linear-gradient(10deg, #7B0D1E 0%, #5E0A18 100%)
    `
      }}
    >
      {/* Center Content */}
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* Huge Title */}
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

      {/* Bottom Left Scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-8 left-8 flex items-center gap-2 text-sm text-white/70"
      >
        <span>Scroll to Explore</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⌄
        </motion.span>{" "}
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="absolute bottom-8 right-8 text-sm text-white/70"
      >
        Featured Projects
      </motion.div>
    </section>
  );
}
// "use client";

// import { motion } from "framer-motion";
// import React from "react";
// import { JSX } from 'react';
// // Props type for LetterHoverText
// type LetterHoverTextProps = {
//   text: string;
// };

// // Letter Hover Component
// function LetterHoverText({ text }: LetterHoverTextProps): JSX.Element {
//   return (
//     <h1 className="flex leading-none tracking-[0.02em] text-[clamp(4rem,15vw,10rem)]">
//       {text.split("").map((letter, idx) => (
//         <motion.span
//           key={idx}
//           className="inline-block origin-bottom font-black"
//           whileHover={{ scaleY: 1.3 }}
//           transition={{
//             duration: 0.6,
//             ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
//           }}
//         >
//           {letter}
//         </motion.span>
//       ))}
//     </h1>
//   );
// }

// export default function HeroSection(): JSX.Element {
//   return (
//     <section
//       className="relative min-h-screen bg-[#7B0D1E] text-white overflow-hidden"
//       id="home"
//     >
//       {/* Animated Background Shapes */}
//       <motion.div
//         className="absolute top-1/4 right-[10%] w-[400px] h-[400px] rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)",
//         }}
//         animate={{
//           scale: [1, 1.3, 1],
//           x: [0, 50, 0],
//           y: [0, -30, 0],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       <motion.div
//         className="absolute bottom-1/4 left-[15%] w-[300px] h-[300px] rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)",
//         }}
//         animate={{
//           scale: [1.2, 1, 1.2],
//           x: [0, -40, 0],
//           y: [0, 40, 0],
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Center Content */}
//       <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
//         {/* Huge Title with Letter Hover */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="leading-none"
//         >
//           <LetterHoverText text="MONTOYA" />
//         </motion.div>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.9 }}
//           className="mt-10 max-w-xl text-sm tracking-wide text-white/60 uppercase leading-relaxed"
//         >
//           We are a creative studio specialized in strategy, branding, design,
//           and development. Our work lives at the intersection of design and
//           technology.
//         </motion.p>

//         {/* Decorative Line */}

//       </div>

//       {/* Bottom Left Scroll */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6 }}
//         className="absolute bottom-8 left-8 flex items-center gap-2 text-sm text-white/70"
//       >
//         <span>Scroll to Explore</span>
//         <motion.span
//           animate={{ y: [0, 8, 0] }}
//           transition={{
//             duration: 1.5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           ⌄
//         </motion.span>
//       </motion.div>

//       {/* Bottom Right */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.7 }}
//         className="absolute bottom-8 right-8 text-sm text-white/70"
//       >
//         <motion.span
//           whileHover={{ scale: 1.05 }}
//           className="cursor-pointer inline-block"
//         >
//           Featured Projects
//         </motion.span>
//       </motion.div>

//       {/* Floating Decorative Elements */}
//       <motion.div
//         className="absolute top-[20%] right-[15%] w-20 h-20 border-2 border-white/10 rounded-xl"
//         animate={{
//           rotate: [0, 180, 0],
//           y: [0, -20, 0],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       <motion.div
//         className="absolute bottom-[25%] left-[10%] w-16 h-16 border-2 border-white/10 rounded-full"
//         animate={{
//           rotate: [0, -180, 0],
//           scale: [1, 1.1, 1],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//     </section>
//   );
// }
