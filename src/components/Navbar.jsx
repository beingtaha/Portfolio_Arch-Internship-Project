import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { color, setColor, darkMode, setDarkMode, colors } = useTheme();
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  const colorOptions = [
    {
      name: "Blue",
      value: "blue",
      class: "bg-blue-600",
      hoverClass: "hover:bg-blue-700",
    },
    {
      name: "Green",
      value: "green",
      class: "bg-green-600",
      hoverClass: "hover:bg-green-700",
    },
    {
      name: "Purple",
      value: "purple",
      class: "bg-purple-600",
      hoverClass: "hover:bg-purple-700",
    },
    {
      name: "Orange",
      value: "orange",
      class: "bg-orange-600",
      hoverClass: "hover:bg-orange-700",
    },
    {
      name: "Rose",
      value: "rose",
      class: "bg-rose-600",
      hoverClass: "hover:bg-rose-700",
    },
  ];

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsColorPickerOpen(false);
  };

  return (
    <nav
      className={`${darkMode ? "bg-gray-900" : "bg-white"} shadow-lg sticky top-0 z-50 transition-colors duration-300 border-b ${colors.border} border-opacity-30`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-xl font-bold ${colors.text} cursor-pointer`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Taha.dev
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } hover:${colors.primary} hover:bg-opacity-10`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            {/* Color Theme Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
                className={`flex items-center space-x-3 px-4 py-2 rounded-lg ${colors.primary} text-white font-medium shadow-md hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex -space-x-1">
                  {colorOptions.slice(0, 3).map((option) => (
                    <div
                      key={option.value}
                      className={`w-4 h-4 rounded-full ${option.class} border-2 border-white dark:border-gray-800`}
                    />
                  ))}
                </div>
                <span>Theme</span>
                <motion.svg
                  animate={{ rotate: isColorPickerOpen ? 180 : 0 }}
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {isColorPickerOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 min-w-[200px]"
                  >
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">
                      Choose Theme Color
                    </p>
                    <div className="grid grid-cols-5 gap-2">
                      {colorOptions.map((option) => (
                        <motion.button
                          key={option.value}
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => {
                            setColor(option.value);
                            setIsColorPickerOpen(false);
                          }}
                          className={`relative w-8 h-8 rounded-full ${option.class} ${
                            color === option.value
                              ? "ring-2 ring-offset-2 ring-gray-400"
                              : ""
                          }`}
                          title={option.name}
                        >
                          {color === option.value && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute inset-0 flex items-center justify-center text-white"
                            >
                              ✓
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-lg ${
                darkMode
                  ? "bg-gray-800 text-yellow-400 border border-gray-700"
                  : "bg-gray-100 text-gray-700 border border-gray-200"
              } transition-all duration-300`}
            >
              {darkMode ? "☀️" : "🌙"}
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
