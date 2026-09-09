import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;
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
                <div className="resume-btn-div">
                  <Button
                    text="Portfolio"
                    href="/home#Portfolio"
                    theme={theme}
                  />
                </div>
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
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                {/* <img
											src={require(`../../assets/images/${addressSection["avatar_image_path"]}`)}
											alt=""
										/> */}
                <AddressImg theme={theme} />
              </div>
              <div className="address-heading-text-div">
                <SectionHeader
                  overline="LOCATION"
                  title="Office"
                  highlight="Address"
                  subtitle={addressSection["subtitle"]}
                  align="left"
                  theme={theme}
                />
                {phoneSection["title"] ? (
                  <>
                    <h1
                      className="address-heading-text"
                      style={{ color: theme.text }}
                    >
                      {phoneSection["title"]}
                    </h1>
                    <p
                      className="contact-header-detail-text subTitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {phoneSection["subtitle"]}
                    </p>
                  </>
                ) : null}
                <div className="address-btn-div">
                  <Button
                    text="Visit on Google Maps"
                    newTab={true}
                    href={addressSection.location_map_link}
                    theme={theme}
                  />
                </div>
                {emailSection && (
                  <div className="contact-email-div" style={{ marginTop: "20px" }}>
                    <a
                      href={emailSection.link}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "12px 24px",
                        background: "linear-gradient(135deg, #6366F1, #8b5cf6)",
                        color: "#fff",
                        borderRadius: "10px",
                        textDecoration: "none",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: "15px",
                        boxShadow: "0 4px 14px rgba(99,102,241,0.35)",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(99,102,241,0.45)"; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(99,102,241,0.35)"; }}
                    >
                      <i className="fas fa-envelope" style={{ fontSize: "16px" }} />
                      {emailSection.subtitle}
                    </a>
                  </div>
                )}
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
