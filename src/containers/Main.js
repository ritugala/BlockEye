import React, { Component } from "react";
import { Route, Switch, HashRouter, BrowserRouter } from "react-router-dom";
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
          <BrowserRouter basename="/">
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => (
                  <Splash {...props} theme={this.props.theme} />
                )}
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
                path="/agrichain"
                render={(props) => (
                  <Agrichain {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/campusblockchain"
                render={(props) => (
                  <CampusBlockchain {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/projects"
                path="/cointracker"
                render={(props) => (
                  <CoinTracker {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/faqs"
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
            </Switch>
          </BrowserRouter>
        </div>
      );
    } else {
      return (
        <div>
          <BrowserRouter basename="/">
            <Switch>
              <Route
                path={process.env.PUBLIC_URL + "/"}
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
                path="/agrichain"
                render={(props) => (
                  <Agrichain {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/campusblockchain"
                render={(props) => (
                  <CampusBlockchain {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/contact"
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
              <Route
                path="/cointracker"
                render={(props) => (
                  <CoinTracker {...props} theme={this.props.theme} />
                )}
              />
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
  }
}
