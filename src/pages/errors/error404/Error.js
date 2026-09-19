import React, { Component } from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import TopButton from "../../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./Error.css";
import { Link } from "react-router-dom";

export default class Error extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className="error-main">
        <Header theme={theme} />
        <div className="error-class">
          <Fade bottom duration={2000} distance="40px">
            <h1>Woops</h1>
            <h1 className="error-404">404</h1>
            <p>The requested page is unavailable at the moment!</p>
            <Link
              className="main-button"
              to="/home"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>Go Home</span>
            </Link>
          </Fade>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}
