import React, { Component } from "react";
import Landing from "./landingPage";
import About from "./aboutMe";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";
import { Switch, Route } from "react-router-dom";

class Main extends Component {
  state = {};
  render() {
    return (
      <switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/aboutMe" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
      </switch>
    );
  }
}

export default Main;
