import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="./img/code.background.jpg" alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, magni.
        </p>
        <div className="a-award">
           <img src="./img/me.jpeg" alt="" className="a-award-img" /> 
           <div className="a-award-texts">
               <h4 className="a-award-title">Lorem ipsum dolor sit amet.</h4>
               <p className="a-ward-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, tenetur.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
