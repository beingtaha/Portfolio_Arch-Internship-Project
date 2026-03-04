import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Hero />
        <Projects />
        <Education />
        <Experience />
        <Skills />
        <Achievements />
        <Testimonials />
        <Blog />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
