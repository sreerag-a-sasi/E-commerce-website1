'use strict';

const UserType = require('../models/user_types'); // Adjust the path according to your project structure

module.exports = {
  up: async (models, mongoose) => {
    return UserType.insertMany([
      {
        _id: "676c07e68c1c6815439b181c",
        user_type: "Admin"
      },
      {
        _id: "676c07f88c1c6815439b181e",
        user_type: "Seller"
      },
      {
        _id: "676c07a58c1c6815439b1818",
        user_type: "Buyer"
      }
    ]).then(res => {
      // Prints the number of inserted documents
      console.log(res.insertedCount);
    });
  },

  down: async (models, mongoose) => {
    return UserType.deleteMany({
      _id: {
        $in: [
          "676c07e68c1c6815439b181c",
          "676c07f88c1c6815439b181e",
          "676c07a58c1c6815439b1818"
        ]
      }
    }).then(res => {
      // Prints the number of deleted documents
      console.log(res.deletedCount);
    });
  }
};
