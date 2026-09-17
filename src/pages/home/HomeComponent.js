import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import AboutMe from "../../containers/aboutMe/AboutMe";
import Skills from "../../containers/skills/Skills";
import EducationSection from "../../containers/education/EducationSection";
import ProcessSection from "../../containers/process/ProcessSection";
import ServicesSection from "../../containers/services/ServicesSection";
import PortfolioSection from "../../containers/portfolio/PortfolioSection";
import TechStackSection from "../../containers/techStack/TechStackSection";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";


class Home extends Component {
  componentDidMount() {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 350);
    }
  }

  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <AboutMe theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <TechStackSection theme={this.props.theme} />
        <ServicesSection theme={this.props.theme} />
        <PortfolioSection theme={this.props.theme} />
        <ProcessSection theme={this.props.theme} />
        <EducationSection theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
    

      </div>
    );
  }
}

export default Home;
