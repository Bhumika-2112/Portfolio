import { motion } from "motion/react";
import { ArrowRight, Award, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CaseStudyDetail } from "./CaseStudyDetail";
import { useState } from "react";

export function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<number | null>(null);

  const caseStudies = [
    {
      title: "CoManager",
      subtitle: "Automotive Management System",
      description: "Streamlining automotive service workflows with intuitive UI/UX design and eWarranty integration.",
      tags: ["UI/UX Design", "Service Flow", "Dashboard"],
      image: "https://images.unsplash.com/photo-1761593280919-766a4acbcfca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NDM5Mzg4OXww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#00ffff",
    },
    {
      title: "Zerozilla",
      subtitle: "Organic Food E-commerce App",
      description: "Gamified shopping experience with reward points system, creating a fun and engaging organic food marketplace.",
      tags: ["Gamification", "E-commerce", "Mobile App"],
      image: "https://images.unsplash.com/photo-1664802460230-9cb9faa6e35c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZm9vZCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzY0MzkzODg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#00ff9f",
    },
    {
      title: "OG Mush",
      subtitle: "Mushroom Farming E-commerce",
      description: "Organic-themed platform with gamification elements, making mushroom farming products accessible and delightful.",
      tags: ["Organic Theme", "UI/UX", "Gamification"],
      image: "https://images.unsplash.com/photo-1726177973715-9d17703e8d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNocm9vbSUyMGZhcm1pbmd8ZW58MXx8fHwxNzY0MzkzODg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#ffff00",
    },
    {
      title: "The Cockpit",
      subtitle: "Aviation Student Training Portal",
      description: "Comprehensive dashboard system for aviation training with logo design and intuitive user interface.",
      tags: ["Dashboard", "Education", "Logo Design"],
      image: "https://images.unsplash.com/photo-1762854630367-7b302716e85f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdmlhdGlvbiUyMGNvY2twaXQlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjQzOTM4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#ff00ff",
    },
    {
      title: "LingoCare",
      subtitle: "Healthcare Website Redesign",
      description: "Modern landing page redesign with visual storytelling, making healthcare accessible and welcoming.",
      tags: ["Website Design", "Visual Storytelling", "Healthcare"],
      image: "https://images.unsplash.com/photo-1642052502304-272cb5c31417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjQzOTM4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#ff0080",
    },
    {
      title: "More Projects",
      subtitle: "Coming Soon",
      description: "Exciting new case studies and innovative designs are on their way. Stay tuned for more creative solutions!",
      tags: ["Innovation", "Design", "Creativity"],
      image: "https://images.unsplash.com/photo-1763615445790-64c644be359b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhc3RlbCUyMGdyYWRpZW50fGVufDF8fHx8MTc2NDM0OTkwMXww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#0080ff",
    },
  ];

  return (
    <section id="case-studies" className="relative py-24 px-6 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, #00ff9f 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Zap className="w-6 h-6 text-[#ffff00]" />
            <h2 className="text-4xl md:text-5xl neon-text-cyan">
              Featured <span className="text-[#ff00ff]">Case Studies</span>
            </h2>
            <Zap className="w-6 h-6 text-[#ffff00]" />
          </motion.div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where empathy meets innovation, and creativity drives meaningful impact.
          </p>
          <motion.div
            className="w-40 h-1 mx-auto rounded-full mt-6"
            style={{
              background: "linear-gradient(90deg, #00ffff, #ff00ff, #00ff9f)",
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

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              whileHover={{
                y: -15,
                rotateZ: index % 2 === 0 ? 2 : -2,
                transition: { type: "spring", stiffness: 300 },
              }}
              onClick={() => setSelectedStudy(index)}
              className="group cursor-pointer relative"
            >
              {/* Neon glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
                style={{ background: study.color }}
              />

              <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-foreground/10 hover:border-opacity-50 transition-all"
                style={{ borderColor: `${study.color}40` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 z-10 mix-blend-overlay"
                    style={{
                      background: `linear-gradient(45deg, ${study.color}40, transparent)`,
                    }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute top-4 right-4 z-20"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className="backdrop-blur-sm rounded-full p-2 border-2"
                      style={{
                        background: `${study.color}20`,
                        borderColor: study.color,
                        boxShadow: `0 0 20px ${study.color}80`,
                      }}
                    >
                      <Award className="w-5 h-5" style={{ color: study.color }} />
                    </div>
                  </motion.div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <motion.h3
                      className="text-2xl mb-1"
                      style={{ color: study.color }}
                      whileHover={{
                        textShadow: `0 0 20px ${study.color}`,
                      }}
                    >
                      {study.title}
                    </motion.h3>
                    <p className="text-muted-foreground">{study.subtitle}</p>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full text-sm border"
                        style={{
                          background: `${study.color}10`,
                          borderColor: `${study.color}40`,
                          color: study.color,
                        }}
                        whileHover={{
                          scale: 1.1,
                          boxShadow: `0 0 15px ${study.color}60`,
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="ghost"
                        className="group-hover:text-foreground transition-colors"
                        style={{ color: study.color }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStudy(index);
                        }}
                      >
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.p
            className="text-muted-foreground italic text-lg"
            animate={{
              textShadow: [
                "0 0 10px rgba(0, 255, 159, 0.3)",
                "0 0 20px rgba(0, 255, 159, 0.5)",
                "0 0 10px rgba(0, 255, 159, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Each project tells a unique story of research, empathy, iteration, and meaningful impact.
          </motion.p>
        </motion.div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedStudy !== null && (
        <CaseStudyDetail
          study={caseStudies[selectedStudy]}
          onClose={() => setSelectedStudy(null)}
        />
      )}
    </section>
  );
}
