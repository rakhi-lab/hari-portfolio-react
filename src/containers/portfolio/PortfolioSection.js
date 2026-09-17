import React, { useState, useEffect, useRef, useCallback } from "react";
import "./PortfolioSection.css";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── Portfolio Data ─── */
const PORTFOLIO_ITEMS = [
  { id: 1, title: "JSK Share Market Classes", category: "WordPress", image: "word-1.jpg", link: "http://www.jsksharemarketclasses.com/" },
  { id: 2, title: "UHLF", category: "WordPress", image: "word-2.jpg", link: "https://www.uhlf.global/" },
  { id: 3, title: "Cool Air Florida", category: "WordPress", image: "word-3.jpg", link: "https://www.coolairflorida.com/" },
  { id: 4, title: "Weblizar", category: "SEO", image: "seo-1.jpg", link: "https://weblizar.com" },
  { id: 5, title: "Balance Health", category: "SEO", image: "seo-2.jpg", link: "http://www.balancehealth.com.hk/" },
  { id: 6, title: "Webcart Multi-vendor", category: "SEO", image: "seo-3.jpg", link: "http://web-cart.com" },
  { id: 7, title: "Miss Telangana Blue", category: "Web Design", image: "design-1.jpg", link: "http://misstelanganablue.com/" },
  { id: 8, title: "Online Free Prasad", category: "Web Design", image: "design-2.jpg", link: "https://onlinefreeprasad.com" },
  { id: 9, title: "Kashvi Photography", category: "Web Design", image: "design-3.jpg", link: "http://kashviphotography.com/" },
  { id: 10, title: "Nihar Skill", category: "Custom Work", image: "cust-1.jpg", link: "https://niharskill.com/" },
  { id: 11, title: "Vowa Canada", category: "Custom Work", image: "cust-2.jpg", link: "http://vowacanada.com/" },
  { id: 12, title: "Max GEO", category: "Custom Work", image: "cust-3.jpg", link: "https://www.maxgeo.com/" },
  { id: 13, title: "Medeazy", category: "eCommerce", image: "ecommerce-1.jpg", link: "https://medeazy.in/" },
  { id: 14, title: "Balqlot", category: "eCommerce", image: "ecommerce-2.jpg", link: "https://balqlot.com/" },
  { id: 15, title: "Erris Eye", category: "eCommerce", image: "ecommerce-3.jpg", link: "http://erriseye.com/" },
];

/* ─── Helpers ─── */
function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

/* ─── Component ─── */
export default function PortfolioSection({ theme }) {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const isDark = theme && theme.name === "dark";

  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const parallaxRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const rafRef = useRef(null);
  const scrollProgressRef = useRef(0);

  const setCardRef = useCallback((el, index) => {
    cardRefs.current[index] = el;
  }, []);

  /* ─── Arc Layout: Position cards in a semicircular arc ─── */
  const updateCards = useCallback((scrollProg) => {
    const cards = cardRefs.current;
    const total = PORTFOLIO_ITEMS.length;
    if (!cards.length) return;

    const vw = window.innerWidth;

    // How many cards are "visible" in the arc at once
    const visibleCount = vw > 1200 ? 9 : vw > 900 ? 7 : vw > 600 ? 5 : 3;

    // Arc geometry
    const arcRadius = vw * 0.52;
    const totalArcAngle = Math.PI * 0.55; // ~100 degrees total arc

    // Padding: always keep this many cards visible on each side
    // so left/right sides are never empty
    const padding = Math.floor(visibleCount / 2);

    // Which card is at center (driven by scroll)
    // At progress=0: centerIndex = padding (cards on both sides)
    // At progress=1: centerIndex = total - 1 - padding (cards on both sides)
    const centerIndex = padding + scrollProg * (total - 1 - 2 * padding);

    cards.forEach((card, i) => {
      if (!card) return;

      // Distance from center card (fractional)
      const dist = i - centerIndex;
      const absDist = Math.abs(dist);

      // Normalize position within the visible arc
      // dist=0 → center (angle=0), dist=±visibleCount/2 → edges
      const halfVisible = visibleCount / 2;
      const normalizedPos = clamp(dist / halfVisible, -1, 1);

      // Angular position on the arc
      const angle = normalizedPos * (totalArcAngle / 2);

      // X position: sin of angle * radius (horizontal spread)
      const xPos = Math.sin(angle) * arcRadius;

      // Z position: cos of angle * radius, inverted so center is forward
      // At center (angle=0): cos=1 → z=0 (forward)
      // At edges (angle=max): cos<1 → z is negative (backward)
      const zPos = (Math.cos(angle) - 1) * arcRadius * 0.6;

      // Rotation: cards face inward toward the center
      // This is the key to the Melius look — edge cards are nearly perpendicular
      const rotateY = -angle * (180 / Math.PI) * 1.3;

      // Scale: center is larger, edges smaller
      const scale = clamp(1 - absDist * 0.04, 0.65, 1);

      // Opacity: fade cards that are far from center
      const opacity = absDist > halfVisible + 1 ? 0 : clamp(1 - (absDist - halfVisible + 1) * 0.4, 0.15, 1);

      // Z-index: center card is on top
      const zIndex = Math.round(100 - absDist * 10);

      card.style.transform = `
        translateX(${xPos}px)
        translateZ(${zPos}px)
        rotateY(${rotateY}deg)
        scale(${scale})
      `;
      card.style.opacity = opacity;
      card.style.zIndex = Math.max(1, zIndex);

      // Center card class for enhanced shadow
      if (absDist < 0.6) {
        card.classList.add("is-center");
      } else {
        card.classList.remove("is-center");
      }
    });
  }, []);

  /* ─── Mouse Parallax ─── */
  useEffect(() => {
    const pRef = parallaxRef.current;
    let running = true;

    const onMouseMove = (e) => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      pRef.targetX = ((e.clientX / vw) - 0.5) * 2;
      pRef.targetY = ((e.clientY / vh) - 0.5) * 2;
    };

    const animate = () => {
      if (!running) return;
      pRef.x = lerp(pRef.x, pRef.targetX, 0.05);
      pRef.y = lerp(pRef.y, pRef.targetY, 0.05);

      if (stageRef.current) {
        const moveX = pRef.x * 12;
        const moveY = pRef.y * 6;
        stageRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      running = false;
      window.removeEventListener("mousemove", onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ─── GSAP ScrollTrigger ─── */
  useEffect(() => {
    if (!sectionRef.current || !viewportRef.current) return;

    updateCards(0);

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: () => `+=${window.innerHeight * 3.5}`,
      pin: viewportRef.current,
      scrub: 0.6,
      anticipatePin: 1,
      onUpdate: (self) => {
        scrollProgressRef.current = self.progress;
        setProgress(self.progress);
        updateCards(self.progress);
      },
    });

    const onResize = () => {
      trigger.refresh();
      updateCards(scrollProgressRef.current);
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      trigger.kill();
      window.removeEventListener("resize", onResize);
    };
  }, [updateCards]);

  /* ─── Hover Tilt ─── */
  const handleCardMouseMove = useCallback((e, cardEl) => {
    if (!cardEl) return;
    const rect = cardEl.getBoundingClientRect();
    // const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const currentTransform = cardEl.style.transform || "";
    const base = currentTransform.replace(/rotateX\([^)]*\)/g, "");
    cardEl.style.transform = `${base} rotateX(${y * -6}deg)`;
  }, []);

  const handleCardMouseLeave = useCallback((cardEl) => {
    if (!cardEl) return;
    updateCards(scrollProgressRef.current);
  }, [updateCards]);

  const currentIndex = Math.round(progress * (PORTFOLIO_ITEMS.length - 1));

  return (
    <section
      className={`portfolio-section-wrap ${isDark ? "dark-theme" : "bg-gray"}`}
      id="Portfolio"
      ref={sectionRef}
    >
      <div className="portfolio-3d-pin-wrapper" ref={viewportRef}>
        <div className="portfolio-3d-viewport">
          {/* Header */}
          <div className="portfolio-3d-header">
            <SectionHeader
              overline="PORTFOLIO"
              title="My "
              highlight="Portfolio"
              align="center"
              theme={theme}
             
            />
          </div>

          {/* 3D Arc Stage */}
          <div className="portfolio-3d-stage" ref={stageRef}>
            {PORTFOLIO_ITEMS.map((item, index) => {
              const imgSrc = require(`../../assets/images/portfolio/${item.image}`);
              return (
                <div
                  key={item.id}
                  className="portfolio-3d-card"
                  ref={(el) => setCardRef(el, index)}
                  onMouseMove={(e) => handleCardMouseMove(e, cardRefs.current[index])}
                  onMouseLeave={() => handleCardMouseLeave(cardRefs.current[index])}
                >
                  <img
                    src={imgSrc}
                    alt={item.title}
                    loading="lazy"
                    className="portfolio-3d-card-img"
                  />
                  <div className="portfolio-3d-card-overlay">
                    <span className="portfolio-3d-card-category">{item.category}</span>
                    <h3 className="portfolio-3d-card-title">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    </h3>
                    <div className="portfolio-3d-card-actions">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-3d-card-visit"
                      >
                        Visit Site ↗
                      </a>
                      <button
                        type="button"
                        className="portfolio-3d-card-zoom"
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxImage({ src: imgSrc, title: item.title, link: item.link });
                        }}
                        title={`Zoom ${item.title}`}
                        aria-label={`Zoom ${item.title}`}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom: Progress + Button */}
          <div className="portfolio-3d-bottom">
            <div className="portfolio-3d-progress-wrap">
              <div className="portfolio-3d-progress-bar">
                <div
                  className="portfolio-3d-progress-fill"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
              <span className="portfolio-3d-progress-text">
                {String(currentIndex + 1).padStart(2, "0")} / {String(PORTFOLIO_ITEMS.length).padStart(2, "0")}
              </span>
            </div>

            {progress < 0.05 && (
              <div className="portfolio-3d-scroll-hint">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
                Scroll to explore
              </div>
            )}

            <div className="portfolio-more-wrap">
              <a
                className="portfolio_more btn"
                href="https://weblizar.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                More Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="portfolio-lightbox-backdrop" onClick={() => setLightboxImage(null)}>
          <div className="portfolio-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="portfolio-lightbox-close"
              onClick={() => setLightboxImage(null)}
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <img src={lightboxImage.src} alt={lightboxImage.title} className="portfolio-lightbox-img" />
            <div className="portfolio-lightbox-caption">
              <h4>{lightboxImage.title}</h4>
              <a href={lightboxImage.link} target="_blank" rel="noopener noreferrer" className="portfolio-lightbox-visit">
                Visit Site ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
