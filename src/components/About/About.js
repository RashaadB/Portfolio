import React from "react";
import "./about.css";

const About = () => {
  return (
    
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <a href="Resume.pdf" download="Rashaad Bracley.pdf">
          <img  src="./img/resume_pic.png" alt="" className="a-img" />
          </a>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Languages</h1>
        <p className="a-sub">
          From static to full-stack:
          <br />

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node.Js</li>
            <li>React.JS</li>
            <li>MySQL</li>
            <li>Current learning JAVA</li>
          </ul>
          <br/>
          Learning is the Goal. <br/> && <br/> Growth is the Success.

          
         
        </p>
        
        <p className="a-desc">
          (Click on my Resume to Download)
        </p>
        {/* <div className="a-award">
          <img src="./img/me.jpeg" alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Lorem ipsum dolor sit amet.</h4>
           
            
            
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
