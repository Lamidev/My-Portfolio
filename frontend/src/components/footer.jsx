import React from "react";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-20 border-t bg-bg-dark/50 backdrop-blur-3xl border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 text-center lg:text-left">
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
              <span className="text-2xl font-black gradient-text font-outfit">Lamidev</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
              Transforming complex problems into elegant, user-centric solutions. 
              Specializing in full-stack architecture and high-performance web experiences.
            </p>
          </div>

          <div className="lg:col-span-4 text-center">
            <h6 className="text-text-primary font-bold uppercase tracking-widest text-xs mb-8 font-outfit">Navigation</h6>
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`}
                  className="text-text-secondary text-sm font-medium hover:text-text-primary transition-all underline-offset-8 hover:underline decoration-primary"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-4 text-center lg:text-right">
            <h6 className="text-text-primary font-bold uppercase tracking-widest text-xs mb-8 font-outfit">Social Connections</h6>
            <div className="flex justify-center lg:justify-end gap-6 mb-8">
              {[
                { icon: <Github size={22} />, href: "https://github.com/Lamidev" },
                { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/akinyemi-oluwatosin-95519130b/" },
                { icon: <Twitter size={22} />, href: "https://x.com/Lamibadboy" },
                { icon: <Mail size={22} />, href: "mailto:akinyemioluwaseunjunior@gmail.com" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  whileHover={{ y: -5, color: '#6366f1' }}
                  className="text-text-secondary hover:text-text-primary transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-text-muted text-xs flex items-center justify-center lg:justify-end gap-1">
              &copy; {new Date().getFullYear()} <span className="text-text-primary font-bold">Lamidev</span> | Akinyemi Oluwatosin. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;