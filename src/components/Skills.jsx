import "./Skills.css"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa"

function Skill() {
  return (
    <section className="skill" id="skill">
      <h1 data-aos="fade-up">My Tech Skills</h1>

      <div className="skills-container">

        <div className="skill-card" data-aos="zoom-in">
          <FaHtml5 size={60} color="#E34F26" />
          <p>HTML5</p>
        </div>

        <div className="skill-card" data-aos="zoom-in">
          <FaCss3Alt size={60} color="#1572B6" />
          <p>CSS3</p>
        </div>

        <div className="skill-card" data-aos="zoom-in">
          <FaJs size={60} color="#F7DF1E" />
          <p>JavaScript</p>
        </div>

        <div className="skill-card" data-aos="zoom-in">
          <FaReact size={60} color="#61DAFB" />
          <p>React</p>
        </div>

        <div className="skill-card" data-aos="zoom-in">
          <FaGitAlt size={60} color="#F05032" />
          <p>Git</p>
        </div>

        <div className="skill-card" data-aos="zoom-in">
          <FaGithub size={60} color="#181717" />
          <p>GitHub</p>
        </div>

      </div>
    </section>
  )
}

export default Skill