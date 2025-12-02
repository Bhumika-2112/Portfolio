import { motion } from "motion/react";
import { X, ArrowLeft, ExternalLink, Calendar, Users, Award } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudyDetailProps {
  study: {
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    image: string;
    color: string;
    fullDescription?: string;
    role?: string;
    duration?: string;
    team?: string;
    challenge?: string;
    solution?: string;
    impact?: string;
    images?: string[];
  };
  onClose: () => void;
}

export function CaseStudyDetail({ study, onClose }: CaseStudyDetailProps) {
  // Default content for case studies
  const defaultContent = {
    role: "Lead UI/UX Designer",
    duration: "3-6 months",
    team: "4-6 members",
    challenge: `The challenge was to create a user-centric design that balances functionality with aesthetic appeal while meeting specific business objectives and user needs.`,
    solution: `Through extensive user research, iterative design processes, and close collaboration with stakeholders, we developed an intuitive interface that prioritizes user experience while achieving business goals.`,
    impact: `The project resulted in improved user engagement, increased satisfaction scores, and measurable business growth. User feedback has been overwhelmingly positive.`,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: study.color,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-12" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <motion.button
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-sm border-2"
          style={{
            background: `${study.color}20`,
            borderColor: study.color,
            boxShadow: `0 0 30px ${study.color}60`,
          }}
        >
          <X className="w-6 h-6" style={{ color: study.color }} />
        </motion.button>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={onClose}
            className="gap-2"
            style={{ color: study.color }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Button>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.h1
            className="text-5xl md:text-6xl mb-4"
            style={{ color: study.color }}
            animate={{
              textShadow: [
                `0 0 20px ${study.color}60`,
                `0 0 40px ${study.color}80`,
                `0 0 20px ${study.color}60`,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {study.title}
          </motion.h1>
          <p className="text-2xl text-muted-foreground mb-6">{study.subtitle}</p>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
            {study.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {study.tags.map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="px-4 py-2 rounded-full border-2"
                style={{
                  background: `${study.color}15`,
                  borderColor: `${study.color}50`,
                  color: study.color,
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          className="relative mb-12 rounded-3xl overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 z-10"
            style={{
              background: `linear-gradient(45deg, ${study.color}20, transparent)`,
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
          <div
            className="absolute inset-0 border-4 rounded-3xl"
            style={{
              borderColor: study.color,
              boxShadow: `0 0 60px ${study.color}40`,
            }}
          />
          <ImageWithFallback
            src={study.image}
            alt={study.title}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Users, label: "Role", value: study.role || defaultContent.role },
            { icon: Calendar, label: "Duration", value: study.duration || defaultContent.duration },
            { icon: Award, label: "Team", value: study.team || defaultContent.team },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: `0 0 30px ${study.color}40`,
              }}
              className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border-2"
              style={{ borderColor: `${study.color}30` }}
            >
              <motion.div
                className="inline-flex p-3 rounded-xl mb-4"
                style={{
                  background: `${study.color}20`,
                }}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <item.icon className="w-6 h-6" style={{ color: study.color }} />
              </motion.div>
              <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
              <p className="text-lg text-foreground">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ x: 10 }}
            className="relative"
          >
            <motion.div
              className="absolute -left-4 top-0 bottom-0 w-1 rounded-full"
              style={{ background: study.color }}
              animate={{
                boxShadow: [
                  `0 0 10px ${study.color}60`,
                  `0 0 20px ${study.color}80`,
                  `0 0 10px ${study.color}60`,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <h2 className="text-3xl mb-4" style={{ color: study.color }}>
              The Challenge
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {study.challenge || defaultContent.challenge}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ x: -10 }}
            className="relative"
          >
            <motion.div
              className="absolute -right-4 top-0 bottom-0 w-1 rounded-full"
              style={{ background: study.color }}
              animate={{
                boxShadow: [
                  `0 0 10px ${study.color}60`,
                  `0 0 20px ${study.color}80`,
                  `0 0 10px ${study.color}60`,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <h2 className="text-3xl mb-4" style={{ color: study.color }}>
              The Solution
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {study.solution || defaultContent.solution}
            </p>
          </motion.div>

          {/* Impact */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-20 blur-2xl"
              style={{ background: study.color }}
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
            <div
              className="relative bg-card/30 backdrop-blur-sm rounded-3xl p-8 border-2"
              style={{ borderColor: `${study.color}30` }}
            >
              <h2 className="text-3xl mb-4" style={{ color: study.color }}>
                Impact & Results
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {study.impact || defaultContent.impact}
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-12 text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="rounded-full gap-2 group"
              style={{
                background: `linear-gradient(90deg, ${study.color}, ${study.color}CC)`,
                color: "#0a0a0f",
              }}
            >
              View Live Project
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
