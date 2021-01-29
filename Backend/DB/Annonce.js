const mongoose = require("mongoose");

const annonceShcema = new mongoose.Schema({
  categorie: {
    type: String,
  },
  place: {
    type: String,
  },
  temp: {
    type: Number,
  },
});

module.exports = mongoose.model("Annonce", annonceShcema);
