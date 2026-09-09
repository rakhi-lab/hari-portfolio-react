import React, { useRef } from "react";
import "./Footer.css";
import { greeting, socialMediaLinks } from "../../portfolio.js";
import { motion, useInView } from "framer-motion";

export default function Footer(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer className="pf-footer" ref={ref}>
      {/* Top gradient border */}
      <div className="pf-footer__border" />

      <div className="pf-footer__inner">
        {/* Brand */}
        <motion.div
          className="pf-footer__brand"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="pf-footer__logo">
            <span className="pf-footer__logo-bracket">{"<"}</span>
            <span className="pf-footer__logo-name">{greeting.logo_name}</span>
            <span className="pf-footer__logo-bracket">{"/>"}</span>
          </div>
          <p className="pf-footer__tagline">
            Building digital experiences that matter.
          </p>
        </motion.div>

        {/* Social icons row */}
        <motion.div
          className="pf-footer__socials"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {socialMediaLinks.map((media, i) => (
            <motion.a
              key={i}
              href={media.link}
              className="pf-footer__icon"
              target={media.link.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              aria-label={media.name}
              style={{ "--brand": media.backgroundColor || "#6366F1" }}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className={`fa-brands ${media.fontAwesomeIcon}`} />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom row */}
        <motion.div
          className="pf-footer__bottom"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="pf-footer__copy">
            © {new Date().getFullYear()} {greeting.title}. Crafted with{" "}
            <span role="img" aria-label="love">❤️</span> & code.
          </p>
          <p className="pf-footer__sub">
            Built with React · Framer Motion · Styled with ♥
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
