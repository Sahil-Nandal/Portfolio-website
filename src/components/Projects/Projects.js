import React from "react";
import './Projects.css';
import ProjectCard from "./ProjectCard";
import ProjectCard2 from "./ProjectCard2";
const Projects = () => {
    
    var imgLink1z = "../../assets/LinkedIn.png";
    var projectName1z = "Ascendance";
    var discription1z = "This is the first website I made for a startup with responsive feature to view in different aspect ratios.";
    var projectLink1z = "https://shivankar27-b.github.io/Finale_Ascendance/";

    var imgLink2z = "../../assets/LinkedIn.png";
    var projectName2z = "Expenses' Record";
    var discription2z = "A react based app which displays the relative expenses of every month of different years.";
    var projectLink2z = "https://react-u1vecr.stackblitz.io/";

    var imgLink2 = "../../assets/LinkedIn.png";
    var projectName2 = "OnlyDrops";
    var discription2 = "This is the landing page of the startup OnlyDrops made using pure HTML and CSS.";
    var projectLink2 = "https://sahil-nandal.github.io/OnlyDrops-VNV/";

    var imgLink3 = "../../assets/LinkedIn.png";
    var projectName3 = "Book-Freaks";
    var discription3 = "The front-end of a project made for the people who loves to read books and to share reviews.";
    var projectLink3 = "https://sahil-nandal.github.io/Book-freaks-website/";
    
    var projectName4 = "Renewable Future";
    var projectLink4 = "https://sahil-nandal.github.io/OnlyDrops-Dashboard/";

    var projectName5 = "OnlyDrops Dashboard";
    var projectLink5 = "https://sahil-nandal.github.io/OnlyDrops-Dashboard/";

    var projectName6 = "CSS Project";
    var projectLink6 = "https://sahil-nandal.github.io/Front_end/";
    
    var projectName7 = "To-Do List";
    var projectLink7 = "https://react-jx7dxh.stackblitz.io/";


    return <div className="projects">
        <h2 className="heading">Projects</h2>
        <div className="container">
            <ProjectCard imgLink={imgLink1z} projectLink={projectLink1z} projectName={projectName1z} discription={discription1z} />
            <ProjectCard imgLink={imgLink2z} projectLink={projectLink2z} projectName={projectName2z} discription={discription2z}/>
            <ProjectCard imgLink={imgLink3} projectLink={projectLink3} projectName={projectName3} discription={discription3}/>
        </div>
        <h3 className="heading2">Some more:</h3>
        <div className="container">
            <ProjectCard2 imgLink={imgLink2} projectLink={projectLink2} projectName={projectName2} discription={discription2} />
            <ProjectCard2 imgLink={imgLink3} projectLink={projectLink3} projectName={projectName3} discription={discription3} />
            <ProjectCard2 projectLink={projectLink7} projectName={projectName7} />
            <ProjectCard2 projectLink={projectLink4} projectName={projectName4} />
        </div>
        <div className="container">
            <ProjectCard2 projectLink={projectLink5} projectName={projectName5} />
            <ProjectCard2 projectLink={projectLink6} projectName={projectName6} />
        </div>

        <hr className="part"></hr>
    </div>
}

export default Projects;