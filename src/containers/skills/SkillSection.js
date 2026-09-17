import React, { useRef } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { motion, useInView } from "framer-motion";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import MySkillsSection from "./MySkillsSection";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

function GetSkillSvg({ fileName, theme }) {
  if (fileName === "DataScienceImg") return <DataScienceImg theme={theme} />;
  if (fileName === "FullStackImg")   return <FullStackImg theme={theme} />;
  if (fileName === "CloudInfraImg")  return <CloudInfraImg theme={theme} />;
  return <DesignImg theme={theme} />;
}

/* ── Animated Progress Bar ──────────────────────────────────── */
function ProgressBar({ label, percentage, isInView, delay }) {
  return (
    <div className="skill-progress-wrap">
      <div className="skill-progress-header">
        <span className="skill-progress-label">{label}</span>
        <span className="skill-progress-value">{percentage}</span>
      </div>
      <div className="skill-progress-track">
        <motion.div
          className="skill-progress-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: percentage } : { width: 0 }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────────── */
class SkillSection extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          if (skill.title === "My Skills") {
            return <MySkillsSection key={i} theme={theme} />;
          }
          return <SkillRow key={i} skill={skill} theme={theme} index={i} />;
        })}
      </div>
    );
  }
}

function SkillRow({ skill, theme, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <div className="skills-main-div" ref={ref} style={{ flexDirection: isEven ? "row" : "row-reverse" }}>
      {/* Illustration or Photo */}
      <motion.div
        className={`skills-image-div ${isEven ? "image-side-left" : "image-side-right"}`}
        initial={{ opacity: 0, x: isEven ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {(() => {
          if (skill.imagePath) {
            try {
              return (
                <motion.img
                  alt={skill.title}
                  src={require(`../../assets/images/${skill.imagePath}`)}
                  className="skills-profile-photo"
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 16 }}
                />
              );
            } catch (err) {
              try {
                return (
                  <motion.img
                    alt={skill.title}
                    src={require("../../assets/images/hari-table.png")}
                    className="skills-profile-photo"
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 16 }}
                  />
                );
              } catch (e) {
                return <GetSkillSvg fileName={skill.fileName} theme={theme} />;
              }
            }
          }
          return <GetSkillSvg fileName={skill.fileName} theme={theme} />;
        })()}
      </motion.div>

      {/* Text & Skills */}
      <div className="skills-text-div">
        <div style={{ marginBottom: "16px" }}>
          {(() => {
            const words = skill.title.split(" ");
            const highlight = words.length > 1 ? words.pop() : skill.title;
            const title = words.length > 0 ? words.join(" ") : "";
            return (
              <SectionHeader
                title={title}
                highlight={highlight}
                align="left"
                theme={theme}
              />
            );
          })()}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <SoftwareSkill logos={skill.softwareSkills} />
        </motion.div>

        <div className="skills-points-container">
          {(() => {
            const hasProgressBar = skill.skills.some(
              (s) => s.includes(" - ") && s.includes("%")
            );

            return skill.skills.map((skillSentence, i) => {
              const cleanSentence = skillSentence
                .replace(/^[\s⚡*•-]+/, "")
                .trim();
              if (!cleanSentence) return null;

              const isProgressBar =
                cleanSentence.includes(" - ") && cleanSentence.includes("%");

              if (isProgressBar) {
                const parts = cleanSentence.split(" - ");
                return (
                  <ProgressBar
                    key={i}
                    label={parts[0]}
                    percentage={parts[1]}
                    isInView={isInView}
                    delay={0.2 + i * 0.08}
                  />
                );
              }

              // Introductory subtitle for sections with progress bars
              if (hasProgressBar) {
                return (
                  <motion.p
                    key={i}
                    className="skills-intro-subtitle"
                    style={{ color: theme.secondaryText }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {cleanSentence}
                  </motion.p>
                );
              }

              // Ultra-clean modern capability cards
              return (
                <motion.div
                  key={i}
                  className="skill-point-card"
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.45,
                    delay: 0.18 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ x: 6 }}
                >
                  <div className="skill-point-icon-badge">
                    <svg
                      viewBox="0 0 24 24"
                      className="skill-point-icon"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p
                    className="skill-point-text"
                    style={{ color: theme.text }}
                  >
                    {cleanSentence}
                  </p>
                </motion.div>
              );
            });
          })()}
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
