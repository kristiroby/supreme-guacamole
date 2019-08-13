const mongoose = require('mongoose');

const guacSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    ingredients: [String],
    category: String
});

const Guac = mongoose.model('Guac', guacSchema);

module.exports = Guac;
