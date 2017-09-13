const mongoose = require('mongoose');
const Recipe = mongoose.model('Recipe');

exports.getRecipes = async (req, res) => {
    const recipes = await Recipe.find();
    res.send(recipes);
}

exports.createRecipe = async (req, res) => {
    const recipe = await new Recipe(req.body).save();
    res.end('Successfully created recipe', recipe);
}