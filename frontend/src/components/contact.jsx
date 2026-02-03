import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Github, Linkedin, MessageSquare, Loader2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSuccess("Message sent successfully! I'll be in touch soon.");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setSuccess(data.error || "Oops! Something went wrong. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Contact Form Error:", err);
        setSuccess("Connection error. Please ensure the backend is awake and try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-24 relative decorative-bg">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 font-outfit">
              Let's <span className="gradient-text">Collaborate</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Ready to build something amazing? Let's turn your ideas into digital reality.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass-card p-8 shadow-2xl">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">Email Me</p>
                    <p className="text-text-primary font-bold break-all">Akinyemioluwaseunjunior@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 shadow-2xl">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">Call Me</p>
                    <p className="text-text-primary font-bold">+234 705 650 1913</p>
                    <p className="text-text-primary font-bold">+234 707 123 8658</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 shadow-2xl text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-6">Connect on Socials</p>
                <div className="flex justify-center gap-8">
                  {[
                    { icon: <Linkedin size={28} />, href: "https://www.linkedin.com/in/akinyemi-oluwatosin-95519130b/" },
                    { icon: <Github size={28} />, href: "https://github.com/Lamidev" },
                    { icon: <MessageSquare size={28} />, href: "https://wa.me/2347056501913" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      whileHover={{ scale: 1.2, color: 'var(--color-primary)' }}
                      className="text-text-secondary transition-all hover:text-text-primary"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 sm:p-12 shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted px-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 text-text-primary p-4 rounded-xl focus:outline-none focus:border-primary/50 transition-all placeholder:text-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted px-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 text-text-primary p-4 rounded-xl focus:outline-none focus:border-primary/50 transition-all placeholder:text-gray-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted px-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 text-text-primary p-4 rounded-xl focus:outline-none focus:border-primary/50 transition-all placeholder:text-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted px-1">Message</label>
                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 text-text-primary p-4 rounded-xl focus:outline-none focus:border-primary/50 transition-all placeholder:text-gray-700 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-premium w-full py-5 justify-center"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" size={24} />
                  ) : (
                    <>Send Message <Send size={20} /></>
                  )}
                </button>
              </form>

              {success && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className={`mt-8 p-4 rounded-xl text-center text-sm font-medium border ${
                    success.includes("Oops") || success.includes("Error")
                      ? "bg-red-500/10 border-red-500/20 text-red-400"
                      : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                  }`}
                >
                  {success}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;