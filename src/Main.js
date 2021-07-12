import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import Home from "./Home";
import Play from "./Play";
import ScoreTracking from "./ScoreTracking";
import Navbar from "./Navbar"
import { HashRouter, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Navbar/>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/Play" component={Play} />
            <Route path="/Scoretracking" component={ScoreTracking} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;
