// Fonction pour afficher le résultat actuel dans la zone de score
export function afficherResultat(score, index) {
  const zoneScore = document.querySelector(".zoneScore span");
  if (zoneScore) {
    zoneScore.textContent = `${score} / ${index}`;
  }
}

// Fonction pour afficher la proposition à taper
export function afficherProposition(proposition) {
  const zoneProposition = document.querySelector(".zoneProposition");
  if (zoneProposition) {
    zoneProposition.textContent = proposition;
  }
}

// Fonction pour gérer l'envoi du formulaire et la création du lien mailto
export function gererFormulaire(scoreEmail, nom, email) {
  let message = "";

  // Vérification du nom
  if (nom.trim().length < 3) {
    message = "Le nom est trop court.";
    return message;
  }

  // Vérification de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    message = "L'email n'est pas valide.";
    return message;
  }

  // Si tout est valide, on génère le lien mailto
  const mailto = `mailto:${email}?subject=Mon score à AzerType&body=Bonjour, j'ai obtenu un score de ${scoreEmail} sur AzerType !`;
  return mailto;
}

// Fonction pour initialiser le jeu, définissant le score et le mot à taper
export async function lancerJeu(setScore, setIndex, setListeProposition) {
  setScore(0);
  setIndex(0);

  try {
    // Appel de l'API pour obtenir les mots
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/words`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des mots.");
    }
    const mots = await response.json();
    setListeProposition(mots);
  } catch (error) {
    console.error("Erreur:", error);
    afficherMessageErreur("Impossible de récupérer les mots.");
  }

  // Éventuellement, ajouter des options de phrases si l'option est choisie
  const phrases = [
    "Le soleil brille aujourd'hui.",
    "Je dois apprendre à taper plus vite.",
    "Les chats sont des animaux très agiles.",
  ];
  VITE_API_URL;

  const options = document.querySelectorAll(".optionSource input");
  options.forEach((option) => {
    option.addEventListener("change", (event) => {
      const choix = event.target.value;
      if (choix === "1") {
        setListeProposition(mots);
      } else {
        setListeProposition(phrases);
      }
      setScore(0); // Remise à zéro du score
      setIndex(0); // Remise à zéro de l'index
    });
  });
}

// Fonction pour afficher un message d'erreur dans la fenêtre popup
export function afficherMessageErreur(message) {
  const popup = document.querySelector(".popupBackground");
  const popupContent = document.querySelector(".popup div");

  if (popup && popupContent) {
    popup.classList.add("active");
    popupContent.textContent = message;

    // Fermer le popup après un certain temps
    setTimeout(() => {
      popup.classList.remove("active");
    }, 3000);
  }
}
