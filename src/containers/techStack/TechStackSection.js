import React from "react";
import "./TechStackSection.css";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { techStack } from "../../portfolio";
import { Fade } from "react-reveal";

export default function TechStackSection({ theme }) {
  if (!techStack.display) {
    return null;
  }

  const row1 = techStack.technologies;
  const row2 = [...techStack.technologies].reverse();

  const renderTrack = (data, duration, direction = "normal") => (
    <div
      className="tech-stack-scroller-track"
      style={{ animationDuration: duration, animationDirection: direction }}
    >
      {[...data, ...data].map((tech, index) => (
        <div
          className="tech-stack-pill"
          key={index}
          style={{
            border: `1px solid ${theme.imageHighlight}`,
            backgroundColor: theme.imageDark || theme.body
          }}
        >
          <span
            className="iconify tech-stack-icon"
            data-icon={tech.iconName}
            style={{ color: tech.color }}
            data-inline="false"
          ></span>
          <span className="tech-stack-name" style={{ color: theme.text }}>
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="tech-stack-main" id="tech-stack" style={{ backgroundColor: theme.body }}>
      <Fade bottom duration={1000} distance="20px">
        <div className="tech-stack-header-div">
          <SectionHeader
            overline="TECHNOLOGIES"
            title="Our Technology Stack and"
            highlight="Platforms"
            subtitle={techStack.subTitle}
            align="center"
            theme={theme}
          />
        </div>
      </Fade>
      <div className="tech-stack-scroller-div">
        <Fade bottom duration={1000} distance="30px">
          <div className="tech-stack-scroller">
            {renderTrack(row1, "30s")}
            {renderTrack(row2, "30s", "reverse")}
          </div>
        </Fade>
      </div>
    </div>
  );
}
