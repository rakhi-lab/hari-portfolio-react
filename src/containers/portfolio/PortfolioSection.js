import React, { useState } from "react";
import "./PortfolioSection.css";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  "All",
  "WordPress",
  "SEO",
  "Web Design",
  "Custom Work",
  "eCommerce Work",
];

const PORTFOLIO_ITEMS = [
  /* WordPress */
  {
    id: 1,
    title: "JSK Share Market Classes",
    category: "WordPress",
    image: "word-1.jpg",
    link: "http://www.jsksharemarketclasses.com/",
  },
  {
    id: 2,
    title: "UHLF",
    category: "WordPress",
    image: "word-2.jpg",
    link: "https://www.uhlf.global/",
  },
  {
    id: 3,
    title: "Cool Air fFlorida",
    category: "WordPress",
    image: "word-3.jpg",
    link: "https://www.coolairflorida.com/",
  },

  /* SEO */
  {
    id: 4,
    title: "Weblizar",
    category: "SEO",
    image: "seo-1.jpg",
    link: "https://weblizar.com",
  },
  {
    id: 5,
    title: "balancehealth",
    category: "SEO",
    image: "seo-2.jpg",
    link: "http://www.balancehealth.com.hk/",
  },
  {
    id: 6,
    title: "Webcart - Multi-vendor",
    category: "SEO",
    image: "seo-3.jpg",
    link: "http://web-cart.com",
  },

  /* Web Design */
  {
    id: 7,
    title: "Miss Telangana Blue",
    category: "Web Design",
    image: "design-1.jpg",
    link: "http://misstelanganablue.com/",
  },
  {
    id: 8,
    title: "Online Free Prasad",
    category: "Web Design",
    image: "design-2.jpg",
    link: "https://onlinefreeprasad.com",
  },
  {
    id: 9,
    title: "Kashvi Photography",
    category: "Web Design",
    image: "design-3.jpg",
    link: "http://kashviphotography.com/",
  },

  /* Custom Work */
  {
    id: 10,
    title: "Nihar Skill",
    category: "Custom Work",
    image: "cust-1.jpg",
    link: "https://niharskill.com/",
  },
  {
    id: 11,
    title: "Vowa Canada",
    category: "Custom Work",
    image: "cust-2.jpg",
    link: "http://vowacanada.com/",
  },
  {
    id: 12,
    title: "Max GEO",
    category: "Custom Work",
    image: "cust-3.jpg",
    link: "https://www.maxgeo.com/",
  },

  /* eCommerce Work */
  {
    id: 13,
    title: "Medeazy",
    category: "eCommerce Work",
    image: "ecommerce-1.jpg",
    link: "https://medeazy.in/",
  },
  {
    id: 14,
    title: "Balqlot",
    category: "eCommerce Work",
    image: "ecommerce-2.jpg",
    link: "https://balqlot.com/",
  },
  {
    id: 15,
    title: "Erris Eye",
    category: "eCommerce Work",
    image: "ecommerce-3.jpg",
    link: "http://erriseye.com/",
  },
];

export default function PortfolioSection({ theme }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);
  const isDark = theme && theme.name === "dark";

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  return (
    <section
      className={`ws-section-spacing portfolio-section-wrap ${isDark ? "dark-theme" : "bg-gray"}`}
      id="Portfolio"
    >
      <div className="portfolio-container">
        {/* Section Title */}
        <SectionHeader
          overline="PORTFOLIO"
          title="My"
          highlight="Portfolio"
          align="center"
          theme={theme}
        />

        {/* Category Filter Tabs */}
        <div className="gallery-filter-btn">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={isActive ? "active" : ""}
                style={{ color: isDark ? "#ffffff" : "#222222" }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Gallery Grid */}
        <motion.div layout className="portfolio-gallery-grid">
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              const imgSrc = require(`../../assets/images/portfolio/${item.image}`);
              return (
                <motion.div
                  layout
                  key={item.id}
                  className="gallery-box-col"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.35,
                    delay: (index % 3) * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="gallery-box">
                    <img
                      src={imgSrc}
                      alt={item.title}
                      loading="lazy"
                      className="gallery-image"
                    />

                    {/* Hover Overlay with Title and Plus Button */}
                    <div className="overlay">
                      <div className="content-center">
                        <h3 className="gallery-title">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.title}
                          </a>
                        </h3>
                        <button
                          type="button"
                          className="zoom"
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxImage({
                              src: imgSrc,
                              title: item.title,
                              link: item.link,
                            });
                          }}
                          title={`Zoom ${item.title}`}
                          aria-label={`Zoom ${item.title}`}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* More Portfolio Button */}
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

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="portfolio-lightbox-backdrop"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="portfolio-lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="portfolio-lightbox-close"
              onClick={() => setLightboxImage(null)}
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="portfolio-lightbox-img"
            />
            <div className="portfolio-lightbox-caption">
              <h4>{lightboxImage.title}</h4>
              <a
                href={lightboxImage.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-lightbox-visit"
              >
                Visit Site ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
