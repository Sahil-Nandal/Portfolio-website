import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <div className="main">
      <div className="info">
        <h1>Sahil Nandal</h1>
        <p className="intro">
          Hi there! I'm a Pre-Final year student at VIT-Vellore, pursuing my B.Tech
          in Information Technology. I'm a Full-Stack Web Developer and having firm 
          grip in Technical skills and DSA, delve into the depths of my portfolio and 
          get a comprehensive understanding of my projects and abilities.

        </p>
        <div className="get-started">
            <button className="lets-start-btn">Let's get started!</button>
        </div>
      </div>

      <div className="image">
        <img id="photo" src={require("../../assets/photo3.jpg")} alt="Description of image" />
      </div>
    </div>
  );
};

export default Main;
