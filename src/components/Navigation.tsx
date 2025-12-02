import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about", color: "#00ffff" },
    { label: "Work", href: "#case-studies", color: "#ff00ff" },
    { label: "Gallery", href: "#gallery", color: "#00ff9f" },
    { label: "Poetry", href: "#poetry", color: "#ffff00" },
    { label: "Services", href: "#services", color: "#ff0080" },
    { label: "Contact", href: "#contact", color: "#0080ff" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/80 backdrop-blur-lg shadow-lg border-b-2 border-[#00ff9f]/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 blur-xl opacity-50"
                style={{
                  background: "linear-gradient(90deg, #00ffff, #ff00ff, #00ff9f)",
                }}
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                className="relative text-2xl"
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
              </motion.span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{
                    y: -3,
                    scale: 1.1,
                    textShadow: `0 0 20px ${item.color}`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="text-foreground/70 hover:text-foreground transition-colors relative group"
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: item.color }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-50"
                    style={{ background: item.color }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="absolute inset-0 blur-lg"
                style={{ background: isMobileMenuOpen ? "#ff0080" : "#00ff9f" }}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#ff0080]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#00ff9f]" />
                )}
              </div>
            </motion.button>
          </div>
        </div>

        {/* Animated underline */}
        {isScrolled && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5"
            style={{
              background: "linear-gradient(90deg, #00ffff, #ff00ff, #00ff9f, #ffff00)",
              backgroundSize: "300% 100%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 md:hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 rounded-full blur-3xl"
                style={{
                  background: i % 2 === 0 ? "#00ffff40" : "#ff00ff40",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, 50, 0],
                  y: [0, -50, 0],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: 50, rotateY: 90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ delay: 0.1 * index, type: "spring" }}
                onClick={() => scrollToSection(item.href)}
                whileHover={{
                  scale: 1.2,
                  x: 20,
                  textShadow: `0 0 30px ${item.color}`,
                }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl text-foreground/70 hover:text-foreground transition-colors relative group"
              >
                <motion.div
                  className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-100"
                  style={{ background: item.color }}
                />
                <span className="relative flex items-center gap-3">
                  <Zap className="w-5 h-5" style={{ color: item.color }} />
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
