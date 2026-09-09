import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import EducationSection from "../../containers/education/EducationSection";
import "./EducationComponent.css";

class Education extends Component {
  render() {
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <EducationSection theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
