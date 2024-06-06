import React, { Component } from "react";
import "./About.css";
import myimage1 from "../assets/myimage1.jpg";
import myimage2 from "../assets/myimage2.jpg";
import myimage3 from "../assets/myimage3.jpg";


export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={myimage1}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Elijah Paulman</div>
            <div className="brief_description">
              I am a Computer Science and Engineering student at the Ohio State
              University and a Software Developer intern at London Computer
              Systems for the summer of 2024. I am very passionate about tech
              accessibility and sustainability efforts.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
