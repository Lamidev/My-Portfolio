


// import React, { useState, useEffect } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";

// const NavBar = ({ scrollToSection, aboutRef, projectsRef, skillsRef, contactRef }) => {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeLink, setActiveLink] = useState("about");
//   const [expanded, setExpanded] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const handleNavClick = (section, ref) => {
//     setActiveLink(section);
//     scrollToSection(ref);
//     setExpanded(false); // Close navbar on mobile after clicking a link
//   };

//   return (
//     <Navbar 
//       expand="lg" 
//       fixed="top" 
//       expanded={expanded}
//       className={scrolled ? "scrolled" : ""}
//       style={{
//         padding: scrolled ? "0.5rem 0" : "1rem 0",
//         transition: "all 0.3s ease",
//         background: scrolled ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.7)",
//         backdropFilter: scrolled ? "blur(10px)" : "blur(5px)",
//         boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.3)" : "none",
//         zIndex: 1030
//       }}
//     >
//       <Container>
//         <Navbar.Brand 
//           href="#" 
//           style={{
//             fontWeight: "700",
//             fontSize: "1.8rem",
//             background: "linear-gradient(45deg, #BE564A, #ff7b00)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             transition: "all 0.3s ease"
//           }}
//           onMouseOver={(e) => {
//             e.target.style.transform = "scale(1.05)";
//           }}
//           onMouseOut={(e) => {
//             e.target.style.transform = "scale(1)";
//           }}
//         >
//           Lamidev
//         </Navbar.Brand>
        
//         <Navbar.Toggle 
//           aria-controls="basic-navbar-nav" 
//           onClick={() => setExpanded(expanded ? false : true)}
//           style={{
//             border: "none",
//             outline: "none",
//             boxShadow: "none"
//           }}
//         >
//           <div className="animated-hamburger">
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </Navbar.Toggle>
        
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link 
//               onClick={() => handleNavClick("about", aboutRef)}
//               style={{
//                 position: "relative",
//                 fontWeight: activeLink === "about" ? "600" : "400",
//                 color: activeLink === "about" ? "#BE564A" : "rgba(255, 255, 255, 0.85)",
//                 margin: "0 0.5rem",
//                 padding: "0.5rem 1rem",
//                 transition: "all 0.3s ease",
//                 borderRadius: "4px"
//               }}
//               className="nav-link-custom"
//             >
//               About
//               {activeLink === "about" && (
//                 <span 
//                   style={{
//                     position: "absolute",
//                     bottom: "0",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     width: "6px",
//                     height: "6px",
//                     borderRadius: "50%",
//                     background: "#BE564A"
//                   }}
//                 ></span>
//               )}
//             </Nav.Link>
            
//             <Nav.Link 
//               onClick={() => handleNavClick("projects", projectsRef)}
//               style={{
//                 position: "relative",
//                 fontWeight: activeLink === "projects" ? "600" : "400",
//                 color: activeLink === "projects" ? "#BE564A" : "rgba(255, 255, 255, 0.85)",
//                 margin: "0 0.5rem",
//                 padding: "0.5rem 1rem",
//                 transition: "all 0.3s ease",
//                 borderRadius: "4px"
//               }}
//               className="nav-link-custom"
//             >
//               Projects
//               {activeLink === "projects" && (
//                 <span 
//                   style={{
//                     position: "absolute",
//                     bottom: "0",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     width: "6px",
//                     height: "6px",
//                     borderRadius: "50%",
//                     background: "#BE564A"
//                   }}
//                 ></span>
//               )}
//             </Nav.Link>
            
//             <Nav.Link 
//               onClick={() => handleNavClick("skills", skillsRef)}
//               style={{
//                 position: "relative",
//                 fontWeight: activeLink === "skills" ? "600" : "400",
//                 color: activeLink === "skills" ? "#BE564A" : "rgba(255, 255, 255, 0.85)",
//                 margin: "0 0.5rem",
//                 padding: "0.5rem 1rem",
//                 transition: "all 0.3s ease",
//                 borderRadius: "4px"
//               }}
//               className="nav-link-custom"
//             >
//               Skills
//               {activeLink === "skills" && (
//                 <span 
//                   style={{
//                     position: "absolute",
//                     bottom: "0",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     width: "6px",
//                     height: "6px",
//                     borderRadius: "50%",
//                     background: "#BE564A"
//                   }}
//                 ></span>
//               )}
//             </Nav.Link>
            
//             <Nav.Link 
//               onClick={() => handleNavClick("contact", contactRef)}
//               style={{
//                 position: "relative",
//                 fontWeight: activeLink === "contact" ? "600" : "400",
//                 color: activeLink === "contact" ? "#BE564A" : "rgba(255, 255, 255, 0.85)",
//                 margin: "0 0.5rem",
//                 padding: "0.5rem 1rem",
//                 transition: "all 0.3s ease",
//                 borderRadius: "4px"
//               }}
//               className="nav-link-custom"
//             >
//               Contact
//               {activeLink === "contact" && (
//                 <span 
//                   style={{
//                     position: "absolute",
//                     bottom: "0",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     width: "6px",
//                     height: "6px",
//                     borderRadius: "50%",
//                     background: "#BE564A"
//                   }}
//                 ></span>
//               )}
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>

//       <style>
//         {`
//           .nav-link-custom:hover {
//             color: #BE564A !important;
//             background: rgba(190, 86, 74, 0.1);
//             transform: translateY(-2px);
//           }
          
//           .animated-hamburger {
//             display: flex;
//             flex-direction: column;
//             width: 24px;
//             height: 18px;
//             justify-content: space-between;
//             cursor: pointer;
//           }
          
//           .animated-hamburger span {
//             height: 2px;
//             width: 100%;
//             background-color: #fff;
//             border-radius: 2px;
//             transition: all 0.3s ease;
//           }
          
//           .navbar-toggler[aria-expanded="true"] .animated-hamburger span:nth-child(1) {
//             transform: rotate(45deg) translate(6px, 6px);
//           }
          
//           .navbar-toggler[aria-expanded="true"] .animated-hamburger span:nth-child(2) {
//             opacity: 0;
//           }
          
//           .navbar-toggler[aria-expanded="true"] .animated-hamburger span:nth-child(3) {
//             transform: rotate(-45deg) translate(6px, -6px);
//           }
          
//           @media (max-width: 991px) {
//             .navbar-collapse {
//               background: rgba(0, 0, 0, 0.95);
//               padding: 1rem;
//               border-radius: 8px;
//               margin-top: 0.5rem;
//               backdrop-filter: blur(10px);
//               border: 1px solid rgba(255, 255, 255, 0.1);
//             }
            
//             .nav-link-custom {
//               margin: 0.5rem 0 !important;
//               text-align: center;
//               padding: 0.75rem !important;
//             }
//           }
//         `}
//       </style>
//     </Navbar>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = ({ scrollToSection, aboutRef, projectsRef, skillsRef, contactRef }) => {
  const [activeLink, setActiveLink] = useState("about");
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = (section, ref) => {
    setActiveLink(section);
    scrollToSection(ref);
    setExpanded(false);
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      expanded={expanded}
      style={{
        padding: "1rem 0",
        transition: "all 0.3s ease",
        background: "rgba(0, 0, 0, 0.9)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        zIndex: 1030
      }}
    >
      <Container>
        <Navbar.Brand 
          href="#" 
          style={{
            fontWeight: "700",
            fontSize: "1.8rem",
            background: "linear-gradient(45deg, #BE564A, #ff7b00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            transition: "all 0.3s ease"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
          }}
        >
          Lamidev
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
          style={{
            border: "none",
            outline: "none",
            boxShadow: "none"
          }}
        >
          <div className="animated-hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              onClick={() => handleNavClick("about", aboutRef)}
              style={{
                position: "relative",
                fontWeight: activeLink === "about" ? "600" : "400",
                color: activeLink === "about" ? "#BE564A" : "rgba(255, 255, 255, 0.9)",
                margin: "0 0.5rem",
                padding: "0.5rem 1rem",
                transition: "all 0.3s ease",
                borderRadius: "4px"
              }}
              className="nav-link-custom"
            >
              About
              {activeLink === "about" && (
                <span 
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#BE564A"
                  }}
                ></span>
              )}
            </Nav.Link>
            
            <Nav.Link 
              onClick={() => handleNavClick("projects", projectsRef)}
              style={{
                position: "relative",
                fontWeight: activeLink === "projects" ? "600" : "400",
                color: activeLink === "projects" ? "#BE564A" : "rgba(255, 255, 255, 0.9)",
                margin: "0 0.5rem",
                padding: "0.5rem 1rem",
                transition: "all 0.3s ease",
                borderRadius: "4px"
              }}
              className="nav-link-custom"
            >
              Projects
              {activeLink === "projects" && (
                <span 
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#BE564A"
                  }}
                ></span>
              )}
            </Nav.Link>
            
            <Nav.Link 
              onClick={() => handleNavClick("skills", skillsRef)}
              style={{
                position: "relative",
                fontWeight: activeLink === "skills" ? "600" : "400",
                color: activeLink === "skills" ? "#BE564A" : "rgba(255, 255, 255, 0.9)",
                margin: "0 0.5rem",
                padding: "0.5rem 1rem",
                transition: "all 0.3s ease",
                borderRadius: "4px"
              }}
              className="nav-link-custom"
            >
              Skills
              {activeLink === "skills" && (
                <span 
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#BE564A"
                  }}
                ></span>
              )}
            </Nav.Link>
            
            <Nav.Link 
              onClick={() => handleNavClick("contact", contactRef)}
              style={{
                position: "relative",
                fontWeight: activeLink === "contact" ? "600" : "400",
                color: activeLink === "contact" ? "#BE564A" : "rgba(255, 255, 255, 0.9)",
                margin: "0 0.5rem",
                padding: "0.5rem 1rem",
                transition: "all 0.3s ease",
                borderRadius: "4px"
              }}
              className="nav-link-custom"
            >
              Contact
              {activeLink === "contact" && (
                <span 
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#BE564A"
                  }}
                ></span>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style>
        {`
          .nav-link-custom:hover {
            color: #BE564A !important;
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-2px);
          }
          
          .animated-hamburger {
            display: flex;
            flex-direction: column;
            width: 24px;
            height: 18px;
            justify-content: space-between;
            cursor: pointer;
          }
          
          .animated-hamburger span {
            height: 2px;
            width: "100%";
            background-color: #fff;
            border-radius: 2px;
            transition: all 0.3s ease;
          }
          
          .navbar-toggler[aria-expanded="true"] .animated-hamburger span:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
          }
          
          .navbar-toggler[aria-expanded="true"] .animated-hamburger span:nth-child(2) {
            opacity: 0;
          }
          
          .navbar-toggler[aria-expanded="true"] .animated-hamburger span:nth-child(3) {
            transform: rotate(-45deg) translate(6px, -6px);
          }
          
          @media (max-width: 991px) {
            .navbar-collapse {
              background: rgba(0, 0, 0, 0.95);
              padding: 1rem;
              border-radius: 8px;
              margin-top: 0.5rem;
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .nav-link-custom {
              margin: 0.5rem 0 !important;
              text-align: center;
              padding: 0.75rem !important;
            }
          }
        `}
      </style>
    </Navbar>
  );
};

export default NavBar;