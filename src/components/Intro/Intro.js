import React from "react";
import "./intro.css";


const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is </h2>
          <h1 className="i-name">Rashaad Bracley</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Junior Software Engineer</div>
              <div className="i-title-item">JavaScript</div>
              <div className="i-title-item">React.js</div>
              <div className="i-title-item">Node.js</div>
              <div className="i-title-item">Node.js</div>
             
            </div>
          </div>
          <p className="i-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src="./img/me.jpeg" alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
