// "use client";

// import { motion } from "framer-motion";
// import { Code, Calendar, Globe } from "lucide-react";
// import { useEffect, useState } from "react";

// const stats = [
//   { icon: Code, label: "Projects", value: 15 },
//   { icon: Calendar, label: "Years Experience", value: 2 },
//   { icon: Globe, label: "Languages", value: 3 },
// ];

// export default function ProjectsSection() {
//   const [counts, setCounts] = useState([0, 0, 0]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounts((prev) =>
//         prev.map((v, i) => (v < stats[i].value ? v + 1 : v))
//       );
//       if (counts.every((v, i) => v >= stats[i].value)) clearInterval(interval);
//     }, 150);
//     return () => clearInterval(interval);
//   }, [counts]);

//   return (
//     <section
//       id="projects"
//       className="min-h-screen flex flex-col justify-center px-8 bg-white text-gray-900"
//     >
//       <h2 className="text-4xl font-bold mb-12 text-center">Fun Facts / Stats</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
//         {stats.map(({ icon: Icon, label }, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: i * 0.2 }}
//             className="flex flex-col items-center"
//           >
//             <Icon className="w-10 h-10 text-red-700 mb-2" />
//             <p className="text-3xl font-bold">{counts[i]}+</p>
//             <p className="text-gray-600">{label}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code, Eye, Github, Play } from "lucide-react";

// ================= Types =================

type Experiment = {
  id: number;
  title: string;
  description: string;
  category: string;
  tech: string[];
  preview: string;
  demoUrl: string;
  codeUrl: string;
  featured: boolean;
};

type ExperimentProps = {
  experiment: Experiment;
  index: number;
};

// ================= Data =================

const experiments: Experiment[] = [
  {
    id: 1,
    title: "Particle System",
    description:
      "Interactive particle physics simulation with gravitational forces",
    category: "WebGL",
    tech: ["Three.js", "GLSL", "React"],
    preview:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
    demoUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Fluid Simulation",
    description: "Real-time fluid dynamics using GPU shaders",
    category: "Creative Coding",
    tech: ["WebGL", "GLSL", "Canvas"],
    preview:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
    demoUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Audio Visualizer",
    description: "Frequency-reactive 3D visualization",
    category: "Audio",
    tech: ["Web Audio API", "Three.js"],
    preview:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80",
    demoUrl: "#",
    codeUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Generative Art",
    description: "Algorithmic pattern generation with user interaction",
    category: "Creative Coding",
    tech: ["p5.js", "JavaScript"],
    preview:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&q=80",
    demoUrl: "#",
    codeUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Physics Engine",
    description: "2D rigid body physics from scratch",
    category: "Algorithm",
    tech: ["JavaScript", "Canvas"],
    preview:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
    demoUrl: "#",
    codeUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Neural Network Viz",
    description: "Real-time neural network training visualization",
    category: "AI/ML",
    tech: ["TensorFlow.js", "D3.js"],
    preview:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    demoUrl: "#",
    codeUrl: "#",
    featured: false,
  },
];

// ================= Component =================

export default function ExperimentalLab() {
  const [filter, setFilter] = useState<string>("all");

  const categories: string[] = [
    "all",
    "WebGL",
    "Creative Coding",
    "Audio",
    "Algorithm",
    "AI/ML",
  ];

  const filteredExperiments =
    filter === "all"
      ? experiments
      : experiments.filter((exp) => exp.category === filter);

  return (
    <section className="bg-gray-900 text-white py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h2 className="text-[clamp(3rem,8vw,8rem)] font-black leading-none tracking-tight mb-6">
                Blogs
              </h2>
              <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-red-700 mb-8 origin-left"
          />

              <p className="text-xl text-gray-400 max-w-2xl">
                Experimental projects and creative coding explorations. A
                playground for learning and pushing boundaries.
              </p>
            </div>

            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === category
                      ? "bg-red-700 text-white"
                      : "bg-white/5 text-gray-400 hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Featured Experiments */}
        <div className="mb-12 grid md:grid-cols-2 gap-6">
          {filteredExperiments
            .filter((exp) => exp.featured)
            .map((experiment, index) => (
              <FeaturedExperiment
                key={experiment.id}
                experiment={experiment}
                index={index}
              />
            ))}
        </div>

        {/* Grid of Experiments */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiments
            .filter((exp) => !exp.featured)
            .map((experiment, index) => (
              <ExperimentCard
                key={experiment.id}
                experiment={experiment}
                index={index}
              />
            ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6">
            More experiments on GitHub and CodePen
          </p>
          <div className="flex gap-4 justify-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-white/20 rounded-full font-semibold flex items-center gap-2 hover:bg-white/5"
            >
              <Code className="w-5 h-5" />
              CodePen Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ================= Sub Components =================

function FeaturedExperiment({ experiment, index }: ExperimentProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-[400px] rounded-2xl overflow-hidden bg-gray-800"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${experiment.preview})` }}
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.6 }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-20 h-20 bg-red-700 rounded-full flex items-center justify-center shadow-2xl"
        >
          <Play className="w-8 h-8 text-white ml-1" fill="white" />
        </motion.button>
      </motion.div>

      <div className="relative h-full p-8 flex flex-col justify-between">
        <span className="inline-block px-3 py-1 bg-red-700 rounded-full text-xs font-bold uppercase tracking-wider">
          {experiment.category}
        </span>

        <div>
          <h3 className="text-3xl font-black mb-3">{experiment.title}</h3>
          <p className="text-gray-300 mb-4">{experiment.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {experiment.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            <a
              href={experiment.demoUrl}
              className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors"
            >
              <Eye className="w-4 h-4" />
              Live Demo
            </a>

            <a
              href={experiment.codeUrl}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ExperimentCard({ experiment, index }: ExperimentProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-[300px] rounded-xl overflow-hidden bg-gray-800"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${experiment.preview})` }}
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.4 }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      <div className="relative h-full p-6 flex flex-col justify-between">
        <span className="inline-block self-start px-2 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded text-xs">
          {experiment.category}
        </span>

        <div>
          <h4 className="text-xl font-bold mb-2">{experiment.title}</h4>
          <p className="text-sm text-gray-300 mb-3 line-clamp-2">
            {experiment.description}
          </p>

          <div className="flex gap-2">
            <motion.a
              href={experiment.demoUrl}
              whileHover={{ scale: 1.05 }}
              className="flex-1 px-3 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium text-center hover:bg-gray-100"
            >
              Demo
            </motion.a>

            <motion.a
              href={experiment.codeUrl}
              whileHover={{ scale: 1.05 }}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg"
            >
              <Code className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
