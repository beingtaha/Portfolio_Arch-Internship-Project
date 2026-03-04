import React from "react";
import { useTheme } from "../contexts/ThemeContext";

// 📸 Images import karne ke liye
const EcommerceImg = "/static/images/Ecommerce.PNG";
const IslamImg = "/static/images/Islam.PNG";
const LoginImg = "/static/images/Login.PNG";
const TodoImg = "/static/images/Todo.PNG";
const FormImg = "/static/images/Form.PNG";
const ProfileImg = "/static/images/Profile.PNG";
const NFTImg = "/static/images/NFT.PNG";
const WeatherImg = "/static/images/Weather.PNG";

const Projects = () => {
  const { colors } = useTheme();

  // 🌟 Main Projects
  const mainProjects = [
    {
      id: 1,
      title: "Islamic Guide Web",
      description:
        "A comprehensive Islamic web application with prayer times, duas, hadiths and more",
      tech: ["React", "Axios", "Tailwind", "API Integration"],
      role: "Frontend Developer",
      outcome: "Live deployed with real-time prayer times",
      github: "https://github.com/beingtaha/islamic-guide-web",
      live: "https://islamic-guide-web.vercel.app/",
      image: IslamImg,
    },
    {
      id: 2,
      title: "Login System",
      description:
        "React Login/Signup System with validation and protected routes",
      tech: ["React", "React Router", "Context API", "Tailwind"],
      role: "Frontend Developer",
      outcome: "Secure authentication system",
      github: "https://github.com/beingtaha/login-system",
      live: "https://login-system-mu-lilac.vercel.app/login",
      image: LoginImg,
    },
    {
      id: 3,
      title: "E-Commerce Website",
      description: "My first React e-commerce project with cart functionality",
      tech: ["React", "Context API", "Tailwind", "React Router"],
      role: "Frontend Developer",
      outcome: "Fully functional e-commerce site",
      github: "https://github.com/beingtaha/ecommerce-website-react",
      live: "https://ecommerce-website-react-dusky.vercel.app/",
      image: EcommerceImg,
    },
  ];

  // 💼 Appverse Internship Projects
  const internshipProjects = [
    {
      id: 4,
      title: "Todo List App",
      description:
        "Task management application with add, edit, delete features",
      tech: ["React", "Local Storage", "Tailwind"],
      role: "Internship Project",
      outcome: "Appverse Technologies",
      github:
        "https://github.com/beingtaha/Todo-List-App_Appverse-Internship-Project",
      live: "https://todo-list-app-appverse-internship-p.vercel.app/",
      image: TodoImg,
    },
    {
      id: 5,
      title: "Counter & Form App",
      description: "Interactive counter and form handling demonstration",
      tech: ["React", "Hooks", "Form Validation"],
      role: "Internship Project",
      outcome: "Appverse Technologies",
      github:
        "https://github.com/beingtaha/Counter-And-Form-App_Appverse-Internship-Project",
      live: "https://counter-and-form-app-appverse-inter.vercel.app/",
      image: FormImg,
    },
    {
      id: 6,
      title: "Profile Card App",
      description:
        "Interactive profile card system with follow/unfollow, dark/light theme",
      tech: ["React", "Props", "State", "Theme Toggle"],
      role: "Internship Project",
      outcome: "Appverse Technologies",
      github: "https://github.com/beingtaha/Profile_Card_App-Appverse_Project",
      live: "https://profile-card-app-appverse-project.vercel.app/",
      image: ProfileImg,
    },
    {
      id: 7,
      title: "NFT Gallery",
      description: "Beautiful NFT gallery showcasing digital artwork",
      tech: ["React", "Grid Layout", "Responsive Design"],
      role: "Internship Project",
      outcome: "Appverse Technologies",
      github:
        "https://github.com/beingtaha/NFT-Gallery_Appverse-Internship-Project",
      live: "https://nft-gallery-appverse-internship-pro.vercel.app/",
      image: NFTImg,
    },
    {
      id: 8,
      title: "Weather Dashboard",
      description: "Real-time weather application with API integration",
      tech: ["React", "Axios", "Weather API", "Tailwind"],
      role: "Internship Project",
      outcome: "Appverse Technologies",
      github:
        "https://github.com/beingtaha/Weather-Dashboard_Appverse-Internship-Project-",
      live: "https://weather-dashboard-appverse-internsh.vercel.app/",
      image: WeatherImg,
    },
  ];

  return (
    <section
      id="projects"
      className={`py-20 ${colors.bg} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-4 ${colors.headingText}`}
        >
          My Projects
        </h2>
        <p className={`text-center ${colors.bodyText} mb-12 max-w-2xl mx-auto`}>
          Here's a showcase of my main projects and internship work
        </p>

        {/* Main Projects */}
        <div className="mb-16">
          <h3
            className={`text-2xl font-semibold mb-8 ${colors.text} border-b-2 ${colors.border} pb-2 inline-block`}
          >
            Main Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainProjects.map((project) => (
              <ProjectCard key={project.id} project={project} colors={colors} />
            ))}
          </div>
        </div>

        {/* Internship Projects */}
        <div>
          <h3
            className={`text-2xl font-semibold mb-8 ${colors.text} border-b-2 ${colors.border} pb-2 inline-block`}
          >
            Appverse Internship Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internshipProjects.map((project) => (
              <ProjectCard key={project.id} project={project} colors={colors} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project, colors }) => {
  return (
    <div
      className={`${colors.cardBg} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group`}
    >
      {project.image && (
        <div className="h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${colors.headingText}`}>
          {project.title}
        </h3>
        <p className={`${colors.bodyText} text-sm mb-4 leading-relaxed`}>
          {project.description}
        </p>

        <div className="mb-4">
          <span
            className={`text-sm font-semibold ${colors.subheadingText} block mb-2`}
          >
            Tech Stack:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className={`inline-flex items-center px-3 py-1.5 ${colors.techBg} ${colors.techText} text-xs rounded-full font-medium`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${colors.primary} mr-1.5`}
                ></span>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-1 mb-4">
          <p className={`${colors.bodyText} text-sm`}>
            <span className={`font-semibold ${colors.subheadingText}`}>
              Role:
            </span>{" "}
            {project.role}
          </p>
          <p className={`${colors.bodyText} text-sm`}>
            <span className={`font-semibold ${colors.subheadingText}`}>
              Outcome:
            </span>{" "}
            {project.outcome}
          </p>
        </div>

        <div className="flex gap-3 mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center ${colors.primary} text-white px-3 py-2 rounded-lg ${colors.hover} transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg`}
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center border-2 ${colors.border} ${colors.text} px-3 py-2 rounded-lg ${colors.hover} transition-all duration-300 text-sm font-medium bg-opacity-10 backdrop-blur-sm`}
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
