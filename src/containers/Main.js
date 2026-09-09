import React, { Component } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Contact from "../pages/contact/ContactComponent";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

export default class Main extends Component {
  componentDidMount() {
    document.documentElement.style.setProperty(
      "--scrollbar-color",
      this.props.theme.imageHighlight
    );
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.theme &&
      this.props.theme &&
      prevProps.theme.imageHighlight !== this.props.theme.imageHighlight
    ) {
      document.documentElement.style.setProperty(
        "--scrollbar-color",
        this.props.theme.imageHighlight
      );
    }
  }
  render() {
    return (
      <BrowserRouter basename="/">
        <ScrollToTop />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/splash"
            render={(props) => <Splash {...props} theme={this.props.theme} />}
          />
          <Route
            path="/education"
            render={(props) => (
              <Education {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={this.props.theme} />}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Splash {...props} theme={this.props.theme} />}
            />
          )}

          <Route
            path="/experience"
            render={() => <Redirect to="/home" />}
          />
          <Route
            path="/projects"
            render={() => <Redirect to="/home" />}
          />
          <Route
            path="/resume"
            render={() => <Redirect to="/home#Portfolio" />}
          />
          <Route
            path="/portfolio"
            render={() => <Redirect to="/home#Portfolio" />}
          />
          <Route
            path="/services"
            render={() => <Redirect to="/home#services" />}
          />
          <Route
            path="/about"
            render={() => <Redirect to="/home#about" />}
          />
          <Route
            path="/skills"
            render={() => <Redirect to="/home#skills" />}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
