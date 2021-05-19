import React, { Component } from "react";
import image from "./Blockeye logo.png";

export default class Logo extends Component {
  render() {
    //const theme = this.props.theme;
    return <img src={image} width="35%"></img>;
  }
}
