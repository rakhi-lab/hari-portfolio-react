import React, { useRef } from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { motion, useInView } from "framer-motion";
import { skills } from "../../portfolio";

export default function Skills(props) {
  const theme = props.theme;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const hasMySkillsFirst = skills.data && skills.data.length > 0 && skills.data[0].title === "My Skills";

  return (
    <div className="skills-main-wrapper" id="skills" ref={ref}>
      {!hasMySkillsFirst && (
        <div className="skills-header-div">
          <motion.div
            className="about-subtitle-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 15, marginBottom: 15 }}
          >
            <span style={{ height: 1, width: 50, background: "#94a3b8", display: "inline-block" }} />
            <h3 style={{ fontSize: 13, fontFamily: "'Inter', sans-serif", color: "#64748b", letterSpacing: "0.3em", textTransform: "uppercase", margin: 0, fontWeight: 600 }}>EXPERTISE</h3>
            <span style={{ height: 1, width: 50, background: "#94a3b8", display: "inline-block" }} />
          </motion.div>
          <motion.h1
            className="skills-header"
            style={{ color: theme.text }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            What I Do
          </motion.h1>
        </div>
      )}
      <SkillSection theme={theme} />
    </div>
  );
}
