const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Recipe = require("../models/Recipe");

// This handles the routes relating to recipes
router.get("/", (req, res) =>
  Recipe.findAll()
    .then(recipes => {
      console.log(recipes);
      res.sendStatus(200);
    })
    .catch(err => console.log(err))
);

module.exports = router;
