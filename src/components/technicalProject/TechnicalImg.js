import React, { Component } from "react";

export default class TechnicalImg extends Component {
  render() {
    return (
      <img
        src={this.props.image}
        style={{ maxWidth: "90%", marginTop: "auto", flexGrow: "1" }}
      ></img>
    );
  }
}
