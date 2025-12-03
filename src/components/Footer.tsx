import React from "react";
import { motion } from "framer-motion";

export default function Footer(): JSX.Element {
  return (
    <footer className="site-footer" role="contentinfo">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <div style={{ padding: "2rem 0", textAlign: "center" }}>
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Bhumika Prajapathi — UX/UI Designer
          </p>
          <p style={{ margin: "0.5rem 0 0", fontSize: "0.85rem" }}>
            Built with React + Vite
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
