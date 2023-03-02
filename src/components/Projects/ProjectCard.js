import React from "react";
import './ProjectCard.css'

const ProjectCard = props => {
    
    // var imgLink = "../../assets/LinkedIn.png";

    const exploreBtn = () =>{
        window.open(props.projectLink, "_blank");
    }

    return <div className="card">
        <img className="project-img" src={require("../../assets/ascendance.png")} alt="Description" />
        <h3 className="name">{props.projectName}</h3>
        <hr className="name_underline"></hr>
        <p className="discription">{props.discription}</p>

        <button onClick={exploreBtn} className="explore-btn">Explore</button>
    </div>
}

export default ProjectCard;