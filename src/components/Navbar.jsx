
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="nav-about" href="#apropos">
        ABOUT US
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="primary-navigation"
        className={`site-nav ${isMenuOpen ? "is-open" : ""}`}
        aria-label="Navigation principale"
      >
        <a href="#projets" onClick={closeMenu}>PROJETS</a>
        <a href="#services" onClick={closeMenu}>SERVICES</a>
        <a href="#contact" onClick={closeMenu}>LET'S TALK</a>
      </nav>
    </header>
  );
}

export default Navbar;