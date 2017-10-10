// Importer les composants pour installer un serveur

let express = require("express"); // Express permet de construire le serveur NodeJS
let bodyParser = require("body-parser"); // Permet d'analyser les requêtes sur le serveur

// Définir le port de l'application
let port = 8080;

// Initier le serveur
let app = express();

// Lancer le serveur
app.listen(port, () => {
  console.log(`Le serveur est lancé sur le port : ${port}`);
});
