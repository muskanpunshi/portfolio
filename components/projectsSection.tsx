"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ---------------- TYPES ----------------
type Project = {
  id: number;
  title: string;
  client: string;
  year: string;
  role: string;
  image: string;
  color: string;
  tech: string[];
};

// ---------------- DATA ----------------
const projects: Project[] = [
  {
    id: 1,
    title: "Luxury Fashion Brand",
    client: "NOIR Studios",
    year: "2024",
    role: "Lead Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    color: "#1a1a1a",
    tech: ["Next.js", "Three.js", "GSAP", "Shopify"],
  },
  {
    id: 2,
    title: "Financial Dashboard",
    client: "FinTech Inc",
    year: "2024",
    role: "Frontend Architect",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    color: "#0f172a",
    tech: ["React", "D3.js", "WebSockets", "Redis"],
  },
  {
    id: 3,
    title: "AI Content Platform",
    client: "CreativeAI",
    year: "2023",
    role: "Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    color: "#7c3aed",
    tech: ["Next.js", "OpenAI", "Prisma", "Tailwind"],
  },
  {
    id: 4,
    title: "Real Estate Portal",
    client: "PropertyHub",
    year: "2023",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    color: "#059669",
    tech: ["Vue.js", "Mapbox", "Node.js", "MongoDB"],
  },
  {
    id: 5,
    title: "Health & Wellness App",
    client: "WellCo",
    year: "2023",
    role: "Mobile Developer",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    color: "#dc2626",
    tech: ["React Native", "Firebase", "HealthKit"],
  },
];

// ---------------- MAIN COMPONENT ----------------
export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [xMax, setXMax] = useState(0);

  // Dynamically calculate scrollable width
  useEffect(() => {
    if (innerRef.current) {
      const totalWidth = innerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setXMax(totalWidth - viewportWidth);
    }
    const handleResize = () => {
      if (innerRef.current) {
        const totalWidth = innerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setXMax(totalWidth - viewportWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll-based horizontal transform
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -xMax]);

  return (
    <section ref={containerRef} className="bg-gray-900 text-white relative">
      {/* Sticky Header */}
      <div className="  px-8 py-16  border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-24 h-1 bg-red-700 mb-8 origin-left"
          />
          <h2 className="text-[clamp(3rem,8vw,7rem)] font-black leading-none tracking-tight">
            Project Showcase
          </h2>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl">
            Scroll to explore my recent work
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div style={{ height: `${projects.length * 100}vh` }}>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            ref={innerRef}
            className="flex gap-8 px-8"
            style={{ x }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------------- CARD COMPONENT ----------------
type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative shrink-0 w-[90vw] max-w-[1200px] h-[80vh] group"
    >
      <div className="relative h-full rounded-3xl overflow-hidden bg-gray-800">
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background: `linear-gradient(135deg, ${project.color}dd, ${project.color}99)`,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative h-full p-12 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-8xl font-black text-white/20"
            >
              {String(index + 1).padStart(2, "0")}
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-right"
            >
              <p className="text-sm uppercase tracking-wider text-white/60 mb-1">
                Client
              </p>
              <p className="text-xl font-bold">{project.client}</p>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.h3
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
            >
              {project.title}
            </motion.h3>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-6 text-lg"
            >
              <div>
                <p className="text-white/60 text-sm uppercase tracking-wider mb-1">
                  Year
                </p>
                <p className="font-semibold">{project.year}</p>
              </div>
              <div>
                <p className="text-white/60 text-sm uppercase tracking-wider mb-1">
                  Role
                </p>
                <p className="font-semibold">{project.role}</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <p className="text-sm uppercase tracking-wider text-white/60">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-bold hover:gap-4 transition-all"
            >
              View Case Study
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Border Hover */}
        <motion.div
          className="absolute inset-0 border-2 border-white/20 rounded-3xl pointer-events-none"
          whileHover={{ boxShadow: "0 0 40px rgba(255,255,255,0.2)" }}
        />
      </div>
    </motion.div>
  );
}
