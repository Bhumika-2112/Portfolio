import { motion } from "motion/react";
import { Mail, Linkedin, Instagram, Dribbble, Send, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! I'll get back to you soon. ✨");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: Dribbble,
      label: "Dribbble",
      url: "#",
      color: "#ff0080",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "#",
      color: "#00ffff",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "#",
      color: "#ff00ff",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:hello@bhumi.design",
      color: "#00ff9f",
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Animated particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 4 === 0 ? "#00ffff" : i % 4 === 1 ? "#ff00ff" : i % 4 === 2 ? "#00ff9f" : "#ffff00",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
            scale: [0, 2, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-6 h-6 text-[#ffff00]" />
            <motion.h2
              className="text-4xl md:text-5xl"
              animate={{
                textShadow: [
                  "0 0 20px rgba(0, 255, 255, 0.5)",
                  "0 0 30px rgba(255, 0, 255, 0.5)",
                  "0 0 20px rgba(0, 255, 255, 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Let's Create Something <span className="text-[#00ff9f] neon-text-green">Beautiful</span>
            </motion.h2>
            <Sparkles className="w-6 h-6 text-[#ffff00]" />
          </motion.div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to collaborate on meaningful projects. Drop me a message!
          </p>
          <motion.div
            className="w-40 h-1 mx-auto rounded-full mt-6"
            style={{
              background: "linear-gradient(90deg, #00ffff, #ff00ff, #00ff9f, #ffff00)",
              backgroundSize: "400% 100%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-20 blur-3xl"
              style={{ background: "linear-gradient(45deg, #00ffff, #ff00ff)" }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-[#00ffff]">
                  Your Name
                </label>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-card/30 backdrop-blur-sm border-2 border-[#00ffff]/30 rounded-xl focus:border-[#00ffff] transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </motion.div>
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-[#ff00ff]">
                  Your Email
                </label>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-card/30 backdrop-blur-sm border-2 border-[#ff00ff]/30 rounded-xl focus:border-[#ff00ff] transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </motion.div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-[#00ff9f]">
                  Your Message
                </label>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or just say hi!"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full bg-card/30 backdrop-blur-sm border-2 border-[#00ff9f]/30 rounded-xl resize-none focus:border-[#00ff9f] transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-xl group relative overflow-hidden"
                  style={{
                    background: "linear-gradient(90deg, #00ffff, #ff00ff)",
                    color: "#0a0a0f",
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(90deg, #ff00ff, #00ffff)",
                    }}
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Right Side - Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-30 blur-2xl"
                style={{
                  background: "linear-gradient(135deg, #ff0080, #00ffff, #00ff9f)",
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="relative bg-card/20 backdrop-blur-lg rounded-3xl p-8 border-2 border-[#ff00ff]/30">
                <motion.p
                  className="text-lg text-foreground/80 leading-relaxed mb-6 italic"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(255, 0, 255, 0.2)",
                      "0 0 20px rgba(0, 255, 255, 0.2)",
                      "0 0 10px rgba(255, 0, 255, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  "Whether you have a project in mind, want to collaborate, or just want to chat 
                  about design and creativity — I'd love to hear from you!"
                </motion.p>
                <div className="flex gap-3 justify-center">
                  {["✨", "💌", "🎨"].map((emoji, i) => (
                    <motion.span
                      key={i}
                      className="text-2xl"
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3,
                      }}
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card/30 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#00ff9f]/30"
            >
              <h3 className="text-xl mb-6 text-[#00ffff] neon-text-cyan">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{
                      x: 15,
                      boxShadow: `0 0 25px ${link.color}60`,
                    }}
                    className="flex items-center gap-4 p-4 bg-card/30 backdrop-blur-sm rounded-xl border-2 transition-all group"
                    style={{ borderColor: `${link.color}30` }}
                  >
                    <motion.div
                      className="p-2 rounded-lg border"
                      style={{
                        background: `${link.color}10`,
                        borderColor: `${link.color}40`,
                      }}
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <link.icon className="w-5 h-5" style={{ color: link.color }} />
                    </motion.div>
                    <span className="text-foreground">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="text-center"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="text-sm text-[#00ff9f]">
                Available for freelance projects & collaborations
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
