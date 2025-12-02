import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const shapes = [
    { id: 1, x: "10%", y: "20%", delay: 0, duration: 3, size: 100, color: "#00ffff" },
    { id: 2, x: "85%", y: "15%", delay: 0.5, duration: 4, size: 120, color: "#ff00ff" },
    { id: 3, x: "75%", y: "70%", delay: 1, duration: 3.5, size: 80, color: "#00ff9f" },
    { id: 4, x: "15%", y: "80%", delay: 1.5, duration: 4.5, size: 110, color: "#ffff00" },
    { id: 5, x: "50%", y: "40%", delay: 0.8, duration: 3.8, size: 90, color: "#ff0080" },
    { id: 6, x: "30%", y: "50%", delay: 1.2, duration: 4.2, size: 70, color: "#0080ff" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.05), transparent 70%)",
        }}
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

      {/* Floating neon shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [0, -50, 30, -40, 0],
            x: [0, 30, -20, 40, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.3, 0.8, 1.2, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-full h-full"
            style={{
              filter: `blur(40px)`,
              background: shape.color,
              opacity: 0.3,
            }}
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
      ))}

      {/* Glowing orbs that follow mouse */}
      <motion.div
        className="absolute w-32 h-32 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 255, 255, 0.4), transparent)",
          filter: "blur(50px)",
        }}
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Neon lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.line
          x1="0%"
          y1="30%"
          x2="100%"
          y2="30%"
          stroke="#00ffff"
          strokeWidth="1"
          opacity="0.2"
          animate={{
            y1: ["30%", "35%", "30%"],
            y2: ["30%", "25%", "30%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.line
          x1="0%"
          y1="70%"
          x2="100%"
          y2="70%"
          stroke="#ff00ff"
          strokeWidth="1"
          opacity="0.2"
          animate={{
            y1: ["70%", "65%", "70%"],
            y2: ["70%", "75%", "70%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </svg>

      {/* Particle effects */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 3 === 0 ? "#00ffff" : i % 3 === 1 ? "#ff00ff" : "#00ff9f",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 159, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 159, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}
