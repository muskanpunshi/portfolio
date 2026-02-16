"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Home, User, Briefcase, MessageCircle, Menu, X } from "lucide-react";

export default function TopMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { label: "Home", targetId: "home", icon: Home },
    { label: "About", targetId: "about", icon: User },
    { label: "Projects", targetId: "projects", icon: Briefcase },
    { label: "Contact", targetId: "contact", icon: MessageCircle },
    { label: "Mail", targetId: "mail", icon: Mail },
  ];

const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  // Menu container variants
  const menuVariants = {
  hidden: {
    clipPath: "circle(0% at 100% 0%)",
    opacity: 0,
  },
  visible: {
    clipPath: "circle(150% at 100% 0%)",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
  exit: {
    clipPath: "circle(0% at 100% 0%)",
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};


  // Item variants with stagger
  const itemVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: { 
      y: 0, 
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      }
    },
    exit: {
      y: -60,
      opacity: 0,
      filter: "blur(10px)",
      transition: {
        duration: 0.4,
      }
    }
  };

  return (
    <>
      {/* Top Bar */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-6 text-sm z-50 "
      >
        {/* Logo */}
        <motion.div 
          className="font-black text-3xl tracking-widest text-white"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          M
        </motion.div>

        {/* Hamburger Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Menu Background */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="fixed inset-0 bg-[#7B0D1E] z-40"
            >
              {/* Animated Background Pattern */}
              <motion.div
                className="absolute inset-0 opacity-5"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, #fff 25%, transparent 25%),
                    linear-gradient(-45deg, #fff 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #fff 75%),
                    linear-gradient(-45deg, transparent 75%, #fff 75%)
                  `,
                  backgroundSize: "60px 60px",
                  backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
                }}
              />

              {/* Floating Shapes */}
              <motion.div
                className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white/5"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Menu Content */}
              <div className="relative h-full flex items-center justify-center">
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: { 
                      transition: { 
                        staggerChildren: 0.12, 
                        delayChildren: 0.3,
                      } 
                    },
                    exit: {
                      transition: {
                        staggerChildren: 0.08,
                        staggerDirection: -1,
                      }
                    }
                  }}
                  className="space-y-6"
                >
                  {navItems.map(({ label, targetId, icon: Icon }, i) => (
                    <motion.li
                      key={i}
                      variants={itemVariants}
                      onHoverStart={() => setHoveredIndex(i)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      className="relative cursor-pointer overflow-hidden"
                      onClick={() => handleScroll(targetId)}
                    >
                      <motion.div
                        className="flex items-center gap-6 text-white text-5xl md:text-7xl font-black uppercase group px-8"
                        whileHover={{ x: 20 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Icon */}
                        <motion.div
                          animate={{
                            rotate: hoveredIndex === i ? 360 : 0,
                            scale: hoveredIndex === i ? 1.2 : 1,
                          }}
                          transition={{ duration: 0.6 }}
                          className="relative"
                        >
                          <Icon className="w-12 h-12 md:w-16 md:h-16" />
                          
                          {/* Glow effect */}
                          {hoveredIndex === i && (
                            <motion.div
                              className="absolute inset-0 bg-white rounded-full blur-xl"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 0.3 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                        </motion.div>

                        {/* Label */}
                        <span className="relative">
                          {label.split("").map((char, charIndex) => (
                            <motion.span
                              key={charIndex}
                              className="inline-block"
                              animate={{
                                y: hoveredIndex === i ? [-5, 0] : 0,
                              }}
                              transition={{
                                duration: 0.3,
                                delay: charIndex * 0.03,
                              }}
                            >
                              {char}
                            </motion.span>
                          ))}

                          {/* Underline */}
                          <motion.div
                            className="absolute left-0 -bottom-2 h-1 bg-white"
                            initial={{ width: 0 }}
                            animate={{
                              width: hoveredIndex === i ? "100%" : 0,
                            }}
                            transition={{ duration: 0.4 }}
                          />
                        </span>

                        {/* Number indicator */}
                        <motion.span
                          className="ml-auto text-2xl font-light text-white/40"
                          animate={{
                            opacity: hoveredIndex === i ? 1 : 0.4,
                            x: hoveredIndex === i ? 10 : 0,
                          }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </motion.span>
                      </motion.div>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Bottom Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-12 left-0 right-0 flex justify-between px-12 text-white/60 text-sm"
                >
                  <div>
                    <p>Available for freelance work</p>
                  </div>
                  <div className="flex gap-8">
                    <motion.a 
                      href="#" 
                      whileHover={{ color: "#fff" }}
                      className="hover:underline"
                    >
                      LinkedIn
                    </motion.a>
                    <motion.a 
                      href="#" 
                      whileHover={{ color: "#fff" }}
                      className="hover:underline"
                    >
                      GitHub
                    </motion.a>
                    <motion.a 
                      href="#" 
                      whileHover={{ color: "#fff" }}
                      className="hover:underline"
                    >
                      Twitter
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Overlay Click Handler */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
