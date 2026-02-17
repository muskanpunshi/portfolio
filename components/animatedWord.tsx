import { motion } from "framer-motion";

export default function LetterHoverText({ text }: { text: string }) {
  return (
    <h1
      className="
        flex
        leading-none
        tracking-[0.06em]
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
//           whileHover={{
//   y: -8,
//   opacity: 0.95,
// }}
// transition={{
//   duration: 0.4,
//   ease: [0.22, 1, 0.36, 1],
// }}
        >
          <h1 className="flex leading-none  text-[112px]">{letter}</h1>
          
        </motion.span>
      ))}
    </h1>
  );
}
