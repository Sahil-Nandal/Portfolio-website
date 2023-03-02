import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Work from "./Work";
import './LandingPage.css'
const LandingPage = () => {

    return <div className="landing-page">
        <Navbar />
        <Main />
        <Work />

        <hr className="part"></hr>
    </div>
};

export default LandingPage;