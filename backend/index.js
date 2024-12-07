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
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect("mongodb+srv://sreerag-a-sasi:killer027on@cluster0.zw9vy.mongodb.net/e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// API creation
app.get("/", (req, res) => {
    res.send("express app is running");
});

// // Image Storage Engine
// const storage = multer.diskStorage({
//     destination: './upload/images',
//     filename: (req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// });

// const upload = multer({ storage: storage });

// // Creating upload endpoint for images
// app.use('/images', express.static('upload/images'));

// app.post("/upload", upload.single('product'), (req, res) => {
//     res.json({
//         success: 1,
//         image_url: `http://localhost:${port}/images/${req.file.filename}`
//     });
// });

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Creating upload endpoint for images
app.use('/images', express.static('upload/images'));

app.post("/upload", upload.array('product_images', 10), (req, res) => {
    const imageUrls = req.files.map(file => `http://localhost:${port}/images/${file.filename}`);
    res.json({
        success: 1,
        image_urls: imageUrls
    });
});

// Schema for Creating Products
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: [String],
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
    },
    old_price: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Number,
    },
    description: {
        type: String,
        required: true,
    },
});

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
//         image: req.body.image_url, // Adjusted to handle multiple image URLs
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

app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product = products[products.length - 1];
        id = last_product.id + 1;
    } else {
        id = 1;
    }

    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image, // Ensure this matches the key from the upload response
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
        available: req.body.available,
        description: req.body.description,
    });

    console.log('Product to be saved:', product);
    await product.save();
    console.log("Product saved");

    res.json({
        success: true,
        name: req.body.name,
    });
});





// Creating API for deleting products
// app.post('/removeproduct', async (req, res) => {
//     await Product.findOneAndDelete({ id: req.body.id });
//     let id = req.body.id;
//     console.log(`Item with id number "${id}" has been removed`);
//     res.json({
//         success: true,
//         name: req.body.name,
//     });
// });

const fs = require('fs');

app.post('/removeproduct', async (req, res) => {
    const { id } = req.body;

    try {
        const product = await Product.findOne({ id: id });
        if (product) {
            // Delete each image from the server
            product.image.forEach(imageUrl => {
                const filePath = path.join(__dirname, 'upload', 'images', path.basename(imageUrl));
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error(`Failed to delete image at ${filePath}: `, err);
                    } else {
                        console.log(`Image deleted at ${filePath}`);
                    }
                });
            });

            // Remove the product from the database
            await Product.deleteOne({ id: id });
            res.json({ success: true });
        } else {
            res.status(404).json({ success: false, message: 'Product not found' });
        }
    } catch (error) {
        console.error('Error removing product:', error);
        res.status(500).json({ success: false, message: 'An error occurred while removing the product' });
    }
});





app.get('/allproducts', async (req, res) => {
    let product = await Product.find({});
    console.log("All Products Fetched (from index.js backend)");
    res.send(product);
});

// Schema for Creating Users
const Users = mongoose.model('Users', {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

// Creating endpoint for registering the user
app.post('/signup', async (req, res) => {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, errors: "existing user found with the same email id !" });
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    });

    await user.save();

    const data = {
        user: {
            id: user.id
        }
    };

    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token });
});

// Creating endpoint for user sign-in
app.post('/login', async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            };
            const token = jwt.sign(data, 'secret_ecom');
            res.json({ success: true, token });
        } else {
            res.json({ success: false, errors: "wrong password" });
        }
    } else {
        res.json({ success: false, errors: "Wrong Email Id" });
    }
});

// Creating endpoint for new collection data
// app.get('/newcollections', async (req, res) => {
//     let products = await Product.find({});
//     let newcollection = products.slice(1).slice(-8);
//     console.log("New collections fetched: ", newcollection);
//     res.send(newcollection);
// });

app.get('/newcollections', async (req, res) => {
    try {
        let products = await Product.find({}).sort({ _id: -1 }).limit(8); // Sort by _id in descending order to get the newest products and limit to 8
        console.log("New collections fetched: ", products);
        res.send(products);
    } catch (error) {
        console.error('Error fetching new collections:', error);
        res.status(500).send('An error occurred while fetching new collections');
    }
});


// Creating endpoint for popular in women's category
app.get('/popularinwomen', async (req, res) => {
    let products = await Product.find({ category: "women" });
    let popular_in_women = products.slice(0, 4);
    // console.log("Popular in women fetched: ", popular_in_women);
    res.send(popular_in_women);
});

// Creating endpoint for related items
// app.get('/relatedproducts', async (req, res) => {
//     let category = req.body.category;       
//     let products = await Product.find({ });
//     let relatedproducts = products.slice(0, 4);
//     console.log("Related products fetched: ", relatedproducts);
//     res.send(relatedproducts);
// });
app.get('/relatedproducts', async (req, res) => {
    let category = req.body.category;
    try {
        let products = await Product.find({ category: category });
        let relatedproducts = products.slice(0, 4);
        console.log("Related products fetched: ", relatedproducts);
        res.send(relatedproducts);
    } catch (error) {
        console.error("Error fetching related products:", error);
        res.status(500).send("Error fetching related products");
    }
});





// Middleware to fetch user
const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ errors: "Please authenticate using a valid token" });
    } else {
        try {
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({ errors: "Please authenticate using a valid token or try again later..." });
        }
    }
};

// Creating endpoint for adding products to cart
app.post('/addtocart', fetchUser, async (req, res) => {
    try {
        console.log("Item with the id:", req.body.itemId, "has been added to the cart");
        let userData = await Users.findOne({ _id: req.user.id });

        // Initialize the cartData if it doesn't exist
        if (!userData.cartData) {
            userData.cartData = {};
        }

        // Initialize the item count if it doesn't exist
        if (!userData.cartData[req.body.itemId]) {
            userData.cartData[req.body.itemId] = 0;
        }

        userData.cartData[req.body.itemId] += 1;

        await Users.findOneAndUpdate(
            { _id: req.user.id },
            { cartData: userData.cartData },
            { new: true } // Option to return the updated document
        );

        res.status(200).send("Item added to the cart");
    } catch (error) {
        console.error("Error adding item to the cart:", error);
        res.status(500).send("Error adding item to the cart");
    }
});


// Creating endpoint for removing item from cart
app.post('/removefromcart', fetchUser, async (req, res) => {
    let userData = await Users.findOne({ _id: req.user.id }); // Defined userData here
    if (userData.cartData[req.body.itemId] > 0) {
        console.log("Item with the id:", req.body.itemId, "has been removed from the cart");
        userData.cartData[req.body.itemId] -= 1;
        await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
        res.send("Item removed from the cart");
    } else {
        res.status(400).send({ errors: "Item not found in cart or quantity is already zero" });
    }
});
//incrementing the number of same item
app.post('/addfromcart', fetchUser, async (req, res) => {
    let userData = await Users.findOne({ _id: req.user.id }); // Defined userData here
    if (userData.cartData[req.body.itemId] != 0) { // Ensure item exists in cart
        console.log("Item with the id:", req.body.itemId, "quantity is being increased in the cart");
        userData.cartData[req.body.itemId] += 1;
        await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
        res.send("Item quantity increased in the cart");
    } else {
        res.status(400).send({ errors: "Item not found in cart" });
    }
});


//deleting an item from cart

app.post('/deletefromcart', fetchUser, async (req, res) => {
    try {
        const itemId = req.body.itemId;
        console.log("Item with the id:", itemId, "is being deleted from the cart");
        
        let userData = await Users.findOne({ _id: req.user.id });

        if (userData.cartData && userData.cartData[itemId]) {
            delete userData.cartData[itemId];

            await Users.findOneAndUpdate(
                { _id: req.user.id },
                { cartData: userData.cartData },
                { new: true } // Option to return the updated document
            );

            res.status(200).send("Item deleted from the cart");
        } else {
            res.status(404).send("Item not found in the cart");
        }
    } catch (error) {
        console.error("Error deleting item from the cart:", error);
        res.status(500).send("Error deleting item from the cart");
    }
});


// Creating endpoint for saving and retrieving cart data
app.post('/getcart', fetchUser, async (req, res) => {
    console.log("Retrieving cart data");
    let userData = await Users.findOne({ _id: req.user.id });
    res.json(userData.cartData);
});

app.listen(port, (error) => {
    if (!error) {
        console.log(`Server running at http://localhost:${port}`);
    } else {
        console.log("Error: " + error);
    }
});
