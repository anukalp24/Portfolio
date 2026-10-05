import React from "react";
import "./Main.css";

import {
  FaPython,
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
  SiLangchain,
  SiFastapi,
} from "react-icons/si";

import {
  TbApi,
  TbTopologyStar3,
  TbDatabase,
} from "react-icons/tb";


const Main = () => {
  return (
    <div>
      <div id="main" className="main">

        {/* ================= TECH STACK ================= */}

        <div className="intro">
          <h1 id="tech-stack">Tech Stack</h1>
        </div>


        <div className="components-parent">

          {/* ================= FRONTEND ================= */}

          {/* React */}
          <div className="tech-item">
            <div className="tech-icon react-circle">
              <FaReact />
            </div>
            <h2>React</h2>
          </div>


          {/* ================= BACKEND ================= */}

          {/* Node.js */}
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


          {/* Python */}
          <div className="tech-item">
            <div className="tech-icon python-circle">
              <FaPython />
            </div>
            <h2>Python</h2>
          </div>


          {/* FastAPI */}
          <div className="tech-item">
            <div className="tech-icon fastapi-circle">
              <SiFastapi />
            </div>
            <h2>FastAPI</h2>
          </div>


          {/* ================= AI / GENAI ================= */}

         <div className="tech-item">
  <div className="tech-icon rag-circle">
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="24"
        r="17"
        stroke="currentColor"
        strokeWidth="3"
      />

      <circle
        cx="24"
        cy="24"
        r="7"
        stroke="currentColor"
        strokeWidth="3"
      />

      <circle
        cx="24"
        cy="7"
        r="3"
        fill="currentColor"
      />

      <circle
        cx="9"
        cy="32"
        r="3"
        fill="currentColor"
      />

      <circle
        cx="39"
        cy="32"
        r="3"
        fill="currentColor"
      />

      <text
        x="24"
        y="27"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        fill="currentColor"
        fontFamily="Arial, sans-serif"
      >
        R
      </text>
    </svg>
  </div>

  <h2>RAG</h2>
</div>

          {/* LangChain */}
          <div className="tech-item">
            <div className="tech-icon langchain-circle">
              <SiLangchain />
            </div>
            <h2>LangChain</h2>
          </div>


          {/* LangGraph */}
          <div className="tech-item">
            <div className="tech-icon langgraph-circle">
              <TbTopologyStar3 />
            </div>
            <h2>LangGraph</h2>
          </div>


          {/* ChromaDB */}
          <div className="tech-item">
            <div className="tech-icon chroma-circle">
              <TbDatabase />
            </div>
            <h2>ChromaDB</h2>
          </div>


          {/* ================= APIs / AUTH ================= */}

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