import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

const Footer = () => {
  const { colors, darkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "#" },
        { name: "Projects", href: "#projects" },
        { name: "Education", href: "#education" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Projects",
      links: [
        {
          name: "Islamic Guide",
          href: "https://islamic-guide-web.vercel.app/",
        },
        {
          name: "E-Commerce",
          href: "https://ecommerce-website-react-dusky.vercel.app/",
        },
        {
          name: "Todo App",
          href: "https://todo-list-app-appverse-internship-p.vercel.app/",
        },
        {
          name: "Weather App",
          href: "https://weather-dashboard-appverse-internsh.vercel.app/",
        },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "GitHub", href: "https://github.com/beingtaha" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/tahaa-ahmed/" },
        { name: "Email", href: "mailto:tahaahmed434@gmail.com" },
        { name: "Portfolio", href: "https://taha-portfolio-gold.vercel.app/" },
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`${darkMode ? "bg-gray-900" : "bg-gray-100"} border-t ${colors.border} border-opacity-30 transition-colors duration-300`}
    >
      {/* Scroll to Top Button */}
      <div className="flex justify-center -mt-6">
        <motion.button
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`${colors.primary} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${colors.text}`}>
              Taha Ahmed
            </h3>
            <p className={`${colors.bodyText} text-sm mb-4`}>
              IT Professional | React JS Developer | Frontend Specialist
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/beingtaha"
                target="_blank"
                rel="noopener noreferrer"
                className={`${colors.bodyText} hover:${colors.text} transition`}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/tahaa-ahmed/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${colors.bodyText} hover:${colors.text} transition`}
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className={`font-semibold mb-3 ${colors.headingText}`}>
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`${colors.bodyText} hover:${colors.text} text-sm transition inline-block`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 mt-8 border-t ${colors.border} border-opacity-30 flex flex-col md:flex-row justify-between items-center`}
        >
          <p className={`${colors.bodyText} text-sm`}>
            © {currentYear} Taha Ahmed. All rights reserved.
          </p>
          <p className={`${colors.bodyText} text-sm mt-2 md:mt-0`}>
            Built with React, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
