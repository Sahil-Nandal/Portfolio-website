import React from "react";
import Company from "./Company";
import './Work.css'
const Work = () => {
    return <div className="work">
        <div className="worked">
            Worked at:
        </div>
        <div className="list">
            <Company name="Prodo" link="https://www.linkedin.com/company/prodoglobal/" />
            <Company name="Ascendance" link="https://www.linkedin.com/company/ascendance-st/" />
            <Company name="OnlyDrops" link="https://www.linkedin.com/company/onlydrops/" />
        </div>
    </div>
}

export default Work