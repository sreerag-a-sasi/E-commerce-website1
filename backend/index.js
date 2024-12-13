// const port = 4000;
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path = require("path");
// const cors = require("cors");

// app.use(express.json());
// app.use(cors());

// //databse connection with mongodb
// mongoose.connect("mongodb+srv://sreerag-a-sasi:killer027on@cluster0.zw9vy.mongodb.net/e-commerce");

// //API creation
// app.get("/", (req, res) => {
//     res.send("express app is running")
// });

// //Image Storage Engine

// const storage = multer.diskStorage({
//     destination: './upload/images',
//     filename: (req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// });

// const upload = multer({ storage: storage });

// //creating upload endpoint for images
// app.use('/images', express.static('upload/images'));

// app.post("/upload", upload.single('product'), (req, res) => {
//     res.json({
//         success: 1,
//         image_url: `http://localhost:${port}/images/${req.file.filename}`
//     })
// });


// //Schema for Creating Products

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
//         type: String,
//         required: true,
//     },
//     category: {
//         type: String,
//         required: true,
//     },
//     new_price: {
//         type: String,
//         type: Number,
//     },
//     old_price: {
//         type: String,
//         type: Number,
//     },
//     date: {
//         type: Date,
//         default: Date.now,
//     },
//     available: {
//         type: String,
//         type: Number,
//         required:true
//     },
//     description:{
//         type: String,
//         required:true,
//     },
// });

// app.post('/addproduct', async (req, res) => {
//     let products = await Product.find({});
//     let id;
//     if (products.length > 0) {
//         let last_product_array = products.slice(-1);
//         let last_product = last_product_array[0];
//         id = last_product.id + 1;
//     }
//     else {
//         id = 1;
//     }
//     const product = new Product({
//         id: id,
//         name: req.body.name,
//         image: req.body.image,
//         category: req.body.category,
//         new_price: req.body.new_price,
//         old_price: req.body.old_price,
//         available:req.body.available,
//         description: req.body.description,
//     });
//     console.log(product);
//     await product.save();
//     console.log("Saved");
//     res.json({
//         success: true,
//         name: req.body.name,
//     });

// });

// //creating api for deleting products

// app.post('/removeproduct', async (req, res) => {
//     await Product.findOneAndDelete({ id: req.body.id });
//     let id = req.body.id;
//     console.log(`item with id number "${id}" has been removed`);
//     res.json({
//         success: true,
//         name: req.body.name,
//     })

// })


// app.get('/allproducts', async (req, res) => {
//     let products = await Product.find({});
//     console.log("All Products Fetched");
//     res.send(products);
// })

// //Schema creating for user model
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
//     cartData: {
//         type: Object,
//     },
//     date: {
//         type: Date,
//         default: Date.now,
//     }
// });

// //creating endpoint for registering the user
// app.post('/signup', async (req, res) => {
//     let check = await Users.findOne({ email: req.body.email });
//     if (check) {
//         return res.status(400).json({ success: false, errors: "existing user found with the same email id !" })
//     }
//     let cart = {};
//     for (let i = 0; i < 300; i++) {
//         cart[i] = 0;
//     }
//     const user = new Users({
//         name: req.body.username,
//         email: req.body.email,
//         password: req.body.password,
//         cartData: cart,
//     })

//     await user.save();

//     const data = {
//         user: {
//             id: user.id
//         }
//     }

//     const token = jwt.sign(data, 'secret_ecom');
//     res.json({ success: true, token })

// })

// //creating endpoint for user sign in
// app.post('/login', async (req, res) => {
//     let user = await Users.findOne({ email: req.body.email });
//     if (user) {
//         const passCompare = req.body.password === user.password;
//         if (passCompare) {
//             const data = {
//                 user: {
//                     id: user.id
//                 }
//             }
//             const token = jwt.sign(data, 'secret_ecom');
//             res.json({ success: true, token });
//         }
//         else {
//             res.json({ success: false, errors: "wrong password" })
//         }
//     }
//     else {
//         res.json({ success: false, errors: "Wrong Email Id" })
//     }
// })


// //creating endpoint for newcollection data
// app.get('/newcollections', async (req, res) => {
//     let products = await Product.find({});
//     let newcollection = products.slice(1).slice(-8);
//     console.log("New collections fetched: ", newcollection);
//     res.send(newcollection);

// })


// //creating endpoint for popular in womens category
// app.get('/popularinwomen', async (req, res) => {
//     let products = await Product.find({ category: "women" });
//     let popular_in_women = products.slice(0, 4);
//     console.log("popular in women fetched: ", popular_in_women);
//     res.send(popular_in_women);
// })


// //creating middle ware to fetch user
// const fetchUser = async (req, res, next) => {
//     const token = req.header('auth-token');
//     if (!token) {
//         res.status(401).send({ errors: "Please authenticate using a valid token" })
//     }
//     else {
//         try {
//             const data = jwt.verify(token, 'secret_ecom');
//             req.user = data.user;
//             next();
//         } catch (error) {
//             res.status(401).send({ errors: "Please authenticate using a valid token or try again later..." })
//         }
//     }
// }

// //creating endpoint for adding products in cart
// app.get('/addtocart', fetchUser, async (req, res) => {
//     console.log("item with the id : ",req.body.itemId," has been added to the cart");
//     let userData = await Users.findOne({ _id: req.user.id });
//     userData.cartData[req.body.itemId] += 1;
//     await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
//     res.send("item added to the cart")
// })

// //creating end point for removing item from cart
// app.post('/removefromcart', fetchUser, async (req, res) => {
//     if (userData.cartData[req.body.itemId] > 0) {
//         console.log("item with the id : ",req.body.itemId," has been removed from the cart");
//         let userData = await Users.findOne({ _id: req.user.id });
//         userData.cartData[req.body.itemId] -= 1;
//         await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
//         res.send("item removed from the cart")
//     }
// })

// //creating end point for saving and retrieving cartdata when there is a log out and re-login
// app.post('/getcart',fetchUser,async (req,res)=>{
//     console.log("retrieving cart data");
//     let userData = await Users.findOne({_id:req.user.id});
//     res.json(userData.cartData);
// })




// app.listen(port, (error) => {
//     if (!error) {
//         console.log(`server running at http://localhost:${port}`);
//     }
//     else {
//         console.log("Error : " + error);

//     }
// });





const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require('fs');

// Load environment variables
dotenv.config();
const secretKey = process.env.PRIVATE_KEY;

// Debug: Verify secret key
console.log('Loaded Secret Key:', secretKey);

// Middleware setup
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb+srv://sreerag-a-sasi:killer027on@cluster0.zw9vy.mongodb.net/e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Import models
const Users = require('./models/User');
const Product = require('./models/Product');

// Home route
app.get("/", (req, res) => {
    console.log("Home route accessed");
    res.send("Express app is running");
});

// Storage configurations
const productStorage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        const filename = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`;
        console.log("Saving product image:", filename);
        cb(null, filename);
    }
});

const profileStorage = multer.diskStorage({
    destination: './profile/images',
    filename: (req, file, cb) => {
        const filename = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`;
        console.log("Saving profile image:", filename);
        cb(null, filename);
    }
});

const uploadProduct = multer({ storage: productStorage });
const uploadProfile = multer({ storage: profileStorage });

// Static routes for images
app.use('/images', express.static('upload/images'));
app.use('/profile/images', express.static('profile/images'));

// Middleware for user authentication
const fetchUser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        console.error("Access Denied: No token provided");
        return res.status(401).json({ success: false, errors: "Access Denied" });
    }
    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Invalid Token:", error);
        res.status(400).json({ success: false, errors: "Invalid Token" });
    }
};

// File Upload Endpoints
app.post("/upload", uploadProduct.array('product_images', 10), (req, res) => {
    const imageUrls = req.files.map(file => `http://localhost:${port}/images/${file.filename}`);
    console.log("Uploaded product images:", imageUrls);
    res.json({ success: 1, image_urls: imageUrls });
});


app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
        available: req.body.available,
        description: req.body.description,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name,
    });

});

//creating api for deleting products

app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    let id = req.body.id;
    console.log(`item with id number "${id}" has been removed`);
    res.json({
        success: true,
        name: req.body.name,
    })

})

app.post("/profile", uploadProfile.single('profile_image'), (req, res) => {
    if (!req.file) {
        console.error("No profile image uploaded");
        return res.status(400).json({ success: 0, message: 'No file uploaded.' });
    }

    const imageUrl = `http://localhost:${port}/profile/images/${req.file.filename}`;
    console.log("Uploaded profile image:", imageUrl);
    res.json({ success: 1, image_url: imageUrl });
});

// Signup route
app.post('/signup', async (req, res) => {
    try {
        // Check if user already exists
        let check = await Users.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({ success: false, errors: "An existing user found with the same email ID!" });
        }

        // Initialize cart data
        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }
        let wishlist = {};
        for (let i = 0; i < 300; i++) {
            wishlist[i] = 0;
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create new user
        const user = new Users({
            name: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            phone: req.body.phone,
            image: req.body.image,
            cartData: cart,
            Wishlist: wishlist,
        });

        // Save user to database
        await user.save();

        // Generate JWT token
        const token = jwt.sign({ user_id: user._id }, secretKey, { expiresIn: "10d" });

        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, errors: "Internal Server Error" });
    }
});


app.post('/login', async (req, res) => {
    try {
        let user = await Users.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ success: false, errors: "Wrong Email Id" });
        }

        const passCompare = bcrypt.compare(req.body.password, user.password);
        if (!passCompare) {
            return res.status(400).json({ success: false, errors: "Wrong password" });
        }

        const data = {
            user: {
                id: user.id
            }
        };

        // let token = jwt.sign({ user_id: user._id }, process.env.PRIVATE_KEY, { expiresIn: "10d" }); // Optionally, add expiration
        const token = jwt.sign({ user_id: user._id }, secretKey, { expiresIn: "10d" });
        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, errors: "Internal Server Error" });
    }
});


app.get('/allproducts', async (req, res) => {
    let product = await Product.find({});
    console.log("All Products Fetched (from index.js backend)");
    res.send(product);
});

app.get('/newcollections', async (req, res) => {
    try {
        // Fetch the newest 8 products, sorted by descending _id (assumes _id corresponds to creation time).
        const products = await Product.find({}).sort({ _id: -1 }).limit(8);
        // console.log("Fetched new collections:", products.map(p => p._id)); // Log only product IDs for brevity.
        console.log("Number of products in new collections :", products.length);
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching new collections:", error);
        res.status(500).json({ success: false, message: 'An error occurred while fetching new collections' });
    }
});

app.get('/popularinwomen', async (req, res) => {
    try {
        // Fetch products in the women's category and take the first 4 for popularity.
        const products = await Product.find({ category: "women" }).limit(4);
        // console.log("Fetched popular products in women's category:", products.map(p => p._id)); // Log product IDs.
        console.log("Number of products in popular in wome :", products.length);
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching popular products in women's category:", error);
        res.status(500).json({ success: false, message: 'An error occurred while fetching popular products in women\'s category' });
    }
});

app.get('/relatedproducts', async (req, res) => {
    try {
        const { category } = req.query; // Use query parameters to pass category for related products.
        if (!category) {
            console.error("Category not provided for related products");
            return res.status(400).json({ success: false, message: "Category is required to fetch related products" });
        }

        // Fetch related products in the same category and limit to 4.
        const relatedProducts = await Product.find({ category }).limit(4);
        console.log(`Fetched related products for category "${category}":`, relatedProducts.length);
        res.status(200).json(relatedProducts);
    } catch (error) {
        console.error("Error fetching related products:", error);
        res.status(500).json({ success: false, message: 'An error occurred while fetching related products' });
    }
});


// Cart Endpoints
app.post('/getcart', fetchUser, async (req, res) => {
    try {
        console.log("Fetching cart data for user:", req.user.user_id);

        // Fetch user data from the database
        const userData = await Users.findOne({ _id: req.user.user_id });

        // Check if the user exists
        if (!userData) {
            console.error("User not found");
            return res.status(404).json({ success: false, errors: "User not found" });
        }

        // Log the fetched user data
        console.log("Fetched user data for :", userData.name, " email : ", userData.email);

        // Check if the cartData exists and is not empty
        if (!userData.cartData || userData.cartData.length === 0) {
            console.log("Cart is empty for user:", req.user.user_id);
            return res.status(200).json({ success: true, cartData: [] });
        }

        // Send the cart data
        res.json(userData.cartData);
    } catch (error) {
        console.error("Error retrieving cart data:", error);
        res.status(500).json({ success: false, errors: "Internal Server Error" });
    }
});


app.post('/getwishlist', fetchUser, async (req, res) => {
    try {
        console.log("Fetching cart data for user:", req.user.user_id);

        // Fetch user data from the database
        const userData = await Users.findOne({ _id: req.user.user_id });

        // Check if the user exists
        if (!userData) {
            console.error("User not found");
            return res.status(404).json({ success: false, errors: "User not found" });
        }

        // Log the fetched user data
        console.log("Fetched user data for :", userData.name, " email : ", userData.email, userData.Wishlist);

        // Check if the cartData exists and is not empty
        if (!userData.Wishlist || userData.Wishlist.length === 0) {
            console.log("Wishlist is empty for user:", req.user.user_id);
            return res.status(200).json({ success: true, Wishlist: [] });
        }

        // Send the cart data
        res.json(userData.Wishlist);
    } catch (error) {
        console.error("Error retrieving wishlist data:", error);
        res.status(500).json({ success: false, errors: "Internal Server Error" });
    }
});

app.post('/addtocart', fetchUser, async (req, res) => {
    try {
        const { itemId } = req.body;

        if (!itemId) {
            return res.status(400).json({ message: "Invalid item ID" });
        }

        console.log("Adding item to cart:", itemId);

        const updatedUser = await Users.findByIdAndUpdate(
            req.user.user_id,
            { $inc: { [`cartData.${itemId}`]: 1 } },
            { upsert: true, new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "Item added to the cart",
            cartData: updatedUser.cartData,
        });
    } catch (error) {
        console.error("Error adding item to the cart:", error);
        res.status(500).json({
            message: "Error adding item to the cart",
            error: error.message,
        });
    }
});


app.post('/addtowishlist', fetchUser, async (req, res) => {
    try {
        const { itemId } = req.body;

        if (!itemId) {
            return res.status(400).json({ message: "Invalid item ID" });
        }

        console.log("Adding item to wishlist:", itemId);

        const updatedUser = await Users.findByIdAndUpdate(
            req.user.user_id,
            { $addToSet: { Wishlist: itemId } }, // Ensure item is added only once
            { upsert: true, new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "Item added to the wishlist",
            Wishlist: updatedUser.Wishlist,
        });
    } catch (error) {
        console.error("Error adding item to the wishlist:", error);
        res.status(500).json({
            message: "Error adding item to the wishlist",
            error: error.message,
        });
    }
});


app.post('/deletefromwishlist', fetchUser, async (req, res) => {
    try {
        const { itemId } = req.body;
        console.log("Attempting to delete item from wishlist:", itemId);

        const userData = await Users.findOne({ _id: req.user.user_id });
        if (userData.Wishlist && userData.Wishlist[itemId]) {
            delete userData.Wishlist[itemId];
            await userData.save();
            console.log("Item successfully deleted from wishlist");
            res.status(200).send("Item deleted from the wishlist");
        } else {
            console.error("Item not found in cart");
            res.status(404).send({ errors: "Item not found in wishlist" });
        }
    } catch (error) {
        console.error("Error deleting item from wishlist:", error);
        res.status(500).send("Error deleting item from the wishlist");
    }
});



// Other cart endpoints: removefromcart, addfromcart, deletefromcart
app.post('/removefromcart', fetchUser, async (req, res) => {
    try {
        const { itemId } = req.body;
        console.log("Attempting to remove item from cart:", itemId);

        const userData = await Users.findOne({ _id: req.user.user_id });
        if (userData.cartData && userData.cartData[itemId] > 0) {
            userData.cartData[itemId] -= 1;
            if (userData.cartData[itemId] === 0) delete userData.cartData[itemId]; // Remove if quantity becomes zero
            await userData.save();
            console.log("Item successfully removed from cart");
            res.status(200).send("Item removed from the cart");
        } else {
            console.error("Item not found in cart or quantity is already zero");
            res.status(400).send({ errors: "Item not found in cart or quantity is already zero" });
        }
    } catch (error) {
        console.error("Error removing item from cart:", error);
        res.status(500).send("Error removing item from the cart");
    }
});

app.post('/addfromcart', fetchUser, async (req, res) => {
    try {
        const { itemId } = req.body;
        console.log("Incrementing quantity of item in cart:", itemId);

        const userData = await Users.findOne({ _id: req.user.user_id });
        if (userData.cartData && userData.cartData[itemId]) {
            userData.cartData[itemId] += 1;
            await userData.save();
            console.log("Item quantity successfully incremented in cart");
            res.status(200).send("Item quantity increased in the cart");
        } else {
            console.error("Item not found in cart");
            res.status(400).send({ errors: "Item not found in cart" });
        }
    } catch (error) {
        console.error("Error incrementing item quantity in cart:", error);
        res.status(500).send("Error incrementing item quantity in the cart");
    }
});

app.post('/deletefromcart', fetchUser, async (req, res) => {
    try {
        const { itemId } = req.body;
        console.log("Attempting to delete item from cart:", itemId);

        const userData = await Users.findOne({ _id: req.user.user_id });
        if (userData.cartData && userData.cartData[itemId]) {
            delete userData.cartData[itemId];
            await userData.save();
            console.log("Item successfully deleted from cart");
            res.status(200).send("Item deleted from the cart");
        } else {
            console.error("Item not found in cart");
            res.status(404).send({ errors: "Item not found in cart" });
        }
    } catch (error) {
        console.error("Error deleting item from cart:", error);
        res.status(500).send("Error deleting item from the cart");
    }
});

// User Route
app.get("/user", fetchUser, async (req, res) => {
    try {
        console.log("Fetching user data for:", req.user.user_id);
        const user = await Users.findById(req.user.user_id);
        if (!user) {
            console.error("User not found");
            return res.status(401).json({ success: 0, message: "Unauthorized" });
        }
        res.status(200).json({ success: 1, user });
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ success: 0, message: "Internal Server Error" });
    }
});

// Start the server
app.listen(port, (error) => {
    if (!error) {
        console.log(`Server running at http://localhost:${port}`);
    } else {
        console.error("Error starting server:", error);
    }
});
