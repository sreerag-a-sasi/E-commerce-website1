// const port = 4000;
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const dotenv = require('dotenv');
// const jwt = require("jsonwebtoken");
// const bcrypt = require('bcrypt');
// const multer = require("multer");
// const path = require("path");
// const cors = require("cors");
// const env = process.env.NODE_ENV || 'development';
// dotenv.config();



// const secretKey = PRIVATE_KEY;
// console.log('Secret Key:', secretKey); // Ensure the secret key is being correctly loaded


// app.use(express.json());
// app.use(cors());

// // Database connection with MongoDB
// mongoose.connect("mongodb+srv://sreerag-a-sasi:killer027on@cluster0.zw9vy.mongodb.net/e-commerce", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// // API creation
// app.get("/", (req, res) => {
//     res.send("express app is running");
// });



// // Storage configuration for product images
// const productStorage = multer.diskStorage({
//     destination: './upload/images',
//     filename: (req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
//     }
// });

// // Storage configuration for profile images
// const profileStorage = multer.diskStorage({
//     destination: './profile/images',
//     filename: (req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
//     }
// });

// // Multer upload configurations
// const uploadProduct = multer({ storage: productStorage });
// const uploadProfile = multer({ storage: profileStorage });

// // Creating upload endpoint for product images
// app.use('/images', express.static('upload/images'));
// app.use('/profile/images', express.static('profile/images'));

// // Endpoint for product images
// app.post("/upload", uploadProduct.array('product_images', 10), (req, res) => {
//     const imageUrls = req.files.map(file => `http://localhost:${port}/images/${file.filename}`);
//     res.json({
//         success: 1,
//         image_urls: imageUrls
//     });
// });

// // Endpoint for profile images
// app.post("/profile", uploadProfile.single('profile_image'), (req, res) => {
//     if (!req.file) {
//         return res.status(400).json({
//             success: 0,
//             message: 'No file uploaded.'
//         });
//     }

//     const imageUrl = `http://localhost:${port}/profile/images/${req.file.filename}`;
//     res.json({
//         success: 1,
//         image_url: imageUrl
//     });
// });




// // Schema for Creating Products
// const Product = mongoose.model("Product", {
//     id: {
//         type: Number,
//         required: true,
//     },
//     name: {
//         type: String,
//         required: true,
//     },
//     image: {
//         type: [String],
//         required: true,
//     },
//     category: {
//         type: String,
//         required: true,
//     },
//     new_price: {
//         type: Number,
//     },
//     old_price: {
//         type: Number,
//     },
//     date: {
//         type: Date,
//         default: Date.now,
//     },
//     available: {
//         type: Number,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
// });


// app.post('/addproduct', async (req, res) => {
//     let products = await Product.find({});
//     let id;
//     if (products.length > 0) {
//         let last_product = products[products.length - 1];
//         id = last_product.id + 1;
//     } else {
//         id = 1;
//     }

//     const product = new Product({
//         id: id,
//         name: req.body.name,
//         image: req.body.image, // Ensure this matches the key from the upload response
//         category: req.body.category,
//         new_price: req.body.new_price,
//         old_price: req.body.old_price,
//         available: req.body.available,
//         description: req.body.description,
//     });

//     console.log('Product to be saved:', product);
//     await product.save();
//     console.log("Product saved");

//     res.json({
//         success: true,
//         name: req.body.name,
//     });
// });


// const fs = require('fs');
// const { type } = require("os");

// app.post('/removeproduct', async (req, res) => {
//     const { id } = req.body;

//     try {
//         const product = await Product.findOne({ id: id });
//         if (product) {
//             // Delete each image from the server
//             product.image.forEach(imageUrl => {
//                 const filePath = path.join(__dirname, 'upload', 'images', path.basename(imageUrl));
//                 fs.unlink(filePath, (err) => {
//                     if (err) {
//                         console.error(`Failed to delete image at ${filePath}: `, err);
//                     } else {
//                         console.log(`Image deleted at ${filePath}`);
//                     }
//                 });
//             });

//             // Remove the product from the database
//             await Product.deleteOne({ id: id });
//             res.json({ success: true });
//         } else {
//             res.status(404).json({ success: false, message: 'Product not found' });
//         }
//     } catch (error) {
//         console.error('Error removing product:', error);
//         res.status(500).json({ success: false, message: 'An error occurred while removing the product' });
//     }
// });





// app.get('/allproducts', async (req, res) => {
//     let product = await Product.find({});
//     console.log("All Products Fetched (from index.js backend)");
//     res.send(product);
// });

// // Schema for Creating Users
// const Users = mongoose.model('Users', {
//     name: {
//         type: String,
//     },
//     email: {
//         type: String,
//         unique: true,
//     },
//     password: {
//         type: String,
//     },
//     phone: {
//         type: String,
//     },
//     image: {
//         type: String,
//     },
//     cartData: {
//         type: Object,
//     },
//     date: {
//         type: Date,
//         default: Date.now,
//     }
// });

// // Creating endpoint for registering the user





// console.log('Secret Key:', secretKey); // Debugging secret key

// // Signup route
// app.post('/signup', async (req, res) => {
//     try {
//         // Check if user already exists
//         let check = await Users.findOne({ email: req.body.email });
//         if (check) {
//             return res.status(400).json({ success: false, errors: "An existing user found with the same email ID!" });
//         }

//         // Initialize cart data
//         let cart = {};
//         for (let i = 0; i < 300; i++) {
//             cart[i] = 0;
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(req.body.password, 10);

//         // Create new user
//         const user = new Users({
//             name: req.body.username,
//             email: req.body.email,
//             password: hashedPassword,
//             phone: req.body.phone,
//             image: req.body.image,
//             cartData: cart,
//         });

//         // Save user to database
//         await user.save();

//         // Generate JWT token
//         const token = jwt.sign({ user_id: user._id }, secretKey, { expiresIn: "10d" });

//         res.json({ success: true, token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, errors: "Internal Server Error" });
//     }
// });



// // Creating endpoint for user sign-in

// app.post('/login', async (req, res) => {
//     try {
//         let user = await Users.findOne({ email: req.body.email });
//         if (!user) {
//             return res.status(400).json({ success: false, errors: "Wrong Email Id" });
//         }

//         const passCompare = bcrypt.compare(req.body.password, user.password);
//         if (!passCompare) {
//             return res.status(400).json({ success: false, errors: "Wrong password" });
//         }

//         const data = {
//             user: {
//                 id: user.id
//             }
//         };

//         // let token = jwt.sign({ user_id: user._id }, process.env.PRIVATE_KEY, { expiresIn: "10d" }); // Optionally, add expiration
//         const token = jwt.sign({ user_id: user._id }, secretKey, { expiresIn: "10d" });
//         res.json({ success: true, token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, errors: "Internal Server Error" });
//     }
// });


// app.get('/newcollections', async (req, res) => {
//     try {
//         let products = await Product.find({}).sort({ _id: -1 }).limit(8); // Sort by _id in descending order to get the newest products and limit to 8
//         console.log("New collections fetched: ", products);
//         res.send(products);
//     } catch (error) {
//         console.error('Error fetching new collections:', error);
//         res.status(500).send('An error occurred while fetching new collections');
//     }
// });


// // Creating endpoint for popular in women's category
// app.get('/popularinwomen', async (req, res) => {
//     let products = await Product.find({ category: "women" });
//     let popular_in_women = products.slice(0, 4);
//     // console.log("Popular in women fetched: ", popular_in_women);
//     res.send(popular_in_women);
// });

// // Creating endpoint for related items
// app.get('/relatedproducts', async (req, res) => {
//     let category = req.body.category;       
//     let products = await Product.find({});
//     let relatedproducts = products.slice(0, 4);
//     console.log("Related products fetched: ", relatedproducts);
//     res.send(relatedproducts);
// });

// // Middleware to fetch user
// // const fetchUser = (req, res, next) => {
// //     const token = req.header('auth-token');
// //     if (!token) {
// //         return res.status(401).json({ success: false, errors: "Access Denied" });
// //     }
// //     try {
// //         const decoded = jwt.verify(token, secretKey);
// //         req.user = decoded;
// //         next();
// //     } catch (error) {
// //         console.error('Token verification failed:', error);
// //         res.status(400).json({ success: false, errors: "Invalid Token" });
// //     }
// // };

// const fetchUser = async (req, res, next) => {
//     // const token = req.header('auth-token');
//     const token = req.headers['auth-token'];
//     if (!token) {
//         return res.status(401).send({ errors: "Please authenticate using a valid token" });
//     }
//     try {
//         const data = jwt.verify(token, secretKey);
//         req.user = data;
//         next();
//     } catch (error) {
//         res.status(401).send({ errors: "Invalid token. Please authenticate using a valid token or try again later." });
//     }
// };


// // Creating endpoint for adding products to cart
// app.post('/addtocart', fetchUser, async (req, res) => {
//     try {
//         console.log("Item with the id:", req.body.itemId, "has been added to the cart");
//         let userData = await Users.findOne({ _id: req.user.id });

//         // Initialize the cartData if it doesn't exist
//         if (!userData.cartData) {
//             userData.cartData = {};
//         }

//         // Initialize the item count if it doesn't exist
//         if (!userData.cartData[req.body.itemId]) {
//             userData.cartData[req.body.itemId] = 0;
//         }

//         userData.cartData[req.body.itemId] += 1;

//         await Users.findOneAndUpdate(
//             { _id: req.user.id },
//             { cartData: userData.cartData },
//             { new: true } // Option to return the updated document
//         );

//         res.status(200).send("Item added to the cart");
//     } catch (error) {
//         console.error("Error adding item to the cart:", error);
//         res.status(500).send("Error adding item to the cart");
//     }
// });


// // Creating endpoint for removing item from cart
// app.post('/removefromcart', fetchUser, async (req, res) => {
//     let userData = await Users.findOne({ _id: req.user.id }); // Defined userData here
//     if (userData.cartData[req.body.itemId] > 0) {
//         console.log("Item with the id:", req.body.itemId, "has been removed from the cart");
//         userData.cartData[req.body.itemId] -= 1;
//         await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
//         res.send("Item removed from the cart");
//     } else {
//         res.status(400).send({ errors: "Item not found in cart or quantity is already zero" });
//     }
// });
// //incrementing the number of same item
// app.post('/addfromcart', fetchUser, async (req, res) => {
//     let userData = await Users.findOne({ _id: req.user.id }); // Defined userData here
//     if (userData.cartData[req.body.itemId] != 0) { // Ensure item exists in cart
//         console.log("Item with the id:", req.body.itemId, "quantity is being increased in the cart");
//         userData.cartData[req.body.itemId] += 1;
//         await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
//         res.send("Item quantity increased in the cart");
//     } else {
//         res.status(400).send({ errors: "Item not found in cart" });
//     }
// });


// //deleting an item from cart

// app.post('/deletefromcart', fetchUser, async (req, res) => {
//     try {
//         const itemId = req.body.itemId;
//         console.log("Item with the id:", itemId, "is being deleted from the cart");
        
//         let userData = await Users.findOne({ _id: req.user.id });

//         if (userData.cartData && userData.cartData[itemId]) {
//             delete userData.cartData[itemId];

//             await Users.findOneAndUpdate(
//                 { _id: req.user.id },
//                 { cartData: userData.cartData },
//                 { new: true } // Option to return the updated document
//             );

//             res.status(200).send("Item deleted from the cart");
//         } else {
//             res.status(404).send("Item not found in the cart");
//         }
//     } catch (error) {
//         console.error("Error deleting item from the cart:", error);
//         res.status(500).send("Error deleting item from the cart");
//     }
// });







// // // Creating endpoint for saving and retrieving cart data
// app.post('/getcart', fetchUser, async (req, res) => {
//     console.log("Retrieving cart data");
//     let userData = await Users.findById({ _id: req.user.id });
//     res.json(userData.cartData);
// });


// app.get("/user", async (req, res) => {
//     try {
//         const token = req.headers['auth-token'];
//         console.log("Received auth token:", token); // Log token received by server

//         if (!token) {
//             return res.status(401).json({ success: 0, message: "Unauthorized" });
//         }
//         else{
//             const getUserByToken = async (token) => {
//                 try {
//                     const decoded = jwt.verify(token, secretKey); 
//                     const user = await user.findById(decoded.user.id);
//                 } catch (error) {
//                     console.error('Token verification failed:', error); 
//                     return null;
//                 }
//             }
//             return getUserByToken;
//         }
        
//     } catch (error) {
//         console.error(error); // Log any errors for debugging
//         res.status(500).json({ success: 0, message: "Internal Server Error" });
//     }
// });

// // Endpoint to get user data
// app.get("/user", fetchUser, async (req, res) => {
//     try {
//         const user = await Users.findById(req.user.user_id);
//         if (!user) {
//             return res.status(401).json({ success: 0, message: "Unauthorized" });
//         }
//         res.status(200).json({ success: 1, message: "User found", user });
//     } catch (error) {
//         console.error(error); // Log any errors for debugging
//         res.status(500).json({ success: 0, message: "Internal Server Error" });
//     }
// });

// // Endpoint to get user data
// app.get("/user", fetchUser, async (req, res) => {
//     try {
//         const user = await Users.findById(req.user.user_id);
//         if (!user) {
//             return res.status(401).json({ success: 0, message: "Unauthorized" });
//         }
//         res.status(200).json({ success: 1, message: "User found", user });
//     } catch (error) {
//         console.error(error); // Log any errors for debugging
//         res.status(500).json({ success: 0, message: "Internal Server Error" });
//     }
// });

// // Your other routes...

// // Start the server
// app.listen(port, (error) => {
//     if (!error) {
//         console.log(`Server running at http://localhost:${port}`);
//     } else {
//         console.log("Error: " + error);
//     }
// });





























// const port = 4000;
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const dotenv = require('dotenv');
// const jwt = require("jsonwebtoken");
// const bcrypt = require('bcrypt');
// const multer = require("multer");
// const path = require("path");
// const cors = require("cors");
// const fs = require('fs');

// dotenv.config();

// const secretKey = process.env.PRIVATE_KEY;
// console.log('Secret Key:', secretKey); // Ensure the secret key is being correctly loaded

// app.use(express.json());
// app.use(cors());

// // Database connection with MongoDB
// mongoose.connect("mongodb+srv://sreerag-a-sasi:killer027on@cluster0.zw9vy.mongodb.net/e-commerce", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// // Import models
// const Users = require('./models/User');
// const Product = require('./models/Product');

// // API creation
// app.get("/", (req, res) => {
//     res.send("express app is running");
// });

// // Storage configuration for product images
// const productStorage = multer.diskStorage({
//     destination: './upload/images',
//     filename: (req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
//     }
// });

// // Storage configuration for profile images
// const profileStorage = multer.diskStorage({
//     destination: './profile/images',
//     filename: (req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
//     }
// });

// // Multer upload configurations
// const uploadProduct = multer({ storage: productStorage });
// const uploadProfile = multer({ storage: profileStorage });

// // Creating upload endpoint for product images
// app.use('/images', express.static('upload/images'));
// app.use('/profile/images', express.static('profile/images'));

// // Endpoint for product images
// app.post("/upload", uploadProduct.array('product_images', 10), (req, res) => {
//     const imageUrls = req.files.map(file => `http://localhost:${port}/images/${file.filename}`);
//     res.json({
//         success: 1,
//         image_urls: imageUrls
//     });
// });

// // Endpoint for profile images
// app.post("/profile", uploadProfile.single('profile_image'), (req, res) => {
//     if (!req.file) {
//         return res.status(400).json({
//             success: 0,
//             message: 'No file uploaded.'
//         });
//     }

//     const imageUrl = `http://localhost:${port}/profile/images/${req.file.filename}`;
//     res.json({
//         success: 1,
//         image_url: imageUrl
//     });
// });

// // Middleware to fetch user
// const fetchUser = (req, res, next) => {
//     const token = req.header('auth-token');
//     if (!token) {
//         return res.status(401).json({ success: false, errors: "Access Denied" });
//     }
//     try {
//         const decoded = jwt.verify(token, secretKey);
//         req.user = decoded;
//         next();
//     } catch (error) {
//         console.error('Token verification failed:', error);
//         res.status(400).json({ success: false, errors: "Invalid Token" });
//     }
// };

// // Route to get cart data
// app.post('/getcart', fetchUser, async (req, res) => {
//     console.log("Retrieving cart data");
//     try {
//         const userData = await Users.findOne({ _id: req.user.user_id });
//         if (!userData) {
//             return res.status(404).json({ success: false, errors: "User not found" });
//         }
//         res.json(userData.cartData);
//     } catch (error) {
//         console.error('Error retrieving cart data:', error);
//         res.status(500).json({ success: false, errors: "Internal Server Error" });
//     }
// });
// // Endpoint for adding products to cart
// app.post('/addtocart', fetchUser, async (req, res) => {
//     try {
//         console.log("Item with the id:", req.body.itemId, "has been added to the cart");
//         let userData = await Users.findOne({ _id: req.user.user_id });

//         // Initialize the cartData if it doesn't exist
//         if (!userData.cartData) {
//             userData.cartData = {};
//         }

//         // Initialize the item count if it doesn't exist
//         if (!userData.cartData[req.body.itemId]) {
//             userData.cartData[req.body.itemId] = 0;
//         }

//         userData.cartData[req.body.itemId] += 1;

//         await Users.findOneAndUpdate(
//             { _id: req.user.user_id },
//             { cartData: userData.cartData },
//             { new: true } // Option to return the updated document
//         );

//         res.status(200).send("Item added to the cart");
//     } catch (error) {
//         console.error("Error adding item to the cart:", error);
//         res.status(500).send("Error adding item to the cart");
//     }
// });

// // Endpoint for removing item from cart
// app.post('/removefromcart', fetchUser, async (req, res) => {
//     try {
//         let userData = await Users.findOne({ _id: req.user.user_id });
//         if (userData.cartData[req.body.itemId] > 0) {
//             console.log("Item with the id:", req.body.itemId, "has been removed from the cart");
//             userData.cartData[req.body.itemId] -= 1;
//             await Users.findOneAndUpdate({ _id: req.user.user_id }, { cartData: userData.cartData });
//             res.send("Item removed from the cart");
//         } else {
//             res.status(400).send({ errors: "Item not found in cart or quantity is already zero" });
//         }
//     } catch (error) {
//         console.error("Error removing item from the cart:", error);
//         res.status(500).send("Error removing item from the cart");
//     }
// });

// // Endpoint for incrementing item quantity in cart
// app.post('/addfromcart', fetchUser, async (req, res) => {
//     try {
//         let userData = await Users.findOne({ _id: req.user.user_id });
//         if (userData.cartData[req.body.itemId] != 0) {
//             console.log("Item with the id:", req.body.itemId, "quantity is being increased in the cart");
//             userData.cartData[req.body.itemId] += 1;
//             await Users.findOneAndUpdate({ _id: req.user.user_id }, { cartData: userData.cartData });
//             res.send("Item quantity increased in the cart");
//         } else {
//             res.status(400).send({ errors: "Item not found in cart" });
//         }
//     } catch (error) {
//         console.error("Error increasing item quantity in the cart:", error);
//         res.status(500).send("Error increasing item quantity in the cart");
//     }
// });

// // Endpoint for deleting an item from cart
// app.post('/deletefromcart', fetchUser, async (req, res) => {
//     try {
//         const itemId = req.body.itemId;
//         console.log("Item with the id:", itemId, "is being deleted from the cart");

//         let userData = await Users.findOne({ _id: req.user.user_id });

//         if (userData.cartData && userData.cartData[itemId]) {
//             delete userData.cartData[itemId];

//             await Users.findOneAndUpdate(
//                 { _id: req.user.user_id },
//                 { cartData: userData.cartData },
//                 { new: true } // Option to return the updated document
//             );

//             res.status(200).send("Item deleted from the cart");
//         } else {
//             res.status(404).send("Item not found in the cart");
//         }
//     } catch (error) {
//         console.error("Error deleting item from the cart:", error);
//         res.status(500).send("Error deleting item from the cart");
//     }
// });

// // Endpoint for getting cart data
// app.post('/getcart', fetchUser, async (req, res) => {
//     console.log("Retrieving cart data");
//     try {
//         let userData = await Users.findOne({ _id: req.user.user_id });
//         res.json(userData.cartData);
//     } catch (error) {
//         console.error("Error retrieving cart data:", error);
//         res.status(500).send("Error retrieving cart data");
//     }
// });
// app.get("/user", async (req, res) => {
//     try {
//         const token = req.headers['auth-token'];
//         console.log("Received auth token:", token); // Log token received by server

//         if (!token) {
//             return res.status(401).json({ success: 0, message: "Unauthorized" });
//         }
//         else{
//             const getUserByToken = async (token) => {
//                 try {
//                     const decoded = jwt.verify(token, secretKey); 
//                     const user = await user.findById(decoded.user.id);
//                 } catch (error) {
//                     console.error('Token verification failed:', error); 
//                     return null;
//                 }
//             }
//             return getUserByToken;
//         }
        
//     } catch (error) {
//         console.error(error); // Log any errors for debugging
//         res.status(500).json({ success: 0, message: "Internal Server Error" });
//     }
// });

// // Endpoint to get user data
// app.get("/user", fetchUser, async (req, res) => {
//     try {
//         const user = await Users.findById(req.user.user_id);
//         if (!user) {
//             return res.status(401).json({ success: 0, message: "Unauthorized" });
//         }
//         res.status(200).json({ success: 1, message: "User found", user });
//     } catch (error) {
//         console.error(error); // Log any errors for debugging
//         res.status(500).json({ success: 0, message: "Internal Server Error" });
//     }
// });

// // Endpoint to get user data
// app.get("/user", fetchUser, async (req, res) => {
//     try {
//         const user = await Users.findById(req.user.user_id);
//         if (!user) {
//             return res.status(401).json({ success: 0, message: "Unauthorized" });
//         }
//         res.status(200).json({ success: 1, message: "User found", user });
//     } catch (error) {
//         console.error(error); // Log any errors for debugging
//         res.status(500).json({ success: 0, message: "Internal Server Error" });
//     }
// });

// // Your other routes...

// // Start the server
// app.listen(port, (error) => {
//     if (!error) {
//         console.log(`Server running at http://localhost:${port}`);
//     } else {
//         console.log("Error: " + error);
//     }
// });
























































































































































// const port = 4000;
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const dotenv = require('dotenv');
// const jwt = require("jsonwebtoken");
// const bcrypt = require('bcrypt');
// const multer = require("multer");
// const path = require("path");
// const cors = require("cors");
// const fs = require('fs');

// // Load environment variables
// dotenv.config();
// const secretKey = process.env.PRIVATE_KEY;

// // Debug: Verify secret key
// console.log('Loaded Secret Key:', secretKey);

// // Middleware setup
// app.use(express.json());
// app.use(cors());

// // MongoDB Connection
// mongoose.connect("mongodb+srv://sreerag-a-sasi:killer027on@cluster0.zw9vy.mongodb.net/e-commerce", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("Connected to MongoDB"))
// .catch((err) => console.error("MongoDB connection error:", err));

// // Import models
// const Users = require('./models/User');
// const Product = require('./models/Product');

// // Home route
// app.get("/", (req, res) => {
//     console.log("Home route accessed");
//     res.send("Express app is running");
// });

// // Storage configurations
// const productStorage = multer.diskStorage({
//     destination: './upload/images',
//     filename: (req, file, cb) => {
//         const filename = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`;
//         console.log("Saving product image:", filename);
//         cb(null, filename);
//     }
// });

// const profileStorage = multer.diskStorage({
//     destination: './profile/images',
//     filename: (req, file, cb) => {
//         const filename = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`;
//         console.log("Saving profile image:", filename);
//         cb(null, filename);
//     }
// });

// const uploadProduct = multer({ storage: productStorage });
// const uploadProfile = multer({ storage: profileStorage });

// // Static routes for images
// app.use('/images', express.static('upload/images'));
// app.use('/profile/images', express.static('profile/images'));

// // Middleware for user authentication
// const fetchUser = (req, res, next) => {
//     const token = req.header('auth-token');
//     if (!token) {
//         console.error("Access Denied: No token provided");
//         return res.status(401).json({ success: false, errors: "Access Denied" });
//     }
//     try {
//         const decoded = jwt.verify(token, secretKey);
//         req.user = decoded;
//         next();
//     } catch (error) {
//         console.error("Invalid Token:", error);
//         res.status(400).json({ success: false, errors: "Invalid Token" });
//     }
// };

// // File Upload Endpoints
// app.post("/upload", uploadProduct.array('product_images', 10), (req, res) => {
//     const imageUrls = req.files.map(file => `http://localhost:${port}/images/${file.filename}`);
//     console.log("Uploaded product images:", imageUrls);
//     res.json({ success: 1, image_urls: imageUrls });
// });

// app.post("/profile", uploadProfile.single('profile_image'), (req, res) => {
//     if (!req.file) {
//         console.error("No profile image uploaded");
//         return res.status(400).json({ success: 0, message: 'No file uploaded.' });
//     }

//     const imageUrl = `http://localhost:${port}/profile/images/${req.file.filename}`;
//     console.log("Uploaded profile image:", imageUrl);
//     res.json({ success: 1, image_url: imageUrl });
// });

// // Cart Endpoints
// app.post('/getcart', fetchUser, async (req, res) => {
//     try {
//         console.log("Fetching cart data for user:", req.user.user_id);
//         const userData = await Users.findOne({ _id: req.user.user_id });
//         if (!userData) {
//             console.error("User not found");
//             return res.status(404).json({ success: false, errors: "User not found" });
//         }
//         res.json(userData.cartData);
//     } catch (error) {
//         console.error("Error retrieving cart data:", error);
//         res.status(500).json({ success: false, errors: "Internal Server Error" });
//     }
// });

// app.post('/addtocart', fetchUser, async (req, res) => {
//     try {
//         const { itemId } = req.body;
//         console.log("Adding item to cart:", itemId);

//         let userData = await Users.findOne({ _id: req.user.user_id });
//         if (!userData.cartData) userData.cartData = {};
//         if (!userData.cartData[itemId]) userData.cartData[itemId] = 0;

//         userData.cartData[itemId] += 1;
//         await userData.save();

//         res.status(200).send("Item added to the cart");
//     } catch (error) {
//         console.error("Error adding item to the cart:", error);
//         res.status(500).send("Error adding item to the cart");
//     }
// });

// // Other cart endpoints: removefromcart, addfromcart, deletefromcart
// app.post('/removefromcart', fetchUser, async (req, res) => {
//     try {
//         const { itemId } = req.body;
//         console.log("Attempting to remove item from cart:", itemId);

//         const userData = await Users.findOne({ _id: req.user.user_id });
//         if (userData.cartData && userData.cartData[itemId] > 0) {
//             userData.cartData[itemId] -= 1;
//             if (userData.cartData[itemId] === 0) delete userData.cartData[itemId]; // Remove if quantity becomes zero
//             await userData.save();
//             console.log("Item successfully removed from cart");
//             res.status(200).send("Item removed from the cart");
//         } else {
//             console.error("Item not found in cart or quantity is already zero");
//             res.status(400).send({ errors: "Item not found in cart or quantity is already zero" });
//         }
//     } catch (error) {
//         console.error("Error removing item from cart:", error);
//         res.status(500).send("Error removing item from the cart");
//     }
// });

// app.post('/addfromcart', fetchUser, async (req, res) => {
//     try {
//         const { itemId } = req.body;
//         console.log("Incrementing quantity of item in cart:", itemId);

//         const userData = await Users.findOne({ _id: req.user.user_id });
//         if (userData.cartData && userData.cartData[itemId]) {
//             userData.cartData[itemId] += 1;
//             await userData.save();
//             console.log("Item quantity successfully incremented in cart");
//             res.status(200).send("Item quantity increased in the cart");
//         } else {
//             console.error("Item not found in cart");
//             res.status(400).send({ errors: "Item not found in cart" });
//         }
//     } catch (error) {
//         console.error("Error incrementing item quantity in cart:", error);
//         res.status(500).send("Error incrementing item quantity in the cart");
//     }
// });

// app.post('/deletefromcart', fetchUser, async (req, res) => {
//     try {
//         const { itemId } = req.body;
//         console.log("Attempting to delete item from cart:", itemId);

//         const userData = await Users.findOne({ _id: req.user.user_id });
//         if (userData.cartData && userData.cartData[itemId]) {
//             delete userData.cartData[itemId];
//             await userData.save();
//             console.log("Item successfully deleted from cart");
//             res.status(200).send("Item deleted from the cart");
//         } else {
//             console.error("Item not found in cart");
//             res.status(404).send({ errors: "Item not found in cart" });
//         }
//     } catch (error) {
//         console.error("Error deleting item from cart:", error);
//         res.status(500).send("Error deleting item from the cart");
//     }
// });

// // User Route
// app.get("/user", fetchUser, async (req, res) => {
//     try {
//         console.log("Fetching user data for:", req.user.user_id);
//         const user = await Users.findById(req.user.user_id);
//         if (!user) {
//             console.error("User not found");
//             return res.status(401).json({ success: 0, message: "Unauthorized" });
//         }
//         res.status(200).json({ success: 1, user });
//     } catch (error) {
//         console.error("Error fetching user data:", error);
//         res.status(500).json({ success: 0, message: "Internal Server Error" });
//     }
// });

// // Start the server
// app.listen(port, (error) => {
//     if (!error) {
//         console.log(`Server running at http://localhost:${port}`);
//     } else {
//         console.error("Error starting server:", error);
//     }
// });
