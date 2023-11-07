import React from 'react'
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";

import FloatinDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="Intro" id="Intro">
    
      <div className="i-left">
        <div className="i-name">
         
            <span >Hy! I Am</span>
            <span>Swati Singh</span>
            <span>
                FullStack Developer with high level of experience in web designing
                and development, producting the Quality work
            </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <div>
            <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </div>
      </div>
      <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
    </div>
   
    
  )
}

export default Intro
