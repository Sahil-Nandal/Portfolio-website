import React from "react";
import './Navbar.css'
const Navbar = () => {

    return <div className="navbar">
        <div className="links">
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">Skills</a>
            <a href="#">Get In Touch</a>
            
        </div>
        <div className="images">
            <a href="https://www.linkedin.com/in/sahil-nandal/" target={"_blank"} rel="noreferrer" style={{padding: 0, marginRight: 10}}><img src={require("../../assets/LinkedIn.png")} alt="Description" /></a>
            <a href="https://github.com/Sahil-Nandal" target={"_blank"} rel="noreferrer" style={{padding: 0, marginRight: 10}}><img src={require("../../assets/github2.png")} alt="Description" /></a>
        </div>
        
    </div>
};

export default Navbar;