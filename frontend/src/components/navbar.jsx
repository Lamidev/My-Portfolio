import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NavBar = ({ scrollToSection, aboutRef, projectsRef, skillsRef, contactRef }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("about");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = [
        { id: "about", ref: aboutRef },
        { id: "projects", ref: projectsRef },
        { id: "skills", ref: skillsRef },
        { id: "contact", ref: contactRef },
      ];

      const current = sections.find(section => {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveLink(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [aboutRef, projectsRef, skillsRef, contactRef]);

  const navLinks = [
    { name: "About", id: "about", ref: aboutRef },
    { name: "Projects", id: "projects", ref: projectsRef },
    { name: "Skills", id: "skills", ref: skillsRef },
    { name: "Contact", id: "contact", ref: contactRef },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-bg-dark/80 backdrop-blur-xl border-b' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer"
          onClick={() => scrollToSection(aboutRef)}
        >
          <span className="text-2xl font-extrabold tracking-tight gradient-text">
            Lamidev
          </span>
        </motion.div>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, idx) => (
            <motion.button
              key={link.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => scrollToSection(link.ref)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeLink === link.id 
                  ? 'text-text-primary bg-primary/10 border border-primary/20' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.name}
            </motion.button>
          ))}
        </div>

        <button 
          className="lg:hidden p-2 text-text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-bg-dark border-b overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    scrollToSection(link.ref);
                    setIsOpen(false);
                  }}
                  className={`text-left py-2 text-lg font-medium ${
                    activeLink === link.id ? 'text-primary' : 'text-text-secondary'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;