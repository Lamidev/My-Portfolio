import React, { useRef } from "react";
import AboutMe from "../components/aboutme";
import Skills from "../components/skills";
import Project from "../components/projects";
import Contact from "../components/contact";
import NavBar from "../components/navbar"; // Import NavBar here

const Portfolio = () => {
  // Create refs for each section
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div style={{ width: "100%" }}>
      {/* Pass refs and scroll function to NavBar */}
      <NavBar
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />

      <div ref={aboutRef}>
        <AboutMe 
        scrollToSection={scrollToSection} // Pass scroll function
        projectsRef={projectsRef} // Pass projectsRef
        contactRef={contactRef} // Pass contactRef
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
    </div>
  );
};

export default Portfolio;
