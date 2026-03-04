import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Experience = () => {
  const { colors } = useTheme();

  const experiences = [
    {
      id: 1,
      title: "React JS Developer",
      company: "Appverse Internship & Freelancer",
      period: "12/2025 - Present | Remote",
      points: [
        "Built responsive web applications using React, JavaScript (ES6), HTML, CSS",
        "Developed dynamic forms, lists, and reusable UI components",
        "Implemented conditional rendering and state-based UI updates",
        "Practiced real-world scenarios including student management and product listing apps",
      ],
    },
    {
      id: 2,
      title: "Pricing Officer & Inventory Management",
      company: "Brisk Line LLC",
      period: "12/2022 - 09/2023 | Remote",
      points: [
        "Maintained and updated container inventory using Odoo ERP",
        "Coordinated container slot bookings with vessel operators through formal communication",
        "Negotiated rates to optimize costs",
        "Prepared inventory and utilization reports for internal stakeholders",
      ],
    },
    {
      id: 3,
      title: "Sr. Network Engineer & Help Desk",
      company: "PTCL Pvt Ltd",
      period: "08/2019 - 04/2021 | Remote",
      points: [
        "Monitored network systems using NMS",
        "Resolved connectivity and security issues for clients",
        "Handled correspondence and reported daily operations to GM, SM, and Managers",
        "Responded to customer inquiries through calls and emails, maintaining high service standards",
      ],
    },
    {
      id: 4,
      title: "Data Entry Operator",
      company: "Intrawide Pvt. Ltd",
      period: "2019 - 2023 | Remote",
      points: [
        "Performed high-volume data entry tasks with precision",
        "Maintained data accuracy and collaborated to meet project targets",
        "Worked on content management systems like WordPress",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`py-20 ${colors.bg} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-4 ${colors.headingText}`}
        >
          Work Experience
        </h2>
        <p className={`text-center ${colors.bodyText} mb-12 max-w-2xl mx-auto`}>
          My professional journey across different domains
        </p>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`${colors.cardBg} rounded-xl shadow-lg p-6 transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className={`text-xl font-bold ${colors.headingText}`}>
                  {exp.title}
                </h3>
                <span
                  className={`${colors.subheadingText} text-sm font-medium mt-1 md:mt-0`}
                >
                  {exp.period}
                </span>
              </div>
              <p className={`${colors.text} font-medium mb-3`}>{exp.company}</p>
              <ul className="list-disc list-inside space-y-1">
                {exp.points.map((point, index) => (
                  <li key={index} className={`${colors.bodyText} text-sm`}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
