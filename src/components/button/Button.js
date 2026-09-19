import React from "react";
import "./Button.css";

export default function Button({ text, className, href, newTab, theme }) {
  if (href) {
    return (
      <div className={className}>
        <a
          className="main-button"
          href={href}
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noopener noreferrer" : undefined}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>{text}</span>
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      <button className="main-button">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>{text}</span>
      </button>
    </div>
  );
}
