import { motion } from "motion/react";
import { BookOpen, Feather } from "lucide-react";
import { PoetryBook } from "./PoetryBook";
import { useState } from "react";

export function Poetry() {
  const [showPoetryBook, setShowPoetryBook] = useState(false);

  return (
    <section id="poetry" className="relative py-24 px-6 overflow-hidden">
      {/* Animated background */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80, 0],
            rotate: [0, 360],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
        >
          <Feather className="w-6 h-6 text-[#ffff00]" />
        </motion.div>
      ))}

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="inline-block mb-8"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-[#ffff00]" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl mb-6"
            animate={{
              textShadow: [
                "0 0 20px rgba(255, 255, 0, 0.5)",
                "0 0 30px rgba(255, 0, 255, 0.5)",
                "0 0 20px rgba(255, 255, 0, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Words from the <span className="text-[#ff00ff] neon-text-magenta">Heart</span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Between pixels and prototypes, I write poetry. 
            Each verse is a moment of reflection, creativity, and humanity.
          </motion.p>

          <motion.div
            className="w-40 h-1 mx-auto rounded-full mb-12"
            style={{
              background: "linear-gradient(90deg, #ffff00, #ff00ff, #00ffff)",
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative inline-block"
          >
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-30 blur-3xl"
              style={{
                background: "linear-gradient(135deg, #ffff00, #ff00ff, #00ffff)",
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
            <div
              className="relative bg-card/30 backdrop-blur-sm rounded-3xl p-12 border-2 cursor-pointer"
              style={{ borderColor: "#ff00ff40" }}
              onClick={() => setShowPoetryBook(true)}
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <BookOpen className="w-20 h-20 mx-auto mb-6 text-[#ff00ff]" />
              </motion.div>
              <h3 className="text-2xl mb-4 text-[#ffff00]">Open My Poetry Collection</h3>
              <p className="text-muted-foreground mb-6">
                A curated collection of poems about design, creativity, and the human experience
              </p>
              <motion.div
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2"
                style={{
                  background: "linear-gradient(90deg, #ffff00, #ff00ff)",
                  borderColor: "#ff00ff",
                  color: "#0a0a0f",
                  boxShadow: "0 0 30px #ff00ff60",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-5 h-5" />
                Read Poetry
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <motion.p
              className="text-muted-foreground italic text-lg"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255, 255, 0, 0.3)",
                  "0 0 20px rgba(255, 0, 255, 0.3)",
                  "0 0 10px rgba(255, 255, 0, 0.3)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              "In every line, a piece of my soul. In every verse, a story untold."
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Poetry Book Modal */}
      {showPoetryBook && <PoetryBook onClose={() => setShowPoetryBook(false)} />}
    </section>
  );
}
