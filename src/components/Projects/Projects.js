import React from "react";
import "./projects.css";

const Projects = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img"  />
      </a>
      <button className="github-button">Github</button>
      <button className="github-button">Website</button>
    </div>
    
  );
};

export default Projects;
