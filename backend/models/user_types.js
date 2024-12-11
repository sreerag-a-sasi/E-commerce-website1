const mongoose = require('mongoose');
const { Schema } = mongoose;

const user_typeSchema = new Schema({
    user_type : String,
});

const User_type = mongoose.model('User_type', user_typeSchema);
module.exports = User_type;