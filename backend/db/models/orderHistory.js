const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderHistorySchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const OrderHistory = mongoose.model('OrderHistory', orderHistorySchema);
module.exports = OrderHistory;
