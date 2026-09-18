import React, { useRef } from "react";
import "./Footer.css";
import { greeting, socialMediaLinks } from "../../portfolio.js";
import { motion, useInView } from "framer-motion";

export default function Footer(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const logoName = greeting.logo_name.split(" ");
  const firstName = logoName[0] || "Hari";
  const lastName = logoName[1] || "Shankar";

  return (
    <div className="pf-footer-wrapper" ref={ref}>
      <footer className="pf-footer">
        <div className="pf-footer__inner">
          <div className="pf-footer__content">

            {/* Left Section - Brand */}
            <motion.div
              className="pf-footer__brand"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="pf-footer__logo">
                <span className="pf-footer__logo-bracket">{"< "}</span>
                <span className="pf-footer__logo-name-white">{firstName}</span>
                <span className="pf-footer__logo-name-blue"> {lastName}</span>
                <span className="pf-footer__logo-bracket">{" />"}</span>
              </div>
              <p className="pf-footer__tagline">
                Building digital experiences<br />that matter.
              </p>
            </motion.div>

            {/* Center Section - CTA & Socials */}
            <motion.div
              className="pf-footer__center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="pf-footer__cta-title">
                Ready to <span className="pf-footer__gradient-text">collaborate?</span>
                <svg className="pf-footer__underline" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 0" stroke="#0ea5e9" strokeWidth="3" fill="none" />
                </svg>
              </h2>
              <p className="pf-footer__cta-subtitle">
                Let's create something extraordinary together.
              </p>

              <div className="pf-footer__socials">
                {socialMediaLinks.map((media, i) => (
                  <a
                    key={i}
                    href={media.link}
                    className="pf-footer__social-btn"
                    target={media.link.startsWith("mailto:") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={media.name}
                  >
                    <i className={`fa-brands ${media.fontAwesomeIcon} pf-footer__social-icon`} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right Section - Connect */}
            <motion.div
              className="pf-footer__right"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <div className="pf-footer__cta-container">
                <a href="mailto:hari@example.com" className="pf-footer__cta-btn">
                  Get in Touch
                  <i className="fa-solid fa-arrow-right pf-footer__cta-icon"></i>
                </a>
                <div className="pf-footer__connect-text">
                  Let's Connect
                  <svg className="pf-footer__connect-arrow" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17C9 14 11 11 15 11M15 11L12 8M15 11L12 14" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="pf-footer__divider"></div>

          {/* Bottom Bar */}
          <div className="pf-footer__bottom-bar">
            <p className="pf-footer__copy-text">
              © {new Date().getFullYear()} {greeting.title}. Crafted with{" "}
              <span className="pf-footer__heart" role="img" aria-label="love">❤️</span> & code.
            </p>
            <button className="pf-footer__scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <i className="fa-solid fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
