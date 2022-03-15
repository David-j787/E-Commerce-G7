const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    name: String,
    description: String,
    product: [String],
});

module.exports = model('Category', categorySchema);