import React from "react";
import Lottie from "lottie-react";
import computer from "../assets/ProgrammingComputer.json";

import "./Navbar.css";

const Navbar = () => {
  const scrollintoHome = () => {
    document.getElementById("parent-nav").scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollintoKnowledge = () => {
    document.getElementById("main").scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollintoProject = () => {
    document.getElementById("project").scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollintoContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav id="parent-nav">

      {/* ================= NAVIGATION ================= */}

      <div className="parent-box">

        <div className="nav">

          {/* Home */}

          <svg
            onClick={scrollintoHome}
            id="home"
            className="icon"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 20H7C5.89543 20 5 19.1046 5 18V10.9199C5 10.336 5.25513 9.78132 5.69842 9.40136L10.6984 5.11564C11.4474 4.47366 12.5526 4.47366 13.3016 5.11564L18.3016 9.40136C18.7449 9.78132 19 10.336 19 10.9199V18C19 19.1046 18.1046 20 17 20H15M9 20V14C9 13.4477 9.44772 13 10 13H14C14.5523 13 15 13.4477 15 14V20M9 20H15"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>


          {/* Skills */}

          <svg
            id="bulb"
            onClick={scrollintoKnowledge}
            className="icon"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 18H15"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <path
              d="M10 21H14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <path
              d="M8.5 15.5C7.56 14.57 7 13.28 7 11.85C7 9.17 9.24 7 12 7C14.76 7 17 9.17 17 11.85C17 13.28 16.44 14.57 15.5 15.5C15.08 15.91 14.85 16.44 14.85 17H9.15C9.15 16.44 8.92 15.91 8.5 15.5Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M12 3V4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <path
              d="M4.93 4.93L5.64 5.64"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <path
              d="M19.07 4.93L18.36 5.64"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>


          {/* Projects */}

          <svg
            onClick={scrollintoProject}
            id="projects"
            className="icon"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />

            <path
              d="M7 14L9.29289 11.7071C9.68342 11.3166 10.3166 11.3166 10.7071 11.7071L12.2929 13.2929C12.6834 13.6834 13.3166 13.6834 13.7071 13.2929L17 10M17 10V12.5M17 10H14.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>


          {/* Contact */}

          <svg
            id="phone"
            onClick={scrollintoContact}
            className="icon"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6.5 3.5L9 3L11 8L8.5 9.5C9.6 11.9 11.1 13.8 14.5 15.5L16 13L21 15V17.5C21 19.2 19.7 20.5 18 20.5C10 19.8 4.2 14 3.5 6C3.5 4.6 4.7 3.5 6.5 3.5Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

        </div>
      </div>


      {/* ================= HERO ================= */}

      <div className="intro-section">

        <div className="content-parent">

          <span id="name">
            Hi, I'm Anukalp
          </span>


          <span id="title-info">
            MERN Stack Developer
          </span>


          <p id="info">
            MERN Stack Developer experienced in building responsive
            full-stack applications using React, Node.js, Express.js,
            and MongoDB. Focused on writing clean code and creating
            scalable, user-focused web experiences.
          </p>


          {/* ================= BUTTONS ================= */}

          <div className="hero-buttons">

            {/* View My Work */}

            <button
              className="hero-btn primary-btn"
              onClick={scrollintoProject}
            >
              View My Work
            </button>


            {/* GitHub */}

            <div className="github">

              <a
                id="github-a"
                href="https://github.com/anukalp24"
                target="_blank"
                rel="noreferrer"
              >

                <svg
                  id="github-logo"
                  viewBox="84 7399 20 20"
                  fill="currentColor"
                >
                  <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7415.37 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399Z" />
                </svg>

                Github

              </a>

            </div>

          </div>


          {/* ================= SOCIAL LINKS ================= */}

          <div className="social-links">

            <div className="links-except-github">


              {/* Instagram */}

              <a
                href="https://www.instagram.com/agarwal.anukalp/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  id="insta"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </a>


              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/anukalp-agarwal-2668b3376/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  id="linkedin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <circle
                    cx="8"
                    cy="8"
                    r="1.2"
                    fill="currentColor"
                  />

                  <path
                    d="M7 11V17"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M11 17V11M11 14C11 12.3 12 11 13.5 11C15 11 16 12.3 16 14V17"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </a>


              {/* X / Twitter */}

              <a
                href="https://x.com/AgarwalAnukalp"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  id="twitter"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26L22.83 21.75h-6.557
                    l-5.13-6.71-5.87 6.71H1.963l7.73-8.835L1.5 2.25h6.723
                    l4.637 6.13 5.384-6.13Zm-1.161 17.52h1.833L7.084 4.126H5.117
                    L17.083 19.77Z"
                  />
                </svg>
              </a>

            </div>

          </div>

        </div>


        {/* ================= LOTTIE ================= */}

        <div className="animation-sec">

          <Lottie
            animationData={computer}
            loop={true}
          />

        </div>

      </div>

    </nav>
  );
};

export default Navbar;