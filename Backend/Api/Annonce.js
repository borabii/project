const express = require("express");
const mongoose = require("mongoose");
const Annonce = require("C:/Users/Legion/Desktop/Projet/PFE_Demo/Backend/DB/Annonce.js");
const route = express.Router();

//post request
route.post("/addannonce", async (req, res) => {
  const { categorie, place, temp } = req.body;
  let annonce = {};
  annonce.categorie = categorie;
  annonce.place = place;
  annonce.temp = temp;
  let annonceModel = new Annonce(annonce);
  await annonceModel.save();
  res.json(annonceModel);
});
//get request
route.get("/getAnnonce", async (req, res) => {
  Annonce.find()
    .then((result) => {
      res.status(200).json({
        annoncedata: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = route;
