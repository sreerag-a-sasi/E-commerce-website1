'use strict';

// Import the user model
const User = require('../models/User'); // Adjust the path according to your project structure

module.exports = {
  up: async (models, mongoose) => {
    // Use the imported User model directly
    return User.insertMany([
      {
        _id: '6756fbc96094cd39bb394751',
        name: "sreerag",
        email: "sreeragakhd2002@gmail.com",
        password: "$2b$10$VbV8U2Ff5itTusxgfXpBkeIASFKT4mzZmn6FCKU5hGaYexhSA3dg.", // password===123456789
        phone: "6282523819",
        image: "http://localhost:4000/profile/images/profile_image_1733753801554.png",
        date: "2024-12-09T14:16:41.784+00:00",
        user_type: "676c07e68c1c6815439b181c", // admin
      }
    ]).then(res => {
      // Prints the number of inserted documents
      console.log(res.insertedCount);
    });
  },

  down: async (models, mongoose) => {
    // Use the imported User model directly
    return User.deleteMany({
      _id: {
        $in: [
          "6756fbc96094cd39bb394751"
        ]
      }
    }).then(res => {
      // Prints the number of deleted documents
      console.log(res.deletedCount);
    });
  }
};
