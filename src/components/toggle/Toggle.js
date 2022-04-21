import React from "react";
import "./toggle.css";

const Toggle = () => {
  return (
    <div className="t">
      <img src="./img/sun.png" alt="" className="t-icon" />
      <img src="./img/moon.png" alt="" className="t-icon" />
      <div className="t-button"></div>
    </div>
  );
};

export default Toggle;
