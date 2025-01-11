const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,  // Ensure it's a valid ObjectId
        ref: 'User',  // Reference to the User collection
        required: true,  // User is required
    },
});

const Address = mongoose.model('Address', addressSchema);
module.exports = Address;
