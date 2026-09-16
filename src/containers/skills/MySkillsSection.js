import React, { useRef } from "react";
import "./Skills.css";
import { motion, useInView } from "framer-motion";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

const LeadershipIcon = ({ size = 36, fill = "#FFF" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}>
    <path fill={fill} d="M12 2L3 7v10h18V7L12 2zm0 2.5l5 2.5H7l5-2.5zM5 9h14v6H5V9z"/>
  </svg>
);

const StrategyIcon = ({ size = 36, fill = "#FFF" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}>
    <path fill={fill} d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
  </svg>
);

const DecisionIcon = ({ size = 36, fill = "#FFF" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}>
    <path fill={fill} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
);

const FinanceIcon = ({ size = 36, fill = "#FFF" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}>
    <path fill={fill} d="M3 3v18h18v-2H5V3H3zm13.59 7.41L12 15l-4-4-4 4 1.41 1.41L9 12.83l4 4 6-6.01V14h2V8h-6v2.41z"/>
  </svg>
);

const CommunicationIcon = ({ size = 36, fill = "#FFF" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}>
    <path fill={fill} d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12zM7 9h10v2H7zM7 6h10v2H7z"/>
  </svg>
);

const TeamIcon = ({ size = 36, fill = "#FFF" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}>
    <path fill={fill} d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);

const SalesIcon = ({ size = 36, fill = "#FFF" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}>
    <path fill={fill} d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
  </svg>
);

const progressSkills = [
  {
    name: "Leadership",
    percentage: "95%",
    icon: <LeadershipIcon size={24} fill="#FFF" />,
    color: "#8B5CF6", // Purple
  },
  {
    name: "Strategic Thinking",
    percentage: "90%",
    icon: <StrategyIcon size={24} fill="#FFF" />,
    color: "#3B82F6", // Blue
  },
  {
    name: "Decision-Making",
    percentage: "90%",
    icon: <DecisionIcon size={24} fill="#FFF" />,
    color: "#F97316", // Orange
  },
  {
    name: "Financial Management",
    percentage: "85%",
    icon: <FinanceIcon size={24} fill="#FFF" />,
    color: "#22C55E", // Green
  },
  {
    name: "Communication",
    percentage: "95%",
    icon: <CommunicationIcon size={24} fill="#FFF" />,
    color: "#EC4899", // Pink
  },
  {
    name: "Team Management",
    percentage: "90%",
    icon: <TeamIcon size={24} fill="#FFF" />,
    color: "#06B6D4", // Cyan
  },
  {
    name: "Sales & Business Development",
    percentage: "85%",
    icon: <SalesIcon size={24} fill="#FFF" />,
    color: "#F59E0B", // Yellow
  },
];

export default function MySkillsSection({ theme }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="my-skills-wrapper" ref={ref}>
      <div className="my-skills-container">
        {/* LEFT COLUMN: Showcase Illustration with Floating Cards */}
        <motion.div
          className="my-skills-showcase-pane"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="my-skills-art-wrapper"
            whileHover={{ scale: 1.015 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <img
              src={require("../../assets/images/my-skills-showcase.png")}
              alt="Developer working on digital solutions"
              className="my-skills-showcase-img"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Skills Badges & Animated Progress Bars */}
        <motion.div
          className="my-skills-content-pane"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative handwritten note in top right */}
          <div className="my-skills-corner-accent" aria-hidden="true">
            <div className="corner-dots">
              <span /><span /><span />
              <span /><span /><span />
              <span /><span /><span />
            </div>
            <div className="corner-cursive-note">
              <span>Ideas</span>
              <span>Code</span>
              <span>Solutions</span>
            </div>
          </div>

          {/* Reusable Section Header */}
          <SectionHeader
            overline="MY SKILLS"
            title="My"
            highlight="Skills"
            subtitle="Technologies I work with to build modern, scalable and impactful digital solutions."
            align="left"
            theme={theme}
          />

          {/* Subheading Tagline */}
          <div className="my-skills-subheading">
            <span>A combination of experience, strategy and execution to deliver the best results for your next projects.</span>
          </div>

          {/* Animated Progress Bars */}
          <div className="my-skills-progress-list">
            {progressSkills.map((item, idx) => (
              <div key={item.name} className="my-skill-progress-row">
                <div className="my-skill-icon-pill" style={{ backgroundColor: item.color }}>
                  {item.icon}
                </div>
                <span className="my-skill-name-label">{item.name}</span>
                <div className="my-skill-bar-track">
                  <motion.div
                    className="my-skill-bar-fill"
                    style={{ backgroundColor: item.color, backgroundImage: 'none' }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: item.percentage } : { width: 0 }}
                    transition={{
                      duration: 1.15,
                      delay: 0.22 + idx * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
                <span className="my-skill-pct-label" style={{ color: item.color, backgroundColor: item.color + '1A' }}>{item.percentage}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
