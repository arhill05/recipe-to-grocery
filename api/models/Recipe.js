const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Enter a name for your recipe'
    },
    description: {
        type: String,
        trim: true
    },
    directions: [{
        step: Number,
        text: String
    }],
    ingredients: [{
        quantity: Number,
        text: String
    }]
});

module.exports = mongoose.model('Recipe', recipeSchema);