import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : "menu-closed"}`}>
      <div className="navbar-container">
        <div className="hamburger-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`navbar-menu ${menuOpen ? "open" : "closed"}`}>
          <li className="navbar-item">
            <Link
              to="/"
              className="navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/about"
              className="navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              ABOUT
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/events"
              className="navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              EVENTS
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/apply"
              className="navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              APPLY
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
