const connection = require("./database/client");

// server.js
const express = require("express");
const cors = require("cors");
const port = 3310;
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: [
      process.env.CLIENT_URL, // keep this one, after checking the value in `server/.env`
    ],
  })
);

app.use(express.json());
// Endpoint pour récupérer les mots
app.get("/api/mots", (req, res) => {
  connection.query("SELECT mot FROM mots", (error, results) => {
    if (error) {
      return res
        .status(500)
        .json({ error: "Erreur lors de la récupération des mots." });
    }
    res.json(results.map((row) => row.mot));
  });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
