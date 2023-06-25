const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: String,
        Price: Number,
        brand: String,
        OS: String
    },
    {collection: 'product'}
);

module.exports = mongoose.model('product', productSchema);