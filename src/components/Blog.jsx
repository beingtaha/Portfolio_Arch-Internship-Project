import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Blog = () => {
  const { colors } = useTheme();

  const articles = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      platform: "Medium",
      date: "Jan 2026",
      description:
        "A beginner's guide to understanding useState, useEffect, and custom hooks",
      link: "https://medium.com/@tahaahmed/react-hooks-guide", // Replace with actual link
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Building Reusable Components in React",
      platform: "Dev.to",
      date: "Feb 2026",
      description:
        "Best practices for creating maintainable and reusable UI components",
      link: "https://dev.to/beingtaha/react-components", // Replace with actual link
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Understanding Tailwind CSS Dark Mode",
      platform: "Hashnode",
      date: "Mar 2026",
      description: "Implementing dark mode with Tailwind CSS and React Context",
      link: "https://beingtaha.hashnode.dev/tailwind-dark-mode", // Replace with actual link
      readTime: "4 min read",
    },
  ];

  return (
    <section
      id="blog"
      className={`py-20 ${colors.bg} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-4 ${colors.headingText}`}
        >
          Blog & Articles
        </h2>
        <p className={`text-center ${colors.bodyText} mb-12 max-w-2xl mx-auto`}>
          Sharing knowledge and experiences through writing
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${colors.cardBg} rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`${colors.text} text-sm font-medium`}>
                  {article.platform}
                </span>
                <span className={`${colors.subheadingText} text-xs`}>
                  {article.date}
                </span>
              </div>

              <h3 className={`text-lg font-bold mb-2 ${colors.headingText}`}>
                {article.title}
              </h3>

              <p className={`${colors.bodyText} text-sm mb-4`}>
                {article.description}
              </p>

              <div className="flex items-center justify-between">
                <span className={`${colors.subheadingText} text-xs`}>
                  {article.readTime}
                </span>
                <span
                  className={`${colors.text} text-sm font-medium inline-flex items-center`}
                >
                  Read Article
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Note: Agar actual articles nahi hain to yeh placeholder dikhega */}
        {articles.length === 0 && (
          <div
            className={`text-center ${colors.cardBg} rounded-xl shadow-lg p-8`}
          >
            <p className={`${colors.bodyText}`}>
              Coming soon! I'm working on some interesting articles about React
              and web development.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
