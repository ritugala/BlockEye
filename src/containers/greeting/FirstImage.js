import React, { Component } from "react";
import image from "./ai-bct-2-min.png";

export default class FirstImage extends Component {
  render() {
    //const theme = this.props.theme;
    return (
      <img
        src={image}
        style={{
          display: "block",
          margin: "auto",
          width: "50%",
        }}
      ></img>
    );
  }
}
