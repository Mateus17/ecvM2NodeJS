// Importer et configurer les composants de la route
let express = require("express");
let router = express.Router();

// Importer le service
let NewsFeed = require("../services/news.service");

// Configurer la route => localhost:8080/
router.get("/", (req, res) => {
  // Renvoyer une vue html dans la réponse
  res.render("index", {
    title: "Hello MEAN from route",
    userName: "Mathieu Rodrigues",
    collection: [
      {
        id: 1,
        postTitle: "Titre du post 1",
        postcontent: "Lorem ipsum dolor sit amet"
      },
      {
        id: 2,
        postTitle: "Titre du post 2",
        postcontent: "Lorem ipsum dolor sit amet"
      },
      {
        id: 3,
        postTitle: "Titre du post 3",
        postcontent: "Lorem ipsum dolor sit amet"
      }
    ]
  });
});

// Exporter la route
module.exports = router;
