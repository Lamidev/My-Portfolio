// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";
// import Lamidev from "../assets/Lamidev.jpg";

// const AboutMe = ({ scrollToSection, projectsRef, contactRef }) => {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     // Trigger animation after component mounts
//     setLoaded(true);
//   }, []);

//   return (
//     <section
//       id="about"
//       style={{
//         background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
//         color: "#333",
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         padding: "6rem 0 4rem",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Decorative elements */}
//       <div
//         style={{
//           position: "absolute",
//           top: "-5%",
//           right: "-5%",
//           width: "300px",
//           height: "300px",
//           borderRadius: "50%",
//           background: "radial-gradient(circle, #BE564A 0%, transparent 70%)",
//           opacity: 0.05,
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           bottom: "-5%",
//           left: "-5%",
//           width: "250px",
//           height: "250px",
//           borderRadius: "50%",
//           background: "radial-gradient(circle, #BE564A 0%, transparent 70%)",
//           opacity: 0.05,
//         }}
//       />
      
//       <Container>
//         <Row className="align-items-center">
//           {/* Text Section */}
//           <Col 
//             lg={6} 
//             className="text-center text-lg-start"
//             style={{
//               transition: "opacity 0.8s ease, transform 0.8s ease",
//               opacity: loaded ? 1 : 0,
//               transform: loaded ? 'translateX(0)' : 'translateX(-20px)'
//             }}
//           >
//             <h1 
//               style={{ 
//                 fontSize: "clamp(2.5rem, 5vw, 4rem)", 
//                 fontWeight: "bold",
//                 lineHeight: "1.2",
//                 marginBottom: "1.5rem",
//                 color: "#2d3748"
//               }}
//             >
//               Hi, I'm{" "}
//               <span style={{ color: "#BE564A" }}>Akinyemi Oluwatosin!</span>
//             </h1>
//             <p 
//               style={{ 
//                 fontSize: "1.2rem", 
//                 margin: "1.5rem 0",
//                 lineHeight: "1.6",
//                 color: "#4a5568"
//               }}
//             >
//               I'm a <strong style={{ color: "#BE564A" }}>Full-Stack Software Developer</strong> specializing
//               in modern web technologies such as JavaScript, React, Node.js,
//               Express, and MongoDB. I love building scalable, responsive, and
//               user-friendly applications. Whether it's creating sleek user
//               interfaces or robust backends, I bring ideas to life with code.
//               Let's create something amazing together!
//             </p>
//             <div className="d-flex flex-column flex-md-row mb-2 justify-content-center justify-content-lg-start">
//               <Button
//                 onClick={() => scrollToSection(projectsRef)}
//                 variant="primary"
//                 size="lg"
//                 style={{
//                   background: "linear-gradient(45deg, #BE564A, #ff7b00)",
//                   border: "none",
//                   fontWeight: "bold",
//                   marginBottom: "1rem",
//                   marginRight: "1rem",
//                   transition: "all 0.3s ease",
//                   boxShadow: "0 4px 6px rgba(190, 86, 74, 0.2)"
//                 }}
//                 className="w-100 w-md-auto mb-2 hover-lift"
//               >
//                 View My Work
//               </Button>

//               <Button
//                 onClick={() => scrollToSection(contactRef)}
//                 variant="outline-primary"
//                 size="lg"
//                 style={{
//                   fontWeight: "bold",
//                   marginBottom: "1rem",
//                   marginRight: "1rem",
//                   transition: "all 0.3s ease",
//                   borderWidth: "2px",
//                   borderColor: "#BE564A",
//                   color: "#BE564A"
//                 }}
//                 className="w-100 w-md-auto mb-2 hover-lift"
//               >
//                 Contact Me
//               </Button>

//               <Button
//                 href="https://drive.google.com/file/d/1iHczIq54ox4ymA7y5YeIRMMZFSy3w0hR/view?usp=drivesdk"
//                 target="_blank"
//                 variant="outline-primary"
//                 size="lg"
//                 style={{
//                   fontWeight: "bold",
//                   marginBottom: "1rem",
//                   borderWidth: "2px",
//                   borderColor: "#BE564A",
//                   color: "#BE564A",
//                   transition: "all 0.3s ease"
//                 }}
//                 className="w-100 w-md-auto mb-2 hover-lift"
//               >
//                 <FaDownload size={18} className="me-2" />
//                 Download CV
//               </Button>
//             </div>

//             <div className="mt-4 d-flex gap-3 mb-2 justify-content-center justify-content-lg-start">
//               <a
//                 href="https://www.linkedin.com/in/akinyemi-oluwatosin-95519130b/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   width: "50px",
//                   height: "50px",
//                   borderRadius: "50%",
//                   backgroundColor: "rgba(190, 86, 74, 0.1)",
//                   transition: "all 0.3s ease",
//                   color: "#BE564A"
//                 }}
//                 className="hover-lift"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//               <a
//                 href="https://github.com/Thisslami"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   width: "50px",
//                   height: "50px",
//                   borderRadius: "50%",
//                   backgroundColor: "rgba(190, 86, 74, 0.1)",
//                   transition: "all 0.3s ease",
//                   color: "#BE564A"
//                 }}
//                 className="hover-lift"
//               >
//                 <FaGithub size={24} />
//               </a>
//             </div>
//           </Col>

//           {/* Image Section - Enhanced */}
//           <Col 
//             lg={6} 
//             className="text-center"
//             style={{
//               position: "relative",
//               padding: "2rem"
//             }}
//           >
//             <div 
//               style={{
//                 position: "relative",
//                 display: "inline-block",
//                 maxWidth: "100%"
//               }}
//             >
//               {/* Main profile image with enhanced styling */}
//               <div
//                 style={{
//                   position: "relative",
//                   borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
//                   overflow: "hidden",
//                   width: "min(100%, 400px)",
//                   height: "min(100%, 400px)",
//                   margin: "0 auto",
//                   boxShadow: `
//                     0 0 0 4px rgba(190, 86, 74, 0.2),
//                     0 0 30px rgba(190, 86, 74, 0.3),
//                     0 0 50px rgba(0, 0, 0, 0.1)
//                   `,
//                   transition: "all 0.5s ease",
//                   transform: loaded ? 'scale(1) rotate(0deg)' : 'scale(0.9) rotate(5deg)',
//                   opacity: loaded ? 1 : 0
//                 }}
//                 className="hover-lift"
//               >
//                 <img
//                   src={Lamidev}
//                   alt="Akinyemi Oluwatosin - Full Stack Developer"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     filter: "grayscale(20%) contrast(110%)",
//                     transition: "all 0.5s ease"
//                   }}
//                   onMouseOver={(e) => {
//                     e.target.style.filter = "grayscale(0%) contrast(120%)";
//                     e.target.parentElement.style.boxShadow = `
//                       0 0 0 6px rgba(190, 86, 74, 0.3),
//                       0 0 40px rgba(190, 86, 74, 0.4),
//                       0 0 60px rgba(0, 0, 0, 0.15)
//                     `;
//                   }}
//                   onMouseOut={(e) => {
//                     e.target.style.filter = "grayscale(20%) contrast(110%)";
//                     e.target.parentElement.style.boxShadow = `
//                       0 0 0 4px rgba(190, 86, 74, 0.2),
//                       0 0 30px rgba(190, 86, 74, 0.3),
//                       0 0 50px rgba(0, 0, 0, 0.1)
//                     `;
//                   }}
//                 />
//               </div>
              
//               {/* Floating elements around the image */}
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "10%",
//                   right: "10%",
//                   width: "40px",
//                   height: "40px",
//                   borderRadius: "50%",
//                   backgroundColor: "rgba(190, 86, 74, 0.2)",
//                   animation: "float 6s ease-in-out infinite",
//                   zIndex: -1
//                 }}
//               />
//               <div
//                 style={{
//                   position: "absolute",
//                   bottom: "15%",
//                   left: "10%",
//                   width: "30px",
//                   height: "30px",
//                   borderRadius: "50%",
//                   backgroundColor: "rgba(190, 86, 74, 0.15)",
//                   animation: "float 7s ease-in-out infinite 1s",
//                   zIndex: -1
//                 }}
//               />
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "30%",
//                   left: "5%",
//                   width: "25px",
//                   height: "25px",
//                   borderRadius: "50%",
//                   backgroundColor: "rgba(190, 86, 74, 0.1)",
//                   animation: "float 8s ease-in-out infinite 0.5s",
//                   zIndex: -1
//                 }}
//               />
//             </div>
            
//             {/* Status indicator */}
//             <div
//               style={{
//                 marginTop: "2rem",
//                 padding: "0.75rem 1.5rem",
//                 backgroundColor: "rgba(190, 86, 74, 0.1)",
//                 borderRadius: "50px",
//                 display: "inline-block",
//                 animation: "pulse 2s infinite",
//                 border: "1px solid rgba(190, 86, 74, 0.2)"
//               }}
//             >
//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <div
//                   style={{
//                     width: "12px",
//                     height: "12px",
//                     borderRadius: "50%",
//                     backgroundColor: "#BE564A",
//                     marginRight: "0.75rem",
//                     animation: "blink 1.5s infinite"
//                   }}
//                 />
//                 <span style={{ fontSize: "1rem", fontWeight: "500", color: "#2d3748" }}>
//                   Available for new opportunities
//                 </span>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       {/* Add some CSS for animations */}
//       <style>
//         {`
//           @keyframes float {
//             0% { transform: translateY(0px); }
//             50% { transform: translateY(-15px); }
//             100% { transform: translateY(0px); }
//           }
          
//           @keyframes pulse {
//             0% { box-shadow: 0 0 0 0 rgba(190, 86, 74, 0.2); }
//             70% { box-shadow: 0 0 0 10px rgba(190, 86, 74, 0); }
//             100% { box-shadow: 0 0 0 0 rgba(190, 86, 74, 0); }
//           }
          
//           @keyframes blink {
//             0% { opacity: 1; }
//             50% { opacity: 0.5; }
//             100% { opacity: 1; }
//           }
          
//           .hover-lift:hover {
//             transform: translateY(-5px);
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default AboutMe;

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";
import Lamidev from "../assets/Lamidev.jpg";

const AboutMe = ({ scrollToSection, projectsRef, contactRef }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="about"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
        color: "#333",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "6rem 0 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "-5%",
          right: "-5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #BE564A 0%, transparent 70%)",
          opacity: 0.05,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-5%",
          left: "-5%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #BE564A 0%, transparent 70%)",
          opacity: 0.05,
        }}
      />
      
      <Container>
        <Row className="align-items-center">
          {/* Text Section */}
          <Col 
            lg={6} 
            className="text-center text-lg-start"
            style={{
              transition: "opacity 0.8s ease, transform 0.8s ease",
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateX(0)' : 'translateX(-20px)'
            }}
          >
            <h1 
              style={{ 
                fontSize: "clamp(2.5rem, 5vw, 4rem)", 
                fontWeight: "bold",
                lineHeight: "1.2",
                marginBottom: "1.5rem",
                color: "#2d3748"
              }}
            >
              Hi, I'm{" "}
              <span style={{ color: "#BE564A" }}>Akinyemi Oluwatosin!</span>
            </h1>
            <p 
              style={{ 
                fontSize: "1.2rem", 
                margin: "1.5rem 0",
                lineHeight: "1.6",
                color: "#4a5568"
              }}
            >
              I'm a <strong style={{ color: "#BE564A" }}>Full-Stack Software Developer</strong> specializing
              in modern web technologies such as JavaScript, React, Node.js,
              Express, and MongoDB. I love building scalable, responsive, and
              user-friendly applications. Whether it's creating sleek user
              interfaces or robust backends, I bring ideas to life with code.
              Let's create something amazing together!
            </p>
            <div className="d-flex flex-column flex-md-row mb-2 justify-content-center justify-content-lg-start">
              <Button
                onClick={() => scrollToSection(projectsRef)}
                size="lg"
                style={{
                  background: "linear-gradient(45deg, #BE564A, #ff7b00)",
                  border: "none",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  marginRight: "1rem",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 6px rgba(190, 86, 74, 0.2)"
                }}
                className="w-100 w-md-auto mb-2 hover-lift"
                onMouseOver={(e) => {
                  e.target.style.background = "linear-gradient(45deg, #a84338, #e06a00)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "linear-gradient(45deg, #BE564A, #ff7b00)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                View My Work
              </Button>

              <Button
                onClick={() => scrollToSection(contactRef)}
                size="lg"
                style={{
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  marginRight: "1rem",
                  transition: "all 0.3s ease",
                  borderWidth: "2px",
                  borderColor: "#BE564A",
                  color: "#BE564A",
                  background: "transparent"
                }}
                className="w-100 w-md-auto mb-2 hover-lift"
                onMouseOver={(e) => {
                  e.target.style.background = "#BE564A";
                  e.target.style.color = "white";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.color = "#BE564A";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Contact Me
              </Button>

              <Button
                href="https://drive.google.com/file/d/1iHczIq54ox4ymA7y5YeIRMMZFSy3w0hR/view?usp=drivesdk"
                target="_blank"
                size="lg"
                style={{
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  borderWidth: "2px",
                  borderColor: "#BE564A",
                  color: "#BE564A",
                  transition: "all 0.3s ease",
                  background: "transparent"
                }}
                className="w-100 w-md-auto mb-2 hover-lift"
                onMouseOver={(e) => {
                  e.target.style.background = "#BE564A";
                  e.target.style.color = "white";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.color = "#BE564A";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <FaDownload size={18} className="me-2" />
                Download CV
              </Button>
            </div>

            <div className="mt-4 d-flex gap-3 mb-2 justify-content-center justify-content-lg-start">
              {[
                { 
                  icon: <FaLinkedin size={24} />, 
                  href: "https://www.linkedin.com/in/akinyemi-oluwatosin-95519130b/", 
                  color: "#0077b5" 
                },
                { 
                  icon: <FaGithub size={24} />, 
                  href: "https://github.com/Thisslami", 
                  color: "#333" 
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    transition: "all 0.3s ease",
                    color: social.color,
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    border: "2px solid rgba(190, 86, 74, 0.1)"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-5px)";
                    e.target.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>

          {/* Image Section - Enhanced */}
          <Col 
            lg={6} 
            className="text-center"
            style={{
              position: "relative",
              padding: "2rem"
            }}
          >
            <div 
              style={{
                position: "relative",
                display: "inline-block",
                maxWidth: "100%"
              }}
            >
              {/* Main profile image with enhanced styling */}
              <div
                style={{
                  position: "relative",
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                  overflow: "hidden",
                  width: "min(100%, 400px)",
                  height: "min(100%, 400px)",
                  margin: "0 auto",
                  boxShadow: `
                    0 0 0 4px rgba(190, 86, 74, 0.2),
                    0 0 30px rgba(190, 86, 74, 0.3),
                    0 0 50px rgba(0, 0, 0, 0.1)
                  `,
                  transition: "all 0.5s ease",
                  transform: loaded ? 'scale(1) rotate(0deg)' : 'scale(0.9) rotate(5deg)',
                  opacity: loaded ? 1 : 0
                }}
                className="hover-lift"
              >
                <img
                  src={Lamidev}
                  alt="Akinyemi Oluwatosin - Full Stack Developer"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(20%) contrast(110%)",
                    transition: "all 0.5s ease"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.filter = "grayscale(0%) contrast(120%)";
                    e.target.parentElement.style.boxShadow = `
                      0 0 0 6px rgba(190, 86, 74, 0.3),
                      0 0 40px rgba(190, 86, 74, 0.4),
                      0 0 60px rgba(0, 0, 0, 0.15)
                    `;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.filter = "grayscale(20%) contrast(110%)";
                    e.target.parentElement.style.boxShadow = `
                      0 0 0 4px rgba(190, 86, 74, 0.2),
                      0 0 30px rgba(190, 86, 74, 0.3),
                      0 0 50px rgba(0, 0, 0, 0.1)
                    `;
                  }}
                />
              </div>
              
              {/* Floating elements around the image */}
              <div
                style={{
                  position: "absolute",
                  top: "10%",
                  right: "10%",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(190, 86, 74, 0.2)",
                  animation: "float 6s ease-in-out infinite",
                  zIndex: -1
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "15%",
                  left: "10%",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(190, 86, 74, 0.15)",
                  animation: "float 7s ease-in-out infinite 1s",
                  zIndex: -1
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "30%",
                  left: "5%",
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(190, 86, 74, 0.1)",
                  animation: "float 8s ease-in-out infinite 0.5s",
                  zIndex: -1
                }}
              />
            </div>
            
            {/* Status indicator */}
            <div
              style={{
                marginTop: "2rem",
                padding: "0.75rem 1.5rem",
                backgroundColor: "rgba(190, 86, 74, 0.1)",
                borderRadius: "50px",
                display: "inline-block",
                animation: "pulse 2s infinite",
                border: "1px solid rgba(190, 86, 74, 0.2)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#BE564A",
                    marginRight: "0.75rem",
                    animation: "blink 1.5s infinite"
                  }}
                />
                <span style={{ fontSize: "1rem", fontWeight: "500", color: "#2d3748" }}>
                  Available for new opportunities
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Add some CSS for animations and hover effects */}
      <style>
        {`
          @keyframes float {
            0% { transform: "translateY(0px)"; }
            50% { transform: "translateY(-15px)"; }
            100% { transform: "translateY(0px)"; }
          }
          
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(190, 86, 74, 0.2); }
            70% { box-shadow: 0 0 0 10px rgba(190, 86, 74, 0); }
            100% { box-shadow: 0 0 0 0 rgba(190, 86, 74, 0); }
          }
          
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
          
          .hover-lift:hover {
            transform: translateY(-2px);
          }
        `}
      </style>
    </section>
  );
};

export default AboutMe;