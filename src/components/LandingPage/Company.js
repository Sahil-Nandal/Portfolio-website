import React from "react";
import './Company.css'
const Company = props => {

    const name = props.name;
    const link = props.link;
    return  <div id="container">
           <a href={link} target="_blank"> {name} </a>
        </div>
    
    
}

export default Company;