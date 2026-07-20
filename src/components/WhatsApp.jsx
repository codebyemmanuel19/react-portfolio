import { FaWhatsapp } from "react-icons/fa";
import "./WhatsApp.css"

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2349165374015"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;