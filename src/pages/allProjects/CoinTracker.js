import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import TechnicalProject from "../../components/technicalProject/TechnicalProject";
import { CoinTracker_info } from "../../portfolio.js";

class CoinTracker extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <TechnicalProject
          theme={this.props.theme}
          header={CoinTracker_info.header}
          description={CoinTracker_info.description}
        />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default CoinTracker;
