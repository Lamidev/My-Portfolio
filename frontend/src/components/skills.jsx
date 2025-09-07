// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaGitAlt } from "react-icons/fa";
// import { SiRedux, SiNextdotjs } from "react-icons/si";

// const Skills = () => {
//   const skills = [
//     {
//       category: "Frontend Development",
//       items: [
//         { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
//         { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
//         { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
//         { name: "React", icon: <FaReact color="#61dafb" /> },
//         { name: "Redux", icon: <SiRedux color="#764abc" /> },
//         { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
//       ],
//     },
//     {
//       category: "Backend Development",
//       items: [
//         { name: "Node.js", icon: <FaNode color="#3c873a" /> },
//         { name: "MongoDB", icon: <FaDatabase color="#4db33d" /> },
//       ],
//     },
//     {
//       category: "Tools & Version Control",
//       items: [
//         { name: "Git", icon: <FaGitAlt color="#f34f29" /> },
//       ],
//     },
//   ];

//   return (
//     <section
//       style={{
//         background: "#f8f9fa",
//         padding: "4rem 0",
//       }}
//     >
//       <Container>
//         <h2 className="text-center" style={{ marginBottom: "2rem", fontWeight: "bold" }}>
//           Tech Stack
//         </h2>
//         {skills.map((skillCategory, index) => (
//           <div key={index} style={{ marginBottom: "3rem" }}>
//             <h4 style={{ fontWeight: "bold", color: "#495057", marginBottom: "1rem" }}>
//               {skillCategory.category}
//             </h4>
//             <Row>
//               {skillCategory.items.map((skill, idx) => (
//                 <Col xs={6} md={3} className="mb-2" key={idx}>
//                   <Card
//                     className="text-center"
//                     style={{
//                       padding: "2rem 1rem",
//                       borderRadius: "15px",
//                       boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                       transition: "transform 0.3s ease",
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.transform = "scale(1.05)";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.transform = "scale(1)";
//                     }}
//                   >
//                     <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{skill.icon}</div>
//                     <h6 style={{ fontWeight: "bold", color: "#343a40" }}>{skill.name}</h6>
//                   </Card>
//                 </Col>
//               ))}
//             </Row>
//           </div>
//         ))}
//       </Container>
//     </section>
//   );
// };

// export default Skills;


import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiRedux, SiNextdotjs, SiExpress, SiMongodb, SiTailwindcss, SiBootstrap } from "react-icons/si";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setIsVisible(true);
  }, []);

  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "HTML", icon: <FaHtml5 size={40} />, color: "#e34c26", level: 95 },
        { name: "CSS", icon: <FaCss3Alt size={40} />, color: "#264de4", level: 90 },
        { name: "JavaScript", icon: <FaJs size={40} />, color: "#f7df1e", level: 88 },
        { name: "React", icon: <FaReact size={40} />, color: "#61dafb", level: 85 },
        { name: "Redux", icon: <SiRedux size={40} />, color: "#764abc", level: 80 },
        { name: "Next.js", icon: <SiNextdotjs size={40} />, color: "#000000", level: 75 },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={40} />, color: "#38bdf8", level: 85 },
        { name: "Bootstrap", icon: <SiBootstrap size={40} />, color: "#7952b3", level: 90 },
      ],
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", icon: <FaNode size={40} />, color: "#3c873a", level: 82 },
        { name: "Express.js", icon: <SiExpress size={40} />, color: "#000000", level: 80 },
        { name: "MongoDB", icon: <SiMongodb size={40} />, color: "#4db33d", level: 78 },
      ],
    },
    {
      category: "Tools & Version Control",
      items: [
        { name: "Git", icon: <FaGitAlt size={40} />, color: "#f34f29", level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
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
      
      <Container>
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
              Tech Stack & Skills
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
              Technologies and tools I use to bring ideas to life
            </p>
          </Col>
        </Row>

        {skills.map((skillCategory, index) => (
          <div 
            key={index} 
            style={{ marginBottom: "3rem" }}
            className="skill-category"
          >
            <h4 
              style={{ 
                fontWeight: "bold", 
                color: "#495057", 
                marginBottom: "2rem",
                paddingBottom: "0.5rem",
                borderBottom: "2px solid rgba(190, 86, 74, 0.2)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                transition: `opacity 0.8s ease ${0.3 + index * 0.1}s, transform 0.8s ease ${0.3 + index * 0.1}s`
              }}
            >
              {skillCategory.category}
            </h4>
            <Row>
              {skillCategory.items.map((skill, idx) => (
                <Col 
                  xs={6} 
                  md={4} 
                  lg={3} 
                  className="mb-4" 
                  key={idx}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "scale(1)" : "scale(0.9)",
                    transition: `opacity 0.5s ease ${0.4 + idx * 0.1}s, transform 0.5s ease ${0.4 + idx * 0.1}s`
                  }}
                >
                  <Card
                    className="text-center h-100 border-0 skill-card"
                    style={{
                      padding: "1.5rem 1rem",
                      borderRadius: "15px",
                      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
                      transition: "all 0.3s ease",
                      background: "white",
                    }}
                  >
                    <div 
                      style={{ 
                        fontSize: "2.5rem", 
                        marginBottom: "1rem",
                        color: skill.color,
                        transition: "all 0.3s ease"
                      }}
                      className="skill-icon"
                    >
                      {skill.icon}
                    </div>
                    <h6 style={{ fontWeight: "bold", color: "#343a40", marginBottom: "0.5rem" }}>
                      {skill.name}
                    </h6>
                    
                    {/* Skill level indicator */}
                    <div style={{ marginTop: "0.5rem" }}>
                      <div 
                        style={{ 
                          height: "4px", 
                          background: "#e9ecef", 
                          borderRadius: "2px",
                          overflow: "hidden"
                        }}
                      >
                        <div 
                          style={{ 
                            height: "100%", 
                            width: `${skill.level}%`, 
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                            borderRadius: "2px",
                            transition: "width 1s ease 0.5s"
                          }}
                        ></div>
                      </div>
                      <small className="text-muted" style={{ fontSize: "0.75rem" }}>
                        {skill.level}%
                      </small>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}

        {/* Additional info section */}
        <Row className="justify-content-center mt-5">
          <Col md={8} className="text-center">
            <div
              style={{
                padding: "2rem",
                background: "rgba(190, 86, 74, 0.05)",
                borderRadius: "12px",
                border: "1px solid rgba(190, 86, 74, 0.1)"
              }}
            >
              <h5 className="mb-3" style={{ color: "#495057" }}>
                Always Learning
              </h5>
              <p className="text-muted mb-0">
                I'm constantly expanding my skill set and staying up-to-date with the latest technologies 
                and best practices in web development.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Custom Styles */}
      <style>
        {`
          .skill-card:hover {
            transform: translateY(-5px) !important;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
          }
          
          .skill-card:hover .skill-icon {
            transform: scale(1.2);
          }
          
          @media (max-width: 768px) {
            .skill-category {
              text-align: center;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Skills;