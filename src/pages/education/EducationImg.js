import React from "react";
import "./EducationImg.css";

export default function EducationImg({ theme }) {
  return (
    <div className="edu-chip-main-container">
      <div className="edu-chip-loader">
        <svg
          viewBox="0 0 800 500"
          xmlns="http://www.w3.org/2000/svg"
          className="edu-chip-svg"
        >
          <defs>
            <linearGradient id="chipGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2d2d2d" />
              <stop offset="100%" stopColor="#0f0f0f" />
            </linearGradient>

            <linearGradient id="textGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            <linearGradient id="pinGradient" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#bbbbbb" />
              <stop offset="50%" stopColor="#888888" />
              <stop offset="100%" stopColor="#555555" />
            </linearGradient>
          </defs>

          {/* Circuit Traces */}
          <g id="traces">
            <path d="M100 100 H200 V210 H326" className="trace-bg" />
            <path d="M100 100 H200 V210 H326" className="trace-flow purple" />

            <path d="M80 180 H180 V230 H326" className="trace-bg" />
            <path d="M80 180 H180 V230 H326" className="trace-flow blue" />

            <path d="M60 260 H150 V250 H326" className="trace-bg" />
            <path d="M60 260 H150 V250 H326" className="trace-flow yellow" />

            <path d="M100 350 H200 V270 H326" className="trace-bg" />
            <path d="M100 350 H200 V270 H326" className="trace-flow green" />

            <path d="M700 90 H560 V210 H474" className="trace-bg" />
            <path d="M700 90 H560 V210 H474" className="trace-flow blue" />

            <path d="M740 160 H580 V230 H474" className="trace-bg" />
            <path d="M740 160 H580 V230 H474" className="trace-flow green" />

            <path d="M720 250 H590 V250 H474" className="trace-bg" />
            <path d="M720 250 H590 V250 H474" className="trace-flow red" />

            <path d="M680 340 H570 V270 H474" className="trace-bg" />
            <path d="M680 340 H570 V270 H474" className="trace-flow yellow" />
          </g>

          {/* Central Processor Chip Body */}
          <rect
            x="330"
            y="190"
            width="140"
            height="100"
            rx="20"
            ry="20"
            fill="url(#chipGradient)"
            stroke="#1e293b"
            strokeWidth="3"
            className="chip-body"
          />

          {/* Left Pins */}
          <g>
            <rect x="322" y="205" width="8" height="10" fill="url(#pinGradient)" rx="2" className="chip-pin" />
            <rect x="322" y="225" width="8" height="10" fill="url(#pinGradient)" rx="2" className="chip-pin" />
            <rect x="322" y="245" width="8" height="10" fill="url(#pinGradient)" rx="2" className="chip-pin" />
            <rect x="322" y="265" width="8" height="10" fill="url(#pinGradient)" rx="2" className="chip-pin" />
          </g>

          {/* Right Pins */}
          <g>
            <rect x="470" y="205" width="8" height="10" fill="url(#pinGradient)" rx="2" className="chip-pin" />
            <rect x="470" y="225" width="8" height="10" fill="url(#pinGradient)" rx="2" className="chip-pin" />
            <rect x="470" y="245" width="8" height="10" fill="url(#pinGradient)" rx="2" className="chip-pin" />
            <rect x="470" y="265" width="8" height="10" fill="url(#pinGradient)" rx="2" className="chip-pin" />
          </g>

          {/* Center Chip Text - Exact Theme Font Family Preserved */}
          <text
            x="400"
            y="244"
            className="chip-text"
            fill="url(#textGradient)"
            textAnchor="middle"
            dominantBaseline="central"
            style={{
              fontFamily: "var(--font-sans, 'Google Sans Medium', sans-serif)",
            }}
          >
            EDUCATION
          </text>

          {/* Terminal Nodes */}
          <circle cx="100" cy="100" r="5" className="trace-node" />
          <circle cx="80" cy="180" r="5" className="trace-node" />
          <circle cx="60" cy="260" r="5" className="trace-node" />
          <circle cx="100" cy="350" r="5" className="trace-node" />

          <circle cx="700" cy="90" r="5" className="trace-node" />
          <circle cx="740" cy="160" r="5" className="trace-node" />
          <circle cx="720" cy="250" r="5" className="trace-node" />
          <circle cx="680" cy="340" r="5" className="trace-node" />
        </svg>
      </div>
    </div>
  );
}
