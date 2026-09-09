import React, { useRef } from "react";
import "./SoftwareSkill.css";
import { motion, useInView } from "framer-motion";

export default function SoftwareSkill({ logos }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="software-skills-main-div" ref={ref}>
      <ul className="dev-icons">
        {logos.map((logo, index) => (
          <motion.li
            key={logo.skillName}
            className="software-skill-inline"
            title={logo.skillName}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              delay: index * 0.07,
              duration: 0.45,
              type: "spring",
              stiffness: 250,
              damping: 16,
            }}
            whileHover={{
              scale: 1.22,
              y: -6,
              transition: { type: "spring", stiffness: 350, damping: 15 },
            }}
          >
            {logo.fontAwesomeClassname && (
              <span
                className="iconify"
                data-icon={logo.fontAwesomeClassname}
                style={logo.style}
                data-inline="false"
              />
            )}
            {!logo.fontAwesomeClassname && logo.imageSrc && (
              <img
                className="skill-image"
                style={logo.style}
                src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                alt={logo.skillName}
              />
            )}
            <span className="skill-tooltip">{logo.skillName}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
