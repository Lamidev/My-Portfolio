import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, ExternalLink, Code2, Database } from "lucide-react";
import Lamidev from "../assets/Lamidev.jpg";

const AboutMe = ({ scrollToSection, projectsRef, contactRef }) => {
  return (
    <section id="about" className="min-h-screen flex items-center relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
                <span className="w-10 h-[2px] bg-primary"></span>
                <span className="text-primary font-bold uppercase tracking-widest text-[10px] sm:text-xs">Available for Projects</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 lg:mb-8 leading-tight">
                Crafting Digital <br />
                <span className="gradient-text whitespace-nowrap">Experiences</span>
              </h1>
              
              <p className="text-text-secondary text-lg sm:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Hi, I'm <span className="text-text-primary font-bold">Akinyemi Oluwatosin</span>. 
                A Full-Stack Software Engineer dedicated to building high-performance, 
                scalable web applications and intuitive interfaces.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
                <button 
                  onClick={() => scrollToSection(projectsRef)}
                  className="btn-premium"
                >
                  View My Work <ExternalLink size={20} />
                </button>
                <a 
                  href="https://drive.google.com/file/d/1iHczIq54ox4ymA7y5YeIRMMZFSy3w0hR/view?usp=drivesdk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline-premium"
                >
                  Download CV <Download size={20} />
                </a>
              </div>

              <div className="flex gap-6 justify-center lg:justify-start">
                {[
                  { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/akinyemi-oluwatosin-95519130b/" },
                  { icon: <Github size={24} />, href: "https://github.com/Lamidev" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, color: '#6366f1' }}
                    className="text-text-secondary transition-all hover:text-text-primary"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 order-2 relative px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-[450px]"
            >
              <div className="p-3 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden group">
                <div className="relative rounded-[2rem] overflow-hidden bg-bg-dark border border-white/5">
                  <img 
                    src={Lamidev} 
                    alt="Akinyemi Oluwatosin" 
                    className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                </div>
              </div>

              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-[5%] -right-2 sm:-right-[5%] bg-bg-dark/80 backdrop-blur-xl border border-primary/30 px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl flex items-center gap-2 shadow-xl z-20"
              >
                <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg">
                  <Code2 size={16} className="text-primary" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-text-primary uppercase tracking-tighter text-nowrap">Frontend</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-[15%] -left-2 sm:-left-[5%] bg-bg-dark/80 backdrop-blur-xl border border-secondary/30 px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl flex items-center gap-2 shadow-xl z-20"
              >
                <div className="p-1.5 sm:p-2 bg-secondary/20 rounded-lg">
                  <Database size={16} className="text-secondary" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-text-primary uppercase tracking-tighter text-nowrap">Backend</span>
              </motion.div>

              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;