import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Bhumi's designs don't just work — they feel. She has an incredible ability to infuse emotion into every pixel.",
      author: "Sarah Chen",
      role: "Product Manager",
      color: "#ff0080",
    },
    {
      quote: "Her attention to detail is unreal. Every interaction is thoughtfully crafted, every element has a purpose.",
      author: "Marcus Rodriguez",
      role: "Engineering Lead",
      color: "#00ffff",
    },
    {
      quote: "Creative, sharp, empathetic — everything you want in a designer. Working with Bhumi elevated our entire product.",
      author: "Aisha Patel",
      role: "Founder & CEO",
      color: "#00ff9f",
    },
    {
      quote: "She brings a unique blend of artistic vision and strategic thinking. The results speak for themselves.",
      author: "James Wilson",
      role: "Creative Director",
      color: "#ffff00",
    },
    {
      quote: "Bhumi doesn't just design interfaces — she creates experiences that connect with people on a human level.",
      author: "Priya Sharma",
      role: "UX Researcher",
      color: "#ff00ff",
    },
    {
      quote: "Her ability to balance beauty with functionality is remarkable. Every project becomes a work of art.",
      author: "David Kim",
      role: "Startup Founder",
      color: "#0080ff",
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Floating stars */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
        >
          <Star className="w-4 h-4 text-[#ffff00]" fill="#ffff00" />
        </motion.div>
      ))}

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
                "0 0 20px rgba(0, 255, 255, 0.5)",
                "0 0 30px rgba(255, 0, 128, 0.5)",
                "0 0 20px rgba(0, 255, 255, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Kind Words from <span className="text-[#00ff9f] neon-text-green">Collaborators</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What people say about working with me.
          </p>
          <motion.div
            className="w-40 h-1 mx-auto rounded-full mt-6"
            style={{
              background: "linear-gradient(90deg, #ff0080, #00ffff, #00ff9f)",
              backgroundSize: "300% 100%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * index, type: "spring" }}
              whileHover={{
                y: -10,
                scale: 1.05,
                rotateZ: index % 2 === 0 ? 2 : -2,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group relative"
            >
              {/* Neon glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 blur-2xl transition-opacity"
                style={{ background: testimonial.color }}
              />

              <div
                className="relative bg-card/30 backdrop-blur-sm rounded-2xl p-8 h-full border-2 transition-all"
                style={{ borderColor: `${testimonial.color}30` }}
              >
                {/* Animated quote icon */}
                <motion.div
                  className="mb-4 relative"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                >
                  <Quote className="w-10 h-10 opacity-40" style={{ color: testimonial.color }} />
                  <motion.div
                    className="absolute inset-0 blur-xl"
                    style={{ background: testimonial.color }}
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                <motion.p
                  className="text-foreground/80 leading-relaxed mb-6 italic"
                  whileHover={{
                    x: 5,
                    textShadow: `0 0 10px ${testimonial.color}40`,
                  }}
                >
                  "{testimonial.quote}"
                </motion.p>

                <div
                  className="border-t pt-4"
                  style={{ borderColor: `${testimonial.color}30` }}
                >
                  <motion.p
                    className="text-foreground"
                    style={{ color: testimonial.color }}
                    whileHover={{
                      textShadow: `0 0 15px ${testimonial.color}`,
                    }}
                  >
                    {testimonial.author}
                  </motion.p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>

                {/* Corner accents */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full"
                  style={{ background: testimonial.color }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-2 h-2 rounded-full"
                  style={{ background: testimonial.color }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2 + 0.5,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.p
            className="text-muted-foreground italic text-lg"
            animate={{
              textShadow: [
                "0 0 10px rgba(0, 255, 159, 0.3)",
                "0 0 20px rgba(255, 0, 128, 0.3)",
                "0 0 10px rgba(0, 255, 159, 0.3)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            "Every collaboration is a chance to create something beautiful together."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
