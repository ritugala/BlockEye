import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import TechnicalProject from "../../components/technicalProject/TechnicalProject";
import { Agrichain_info } from "../../portfolio.js";

class Agrichain extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <TechnicalProject
          theme={this.props.theme}
          header={Agrichain_info.header}
          description={Agrichain_info.description}
        />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Agrichain;
