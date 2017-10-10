// Importer le constructeur
let NewsModel = require("../models/news.model");

// Créer 3 objects
let myImage = new NewsModel(
  1,
  "IMG",
  "One Luv",
  "http://lorempixel.com/400/200/sports/"
);
let myQuote = new NewsModel(2, "QUOTE", "Lorem ipsum dolor sit amet", "");
let myVideo = new NewsModel(3, "VID", "The Gladioators", "P8BKRCpViug");

// Création d'une collection de données
let newsFeedCollection = [myImage, myQuote, myVideo];

/*
Définition du service
Le service est une classe qui contient des méthodes
*/

class NewsFeed {
  // Afficher la collection de données
  static getAll(callBack) {
    // Envoyer les données de la collection dans la vue
    callBack(newsFeedCollection);
  }
}

/*
Exporter le service
*/

module.exports = NewsFeed;
