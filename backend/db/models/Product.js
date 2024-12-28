const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: [String],
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: Number,
    old_price: Number,
    date: {
        type: Date,
        default: Date.now,
    },
    available: Number,
    description: {
        type: String,
        required: true,
    },
    added_by: String,
    seller: String,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
