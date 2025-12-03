import { motion } from "motion/react";
import { Sparkles, Heart, Lightbulb, Users } from "lucide-react";

export function About() {
  const beliefs = [
    {
      icon: Heart,
      title: "Design should feel.",
      description: "Every interface should evoke emotion and create genuine connections.",
      color: "#ff0080",
    },
    {
      icon: Lightbulb,
      title: "Every product has a story.",
      description: "Behind every design decision is a narrative waiting to be told.",
      color: "#ffff00",
    },
    {
      icon: Users,
      title: "Good design solves, great design connects.",
      description: "Solutions are important, but creating meaningful experiences is transformative.",
      color: "#00ffff",
    },
    {
      icon: Sparkles,
      title: "Art fuels clarity.",
      description: "Creative expression brings focus, purpose, and beauty to functionality.",
      color: "#ff00ff",
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
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
            The Human Behind the <span className="text-[#00ff9f] neon-text-green">Designs</span>
          </motion.h2>
          <motion.div
            className="w-40 h-1 mx-auto rounded-full mt-6"
            style={{
              background: "linear-gradient(90deg, #00ffff, #ff00ff, #00ff9f, #ffff00)",
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

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              {[
                "My journey began with a pencil in hand and curiosity in my heart. From sketching doodles in notebooks to crafting digital experiences that touch lives, creativity has always been my compass.",
                "I started in graphic design, fell in love with UI/UX, and found my calling in product design — where art meets strategy, and empathy meets innovation.",
                "Today, I blend pixels with poetry, wireframes with wonder, and functionality with feeling. Because design isn't just about making things look good — it's about making people feel something.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  className="text-lg leading-relaxed text-foreground/80"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{
                    x: 10,
                    textShadow: "0 0 8px rgba(0, 255, 159, 0.5)",
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.02, rotate: 1 }}
            className="relative"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#00ff9f]/30 neon-glow-green">
              <h3 className="text-2xl mb-6 text-[#00ffff] neon-text-cyan">What Motivates Me</h3>
              <ul className="space-y-4">
                {[
                  { text: "Creating experiences that feel intuitive and emotionally resonant", color: "#ff0080" },
                  { text: "Telling stories through visual language and thoughtful interactions", color: "#00ffff" },
                  { text: "Blending artistic expression with user-centered problem solving", color: "#ff00ff" },
                  { text: "Bringing warmth, personality, and humanity to digital products", color: "#00ff9f" },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{
                      x: 10,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  >
                    <motion.span
                      className="mt-1"
                      style={{ color: item.color }}
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                      }}
                    >
                      ✦
                    </motion.span>
                    <span className="text-foreground/80">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* What I Believe Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-3xl text-center mb-12 text-[#ff00ff] neon-text-magenta">What I Believe</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 2 : -2,
                  boxShadow: `0 0 30px ${belief.color}80`,
                }}
                className="group relative"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-20 blur-xl"
                  style={{ background: belief.color }}
                />
                <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-foreground/10 hover:border-opacity-50 transition-all"
                  style={{ borderColor: `${belief.color}40` }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="p-3 rounded-xl"
                      style={{
                        background: `linear-gradient(135deg, ${belief.color}40, ${belief.color}20)`,
                      }}
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <belief.icon className="w-6 h-6" style={{ color: belief.color }} />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg mb-2 text-foreground">{belief.title}</h4>
                      <p className="text-muted-foreground">{belief.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Artistic Side Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-30 blur-2xl"
            style={{
              background: "linear-gradient(45deg, #00ffff, #ff00ff, #00ff9f)",
            }}
            animate={{
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="relative bg-card/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 text-center border-2 border-[#ff00ff]/30">
            <motion.p
              className="text-2xl md:text-3xl italic text-foreground/90 leading-relaxed"
              animate={{
                textShadow: [
                  "0 0 10px rgba(0, 255, 255, 0.3)",
                  "0 0 20px rgba(255, 0, 255, 0.3)",
                  "0 0 10px rgba(0, 255, 255, 0.3)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              "In between pixels and prototypes, you'll find me with a sketchbook, 
              painting with watercolors, or writing poetry that captures the quiet 
              moments of being human."
            </motion.p>
            <div className="mt-6 flex items-center justify-center gap-4">
              {["✨", "🎨", "📝"].map((emoji, i) => (
                <motion.span
                  key={i}
                  className="text-4xl"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 360],
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
      </div>
    </section>
  );
}
