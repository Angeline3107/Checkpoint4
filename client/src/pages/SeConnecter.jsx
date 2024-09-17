import { useState } from "react";
import "../style/connexion.css";
import sinscrire from "../assets/images/sinscrire.png";

function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Logique pour gérer la connexion
    // Les lignes suivantes sont commentées pour éviter l'erreur de console
    // console.log("Email:", email);
    // console.log("Password:", password);
  };

  return (
    <>
      <header className="connexion-header">
        <h1>Se Connecter</h1>
        <p>
          Reprenez là où vous vous êtes arrêté.
          <br />
          Connectez-vous pour relever de nouveaux défis et battre vos records.
        </p>
      </header>

      <main className="connexion-main">
        <form onSubmit={handleLoginSubmit}>
          <div className="input-container">
            <input
              type="email"
              placeholder="Enter your mail"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="forgot-link">
            <a href="#forgot">Forget login?</a>
          </div>
          <button type="submit" className="connexion-button">
            Login
          </button>
        </form>

        <div className="register-section">
          <p>
            Pas encore inscrit ? Pas de panique, tu n'es qu'à un clic d'entrer
            dans le club des pros du clavier ! 😎
          </p>
          <button type="button" className="register-button">
            <img src={sinscrire} alt="Register Icon" />
          </button>
        </div>
      </main>
    </>
  );
}

export default Connexion;
