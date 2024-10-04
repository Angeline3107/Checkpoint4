import { NavLink } from "react-router-dom";
import "../style/accueil.css";
import ordinateur from "../assets/images/ordinateur.png";
import sinscrire from "../assets/images/sinscrire.png";
import seconnecter from "../assets/images/seconnecter.png";

function Accueil() {
  return (
    <div className="accueil-container">
      <div className="accueil-header">
        <div className="titre">Boostez votre vitesse de frappe !</div>
        <img className="img-ordinateur" src={ordinateur} alt="ordinateur" />
      </div>
      <div className="description">
        Vous voulez taper plus vite ? RapidKeys est votre compagnon
        d'entraînement idéal ! Affrontez le chronomètre et perfectionnez votre
        vitesse de frappe en un clin d'oeil.
      </div>
      <div className="section-sous-titre">Ne perdez plus une frappe</div>
      <div className="section-description">
        Enregistrez-vous pour garder une trace de chaque session, analyser votre
        progression et battre vos meilleurs scores. Votre vitesse de frappe
        n'aura plus de secret pour vous.
      </div>
      <div className="connexion-inscription">
        <NavLink to="/register">
          <img
            className="img-inscription"
            src={sinscrire}
            alt="logo d'inscription"
          />
        </NavLink>
        <NavLink to="/login">
          <img
            className="img-connexion"
            src={seconnecter}
            alt="logo connexion"
          />
        </NavLink>
      </div>
    </div>
  );
}

export default Accueil;
