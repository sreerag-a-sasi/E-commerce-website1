const mongoose = require('mongoose');

// const users = require('../db/models/users');

async function connect() {
    try {
       await mongoose.connect('mongodb+srv://sreerag-a-sasi:killer027on@cluster0.zw9vy.mongodb.net/e-commerce');
       console.log("Database connection established..."); 
    } catch (error) {
        console.log("error : ", error);
    }
}


module.exports = connect;