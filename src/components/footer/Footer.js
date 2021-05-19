import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className=" container footer-div">
      <Fade>
        <div
          className="footer-text left"
          style={{ color: props.theme.secondaryText }}
        >
          © 2021 BlockEye, all rights reserved
        </div>
        <div
          className="footer-text right"
          style={{ color: props.theme.secondaryText }}
        >
          <a href="#" className="spacing">
            Tab 1
          </a>
          <a href="#" className="spacing">
            Tab 2
          </a>
          <a href="#" className="spacing">
            Tab 3
          </a>
        </div>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
