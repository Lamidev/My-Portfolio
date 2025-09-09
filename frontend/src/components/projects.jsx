import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./project-card";
import Homepic from "../assets/homeImg.png";
import Homepic2 from "../assets/homeImg2.png";
import Homepic3 from "../assets/homeImg3.png";
import { useState, useEffect } from "react";

const Project = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setIsVisible(true);
  }, []);

  return (
    // Full-width background with gradient
    <section
      id="projects"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        width: "100%",
        padding: "5rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #BE564A 0%, transparent 70%)",
          opacity: 0.05,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "-50px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #BE564A 0%, transparent 70%)",
          opacity: 0.05,
        }}
      />
      
      {/* Constrained content */}
      <Container>
        {/* Section Title with animation */}
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center">
            <h2 
              className="fw-bold mb-3"
              style={{
                fontSize: "2.5rem",
                background: "linear-gradient(45deg, #BE564A, #ff7b00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.8s ease, transform 0.8s ease"
              }}
            >
              Featured Projects
            </h2>
            <p 
              className="lead text-muted"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
                maxWidth: "600px",
                margin: "0 auto"
              }}
            >
              Here are some of my recent works that showcase my skills in full-stack development
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {/* Project 1 - Changed from lg={4} to lg={6} for 2 cards per row */}
          <Col 
            lg={6}  // Changed from 4 to 6 for 2 cards per row on large screens
            xl={5}   // Optional: Add extra control for extra large screens
            md={6} 
            xs={12} 
            className="mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s"
            }}
          >
            <ProjectCard
              title="Chizzy Kids School"
              description="A modern School Management System built using React, Node.js, and MongoDB."
              image="https://res.cloudinary.com/djbtdlzrj/image/upload/v1738102417/Screenshot_2025-01-28_231209_wmkvwt.png"
              link="http://chizzykidsgroupofschools.com.ng"
              technologies={["React", "Node.js", "MongoDB", "Express"]}
            />
          </Col>

          {/* Project 2 */}
          <Col 
            lg={6}  // Changed from 4 to 6 for 2 cards per row on large screens
            xl={5}   // Optional: Add extra control for extra large screens
            md={6} 
            xs={12} 
            className="mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s"
            }}
          >
            <ProjectCard
              title="Gadgets Grid Phones And Accessories"
              description="A modern fullstack e-commerce platform built using React, Node.js, and MongoDB."
              image={Homepic}
              link="https://versegadget.onrender.com"
              technologies={["React", "Node.js", "MongoDB", "Stripe"]}
            />
          </Col>

          {/* Project 3 */}
          <Col 
            lg={6}  // Changed from 4 to 6 for 2 cards per row on large screens
            xl={5}   // Optional: Add extra control for extra large screens
            md={6} 
            xs={12} 
            className="mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s"
            }}
          >
            <ProjectCard
              title="Euphoric Touch"
              description="A professional massage therapy website offering relaxation and wellness services built with MERN stack."
              image={Homepic2}
              link="https://euphoric-touch-with-tish.onrender.com"
              technologies={["React", "Node.js", "MongoDB", "Express"]}
            />
          </Col>

          {/* Project 4 */}
          <Col 
            lg={6}  // Changed from 4 to 6 for 2 cards per row on large screens
            xl={5}   // Optional: Add extra control for extra large screens
            md={6} 
            xs={12} 
            className="mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s"
            }}
          >
            <ProjectCard
              title="Afkit Nigeria"
              description="Premium gadget store offering 6-month warranty with payment on delivery. Built with MERN stack."
              image={Homepic3}
              link="https://afkit.ng"
              technologies={["React", "Node.js", "MongoDB", "Express"]}
            />
          </Col>
        </Row>

        {/* Call to action */}
        <Row className="justify-content-center mt-5">
          <Col xs={12} className="text-center">
            <div
              style={{
                padding: "2rem",
                background: "rgba(190, 86, 74, 0.05)",
                borderRadius: "12px",
                border: "1px solid rgba(190, 86, 74, 0.1)"
              }}
            >
              <h4 className="mb-3">Interested in working together?</h4>
              <p className="text-muted mb-4">
                I'm always open to discussing new projects and opportunities
              </p>
              <a 
                href="#contact" 
                className="btn btn-primary btn-lg"
                style={{
                  background: "linear-gradient(45deg, #BE564A, #ff7b00)",
                  border: "none",
                  padding: "0.75rem 2rem",
                  fontWeight: "600",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow = "0 10px 20px rgba(190, 86, 74, 0.3)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                Get In Touch
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Project;