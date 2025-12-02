import { motion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t-2 border-[#00ff9f]/30 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, #00ffff 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, #ff00ff 1px, transparent 1px),
            radial-gradient(circle at 40% 20%, #00ff9f 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 3 === 0 ? "#00ffff" : i % 3 === 1 ? "#ff00ff" : "#00ff9f",
            left: `${Math.random() * 100}%`,
            bottom: "0%",
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <motion.div
              className="absolute inset-0 blur-2xl"
              style={{
                background: "linear-gradient(90deg, #00ffff, #ff00ff, #00ff9f)",
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.h3
              className="relative text-3xl mb-2"
              style={{
                background: "linear-gradient(90deg, #00ffff, #ff00ff, #00ff9f, #ffff00)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Bhumi
            </motion.h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground italic"
            animate={{
              textShadow: [
                "0 0 10px rgba(0, 255, 159, 0.2)",
                "0 0 20px rgba(255, 0, 255, 0.2)",
                "0 0 10px rgba(0, 255, 159, 0.2)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Designing with empathy, creating with purpose
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <span>Crafted with</span>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 text-[#ff0080] fill-[#ff0080]" />
            </motion.div>
            <span>and a little bit of</span>
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-4 h-4 text-[#ffff00]" />
            </motion.div>
            <span className="text-[#00ffff]">magic</span>
          </motion.div>

          <motion.div
            className="w-40 h-0.5 mx-auto rounded-full"
            style={{
              background: "linear-gradient(90deg, #00ffff, #ff00ff, #00ff9f)",
              backgroundSize: "200% 100%",
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs text-muted-foreground/70"
          >
            <motion.span
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              © {new Date().getFullYear()} Bhumi. All rights reserved.
            </motion.span>
          </motion.div>

          {/* Decorative elements */}
          <div className="flex items-center justify-center gap-8 pt-4">
            {[
              { emoji: "✨", color: "#ffff00", delay: 0 },
              { emoji: "🎨", color: "#ff00ff", delay: 0.3 },
              { emoji: "💫", color: "#00ffff", delay: 0.6 },
            ].map((item, i) => (
              <motion.span
                key={i}
                className="text-2xl"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                }}
                style={{
                  filter: `drop-shadow(0 0 10px ${item.color}80)`,
                }}
              >
                {item.emoji}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
