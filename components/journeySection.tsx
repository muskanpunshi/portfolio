"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, GraduationCap } from "lucide-react";

// ----------------------
// Types
// ----------------------

type TimelineType = "work" | "award" | "education";
type TimelineColor = "red" | "yellow" | "blue" | "purple" | "green" | "indigo";

interface TimelineItemData {
  year: string;
  type: TimelineType;
  title: string;
  company: string;
  location?: string;
  description: string;
  achievements?: string[];
  logo: string;
  color: TimelineColor;
}

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
  isLeft: boolean;
  colorClass: string;
}

// ----------------------
// Data
// ----------------------

const timelineData: TimelineItemData[] = [
  {
    year: "2024",
    type: "work",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    description:
      "Leading frontend architecture for enterprise SaaS platform. Managing team of 5 developers and implementing design systems.",
    achievements: [
      "Reduced bundle size by 40%",
      "Implemented micro-frontends",
      "Mentored junior developers"
    ],
    logo: "🚀",
    color: "red"
  },
  {
    year: "2023",
    type: "award",
    title: "Best Developer Portfolio",
    company: "Awwwards",
    description:
      "Recognized for exceptional portfolio design and creative frontend engineering.",
    logo: "🏆",
    color: "yellow"
  },
  {
    year: "2022-2023",
    type: "work",
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "Remote",
    description:
      "Built multiple products from scratch with a strong focus on performance and UX.",
    achievements: [
      "Shipped 3 major releases",
      "Improved Core Web Vitals by 60%",
      "Created shared component library"
    ],
    logo: "💡",
    color: "blue"
  },
  {
    year: "2022",
    type: "education",
    title: "Advanced React Patterns",
    company: "Frontend Masters",
    description:
      "Advanced coursework in React architecture and performance optimization.",
    logo: "📚",
    color: "purple"
  },
  {
    year: "2021",
    type: "education",
    title: "B.S. Computer Science",
    company: "University Name",
    description:
      "Graduated with honors. Specialized in web technologies.",
    logo: "🎓",
    color: "indigo"
  }
];

// ----------------------
// Component
// ----------------------

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax background movement
const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  // Timeline line growth
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const colorMap: Record<TimelineColor, string> = {
    red: "bg-red-600",
    yellow: "bg-yellow-500",
    blue: "bg-blue-600",
    purple: "bg-purple-600",
    green: "bg-green-600",
    indigo: "bg-indigo-600"
  };

  return (
    <section
      ref={containerRef}
      className="relative py-40 px-6 overflow-hidden bg-neutral-950 text-white"
    >
      {/* ---------------- PARALLAX BACKGROUND ---------------- */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.05),transparent_40%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 to-neutral-950" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        {/* ---------------- HEADER ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-40"
        >
          <h2 className="text-[clamp(3rem,8vw,7rem)] font-black tracking-tight">
            Journey
          </h2>
          <div className="w-24 h-1 bg-red-600 mt-6 mb-8" />
          <p className="text-lg text-neutral-400 max-w-2xl">
            A timeline of growth, learning, and meaningful work.
          </p>
        </motion.div>

        {/* ---------------- TIMELINE ---------------- */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-neutral-700">
            <motion.div
              style={{ height: lineHeight }}
              className="origin-top w-full bg-gradient-to-b from-red-500 via-red-400 to-transparent shadow-[0_0_20px_rgba(239,68,68,0.7)]"
            />
          </div>

          <div className="space-y-32">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isLeft={index % 2 === 0}
                colorClass={colorMap[item.color]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------------
// Timeline Item
// ----------------------

function TimelineItem({ item, index, isLeft, colorClass }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const iconMap = {
    work: <Briefcase />,
    award: <Award />,
    education: <GraduationCap />
  };

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={`relative grid md:grid-cols-2 gap-12 items-center`}
    >
      {/* Content Card */}
      <motion.div
        whileHover={{ y: -6 }}
        className={`relative rounded-3xl p-10 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] ${
          isLeft ? "md:text-right" : ""
        }`}
      >
        <span
          className={`inline-block mb-4 px-4 py-1 text-sm font-bold rounded-full ${colorClass}`}
        >
          {item.year}
        </span>

        <h3 className="text-3xl font-extrabold tracking-tight mb-2">
          {item.title}
        </h3>

        <p className="italic text-neutral-400 mb-6">
          {item.company} {item.location && `• ${item.location}`}
        </p>

        <p className="text-neutral-300 leading-relaxed mb-6">
          {item.description}
        </p>

        {item.achievements && (
          <ul className="space-y-2 text-sm text-neutral-400">
            {item.achievements.map((a, i) => (
              <li key={i}>• {a}</li>
            ))}
          </ul>
        )}
      </motion.div>

      {/* Center Dot */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
          className={`w-16 h-16 rounded-full ${colorClass} flex items-center justify-center shadow-xl`}
        >
          <span className="text-2xl">{item.logo}</span>

          {/* Shockwave */}
          <motion.div
            initial={{ scale: 1, opacity: 0.5 }}
            whileInView={{ scale: 1.8, opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`absolute inset-0 rounded-full ${colorClass}`}
          />
        </motion.div>
      </div>

      {/* Icon Box */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ rotate: -5, scale: 1.1 }}
        className={`hidden md:flex w-32 h-32 rounded-3xl ${colorClass} items-center justify-center text-white shadow-2xl ${
          isLeft ? "md:order-2 ml-auto" : ""
        }`}
      >
        {iconMap[item.type]}
      </motion.div>
    </motion.div>
  );
}
