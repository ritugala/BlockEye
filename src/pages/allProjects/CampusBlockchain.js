import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import TechnicalProject from "../../components/technicalProject/TechnicalProject";
import { CampusBlockchain_info } from "../../portfolio.js";

class CampusBlockchain extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <TechnicalProject
          theme={this.props.theme}
          header={CampusBlockchain_info.header}
          description={CampusBlockchain_info.description}
          androidAppLink={CampusBlockchain_info.androidAppLink}
          explorerLink={CampusBlockchain_info.explorerLink}
          androidApp={CampusBlockchain_info.androidApp}
        />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default CampusBlockchain;
