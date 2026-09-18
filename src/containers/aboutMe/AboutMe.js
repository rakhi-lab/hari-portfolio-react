import React, { useEffect, useRef, useState } from "react";
import "./AboutMe.css";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { aboutMe } from "../../portfolio";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

/* ── Animated Number Counter (Count-Up) ────────────────────── */
function AnimatedCounter({ value, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  
  // Extract numeric part and suffix
  const numericValue = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      let animationFrame;
      const duration = 2000; // 2 seconds

      const timeout = setTimeout(() => {
        const step = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          
          // easeOutExpo for a smooth slow-down at the end
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          
          setCount(Math.floor(easeProgress * numericValue));
          
          if (progress < 1) {
            animationFrame = requestAnimationFrame(step);
          }
        };
        animationFrame = requestAnimationFrame(step);
      }, delay);

      return () => {
        clearTimeout(timeout);
        if (animationFrame) cancelAnimationFrame(animationFrame);
      };
    }
  }, [isInView, numericValue, delay]);

  return (
    <span ref={ref} style={{ display: "inline-flex", alignItems: "center", lineHeight: 1 }}>
      {count}{suffix}
    </span>
  );
}

/* ── Scroll Reveal Wrapper ─────────────────────────────────── */
function Reveal({ children, delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

/* ─── 3D Hover Stat Card Component ─── */
const StatCard3D = ({ stat, index, theme }) => {
  const cardRef = useRef(null);
  
  // Mouse position values (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Raw mouse coordinates for the light effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse values
  const smoothX = useSpring(x, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 30 });

  // 3D Tilt Transforms
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);

  // Parallax Background Transforms
  const bgX1 = useTransform(smoothX, [-0.5, 0.5], [6, -6]);
  const bgY1 = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const bgX2 = useTransform(bgX1, v => -v);
  const bgY2 = useTransform(bgY1, v => -v);
  
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e) => {
    if (isTouch || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized values for 3D tilt
    const normX = (e.clientX - rect.left) / width - 0.5;
    const normY = (e.clientY - rect.top) / height - 0.5;
    x.set(normX);
    y.set(normY);
    
    // Absolute values for light effect
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    if (!isTouch) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!isTouch) {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`stat-card-3d stat-color-${index}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={isTouch ? {} : { 
        rotateX, 
        rotateY, 
        transformPerspective: 1000 
      }}
      whileHover={isTouch ? {} : { 
        scale: 1.02, 
        y: -8, 
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" 
      }}
    >
      {/* Mouse Light Effect */}
      {isHovered && !isTouch && (
        <motion.div 
          className="stat-mouse-light"
          style={{ x: mouseX, y: mouseY }}
        />
      )}

      {/* Parallax Background Shapes */}
      <motion.div className="stat-bg-shape stat-bg-shape--1" style={isTouch ? {} : { x: bgX1, y: bgY1 }} />
      <motion.div className="stat-bg-shape stat-bg-shape--2" style={isTouch ? {} : { x: bgX2, y: bgY2 }} />

      {/* Dot Grid Pattern */}
      <div className="stat-dot-grid">
        {[...Array(9)].map((_, i) => <span key={i} className="dot"></span>)}
      </div>

      <div className="stat-inner-container">
        {/* 3D Image Container (Left) */}
        <div className="stat-image-container">
          <motion.div 
            className="stat-platform"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="stat-image-wrapper"
            animate={isHovered ? {
              y: [0, -6, 0],
              scale: 1.05
            } : {
              y: 0,
              scale: 1
            }}
            transition={{
              scale: { duration: 0.4 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <img src={stat.image} alt={stat.name} className="stat-3d-image" />
          </motion.div>
        </div>

        {/* Text Content (Right) */}
        <div className="stat-content">
          <motion.h2 
            className="stat-number-3d" 
            style={{ color: "#0f172a" }}
            animate={{ scale: isHovered ? 1.05 : 1, x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <AnimatedCounter value={stat.value} delay={index * 120} />
          </motion.h2>
          <p className="stat-label-3d" style={{ color: "#64748b" }}>
            {stat.name}
          </p>
          <div className={`stat-underline stat-underline-${index}`} />
        </div>
      </div>

      <motion.div 
        className="stat-arrow-btn"
        animate={{ 
          x: isHovered ? 6 : 0,
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{ duration: 0.4 }}
        whileHover={{ rotate: -15, scale: 1.15 }}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </motion.div>
    </motion.div>
  );
};

/* ── Main Component ────────────────────────────────────────── */
export default function AboutMe(props) {
  const theme = props.theme;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  if (!aboutMe.description) return null;

  return (
    <div className="main about-section" id="about" ref={sectionRef}>
      {/* Background decorations */}
      <div className="bg-blob bg-blob-left" />
      <div className="bg-blob bg-blob-right" />
      <div className="bg-blob bg-blob-top-right" />
      <div className="bg-blob bg-blob-bottom-left" />
      <div className="bg-dots bg-dots-left" />
      <div className="bg-dots bg-dots-right" />
      <div className="bg-dots bg-dots-center" />
      <div className="bg-dots bg-dots-bottom" />

      {/* ── Section Header ── */}
      <div className="about-header-container">
        <SectionHeader
          overline="ABOUT ME"
          title="Get To"
          highlight="Know Me"
          subtitle={aboutMe.subtitle}
          align="center"
          theme={theme}
        />
      </div>

      {/* ── 3-Column Content ── */}
      <div className="about-content-container">
        {/* Left: Image */}
        <Reveal direction="right" delay={0.1}>
          <div className="about-image-column">
            <div className="about-image-wrapper image-side-left">
              <div className="image-bg-shape" />
              <motion.img
                alt="Hari Shankar Profile"
                src={require("../../assets/images/hari-office.png")}
                className="about-profile-image"
                whileHover={{ scale: 1.02, rotate: 0.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              />
              <motion.div
                className="floating-badge badge-left-blue"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span>Build</span>
                <span>Learn</span>
                <span>Grow</span>
              </motion.div>
              <motion.div
                className="floating-badge badge-right-white"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="badge-icon-blue">{"</>"}</div>
                <div className="badge-text-dark">
                  Turning Ideas<br />Into Solutions
                </div>
              </motion.div>
            </div>
          </div>
        </Reveal>

        {/* Middle: Text */}
        <Reveal direction="up" delay={0.15}>
          <div className="about-text-column">
            {aboutMe.description.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="about-description"
                style={{ color: theme.secondaryText }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Right: Contact Details */}
        <Reveal direction="left" delay={0.2}>
          <div className="about-details-column">
            {aboutMe.details.map((detail, index) => (
              <motion.div
                key={index}
                className="detail-item-exact"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + index * 0.07 }}
                whileHover={{ x: 4 }}
              >
                <div className="detail-icon-circle">
                  <i className={detail.icon} />
                </div>
                <div className="detail-text-group">
                  <p className="detail-label-exact">{detail.name}</p>
                  <p className="detail-value-exact" style={{ color: theme.text }}>
                    {detail.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* ── Stats Row with Animated Counters ── */}
      <Reveal delay={0.25}>
        <div className="about-stats-container">
          {aboutMe.stats.map((stat, index) => (
            <StatCard3D key={index} stat={stat} index={index} theme={theme} />
          ))}
        </div>
      </Reveal>

      {/* ── Quote ── */}
      <Reveal delay={0.3}>
        <div className="about-quote-container">
          <motion.h2
            className="about-quote-exact"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            {aboutMe.quote}
          </motion.h2>
        </div>
      </Reveal>
    </div>
  );
}
