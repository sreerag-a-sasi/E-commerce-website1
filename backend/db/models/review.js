const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
    user: {
        type: Object,
        ref: 'User',
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
