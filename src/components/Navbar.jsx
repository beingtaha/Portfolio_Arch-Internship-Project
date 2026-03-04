import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const { color, setColor, darkMode, setDarkMode, colors } = useTheme();

  const colorOptions = [
    { name: "Blue", value: "blue", class: "bg-blue-600" },
    { name: "Green", value: "green", class: "bg-green-600" },
    { name: "Purple", value: "purple", class: "bg-purple-600" },
    { name: "Orange", value: "orange", class: "bg-orange-600" },
    { name: "Rose", value: "rose", class: "bg-rose-600" },
  ];

  return (
    <nav
      className={`${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div
            className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Taha.dev
          </div>

          <div className="flex items-center space-x-4">
            {/* Color Options */}
            <div className="flex space-x-2">
              {colorOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setColor(option.value)}
                  className={`w-8 h-8 rounded-full ${option.class} ${
                    color === option.value
                      ? "ring-2 ring-offset-2 ring-gray-400"
                      : ""
                  }`}
                  title={option.name}
                />
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-700 text-yellow-400"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
