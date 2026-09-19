import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { motion } from "framer-motion";
import Button from "../../components/button/Button";

/* ─── Animation Variants ──────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

/* ─── Main Component ──────────────────────────────────────── */
export default function Greeting(props) {
  return (
    <section className="hero-section" id="greeting">
      {/* ── Exact Match SVG Background ── */}
      <div className="hero-bg-container">
        <svg
          className="hero-wave"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Dark Blue Wave */}
          <path
            d="M 0,0 L 1440,0 L 1440,250 C 1300,450 1150,550 950,550 C 700,550 650,850 450,900 L 0,900 Z"
            fill="#0F244A"
          />
          {/* Lighter Blue accents underneath the main wave */}
          <path
            d="M 950,550 C 1100,550 1200,600 1350,800 C 1400,850 1440,880 1440,900 L 1000,900 C 850,900 800,850 650,750 C 750,700 850,650 950,550 Z"
            fill="#1E3A8A"
            opacity="0.3"
          />
        </svg>

        {/* Right side circular light blue blob behind image */}
        <div className=""></div>
      </div>

      <div className="hero-inner">
        {/* ── Left: Text Content ── */}
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow badge */}
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="hero-badge__dot" />
            AVAILABLE FOR NEW PROJECTS
          </motion.div>

          <motion.p className="hero-hello" variants={itemVariants}>
            Hello, I'm
          </motion.p>

          {/* Exact Name split with gradient */}
          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="hero-title__first">Hari Shankar</span>
            <br />
            <span className="hero-title__last">Maliya</span>
          </motion.h1>

          {/* Role */}
          <motion.div className="hero-role" variants={itemVariants}>
            CEO & FOUNDER <span className="hero-role__line"></span>
          </motion.div>

          {/* Subtitle */}
          <motion.p className="hero-subtitle" variants={itemVariants}>
            A passionate individual who always thrives to work on end<br />
            to end products which develop sustainable and scalable<br />
            social and technical systems to create impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="hero-cta" variants={itemVariants}>
            <Button text="Contact Me" href="#contact" />
            <Button text="Portfolio" href="#Portfolio" />
          </motion.div>

          {/* Watch My Intro element */}
          {/* <motion.div
            className="hero-intro"
            variants={itemVariants}
          >
            <div className="hero-intro__play">
              <div className="hero-intro__play-triangle"></div>
            </div>
            <div className="hero-intro__text-wrap">
              <svg className="hero-intro__arrow" viewBox="0 0 50 50" width="40" height="40">
                <path d="M 0,25 C 20,25 40,25 40,40 M 40,40 L 30,35 M 40,40 L 50,35" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="hero-intro__text">
                Watch<br />My Intro
              </div>
            </div>
          </motion.div> */}
        </motion.div>

        {/* ── Right: Profile Image & Graphics ── */}
        <motion.div
          className="hero-image-wrap"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Cursive Let's Connect */}
          <motion.div
            className="hero-graphic hero-graphic--connect"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span className="hero-cursive">Let's<br />Connect</span>
            <svg className="hero-graphic__arrow-right" viewBox="0 0 50 50" width="40" height="40">
              <path d="M 10,10 C 30,10 40,20 40,40 M 40,40 L 30,30 M 40,40 L 50,30" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          {/* Profile image cutout */}
          <img
            alt={greeting.title}
            src={require("../../assets/images/hari_profile.png")}
            className="hero-profile-img"
          />

          {/* Cursive Build Innovate Grow */}
          <motion.div
            className="hero-graphic hero-graphic--grow"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <span className="hero-cursive">Build<br />Innovate<br />Grow</span>
            {/* Simple plant/leaf representation */}

          </motion.div>
        </motion.div>
      </div>

      {/* ── Floating Social Media Right Side ── */}
      <div className="hero-social-sidebar">
        <SocialMedia theme={props.theme} />
      </div>

      {/* ── Dot Grid ── */}
      <div className="hero-dot-grid"></div>
    </section>
  );
}
