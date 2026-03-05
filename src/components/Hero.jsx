import React, { useEffect, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import Typed from "typed.js";

const Hero = () => {
  const { colors } = useTheme();
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "React JS Developer",
        "Frontend Specialist",
        "ERP System Analyst",
        "Network Engineer",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className={`${colors.bg} transition-colors duration-300 min-h-[90vh] flex items-center`}
    >
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`text-6xl md:text-7xl font-bold mb-6 ${colors.text}`}
          >
            Taha Ahmed
          </motion.h1>

          {/* Typed Animation Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-2xl md:text-3xl mb-8 h-16"
          >
            <span className={`${colors.bodyText}`}>I'm a </span>
            <span ref={typedRef} className={`font-bold ${colors.text}`}></span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`${colors.bodyText} max-w-2xl mx-auto mb-10 text-lg`}
          >
            IT Professional with diverse expertise in Frontend Development, ERP
            Systems, Network Engineering, and Data Management.
          </motion.p>

          {/* Animated Button */}
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${colors.primary} text-white px-8 py-4 rounded-lg ${colors.hover} transition-colors text-lg font-semibold shadow-lg hover:shadow-xl`}
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </motion.button>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex justify-center space-x-6 mt-12"
          >
            <a
              href="https://github.com/beingtaha"
              target="_blank"
              rel="noopener noreferrer"
              className={`${colors.bodyText} hover:${colors.text} transition transform hover:scale-110`}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tahaa-ahmed/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${colors.bodyText} hover:${colors.text} transition transform hover:scale-110`}
            >
              LinkedIn
            </a>
            <a
              href="mailto:tahaahmed434@gmail.com"
              className={`${colors.bodyText} hover:${colors.text} transition transform hover:scale-110`}
            >
              Email
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
