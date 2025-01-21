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
const new_user_template = require("./utils/New_user").newuser;
const blocked_user_template = require("./utils/Blocked_user").blockeduser;
const Unblocked_user_template = require("./utils/Unblocked_user").Unblockeduser;
const blocked_product_template = require("./utils/Blocked_product").blockedproduct;
const unblocked_product_template = require("./utils/Unblocked_product").Unblockedproduct;
const outofstock_product_template = require("./utils/Outofstock_product").outofstockproducts;
const sendEmail = require("./utils/send-email").sendEmail;

// Load environment variables
dotenv.config();
const secretKey = process.env.PRIVATE_KEY;

// Debug: Verify secret key
//console.log('Loaded Secret Key:', secretKey);

// Middleware setup
app.use(express.json());
app.use(cors());

// MongoDB Connection
// mongoose.connect("mongodb+srv://sreerag-a-sasi:killer027on@cluster0.zw9vy.mongodb.net/e-commerce", {
mongoose.connect("mongodb://127.0.0.1:27017/e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Import models
const Users = require('./db/models/User');
const Product = require('./db/models/Product');
const User_type = require('./db/models/user_types');
const OrderHistory = require('./db/models/orderHistory');
const Review = require('./db/models/review');
const Address = require('./db/models/Adress');


app.get('/usertypes', async (req, res) => {
    try {
        const userTypes = await User_type.find({});
        res.json(userTypes);
    } catch (error) {
        console.error("Error fetching user types:", error);
        res.status(500).json({ message: "Error fetching user types" });
    }
});


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
//         available: req.body.available,
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

// app.post('/addproduct', async (req, res) => {
//     let products = await Product.find({});
//     let id;
//     if (products.length > 0) {
//         let last_product_array = products.slice(-1);
//         let last_product = last_product_array[0];
//         id = last_product.id + 1;
//     } else {
//         id = 1;
//     }
//     const product = new Product({
//         id: id,
//         name: req.body.name,
//         image: req.body.image,
//         category: req.body.category,
//         new_price: req.body.new_price,
//         old_price: req.body.old_price,
//         available: req.body.available,
//         description: req.body.description,
//         added_by: req.body.added_by, // Store user ID
//         seller: req.body.seller, // Store seller name
//     });
//     console.log(product);
//     await product.save();
//     console.log("Saved");
//     res.json({
//         success: true,
//         name: req.body.name,
//     });
// });

app.post('/addproduct', async (req, res) => {
    console.log(req.body); // Log for verification
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
        S: req.body.S,
        M: req.body.M,
        L: req.body.L,
        XL: req.body.XL,
        XXL: req.body.XXL,
        available: req.body.available,
        description: req.body.description,
        added_by: req.body.added_by,
        seller: req.body.seller,
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
        let support = "sreeragakhd2002@gmail.com";
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
            user_type: req.body.user_type
        });

        // Updated email regex for stricter validation
        const emailRegex = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;
        if (!emailRegex.test(req.body.email)) {
            console.error("Invalid email ID:", req.body.email);
            return res.status(400).send({ message: "Invalid email ID" });
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const password = req.body.password;

        if (!passwordRegex.test(password)) {
            console.error("Invalid password:", password);
            return res.status(400).send({ message: "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character." });
        }

        // Save user to database
        await user.save();

        // Generate JWT token
        const token = jwt.sign({ user_id: user._id }, secretKey, { expiresIn: "10d" });

        res.json({ success: true, token });

        if (user) {
            console.log("New user created:", user);
            let email_template = await new_user_template(user.name, user.email, req.body.password, support);
            await sendEmail(user.email, "New user created...", email_template);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, errors: "Internal Server Error" });
    }
});

// app.post('/login', async (req, res) => {
//     try {
//         let user = await Users.findOne({ email: req.body.email });
//         if (!user) {
//             return res.status(400).json({ success: false, errors: "Wrong Email Id" });
//         }

//         const passCompare = await bcrypt.compare(req.body.password, user.password); // Add await here
//         if (!passCompare) {
//             return res.status(400).json({ success: false, errors: "Wrong password" });
//         }

//         const token = jwt.sign({ user_id: user._id }, secretKey, { expiresIn: "10d" });

//         // Include user details in the response
//         res.json({ success: true, token, user });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, errors: "Internal Server Error" });
//     }
// });

app.post('/login', async (req, res) => {
    try {
        let user = await Users.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ success: false, errors: "Wrong Email Id" });
        }

        const passCompare = await bcrypt.compare(req.body.password, user.password);
        if (!passCompare) {
            return res.status(400).json({ success: false, errors: "Wrong password" });
        }

        // Check if user is blocked
        if (user.blocked) {
            return res.status(403).json({ success: false, errors: "You are blocked by Admin" });
        }

        const token = jwt.sign({ user_id: user._id }, secretKey, { expiresIn: "10d" });

        // Include user details in the response
        res.json({ success: true, token, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, errors: "Internal Server Error" });
    }
});

app.post('/toggleblockuser', async (req, res) => {
    try {
        const { id, blocked } = req.body;
        let support = "sreeragakhd2002@gmail.com";
        let user = await Users.findById(id);
        if (user) {
            console.log("user name : ", user.username);
            console.log("user email : ", user.email);
            user.blocked = blocked;
            await user.save();
            res.json({ success: true, message: `User ${blocked ? 'blocked' : 'unblocked'} successfully!` });
            if (user.blocked = blocked) {
                let email_template = await blocked_user_template(user.name, user.email, support);
                await sendEmail(user.email, "Your Account Has Been Blocked!!!", email_template);
            } else {
                let email_template = await Unblocked_user_template(user.name, user.email, support);
                await sendEmail(user.email, "Your Account Has Been Unblocked!!!", email_template);
            }
        } else {
            res.status(404).json({ success: false, message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.post('/toggleblockproduct', async (req, res) => {
    try {
        const { id, blocked } = req.body;
        let support = "sreeragakhd2002@gmail.com";
        let product = await Product.findById(id);
        let userId = product.added_by;

        const seller = await Users.findById(userId);
        //console.log("user from block product:", seller);


        if (product) {
            // console.log("Product name:", product.name);
            // console.log("Product ID:", product._id);
            product.blocked = blocked;
            await product.save();
            res.json({ success: true, message: `Product ${blocked ? 'blocked' : 'unblocked'} successfully!` });


            let email_template;
            const sellerName = seller?.name || "sir";
            const sellerEmail = seller?.email || "sreeragakhd2002@gmail.com";
            let productname = product.name;
            let productid = product.id;
            if (blocked) {
                email_template = await blocked_product_template(sellerName, sellerEmail, productname, productid, support);
                await sendEmail(sellerEmail, "Product Blocked Notification", email_template);
            } else {
                email_template = await unblocked_product_template(sellerName, sellerEmail, productname, productid, support);
                await sendEmail(sellerEmail, "Product Unblocked Notification", email_template);
            }
        } else {
            res.status(404).json({ success: false, message: 'Product not found' });
        }
    } catch (error) {
        console.error("Error blocking/unblocking product:", error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.post('/updateuser', async (req, res) => {
    try {
        const token = req.header('auth-token');
        if (!token) {
            return res.status(401).json({ success: false, message: "Access Denied" });
        }

        let userId;
        try {
            const verified = jwt.verify(token, secretKey);
            userId = verified.user_id;
        } catch (error) {
            return res.status(400).json({ success: false, message: "Invalid Token" });
        }

        const { name, password, phone, image } = req.body;

        // Hash the password if it exists in the request
        let hashedPassword;
        if (password) {
            hashedPassword = await bcrypt.hash(password, 10);
        }

        // Find and update the user details
        const user = await Users.findById(userId);
        if (user) {
            user.name = name || user.name;
            user.password = hashedPassword || user.password;
            user.phone = phone || user.phone;
            user.image = image || user.image;
            await user.save();

            res.json({ success: true, message: "Profile updated successfully", user });
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
})

// app.get('/allproducts', async (req, res) => {
//     let product = await Product.find({});
//     console.log("All Products Fetched (from index.js backend)");
//     res.send(product);
// });

// app.get('/allproducts', async (req, res) => {

//     try {
//         const token = req.header('auth-token');
//         if (!token) {
//             return res.status(401).json({ success: false, message: 'Access Denied' });
//         }

//         let userId;
//         try {
//             const verified = jwt.verify(token, secretKey);
//             userId = verified.user_id;
//         } catch (error) {
//             return res.status(400).json({ success: false, message: 'Invalid Token' });
//         }

//         const user = await Users.findById(userId);
//         const userType = user?.user_type?.toString();

//         let product;
//         if (userType === '676c07e68c1c6815439b181c') {
//             product = await Product.find({});
//         } else {
//             product = await Product.find({
//                 $or: [
//                     { blocked: false },
//                     { blocked: { $exists: false } },
//                 ],
//             });
//         }

//         res.send(product);

//         const outOfStockProducts = product.filter(p => p.available === 0);
//         let support = "sreeragakhd2002@gmail.com";
//         const adminEmail = "sreeragakhd2002@gmail.com"; // Replace with the actual admin email

//         outOfStockProducts.forEach(async (product) => {
//             console.log("Out of Stock Product:", product);

//             let productid = product.id;
//             let url = `http://localhost:3000/product/${productid}`;

//             const seller = await Users.findById(product.added_by);
//             const recipientEmail = seller ? seller.email : adminEmail;

//             console.log(`Sending email to: ${recipientEmail}`);
//             const email_template = await outofstock_product_template(seller?.name || 'Admin', recipientEmail, product.name, product._id, url, support);
//             const emailResult = await sendEmail(recipientEmail, "Product Out of Stock Notification", email_template);
//             if (emailResult.success) {
//                 console.log(`Email sent successfully to ${recipientEmail}`);
//                 return;
//             } else {
//                 console.log(`Failed to send email to ${recipientEmail}`);
//             }
//         });
//     } catch (error) {
//         console.error("Error fetching products:", error);
//         res.status(500).json({ success: false, message: 'Server error' });
//     }
// });

// app.get('/allproducts', async (req, res) => {
//     try {
//         const token = req.header('auth-token');

//         let products;

//         if (token) {
//             // If token is provided, verify it
//             let userId;
//             try {
//                 const verified = jwt.verify(token, secretKey);
//                 userId = verified.user_id;
//             } catch (error) {
//                 return res.status(400).json({ success: false, message: 'Invalid Token' });
//             }

//             const user = await Users.findById(userId);
//             const userType = user?.user_type?.toString();

//             if (userType === '676c07e68c1c6815439b181c') {
//                 // Admin can view all products
//                 products = await Product.find({});
//             } else {
//                 // Non-admin users only see unblocked products
//                 products = await Product.find({ blocked: { $ne: true } });
//             }
//         } else {
//             // No token provided; show only unblocked products
//             products = await Product.find({ blocked: { $ne: true } });
//         }

//         res.json(products);

//         // Handle out-of-stock products for authenticated users with token
//         if (token) {
//             const outOfStockProducts = products.filter(p => p.available === 0);
//             let support = "sreeragakhd2002@gmail.com";
//             const adminEmail = "sreeragakhd2002@gmail.com";

//             outOfStockProducts.forEach(async (product) => {
//                 console.log("Out of Stock Product:", product);

//                 let productid = product.id;
//                 let url = `http://localhost:3000/product/${productid}`;

//                 const seller = await Users.findById(product.added_by);
//                 const recipientEmail = seller ? seller.email : adminEmail;

//                 console.log(`Sending email to: ${recipientEmail}`);
//                 const email_template = await outofstock_product_template(seller?.name || 'Admin', recipientEmail, product.name, product.id, url, support);
//                 const emailResult = await sendEmail(recipientEmail, "Product Out of Stock Notification", email_template);
//                 console.log('Email Result:', emailResult);

//                 if (emailResult.success) {
//                     console.log(`Email sent successfully to ${recipientEmail}`);
//                     await Product.findByIdAndUpdate(product._id, { message_sent: true });
//                 } else {
//                     console.error(`Failed to send email to ${recipientEmail}. Error: ${emailResult.error || 'Unknown error'}`);
//                 }

//             });
//         }
//     } catch (error) {
//         console.error("Error fetching products:", error);
//         res.status(500).json({ success: false, message: 'Server error' });
//     }
// });

app.get('/allproducts', async (req, res) => {
    try {
        const token = req.header('auth-token');
        let products;

        if (token) {
            // If token is provided, verify it
            let userId;
            try {
                const verified = jwt.verify(token, secretKey);
                userId = verified.user_id;
            } catch (error) {
                return res.status(400).json({ success: false, message: 'Invalid Token' });
            }

            const user = await Users.findById(userId);
            const userType = user?.user_type?.toString();

            if (userType === '676c07e68c1c6815439b181c') {
                // Admin can view all products
                products = await Product.find({});
            } else {
                // Non-admin users only see unblocked products
                products = await Product.find({ blocked: { $ne: true } });
            }
        } else {
            // No token provided; show only unblocked products
            products = await Product.find({ blocked: { $ne: true } });
        }
        res.json(products);

        // Handle out-of-stock products for authenticated users with token
        if (token) {
            const outOfStockProducts = products.filter(p => p.available === 0 && !p.message_sent);
            const support = "sreeragakhd2002@gmail.com";
            const adminEmail = "sreeragakhd2002@gmail.com";

            // Use a `for...of` loop to handle asynchronous operations
            for (const product of outOfStockProducts) {
                try {
                    console.log("Out of Stock Product:", product);

                    const productId = product.id;
                    const url = `http://localhost:3000/product/${productId}`;
                    const seller = await Users.findById(product.added_by);
                    const recipientEmail = seller ? seller.email : adminEmail;

                    console.log(`Sending email to: ${recipientEmail}`);
                    const email_template = await outofstock_product_template(
                        seller?.name || 'Admin',
                        recipientEmail,
                        product.name,
                        product.id,
                        url,
                        support
                    );

                    const emailResult = await sendEmail(
                        recipientEmail,
                        "Product Out of Stock Notification",
                        email_template
                    );
                    console.log('Email Result:', emailResult);

                    if (emailResult.success) {
                        console.log(`Email sent successfully to ${recipientEmail}`);
                        await Product.findByIdAndUpdate(product._id, { message_sent: true });
                    } else {
                        console.error(
                            `Failed to send email to ${recipientEmail}. Error: ${emailResult.error || 'Unknown error'}`
                        );
                    }
                } catch (emailError) {
                    console.error(`Error processing product ${product.name}:`, emailError);
                }
            }
        }
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.get('/allusers', async (req, res) => {
    try {
        const users = await Users.find().populate('user_type');  // Populate 'user_type'
        //console.log('Fetched Users:', users);
        res.json(users);  // Send the users to the front-end
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err });
    }
});

// app.post('/removeuser', async (req, res) => {
//     try {
//         const { id } = req.body;
//         const result = await Users.deleteOne({ _id: id });

//         if (result.deletedCount > 0) {
//             console.log(`User with ID ${id} removed successfully`);
//             res.status(200).send({ success: true, message: "User removed successfully" });
//         } else {
//             console.log(`User with ID ${id} not found`);
//             res.status(404).send({ success: false, message: "User not found" });
//         }
//     } catch (error) {
//         console.error("Error removing user:", error);
//         res.status(500).send({ success: false, message: "Error removing user" });
//     }
// });

app.post('/removeuser', async (req, res) => {
    try {
        const { id } = req.body;

        // Check if the user is an admin
        const user = await Users.findById(id);
        if (user.user_type._id === '676c07e68c1c6815439b181c') {
            console.log(`Attempt to remove admin user ID ${id} blocked`);
            return res.status(403).send({ success: false, message: "Cannot delete admin user" });
        }

        const result = await Users.deleteOne({ _id: id });

        if (result.deletedCount > 0) {
            console.log(`User with ID ${id} removed successfully`);
            res.status(200).send({ success: true, message: "User removed successfully" });
        } else {
            console.log(`User with ID ${id} not found`);
            res.status(404).send({ success: false, message: "User not found" });
        }
    } catch (error) {
        console.error("Error removing user:", error);
        res.status(500).send({ success: false, message: "Error removing user" });
    }
});

// app.get('/newcollections', async (req, res) => {
//     try {
//         // Fetch the newest 8 products, sorted by descending _id (assumes _id corresponds to creation time).
//         const products = await Product.find({}).sort({ _id: -1 }).limit(8);
//         // console.log("Fetched new collections:", products.map(p => p._id)); // Log only product IDs for brevity.
//         console.log("Number of products in new collections :", products.length);
//         res.status(200).json(products);
//     } catch (error) {
//         console.error("Error fetching new collections:", error);
//         res.status(500).json({ success: false, message: 'An error occurred while fetching new collections' });
//     }
// });

// app.get('/popularinwomen', async (req, res) => {
//     try {
//         // Fetch products in the women's category and take the first 4 for popularity.
//         const products = await Product.find({ category: "women" }).limit(4);
//         // console.log("Fetched popular products in women's category:", products.map(p => p._id)); // Log product IDs.
//         console.log("Number of products in popular in wome :", products.length);
//         res.status(200).json(products);
//     } catch (error) {
//         console.error("Error fetching popular products in women's category:", error);
//         res.status(500).json({ success: false, message: 'An error occurred while fetching popular products in women\'s category' });
//     }
// });

// app.get('/relatedproducts', async (req, res) => {
//     try {
//         const { category } = req.query; // Use query parameters to pass category for related products.
//         if (!category) {
//             console.error("Category not provided for related products");
//             return res.status(400).json({ success: false, message: "Category is required to fetch related products" });
//         }

//         // Fetch related products in the same category and limit to 4.
//         const relatedProducts = await Product.find({ category }).limit(4);
//         console.log(`Fetched related products for category "${category}":`, relatedProducts.length);
//         res.status(200).json(relatedProducts);
//     } catch (error) {
//         console.error("Error fetching related products:", error);
//         res.status(500).json({ success: false, message: 'An error occurred while fetching related products' });
//     }
// });


// Cart Endpoints

app.get('/newcollections', async (req, res) => {
    try {
        // Fetch the newest 8 products, excluding blocked ones
        const products = await Product.find({ blocked: { $ne: true } })
            .sort({ _id: -1 })
            .limit(8);

        console.log("Number of products in new collections:", products.length);
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching new collections:", error);
        res.status(500).json({ success: false, message: 'An error occurred while fetching new collections' });
    }
});

app.get('/popularinwomen', async (req, res) => {
    try {
        // Fetch popular products in the "women" category, excluding blocked ones
        const products = await Product.find({ category: "women", blocked: { $ne: true } }).limit(4);

        console.log("Number of products in popular in women:", products.length);
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching popular products in women's category:", error);
        res.status(500).json({ success: false, message: 'An error occurred while fetching popular products in women\'s category' });
    }
});

app.get('/relatedproducts', async (req, res) => {
    try {
        const { category } = req.query; // Use query parameters to pass category for related products
        if (!category) {
            console.error("Category not provided for related products");
            return res.status(400).json({ success: false, message: "Category is required to fetch related products" });
        }

        // Fetch related products in the given category, excluding blocked ones
        const relatedProducts = await Product.find({ category, blocked: { $ne: true } }).limit(4);

        console.log(`Fetched related products for category "${category}":`, relatedProducts.length);
        res.status(200).json(relatedProducts);
    } catch (error) {
        console.error("Error fetching related products:", error);
        res.status(500).json({ success: false, message: 'An error occurred while fetching related products' });
    }
});

app.get('/getcart', fetchUser, async (req, res) => {
    try {
        const userData = await Users.findById(req.user.user_id);

        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ cartData: userData.cartData });
    } catch (error) {
        console.error("Error fetching cart data:", error);
        res.status(500).json({ message: "Error fetching cart data" });
    }
});

app.post('/getwishlist', fetchUser, async (req, res) => {
    try {
        console.log("Fetching wishlist data for user:", req.user.user_id);

        // Fetch user data from the database
        const userData = await Users.findOne({ _id: req.user.user_id });

        // Check if the user exists
        if (!userData) {
            console.error("User not found");
            return res.status(404).json({ success: false, errors: "User not found" });
        }

        // Log the fetched user data
        // console.log("Fetched user data for:", userData.name, "email:", userData.email, userData.Wishlist);

        // Check if the Wishlist exists and is not empty
        if (!userData.Wishlist || userData.Wishlist.length === 0) {
            console.log("Wishlist is empty for user:", req.user.user_id);
            return res.status(200).json({ success: true, Wishlist: [] });
        }

        // Send the wishlist data
        res.status(200).json({ success: true, Wishlist: userData.Wishlist });
    } catch (error) {
        console.error("Error retrieving wishlist data:", error);
        res.status(500).json({ success: false, errors: "Internal Server Error" });
    }
});


// app.post('/addtocart', fetchUser, async (req, res) => {
//     try {
//         const { itemId } = req.body;

//         if (!itemId) {
//             return res.status(400).json({ message: "Invalid item ID" });
//         }

//         //console.log("Adding item to cart:", itemId);

//         const updatedUser = await Users.findByIdAndUpdate(
//             req.user.user_id,
//             { $inc: { [`cartData.${itemId}`]: 1 } },
//             { upsert: true, new: true }
//         );

//         if (!updatedUser) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         res.status(200).json({
//             message: "Item added to the cart",
//             cartData: updatedUser.cartData,
//         });
//     } catch (error) {
//         console.error("Error adding item to the cart:", error);
//         res.status(500).json({
//             message: "Error adding item to the cart",
//             error: error.message,
//         });
//     }
// });

// Add to Cart Endpoint
app.post('/addtocart', fetchUser, async (req, res) => {
    try {
        const { id, quantity, size, price, _id } = req.body;

        if (!id || !quantity || !size || !price) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Validate the size
        const validSizes = ['S', 'M', 'L', 'XL', 'XXL'];
        if (!validSizes.includes(size)) {
            return res.status(400).json({ message: "Invalid size" });
        }

        // Find the product by productId
        const product = await Product.findOne({ id: id });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Check if the selected size is available
        const sizeAvailability = product[size]; // This will refer to the size like 'S', 'M', 'L', etc.

        if (!sizeAvailability || sizeAvailability <= 0) {
            return res.status(400).json({ message: `Size ${size} is not available` });
        }

        // Check if the quantity requested is available
        if (quantity > sizeAvailability) {
            return res.status(400).json({ message: "Insufficient stock for the selected size" });
        }

        // Find the user and check if the product with the same size is already in the cart
        const user = await Users.findById(req.user.user_id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if the product with the same id and size is already in the user's cart
        const existingItem = user.cartData.find(
            (item) => item.id === id && item.size === size
        );

        if (existingItem) {
            return res.status(400).json({ message: "The product is already in the cart" });
        }

        // Add the new item to the user's cart
        const updatedUser = await Users.findByIdAndUpdate(
            req.user.user_id,
            {
                $push: {
                    cartData: {
                        _id,
                        id,
                        quantity,
                        size,
                        price,
                    },
                },
            },
            { upsert: true, new: true }
        );

        // Decrease product stock for the selected size
        product[size] -= quantity; // Decrease the stock for the specific size
        await product.save();

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


app.post('/checkwishlist', fetchUser, async (req, res) => {
    try {
        const { itemId } = req.body;

        if (!itemId) {
            return res.status(400).json({ message: "Invalid item ID" });
        }

        const user = await Users.findById(req.user.user_id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Ensure Wishlist is always initialized as an array
        const isInWishlist = Array.isArray(user.Wishlist) && user.Wishlist.includes(itemId);

        res.status(200).json({
            isInWishlist
        });
    } catch (error) {
        console.error("Error checking wishlist:", error);
        res.status(500).json({
            message: "Error checking wishlist",
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


// app.post('/deletefromwishlist', fetchUser, async (req, res) => {
//     try {
//         const { itemId } = req.body;
//         console.log("Attempting to delete item from wishlist:", itemId);

//         const userData = await Users.findOne({ _id: req.user.user_id });
//         if (userData.Wishlist && userData.Wishlist.includes(itemId)) {
//             userData.Wishlist = userData.Wishlist.filter(id => id !== itemId);
//             await userData.save();
//             console.log("Item successfully deleted from wishlist");
//             res.status(200).json({ message: "Item deleted from the wishlist" });
//         } else {
//             console.error("Item not found in wishlist");
//             res.status(404).json({ errors: "Item not found in wishlist" });
//         }
//     } catch (error) {
//         console.error("Error deleting item from wishlist:", error);
//         res.status(500).json({ errors: "Error deleting item from the wishlist" });
//     }
// });

// Other cart endpoints: removefromcart, addfromcart, deletefromcart

app.post('/deletefromwishlist', fetchUser, async (req, res) => {
    try {
        const { itemId } = req.body;

        if (!itemId) {
            return res.status(400).json({ message: "Invalid item ID" });
        }

        console.log("Attempting to delete item from wishlist:", itemId);

        // Update the user's wishlist by removing the specified item
        const updatedUser = await Users.findByIdAndUpdate(
            req.user.user_id,
            { $pull: { Wishlist: itemId } }, // Remove the item from the Wishlist array
            { new: true } // Return the updated user document
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log("Item successfully deleted from wishlist");
        res.status(200).json({
            message: "Item deleted from the wishlist",
            Wishlist: updatedUser.Wishlist,
        });
    } catch (error) {
        console.error("Error deleting item from wishlist:", error);
        res.status(500).json({
            message: "Error deleting item from the wishlist",
            error: error.message,
        });
    }
});


// app.post('/removefromcart', fetchUser, async (req, res) => {
//     try {
//         const { itemId } = req.body;

//         if (!itemId) {
//             return res.status(400).json({ message: "Invalid item ID" });
//         }

//         console.log("Attempting to remove item from cart:", itemId);

//         // Use `findByIdAndUpdate` for atomic update and save
//         const updatedUser = await Users.findByIdAndUpdate(
//             req.user.user_id,
//             {
//                 $inc: { [`cartData.${itemId}`]: -1 }, // Decrement the item quantity
//             },
//             { new: true } // Return the updated document
//         );

//         if (!updatedUser) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         // Remove the item from `cartData` if its quantity becomes 0
//         if (updatedUser.cartData[itemId] <= 0) {
//             delete updatedUser.cartData[itemId];

//             // Save the changes after deletion
//             await updatedUser.save();
//         }

//         //console.log("Updated cartData:", updatedUser.cartData);

//         res.status(200).json({
//             message: "Item removed from the cart",
//             cartData: updatedUser.cartData,
//         });
//     } catch (error) {
//         console.error("Error removing item from the cart:", error);
//         res.status(500).json({
//             message: "Error removing item from the cart",
//             error: error.message,
//         });
//     }
// });

app.post('/removefromcart', fetchUser, async (req, res) => {
    try {
        const { itemId, size } = req.body;  // Destructure itemId and size from the request body

        console.log("Request body:", req.body); // Log the entire request body
        console.log("item id:", itemId, "item size:", size, "user id:", req.user.user_id); // Log itemId, size, and user_id

        if (!itemId || !size) {
            return res.status(400).json({ message: "Invalid item ID or size" });
        }

        console.log("Attempting to remove item from cart:", { itemId, size }); // Log the request data

        // Find the user
        const user = await Users.findById(req.user.user_id);
        console.log("User found:", user); // Log the user object

        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }

        // Find the index of the item to remove based on both id and size
        const productIndex = user.cartData.findIndex(item => item.id === itemId && item.size === size);
        console.log("Product index:", productIndex); // Log the product index

        if (productIndex === -1) {
            console.log("Item not found in the cart");
            return res.status(404).json({ message: "Item not found in the cart" });
        }

        // Decrease the quantity of the product
        user.cartData[productIndex].quantity -= 1;
        console.log("Decreased quantity:", user.cartData[productIndex].quantity); // Log the decreased quantity

        // If the quantity hits zero, remove the product from the cart
        if (user.cartData[productIndex].quantity <= 0) {
            user.cartData.splice(productIndex, 1);
            console.log("Item removed from cart as quantity hit zero");
        }

        // Save the updated user cart data
        await user.save();
        console.log("User cart data saved");

        res.status(200).json({
            message: "Item removed from the cart",
            cartData: user.cartData,
        });
    } catch (error) {
        console.error("Error removing item from the cart:", error);
        res.status(500).json({
            message: "Error removing item from the cart",
            error: error.message,
        });
    }
});



// app.post('/addfromcart', fetchUser, async (req, res) => {
//     try {
//         const { itemId } = req.body;

//         if (!itemId) {
//             return res.status(400).json({ message: "Invalid item ID" });
//         }

//         console.log("Attempting to add item to cart:", itemId);


//         // Use `findByIdAndUpdate` for atomic update and save
//         const updatedUser = await Users.findByIdAndUpdate(
//             req.user.user_id,
//             { $inc: { [`cartData.${itemId}`]: 1 } }, // Increment the item quantity
//             { new: true } // Return the updated document
//         );

//         if (!updatedUser) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         //console.log("Updated cartData:", updatedUser.cartData);

//         res.status(200).json({
//             message: "Item added to the cart",
//             cartData: updatedUser.cartData,
//         });
//     } catch (error) {
//         console.error("Error adding item to the cart:", error);
//         res.status(500).json({
//             message: "Error adding item to the cart",
//             error: error.message,
//         });
//     }
// });


// app.post('/addfromcart', fetchUser, async (req, res) => {
//     try {
//         const { itemId } = req.body;

//         if (!itemId) {
//             return res.status(400).json({ message: "Invalid item ID" });
//         }

//         console.log("Attempting to add item to cart:", itemId);

//         // Fetch the product by its `id` field
//         const product = await Product.findOne({ id: itemId });
//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         // Check stock availability
//         const stockAvailable = product.available;

//         // Fetch the user's current cart data
//         const user = await Users.findById(req.user.user_id);
//         const cartQuantity = user.cartData[itemId] || 0;

//         // Validate cart quantity against the stock available
//         if (cartQuantity >= stockAvailable) {
//             return res.status(400).json({ message: "Cannot add more than the available stock" });
//         }

//         // Increment the item quantity in the cart by 1
//         const updatedUser = await Users.findByIdAndUpdate(
//             req.user.user_id,
//             { $inc: { [`cartData.${itemId}`]: 1 } },
//             { new: true }
//         );

//         if (!updatedUser) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         console.log("Updated cartData:", updatedUser.cartData);

//         res.status(200).json({
//             message: "Item added to the cart",
//             cartData: updatedUser.cartData,
//         });
//     } catch (error) {
//         console.error("Error adding item to the cart:", error);
//         res.status(500).json({
//             message: "Error adding item to the cart",
//             error: error.message,
//         });
//     }
// });

app.post('/addfromcart', fetchUser, async (req, res) => {
    try {
        const { itemId, size } = req.body;  // Destructure itemId and size from the request body

        if (!itemId || !size) {
            return res.status(400).json({ message: "Invalid item ID or size" });
        }

        console.log("Attempting to add item to cart:", { itemId, size }); // Log the request data

        // Fetch the product by its `id` field
        const product = await Product.findOne({ id: itemId });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Check stock availability
        const stockAvailable = product.available;

        // Fetch the user's current cart data
        const user = await Users.findById(req.user.user_id);
        const cartItem = user.cartData.find(item => item.id === itemId && item.size === size);
        const cartQuantity = cartItem ? cartItem.quantity : 0;

        // Validate cart quantity against the stock available
        if (cartQuantity >= stockAvailable) {
            return res.status(400).json({ message: "Cannot add more than the available stock" });
        }

        // Increment the item quantity in the cart by 1
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            user.cartData.push({ id: itemId, size, quantity: 1, price: product.price });
        }

        // Save the updated user cart data
        await user.save();
        console.log("Updated cartData:", user.cartData); // Log the updated cart data

        res.status(200).json({
            message: "Item added to the cart",
            cartData: user.cartData,
        });
    } catch (error) {
        console.error("Error adding item to the cart:", error);
        res.status(500).json({
            message: "Error adding item to the cart",
            error: error.message,
        });
    }
});


// Endpoint to get user details
app.get('/getuser', fetchUser, async (req, res) => {
    try {
        const user = await Users.findById(req.user.user_id)
            .select('_id name email user_type') // Select only the required fields
            .populate('user_type'); // Populate the user_type field

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ user });
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: 'Server error' });
    }
});


// Fetch products added by a specific seller
app.get('/products/seller/:userId', fetchUser, async (req, res) => {
    try {
        const sellerId = req.params.userId;

        const products = await Product.find({ added_by: sellerId })
            .populate('added_by', 'name') // Optionally populate added_by to get seller info
            .sort({ date: -1 });

        res.status(200).json({ products });
    } catch (error) {
        console.error('Error fetching seller products:', error);
        res.status(500).json({ message: 'Server error while fetching products.' });
    }
});


// Endpoint to update product quantity
// app.post('/updatequantity', fetchUser, async (req, res) => {
//     try {
//         const { id, quantity } = req.body;

//         if (!id || quantity == null) {
//             return res.status(400).json({ success: false, message: 'Invalid product ID or quantity' });
//         }

//         const product = await Product.findById(id);
//         if (!product) {
//             return res.status(404).json({ success: false, message: 'Product not found' });
//         }

//         // Fetch the user to check if they are the product owner or an admin
//         const user = await Users.findById(req.user.user_id);
//         if (!user) {
//             return res.status(404).json({ success: false, message: 'User not found' });
//         }

//         console.log("Product:", product); // Add logging for debugging
//         console.log("User:", user);       // Add logging for debugging

//         // Ensure that user._id is defined before comparing
//         if (!user._id) {
//             return res.status(400).json({ success: false, message: 'User information is incomplete', details: { user } });
//         }

//         // Check if the user is allowed to update the quantity
//         if ((product.added_by && product.added_by.toString() !== user._id.toString()) && user.user_type !== '676c07e68c1c6815439b181c') {
//             return res.status(403).json({ success: false, message: 'Permission denied' });
//         }

//         // Update the product quantity
//         product.available = quantity;
//         await product.save();

//         res.status(200).json({ success: true, message: 'Quantity updated successfully!', product });
//     } catch (error) {
//         console.error("Error updating quantity:", error);
//         res.status(500).json({ success: false, message: 'Server error' });
//     }
// });

app.post('/updatequantity', fetchUser, async (req, res) => {
    try {
        const { id, quantity } = req.body;

        if (!id || quantity == null) {
            return res.status(400).json({ success: false, message: 'Invalid product ID or quantity' });
        }

        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        // Fetch the user to check if they are the product owner or an admin
        const user = await Users.findById(req.user.user_id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        console.log("Product:", product); // Add logging for debugging
        console.log("User:", user);       // Add logging for debugging

        // Ensure that user._id is defined before comparing
        if (!user._id) {
            return res.status(400).json({ success: false, message: 'User information is incomplete', details: { user } });
        }

        // Check if the user is allowed to update the quantity
        if (
            (product.added_by && product.added_by.toString() !== user._id.toString()) &&
            user.user_type !== '676c07e68c1c6815439b181c'
        ) {
            return res.status(403).json({ success: false, message: 'Permission denied' });
        }

        // Update the product quantity
        product.available = quantity;

        // Reset message_sent to false if quantity is updated successfully
        if (product.message_sent && quantity > 0) {
            product.message_sent = false;
        }

        await product.save();

        res.status(200).json({ success: true, message: 'Quantity updated successfully!', product });
    } catch (error) {
        console.error("Error updating quantity:", error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});


// app.post('/deletefromcart', fetchUser, async (req, res) => {
//     try {
//         const { itemId } = req.body;
//         console.log("Attempting to delete item from cart:", itemId);

//         const userData = await Users.findOne({ _id: req.user.user_id });
//         if (!userData) {
//             console.error("User not found");
//             return res.status(404).json({ errors: "User not found" });
//         }

//         if (userData.cartData && userData.cartData[itemId]) {
//             delete userData.cartData[itemId];
//             userData.markModified('cartData'); // Mark cartData as modified
//             await userData.save();
//             console.log("Item successfully deleted from cart");
//             return res.status(200).json({ message: "Item deleted from the cart" });
//         } else {
//             console.error("Item not found in cart");
//             return res.status(404).json({ errors: "Item not found in cart" });
//         }
//     } catch (error) {
//         console.error("Error deleting item from cart:", error);
//         return res.status(500).json({ errors: "Error deleting item from the cart" });
//     }
// });

app.post('/deletefromcart', fetchUser, async (req, res) => {
    try {
        const { itemId, size } = req.body;  // Destructure itemId and size from the request body

        console.log("Request body:", req.body); // Log the entire request body
        console.log("item id:", itemId, "item size:", size, "user id:", req.user.user_id); // Log itemId, size, and user_id

        // Find the user
        const user = await Users.findById(req.user.user_id);
        console.log("User found:", user); // Log the user object

        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }

        // Find the index of the item to remove based on both id and size
        const productIndex = user.cartData.findIndex(item => item.id === itemId && item.size === size);
        console.log("Product index:", productIndex); // Log the product index

        if (productIndex === -1) {
            console.log("Item not found in the cart");
            return res.status(404).json({ message: "Item not found in the cart" });
        }

        // Remove the product from the cart
        user.cartData.splice(productIndex, 1);
        console.log("Updated cart data:", user.cartData); // Log the updated cart data

        // Save the updated user cart data
        await user.save();
        console.log("User cart data saved");

        res.status(200).json({
            message: "Item removed from the cart",
            cartData: user.cartData,
        });
    } catch (error) {
        console.error("Error deleting item from cart:", error);
        res.status(500).json({
            message: "Error deleting item from cart",
            error: error.message,
        });
    }
});






// app.post('/placeOrder', fetchUser, async (req, res) => {
//     try {
//         const { products } = req.body;

//         if (!products || products.length === 0) {
//             return res.status(400).json({ message: "No products to place order" });
//         }

//         const updateOperations = products.map(product => ({
//             updateOne: {
//                 filter: { id: product.id },
//                 update: { $inc: { available: -product.quantity } } // Decrease the available quantity
//             }
//         }));

//         await Product.bulkWrite(updateOperations);

//         res.status(200).json({ message: "Order placed successfully" });
//     } catch (error) {
//         console.error("Error placing order:", error);
//         res.status(500).json({ message: "Error placing order", error: error.message });
//     }
// });


// app.post('/placeOrder', fetchUser, async (req, res) => {
//     try {
//         const { products } = req.body;

//         if (!products || products.length === 0) {
//             return res.status(400).json({ message: "No products to place order" });
//         }

//         const userId = req.user.user_id;

//         // Ensure ObjectId casting with _id
//         const updateOperations = products.map(product => ({
//             updateOne: {
//                 filter: { _id: product._id }, // Ensure proper use of ObjectId
//                 update: { $inc: { available: -product.quantity } } // Decrease the available quantity
//             }
//         }));

//         await Product.bulkWrite(updateOperations);

//         const user = await Users.findById(userId);

//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         const orderHistoryEntries = products.map(product => ({
//             product: product._id, // Ensure proper use of ObjectId
//             quantity: product.quantity,
//             totalPrice: product.new_price * product.quantity, // Calculate total price
//         }));

//         // Create OrderHistory entries
//         const orderHistoryDocs = await OrderHistory.insertMany(orderHistoryEntries);

//         // Add Order History references to the user
//         user.order_history.push(...orderHistoryDocs.map(doc => doc._id));
//         await user.save();

//         res.status(200).json({ message: "Order placed successfully" });
//     } catch (error) {
//         console.error("Error placing order:", error);
//         res.status(500).json({ message: "Error placing order", error: error.message });
//     }
// });

// Route to place an order
// app.post('/placeOrder', fetchUser, async (req, res) => {
//     try {
//         const { products, billingInfo } = req.body;

//         if (!products || products.length === 0) {
//             return res.status(400).json({ message: "No products to place order" });
//         }

//         const userId = req.user.user_id;

//         // Ensure ObjectId casting with _id for product and user
//         const updateOperations = products.map(product => ({
//             updateOne: {
//                 filter: { _id: product._id },
//                 update: { $inc: { available: -product.quantity } } // Decrease the available quantity
//             }
//         }));

//         await Product.bulkWrite(updateOperations);

//         const user = await Users.findById(userId);

//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         // Prepare order history entries with billing info
//         const orderHistoryEntries = products.map(product => ({
//             product: product._id, // Ensure proper use of ObjectId
//             quantity: product.quantity,
//             totalPrice: product.new_price * product.quantity, // Calculate total price
//             billingInfo: billingInfo // Add billing info to each order history entry
//         }));

//         // Create OrderHistory entries with billing info
//         const orderHistoryDocs = await OrderHistory.insertMany(orderHistoryEntries);

//         // Add Order History references to the user
//         user.order_history.push(...orderHistoryDocs.map(doc => doc._id));
//         await user.save();

//         res.status(200).json({ message: "Order placed successfully", order: orderHistoryDocs });
//     } catch (error) {
//         console.error("Error placing order:", error);
//         res.status(500).json({ message: "Error placing order", error: error.message });
//     }
// });

// app.post('/placeOrder', fetchUser, async (req, res) => {
//     try {
//         const { products, billingInfo } = req.body;

//         if (!products || products.length === 0) {
//             return res.status(400).json({ message: "No products to place order" });
//         }

//         const userId = req.user.user_id; // Assuming the user's _id is decoded in the JWT

//         // Ensure ObjectId casting with _id for product updates
//         const updateOperations = products.map(product => ({
//             updateOne: {
//                 filter: { _id: product._id },
//                 update: { $inc: { available: -product.quantity } } // Decrease available stock
//             }
//         }));

//         await Product.bulkWrite(updateOperations);

//         const user = await Users.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         // Ensure billingInfo contains all required fields
//         if (!billingInfo || !billingInfo.postalCode || !billingInfo.fullname || !billingInfo.email) {
//             return res.status(400).json({ message: "Billing information is incomplete" });
//         }

//         // Check if the user already has an address
//         let userAddress = await Address.findOne({ user: userId });
//         if (!userAddress) {
//             // Create a new address if none exists
//             const newAddress = new Address({
//                 fullname: billingInfo.fullname,
//                 email: billingInfo.email,
//                 phone: billingInfo.phone,
//                 city: billingInfo.city,
//                 state: billingInfo.state,
//                 postalCode: billingInfo.postalCode,
//                 country: billingInfo.country,
//                 user: userId  // Link the address to the user
//             });

//             userAddress = await newAddress.save();
//         }

//         // Prepare order history entries
//         const orderHistoryEntries = products.map(product => ({
//             product: product._id, // ObjectId reference for product
//             quantity: product.quantity,
//             totalPrice: product.new_price * product.quantity,
//             billingInfo: {
//                 fullname: billingInfo.fullname,
//                 email: billingInfo.email,
//                 phone: billingInfo.phone,
//                 city: billingInfo.city,
//                 state: billingInfo.state,
//                 postal: billingInfo.postalCode,
//                 country: billingInfo.country
//             },
//             userAddress: userAddress._id, // Add address reference
//             user:userId,
//         }));

//         // Create OrderHistory entries
//         const orderHistoryDocs = await OrderHistory.insertMany(orderHistoryEntries);

//         // Add Order History references to the user
//         user.order_history.push(...orderHistoryDocs.map(doc => doc._id));
//         await user.save();

//         res.status(200).json({ message: "Order placed successfully" });
//     } catch (error) {
//         console.error("Error placing order:", error);
//         res.status(500).json({ message: "Error placing order", error: error.message });
//     }
// });
// 

// app.post('/placeOrder', fetchUser, async (req, res) => {
//     try {
//         const { products, billingInfo } = req.body;

//         if (!products || products.length === 0) {
//             return res.status(400).json({ message: "No products to place order" });
//         }

//         const userId = req.user.user_id; // Assuming the user's _id is decoded in the JWT

//         // Ensure ObjectId casting with _id for product updates
//         const updateOperations = products.map(product => ({
//             updateOne: {
//                 filter: { _id: product._id },
//                 update: { $inc: { available: -product.quantity } } // Decrease available stock
//             }
//         }));

//         await Product.bulkWrite(updateOperations);

//         const user = await Users.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         console.log("billing info : ", billingInfo);
//         // Ensure billingInfo contains all required fields
//         // if (!billingInfo || !billingInfo.postal || !billingInfo.fullname || !billingInfo.email) {
//         //     return res.status(400).json({ message: "Billing information is incomplete" });
//         // }
//         if (!billingInfo) {
//             console.log("Billing information is missing.");
//             return res.status(400).json({ message: "Billing information is incomplete" });
//         }

//         if (!billingInfo.postal) {
//             console.log("Billing information is missing: postal code.");
//             return res.status(400).json({ message: "Billing information is incomplete: missing postal code" });
//         }

//         if (!billingInfo.fullname) {
//             console.log("Billing information is missing: fullname.");
//             return res.status(400).json({ message: "Billing information is incomplete: missing fullname" });
//         }

//         if (!billingInfo.email) {
//             console.log("Billing information is missing: email.");
//             return res.status(400).json({ message: "Billing information is incomplete: missing email" });
//         }

//         // Check if the user already has an address that matches the billing info
//         let userAddress = await Address.findOne({
//             user: userId,
//             fullname: billingInfo.fullname,
//             email: billingInfo.email,
//             phone: billingInfo.phone,
//             city: billingInfo.city,
//             state: billingInfo.state,
//             postalCode: billingInfo.postal,
//             country: billingInfo.country
//         });

//         // If no matching address is found, create a new one
//         if (!userAddress) {
//             const newAddress = new Address({
//                 fullname: billingInfo.fullname,
//                 email: billingInfo.email,
//                 phone: billingInfo.phone,
//                 city: billingInfo.city,
//                 state: billingInfo.state,
//                 postalCode: billingInfo.postal,
//                 country: billingInfo.country,
//                 user: userId  // Link the address to the user
//             });

//             userAddress = await newAddress.save();
//         }

//         // Prepare order history entries
//         const orderHistoryEntries = products.map(product => ({
//             product: product._id, // ObjectId reference for product
//             quantity: product.quantity,
//             totalPrice: product.new_price * product.quantity,
//             billingInfo: {
//                 fullname: billingInfo.fullname,
//                 email: billingInfo.email,
//                 phone: billingInfo.phone,
//                 city: billingInfo.city,
//                 state: billingInfo.state,
//                 postal: billingInfo.postal,
//                 country: billingInfo.country
//             },
//             userAddress: userAddress._id, // Add address reference
//             user: userId,
//         }));

//         // Create OrderHistory entries
//         const orderHistoryDocs = await OrderHistory.insertMany(orderHistoryEntries);

//         // Add Order History references to the user
//         user.order_history.push(...orderHistoryDocs.map(doc => doc._id));
//         await user.save();

//         res.status(200).json({ message: "Order placed successfully" });
//     } catch (error) {
//         console.error("Error placing order:", error);
//         res.status(500).json({ message: "Error placing order", error: error.message });
//     }
// });



// app.post('/placeOrder', fetchUser, async (req, res) => {
//     try {
//         const { products, billingInfo } = req.body;

//         if (!products || products.length === 0) {
//             return res.status(400).json({ message: "No products to place order" });
//         }

//         const userId = req.user.user_id; // Assuming the user's _id is decoded in the JWT

//         // Ensure ObjectId casting with _id for product updates
//         const updateOperations = products.map(product => ({
//             updateOne: {
//                 filter: { _id: product._id },
//                 update: { $inc: { available: -product.quantity } } // Decrease available stock
//             }
//         }));

//         await Product.bulkWrite(updateOperations);

//         const user = await Users.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         console.log("billing info : ", billingInfo);

//         if (!billingInfo) {
//             console.log("Billing information is missing.");
//             return res.status(400).json({ message: "Billing information is incomplete" });
//         }

//         if (!billingInfo.postal) {
//             console.log("Billing information is missing: postal code.");
//             return res.status(400).json({ message: "Billing information is incomplete: missing postal code" });
//         }

//         if (!billingInfo.fullname) {
//             console.log("Billing information is missing: fullname.");
//             return res.status(400).json({ message: "Billing information is incomplete: missing fullname" });
//         }

//         if (!billingInfo.email) {
//             console.log("Billing information is missing: email.");
//             return res.status(400).json({ message: "Billing information is incomplete: missing email" });
//         }

//         // Check if the user already has an address that matches the billing info
//         let userAddress = await Address.findOne({
//             user: userId,
//             fullname: billingInfo.fullname,
//             email: billingInfo.email,
//             phone: billingInfo.phone,
//             city: billingInfo.city,
//             state: billingInfo.state,
//             postalCode: billingInfo.postal,
//             country: billingInfo.country
//         });

//         // If no matching address is found, create a new one
//         if (!userAddress) {
//             const newAddress = new Address({
//                 fullname: billingInfo.fullname,
//                 email: billingInfo.email,
//                 phone: billingInfo.phone,
//                 city: billingInfo.city,
//                 state: billingInfo.state,
//                 postalCode: billingInfo.postal,
//                 country: billingInfo.country,
//                 user: userId  // Link the address to the user
//             });

//             userAddress = await newAddress.save();
//         }

//         // Prepare order history entries
//         const orderHistoryEntries = products.map(product => ({
//             product: product._id, // ObjectId reference for product
//             quantity: product.quantity,
//             totalPrice: product.selectedPrice * product.quantity,
//             size: product.selectedSize, // Include size in the order history
//             billingInfo: {
//                 fullname: billingInfo.fullname,
//                 email: billingInfo.email,
//                 phone: billingInfo.phone,
//                 city: billingInfo.city,
//                 state: billingInfo.state,
//                 postal: billingInfo.postal,
//                 country: billingInfo.country
//             },
//             userAddress: userAddress._id, // Add address reference
//             user: userId,
//         }));

//         // Create OrderHistory entries
//         const orderHistoryDocs = await OrderHistory.insertMany(orderHistoryEntries);

//         // Add Order History references to the user
//         user.order_history.push(...orderHistoryDocs.map(doc => doc._id));
//         await user.save();

//         res.status(200).json({ message: "Order placed successfully" });
//     } catch (error) {
//         console.error("Error placing order:", error);
//         res.status(500).json({ message: "Error placing order", error: error.message });
//     }
// });

app.post('/placeOrder', fetchUser, async (req, res) => {
    try {
        const { products, billingInfo } = req.body;

        if (!products || products.length === 0) {
            return res.status(400).json({ message: "No products to place order" });
        }

        const userId = req.user.user_id;

        // Create bulk update operations for the available field
        const updateOperations = products.map(product => ({
            updateOne: {
                filter: { _id: product._id },
                update: { $inc: { available: -product.quantity } }
            }
        }));

        // Execute bulk write to update product quantities
        await Product.bulkWrite(updateOperations);

        const user = await Users.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (!billingInfo || !billingInfo.postal || !billingInfo.fullname || !billingInfo.email) {
            return res.status(400).json({ message: "Billing information is incomplete" });
        }

        let userAddress = await Address.findOne({
            user: userId,
            fullname: billingInfo.fullname,
            email: billingInfo.email,
            phone: billingInfo.phone,
            city: billingInfo.city,
            state: billingInfo.state,
            postalCode: billingInfo.postal,
            country: billingInfo.country
        });

        if (!userAddress) {
            const newAddress = new Address({
                fullname: billingInfo.fullname,
                email: billingInfo.email,
                phone: billingInfo.phone,
                city: billingInfo.city,
                state: billingInfo.state,
                postalCode: billingInfo.postal,
                country: billingInfo.country,
                user: userId
            });

            userAddress = await newAddress.save();
        }

        console.log("Products being processed: ", products); // Log the products array

        const orderHistoryEntries = products.map(product => ({
            product: product._id,
            goto:product.id,
            quantity: product.quantity,
            totalPrice: product.price * product.quantity,
            size: product.size,
            billingInfo: {
                fullname: billingInfo.fullname,
                email: billingInfo.email,
                phone: billingInfo.phone,
                city: billingInfo.city,
                state: billingInfo.state,
                postal: billingInfo.postal,
                country: billingInfo.country
            },
            userAddress: userAddress._id,
            user: userId,
        }));

        console.log("Order history entries being created: ", orderHistoryEntries); // Log the order history entries

        const orderHistoryDocs = await OrderHistory.insertMany(orderHistoryEntries);

        user.order_history.push(...orderHistoryDocs.map(doc => doc._id));
        await user.save();

        res.status(200).json({ message: "Order placed successfully" });
    } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ message: "Error placing order", error: error.message });
    }
});



// Fetch all addresses for the authenticated user
app.get('/getAddresses', fetchUser, async (req, res) => {
    try {
        const userId = req.user.user_id; // Use the correct user ID from the JWT token
        const addresses = await Address.find({ user: userId }); // Find addresses linked to the user
        res.status(200).json({ addresses });
    } catch (err) {
        console.error("Error fetching addresses:", err);
        res.status(500).json({ message: 'Error fetching addresses', error: err.message });
    }
});



// Add a new address for the authenticated user
// app.post('/addAddress', fetchUser, async (req, res) => {
//     try {
//         const { fullname, email, phone, city, state, postalCode, country } = req.body;
//         const userId = req.user.user_id; // Get the user ID from the decoded JWT token

//         // Validate the required fields for the address
//         if (!fullname || !email || !phone || !city || !state || !postalCode || !country) {
//             return res.status(400).json({ message: "All address fields are required" });
//         }

//         // Create a new address document
//         const newAddress = new Address({
//             fullname,
//             email,
//             phone,
//             city,
//             state,
//             postalCode,
//             country,
//             user: userId // Link address to the user
//         });

//         // Save the new address
//         await newAddress.save();

//         res.status(201).json({ message: 'Address added successfully', address: newAddress });
//     } catch (err) {
//         console.error("Error adding address:", err);
//         res.status(500).json({ message: 'Error adding address', error: err.message });
//     }
// });
app.post('/addAddress', fetchUser, async (req, res) => {
    try {
        const { fullname, email, phone, city, state, postalCode, country } = req.body;
        const userId = req.user.user_id; // Get the user ID from the decoded JWT token

        // Validate the required fields for the address
        if (!fullname || !email || !phone || !city || !state || !postalCode || !country) {
            return res.status(400).json({ message: "All address fields are required" });
        }

        // Check if the same address already exists for the user
        const existingAddress = await Address.findOne({
            user: userId,
            fullname,
            email,
            phone,
            city,
            state,
            postalCode,
            country
        });

        // If the address exists, skip adding and send the existing address
        if (existingAddress) {
            return res.status(200).json({ message: 'Address already exists', address: existingAddress });
        }

        // Create a new address document
        const newAddress = new Address({
            fullname,
            email,
            phone,
            city,
            state,
            postalCode,
            country,
            user: userId // Link address to the user
        });

        // Save the new address
        await newAddress.save();

        res.status(201).json({ message: 'Address added successfully', address: newAddress });
    } catch (err) {
        console.error("Error adding address:", err);
        res.status(500).json({ message: 'Error adding address', error: err.message });
    }
});


// Get Order History Endpoint
app.get('/getOrderHistory', fetchUser, async (req, res) => {
    try {
        const userId = req.user.user_id;
        const user = await Users.findById(userId).populate({
            path: 'order_history',
            populate: {
                path: 'product',
                model: 'Product'
            }
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ order_history: user.order_history });
        //console.log("order history : ", user.order_history);
    } catch (error) {
        console.error("Error fetching order history:", error);
        res.status(500).json({ message: "Error fetching order history", error: error.message });
    }
});

app.get('/orderhistory/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        // Find the order history for the product
        const orderHistory = await OrderHistory.find({ product: productId }).populate('product user');

        if (orderHistory.length === 0) {
            return res.status(404).json({ message: 'No order history found for this product' });
        }

        res.status(200).json(orderHistory);
    } catch (error) {
        console.error('Error fetching order history:', error);
        res.status(500).json({ message: 'Error fetching order history' });
    }
});


app.get('/history/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        // Find the order history for the product
        const orderHistory = await OrderHistory.find({ product: productId }).populate('product user');

        res.status(200).json(orderHistory); // Return the order history (empty array if none exists)
    } catch (error) {
        console.error('Error fetching order history:', error);
        res.status(500).json({ message: 'Error fetching order history' });
    }
});



app.get('/orderhistory/:productId/:size', async (req, res) => {
    try {
        const { productId, size } = req.params;

        // Find the order history for the product and size, and populate product and user
        const orderHistory = await OrderHistory.find({ product: productId, size: size })
            .populate('product') // Populate product details from the Product model
            .populate('user'); // Populate user details from the User model

        if (orderHistory.length === 0) {
            return res.status(404).json({ message: 'No order history found for this product and size' });
        }

        // Map over the orderHistory to return a custom response
        const result = orderHistory.map(order => ({
            _id: order._id,
            goto:order.goto,
            quantity: order.quantity,
            totalPrice: order.totalPrice,
            size: order.size,
            shipped: order.shipped,
            billingInfo: order.billingInfo,
            user: {
                name: order.user.name,
                email: order.user.email,
                phone: order.user.phone
                // Add any other user fields you want to return
            }
        }));

        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching order history:', error);
        res.status(500).json({ message: 'Error fetching order history' });
    }
});



// Add Review Endpoint
app.post('/addreview', fetchUser, async (req, res) => {
    try {
        const { productId, content } = req.body;
        const userId = req.user.user_id;

        // Find the product
        const product = await Product.findById(productId).populate('reviews');
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        // const user = await Users.findById(userId);
        // console.log("user from addreview : ",user);


        // Create a new review
        const newReview = new Review({
            user: userId, // Ensure correct usage of ObjectId
            content: content,
            date: new Date()
        });

        // Save the review and associate it with the product
        const savedReview = await newReview.save();
        product.reviews.push(savedReview._id);
        await product.save();

        res.status(200).json({ message: "Review added successfully", review: savedReview });
    } catch (error) {
        console.error("Error adding review:", error);
        res.status(500).json({ message: "Error adding review", error: error.message });
    }
});


// Get Product Details with Reviews and User Information
app.get('/product/:id', async (req, res) => {
    try {
        const productId = req.params.id;

        // Fetch product with reviews and populate user details
        const product = await Product.findById(productId)
            .populate({
                path: 'reviews',
                select: 'content date',
                populate: {
                    path: 'user',
                    model: 'Users',
                    select: 'name email', // Select fields to return from User model
                }
            });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ product, reviews: product.reviews });
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ message: "Error fetching product", error: error.message });
    }
});


app.post('/clearcart', fetchUser, async (req, res) => {
    try {
        const userData = await Users.findOne({ _id: req.user.user_id });
        if (userData.cartData) {
            userData.cartData = {}; // Clear all items from the cart
            await userData.save();
            console.log("Cart successfully cleared");
            res.status(200).send("Cart cleared");
        } else {
            console.error("Cart is already empty");
            res.status(400).send({ errors: "Cart is already empty" });
        }
    } catch (error) {
        console.error("Error clearing the cart:", error);
        res.status(500).send("Error clearing the cart");
    }
});




// Endpoint to fetch all orders for the authenticated user
// app.get('/orders', fetchUser, async (req, res) => {
//     try {
//         // Fetch orders for the authenticated user
//         const userId = req.user.user_id; // Assuming fetchUser adds `user_id` to req.user
//         const userOrders = await OrderHistory.find({ user: userId })
//             .populate('product', 'name image') // Populate product details (name, image)
//             .sort({ date: -1 }); // Sort by date in descending order

//         if (!userOrders || userOrders.length === 0) {
//             return res.status(400).json({ message: 'No orders found for this user.' });
//         }

//         // Format the response data
//         const orders = userOrders.map((order) => ({
//             id: order._id,
//             product: {
//                 id: order.product._id,
//                 name: order.product.name,
//                 image: order.product.image[0], // Assuming `image` is an array
//             },
//             quantity: order.quantity,
//             totalPrice: order.totalPrice,
//             shipped: order.shipped ? 'Shipped' : 'Pending', // Convert boolean to status
//             date: order.date,
//             billingInfo: order.billingInfo, // Include billing info if needed
//         }));

//         res.status(200).json({ orders });
//     } catch (error) {
//         console.error('Error fetching orders:', error);
//         res.status(500).json({ message: 'Server error while fetching orders.' });
//     }
// });


// app.get('/orders', fetchUser, async (req, res) => {
//     try {
//         // Fetch the user's details, including their user_type
//         const user = await Users.findById(req.user.user_id)
//             .select('_id user_type') // Only fetch _id and user_type
//             .populate('user_type'); // Populate user_type for role checking

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         console.log("user type : ", user.user_type);

//         const isAdmin = user.user_type.user_type === 'Admin'; // Assuming user_type has a 'name' field for roles

//         let orders;

//         if (isAdmin) {
//             // Admin: Fetch all orders
//             orders = await OrderHistory.find({})
//                 .populate('user', 'name email') // Populate user details
//                 .populate('product', 'name image') // Populate product details
//                 .sort({ date: -1 }); // Sort by date in descending order
//         } else {
//             // Regular user: Fetch their own orders
//             orders = await OrderHistory.find({ user: user._id })
//                 .populate('product', 'name image') // Populate product details
//                 .sort({ date: -1 }); // Sort by date in descending order
//         }

//         if (!orders || orders.length === 0) {
//             return res.status(400).json({ message: 'No orders found.' });
//         }

//         // Format the response data
//         const formattedOrders = orders.map((order) => ({
//             id: order._id,
//             user: isAdmin
//                 ? {
//                     id: order.user._id,
//                     name: order.user.name,
//                     email: order.user.email,
//                 }
//                 : undefined, // Include user details only for admin
//             product: {
//                 id: order.product._id,
//                 name: order.product.name,
//                 image: order.product.image[0], // Assuming `image` is an array
//             },
//             quantity: order.quantity,
//             totalPrice: order.totalPrice,
//             shipped: order.shipped ? 'Shipped' : 'Pending', // Convert boolean to status
//             date: order.date,
//             billingInfo: order.billingInfo, // Include billing info
//         }));

//         res.status(200).json({ orders: formattedOrders });
//     } catch (error) {
//         console.error('Error fetching orders:', error);
//         res.status(500).json({ message: 'Server error while fetching orders.' });
//     }
// });


// // Cancel order endpoint
// app.delete('/orders/:id', fetchUser, async (req, res) => {
//     try {
//         const userId = req.user.user_id; // Assuming fetchUser adds `user_id` to req.user
//         const orderId = req.params.id;

//         // Find the order to ensure it belongs to the authenticated user
//         const order = await OrderHistory.findOne({ _id: orderId, user: userId });

//         if (!order) {
//             return res.status(404).json({ message: 'Order not found or unauthorized.' });
//         }

//         // Delete the order
//         await OrderHistory.findByIdAndDelete(orderId);

//         res.status(200).json({ message: 'Order canceled successfully.' });
//     } catch (error) {
//         console.error('Error canceling order:', error);
//         res.status(500).json({ message: 'Server error while canceling order.' });
//     }
// });



app.get('/orders', fetchUser, async (req, res) => {
    try {
        const user = await Users.findById(req.user.user_id)
            .select('_id user_type')
            .populate('user_type');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isAdmin = user.user_type.user_type === 'Admin';

        let orders;

        if (isAdmin) {
            orders = await OrderHistory.find({})
                .populate('user', 'name email')
                .populate('product', 'name image')
                .sort({ date: -1 });
        } else {
            orders = await OrderHistory.find({ user: user._id })
                .populate('product', 'name image')
                .sort({ date: -1 });
        }

        if (!orders || orders.length === 0) {
            return res.status(400).json({ message: 'No orders found.' });
        }

        console.log("Fetched Orders: ", orders);

        const formattedOrders = orders.map((order) => ({
            id: order._id,
            user: isAdmin && order.user
                ? {
                    id: order.user._id,
                    name: order.user.name,
                    email: order.user.email,
                }
                : undefined,
            product: order.product
                ? {
                    id: order.product._id,
                    name: order.product.name,
                    image: Array.isArray(order.product.image) ? order.product.image[0] : 'default-image-url.jpg',
                }
                : {
                    id: null,
                    name: 'Product Not Found',
                    image: 'default-image-url.jpg'
                },
            goto:order.goto,
            quantity: order.quantity,
            size: order.size,
            totalPrice: order.totalPrice,
            shipped: order.shipped ? 'Shipped' : 'Pending',
            date: order.date,
            billingInfo: order.billingInfo,
        }));

        res.status(200).json({ orders: formattedOrders });
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Server error while fetching orders.' });
    }
});





app.delete('/orders/:id', fetchUser, async (req, res) => {
    try {
        const userId = req.user.user_id;
        const orderId = req.params.id;

        const order = await OrderHistory.findOne({ _id: orderId, user: userId });

        if (!order) {
            return res.status(404).json({ message: 'Order not found or unauthorized.' });
        }

        await OrderHistory.findByIdAndDelete(orderId);

        res.status(200).json({ message: 'Order canceled successfully.' });
    } catch (error) {
        console.error('Error canceling order:', error);
        res.status(500).json({ message: 'Server error while canceling order.' });
    }
});



// Fetch products added by a specific seller
app.get('/products/seller/:userId', async (req, res) => {
    try {
        const sellerId = req.params.userId;

        const products = await Product.find({ added_by: sellerId })
            .populate('added_by', 'name') // Optionally populate added_by to get seller info
            .sort({ date: -1 });

        res.status(200).json({ products });
    } catch (error) {
        console.error('Error fetching seller products:', error);
        res.status(500).json({ message: 'Server error while fetching products.' });
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














