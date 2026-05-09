import React from "react";
import "./Project.css";
import spendify from "../assets/spendify.png"
import meteora from "../assets/meteora.png"

import spendifyMobile from "../assets/spendifyMobile.png"
import meteoraMobile from "../assets/meteoraMobile.png"
const Project = () => {
  return (
    <div>
      <div id="project" className="parent">

      <div className="content">
        <h2 id="sec">Featured Projects</h2>
      </div>
      <div className="project-section">
        <div id="spendify-box"  className="project-card">
        <img id="spendify-img" className="img" src={spendify} alt="" />
        <img id="spendifyMobile" className="img" src={ spendifyMobile} alt="" />
        <span>Spendify</span>
        <p> Spendify ,  a modern React.js finance management application featuring responsive dashboard architecture, interactive expense analytics, dynamic data visualization with Recharts, and centralized state management powered by Context API.
      </p>

   <div className="button-box">
        <button  className="button" id="spendify-live-btn"><a id="a" href="https://spendify-your-all-time-personal-fin.vercel.app/">View Project</a></button>
         <button className="button" id="spendify-github-btn"><a id="a" href="https://github.com/anukalp24/Spendify-your-all-time-personal-finance-tracker-">Github</a></button>
   </div> {/* buttons box */}
   
          </div>  {/* spendify-box div */}
        <div id="meteora-box" className="project-card">
          <img className="img" id="meteora-img" src={meteora} alt="" />
          <img id="meteoraMobile" className="img" src={meteoraMobile} alt="" />
          <span>Meteora</span>
         
          <p>Meteora , a modern React.js weather application featuring dynamic weather-based UI themes, real-time forecasts, interactive hourly charts, responsive frontend architecture, and searchable weather history powered by REST APIs, Context API, and React Router DOM.</p>
          <div className="button-box">
<button  className="button"  id="meteora-live-btn"><a id="a" href="https://meteora-gamma.vercel.app">View Project</a></button>
<button  className="button" id="meteora-github-btn"><a id="a" href="https://github.com/anukalp24/Meteora">Github</a></button>
          </div>
        </div>
         
      </div>
      {/* project sec div */}
      </div>
    </div> // default div
  );
};

export default Project;
