const Sequelize = require("sequelize");
const db = require("../config/database");

// The 'Recipe' model is created to use in our PostgresQL database
const Recipe = db.define("recipe", {
  title: {
    type: Sequelize.STRING
  },
  prep_time: {
    type: Sequelize.STRING
  },
  servings: {
    type: Sequelize.STRING
  },
  ingredients: {
    type: Sequelize.STRING
  },
  instructions: {
    type: Sequelize.STRING
  },
  author: {
    type: Sequelize.STRING
  }
});

module.exports = Recipe;
