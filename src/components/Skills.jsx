import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Skills = () => {
  const { colors } = useTheme();

  const skillCategories = [
    {
      id: 1,
      category: "Development & Frontend",
      skills: [
        "React.js",
        "JavaScript (ES6)",
        "HTML",
        "CSS",
        "Git",
        "Frontend Development",
      ],
    },
    {
      id: 2,
      category: "ERP & System Analysis",
      skills: [
        "Odoo ERP",
        "Business Process Understanding",
        "Data Management",
        "Reporting",
      ],
    },
    {
      id: 3,
      category: "Networking & IT Support",
      skills: [
        "Network Monitoring (NMS)",
        "Troubleshooting",
        "Customer Support",
        "System Security",
      ],
    },
    {
      id: 4,
      category: "Tools & Platforms",
      skills: [
        "MS Office",
        "WordPress",
        "Basic SQL",
        "Cross-functional Coordination",
      ],
    },
    {
      id: 5,
      category: "Soft Skills",
      skills: [
        "Communication",
        "Problem-Solving",
        "Analytical Thinking",
        "Adaptability",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 ${colors.bg} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-4 ${colors.headingText}`}
        >
          Skills & Expertise
        </h2>
        <p className={`text-center ${colors.bodyText} mb-12 max-w-2xl mx-auto`}>
          Technical and professional competencies I bring to the table
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className={`${colors.cardBg} rounded-xl shadow-lg p-6 transition-all duration-300`}
            >
              <h3
                className={`text-lg font-bold mb-4 ${colors.headingText} border-b-2 ${colors.border} pb-2`}
              >
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`inline-flex items-center px-3 py-1.5 ${colors.techBg} ${colors.techText} text-xs rounded-full font-medium`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${colors.primary} mr-1.5`}
                    ></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
