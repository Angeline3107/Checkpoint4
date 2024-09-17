// src/utils/testUtils.jsx

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
  const mailto = `mailto:${email}?subject=Mon score à RapidKeys&body=Bonjour, j'ai obtenu un score de ${scoreEmail} sur RapidKeys !`;
  return mailto;
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
