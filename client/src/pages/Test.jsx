import { useState, useEffect } from "react";
import "../style/test.css";
import { gererFormulaire, afficherMessageErreur } from "../utils/testUtils";

function Test() {
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [listeProposition, setListeProposition] = useState([]);
  const [optionSource, setOptionSource] = useState("1"); // "1" pour mots, "2" pour phrases
  const [chronoCommence, setChronoCommence] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // 60 secondes de chrono
  const [chronoFini, setChronoFini] = useState(false); // Indicateur que le temps est écoulé
  const [userInput, setUserInput] = useState(""); // Pour stocker l'entrée de l'utilisateur

  const handleValidationClick = () => {
    if (!chronoFini && currentIndex < listeProposition.length) {
      // Vérifie si le mot est bien orthographié
      if (userInput.trim() === listeProposition[currentIndex].trim()) {
        setScore(score + 1); // Incrémente le score si le mot est correct
      }
      // Passe au mot suivant
      setCurrentIndex(currentIndex + 1);
      setUserInput(""); // Réinitialise l'entrée utilisateur
    }
  };

  const handleOptionChange = (event) => {
    setOptionSource(event.target.value);
  };

  const handleShareClick = () => {
    const scoreEmail = `${score} / ${listeProposition.length}`;
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

  const handleKeyPress = (event) => {
    if (!chronoCommence) {
      setChronoCommence(true); // Démarre le chrono à la première frappe
    }
    if (event.key === "Enter" && !chronoFini) {
      handleValidationClick();
    }
  };

  useEffect(() => {
    const fetchPropositions = async () => {
      try {
        let response;
        if (optionSource === "1") {
          response = await fetch(`${import.meta.env.VITE_API_URL}/api/mots`);
        } else if (optionSource === "2") {
          response = await fetch(`${import.meta.env.VITE_API_URL}/api/phrases`);
        }
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des propositions.");
        }
        const data = await response.json();
        setListeProposition(data);
        setCurrentIndex(0);
        setScore(0);
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

  useEffect(() => {
    if (chronoCommence && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setChronoFini(true); // Marque la fin du chrono
    }
  }, [chronoCommence, timeLeft]);

  // Calcul du pourcentage
  const pourcentage =
    listeProposition.length > 0
      ? Math.round((score / listeProposition.length) * 100)
      : 0;

  return (
    <>
      <header>
        <h1>RapidKeys</h1>
        <h2>L'application pour taper plus vite !</h2>
      </header>

      <main className="main">
        <div className="zoneOptions">
          <p className="headerDescription">
            Choisissez votre niveau de difficulté: <br /> Mots ou phrases.
          </p>
          <div className="optionSource">
            <input
              type="radio"
              name="optionSource"
              id="mots"
              value="1"
              checked={optionSource === "1"}
              onChange={handleOptionChange}
              disabled={chronoFini} // Désactive le changement d'option quand le chrono est terminé
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
              disabled={chronoFini} // Désactive le changement d'option quand le chrono est terminé
            />
            <label className="label" htmlFor="phrases">
              PHRASES
            </label>
          </div>

          <div className="zoneProposition">
            {chronoFini
              ? "Le temps est écoulé !"
              : listeProposition.length > 0
                ? listeProposition[currentIndex]
                : "Chargement..."}
          </div>

          <div className="zoneSaisie">
            <input
              type="text"
              id="inputEcriture"
              name="inputEcriture"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)} // Met à jour l'entrée utilisateur
              onKeyPress={handleKeyPress}
              disabled={chronoFini} // Désactive la saisie lorsque le chrono est terminé
            />
            <button
              id="btnValiderMot"
              type="button"
              onClick={handleValidationClick}
              disabled={chronoFini} // Désactive le bouton de validation lorsque le chrono est terminé
            >
              Valider
            </button>
          </div>

          <div className="zoneScore">
            Votre score :{" "}
            <span className={chronoFini ? "highlight-score" : ""}>
              {score} / {listeProposition.length} ({pourcentage}%)
            </span>
          </div>
          <div className="zoneChrono">
            Temps restant : <span>{timeLeft}</span> secondes
          </div>
        </div>

        <div className="zonePartage">
          <button type="button" onClick={handleShareClick}>
            Partager
          </button>
        </div>
      </main>
    </>
  );
}

export default Test;
