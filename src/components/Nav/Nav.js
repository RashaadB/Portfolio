import React from "react";
import "./nav.css";



function Nav() {

   
  return (
    <nav className="nav">
        <ul><a href="#intro">HOME</a> </ul>
     <ul><a href="#about">RESUME</a> </ul>
     <ul><a href="#projects">PROJECTS</a> </ul>
      <ul><a href="#contact">CONTACT</a> </ul>
      
      
    </nav>
  );
}

export default Nav;
