import { motion } from "motion/react";
import { Palette, Monitor, Layers, Sparkles, PenTool, Compass } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Monitor,
      title: "UI/UX Design",
      description: "Creating intuitive, beautiful interfaces that users love to interact with.",
      color: "#00ffff",
    },
    {
      icon: Layers,
      title: "Product Design",
      description: "End-to-end product experiences that solve real problems with empathy and insight.",
      color: "#ff00ff",
    },
    {
      icon: Compass,
      title: "Website Design",
      description: "Responsive, engaging websites that tell your story and connect with your audience.",
      color: "#00ff9f",
    },
    {
      icon: Palette,
      title: "Branding & Logo Design",
      description: "Visual identities that capture essence, evoke emotion, and leave lasting impressions.",
      color: "#ffff00",
    },
    {
      icon: PenTool,
      title: "Illustration",
      description: "Custom illustrations that add personality, warmth, and a unique artistic touch.",
      color: "#ff0080",
    },
    {
      icon: Sparkles,
      title: "Creative Direction",
      description: "Strategic vision that brings creative ideas to life with purpose and impact.",
      color: "#0080ff",
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(#00ff9f 2px, transparent 2px),
            linear-gradient(90deg, #00ff9f 2px, transparent 2px)
          `,
          backgroundSize: "100px 100px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "100px 100px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl mb-4"
            animate={{
              textShadow: [
                "0 0 20px rgba(255, 255, 0, 0.5)",
                "0 0 30px rgba(0, 255, 255, 0.5)",
                "0 0 20px rgba(255, 255, 0, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            What I Love <span className="text-[#ff00ff] neon-text-magenta">Creating</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every service is an opportunity to blend creativity with purpose, art with strategy.
          </p>
          <motion.div
            className="w-40 h-1 mx-auto rounded-full mt-6"
            style={{
              background: "linear-gradient(90deg, #00ff9f, #ffff00, #ff00ff, #00ffff)",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * index, type: "spring" }}
              whileHover={{
                y: -12,
                rotateZ: index % 2 === 0 ? 3 : -3,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group relative"
            >
              {/* Neon glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 blur-2xl transition-opacity"
                style={{ background: service.color }}
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              />

              <div
                className="relative bg-card/30 backdrop-blur-sm rounded-2xl p-8 h-full border-2 transition-all"
                style={{ borderColor: `${service.color}30` }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${service.color}, transparent)`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="inline-flex p-4 rounded-xl mb-6 border-2"
                    style={{
                      background: `${service.color}10`,
                      borderColor: `${service.color}40`,
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: `0 0 30px ${service.color}80`,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8" style={{ color: service.color }} />
                  </motion.div>

                  <motion.h3
                    className="text-2xl mb-3"
                    style={{ color: service.color }}
                    whileHover={{
                      textShadow: `0 0 20px ${service.color}`,
                      x: 5,
                    }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Animated corner accents */}
                {[0, 1, 2, 3].map((corner) => (
                  <motion.div
                    key={corner}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      background: service.color,
                      top: corner < 2 ? "10px" : "auto",
                      bottom: corner >= 2 ? "10px" : "auto",
                      left: corner % 2 === 0 ? "10px" : "auto",
                      right: corner % 2 === 1 ? "10px" : "auto",
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: corner * 0.2 + index * 0.1,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="mt-16 relative"
        >
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-30 blur-3xl"
            style={{
              background: "linear-gradient(45deg, #00ffff, #ff00ff, #00ff9f)",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="relative text-center bg-card/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 border-2 border-[#00ff9f]/30">
            <motion.p
              className="text-xl md:text-2xl text-foreground/90 italic leading-relaxed"
              animate={{
                textShadow: [
                  "0 0 10px rgba(0, 255, 159, 0.3)",
                  "0 0 20px rgba(255, 0, 255, 0.3)",
                  "0 0 10px rgba(0, 255, 159, 0.3)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              "I don't just create designs — I craft experiences that resonate, 
              connect, and inspire. Let's make something meaningful together."
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
