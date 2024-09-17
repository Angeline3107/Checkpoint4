import { useState, useEffect } from "react";
import "../style/test.css";
import {
  afficherResultat,
  afficherProposition,
  gererFormulaire,
  lancerJeu,
  afficherMessageErreur,
} from "../utils/testUtils";

function Test() {
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [listeProposition, setListeProposition] = useState(["Azerty"]);

  const handleValidationClick = () => {
    // Ajouter votre logique de validation ici
  };

  const handleOptionChange = () => {
    // Ajouter votre logique de changement d'option ici
  };

  const handleShareClick = () => {
    const scoreEmail = `${score} / ${index}`;
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

  useEffect(() => {
    // Initialiser le jeu lorsque le composant est monté
    lancerJeu(setScore, setIndex, setListeProposition);

    const btnValider = document.getElementById("btnValiderMot");
    const inputsOptions = document.querySelectorAll(".optionSource input");

    if (btnValider) {
      btnValider.addEventListener("click", handleValidationClick);
    }

    inputsOptions.forEach((btn) => {
      btn.addEventListener("change", handleOptionChange);
    });

    // Nettoyage des écouteurs d'événements lorsque le composant est démonté
    return () => {
      btnValider?.removeEventListener("click", handleValidationClick);
      inputsOptions.forEach((btn) => {
        btn.removeEventListener("change", handleOptionChange);
      });
    };
  }, []);

  useEffect(() => {
    // Mise à jour du résultat et de la proposition
    afficherResultat(score, index);
    afficherProposition(listeProposition[index] || "Azerty");
  }, [score, index, listeProposition]);

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
              defaultChecked
            />
            <label className="label" htmlFor="mots">
              MOTS
            </label>
            <input type="radio" name="optionSource" id="phrases" value="2" />
            <label className="label" htmlFor="phrases">
              PHRASES
            </label>
          </div>

          <div className="zoneProposition">
            {listeProposition[index] || "Azerty"}
          </div>

          <div className="zoneSaisie">
            <input type="text" id="inputEcriture" name="inputEcriture" />
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

      <div className="popupBackground">
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
