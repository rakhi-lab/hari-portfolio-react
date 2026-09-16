import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const emailSection = contactPageData.emailSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <SectionHeader
                  overline="GET IN TOUCH"
                  title="Contact"
                  highlight="Me"
                  subtitle={ContactData["description"]}
                  align="left"
                  theme={theme}
                />
                <SocialMedia theme={theme} />
                {/* <div className="resume-btn-div">
                  <Button
                    text="Portfolio"
                    href="/home#Portfolio"
                    theme={theme}
                  />
                </div> */}
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <SectionHeader
                  overline="ARTICLES"
                  title="Latest"
                  highlight="Blogs"
                  subtitle={blogSection["subtitle"]}
                  align="left"
                  theme={theme}
                />
                <div className="blogsite-btn-div">
                  <Button
                    text="Visit My Blogsite"
                    newTab={true}
                    href={blogSection.link}
                    theme={theme}
                  />
                </div>
              </div>
              <div className="blog-heading-img-div">
                {/* <img
											src={require(`../../assets/images/${blogSection["avatar_image_path"]}`)}
											alt=""
										/> */}
                <BlogsImg theme={theme} />
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div premium-address-section">
              <div className="premium-map-container">
                <iframe
                  src={addressSection.location_map_link}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: theme.name === "dark" ? "invert(90%) hue-rotate(180deg)" : "none" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
              <div className="address-heading-text-div premium-address-text">
                <SectionHeader
                  overline="LOCATION"
                  title="Office"
                  highlight="Address"
                  subtitle={addressSection["subtitle"]}
                  align="left"
                  theme={theme}
                />

                <div className="premium-contact-cards">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressSection.subtitle)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="premium-contact-card map-card"
                    style={{ background: theme.name === "dark" ? "#1e2125" : "#ffffff", borderColor: theme.name === "dark" ? "#2d3136" : "rgba(226, 232, 240, 0.8)" }}
                  >
                    <div className="card-icon"><i className="fas fa-map-marker-alt"></i></div>
                    <div className="card-content">
                      <h4 style={{ color: theme.text }}>Get Directions</h4>
                      <p style={{ color: theme.secondaryText }}>View on Google Maps</p>
                    </div>
                  </a>

                  {emailSection && (
                    <a
                      href={emailSection.link}
                      className="premium-contact-card email-card"
                      style={{ background: theme.name === "dark" ? "#1e2125" : "#ffffff", borderColor: theme.name === "dark" ? "#2d3136" : "rgba(226, 232, 240, 0.8)" }}
                    >
                      <div className="card-icon"><i className="fas fa-envelope"></i></div>
                      <div className="card-content">
                        <h4 style={{ color: theme.text }}>Email Us</h4>
                        <p style={{ color: theme.secondaryText }}>{emailSection.subtitle}</p>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
