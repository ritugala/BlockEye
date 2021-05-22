import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import BlockchainImg from "./BlockchainImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import HumanoidImg from "./HumanoidImg";

function GetSkillSvg(props) {
  if (props.fileName === "BlockchainImg")
    return <BlockchainImg theme={props.theme} />;
  else if (props.fileName === "HumanoidImg")
    return <HumanoidImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              {/* <Fade left duration={2000}> */}
              <div className="skills-image-div">
                {/* <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assests/images/${skill.imagePath}`)}
                  ></img> */}
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>
              {/* </Fade> */}

              <div className="skills-text-div">
                {/* <Fade right duration={1000}></Fade>
                <Fade right duration={1500}> */}
                <SoftwareSkill logos={skill.softwareSkills} />
                {/* </Fade>
                <Fade right duration={2000}> */}
                <div>
                  {skill.skills.map((skillSentence) => {
                    return (
                      <p
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
                {/* </Fade> */}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
