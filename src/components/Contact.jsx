import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Contact = () => {
  const { colors } = useTheme();

  return (
    <section
      id="contact"
      className={`py-20 ${colors.bg} transition-colors duration-300`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-4 ${colors.headingText}`}
        >
          Get In Touch
        </h2>
        <p className={`text-center ${colors.bodyText} mb-12 max-w-2xl mx-auto`}>
          Interested in working together? Let's connect!
        </p>

        <div
          className={`${colors.cardBg} rounded-xl shadow-lg p-8 transition-all duration-300`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3
                className={`text-lg font-semibold mb-4 ${colors.headingText}`}
              >
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span
                    className={`w-8 h-8 rounded-full ${colors.primary} flex items-center justify-center text-white mr-3`}
                  >
                    📧
                  </span>
                  <a
                    href="mailto:tahaahmed434@gmail.com"
                    className={`${colors.bodyText} hover:${colors.text} transition`}
                  >
                    tahaahmed434@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span
                    className={`w-8 h-8 rounded-full ${colors.primary} flex items-center justify-center text-white mr-3`}
                  >
                    📱
                  </span>
                  <a
                    href="tel:+923162020727"
                    className={`${colors.bodyText} hover:${colors.text} transition`}
                  >
                    +92 316-2020727
                  </a>
                </div>
                <div className="flex items-center">
                  <span
                    className={`w-8 h-8 rounded-full ${colors.primary} flex items-center justify-center text-white mr-3`}
                  >
                    📍
                  </span>
                  <span className={`${colors.bodyText}`}>
                    Karachi, Pakistan
                  </span>
                </div>
                <div className="flex items-center">
                  <span
                    className={`w-8 h-8 rounded-full ${colors.primary} flex items-center justify-center text-white mr-3`}
                  >
                    🔗
                  </span>
                  <a
                    href="https://www.linkedin.com/in/tahaa-ahmed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${colors.bodyText} hover:${colors.text} transition`}
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3
                className={`text-lg font-semibold mb-4 ${colors.headingText}`}
              >
                Quick Links
              </h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/beingtaha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block ${colors.bodyText} hover:${colors.text} transition`}
                >
                  ⭐ GitHub: @beingtaha
                </a>
                <a
                  href="https://taha-portfolio-gold.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block ${colors.bodyText} hover:${colors.text} transition`}
                >
                  🌐 Portfolio Website
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className={`${colors.bodyText} text-sm`}>
              Available for freelance work and internship opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
