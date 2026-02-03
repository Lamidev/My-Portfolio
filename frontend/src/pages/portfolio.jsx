import React, { useRef } from "react";
import AboutMe from "../components/aboutme";
import Skills from "../components/skills";
import Project from "../components/projects";
import Contact from "../components/contact";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const Portfolio = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full bg-[#030712] text-white selection:bg-indigo-500/30">
      <NavBar
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />

      <main>
        <div ref={aboutRef}>
          <AboutMe 
            scrollToSection={scrollToSection}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />
        </div>
        
        <div ref={projectsRef}>
          <Project />
        </div>
        
        <div ref={skillsRef}>
          <Skills />
        </div>
        
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
