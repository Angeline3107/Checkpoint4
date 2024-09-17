// src/components/Test.js

import { useState, useEffect } from "react";
import "../style/test.css";
import { gererFormulaire, afficherMessageErreur } from "../utils/testUtils";

function Test() {
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [listeProposition, setListeProposition] = useState([]);
  const [optionSource, setOptionSource] = useState("1"); // "1" pour mots, "2" pour phrases

  const handleValidationClick = () => {
    // Logique pour valider la saisie utilisateur
    if (currentIndex < listeProposition.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setScore(score + 1); // Exemple : incrémenter le score
    } else {
    }
  };

  const handleOptionChange = (event) => {
    setOptionSource(event.target.value);
  };

  const handleShareClick = () => {
    const scoreEmail = `${score} / ${currentIndex}`;
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const mailto = gererFormulaire(scoreEmail, nom, email);
    if (
      !mailto.includes("L'email n'est pas valide.") &&
      !mailto.includes("Le nom est trop court.")
    ) {
      window.location.href = mailto;
    } else {
      afficherMessageErreur(mailto);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleShareClick();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleValidationClick();
      const inputEcriture = document.getElementById("inputEcriture");
      if (inputEcriture) {
        inputEcriture.value = ""; // Efface la valeur du champ de saisie
      }
    }
  };

  useEffect(() => {
    const fetchPropositions = async () => {
      try {
        let response;
        if (optionSource === "1") {
          // Récupérer les mots
          response = await fetch(`${import.meta.env.VITE_API_URL}/api/mots`);
        } else if (optionSource === "2") {
          // Récupérer les phrases
          response = await fetch(`${import.meta.env.VITE_API_URL}/api/phrases`);
        }
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des propositions.");
        }
        const data = await response.json();
        setListeProposition(data);
        setCurrentIndex(0); // Réinitialiser l'index après récupération
        setScore(0); // Réinitialiser le score lors du changement d'option
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des propositions :",
          error
        );
        afficherMessageErreur("Impossible de récupérer les propositions.");
      }
    };

    fetchPropositions();
  }, [optionSource]);

  useEffect(() => {}, [currentIndex]);

  return (
    <>
      <header>
        <h1>RapidKeys</h1>
        <h2>L'application pour taper plus vite !</h2>
      </header>

      <main className="main">
        <div className="zoneOptions">
          <p className="headerDescription">
            Choisissez votre niveau de difficulté:
            <br /> Mots ou phrases. <br />
            Puis, tapez la proposition qui s'affiche dans le champ.
          </p>
          <div className="optionSource">
            <input
              type="radio"
              name="optionSource"
              id="mots"
              value="1"
              checked={optionSource === "1"}
              onChange={handleOptionChange}
            />
            <label className="label" htmlFor="mots">
              MOTS
            </label>
            <input
              type="radio"
              name="optionSource"
              id="phrases"
              value="2"
              checked={optionSource === "2"}
              onChange={handleOptionChange}
            />
            <label className="label" htmlFor="phrases">
              PHRASES
            </label>
          </div>

          <div className="zoneProposition">
            {listeProposition.length > 0
              ? listeProposition[currentIndex]
              : "Chargement..."}
          </div>

          <div className="zoneSaisie">
            <input
              type="text"
              id="inputEcriture"
              name="inputEcriture"
              onKeyPress={handleKeyPress}
            />
            <button
              id="btnValiderMot"
              type="button"
              onClick={handleValidationClick}
            >
              Valider
            </button>
          </div>

          <div className="zoneScore">
            Votre score : <span>{score}</span>
          </div>
        </div>

        <div className="zonePartage">
          <button type="button" onClick={handleShareClick}>
            Partager
          </button>
        </div>
      </main>

      <div className="popupBackground hidden">
        <div className="popup">
          <div>Partagez votre score</div>
          <form noValidate onSubmit={handleFormSubmit}>
            <label htmlFor="nom">Votre nom</label>
            <input type="text" id="nom" name="nom" placeholder="Votre nom" />
            <label htmlFor="email">
              Avec qui voulez-vous partager votre score ?
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="nom@domaine.com"
            />
            <button type="submit" id="btnEnvoyerMail">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Test;
