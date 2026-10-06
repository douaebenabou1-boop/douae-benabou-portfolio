import { useState } from "react";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* LOGO */}

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          <span className="logo-dot"></span>
          DOUAE BENABOU
        </a>


        {/* DESKTOP LINKS */}

        <div className="nav-links">

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#experience">
            Experience
          </a>

          <a href="#education">
            Education
          </a>

        </div>


        {/* CONNECT BUTTON */}

        <a
          href="#contact"
          className="connect-button"
        >
          Let's connect
          <span>↗</span>
        </a>


        {/* MOBILE HAMBURGER */}

        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>

      </div>


      {/* MOBILE MENU */}

      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
      >

        <div className="mobile-menu-inner">

          <div className="mobile-menu-top">

            <span>
              NAVIGATION
            </span>

            <span>
              01 — 05
            </span>

          </div>


          <div className="mobile-links">

            <a
              href="#about"
              onClick={closeMenu}
            >
              <span>01</span>
              About
              <small>↗</small>
            </a>


            <a
              href="#skills"
              onClick={closeMenu}
            >
              <span>02</span>
              Skills
              <small>↗</small>
            </a>


            <a
              href="#projects"
              onClick={closeMenu}
            >
              <span>03</span>
              Projects
              <small>↗</small>
            </a>


            <a
              href="#experience"
              onClick={closeMenu}
            >
              <span>04</span>
              Experience
              <small>↗</small>
            </a>


            <a
              href="#education"
              onClick={closeMenu}
            >
              <span>05</span>
              Education
              <small>↗</small>
            </a>

          </div>


          <a
            href="#contact"
            className="mobile-contact"
            onClick={closeMenu}
          >
            <div>
              <span>AVAILABLE FOR PFE INTERNSHIP</span>

              <strong>
                Let's work together.
              </strong>
            </div>

            <div className="mobile-contact-arrow">
              ↗
            </div>
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;