const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Recipe = require("../models/Recipe");

// Get a list of recipes
router.get("/", (req, res) =>
  Recipe.findAll()
    .then(recipes => {
      res.render("recipes", {
        recipes
      });
    })
    .catch(err => console.log(err))
);

// Add a recipe
router.get("/add", (req, res) => {
  const data = {
    title: "pizza",
    prep_time: "20",
    servings: "2",
    ingredients: "dough, tomato sauce, mozarella cheese, and pepperoni",
    instructions:
      "put the tomato sauce on the dough, then sprinkle the mozarella on top of the sauce. Finally, put pepperoni on top of the sprinkled cheese and bake for 15 minutes.",
    author: "Ivani A."
  };

  let { title, prep_time, servings, ingredients, instructions, author } = data;

  Recipe.create({
    title,
    prep_time,
    servings,
    ingredients,
    instructions,
    author
  })
    .then(recipe => res.redirect("/recipes"))
    .catch(err => console.log(err));
});

module.exports = router;
