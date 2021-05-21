import React, { Component } from "react";
import image from "./blockchain-min.jpg";
export default class BlockchainImg extends Component {
  render() {
    //const theme = this.props.theme;
    return (
      <img
        src={image}
        width="498.75"
        height="432.37039"
        style={{ display: "block", margin: "auto" }}
      ></img>
    );
  }
}
