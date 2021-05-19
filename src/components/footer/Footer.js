import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import image from "./Blockeye logo.png";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className=" container footer-div">
      <Fade>
        <div
          className="footer-text left"
          style={{ color: props.theme.secondaryText }}
        >
          <div className="row">
            <img src={image} width="20%" height="25%"></img>
          </div>
          <div className="row">© 2021 BlockEye, all rights reserved</div>
        </div>
        <div
          className="footer-text right"
          style={{ color: props.theme.secondaryText }}
        >
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
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
