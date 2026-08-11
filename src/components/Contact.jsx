import "./Contact.css";
import { Mail, Phone } from "lucide-react";
import {
  FaTiktok,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h1>Ready to Get Your Business Online?</h1>

      <p>
        Let's build a fast, modern website that brings in real customers.
      </p>

      <a
        href="https://wa.me/2349027090880"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn"
      >
        Chat With Me on WhatsApp
      </a>

      <div className="contact-info">

        <a href="mailto:emmanuelkenneth063@gmail.com" aria-label="Email Emmanuel">
          <Mail size={16} /> emmanuelkenneth063@gmail.com
        </a>

        <a href="tel:+2349165374015" aria-label="Call Emmanuel">
          <Phone size={16} /> +234 9165374015
        </a>

      </div>

      <div className="social-links">

        <a
          href="https://www.tiktok.com/@codebyemmal?_r=1&_t=ZN-97OPwmPBuCM"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <FaTiktok />
        </a>

        <a
          href="https://www.facebook.com/share/1CT6K35DSd/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>

        <a
          href="https://www.linkedin.com/in/codeby-emmanuel-b1b573303?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://youtube.com/@codebyemmanuel?si=Is6hxtAtBCLecRu3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>

        <a
          href="https://github.com/codebyemmanuel19"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

      </div>

    </section>
  );
}

export default Contact;