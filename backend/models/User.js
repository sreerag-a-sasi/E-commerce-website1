const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    phone: String,
    image: String,
    cartData: Object,
    Wishlist:Object,
    date: {
        type: Date,
        default: Date.now,
    },
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users;
