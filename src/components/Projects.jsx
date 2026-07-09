import "./Projects.css"

import { FaExternalLinkAlt, FaReact, FaCss3Alt } from "react-icons/fa"

import { SiVite } from "react-icons/si"

import aurea from "../assets/aurea.jpeg"

import trading from "../assets/trading.png"

import agency from "../assets/cbe-agency.png"

const projects = [

  {

    title: "Trading Website",

    image: trading,

    description:

      "A modern trading platform with a premium landing page and responsive design.",

    link: "https://codebyemmanuel19.github.io/trading/",

  },

  {

    title: "Agency Website",

    image: agency,

    description:

      "A clean and professional agency website built to convert visitors into clients.",

    link: "https://cbe-agency.vercel.app/",

  },

  {

    title: "Aurea Fashion",

    image: aurea,

    description:

      "A stylish fashion website designed for modern online clothing brands.",

    link: "https://codebyemmanuel19.github.io/aurea/",

  },

]

function Projects() {

  return (

    <section className="projects" id="projects">

      <h2>Featured Projects</h2>

      <p>

        Real websites I've designed and developed for modern businesses.

      </p>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-image">

              <img src={project.image} alt={project.title} />

              <div className="image-overlay">

                <a

                  href={project.link}

                  target="_blank"

                  rel="noopener noreferrer"

                >

                  Live Demo <FaExternalLinkAlt />

                </a>

              </div>

            </div>

            <div className="project-info">

              <span className="badge">Featured Project</span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">

                <span>

                  <FaReact /> React

                </span>

                <span>

                  <FaCss3Alt /> CSS

                </span>

                <span>

                  <SiVite /> Vite

                </span>

              </div>

              <a

                href={project.link}

                target="_blank"

                rel="noopener noreferrer"

                className="project-btn"

              >

                View Live Site →

              </a>

            </div>

          </div>

        ))}

      </div>

    </section>

  )

}

export default Projects