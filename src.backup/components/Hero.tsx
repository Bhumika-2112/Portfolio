import { motion } from "motion/react";
import { ChevronDown, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              className="inline-block"
            >
              <span className="text-sm tracking-wider uppercase text-[#00ffff] neon-text-cyan flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Where Creativity Finds Meaning
                <Zap className="w-4 h-4" />
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl leading-tight"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Hi, I'm{" "}
              <motion.span
                className="inline-block"
                style={{
                  background: "linear-gradient(45deg, #00ffff, #ff00ff, #00ff9f, #ffff00)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                animate={{
                  backgroundPosition: isHovered ? ["0% 50%", "100% 50%", "0% 50%"] : "0% 50%",
                }}
                transition={{
                  duration: 3,
                  repeat: isHovered ? Infinity : 0,
                  ease: "linear",
                }}
              >
                Bhumi
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative"
            >
              <motion.p
                className="text-xl md:text-2xl italic leading-relaxed text-foreground/90"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(0, 255, 255, 0.5)",
                    "0 0 20px rgba(255, 0, 255, 0.5)",
                    "0 0 10px rgba(0, 255, 255, 0.5)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                "I design with intuition, empathy, and a little bit of{" "}
                <span className="text-[#ff00ff] neon-text-magenta">magic</span>."
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-3"
            >
              <motion.p
                className="text-lg text-muted-foreground"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-[#00ffff]">UI/UX Designer</span> •{" "}
                <span className="text-[#ff00ff]">Product Thinker</span> •{" "}
                <span className="text-[#00ff9f]">Branding Artist</span> •{" "}
                <span className="text-[#ffff00]">Illustrator</span> •{" "}
                <span className="text-[#ff0080]">Creative Storyteller</span>
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#00ffff] to-[#ff00ff] text-[#0a0a0f] rounded-full px-8 neon-glow-cyan hover:neon-glow-magenta transition-all"
                  onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-2 border-[#00ff9f] text-[#00ff9f] hover:bg-[#00ff9f] hover:text-[#0a0a0f] neon-glow-green transition-all"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Connect
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image with crazy effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative rounded-3xl overflow-hidden">
                {/* Neon border effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    padding: "3px",
                    background: "linear-gradient(45deg, #00ffff, #ff00ff, #00ff9f, #ffff00)",
                    backgroundSize: "300% 300%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full bg-card rounded-3xl"></div>
                </motion.div>

                <div className="relative z-10">
                  <motion.div
                    className="absolute inset-0 z-20"
                    style={{
                      background: "linear-gradient(45deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2))",
                      mixBlendMode: "overlay",
                    }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1753164597539-af93605a9178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvbWFuJTIwZGVzaWduZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQzOTM4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Bhumi - Creative Designer"
                    className="w-full h-auto relative z-10"
                  />
                </div>
              </div>

              {/* Floating neon orbs around image */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-20 h-20 rounded-full"
                  style={{
                    background: i % 2 === 0 ? "#00ffff" : "#ff00ff",
                    filter: "blur(20px)",
                    left: i % 2 === 0 ? "-10%" : "auto",
                    right: i % 2 === 1 ? "-10%" : "auto",
                    top: i < 2 ? "-10%" : "auto",
                    bottom: i >= 2 ? "-10%" : "auto",
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with neon effect */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          animate={{
            boxShadow: [
              "0 0 10px rgba(0, 255, 159, 0.5)",
              "0 0 20px rgba(0, 255, 159, 0.8)",
              "0 0 10px rgba(0, 255, 159, 0.5)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="rounded-full p-2 bg-card/50 backdrop-blur-sm"
        >
          <ChevronDown className="w-6 h-6 text-[#00ff9f]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
