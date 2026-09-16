import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

/* ─── Animation Variants ──────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariants = {
  hidden:  { opacity: 0, scale: 0.86, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.35 },
  },
};

/* ─── Floating Badge ──────────────────────────────────────── */
function FloatingBadge({ children, style, delay = 0 }) {
  return (
    <motion.div
      className="hero-badge"
      style={style}
      initial={{ opacity: 0, scale: 0.6, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: 1.4 + delay,
        duration: 0.55,
        type: "spring",
        stiffness: 220,
        damping: 16,
      }}
      whileHover={{ scale: 1.07, y: -2 }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Main Component ──────────────────────────────────────── */
export default function Greeting(props) {
  return (
    <section className="hero-section" id="greeting">
      {/* CSS-animated background elements */}
      <div className="hero-bg">
        <div className="hero-blob hero-blob--1" />
        <div className="hero-blob hero-blob--2" />
        <div className="hero-blob hero-blob--3" />
        <div className="hero-grid" />
        <div className="hero-orb hero-orb--lg" />
        <div className="hero-orb hero-orb--sm" />
      </div>

      <div className="hero-inner">
        {/* ── Left: Text Content ── */}
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div className="hero-eyebrow" variants={itemVariants}>
            <span className="hero-eyebrow__pulse" />
            <span>Available for new projects</span>
          </motion.div>

          {/* Name */}
          <motion.h1 className="hero-title" variants={itemVariants}>
            {greeting.title}
          </motion.h1>

          {/* Typewriter roles */}
          <motion.div className="hero-typewriter" variants={itemVariants}>
            <Typewriter
              options={{
                strings: greeting.roles,
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 28,
              }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p className="hero-subtitle" variants={itemVariants}>
            {greeting.subTitle}
          </motion.p>

          {/* Social links */}
          <motion.div variants={itemVariants}>
            <SocialMedia theme={props.theme} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="hero-cta" variants={itemVariants}>
            <Button text="Contact Me" href="#contact" theme={props.theme} />
            <Button
              text="Portfolio"
              href="#Portfolio"
              theme={props.theme}
            />
          </motion.div>
        </motion.div>

        {/* ── Right: Profile Image ── */}
        <motion.div
          className="hero-image-wrap"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative ring behind image */}
          <div className="hero-image-ring" />
          <div className="hero-image-glow" />

          {/* Profile image */}
          <motion.img
            alt={greeting.title}
            src={require("../../assets/images/hari_profile.png")}
            className="hero-profile-img"
            whileHover={{ scale: 1.035, rotate: 1.5 }}
            transition={{ type: "spring", stiffness: 180, damping: 16 }}
          />


        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="hero-scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
      >
        <motion.div
          className="hero-scroll-cue__dot"
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
