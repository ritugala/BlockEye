import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Projects from "../pages/projects/Projects";
import Splash from "../pages/splash/Splash";
import Agrichain from "../pages/allProjects/Agrichain";
import CampusBlockchain from "../pages/allProjects/CampusBlockchain";
import CoinTracker from "../pages/allProjects/CoinTracker";
import { settings } from "../portfolio.js";

export default class Main extends Component {
  render() {
    const theme = this.props.theme;
    console.log(theme);
    if (settings.isSplash) {
      return (
        <div>
          <HashRouter basename="/">
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
                path="/projects"
                render={(props) => (
                  <Projects {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/cointracker"
                render={(props) => (
                  <CoinTracker {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/campusblockchain"
                render={(props) => (
                  <CampusBlockchain {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/agrichain"
                render={(props) => (
                  <Agrichain {...props} theme={this.props.theme} />
                )}
              />
            </Switch>
          </HashRouter>
        </div>
      );
    } else {
      return (
        <div>
          <HashRouter basename="/">
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
                path="/projects"
                render={(props) => (
                  <Projects {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/cointracker"
                render={(props) => (
                  <CoinTracker {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/campusblockchain"
                render={(props) => (
                  <CampusBlockchain {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/agrichain"
                render={(props) => (
                  <Agrichain {...props} theme={this.props.theme} />
                )}
              />
            </Switch>
          </HashRouter>
        </div>
      );
    }
  }
}
