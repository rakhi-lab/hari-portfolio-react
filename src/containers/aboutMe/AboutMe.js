import React, { useEffect, useRef, useState } from "react";
import "./AboutMe.css";
import { motion, useInView } from "framer-motion";
import { aboutMe } from "../../portfolio";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

/* ── Animated Counter ──────────────────────────────────────── */
function AnimatedCounter({ value, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  const numericValue = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    let start = null;
    let rafId;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOut curve
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * numericValue).toString() + suffix);
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    const timer = setTimeout(() => {
      rafId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isInView, numericValue, delay, suffix]);

  return <span ref={ref}>{display}</span>;
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
            <div className="about-image-wrapper">
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
            <motion.div
              key={index}
              className={`stat-card-exact stat-color-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -8px rgba(99,102,241,0.18)" }}
            >
              <div className="stat-icon-exact">
                <i className={stat.icon} />
              </div>
              <h2 className="stat-number-exact" style={{ color: theme.text }}>
                <AnimatedCounter value={stat.value} delay={index * 120} />
              </h2>
              <p className="stat-label-exact" style={{ color: theme.secondaryText }}>
                {stat.name}
              </p>
            </motion.div>
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
