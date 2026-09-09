import React from "react";
import "./ProcessSection.css";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { motion } from "framer-motion";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Idea",
    tagline: "Discovery & Brainstorming",
    description:
      "Every great product begins with a vision. I explore requirements, identify user pain points, define success metrics, and establish clear strategic goals.",
    color: "#F59E0B", // Amber
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Concept",
    tagline: "Strategy & Architecture",
    description:
      "Transforming raw ideas into actionable blueprints. I design system architectures, select modern tech stacks, model data schemas, and plan modular workflows.",
    color: "#6366F1", // Indigo
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Design",
    tagline: "UI/UX & Prototyping",
    description:
      "Crafting seamless user experiences with high-fidelity mockups, intuitive design systems, accessible typography, and engaging micro-interactions.",
    color: "#EC4899", // Pink
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Develop",
    tagline: "Clean Code & Engineering",
    description:
      "Writing clean, modular, and performant code. Building scalable frontend interfaces, secure backend APIs, database connections, and third-party integrations.",
    color: "#1D72FE", // Blue
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Test",
    tagline: "Quality & Optimization",
    description:
      "Ensuring peak quality through automated unit testing, cross-browser responsiveness checks, performance benchmarks, and security validations.",
    color: "#10B981", // Emerald
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    step: "06",
    title: "Launch",
    tagline: "Deployment & Monitoring",
    description:
      "Continuous deployment to production clouds with automated CI/CD pipelines, SSL configuration, SEO indexing, analytics setup, and ongoing iteration.",
    color: "#8B5CF6", // Purple
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2.5 5-2.5" />
        <path d="M15 9V4s3.03.55 4.5 2c1.63 1.62 2.5 5 2.5 5" />
      </svg>
    ),
  },
];

export default function ProcessSection({ theme }) {
  const isDark = theme && theme.name === "dark";

  return (
    <section className="process-section-wrap" id="process">
      <div className="process-container">
        {/* Section Header with Swoosh Highlight */}
        <SectionHeader
          overline="WORKFLOW"
          title="Development"
          highlight="Process"
          subtitle="A structured, agile methodology to transform ideas into robust, production-ready digital products."
          align="center"
          theme={theme}
        />

        {/* Process Flow Steps Grid */}
        <div className="process-grid">
          {PROCESS_STEPS.map((item, index) => {
            return (
              <motion.div
                key={item.step}
                className="process-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                style={{
                  "--accent-color": item.color,
                  "--card-bg": isDark ? "rgba(30, 41, 59, 0.6)" : "#FFFFFF",
                  "--card-border": isDark ? "rgba(255, 255, 255, 0.08)" : "#E2E8F0",
                  "--card-shadow": isDark
                    ? "0 10px 30px -10px rgba(0, 0, 0, 0.5)"
                    : "0 12px 32px -8px rgba(15, 23, 42, 0.06)",
                }}
              >
                {/* Top Bar with Step Badge & Icon */}
                <div className="process-card-header">
                  <div
                    className="process-step-number"
                    style={{ color: item.color }}
                  >
                    <span className="step-hash">#</span>
                    {item.step}
                  </div>

                  <div
                    className="process-icon-wrap"
                    style={{
                      color: item.color,
                      backgroundColor: isDark
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(15, 23, 42, 0.03)",
                      borderColor: isDark
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(226, 232, 240, 0.8)",
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="process-card-body">
                  <h3
                    className="process-step-title"
                    style={{ color: theme.text }}
                  >
                    {item.title}
                  </h3>
                  <div
                    className="process-step-tagline"
                    style={{ color: item.color }}
                  >
                    {item.tagline}
                  </div>
                  <p
                    className="process-step-desc"
                    style={{ color: theme.secondaryText }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Bottom Accent Glow Bar */}
                <div
                  className="process-card-accent-bar"
                  style={{ backgroundColor: item.color }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
