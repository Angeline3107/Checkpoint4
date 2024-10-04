import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/sinscrire.css";
import seconnecter from "../assets/images/seconnecter.png";

function Sinscrire() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // État pour gérer le message d'erreur

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Les mots de passe ne correspondent pas !");
      return;
    }

    // Si tout va bien, réinitialiser le formulaire
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setDateOfBirth("");
    setErrorMessage(""); // Effacer le message d'erreur en cas de succès
  };

  return (
    <>
      <header className="connexion-header2">
        <h1>S'inscrire</h1>
        <p>Rejoignez la communauté des Rapidoooooooooooos !!!</p>
      </header>
      <main className="connexion-main2">
        <form onSubmit={handleSubmit}>
          <div className="input-container2">
            <input
              type="email"
              placeholder="Enter your mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container2">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-container2">
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-container2">
            <input
              type="date"
              placeholder="Date of birth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </div>

          {/* Affichage du message d'erreur si nécessaire */}
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

          <button type="submit" className="register-button">
            S'inscrire
          </button>
        </form>
        <div className="register-section2">
          <p>Déjà inscrit ? Connecte-toi vite en cliquant sur le logo ! 😜</p>
          <NavLink to="/login">
            <button type="button" className="register-button2">
              <img src={seconnecter} alt="Register Icon" />
            </button>
          </NavLink>
        </div>
      </main>
    </>
  );
}

export default Sinscrire;
