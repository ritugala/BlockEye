import React, { Component } from "react";
import Iframe from "react-iframe";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Foundation extends Component {
  render() {
    console.log(this.props.theme);
    return (
      <div>
        <Header theme={this.props.theme} />
        {/* <iframe src="https://docs.google.com/viewerng/viewer?url=http://infolab.stanford.edu/pub/papers/google.pdf&embedded=true" frameborder="0" height="100%" width="100%">
</iframe> */}
        <Iframe
          url="https://docs.google.com/viewerng/viewer?url=http://infolab.stanford.edu/pub/papers/google.pdf&embedded=true"
          width="100%"
          height="750px"
          id=""
          className=""
          display="initial"
          position="relative"
        />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Foundation;
