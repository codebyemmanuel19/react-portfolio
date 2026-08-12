import "./About.css"
import Me from "../assets/codebyemma.jpeg"

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
            I'm Emmanuel a React developer and digital marketer
            helping businesses build fast, modern websites that
            actually bring in customers.

            <br /><br />

            I focus on clean, responsive, user-friendly builds,
            backed by digital marketing know-how, so your site
            doesn't just look good it gets seen.

            <br /><br />

            Based in Port Harcourt, Nigeria, working with clients
            across Africa and the UK. Always learning, always
            shipping.
          </p>

          <div className="about-buttons">
            <a
              href="https://wa.me/2349027090880"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Contact Me
            </a>

            <a
              href="#projects"
              className="secondary-btn"
            >
              See My Work
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About