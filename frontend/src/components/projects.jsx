import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./project-card";
import Homepic from "../assets/homeImg.png";
import Homepic2 from "../assets/homeImg2.png";
import Homepic3 from "../assets/homeImg3.png";
import Homepic4 from "../assets/homeImg4.png";
import Homepic5 from "../assets/homeImg5.png";

const Project = () => {
  const projects = [
    {
      title: "Kredibly",
      description: "From local commerce to global scale. Kredibly is the intelligent ledger that helps you automate sales, track what you're owed, and monitor operations, all inside the WhatsApp you already use.",
      image: Homepic5,
      link: "https://usekredibly.com",
      technologies: ["React", "Node.js", "WhatsApp API", "Socket.io", "Tailwind"]
    },
    {
      title: "Roote Ancestral Learning Hub",
      description: "An immersive Yoruba language learning platform with assessment tools, automated class scheduling, and full student management system.",
      image: Homepic4,
      link: "https://rooteancestrallearninghub.com",
      technologies: ["MERN Stack", "Wise.live API", "Resend", "Tailwind"]
    },
    {
      title: "Gadgets Grid",
      description: "A high-performance e-commerce platform for tech enthusiasts, featuring secure payments, real-time inventory, and intuitive product discovery.",
      image: Homepic,
      link: "https://gadgetsgrid.ng",
      technologies: ["React", "Express", "MongoDB", "Paystack"]
    },
    {
      title: "Euphoric Touch",
      description: "A professional massage therapy website offering relaxation and wellness services built with MERN stack.",
      image: Homepic2,
      link: "https://euphoric-touch-with-tish.onrender.com",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Chizzy Kids School",
      description: "Comprehensive school management system streamlining administration, attendance, and student progress tracking for modern educational institutions.",
      image: "https://res.cloudinary.com/djbtdlzrj/image/upload/v1738102417/Screenshot_2025-01-28_231209_wmkvwt.png",
      link: "http://chizzykidsgroupofschools.com.ng",
      technologies: ["React", "Node.js", "MongoDB", "CMS"]
    },
    {
      title: "Afkit Nigeria",
      description: "Premium retail platform for gadgets and accessories with automated warranty management and efficient order fulfillment workflows.",
      image: Homepic3,
      link: "https://afkit.ng",
      technologies: ["React", "Express", "Node.js", "Cloudinary"]
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Featured <span className="gradient-text">Productions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of industry-level applications built with scalability and user experience at the core.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <div key={idx} className="h-full">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
