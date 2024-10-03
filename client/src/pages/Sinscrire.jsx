import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/sinscrire.css";
import seconnecter from "../assets/images/seconnecter.png";

function Sinscrire() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    // Ici, vous pouvez ajouter la logique pour gérer les données,
    // comme l'afficher dans la console ou les stocker localement
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Date of Birth:", dateOfBirth);
    // Réinitialiser le formulaire après la soumission si nécessaire
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setDateOfBirth("");
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
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="input-container2">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="input-container2">
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <div className="input-container2">
            <input
              type="date"
              placeholder="Date of birth"
              value={dateOfBirth}
              onChange={handleDateOfBirthChange}
              required
            />
          </div>

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
