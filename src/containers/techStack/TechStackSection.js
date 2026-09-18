import React, { useRef, useEffect, useState, useCallback } from "react";
import "./TechStackSection.css";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { Fade } from "react-reveal";
import { gsap } from "gsap";

const techBlocks = [
  { id: 1, title: "Mobile Apps", sub: "Android • React Native • iOS • Flutter", x: -169, y: -130, z: 52, color: "#0ea5e9" },
  { id: 2, title: "Ecommerce", sub: "Shopify • WooCommerce", x: 130, y: -143, z: 65, color: "#8b5cf6" },
  { id: 3, title: "CMS", sub: "WordPress", x: -195, y: 13, z: 46, color: "#10b981" },
  { id: 4, title: "Custom Dev", sub: "PHP • Laravel • Node.js • .NET", x: 104, y: 0, z: 72, color: "#f59e0b" },
  { id: 5, title: "Full Stack", sub: "React • Next.js", x: -78, y: 143, z: 59, color: "#ef4444" },
  { id: 6, title: "Cloud", sub: "AWS • Azure • Google Cloud • Firebase • Docker", x: 182, y: 130, z: 78, color: "#06b6d4" },
  { id: 7, title: "Firebase", sub: "Authentication • Firestore • Hosting • Cloud Functions", x: 0, y: -7, z: 91, color: "#d946ef" }
];

export default function TechStackSection({ theme }) {
  const sceneRef = useRef(null);
  const platformRef = useRef(null);
  const blocksRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const [hoveredBlock, setHoveredBlock] = useState(null);

  // Gentle floating oscillation (NO full 360° spin)
  useEffect(() => {
    let time = 0;

    const animate = () => {
      time += 0.008; // Slow increment for gentle movement

      if (platformRef.current) {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;

        // Gentle oscillation: sway ±12° on Y, ±3° on X
        const autoY = Math.sin(time) * 12;
        const autoX = Math.sin(time * 0.7) * 3;

        // Combine oscillation with mouse parallax
        const rotY = autoY + mx * 10;
        const rotX = -10 + autoX + my * 6;

        platformRef.current.style.setProperty('--rotX', `${rotX}deg`);
        platformRef.current.style.setProperty('--rotY', `${rotY}deg`);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Mouse move handler for parallax
  const handleMouseMove = useCallback((e) => {
    if (!sceneRef.current) return;
    const rect = sceneRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    // Normalize to -1 to 1
    mouseRef.current.x = (e.clientX - cx) / (rect.width / 2);
    mouseRef.current.y = (e.clientY - cy) / (rect.height / 2);
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Smoothly reset mouse position
    gsap.to(mouseRef.current, { x: 0, y: 0, duration: 0.8, ease: "power2.out" });
  }, []);

  // Block hover handlers
  const handleBlockEnter = useCallback((index) => {
    setHoveredBlock(index);
    const el = blocksRef.current[index];
    if (el) {
      gsap.to(el, {
        z: techBlocks[index].z + 52,
        scale: 1.08,
        boxShadow: "0 0 40px rgba(56, 189, 248, 0.6), 0 20px 60px rgba(0,0,0,0.5)",
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, []);

  const handleBlockLeave = useCallback((index) => {
    setHoveredBlock(null);
    const el = blocksRef.current[index];
    if (el) {
      gsap.to(el, {
        z: techBlocks[index].z,
        scale: 1,
        boxShadow: "0 0 15px rgba(56, 189, 248, 0.15), 0 10px 30px rgba(0,0,0,0.3)",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <div className="tech3d-section" id="tech-stack">
      {/* Header */}
      <Fade bottom duration={1000} distance="20px">
        <div className="tech3d-header">
          <SectionHeader
            overline="TECHNOLOGIES"
            title="Our Technology Stack and"
            highlight="Platforms"
            subtitle="A scalable, robust, and modern architecture powering next-generation digital experiences."
            align="center"
            theme={theme}
          />
        </div>
      </Fade>

      {/* 3D Scene */}
      <div
        className="tech3d-scene"
        ref={sceneRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="tech3d-platform-wrapper" ref={platformRef}>

          {/* Base Platform */}
          <div className="tech3d-base">
            <div className="tech3d-base-top"></div>
            {/* Glow lines */}
            <div className="tech3d-base-glow-h"></div>
            <div className="tech3d-base-glow-v"></div>
          </div>

          {/* Technology Blocks */}
          {techBlocks.map((block, i) => (
            <div
              key={block.id}
              className={`tech3d-block ${hoveredBlock === i ? "tech3d-block--hovered" : ""}`}
              ref={(el) => (blocksRef.current[i] = el)}
              style={{
                transform: `translate3d(${block.x}px, ${block.y}px, ${block.z}px)`,
              }}
              onMouseEnter={() => handleBlockEnter(i)}
              onMouseLeave={() => handleBlockLeave(i)}
            >
              <div className="tech3d-block-glow" style={{ background: block.color }}></div>
              <h4 className="tech3d-block-title">{block.title}</h4>
              <p className="tech3d-block-sub">{block.sub}</p>
              <div className="tech3d-block-accent" style={{ background: block.color }}></div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
