import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Hero = () => {
  const { colors, darkMode } = useTheme();

  return (
    <div className={`${colors.bg} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className={`text-5xl font-bold mb-4 ${colors.text}`}>
            Taha Ahmed
          </h1>
          <p className={`text-xl ${colors.bodyText} mb-8`}>
            React JS Developer | Frontend Specialist
          </p>
          <button
            className={`${colors.primary} text-white px-6 py-3 rounded-lg ${colors.hover} transition-colors`}
          >
            View My Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
