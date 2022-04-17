import React from "react";
import Projects from "../Projects/Projects";
import "./projectList.css";


const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">create & inspire</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aut
          inventore sed quas obcaecati quia?
        </p>
      </div>
      <div className="pl-list">
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
      </div>
    </div>
  );
};

export default ProjectList;
