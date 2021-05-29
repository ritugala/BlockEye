import React, { Component } from "react";
import image from "./humanoid-min.jpg";

export default class HumanoidImg extends Component {
  render() {
    //const theme = this.props.theme;
    //This styling is to center image in the div
    return (
      <img
        src={image}
        style={{
          maxWidth: "50%",
          marginTop: "auto",
          marginLeft: "10%",
        }}
      ></img>
    );
  }
}
