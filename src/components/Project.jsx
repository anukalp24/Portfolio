import React from "react";
import "./Project.css";

import havenly from "../assets/havenly.png";
import askmypdf from "../assets/askmypdf.png";

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
              A full-stack MERN stay-booking platform featuring robust JWT
              authentication, payment integration, property management,
              search and filtering, wishlist functionality, and REST API
              integration.
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


        {/* ================= ASKMYPDF ================= */}

        <article className="project-card">

          <div className="project-image-wrapper">
            <img
              className="project-image"
              src={askmypdf}
              alt="AskMyPDF project"
            />
          </div>

          <div className="project-content">

            <h3>AskMyPDF</h3>

<p>
  A full-stack RAG application for intelligent PDF question answering.
  Built with FastAPI and React, featuring semantic retrieval,
  HuggingFace embeddings, ChromaDB, cross-encoder reranking, and
  Groq LLMs for context-grounded responses.
</p>

<div className="project-tech">
  <span>React</span>
  <span>Python</span>
  <span>FastAPI</span>
  <span>RAG</span>
  <span>LangChain</span>
  <span>ChromaDB</span>
  <span>Groq</span>
</div>

            <div className="project-buttons">

             

              <a
                href="YOUR_ASKMYPDF_GITHUB_LINK"
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