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

            <p
              className="greeting-text-p subTitle"
              style={{
                color: theme.secondaryText,
                display: "flex",
                marginTop: "-10px",
              }}
            >
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
