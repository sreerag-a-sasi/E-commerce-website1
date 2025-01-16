const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderHistorySchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    goto:{
        type:Number,
        required:true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    size:{
        type: String,
        required:true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    shipped: {
        type: Date,
        default: Date.now,
    },
    billingInfo: {
        fullname: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        postal: { type: String, required: true },
        country: { type: String, required: true }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,  // Ensure it's a valid ObjectId
        ref: 'Users',  // Reference to the User collection
        required: true,  // User is required
    },
});

const OrderHistory = mongoose.model('OrderHistory', orderHistorySchema);
module.exports = OrderHistory;
