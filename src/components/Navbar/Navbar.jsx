import React, { useEffect, useState } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import "./Navbar.css";

import logo from "../../assets/images/icon image.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">

          <div className="logo">
            <img src={logo} alt="GreenBlocks" />
          </div>

          <nav className={menuOpen ? "nav active" : "nav"}>
            <ul className="nav-links">
              <li><a href="/" onClick={closeMenu}>Solutions</a></li>
              <li><a href="/" onClick={closeMenu}>ESG Expertise</a></li>
              <li><a href="/" onClick={closeMenu}>Industries</a></li>
              <li><a href="/" onClick={closeMenu}>Our Work</a></li>
              <li><a href="/" onClick={closeMenu}>About Us</a></li>
              <li><a href="/" onClick={closeMenu}>Insights</a></li>
            </ul>
          </nav>

          <button className="talk-btn">
            Lets Talk
            <FiArrowRight />
          </button>

          <div
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>

        </div>
      </header>

      {menuOpen && (
        <div
          className="nav-overlay"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
}

export default Navbar;