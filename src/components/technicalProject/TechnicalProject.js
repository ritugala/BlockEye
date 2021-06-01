import React, { Component } from "react";
import "./TechnicalProject.css";
import { technicalProjectsHeader } from "../../portfolio.js";
import TechnicalImg from "./TechnicalImg";
import agri_image from "./AgriChain.png";
import temp_image from "./temp.jpg";
import ct_image from "./CT_img.png";

function DisplayAdditionalInfo(props) {
  if (props.project === "Campus Blockchain") {
    return (
      <div style={{ display: "inline" }}>
        <a href={props.explorerLink}> View Explorer!</a> <br />
        {props.androidApp}
        <a href={props.androidAppLink}> Download the App!</a>
      </div>
    );
  }
  return null;
}

function GetImage(props) {
  if (props.project === "Agrichain") {
    return <TechnicalImg image={agri_image} />;
  } else if (props.project === "CoinTracker") {
    return <TechnicalImg image={ct_image} />;
  }
  return <TechnicalImg image={temp_image} />;
}

class TechnicalProject extends Component {
  render() {
    return (
      <div className="projects-main">
        <div className="basic-projects">
          <div className="projects-heading-div">
            <div className="projects-heading-text-div-new">
              <h1 className="projects-heading-text-new">{this.props.header}</h1>
              <div className="projects-header-detail-text subTitle">
                <div class="img-div">
                  <GetImage project={this.props.header} />
                </div>
                <div class="description">
                  {/* <ul>
                    {this.props.description.map(function(line){
                      return <li aria-hidden="true" >{line}</li>;
                    })}
                  </ul> */}
                  {this.props.description}
                  <DisplayAdditionalInfo
                    project={this.props.header}
                    explorerLink={this.props.explorerLink}
                    androidApp={this.props.androidApp}
                    androidAppLink={this.props.androidAppLink}
                  />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TechnicalProject;
