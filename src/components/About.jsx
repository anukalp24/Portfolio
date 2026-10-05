import React from "react";
import "./About.css";

import {
  TbBrain,
  TbNetwork,
  TbDatabase,
  TbCpu,
} from "react-icons/tb";

const Building = () => {
  return (
    <section className="exploring-section">

      <div className="exploring-heading">
        <h1>WHAT I'M BUILDING</h1>

        <p>
          I'm currently developing AI-powered applications by building
          AI agents with LangGraph, MCP, LLMs, and multi-agent architectures.
        </p>
      </div>

      <div className="exploring-grid">

        {/* AI Agents */}
        <div className="exploring-card">
          <div className="exploring-icon agentic-icon">
            <TbBrain />
          </div>

          <div>
            <h2>AI Agents</h2>
            <p>
              Creating AI agents that can reason, use tools, and handle
              multi-step tasks.
            </p>
          </div>
        </div>


        {/* RAG Systems */}
        <div className="exploring-card">
          <div className="exploring-icon rag-icon">
            <TbDatabase />
          </div>

          <div>
            <h2>RAG Systems</h2>
            <p>
             Building RAG pipelines that retrieve relevant context to generate accurate, knowledge-grounded responses.
            </p>
          </div>
        </div>


        {/* Multi-Agent Systems */}
        <div className="exploring-card">
          <div className="exploring-icon multi-agent-icon">
            <TbNetwork />
          </div>

          <div>
            <h2>Multi-Agent Systems</h2>
            <p>
              Building systems where specialized AI agents collaborate
              to solve complex tasks.
            </p>
          </div>
        </div>


        {/* AI Applications */}
        <div className="exploring-card">
          <div className="exploring-icon systems-icon">
            <TbCpu />
          </div>

          <div>
            <h2>AI Applications</h2>
            <p>
              Combining AI agents, LLMs, APIs, and RAG into practical
              applications.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Building;