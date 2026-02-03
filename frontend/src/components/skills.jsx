import React from "react";
import { motion } from "framer-motion";
import { 
  Globe2, 
  Terminal, 
  Cpu, 
  Layout, 
  Zap, 
  Server
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Layout className="text-primary" size={28} />,
      skills: ["React & Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Redux Toolkit", "Framer Motion"],
      description: "Building immersive, performant user interfaces with modern frameworks."
    },
    {
      title: "Backend Development",
      icon: <Server className="text-secondary" size={28} />,
      skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Node Mailer", "RESTful APIs"],
      description: "Architecting scalable server-side systems and efficient databases."
    },
    {
      title: "Web Technologies",
      icon: <Globe2 className="text-emerald-400" size={28} />,
      skills: ["HTML5 / CSS3", "Modern JavaScript", "WebSockets", "OAuth 2.0", "SEO Optimization"],
      description: "Standard web protocols and core development principles."
    },
    {
      title: "DevOps & Tools",
      icon: <Terminal className="text-orange-400" size={28} />,
      skills: ["Git & GitHub", "Vercel / Netlify", "Docker", "CI/CD Pipelines", "Linux Terminal"],
      description: "Deployment, version control, and system administration."
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-bg-dark/50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 font-outfit">
              Technical <span className="gradient-text">Mastery</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A comprehensive suite of technologies and methodologies I use to solve complex digital challenges.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 relative overflow-hidden group hover:border-primary/30 transition-all shadow-2xl"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-6">
                  <div className="p-4 bg-white/5 rounded-2xl border transition-colors group-hover:bg-primary/10 group-hover:border-primary/20">
                    {cat.icon}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{cat.title}</h3>
                </div>

                <p className="text-text-secondary mb-8 leading-relaxed">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-white/5 border text-text-secondary transition-all hover:bg-primary hover:text-text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                <Zap size={160} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center p-6 rounded-2xl border border-dashed"
        >
          <div className="flex items-center justify-center gap-3 text-text-secondary text-sm italic">
            <Cpu size={16} className="text-primary" />
            <span>Currently exploring AI Integration & Cloud Architecture.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;