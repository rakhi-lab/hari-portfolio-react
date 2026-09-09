import React from "react";
import "./Button.css";
import { motion } from "framer-motion";

export default function Button({ text, className, href, newTab, theme, variant = "primary" }) {
  return (
    <div className={className}>
      <motion.a
        className={`pf-btn pf-btn--${variant}`}
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
      >
        <span className="pf-btn__text">{text}</span>
        <span className="pf-btn__shine" />
      </motion.a>
    </div>
  );
}
