import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const ProjectCard = ({ title, description, image, link, technologies = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden group hover:border-primary/30 transition-all flex flex-col h-full shadow-2xl"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
        
        <div className="absolute top-6 right-6">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-text-primary hover:bg-primary hover:border-primary transition-all shadow-xl"
          >
            <ArrowUpRight size={24} />
          </a>
        </div>
      </div>

      <div className="p-10 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors font-outfit">
          {title}
        </h3>
        
        <p className="text-text-secondary mb-8 flex-grow leading-relaxed">
          {description}
        </p>

        <div className="space-y-6 mt-auto">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary/10 border border-primary/20 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>

          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-primary font-bold text-sm tracking-wide group/link"
          >
            Explore Project 
            <ExternalLink size={16} className="text-primary group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;