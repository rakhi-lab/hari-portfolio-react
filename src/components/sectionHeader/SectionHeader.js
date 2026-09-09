import React, { useRef } from "react";
import "./SectionHeader.css";
import { motion, useInView } from "framer-motion";

/**
 * Reusable Section Header Component
 *
 * @param {string} overline - Small tracked tag above the title (e.g. "MY SKILLS")
 * @param {string} title - Leading text of the title (e.g. "My")
 * @param {string} highlight - Highlighted word with curved swoosh underline (e.g. "Skills")
 * @param {string} subtitle - Descriptive paragraph below the title
 * @param {string} align - Text alignment: "left" | "center" | "right" (default: "left")
 * @param {string} highlightColor - Custom color for highlight & swoosh (default: "#1D72FE")
 * @param {object} theme - Optional theme object for colors
 * @param {number} delay - Animation delay in seconds (default: 0)
 * @param {string} className - Optional additional CSS class
 */
export default function SectionHeader({
  overline,
  title,
  highlight,
  subtitle,
  align = "left",
  highlightColor = "#1D72FE",
  theme,
  delay = 0,
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const textColor = theme ? theme.text : "#0F172A";
  const subtitleColor = theme ? theme.secondaryText || "#475569" : "#475569";

  return (
    <motion.div
      ref={ref}
      className={`section-header-wrap align-${align} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Overline with decorative dashes */}
      {overline && (
        <div
          className="section-header-overline"
          style={{ color: theme ? theme.secondaryText : "#64748b" }}
        >
          {overline}
        </div>
      )}

      {/* Main Title with curved swoosh highlight */}
      {(title || highlight) && (
        <h2 className="section-header-title" style={{ color: textColor }}>
          {title && <span>{title}</span>}
          {highlight && (
            <span
              className="section-header-highlight"
              style={{ color: highlightColor }}
            >
              {highlight}
              <svg
                className="section-header-swoosh"
                viewBox="0 0 160 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 14C45 3 115 3 156 13"
                  stroke={highlightColor}
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          )}
        </h2>
      )}

      {/* Subtitle / Tagline */}
      {subtitle && (
        <p className="section-header-subtitle" style={{ color: subtitleColor }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
