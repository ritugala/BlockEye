import React, { Component } from "react";

export default class TechnicalImg extends Component {
  render() {
    //const theme = this.props.theme;
    return (
      <img
        src={this.props.image}
        //        width="498.75"
        //        height="432.37039"
        style={{ maxWidth: "90%", marginTop: "auto", flexGrow: "1" }}
      ></img>
    );
  }
}
