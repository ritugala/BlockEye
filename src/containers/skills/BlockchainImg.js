import React, { Component } from "react";
import image from "./blockchain.jpg";
export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={image} width="698.75" height="432.37039"></img>;
  }
}
