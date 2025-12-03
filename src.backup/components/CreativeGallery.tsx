import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { PoetryBook } from "./PoetryBook";
import { useState } from "react";
import { BookOpen } from "lucide-react";

export function CreativeGallery() {
  const [showPoetryBook, setShowPoetryBook] = useState(false);
  const galleryItems = [
    {
      type: "art",
      title: "Watercolor Dreams",
      image: "https://images.unsplash.com/photo-1695154207190-64df5b9c1e6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwcGFpbnRpbmclMjBhcnR8ZW58MXx8fHwxNzY0MzgzMTA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Painting",
      color: "#ff0080",
    },
    {
      type: "sketch",
      title: "Creative Explorations",
      image: "https://images.unsplash.com/photo-1763575648485-adc77574d7bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHNrZXRjaGVzJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2NDM5Mzg5MXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Sketch",
      color: "#00ffff",
    },
    {
      type: "branding",
      title: "Brand Identity Work",
      image: "https://images.unsplash.com/photo-1640975972263-1f73398e943b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGxvZ28lMjBkZXNpZ258ZW58MXx8fHwxNzY0MzU4NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Branding",
      color: "#00ff9f",
    },
    {
      type: "poetry",
      title: "Words & Wonder",
      quote: "In pixels and poetry,\nI find my voice.\nIn design and dreams,\nI make my choice.",
      category: "Poetry",
      color: "#ffff00",
    },
    {
      type: "abstract",
      title: "Digital Experiments",
      image: "https://images.unsplash.com/photo-1763615445790-64c644be359b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhc3RlbCUyMGdyYWRpZW50fGVufDF8fHx8MTc2NDM0OTkwMXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "UI Experiment",
      color: "#ff00ff",
    },
    {
      type: "poetry",
      title: "Creative Thoughts",
      quote: "Design is not just what it looks like,\nit's how it makes you feel,\nhow it tells a story,\nhow it becomes real.",
      category: "Poetry",
      color: "#0080ff",
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Animated particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: i % 3 === 0 ? "#00ffff" : i % 3 === 1 ? "#ff00ff" : "#00ff9f",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
            scale: [0, 2, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
        />
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
                "0 0 20px rgba(255, 0, 255, 0.5)",
                "0 0 30px rgba(0, 255, 255, 0.5)",
                "0 0 20px rgba(255, 0, 255, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            My Art & <span className="text-[#00ff9f] neon-text-green">Inspirations</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where creativity flows freely — sketches, paintings, experiments, and poetry.
          </p>
          <motion.button
            onClick={() => setShowPoetryBook(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full border-2"
            style={{
              background: "linear-gradient(90deg, #ffff00, #ff00ff)",
              borderColor: "#ff00ff",
              color: "#0a0a0f",
              boxShadow: "0 0 30px #ff00ff60",
            }}
          >
            <BookOpen className="w-5 h-5" />
            Open Poetry Book
          </motion.button>
          <motion.div
            className="w-40 h-1 mx-auto rounded-full mt-6"
            style={{
              background: "linear-gradient(90deg, #ff0080, #00ffff, #ffff00, #ff00ff)",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * index, type: "spring" }}
              whileHover={{
                scale: 1.08,
                rotate: [0, -3, 3, 0],
                transition: { duration: 0.4 },
              }}
              onClick={() => item.type === "poetry" && setShowPoetryBook(true)}
              className="group cursor-pointer relative"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity"
                style={{ background: item.color }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {item.type === "poetry" ? (
                <div
                  className="relative h-80 flex flex-col justify-center items-center text-center rounded-2xl p-8 border-2 backdrop-blur-sm overflow-hidden"
                  style={{
                    background: `${item.color}10`,
                    borderColor: `${item.color}40`,
                  }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `radial-gradient(circle, ${item.color}, transparent)`,
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
                      className="mb-4"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <span className="text-4xl">✨</span>
                    </motion.div>
                    <motion.p
                      className="text-lg italic text-foreground/90 leading-relaxed whitespace-pre-line"
                      whileHover={{
                        scale: 1.05,
                        textShadow: `0 0 20px ${item.color}`,
                      }}
                    >
                      {item.quote}
                    </motion.p>
                    <div className="mt-4">
                      <motion.span
                        className="text-xs uppercase tracking-wider"
                        style={{ color: item.color }}
                        animate={{
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {item.category}
                      </motion.span>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="relative rounded-2xl overflow-hidden h-80 border-2"
                  style={{ borderColor: `${item.color}40` }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={item.image!}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Neon overlay on hover */}
                  <motion.div
                    className="absolute inset-0 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(45deg, ${item.color}40, transparent)`,
                    }}
                  />

                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: `linear-gradient(to top, ${item.color}CC, transparent)`,
                    }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <motion.p
                        className="text-sm uppercase tracking-wider mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {item.category}
                      </motion.p>
                      <motion.h3
                        className="text-xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        style={{
                          textShadow: `0 0 20px ${item.color}`,
                        }}
                      >
                        {item.title}
                      </motion.h3>
                    </div>
                  </motion.div>
                </div>
              )}
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
                "0 0 10px rgba(255, 0, 255, 0.3)",
                "0 0 20px rgba(0, 255, 255, 0.3)",
                "0 0 10px rgba(255, 0, 255, 0.3)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            "Creativity isn't just what I do — it's who I am."
          </motion.p>
        </motion.div>
      </div>

      {/* Poetry Book Modal */}
      {showPoetryBook && <PoetryBook onClose={() => setShowPoetryBook(false)} />}
    </section>
  );
}
