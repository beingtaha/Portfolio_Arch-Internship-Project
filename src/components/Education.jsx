import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Education = () => {
  const { colors } = useTheme();

  const education = [
    {
      id: 1,
      degree: "BS in Management & Technology",
      institution: "Ziauddin University (HEC), Karachi",
      period: "2019 - 2023",
      description:
        "Specialized in technology management and business processes",
    },
    {
      id: 2,
      degree: "DAE in Computer Information Technology",
      institution: "Hasani College of Technology (SBTE), Karachi",
      period: "2015 - 2018",
      description: "Diploma in Computer Information Technology",
    },
    {
      id: 3,
      degree: "Matric in Computer & Science",
      institution: "Issar Foundation School (AKUEB), Karachi",
      period: "2013 - 2015",
      description: "Computer Science with Mathematics",
    },
  ];

  return (
    <section
      id="education"
      className={`py-20 ${colors.bg} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-4 ${colors.headingText}`}
        >
          Education
        </h2>
        <p className={`text-center ${colors.bodyText} mb-12 max-w-2xl mx-auto`}>
          My academic journey in technology and management
        </p>

        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className={`${colors.cardBg} rounded-xl shadow-lg p-6 transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className={`text-xl font-bold ${colors.headingText}`}>
                  {edu.degree}
                </h3>
                <span
                  className={`${colors.subheadingText} text-sm font-medium mt-1 md:mt-0`}
                >
                  {edu.period}
                </span>
              </div>
              <p className={`${colors.text} font-medium mb-2`}>
                {edu.institution}
              </p>
              <p className={`${colors.bodyText} text-sm`}>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
