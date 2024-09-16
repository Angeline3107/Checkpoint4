import { NavLink } from "react-router-dom";
import "../style/navbar.css"; // Assurez-vous que ce fichier contient les styles correspondants
import vent from "../assets/images/rapide-vent.png";
import etoile from "../assets/images/star.png";
import connecter from "../assets/images/seconnecter.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-container">
        <h1>RapidKeys</h1>
        <img src={vent} alt="RapidKeys Logo" className="logo" />
        <div className="wind-decor" />
      </div>

      <nav className="nav-links">
        <img src={etoile} alt="étoile" className="etoile" />
        <NavLink to="/" className="nav-link">
          Accueil
        </NavLink>

        {/* Empty space */}
        <div className="empty-space" />

        {/* Test link */}
        <NavLink to="/test" className="nav-link">
          Test
        </NavLink>

        {/* Empty space for login */}
        <div className="empty-space" />

        {/* Login icon */}
        <NavLink to="/login" className="nav-link">
          <img src={connecter} alt="Login" className="login-icon" />
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
