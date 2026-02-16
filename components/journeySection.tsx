"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, GraduationCap } from "lucide-react";

// ----------------------
// Types
// ----------------------

type TimelineType = "work" | "award" | "education";

type TimelineColor =
  | "red"
  | "yellow"
  | "blue"
  | "purple"
  | "green"
  | "indigo";

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
      "Leading frontend architecture for enterprise SaaS platform. Managing team of 5 developers and implementing design system.",
    achievements: [
      "Reduced bundle size by 40% through code splitting",
      "Implemented micro-frontend architecture",
      "Mentored 3 junior developers",
    ],
    logo: "🚀",
    color: "red",
  },
  {
    year: "2023",
    type: "award",
    title: "Best Developer Portfolio",
    company: "Awwwards",
    description:
      "Recognized for exceptional portfolio design and innovative use of WebGL and animations.",
    logo: "🏆",
    color: "yellow",
  },
  {
    year: "2022-2023",
    type: "work",
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "Remote",
    description:
      "Built and shipped multiple products from 0 to 1. Focused on performance optimization and user experience.",
    achievements: [
      "Shipped 3 major product releases",
      "Improved Core Web Vitals by 60%",
      "Built component library used across 5 products",
    ],
    logo: "💡",
    color: "blue",
  },
  {
    year: "2022",
    type: "education",
    title: "Advanced React Patterns",
    company: "Frontend Masters",
    description:
      "Completed advanced coursework in React architecture, performance optimization, and state management.",
    logo: "📚",
    color: "purple",
  },
  {
    year: "2021-2022",
    type: "work",
    title: "Junior Frontend Developer",
    company: "Digital Agency Co.",
    location: "New York, NY",
    description:
      "Developed responsive websites and web applications for various clients across different industries.",
    achievements: [
      "Delivered 15+ client projects on time",
      "Improved team workflow with custom CLI tools",
      "Achieved 98% client satisfaction rate",
    ],
    logo: "🎨",
    color: "green",
  },
  {
    year: "2021",
    type: "education",
    title: "B.S. Computer Science",
    company: "University Name",
    description:
      "Graduated with honors. Specialized in web technologies and human-computer interaction.",
    logo: "🎓",
    color: "indigo",
  },
];

// ----------------------
// Component
// ----------------------

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const colorMap: Record<TimelineColor, string> = {
    red: "bg-red-700",
    yellow: "bg-yellow-500",
    blue: "bg-blue-600",
    purple: "bg-purple-600",
    green: "bg-green-600",
    indigo: "bg-indigo-600",
  };

  return (
    <section ref={containerRef} className="bg-white py-32 px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-32"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-red-700 mb-8 origin-left"
          />

          <h2 className="text-[clamp(3rem,8vw,8rem)] font-black leading-none tracking-tight mb-6">
            Journey
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl">
            My professional path from student to senior developer, marked by
            continuous learning and impactful projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200">
            <motion.div
              className="w-full bg-red-700 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-24">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={`${item.year}-${index}`}
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
  const itemRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const getIcon = () => {
    switch (item.type) {
      case "work":
        return <Briefcase className="w-5 h-5" />;
      case "award":
        return <Award className="w-5 h-5" />;
      case "education":
        return <GraduationCap className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={itemRef}
      style={{ scale, opacity }}
      className={`relative grid md:grid-cols-2 gap-8 items-center ${
        isLeft ? "" : "md:direction-rtl"
      }`}
    >
      {/* Content */}
      <motion.div
        initial={{ x: isLeft ? -50 : 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`${isLeft ? "md:text-right" : "md:text-left"} ${
          isLeft ? "" : "md:order-2"
        }`}
      >
        {/* Year Badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`inline-block px-4 py-2 ${colorClass} text-white rounded-full font-bold text-sm mb-4`}
        >
          {item.year}
        </motion.div>

        {/* Title & Company */}
        <h3 className="text-3xl md:text-4xl font-black mb-2 text-gray-900">
          {item.title}
        </h3>

        <div className="flex items-center gap-2 text-lg text-gray-600 mb-4 justify-start md:justify-end">
          <span className="font-semibold">{item.company}</span>

          {item.location && (
            <>
              <span className="text-gray-400">•</span>
              <span>{item.location}</span>
            </>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-6 max-w-md ml-auto">
          {item.description}
        </p>

        {/* Achievements */}
        {item.achievements && (
          <ul className={`space-y-2 ${isLeft ? "md:items-end" : ""}`}>
            {item.achievements.map((achievement, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <span
                  className={`mt-1 w-1.5 h-1.5 ${colorClass} rounded-full flex-shrink-0`}
                />
                {achievement}
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>

      {/* Center Dot */}
      <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            type: "spring",
            stiffness: 200,
          }}
          className={`w-16 h-16 ${colorClass} rounded-full flex items-center justify-center text-white shadow-lg relative`}
        >
          <div className="text-2xl">{item.logo}</div>

          {/* Pulse Effect */}
          <motion.div
            className={`absolute inset-0 ${colorClass} rounded-full`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Icon */}
      <div className={`hidden md:block ${isLeft ? "md:order-2" : ""}`}>
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
          whileHover={{ rotate: 5, scale: 1.05 }}
          className={`w-32 h-32 ${colorClass} rounded-3xl flex items-center justify-center text-white shadow-xl ml-auto`}
        >
          {getIcon()}
        </motion.div>
      </div>
    </motion.div>
  );
}