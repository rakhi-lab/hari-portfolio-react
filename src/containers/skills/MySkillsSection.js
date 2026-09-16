import React, { useRef } from "react";
import "./Skills.css";
import { motion, useInView } from "framer-motion";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

// High-fidelity Tech Icons
const PhpIcon = ({ size = 36 }) => (
  <svg viewBox="0 0 128 128" width={size} height={size}>
    <ellipse cx="64" cy="64" rx="58" ry="36" fill="#777BB4" />
    <path
      fill="#FFFFFF"
      d="M36 51.6c4.6 0 7.8 1.1 9.6 3.2 1.8 2.2 2.1 5.3 1 9.5-1.1 4.1-3.2 7.2-6.3 9.2-3.1 2-7.2 3-12.3 3H22.4L28.1 51.6H36zm-4.7 18.6c2.8 0 4.9-.6 6.3-1.8s2.3-3.1 2.8-5.7c.6-2.6.2-4.5-.9-5.7-1.1-1.2-3-1.8-5.6-1.8h-3.4l-3.4 15h4.2zm48.4-18.6c4.6 0 7.8 1.1 9.6 3.2 1.8 2.2 2.1 5.3 1 9.5-1.1 4.1-3.2 7.2-6.3 9.2-3.1 2-7.2 3-12.3 3H66.4l5.7-24.9h7.6zm-4.7 18.6c2.8 0 4.9-.6 6.3-1.8s2.3-3.1 2.8-5.7c.6-2.6.2-4.5-.9-5.7-1.1-1.2-3-1.8-5.6-1.8h-3.4l-3.4 15h4.2zm-22.9-7.9h8.3l-2.4 10.6H54.4l5.7-24.9h6.6l-2.2 9.5h8.3l2.2-9.5h6.6l-5.7 24.9H73.3l2.4-10.6z"
    />
  </svg>
);

const WordPressIcon = ({ size = 36 }) => (
  <svg viewBox="0 0 128 128" width={size} height={size}>
    <circle cx="64" cy="64" r="58" fill="#21759B" />
    <path
      fill="#FFFFFF"
      d="M14 64c0 21.6 13.6 40 33 47.3L23.3 46.1C17.4 51.3 14 57.3 14 64zm78.6-2.5c0-6.1-2.2-10.3-4.1-13.6-2.5-4.1-4.9-7.6-4.9-11.7 0-4.6 3.5-8.9 8.4-8.9.2 0 .5 0 .7.1-9.3-8.6-21.7-13.8-35.3-13.8-14.8 0-28.2 6.2-37.7 16.2 1 .3 2.1.5 3 .5 4.9 0 12.4-.6 12.4-.6 2.5-.2 2.8 3.6.3 3.8 0 0-2.6.3-5.4.5l17.3 51.5 10.4-31.2-7.4-20.3c-2.5-.2-4.9-.5-4.9-.5-2.5-.2-2.2-4 .3-3.8 0 0 7.7.6 12.3.6 4.9 0 12.4-.6 12.4-.6 2.5-.2 2.8 3.6.3 3.8 0 0-2.6.3-5.4.5l17 50.8 4.8-15.9c2.3-7.5 4.1-12.8 4.1-17.6zm-41.2 13.9l-14.4 41.8c5.8 1.7 11.9 2.6 18.2 2.6 7.5 0 14.6-1.3 21.3-3.7-.3-.5-.6-1.1-.8-1.7L51.4 75.4zm44.2-28.5c.3 1.9.5 3.9.5 6 0 5.9-1.1 12.5-4.4 20.8l-14.5 42.1c19.6-7.3 33.5-26 33.5-47.9 0-7.8-1.8-15.1-5.1-21.7v.7z"
    />
  </svg>
);

const LaravelIcon = ({ size = 36 }) => (
  <svg viewBox="0 0 128 128" width={size} height={size}>
    <path
      fill="#FF2D20"
      d="M109.8 31.9L68.7 8.3c-2.9-1.7-6.5-1.7-9.4 0L18.2 31.9c-2.9 1.7-4.7 4.8-4.7 8.2v47.8c0 3.4 1.8 6.5 4.7 8.2l41.1 23.6c2.9 1.7 6.5 1.7 9.4 0l41.1-23.6c2.9-1.7 4.7-4.8 4.7-8.2V40.1c0-3.4-1.8-6.5-4.7-8.2zM64 16.9l36.5 21-13.3 7.7-36.5-21 13.3-7.7zm-7.6 4.4v15.3l-13.3-7.6V13.7l13.3 7.6zm-17.7 7.7v15.3l-13.3-7.6V21.4l13.3 7.6zm-15.2 61.3V44.5l15.2 8.7v45.8l-15.2-8.7zm22.8 13.1V57.6l15.2-8.7v45.8l-15.2 8.7zm45.6 0l-15.2-8.7V57.6l15.2 8.7v37.1zm7.6-4.4l-13.3 7.6V83.3l13.3-7.6v15.6zm0-23.3l-13.3 7.6V60l13.3-7.6v15.6zm0-23.3l-13.3 7.6V36.7l13.3-7.6v15.6z"
    />
  </svg>
);

const MySqlIcon = ({ size = 36 }) => (
  <svg viewBox="0 0 128 128" width={size} height={size}>
    <path
      fill="#00758F"
      d="M117.8 77.2c-1.3-1.6-3.8-2.6-6.4-2.8-1.5-.1-3 .2-4.4.7 2.1-4.8 1.8-9.4-.8-13.3-3.6-5.4-10.9-8.4-19.5-8.1-1.3-3.9-3.7-7.2-7.2-9.7-6.2-4.5-15.1-6.1-25.2-4.4-4.8.8-9.5 2.5-13.8 4.9-5.1 2.8-9.5 6.7-12.7 11.5-2.2 3.3-3.6 7.1-4.1 11.1-1.5.7-3 1.6-4.3 2.7-3.9 3.3-5.9 7.9-5.6 12.6.4 5.4 3.7 10 8.7 12.2 4.1 1.8 8.9 2 13.4.6 2.3-.7 4.5-1.9 6.3-3.4 3.2 2 6.9 3.3 10.8 3.9 3.5.5 7.1.3 10.6-.5 4.5-1 8.7-3 12.3-5.8 4.9 1.5 10.2 1.3 15-.7 4.5-1.8 8.1-5.3 10-9.6 2.6.8 5.4.6 7.8-.6 2.7-1.3 4.4-3.8 4.6-6.7.2-1.7-.3-3.2-1.2-4.4z"
    />
    <path
      fill="#F29111"
      d="M51.2 81.3c-.6 0-1.2-.2-1.7-.5-1.2-.9-1.5-2.6-.6-3.8 1.4-1.9 3.4-3.4 5.7-4.4 1.4-.6 3-.1 3.6 1.4.6 1.4.1 3-1.4 3.6-1.6.7-3 1.8-4 3.1-.4.4-1 .6-1.6.6z"
    />
  </svg>
);

const Html5Icon = ({ size = 36 }) => (
  <svg viewBox="0 0 128 128" width={size} height={size}>
    <path fill="#E34F26" d="M19.2 114.7L9.9 10.7h108.2l-9.3 104-44.8 12.4-44.8-12.4z" />
    <path fill="#EF652A" d="M64 117.9l36.5-10.1 7.7-86.4H64v96.5z" />
    <path
      fill="#ECECEC"
      d="M64 52.8H45.8l-1.3-14.3H64V24.3H30.4l3.6 42.7H64V52.8zm0 35.8l-.2.1-15.3-4.1-1-11.1H33.2l1.9 21.8 28.7 8 .2-.1V88.6z"
    />
    <path
      fill="#FFFFFF"
      d="M63.9 52.8V67h17l-1.6 17.5-15.4 4.1v14.2l28.7-8 3.6-41.9H63.9zm0-28.5v14.2h32.4l1.3-14.2H63.9z"
    />
  </svg>
);

const Css3Icon = ({ size = 36 }) => (
  <svg viewBox="0 0 128 128" width={size} height={size}>
    <path fill="#1572B6" d="M19.2 114.7L9.9 10.7h108.2l-9.3 104-44.8 12.4-44.8-12.4z" />
    <path fill="#33A9DC" d="M64 117.9l36.5-10.1 7.7-86.4H64v96.5z" />
    <path
      fill="#ECECEC"
      d="M64 52.8H45.8l-1.3-14.3H64V24.3H30.4l3.6 42.7H64V52.8zm0 35.8l-.2.1-15.3-4.1-1-11.1H33.2l1.9 21.8 28.7 8 .2-.1V88.6z"
    />
    <path
      fill="#FFFFFF"
      d="M64 52.8h17l-1.6 17.5-15.4 4.1v14.2l28.7-8 3.6-41.9H64V24.3h33.7l-1.3 14.2H64v14.3z"
    />
  </svg>
);

const JsIcon = ({ size = 36 }) => (
  <svg viewBox="0 0 128 128" width={size} height={size}>
    <rect width="128" height="128" rx="16" fill="#F7DF1E" />
    <path
      fill="#000000"
      d="M37.6 100.8c5.4 0 9.7-2.6 11.8-6.7 1.8-3.5 2.1-7.2 2.1-16.1V44.4h-13.8v33.8c0 5.4-.3 8.3-1.3 10.2-1 2-3 2.9-5.4 2.9-1.9 0-3.7-.5-5-1.5l-3.3 9.4c3.3 1.2 7.7 1.6 14.9 1.6zm44.3-1.6c6.4 0 11.2-1.9 14.8-5.7 3.3-3.5 4.8-8.1 4.8-14.1 0-7.2-2.8-12.2-9.4-16.8-4.9-3.4-8-5.3-8-8.1 0-2.6 1.7-4.4 4.5-4.4 2.8 0 5.1 1.2 7.4 3.7l7.7-8.2c-4.4-4.5-9.3-6.6-15.6-6.6-5.8 0-10.4 1.8-13.7 5.2-3.1 3.2-4.6 7.6-4.6 12.8 0 7.4 3.1 12.3 9.7 16.9 4.7 3.3 7.7 5.3 7.7 8.3 0 2.9-2.1 4.8-5.4 4.8-3.8 0-6.9-1.9-9.7-5.7l-8 7.7c4.6 6.8 10.8 10.5 17.8 10.5z"
    />
  </svg>
);

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
