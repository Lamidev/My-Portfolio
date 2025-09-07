// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-light py-3 mt-auto w-100">
//       <Container>
//         <Row className="align-items-center justify-content-md-between text-center text-md-start">
//           {/* Social Media Links */}
//           <Col xs={12} md={4} className="mb-3 mb-md-0">
//             <h5>Connect with Me</h5>
//             <div className="d-flex justify-content-center justify-content-md-start gap-3">
//               <a
//                 href="https://github.com/Thisslami"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-light social-link"
//               >
//                 <FaGithub size={24} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/akinyemi-oluwatosin-95519130b/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-light social-link"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//               <a
//                 href="https://twitter.com/yourusername"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-light social-link"
//               >
//                 <FaTwitter size={24} />
//               </a>
//               <a href="mailto:akinyemioluwaseunjunior@gmail.com" className="text-light social-link">
//                 <FaEnvelope size={24} />
//               </a>
//             </div>
//           </Col>

//           {/* Copyright Notice */}
//           <Col xs={12} md={4}>
//             <h5>Lamidev</h5>
//             <p className="mb-0">
//               &copy; {new Date().getFullYear()} Lamidev. All rights reserved.
//             </p>
//           </Col>
//         </Row>
//       </Container>

//       {/* Custom Styles for Hover Effects */}
//       <style>
//         {`
//           .social-link:hover {
//             color: #0d6efd; /* Bootstrap primary blue */
//             transition: color 0.3s ease-in-out;
//           }
//         `}
//       </style>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer 
      className="py-5 mt-auto w-100"
      style={{
        background: "linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)",
        color: "white",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease"
      }}
    >
      <Container>
        <Row className="align-items-center justify-content-md-between text-center text-md-start">
          {/* Social Media Links */}
          <Col 
            xs={12} 
            md={4} 
            className="mb-4 mb-md-0"
          >
            <h5 
              style={{
                fontWeight: "600",
                marginBottom: "1.5rem",
                background: "linear-gradient(45deg, #BE564A, #ff7b00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}
            >
              Connect with Me
            </h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://github.com/Lamidev"
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
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                  color: "white"
                }}
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/akinyemi-oluwatosin-95519130b/"
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
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                  color: "white"
                }}
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://x.com/Lamibadboy/status/1913935263312527791?t=vLTQUHYxYM7MuOD1ftTV2w&s=19"
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
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                  color: "white"
                }}
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="mailto:akinyemioluwaseunjunior@gmail.com" 
                className="social-link"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                  color: "white"
                }}
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </Col>

          {/* Copyright Notice */}
          <Col 
            xs={12} 
            md={4}
            className="text-center text-md-end"
          >
            <h5 
              style={{
                fontWeight: "700",
                fontSize: "1.8rem",
                background: "linear-gradient(45deg, #BE564A, #ff7b00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "0.5rem"
              }}
            >
              Lamidev
            </h5>
            <p 
              className="mb-0 d-flex align-items-center justify-content-center justify-content-md-end"
              style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.7)" }}
            >
              Made with <FaHeart size={14} className="mx-1" style={{ color: "#BE564A" }} /> 
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </Col>
        </Row>
        
        {/* Decorative elements */}
        <div 
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(190, 86, 74, 0.5), transparent)",
            margin: "2rem 0 0",
            opacity: 0.5
          }}
        ></div>
        
        <Row className="mt-3">
          <Col className="text-center">
            <p style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.5)", margin: 0 }}>
              Designed and developed with passion
            </p>
          </Col>
        </Row>
      </Container>

      {/* Custom Styles */}
      <style>
        {`
          .social-link:hover {
            transform: translateY(-5px);
            background: linear-gradient(135deg, #BE564A, #ff7b00) !important;
            color: white !important;
            box-shadow: 0 5px 15px rgba(190, 86, 74, 0.4);
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;