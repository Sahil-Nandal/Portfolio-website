import React from "react";
import './ProjectCard2.css'
const ProjectCard2 = props => {

    const exploreBtn = () =>{
        window.open(props.projectLink, "_blank");
    }

    return <div className="container2">
        <h3 className="project2">{props.projectName}</h3>
        <button onClick={exploreBtn} className="explore-btn2">Explore</button>
    </div>
}

export default ProjectCard2;