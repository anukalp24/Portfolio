import React from "react";
import "./Project.css";

import havenly from "../assets/havenly.png";
import meteora from "../assets/meteora-final.png";

const Project = () => {
  return (
    <section id="project" className="projects">

      <div className="projects-heading">
      
        <h2>Featured Projects</h2>
      </div>


      <div className="project-section">

        {/* ================= HAVENLY ================= */}

        <article className="project-card">

          <div className="project-image-wrapper">
            <img
              className="project-image"
              src={havenly}
              alt="Havenly project"
            />
          </div>


          <div className="project-content">

          

            <h3>Havenly</h3>

            <p>
           A full-stack MERN stay-booking platform featuring robust JWT authentication, payment integration, property management, search and filtering, wishlist functionality, and REST API integration.
            </p>


            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Mongoose</span>
              <span>JWT</span>
            </div>


            <div className="project-buttons">

              <a
                href="https://havenlyy.vercel.app/"
                className="project-btn primary"
                target="_blank"
                rel="noreferrer"
              >
                View Project ↗
              </a>

              <a
                href="https://github.com/anukalp24/Havenly"
                className="project-btn secondary"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

            </div>

          </div>

        </article>


        {/* ================= METEORA ================= */}

        <article className="project-card">

          <div className="project-image-wrapper">
            <img
              className="project-image"
              src={meteora}
              alt="Meteora project"
            />
          </div>


          <div className="project-content">


            <h3>Meteora</h3>

            <p>
              A modern React weather application featuring real-time
              weather data, 5-day forecasts, 24-hour hourly forecasts,
              dynamic weather-based UI themes, searchable weather
              history, and responsive architecture.
            </p>


            <div className="project-tech">
              <span>React</span>
              <span>REST APIs</span>
              <span>Context API</span>
              <span>React Router</span>
              <span>CSS3</span>
            </div>


            <div className="project-buttons">

              <a
                href="https://meteora-gamma.vercel.app"
                className="project-btn primary"
                target="_blank"
                rel="noreferrer"
              >
                View Project ↗
              </a>

              <a
                href="https://github.com/anukalp24/Meteora"
                className="project-btn secondary"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

            </div>

          </div>

        </article>

      </div>

    </section>
  );
};

export default Project;