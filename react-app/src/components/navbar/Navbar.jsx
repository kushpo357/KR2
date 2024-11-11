import { Link } from "react-router-dom";
import logo from "../../assets/gandabherunda.png";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav">
      <Link to="/" className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h3>ಕನ್ನಡ Rajyotsava</h3>
      </Link>

      {/* Hamburger menu visible only on mobile */}
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>

      {/* Regular nav links, hidden on mobile */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/eventGallery">
            <button>Events</button>
          </Link>
        </li>
        <li>
          <Link to="/tShirtPage">
            <button>T-Shirt</button>
          </Link>
        </li>
        <li>
          <Link to="/coordinators">
            <button>Contact Us</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
