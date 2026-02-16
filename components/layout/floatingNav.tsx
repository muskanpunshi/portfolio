"use client";

import { motion } from "framer-motion";
import { Mail, Home, User, Briefcase, MessageCircle } from "lucide-react";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";

type NavItem = {
  icon: LucideIcon;
  targetId: string;
  label: string;
};

export const FloatingNav: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Define icons and their corresponding section IDs
  const navItems: NavItem[] = [
    { icon: Home, targetId: "home", label: "Home" },
    { icon: User, targetId: "about", label: "About" },
    { icon: Briefcase, targetId: "projects", label: "Projects" },
    { icon: MessageCircle, targetId: "contact", label: "Contact" },
    { icon: Mail, targetId: "mail", label: "Mail" },
  ];

  const handleScroll = (id: string, index: number): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveIndex(index);
    }
  };

  return (
    <motion.nav
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50"
    >
      <div className="relative flex flex-col gap-2 bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-3 shadow-lg">
        {/* Active Indicator Background */}
        <motion.div
          className="absolute left-3 w-[calc(100%-24px)] h-11 bg-[#7B0D1E] rounded-xl z-0"
          animate={{ y: activeIndex * 52 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {/* Navigation Items */}
        {navItems.map(({ icon: Icon, targetId, label }, i) => (
          <motion.button
            key={targetId}
            onClick={() => handleScroll(targetId, i)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.6 + i * 0.1,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative z-10 p-2.5 rounded-xl transition-all duration-300 group
              ${activeIndex === i ? "text-white" : "text-gray-700"}
            `}
            aria-label={label}
          >
            <Icon
              className={`w-5 h-5 transition-all duration-300 ${
                activeIndex === i ? "scale-110" : ""
              }`}
            />

            {/* Tooltip */}
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {label}
              <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[4px] border-l-gray-900" />
            </motion.span>
          </motion.button>
        ))}

        {/* Decorative Pulse Animation */}
        <motion.div
          className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#7B0D1E]/20 to-purple-500/20 blur-lg -z-10"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.nav>
  );
};
