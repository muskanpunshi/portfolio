"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Framer Motion", level: 80 },
];

export default function AboutSection() {
  return (
    <section
      id="intro"
      className="h-screen flex flex-col justify-center px-8 bg-white text-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="  mb-6 text-[clamp(5rem,8vw,8rem)]">About Me</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Hi! I’m <span className="font-semibold">XYZ</span>, a Frontend
          Developer passionate about crafting interactive and visually appealing
          web experiences.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          I specialize in <span className="font-semibold">Next.js, React, Tailwind CSS</span> and enjoy integrating
          smooth animations using <span className="font-semibold">Framer Motion</span>. I thrive in creative, collaborative
          environments where design meets code.
        </p>

        {/* Skills Bars */}
        <div className="space-y-4">
          {skills.map((skill, i) => (
            <div key={i}>
              <p className="font-semibold mb-1">{skill.name}</p>
              <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="bg-red-700 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, delay: i * 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
