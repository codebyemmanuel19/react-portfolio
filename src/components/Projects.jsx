import "./Projects.css"
import aurea from "../assets/aurea.jpeg"
import trading from "../assets/trading.png"

function Projects() {
  return (
    <section className="projects" data-aos="fade-up" id="projects">

      <h2>What I Have Built</h2>
      <p>Some examples of my work</p>

      {/* Project 1 */}
      <div className="project-card" data-aos="fade-left">

        <img src={aurea} alt="Aurea Fashion" />

        <div className="project-info">
          <h3>Aurea Fashion</h3>

          <p>
            A modern fashion website with a clean and
            responsive design.
          </p>

          <a href="https://codebyemmanuel19.github.io/aurea/">
            <button>View Project</button>
          </a>
        </div>

      </div>

      {/* Project 2 */}
      <div className="project-card" data-aos="fade-left">

        <img src={trading} alt="Trading Website" />

        <div className="project-info">
          <h3>Trading Website</h3>

          <p>
            A trading website designed with a modern
            and professional layout.
          </p>

          <a href="https://codebyemmanuel19.github.io/trading/">
            <button>View Project</button>
          </a>
        </div>

      </div>

    </section>
  )
}

export default Projects