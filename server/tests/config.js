const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = process.env.APP_PORT || 3310;
const app = express();

// Vérifie que le fichier client.js existe bien et ajoute l'extension si nécessaire
const connection = require("../database/client");

// Middleware CORS pour autoriser les requêtes depuis le client
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
  })
);

app.use(express.json());

// Endpoint pour récupérer les mots
app.get("/api/mots", async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT mot FROM mots");
    res.json(rows.map((row) => row.mot));
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des mots." });
  }
});

// Endpoint pour récupérer les phrases
app.get("/api/phrases", async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT phrase FROM phrases");
    res.json(rows.map((row) => row.phrase));
  } catch (error) {
    console.error("Erreur lors de la récupération des phrases :", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des phrases." });
  }
});

// Démarrer le serveur
app.listen(port, () => {});
