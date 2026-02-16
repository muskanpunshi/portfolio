import { motion, useScroll, useTransform } from "framer-motion";


const ProjectCard = ({ title }: { title: string }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition"
    >
      <div className="h-40 rounded-xl bg-gradient-to-br from-emerald-100 to-indigo-100 mb-4" />

      <h3 className="font-semibold text-lg group-hover:text-emerald-600 transition">
        {title}
      </h3>

      <p className="text-sm text-gray-500 mt-2">Next.js • Tailwind • Framer</p>
    </motion.div>
  );
}
export default ProjectCard;
