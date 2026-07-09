import { FaWhatsapp } from "react-icons/fa";
import "./WhatsApp.css"

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/234 902 709 0880"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;