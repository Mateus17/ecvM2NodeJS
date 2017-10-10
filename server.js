// Importer les composants pour installer un serveur

let express = require("express"); // Express permet de construire le serveur NodeJS
let bodyParser = require("body-parser"); // Permet d'analyser les requêtes sur le serveur

// Importer le module de route front
let front = require("./routes/front");

// Définir le port de l'application
let port = 8081;

// Initier le serveur
let app = express();

// Configurer le moteur de templating/rendu
app.set("view engine", "ejs");

// Définir le dossier à utiliser pour les vues (ejs)
app.set("views", "www");

// Définir la route front
app.use("/", front);

// Lancer le serveur
app.listen(port, () => {
  console.log(`Le serveur est lancé sur le port : ${port}`);
});
