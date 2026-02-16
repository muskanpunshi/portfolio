import { motion } from "framer-motion";

export default function LetterHoverText({ text }: { text: string }) {
  return (
    <h1
      className="
        flex
        leading-none
        tracking-[0.02em]
        text-[120px]
      "
    >
      {text.split("").map((letter, idx) => (
        <motion.span
          key={idx}
          className="inline-block origin-bottom"
          whileHover={{ scaleY: 1.3 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
}
