// database/client.js

// Charger les variables d'environnement
require("dotenv").config();

const mysql = require("mysql2/promise");

// Récupérer les variables depuis le fichier .env
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// Créer un pool de connexions à la base de données
const client = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// Méthode pour vérifier la connexion à la base de données
client.checkConnection = async () => {
  try {
    const connection = await client.getConnection();
    console.info(`Connecté à la base de données ${DB_NAME}`);
    connection.release();
  } catch (error) {
    console.error(
      "Échec de la connexion à la base de données :",
      error.message
    );
    process.exit(1); // Quitter l'application si la connexion échoue
  }
};

// Stocker le nom de la base de données pour une utilisation future
client.databaseName = DB_NAME;

// Vérifier la connexion dès le chargement du module
client.checkConnection();

module.exports = client;
