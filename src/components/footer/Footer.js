import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import image from "./Blockeye-Cropped.png";
import SocialMedia from "../socialMedia/SocialMedia";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className=" container footer-div">
      {/* <Fade> */}
      <hr className="footer-line" />
      <div
        className="footer-text left"
        style={{ color: props.theme.secondaryText }}
      >
        <div className="footer-logo">
          <img src={image} width="22%" height="10%"></img>
        </div>
        <p style={{ marginTop: "5%" }}>© 2021 BlockEye, all rights reserved</p>
      </div>
      <div
        className="footer-text right"
        style={{ color: props.theme.secondaryText }}
      >
        <SocialMedia theme={props.theme} />
        <div className="footer-nav">
          <a href="#" className="spacing">
            Home
          </a>
          <a href="#" className="spacing">
            About Us
          </a>
          <a href="#" className="spacing">
            FAQs
          </a>
          <a href="#" className="spacing">
            Contact
          </a>
        </div>
      </div>
      {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      {/* </Fade> */}
    </div>
  );
}
