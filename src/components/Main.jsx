import React from "react";
import "./Main.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiVercel,
  SiRender,
  SiPostman,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

const Main = () => {
  return (
    <div>
      <div id="main" className="main">

        {/* ================= TECH STACK ================= */}

        <div className="intro">
          <h1 id="tech-stack">Tech Stack</h1>
        </div>


        <div className="components-parent">

          {/* HTML */}
          <div className="tech-item">
            <div className="tech-icon html-circle">
              <FaHtml5 />
            </div>
            <h2>HTML5</h2>
          </div>


          {/* CSS */}
         <div className="tech-item">
  <div className="tech-icon css-circle">
    <svg viewBox="0 0 32 32">
      <path
        fill="#1572B6"
        d="M5 3h22l-2 25-9 3-9-3L5 3z"
      />

      <path
        fill="#33A9DC"
        d="M16 6v22.5l7-2.3L24.5 6H16z"
      />

      <path
        fill="#fff"
        d="M9 9h14l-.4 3H12l.3 3h10l-.8 7.5-5.5 2-5.5-2-.4-4h3l.2 1.8 2.7.8 2.7-.8.3-2.3H9.8L9 9z"
      />
    </svg>
  </div>

  <h2>CSS3</h2>
</div>


          {/* JavaScript */}
          <div className="tech-item">
            <div className="tech-icon js-circle">
              <FaJs />
            </div>
            <h2>JavaScript</h2>
          </div>


          {/* React */}
          <div className="tech-item">
            <div className="tech-icon react-circle">
              <FaReact />
            </div>
            <h2>React</h2>
          </div>


          {/* Node */}
          <div className="tech-item">
            <div className="tech-icon node-circle">
              <FaNodeJs />
            </div>
            <h2>Node.js</h2>
          </div>


          {/* Express */}
          <div className="tech-item">
            <div className="tech-icon express-circle">
              <SiExpress />
            </div>
            <h2>Express.js</h2>
          </div>


          {/* MongoDB */}
          <div className="tech-item">
            <div className="tech-icon mongo-circle">
              <SiMongodb />
            </div>
            <h2>MongoDB</h2>
          </div>


          {/* Mongoose */}
          <div className="tech-item">
            <div className="tech-icon mongoose-circle">
              <SiMongoose />
            </div>
            <h2>Mongoose</h2>
          </div>


          {/* REST API */}
          <div className="tech-item">
            <div className="tech-icon api-circle">
              <TbApi />
            </div>
            <h2>REST API</h2>
          </div>


          {/* JWT */}
          <div className="tech-item">
            <div className="tech-icon jwt-circle">
              <SiJsonwebtokens />
            </div>
            <h2>JWT</h2>
          </div>

        </div>


        {/* ================= SEPARATOR ================= */}

        <div className="seperation"></div>


        {/* ================= TOOLS ================= */}

        <div className="name">
          <h2 id="tools">Tools I use</h2>
        </div>


        <div className="tools-sec">

          {/* Git */}
          <div id="tool-card1">
            <div className="tool-icon git-icon">
              <FaGitAlt />
            </div>
            <h2>Git</h2>
          </div>


          {/* GitHub */}
          <div id="tool-card2">
            <div className="tool-icon github-icon">
              <FaGithub />
            </div>
            <h2>GitHub</h2>
          </div>


          {/* Vercel */}
          <div id="tool-card3">
            <div className="tool-icon vercel-icon">
              <SiVercel />
            </div>
            <h2>Vercel</h2>
          </div>


          {/* Render */}
          <div id="tool-card4">
            <div className="tool-icon render-icon">
              <SiRender />
            </div>
            <h2>Render</h2>
          </div>


          {/* Postman */}
          <div id="tool-card5">
            <div className="tool-icon postman-icon">
              <SiPostman />
            </div>
            <h2>Postman</h2>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Main;