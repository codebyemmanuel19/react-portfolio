import "./Contact.css"

function Contact() {
  return (
    <section className="contact" id="contact">

      <h1>Let's Work Together</h1>

      <p>
        Need a modern website or help growing your business online?
      </p>

      <div className="contact-info">

        <a href="mailto:emmanuelkenneth063@gmail.com">
          📧 emmanuelkenneth063@gmail.com
        </a>

        <a href="tel:+2349165374015">
          📱 +234 9165374015
        </a>

      </div>

      <div className="social-links">

        <a href="">TikTok</a>

        <a href="">Facebook</a>

        <a href="">LinkedIn</a>

        <a href="">YouTube</a>

      </div>

      <a
        href="https://wa.me/2349165374015"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn"
      >
        Contact Me
      </a>

    </section>
  )
}

export default Contact