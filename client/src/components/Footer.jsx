import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "../style/footer.css"; // Assure-toi que le fichier est bien importé
import "../style/footer-large.css"; // Le fichier contient les styles pour les grands écrans
import accueil from "../assets/images/accueil.png";
import manette from "../assets/images/manette.png";
import login from "../assets/images/seconnecter.png";
import registrer from "../assets/images/sinscrire.png";

// Composant pour le footer des grands écrans
function LargeScreenFooter() {
  return (
    <footer className="footer-large">
      <div className="footer-section">
        <h3>LIENS UTILES</h3>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/games">Test</NavLink>
          </li>
          <li>
            <NavLink to="/register">S'inscrire</NavLink>
          </li>
          <li>
            <NavLink to="/login">Se connecter</NavLink>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>SUPPORT</h3>
        <ul>
          <li>
            <NavLink to="/contact">Nous contacter</NavLink>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>INFORMATIONS LEGALES</h3>
        <p>Droits d'auteur © 2024 RapidKeys. Tous droits réservés.</p>
      </div>
      <div className="footer-section">
        <blockquote>
          “La vitesse vient avec la pratique. Commencez dès aujourd'hui !”
        </blockquote>
      </div>
    </footer>
  );
}

// Composant pour le footer des petits écrans
function SmallScreenFooter() {
  return (
    <footer className="footer">
      <NavLink to="/" className="footer-item">
        <img src={accueil} alt="home" />
      </NavLink>

      <NavLink to="/games" className="footer-item">
        <img src={manette} alt="games" />
      </NavLink>

      <NavLink to="/login" className="footer-item">
        <img src={login} alt="Login" />
      </NavLink>

      <NavLink to="/register" className="footer-item">
        <img src={registrer} alt="Registrer" />
      </NavLink>
    </footer>
  );
}

// Composant principal qui détecte la taille de l'écran et affiche le bon footer
export default function Footer() {
  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main-container">
      {/* Ton contenu principal ici */}
      {isSmallScreen ? <SmallScreenFooter /> : <LargeScreenFooter />}
    </div>
  );
}
