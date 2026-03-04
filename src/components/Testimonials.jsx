import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Testimonials = () => {
  const { colors } = useTheme();

  const testimonials = [
    {
      id: 1,
      name: "M.A Rehman",
      position: "Head of AI, Arch Technologies",
      text: "Taha demonstrated exceptional dedication during his internship. His React.js projects showed strong understanding of modern web development practices.",
      image: "", // Agar image ho to yahan daalo
    },
    {
      id: 2,
      name: "Appverse Team",
      position: "Internship Supervisor",
      text: "Consistently delivered quality work on time. His portfolio of projects reflects both technical skill and creative problem-solving.",
      image: "",
    },
  ];

  return (
    <section
      id="testimonials"
      className={`py-20 ${colors.bg} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-4 ${colors.headingText}`}
        >
          Testimonials
        </h2>
        <p className={`text-center ${colors.bodyText} mb-12 max-w-2xl mx-auto`}>
          What mentors and colleagues say about my work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`${colors.cardBg} rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl`}
            >
              <div className="flex items-start space-x-4">
                {/* Avatar/Icon */}
                <div
                  className={`w-12 h-12 rounded-full ${colors.primary} flex items-center justify-center text-white text-xl font-bold flex-shrink-0`}
                >
                  {item.name.charAt(0)}
                </div>

                <div>
                  <p className={`${colors.bodyText} text-sm mb-3 italic`}>
                    "{item.text}"
                  </p>
                  <h4 className={`font-bold ${colors.headingText}`}>
                    {item.name}
                  </h4>
                  <p className={`${colors.subheadingText} text-xs`}>
                    {item.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
