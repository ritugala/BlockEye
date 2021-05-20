import React, { Component } from "react";
import "./Logo.css";
import image from "./Blockeye logo.png";

export default class Logo extends Component {
  render() {
    //const theme = this.props.theme;
    return (
      <div className="logo">
        <img className="logo-img" src={image}></img>
      </div>
    );
  }
}
