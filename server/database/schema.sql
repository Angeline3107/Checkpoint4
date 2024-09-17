-- Création de la table 'mots'
CREATE TABLE IF NOT EXISTS mots (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mot VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS phrases (
  id INT AUTO_INCREMENT PRIMARY KEY,
  phrase TEXT NOT NULL
);
-- Insérer les mots dans la table 'mots'
INSERT INTO mots (mot) VALUES
('Aigle'),
('Brise'),
('Cactus'),
('Délice'),
('Écorce'),
('Fraise'),
('Glace'),
('Horizon'),
('Iris'),
('Jardin'),
('Kiosque'),
('Lune'),
('Mélodie'),
('Nuit'),
('Orchidée'),
('Plume'),
('Quête'),
('Rêve'),
('Soleil'),
('Tigre'),
('Urne'),
('Violet'),
('Wagon'),
('Xylophone'),
('Yacht'),
('Zèbre'),
('Abysse'),
('Bateau'),
('Chiffre'),
('Dentelle'),
('Éléphant'),
('Feuille'),
('Guitare'),
('Harmonie'),
('Ivoire'),
('Jupe'),
('Klaxon'),
('Lanterne'),
('Mémoire'),
('Neige'),
('Opale'),
('Papillon'),
('Quasar'),
('Raisin'),
('Tartine'),
('Uniforme'),
('Vague'),
('Yogourt'),
('Zinc'),
('Aube'),
('Bambou'),
('Chouette'),
('Drapeau'),
('Écharpe'),
('Fleur'),
('Gâteau'),
('Immeuble'),
('Jardinier'),
('Kangourou'),
('Loutre'),
('Météore'),
('Nénuphar'),
('Océan'),
('Perle'),
('Queue'),
('Rivière'),
('Saphir'),
('Téléphone'),
('Univers'),
('Valise');

INSERT INTO phrases (phrase) VALUES
('Le vent souffle doucement'),
('Les étoiles brillent dans le ciel'),
('Le soleil se couche sur l’horizon'),
('La mer est calme aujourd’hui'),
('Un papillon s’est posé sur la fleur'),
('La musique adoucit les mœurs'),
('La lune éclaire la nuit noire'),
('Les oiseaux chantent au lever du jour'),
('Le chocolat fond dans la bouche'),
('Un sourire vaut mille mots'),
('La pluie tombe en gouttes légères'),
('Le café est prêt à être servi'),
('Les montagnes se dressent majestueuses'),
('Le sable est chaud sous les pieds'),
('Les enfants jouent dans le parc'),
('Une odeur de pain frais embaume la maison'),
('La neige recouvre le paysage d’un voile blanc'),
('Les feuilles tombent en tourbillonnant'),
('Le feu crépite dans la cheminée'),
('Les fleurs s’épanouissent au printemps'),
('Un chat se prélasse au soleil'),
('Les étoiles filantes traversent le ciel'),
('Le vin se bonifie avec le temps'),
('Le vent fait danser les arbres'),
('Une douce mélodie réchauffe le cœur'),
('Les vagues se brisent sur les rochers'),
('Un bon livre est une aventure'),
('Le jardin est rempli de couleurs'),
('Les rêves deviennent réalité parfois'),
('Un baiser doux comme le miel'),
('Le silence est parfois plus éloquent'),
('Les nuages flottent comme des coton'),
('La mer scintille sous les rayons du soleil'),
('Le printemps apporte la renaissance'),
('Les éclats de rire sont contagieux'),
('Un bon repas rassemble les amis'),
('Le ciel se teinte de couleurs chaudes'),
('La brise caresse la peau'),
('Les étoiles sont des diamants dans la nuit'),
('Un voyage ouvre l’esprit'),
('La chaleur du foyer est apaisante'),
('Le parfum des roses est enivrant'),
('La douceur du matin est agréable'),
('Les couleurs de l’automne sont magnifiques'),
('Une promenade en forêt est revitalisante'),
('Les souvenirs sont des trésors inestimables'),
('Le calme avant la tempête est palpable'),
('Les éclairs illuminent le ciel sombre'),
('La fraîcheur du matin est vivifiante'),
('Une étoile filante exauce les vœux');