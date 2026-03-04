import React from "react";
import { useTheme } from "../contexts/ThemeContext";

// 📸 Certificate image import
const CertificateImg = "/static/images/Certificate.JPG";

const Achievements = () => {
  const { colors } = useTheme();

  const achievements = [
    {
      id: 1,
      title: "Appverse Internship Completion Certificate",
      organization: "Appverse Technologies",
      year: "2026",
      description:
        "Successfully completed React.js internship with multiple project submissions",
      credential: "Intern ID: ARCH-2603-125608",
      image: CertificateImg,
      link: "#", // Agar certificate ka link ho to yahan daalo
    },
    {
      id: 2,
      title: "Network Engineering Excellence",
      organization: "PTCL Pvt Ltd",
      year: "2021",
      description:
        "Recognized for outstanding network monitoring and customer support",
    },
    {
      id: 3,
      title: "Data Management Certification",
      organization: "Intrawide Pvt. Ltd",
      year: "2023",
      description: "Achieved precision and accuracy in high-volume data entry",
    },
  ];

  return (
    <section
      id="achievements"
      className={`py-20 ${colors.bg} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-4 ${colors.headingText}`}
        >
          Achievements & Awards
        </h2>
        <p className={`text-center ${colors.bodyText} mb-12 max-w-2xl mx-auto`}>
          Recognition and milestones throughout my journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className={`${colors.cardBg} rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl`}
            >
              {/* Certificate Image (if available) */}
              {item.image && (
                <div className="h-40 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">🏆</span>
                  <span
                    className={`${colors.subheadingText} text-sm font-medium`}
                  >
                    {item.year}
                  </span>
                </div>

                <h3 className={`text-lg font-bold mb-1 ${colors.headingText}`}>
                  {item.title}
                </h3>
                <p className={`${colors.text} text-sm font-medium mb-2`}>
                  {item.organization}
                </p>
                <p className={`${colors.bodyText} text-sm mb-2`}>
                  {item.description}
                </p>

                {item.credential && (
                  <p className={`${colors.subheadingText} text-xs mb-3`}>
                    {item.credential}
                  </p>
                )}

                {item.link && (
                  <a
                    href={item.link}
                    className={`inline-block mt-2 ${colors.text} text-sm font-medium hover:underline`}
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
