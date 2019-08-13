const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: String,
    image: String,
    category: String
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;