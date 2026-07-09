import "./Contact.css"
import { Mail, Phone } from "lucide-react"

function Contact() {
  return (
    <section className="contact" id="contact">

      <h1>Let's Work Together</h1>

      <p>
        Need a modern website or help growing your business online?
      </p>

      <div className="contact-info">

        <a href="mailto:emmanuelkenneth063@gmail.com" aria-label="Email Emmanuel">
          <Mail size={18} /> emmanuelkenneth063@gmail.com
        </a>

        <a href="tel:+2349165374015" aria-label="Call Emmanuel">
          <Phone size={18} /> +234 9165374015
        </a>

      </div>

      <div className="social-links">

        <a href="https://www.tiktok.com/@codebyemmal?_r=1&_t=ZN-97OPwmPBuCM" target="_blank" rel="noopener noreferrer">TikTok</a>

        <a href="https://www.facebook.com/share/1DYRdrXXmB/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Facebook</a>

        <a href="https://www.linkedin.com/in/codeby-emmanuel-b1b573303?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer">LinkedIn</a>

        <a href="https://youtube.com/@codebyemmanuel?si=Is6hxtAtBCLecRu3" target="_blank" rel="noopener noreferrer">YouTube</a>

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