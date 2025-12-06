import { motion } from "motion/react";
import { ChevronDown, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

/**
 * Forced-small Hero component
 * - Uses a plain <img> with inline style to strictly control size (height + max-width)
 * - Keeps the layout and animations simple
 */

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="text-sm tracking-wider uppercase text-[#00ffff] flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Where Creativity Finds Meaning
                <Zap className="w-4 h-4" />
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.9 }}
              className="text-5xl md:text-6xl lg:text-7xl leading-tight"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Hi, I'm{" "}
              <motion.span
                className="inline-block"
                style={{
                  background:
                    "linear-gradient(45deg, #00ffff, #ff00ff, #00ff9f, #ffff00)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                animate={{
                  backgroundPosition: isHovered
                    ? ["0% 50%", "100% 50%", "0% 50%"]
                    : "0% 50%",
                }}
                transition={{
                  duration: 3,
                  repeat: isHovered ? Infinity : 0,
                  ease: "linear",
                }}
              >
                Bhumika
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9 }}
              className="text-xl md:text-2xl italic leading-relaxed text-foreground/90"
            >
              "I design with intuition, empathy, and a little bit of{" "}
              <span className="text-[#ff00ff]">magic</span>."
            </motion.p>

            <p className="text-lg text-muted-foreground">
              <span className="text-[#00ffff]">UI/UX Designer</span> •{" "}
              <span className="text-[#ff00ff]">Product Thinker</span> •{" "}
              <span className="text-[#00ff9f]">Branding Artist</span> •{" "}
              <span className="text-[#ffff00]">Illustrator</span> •{" "}
              <span className="text-[#ff0080]">Creative Storyteller</span>
            </p>

            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#00ffff] to-[#ff00ff] text-[#0a0a0f] rounded-full px-8"
                onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-2 border-[#00ff9f] text-[#00ff9f]"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Let's Connect
              </Button>
            </div>
          </motion.div>

          {/* RIGHT — FORCED-SMALL IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="flex justify-center"
          >
            {/* This wrapper forces a strict max height and width. The inline style on the img
                forces the image to be exactly the height (px) we choose, with width auto. */}
            <div className="relative" style={{ width: 520, maxHeight: 700 }}>
              <img
                src="/Portfolio/me-hero.png"
                alt="Bhumi – Creative Designer"
                style={{
                  height: 600,      // set this to the visual height you want (in px)
                  width: "auto",    // keep aspect ratio
                  display: "block",
                  borderRadius: 18, // rounded-3xl approx
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-[#00ff9f]" />
      </motion.div>
    </section>
  );
}
