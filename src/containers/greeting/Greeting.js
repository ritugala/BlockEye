import React from "react";
import "./Greeting.css";
import "../../components/header/Header.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import Logo from "../../components/header/Logo";
import FirstImage from "./FirstImage";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    // <Fade bottom duration={2000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div style={{ whiteSpace: "nowrap" }}>
            <div className="row">
              <Logo />
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
            </div>

            <p
              className="greeting-text-p subTitle"
              style={{
                color: theme.secondaryText,
                fontSize: "1.5em",
                display: "flex",
                marginTop: "-10px",
              }}
            >
              {greeting.subTitle}
            </p>
            <SocialMedia theme={theme} />

            {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
          </div>
        </div>
        <div className="greeting-image-div">
          <FirstImage />
        </div>
      </div>
    </div>
    // </Fade>
  );
}
