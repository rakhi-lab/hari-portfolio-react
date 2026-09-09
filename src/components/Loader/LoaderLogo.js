import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme || { body: "#EDF9FE", splashBg: "#001C55" };
    const strokeColor = theme.body || "#EDF9FE";

    return (
      <div className="loader-container">
        <svg
          className="raw_logo"
          viewBox="0 0 440 330"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Hexagon */}
          <path
            className="myHexagon outerHexagon"
            d="M293.545 167.405L229.5 204.381C227.025 205.81 223.975 205.81 221.5 204.381L157.455 167.405C154.98 165.976 153.455 163.335 153.455 160.476L153.455 86.5234C153.455 83.6653 154.98 81.0243 157.455 79.5952L221.5 42.6187C223.975 41.1896 227.025 41.1897 229.5 42.6187L293.545 79.5952C296.02 81.0243 297.545 83.6653 297.545 86.5234L297.545 160.476C297.545 163.335 296.02 165.976 293.545 167.405Z"
            stroke={strokeColor}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner Hexagon */}
          <path
            className="myHexagon innerHexagon"
            d="M147.455 73.5953L211.5 36.6188C213.975 35.1898 217.025 35.1898 219.5 36.6188L283.545 73.5953C286.02 75.0244 287.545 77.6654 287.545 80.5235L287.545 154.477C287.545 157.335 286.02 159.976 283.545 161.405L219.5 198.381C217.025 199.81 213.975 199.81 211.5 198.381L147.455 161.405C144.98 159.976 143.455 157.335 143.455 154.477L143.455 80.5235C143.455 77.6654 144.98 75.0244 147.455 73.5953Z"
            stroke={strokeColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Initials H and S inside Hexagon */}
          <g className="initials-group">
            <text
              className="logo-initials-shadow"
              x="220"
              y="142"
              fill="none"
              stroke="rgba(0, 28, 85, 0.8)"
              strokeWidth="6"
              textAnchor="middle"
            >
              HS
            </text>
            <text
              className="logo-initials"
              x="220"
              y="142"
              fill="none"
              stroke={strokeColor}
              strokeWidth="2.8"
              textAnchor="middle"
            >
              HS
            </text>
          </g>

          {/* Signature text below Hexagon in Agustina Regular */}
          <text
            className="logo-signature"
            x="220"
            y="268"
            fill={strokeColor}
            stroke={strokeColor}
            strokeWidth="0.8"
            textAnchor="middle"
          >
            Hari Shankar
          </text>
        </svg>
      </div>
    );
  }
}

export default LogoLoader;
