import "./Projects.css"
import aurea from "../assets/aurea.jpeg"
import trading from "../assets/trading.png"
import agency from "../assets/cbe-agency.png" 

const projects = [
  {
    title: "Agency Website",
    image: agency,
    description: "A modern agency website built with a clean and professional layout.",
    link: "https://codebyemmanuel19.github.io/cbe-agency/"
  },
  {
    title: "Aurea Fashion",
    image: aurea,
    description: "A modern fashion website with a clean and responsive design.",
    link: "https://codebyemmanuel19.github.io/aurea/"
  },
  {
    title: "Trading Website",
    image: trading,
    description: "A trading website designed with a modern and professional layout.",
    link: "https://codebyemmanuel19.github.io/trading/"
  }
  // To add a new project, paste a new object here like this:
  // {
  //   title: "Your Project Name",
  //   image: yourImportedImage,
  //   description: "A short sentence about what it does.",
  //   link: "https://your-live-link.com"
  // }
]

function Projects() {
  return (
    <section className="projects" data-aos="fade-up" id="projects">

      <h2>What I Have Built</h2>
      <p>Some examples of my work</p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" data-aos="fade-left" key={index}>

            <img src={project.image} alt={project.title} />

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Project
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Projects