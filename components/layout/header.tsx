"use client";

import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Home,
  User,
  Briefcase,
  MessageCircle,
  Menu,
  X
} from "lucide-react";
import UseSticky from "@lib/hooks/UseSticky";
import ScrollValueContext from "@lib/context/scrollValueContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // 🔒 Lock body scroll when menu is open
  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { label: "Home", targetId: "home", icon: Home },
    { label: "About", targetId: "about", icon: User },
    { label: "Projects", targetId: "projects", icon: Briefcase },
    { label: "Contact", targetId: "contact", icon: MessageCircle },
    { label: "Mail", targetId: "mail", icon: Mail }
  ];

  // Menu reveal animation
  const menuVariants = {
    hidden: {
      clipPath: "circle(0% at 100% 0%)",
      opacity: 0
    },
    visible: {
      clipPath: "circle(150% at 100% 0%)",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    },
    exit: {
      clipPath: "circle(0% at 100% 0%)",
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    }
  };

  // Item variants with stagger
  const itemVariants = {
    hidden: {
      y: 60,
      opacity: 0,
      filter: "blur(10px)"
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    },
    exit: {
      y: -60,
      opacity: 0,
      filter: "blur(10px)",
      transition: {
        duration: 0.4
      }
    }
  };

  const { sticky } = UseSticky();
  const { scrollValue } = useContext(ScrollValueContext);
  const logoColorMap: Record<number, string> = {
    2: "text-yellow-300"
  };
  const logoColor = logoColorMap[scrollValue] ?? "text-light";

  return (
    // ✅ FIX 2: Header wrapper uses z-[9999] and is always fixed/absolute on top.
    // Previously the menu overlay (z-30) was a sibling div that covered the
    // header's own top bar, hiding the hamburger/X button behind it.
    // Solution: keep the top bar at z-[9999] always, and drop the menu to z-[100]
    // so the header bar naturally stacks above it.
    <header
      className={`z-[9999] w-full bg-transparent transition-all duration-300 ease-in-out ${
        sticky
          ? "fixed top-0 backdrop-blur-md bg-black/20 shadow-md"
          : "absolute top-0"
      }`}
    >
      {/* ================= TOP BAR ================= */}
      {/* ✅ FIX 3: Give the top bar its own stacking context above the menu */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-[9999] flex items-center justify-between px-8 py-6 text-sm"
      >
        {/* Logo */}
        <motion.div
          className={`font-black text-3xl ${logoColor}`}
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          M
        </motion.div>

        {/* Hamburger / Close Button */}
        {/* ✅ FIX 3 cont: removed z-[800] from button — it's redundant now that
            the parent bar is z-[9999]. The old z-[800] was LOWER than the menu
            wrapper's effective stacking, which is why X was invisible. */}
        <motion.button
          onClick={() => setIsOpen((p) => !p)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative p-3 rounded-full hover:bg-white/20"
          aria-label={isOpen ? "Close menu" : "Open menu"}
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

      {/* ================= FULL SCREEN MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          // ✅ FIX 4: Menu lives at z-[100] — well above page content but BELOW
          // the header top bar (z-[9999]), so the X button is always reachable.
          // Removed the separate backdrop div that was also z-30 and overlapping
          // the button; clicking any non-nav area on the menu itself closes it.
          <motion.div
            className="fixed inset-0 z-[100] pointer-events-auto"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            // ✅ FIX 5: click-outside-to-close is now on the menu container itself.
            // We stop propagation on the <ul> so only true outside clicks dismiss.
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-[#7B0D1E]">
              {/* Floating shape */}
              <motion.div
                className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white/5"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Menu content */}
              <div className="relative min-h-full flex items-center justify-center">
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.12,
                        delayChildren: 0.3
                      }
                    },
                    exit: {
                      transition: {
                        staggerChildren: 0.08,
                        staggerDirection: -1
                      }
                    }
                  }}
                  className="space-y-6"
                  // Stop clicks on nav items from bubbling up to the close handler
                  onClick={(e) => e.stopPropagation()}
                >
                  {navItems.map(({ label, targetId, icon: Icon }, i) => (
                    <motion.li
                      key={i}
                      variants={itemVariants}
                      onHoverStart={() => setHoveredIndex(i)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      // onClick={() => handleScroll(targetId)}
                      className="cursor-pointer"
                    >
                      <motion.div
                        className="flex items-center gap-6 px-8 text-white text-2xl md:text-3xl font-black uppercase"
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          animate={{
                            scale: hoveredIndex === i ? 1.1 : 1
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          <Icon className="w-10 h-10" />
                        </motion.div>

                        <span className="relative">
                          {label.split("").map((c, ci) => (
                            <motion.span
                              key={ci}
                              className="inline-block"
                              animate={{
                                y: hoveredIndex === i ? [-10, 0] : 0
                              }}
                              transition={{
                                duration: 0.3,
                                delay: ci * 0.03
                              }}
                            >
                              {c}
                            </motion.span>
                          ))}

                          <motion.div
                            className="absolute left-0 bottom-2 h-3 bg-white/30"
                            animate={{
                              width: hoveredIndex === i ? "100%" : 0
                            }}
                            transition={{ duration: 0.4 }}
                          />
                        </span>

                        <motion.span
                          className="ml-auto text-xl font-light text-white/40"
                          animate={{
                            opacity: hoveredIndex === i ? 1 : 0.4,
                            x: hoveredIndex === i ? 10 : 0
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </motion.span>
                      </motion.div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
