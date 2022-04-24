import React from "react";
import Projects from "../Projects/Projects";
import "./projectList.css";
import { projects } from "../../data";


const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
        <p className="pl-desc">
         Static to Full-Stack, Evolution. 
        </p>
        
        {/* <img className="git" src="./img/git_icon.png" alt="" /> */}

        <a  href="https://github.com/RashaadB" target="_blank"><button>Github</button></a>
        
        
      </div>
      <div className="pl-list">
        {projects.map(item=>(

      <Projects key={item.id} name={item.name} img={item.img} link={item.link} />
      
        ))}
        
      </div>
     
    </div>
  );
};

export default ProjectList;
