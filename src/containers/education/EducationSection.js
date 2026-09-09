import React from "react";
import { Fade } from "react-reveal";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import "./EducationTimeline.css";

const educationMilestones = [
  {
    step: "01",
    phase: "Post Graduation",
    title: "Master of Business Administration (MBA)",
    subtitle: "Marketing & Human Resource",
    institution: "University of Kota",
    location: "Kota, Rajasthan, India",
    duration: "July 2017 — June 2019",
    yearWatermark: "2019",
    annotation: "“From technology to leadership”",
    highlighted: true,
    website: "https://www.uok.ac.in",
    tags: ["Marketing", "Human Resource", "Leadership"],
    descriptions: [
      "Master of Business Administration with specialization in Marketing & Human Resource Management.",
      "Studied strategic management, consumer marketing, organizational dynamics, and corporate leadership.",
      "Applied analytical problem-solving and cross-functional leadership principles for scalable business operations.",
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    step: "02",
    phase: "Graduation",
    title: "Bachelor of Information Technology (BSc IT)",
    subtitle: "Information Technology & Software Development",
    institution: "L-BITS College Kota",
    location: "Kota, Rajasthan, India",
    duration: "July 2007 — May 2010",
    yearWatermark: "2010",
    annotation: "“Where the tech journey began”",
    highlighted: true,
    tags: ["Information Technology", "Development", "Problem Solving"],
    descriptions: [
      "Studied core computer science & information technology subjects including Software Engineering, DBMS, Computer Networks, and Web Technologies.",
      "Hands-on application architecture, database administration, and modern software development practices.",
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    step: "03",
    phase: "Senior Secondary",
    title: "Senior Secondary School Examination",
    subtitle: "Science & Mathematics Foundation",
    institution: "LBS School Kota, Rajasthan",
    location: "Kota, Rajasthan, India",
    duration: "July 2006 — June 2007",
    yearWatermark: "2007",
    highlighted: false,
    tags: ["Science", "Mathematics", "Academic Merit"],
    descriptions: [
      "Completed Senior Secondary School Examination (Class XII) with focused foundation in Science and Mathematics.",
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    step: "04",
    phase: "Secondary",
    title: "Secondary School Examination",
    subtitle: "Foundational Academic Disciplines",
    institution: "Adarsh School Kota, Rajasthan",
    location: "Kota, Rajasthan, India",
    duration: "July 2004 — June 2005",
    yearWatermark: "2005",
    highlighted: false,
    tags: ["Core Sciences", "General Studies"],
    descriptions: [
      "Completed Secondary School Examination (Class X) with strong academic standing across all foundational disciplines.",
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
];

export default function EducationSection({ theme }) {
  return (
    <section className="education-timeline-section" id="education">
      <div className="education-timeline-container">
        {/* Section Header */}
        <div className="edu-header-wrapper">
          <SectionHeader
            overline="MY EDUCATION"
            title="Academic"
            highlight="Journey"
            subtitle="Exploring new technologies and methodologies — a continuous journey from technical foundation to business leadership."
            align="center"
            theme={theme}
          />
        </div>

        {/* Vertical Staggered Timeline */}
        <div className="edu-timeline">
          {educationMilestones.map((item, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={item.step}
                className={`edu-timeline-item ${isLeft ? "left" : "right"}`}
              >
                {/* Numbered Milestone Node (01, 02, 03, 04) */}
                <div className="edu-timeline-node">
                  {item.step}
                </div>

                {/* Connector Line to Central Node */}
                <div className="edu-connector-line" />

                {/* Timeline Card */}
                <div className="edu-card-container">
                  <Fade
                    bottom
                    duration={1200}
                    distance="30px"
                    delay={idx * 150}
                  >
                    <div>
                      {/* Optional Handwritten Callout */}
                      {item.annotation && (
                        <div className="edu-annotation">
                          <span>{item.annotation}</span>
                          <span className="edu-annotation-arrow">↗</span>
                        </div>
                      )}

                      <div className={`edu-card ${item.highlighted ? "highlighted" : ""}`}>
                      {/* Oversized background year watermark */}
                      <span className="edu-watermark-year">
                        {item.yearWatermark}
                      </span>

                      <div className="edu-card-content">
                        {/* Card Topbar: Icon, Phase & Duration */}
                        <div className="edu-card-topbar">
                          <div className="edu-icon-badge">
                            <div className="edu-card-icon">
                              {item.icon}
                            </div>
                            <span className="edu-phase-label">
                              {item.phase}
                            </span>
                          </div>
                          <span className="edu-duration-chip">
                            {item.duration}
                          </span>
                        </div>

                        {/* Title & Degree */}
                        <h3 className="edu-degree-title">{item.title}</h3>
                        <p className="edu-degree-spec">{item.subtitle}</p>

                        {/* Institution & Location */}
                        <div className="edu-institution">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          <span>{item.institution} • {item.location}</span>
                        </div>

                        {/* Descriptions */}
                        {item.descriptions && item.descriptions.length > 0 && (
                          <ul className="edu-description-list">
                            {item.descriptions.map((desc, dIdx) => (
                              <li key={dIdx} className="edu-description-item">
                                <span className="edu-bullet-bolt">⚡</span>
                                <span>{desc}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Website Button */}
                        {item.website && (
                          <div>
                            <a
                              href={item.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="edu-website-btn"
                            >
                              <span>Visit Website</span>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                              </svg>
                            </a>
                          </div>
                        )}

                        {/* Tags */}
                        {item.tags && item.tags.length > 0 && (
                          <div className="edu-tags-wrapper">
                            {item.tags.map((tag, tIdx) => (
                              <span key={tIdx} className="edu-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Fade>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
