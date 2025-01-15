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
    old_price: Number,
    new_price: Number,
    S: { type: Number },
    M: { type: Number },
    L: { type: Number },
    XL: { type: Number },
    XXL: { type: Number }, 
    date: {
        type: Date,
        default: Date.now,
    },
    available: Number,
    description: {
        type: String,
        required: true,
    },
    added_by: { type: Schema.Types.ObjectId, ref: 'Users' },
    seller: String,
    blocked: { // New field to track block status
        type: Boolean,
        default: false,
    },
    message_sent: { // New field to track message status
        type: Boolean,
        default: false,
    },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
