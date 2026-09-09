import React from "react";
import "./ServicesSection.css";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { motion } from "framer-motion";

const SERVICES_DATA = [
  {
    id: "saas-application",
    title: "Develop Web Base Saas Application",
    iconClass: "fa-solid fa-desktop",
    color: "#3498db",
  },
  {
    id: "wordpress-development",
    title: "WordPress Themes & Plugin Development",
    iconClass: "fa-brands fa-wordpress",
    color: "#3498db",
  },
  {
    id: "ecommerce-solution",
    title: "eCommerce Shopping Solution.",
    iconClass: "fa-solid fa-cart-shopping",
    color: "#3498db",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing,SEO,SMO.",
    iconClass: "fa-solid fa-bullhorn",
    color: "#3498db",
  },
];

export default function ServicesSection({ theme }) {
  const isDark = theme && theme.name === "dark";

  return (
    <section className="services-section-wrap" id="services">
      <div className="services-container">
        {/* Section Header */}
        <SectionHeader
          overline="SERVICES"
          title="What I"
          highlight="Offer"
          subtitle="Specialized web, WordPress, eCommerce, and digital marketing services."
          align="center"
          theme={theme}
        />

        {/* Services Cards Grid - 4 Columns */}
        <div className="services-grid-4">
          {SERVICES_DATA.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                className="service-box-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                style={{
                  backgroundColor: isDark ? "#1e293b" : "#ffffff",
                  color: theme ? theme.text : "#222222",
                  boxShadow: isDark
                    ? "0 8px 24px -4px rgba(0, 0, 0, 0.4)"
                    : "0 0 16px 0px rgba(0, 0, 0, 0.08)",
                  border: isDark
                    ? "1px solid rgba(255, 255, 255, 0.08)"
                    : "1px solid rgba(0, 0, 0, 0.05)",
                }}
              >
                <div className="service-box-icon" style={{ color: service.color }}>
                  <i className={service.iconClass}></i>
                </div>
                <h3
                  className="service-box-title"
                  style={{ color: theme ? theme.text : "#222222" }}
                >
                  {service.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
