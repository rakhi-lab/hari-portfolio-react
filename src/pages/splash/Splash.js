import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import LogoLoader from "../../components/Loader/LoaderLogo";

function AnimatedSplash(props) {
  const theme = props.theme || { body: "#EDF9FE", splashBg: "#001C55" };
  const bgColor = theme.splashBg || "#001C55";

  return (
    <div className="splash-screen" style={{ backgroundColor: bgColor }}>
      <LogoLoader theme={theme} />
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export { AnimatedSplash };
export default Splash;
