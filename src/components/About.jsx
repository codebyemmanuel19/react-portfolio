import "./About.css"
import Me from "../assets/Me.jpeg"

function About() {
  return (
    <section className="about" id="about">

      <h1 data-aos="zoom-in">
        Meet CodeByEmmanuel
      </h1>

      <div className="about-content">

        <div
          className="about-image"
          data-aos="fade-right"
        >
          <img src={Me} alt="CodeByEmmanuel" />
        </div>

        <div
          className="about-text"
          data-aos="fade-left"
        >
          <p>
            I'm Emmanuel, a React Developer and Digital Marketer
            passionate about building modern websites and helping
            businesses grow online.

            <br /><br />

            I started my coding journey in 2024 and have since focused
            on creating clean, responsive, and user-friendly web
            experiences.

            <br /><br />

            Originally from Bayelsa and currently based in Lagos,
            Nigeria, I'm constantly learning, building projects, and
            improving my skills to deliver real value through
            technology.
          </p>

          <a
          href="https://wa.me/2349165374015"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
          >
         Contact Me
         </a>
        </div>

      </div>
    </section>
  )
}

export default About