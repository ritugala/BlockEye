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
import { skills } from "../../portfolio";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { ResizeObserver } from "resize-observer";

function changeFontSize() {
  var greeting_logo = document.getElementsByClassName("greeting-logo-title")[0];
  var p_size = document.getElementsByClassName("greeting-logo-title")[0]
    .offsetWidth;
  document.getElementsByClassName("greeting-text-p")[0].style.fontSize =
    (p_size * 1.0) / 500 + "em";
  document.getElementsByClassName("dev-icons")[0].style.fontSize =
    (p_size * 2.1) / 500 + "em";
}

document.addEventListener("DOMContentLoaded", () => {
  var greeting_logo = document.getElementsByClassName("greeting-logo-title")[0];
  if (greeting_logo && greeting_logo.offsetWidth != 0)
    new ResizeObserver(changeFontSize).observe(greeting_logo);
});

export default function Greeting(props) {
  const theme = props.theme;

  return (
    // <Fade bottom duration={2000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <div className="greeting-logo-title">
              <Logo />
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
            </div>

            <p className="greeting-text-p subTitle" onLoad>
              {greeting.subTitle}
            </p>

            {skills.data.map((skill) => {
              return <SoftwareSkill logos={skill.softwareSkills} />;
            })}
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
