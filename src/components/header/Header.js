import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/home", label: "Home" },
  { to: "/home#about", hash: "about", label: "About Us" },
  { to: "/home#skills", hash: "skills", label: "Skills" },
  { to: "/education", label: "Education" },
  {
    label: "Products sites",
    dropdown: [
      { label: "Weblizar", url: "https://weblizar.com/" },
      { label: "Web Cart", url: "https://web-cart.com/" },
      { label: "School Management", url: "https://theschool-management.com/" },
      { label: "Online Exam Management", url: "https://onlineexammanagement.com/" },
    ],
  },
  { to: "/home#services", hash: "services", label: "Services" },
  { to: "/home#Portfolio", hash: "Portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    const handleHashChange = () => setCurrentHash(window.location.hash);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const link = settings.isSplash ? "/splash" : "/home";

  const isLinkActive = (item) => {
    if (!item.to) return false;
    const pathname = location.pathname;
    const hash = currentHash.replace("#", "");

    if (item.hash) {
      return (pathname === "/home" || pathname === "/") && hash === item.hash;
    }
    if (item.to === "/home") {
      return (pathname === "/home" || pathname === "/") && !hash;
    }
    return pathname === item.to;
  };

  const handleLinkClick = (e, item) => {
    setMobileOpen(false);

    if (item.hash) {
      if (location.pathname === "/home" || location.pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(item.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `/home#${item.hash}`);
          setCurrentHash(`#${item.hash}`);
        }
      }
    } else if (item.to === "/home") {
      if (location.pathname === "/home" || location.pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/home");
        setCurrentHash("");
      }
    }
  };

  return (
    <>
      <SeoHeader />
      <motion.header
        className={`pf-header${scrolled ? " pf-header--scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="pf-header__inner">
          {/* Logo */}
          <Link to={link} className="pf-logo">
            <motion.span
              className="pf-logo__bracket"
              whileHover={{ rotate: -10 }}
              transition={{ type: "spring", stiffness: 400 }}
            >{"<"}</motion.span>
            <span className="pf-logo__name">{greeting.logo_name}</span>
            <motion.span
              className="pf-logo__bracket"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 400 }}
            >{"/>"}</motion.span>
          </Link>

          {/* Desktop Nav */}
          <nav className="pf-nav">
            {navLinks.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.label} className="pf-nav__dropdown-wrap">
                    <button
                      className="pf-nav__link pf-nav__dropdown-toggle"
                      type="button"
                    >
                      {item.label}
                      <span className="pf-dropdown-caret">▾</span>
                    </button>
                    <div className="pf-nav__dropdown-menu">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pf-dropdown__item"
                        >
                          <span>{sub.label}</span>
                          <span className="pf-dropdown-icon">↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }

              const active = isLinkActive(item);
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={(e) => handleLinkClick(e, item)}
                  className={`pf-nav__link${active ? " pf-nav__link--active" : ""}`}
                >
                  {item.label}
                  {active && <span className="pf-nav__underline" />}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle — pure CSS hamburger */}
          <button
            className={`pf-header__toggle${mobileOpen ? " pf-header__toggle--open" : ""}`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className="pf-hamburger">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="pf-mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {navLinks.map((item, i) => {
                if (item.dropdown) {
                  return (
                    <div key={item.label} className="pf-mobile-dropdown">
                      <button
                        className="pf-mobile-menu__link pf-mobile-dropdown__btn"
                        onClick={() => setDropdownOpen((d) => !d)}
                      >
                        <span>{item.label}</span>
                        <span>{dropdownOpen ? "▴" : "▾"}</span>
                      </button>
                      {dropdownOpen && (
                        <div className="pf-mobile-subitems">
                          {item.dropdown.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="pf-mobile-sublink"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label} ↗
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                const active = isLinkActive(item);
                return (
                  <motion.div
                    key={item.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      to={item.to}
                      className={`pf-mobile-menu__link${active ? " pf-mobile-menu__link--active" : ""}`}
                      onClick={(e) => handleLinkClick(e, item)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
