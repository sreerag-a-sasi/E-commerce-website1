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
    Wishlist: Object,
    date: {
        type: Date,
        default: Date.now,
    },
    user_type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User_type", 
    },
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users;




// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const userSchema = new Schema({
//     name: String,
//     email: {
//         type: String,
//         unique: true,
//     },
//     password: String,
//     phone: String,
//     image: String,
//     cartData: Object,
//     Wishlist: {
//         type: [Schema.Types.ObjectId], // Ensure Wishlist is an array of ObjectId
//         ref: 'Product', // Assuming Wishlist contains references to Product model
//         default: [], // Initialize as an empty array
//     },
//     date: {
//         type: Date,
//         default: Date.now,
//     },
//     user_type: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User_type', // Ensure this matches the model name
//     },
// });

// const Users = mongoose.model('Users', userSchema);
// module.exports = Users;

