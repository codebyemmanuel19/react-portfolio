import "./Navbar.css"
import logo from "../assets/logo.jpeg"
import { HiMenu, HiX } from "react-icons/hi"
import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="CBE Logo" />
        <h1>CodeByEmmanuel</h1>
      </div>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#skill" onClick={() => setIsOpen(false)}>Skill</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
      </div>
    </nav>
  )
}

export default Navbar