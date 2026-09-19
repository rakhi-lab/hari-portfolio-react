import React from "react";
import "./EducationTimeline.css";

const educationMilestones = [
  {
    step: "01",
    phase: "POST GRADUATION",
    title: "Master of Business Administration",
    subtitle: "DR. A.P.J. ABDUL KALAM TECHNICAL UNIVERSITY, LUCKNOW",
    location: "Lucknow, India",
    duration: "2022 — 2024",
    highlighted: true,
    tags: ["BUSINESS STRATEGY", "MARKETING", "LEADERSHIP", "INNOVATION"],
    description:
      "Pursuing MBA with focus on Business Strategy, Leadership, and Innovation. Gaining practical exposure through real-world projects and industry interactions.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    step: "02",
    phase: "UNDER GRADUATION",
    title: "Bachelor of Technology",
    subtitle: "DR. A.P.J. ABDUL KALAM TECHNICAL UNIVERSITY, LUCKNOW",
    location: "Lucknow, India",
    duration: "2018 — 2022",
    highlighted: false,
    tags: ["DATA STRUCTURES", "WEB DEVELOPMENT", "DATABASES", "PROBLEM SOLVING"],
    description:
      "Completed B.Tech with a strong foundation in computer science, programming, and problem-solving. Developed a keen interest in web technologies and software development.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <line x1="8" y1="20" x2="16" y2="20" />
        <line x1="12" y1="16" x2="12" y2="20" />
      </svg>
    ),
  },
  {
    step: "03",
    phase: "SENIOR SECONDARY",
    title: "Senior Secondary School",
    subtitle: "KENDRIYA VIDYALAYA, LUCKNOW",
    location: "Lucknow, India",
    duration: "2016 — 2018",
    highlighted: false,
    tags: ["PHYSICS", "CHEMISTRY", "MATHEMATICS", "SCIENCE"],
    description:
      "Completed Class XII with focus on Science (PCM) and developed a strong analytical and logical foundation.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
];

export default function EducationSection() {
  return (
    <section className="education-timeline-section" id="education">
      <div className="education-timeline-container">
        <div className="edu-journey-header">
          <div className="edu-header-copy">
            <div className="edu-kicker">
              <span className="edu-kicker-line" />
              EDUCATION
            </div>
            <h2 className="edu-main-title">
              ACADEMIC <span>JOURNEY</span>
            </h2>
            <p className="edu-subtitle-line">
              Exploring new technologies and methodologies — a continuous journey from technical foundation to business leadership.
            </p>
          </div>

          <div className="edu-quote-block">
            <p>
              Education is not just about degrees, but about building the skills, mindset and curiosity to create a better tomorrow.
            </p>
          </div>
        </div>

        <div className="edu-timeline-stack">
          {educationMilestones.map((item, index) => (
            <div className="edu-timeline-row" key={item.step}>
              <div className="edu-step-number">{item.step}</div>

              <div className="edu-timeline-line">
                <span className="edu-line-dot" />
              </div>

              <article className={`edu-card ${item.highlighted ? "highlighted" : ""}`}>
                <div className="edu-card-main">
                  <div className="edu-card-icon">{item.icon}</div>

                  <div className="edu-card-copy">
                    <div className="edu-card-phase">{item.phase}</div>
                    <h3 className="edu-degree-title">{item.title}</h3>
                    <p className="edu-degree-subtitle">{item.subtitle}</p>
                    <p className="edu-description">{item.description}</p>

                    <div className="edu-tags-wrapper">
                      {item.tags.map((tag) => (
                        <span className="edu-tag" key={`${item.step}-${tag}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="edu-card-side">
                  <div className="edu-side-info">
                    <div className="edu-side-item">
                      <span className="edu-side-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M7 3v2M17 3v2M4 9h16M5 5h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
                        </svg>
                      </span>
                      <span>{item.duration}</span>
                    </div>
                    <div className="edu-side-item">
                      <span className="edu-side-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                      </span>
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <button className="edu-arrow-btn" type="button" aria-label="View details">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m13 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="edu-footer-tag">
          <span className="edu-footer-line" />
          <span>FOUNDATION TODAY, GREATER TOMORROW.</span>
        </div>

        <div className="edu-big-word">EDUCATION</div>
      </div>
    </section>
  );
}
