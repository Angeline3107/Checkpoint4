const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();

const app = express();

// Configuration CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Autorise les requêtes venant de ce domaine
    methods: ["GET", "POST", "PUT", "DELETE"], // Méthodes HTTP autorisées
    allowedHeaders: ["Content-Type"], // En-têtes autorisés
  })
);

app.use(express.json()); // Pour parser les requêtes en JSON

// Connexion à la base de données
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Route pour récupérer les mots
app.get("/api/mots", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT mot FROM mots");
    res.json(rows.map((row) => row.mot));
  } catch (err) {
    console.error("Erreur lors de la récupération des mots :", err);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des mots" });
  }
});

// Route pour récupérer les phrases
app.get("/api/phrases", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT phrase FROM phrases");
    res.json(rows.map((row) => row.phrase));
  } catch (err) {
    console.error("Erreur lors de la récupération des phrases :", err);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des phrases" });
  }
});

// Démarrage du serveur
app.listen(3310, () => {});
