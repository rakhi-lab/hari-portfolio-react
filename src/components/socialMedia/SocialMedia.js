import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import { motion } from "framer-motion";

export default function SocialMedia(props) {
  return (
    <motion.div
      className="pf-social"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {socialMediaLinks.map((media, i) => (
        <motion.a
          key={i}
          href={media.link}
          className="pf-social__icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={media.name}
          style={{ "--brand-color": media.backgroundColor }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.08 * i,
            duration: 0.4,
            type: "spring",
            stiffness: 280,
            damping: 16,
          }}
          whileHover={{ scale: 1.18, y: -3 }}
          whileTap={{ scale: 0.9 }}
          title={media.name}
        >
          <i className={`fa-brands ${media.fontAwesomeIcon}`} />
        </motion.a>
      ))}
    </motion.div>
  );
}
