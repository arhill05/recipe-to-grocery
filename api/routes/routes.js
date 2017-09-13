const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
const { catchErrors } = require('../handlers/errorHandler');

router.get('/', catchErrors(recipeController.getRecipes));
router.post('/add', catchErrors(recipeController.createRecipe));

module.exports = router;