"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [xMax, setXMax] = useState(0);

  // Calculate total horizontal scroll width
  useEffect(() => {
    const calculateXMax = () => {
      if (innerRef.current && containerRef.current) {
        const totalWidth = innerRef.current.scrollWidth;
        const viewportWidth = containerRef.current.clientWidth;
        setXMax(totalWidth - viewportWidth);
      }
    };

    calculateXMax();
    window.addEventListener("resize", calculateXMax);
    return () => window.removeEventListener("resize", calculateXMax);
  }, []);

  // Map vertical scroll to horizontal translation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -xMax]);

  return (
    <section
      ref={containerRef}
      className="relative bg-gray-900 text-white"
      // style={{ height: xMax + window.innerHeight }}
    >
      {/* Header */}
      <div className="px-8 py-16 sticky top-0 z-20 bg-gray-900">
        <h2 className="text-5xl font-black mb-4">Project Showcase</h2>
        <p className="text-gray-400">Scroll to explore my recent work</p>
      </div>

      {/* Horizontal scroll area */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          ref={innerRef}
          className="flex gap-8 px-8 min-w-max"
          style={{ x }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="w-[90vw] max-w-[1200px] h-[80vh] flex-shrink-0 rounded-3xl overflow-hidden relative bg-gray-800">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `linear-gradient(135deg, ${project.color}dd, ${project.color}99)`,
        }}
      />
      {/* Content */}
      <div className="relative h-full p-12 flex flex-col justify-between text-white">
        <div>
          <p className="uppercase text-sm text-white/60">{project.client}</p>
          <h3 className="text-4xl font-black">{project.title}</h3>
        </div>
        <div className="flex gap-6 text-sm uppercase tracking-wider text-white/70">
          <p>Year: {project.year}</p>
          <p>Role: {project.role}</p>
        </div>
      </div>
    </div>
  );
}
