import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [color, setColor] = useState("blue");
  const [darkMode, setDarkMode] = useState(false);

  const colors = {
    blue: {
      primary: "bg-blue-600",
      hover: "hover:bg-blue-700",
      text: "text-blue-600",
      border: "border-blue-600",
      light: "bg-blue-100",
      dark: {
        primary: "bg-blue-500",
        hover: "hover:bg-blue-600",
        text: "text-blue-400",
        border: "border-blue-500",
      },
    },
    green: {
      primary: "bg-green-600",
      hover: "hover:bg-green-700",
      text: "text-green-600",
      border: "border-green-600",
      light: "bg-green-100",
      dark: {
        primary: "bg-green-500",
        hover: "hover:bg-green-600",
        text: "text-green-400",
        border: "border-green-500",
      },
    },
    purple: {
      primary: "bg-purple-600",
      hover: "hover:bg-purple-700",
      text: "text-purple-600",
      border: "border-purple-600",
      light: "bg-purple-100",
      dark: {
        primary: "bg-purple-500",
        hover: "hover:bg-purple-600",
        text: "text-purple-400",
        border: "border-purple-500",
      },
    },
    orange: {
      primary: "bg-orange-600",
      hover: "hover:bg-orange-700",
      text: "text-orange-600",
      border: "border-orange-600",
      light: "bg-orange-100",
      dark: {
        primary: "bg-orange-500",
        hover: "hover:bg-orange-600",
        text: "text-orange-400",
        border: "border-orange-500",
      },
    },
    rose: {
      primary: "bg-rose-600",
      hover: "hover:bg-rose-700",
      text: "text-rose-600",
      border: "border-rose-600",
      light: "bg-rose-100",
      dark: {
        primary: "bg-rose-500",
        hover: "hover:bg-rose-600",
        text: "text-rose-400",
        border: "border-rose-500",
      },
    },
  };

  // ✅ currentColors YAHAN define kiya
  const currentColors = darkMode
    ? {
        ...colors[color],
        primary: colors[color].dark.primary,
        hover: colors[color].dark.hover,
        text: colors[color].dark.text,
        border: colors[color].dark.border,
        bg: "bg-gray-900",
        cardBg: "bg-gray-800",
        headingText: "text-white",
        bodyText: "text-gray-300",
        techBg: "bg-gray-700",
        techText: "text-gray-200",
        subheadingText: "text-gray-400",
      }
    : {
        ...colors[color],
        primary: colors[color].primary,
        hover: colors[color].hover,
        text: colors[color].text,
        border: colors[color].border,
        bg: "bg-gray-50",
        cardBg: "bg-white",
        headingText: "text-gray-900",
        bodyText: "text-gray-600",
        techBg: "bg-gray-100",
        techText: "text-gray-700",
        subheadingText: "text-gray-500",
      };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        color,
        setColor,
        darkMode,
        setDarkMode,
        colors: currentColors, // ✅ ab yeh sahi se pass ho raha hai
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
