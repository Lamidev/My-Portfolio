// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
// import {
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaLinkedin,
//   FaGithub,
// } from "react-icons/fa";

// const Contact = () => {
//   // State for form inputs
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(null);

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Set loading and success states
//     setLoading(true);
//     setSuccess(null);

//     fetch(`${import.meta.env.VITE_BACKEND_URL}/api/send-email`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json()) // Parse the JSON response from your backend
//       .then((data) => {
//         if (data.success) {
//           setSuccess("Message sent successfully!");
//           setFormData({ name: "", email: "", subject: "", message: "" }); // Clear the form
//         } else {
//           setSuccess("Failed to send message. Try again later.");
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error); // Log any errors
//         setSuccess("Failed to send message. Try again later.");
//       })
//       .finally(() => {
//         setLoading(false); // Reset loading state after API call
//       });
//   };

//   return (
//     <Container className="py-5" id="contact">
//       <h2 className="text-center mb-4 fw-bold">Contact</h2>
//       <Row className="justify-content-center">
//         {/* Left: Contact Information */}
//         <Col md={5} className="mb-4">
//           <h4>Get in Touch</h4>
//           <div className="mt-3">
//             <p>
//               <FaEnvelope className="me-2 text-dark" /> Akinyemioluwaseunjunior@gmail.com
//             </p>
//             <p>
//               <FaPhone className="me-2 text-dark" /> +23470 5650 1913
//             </p>
//             <p>
//               <FaMapMarkerAlt className="me-2 text-dark" /> Lagos, Nigeria
//             </p>
//           </div>

//           {/* Social Links */}
//           <div className="mt-4 d-flex gap-3">
//             <a
//               href="https://www.linkedin.com/in/akinyemi-oluwatosin-95519130b/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaLinkedin size={28} className="text-dark" />
//             </a>
//             <a
//               href="https://github.com/Thisslami"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaGithub size={28} className="text-dark" />
//             </a>
//           </div>
//         </Col>

//         {/* Right: Contact Form */}
//         <Col md={6}>
//           <Form onSubmit={handleSubmit} className="p-4 shadow-lg rounded-4 bg-light">
//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="text"
//                 placeholder="Enter subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Control
//                 as="textarea"
//                 rows={4}
//                 placeholder="Enter your message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Button 
//               variant="primary" 
//               type="submit" 
//               className="w-100" 
//               disabled={loading} // Disable button while loading
//             >
//               {loading ? (
//                 <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
//               ) : (
//                 "Send Message"
//               )}
//               {loading && " Sending..."} {/* Text will change when loading */}
//             </Button>

//             {success && (
//               <p
//                 className={`mt-3 text-center ${success.includes("successfully") ? "text-success" : "text-danger"}`}
//               >
//                 {success}
//               </p>
//             )}
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Contact;

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaWhatsapp
} from "react-icons/fa";

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setIsVisible(true);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Set loading and success states
    setLoading(true);
    setSuccess(null);

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSuccess("Message sent successfully! I'll get back to you soon.");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setSuccess("Failed to send message. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setSuccess("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section 
      id="contact"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
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
              Get In Touch
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
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {/* Left: Contact Information */}
          <Col 
            md={5} 
            className="mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s"
            }}
          >
            <div className="p-4 h-100" style={{ background: "white", borderRadius: "15px", boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)" }}>
              <h4 className="mb-4" style={{ color: "#343a40", fontWeight: "600" }}>Contact Information</h4>
              
              <div className="mt-3">
                <div className="d-flex align-items-center mb-3 p-3" style={{ background: "rgba(190, 86, 74, 0.05)", borderRadius: "10px" }}>
                  <div style={{ width: "50px", height: "50px", background: "rgba(190, 86, 74, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "1rem" }}>
                    <FaEnvelope className="text-dark" style={{ color: "#BE564A !important" }} />
                  </div>
                  <div>
                    <h6 className="mb-0" style={{ fontWeight: "600" }}>Email</h6>
                    <p className="mb-0 text-muted">Akinyemioluwaseunjunior@gmail.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3 p-3" style={{ background: "rgba(190, 86, 74, 0.05)", borderRadius: "10px" }}>
                  <div style={{ width: "50px", height: "50px", background: "rgba(190, 86, 74, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "1rem" }}>
                    <FaPhone className="text-dark" style={{ color: "#BE564A !important" }} />
                  </div>
                  <div>
                    <h6 className="mb-0" style={{ fontWeight: "600" }}>Phone</h6>
                    <p className="mb-0 text-muted">+23470 5650 1913</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3 p-3" style={{ background: "rgba(190, 86, 74, 0.05)", borderRadius: "10px" }}>
                  <div style={{ width: "50px", height: "50px", background: "rgba(190, 86, 74, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "1rem" }}>
                    <FaMapMarkerAlt className="text-dark" style={{ color: "#BE564A !important" }} />
                  </div>
                  <div>
                    <h6 className="mb-0" style={{ fontWeight: "600" }}>Location</h6>
                    <p className="mb-0 text-muted">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-4">
                <h6 className="mb-3" style={{ fontWeight: "600" }}>Follow Me</h6>
                <div className="d-flex gap-3">
                  {[
                    { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/akinyemi-oluwatosin-95519130b/", color: "#0077b5" },
                    { icon: <FaGithub size={24} />, href: "https://github.com/Thisslami", color: "#333" },
                    { icon: <FaWhatsapp size={24} />, href: "https://wa.me/2347056501913", color: "#25D366" }
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
              </div>
            </div>
          </Col>

          {/* Right: Contact Form */}
          <Col 
            md={6}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s"
            }}
          >
            <Form 
              onSubmit={handleSubmit} 
              className="p-4 h-100 rounded-4"
              style={{ 
                background: "white", 
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
                border: "1px solid rgba(190, 86, 74, 0.1)"
              }}
            >
              <h4 className="mb-4" style={{ color: "#343a40", fontWeight: "600" }}>Send a Message</h4>

              <Form.Group className="mb-3">
                <Form.Label style={{ fontWeight: "500" }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your full name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ 
                    padding: "0.75rem 1rem", 
                    borderRadius: "10px",
                    border: "2px solid #e9ecef",
                    transition: "all 0.3s ease"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#BE564A";
                    e.target.style.boxShadow = "0 0 0 0.2rem rgba(190, 86, 74, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e9ecef";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ fontWeight: "500" }}>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your email address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ 
                    padding: "0.75rem 1rem", 
                    borderRadius: "10px",
                    border: "2px solid #e9ecef",
                    transition: "all 0.3s ease"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#BE564A";
                    e.target.style.boxShadow = "0 0 0 0.2rem rgba(190, 86, 74, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e9ecef";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ fontWeight: "500" }}>Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="What's this about?"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{ 
                    padding: "0.75rem 1rem", 
                    borderRadius: "10px",
                    border: "2px solid #e9ecef",
                    transition: "all 0.3s ease"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#BE564A";
                    e.target.style.boxShadow = "0 0 0 0.2rem rgba(190, 86, 74, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e9ecef";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label style={{ fontWeight: "500" }}>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Tell me about your project or inquiry..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ 
                    padding: "0.75rem 1rem", 
                    borderRadius: "10px",
                    border: "2px solid #e9ecef",
                    transition: "all 0.3s ease",
                    resize: "vertical"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#BE564A";
                    e.target.style.boxShadow = "0 0 0 0.2rem rgba(190, 86, 74, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e9ecef";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 py-3" 
                disabled={loading}
                style={{
                  background: "linear-gradient(45deg, #BE564A, #ff7b00)",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 8px 15px rgba(190, 86, 74, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                {loading ? (
                  <>
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="me-2" />
                    Send Message
                  </>
                )}
              </Button>

              {success && (
                <Alert 
                  variant={success.includes("successfully") ? "success" : "danger"} 
                  className="mt-4"
                  style={{ borderRadius: "10px", border: "none" }}
                >
                  {success}
                </Alert>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;