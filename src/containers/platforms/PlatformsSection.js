import React from "react";
import "./PlatformsSection.css";
import { Fade } from "react-reveal";
import { platformsData } from "../../portfolio";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

export default function PlatformsSection({ theme }) {
  if (!platformsData.technologies || platformsData.technologies.length === 0) {
    return null;
  }

  // Split data into two rows
  const half = Math.ceil(platformsData.technologies.length / 2);
  const row1 = platformsData.technologies.slice(0, half);
  const row2 = platformsData.technologies.slice(half);

  const renderBadge = (tech, index, keyPrefix) => (
    <div key={`${keyPrefix}-${index}`} className="platform-badge">
      <span
        className="iconify platform-icon"
        data-icon={tech.icon}
        style={{ color: tech.color }}
        data-inline="false"
      ></span>
      <span className="platform-name">{tech.name}</span>
    </div>
  );

  return (
    <div className="platforms-main" id="platforms">
      {/* Background Orbs */}
      {/* <div className="platforms-orb-1"></div>
      <div className="platforms-orb-2"></div> */}

      <div className="platforms-header-div" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader
          overline="TECHNOLOGIES"
          title="Our Modern"
          highlight={platformsData.title}
          subtitle={platformsData.subtitle}
          align="center"
          theme={{ ...theme, text: "#ffffff", secondaryText: "#cccccc" }}
          highlightColor="#00c8ff"
        />
      </div>

      <div className="platforms-badges-container">
        {/* Row 1: Scrolls Left */}
        <div className="platforms-marquee">
          <div className="marquee-track track-left">
            {row1.map((tech, i) => renderBadge(tech, i, 'r1a'))}
            {row1.map((tech, i) => renderBadge(tech, i, 'r1b'))}
            {row1.map((tech, i) => renderBadge(tech, i, 'r1c'))}
            {row1.map((tech, i) => renderBadge(tech, i, 'r1d'))}
          </div>
        </div>

        {/* Row 2: Scrolls Right */}
        <div className="platforms-marquee" style={{ marginTop: "20px" }}>
          <div className="marquee-track track-right">
            {row2.map((tech, i) => renderBadge(tech, i, 'r2a'))}
            {row2.map((tech, i) => renderBadge(tech, i, 'r2b'))}
            {row2.map((tech, i) => renderBadge(tech, i, 'r2c'))}
            {row2.map((tech, i) => renderBadge(tech, i, 'r2d'))}
          </div>
        </div>
      </div>
    </div>
  );
}
