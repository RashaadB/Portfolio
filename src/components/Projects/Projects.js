import React from "react";
import Contact from "../Contact/Contact";
import "./projects.css";

const Projects = ({img,link,name}) => {
  return (
    
    <div className="p">
     <div className="n">{name}</div>
      <div className="p-browser">    
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>  
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img"  />
      </a>
      <a href="https://github.com/RashaadB" target="_blank" rel="noreferrer"><button className="github-button">Github</button></a>
      
      <a href={link} target="_blank" rel="noreferrer"><button className="github-button">Website</button></a>
     
    </div>
    
  );
};

export default Projects;
