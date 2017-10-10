// Importer et configurer les composants de la route
let express = require("express");
let router = express.Router();

// Importer le service
let NewsFeed = require("../services/news.service");

// Configurer la route => localhost:8080/
router.get("/", (req, res) => {
  // Lancer la fonction du service
  NewsFeed.getAll(data => {
    // Envoyer le tableau data dans la réponse du serveur
    res.render("index", {
      title: "Hello MEAN from route",
      userName: "Mathieu Rodrigues",
      collection: data
    });
  });
});

// Exporter la route
module.exports = router;
