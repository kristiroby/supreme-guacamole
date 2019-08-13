const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: String,
    image: String
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;