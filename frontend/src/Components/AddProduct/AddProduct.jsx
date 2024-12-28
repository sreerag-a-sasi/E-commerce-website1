// import React, { useState } from 'react';
// import './AddProduct.css';
// import upload_area from '../Assets/upload_area.svg';

// const AddProduct = () => {
//     const [image, setImage] = useState([]);
//     const [productDetails, setProductDetails] = useState({
//         name: "",
//         image: [],
//         category: "women",
//         new_price: "",
//         old_price: "",
//         available: "",
//         description: ""
//     });

//     const imageHandler = (e) => {
//         let files = Array.from(e.target.files);

//         // Select only the first 4 files if more than 4 are selected
//         if (files.length > 4) {
//             alert("You have selected more than 4 images. Only the first 4 will be uploaded.");
//             files = files.slice(0, 4);
//         }

//         setImage(files);
//         console.log('Selected images:', files);
//     }

//     const changeHandler = (e) => {
//         setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
//     }

//     const uploadSingleImage = async (img) => {
//         let formData = new FormData();
//         formData.append('product_images', img);

//         console.log('Uploading image:', img);

//         const response = await fetch('http://localhost:4000/upload', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//             },
//             body: formData,
//         });
//         return response.json();
//     }

//     const Add_Product = async () => {
//         // Validation check
//         if (!productDetails.name || !productDetails.old_price || !productDetails.new_price || !productDetails.available || !productDetails.description || image.length === 0) {
//             alert("Please fill in all fields before submitting.");
//             return;
//         }

//         let responseData;
//         let product = { ...productDetails };
//         let imageUrls = [];

//         for (let img of image) {
//             responseData = await uploadSingleImage(img);
//             if (responseData.success) {
//                 imageUrls.push(responseData.image_urls[0]); // Assuming the response contains the uploaded image URL
//             }
//         }

//         product.image = imageUrls;
//         console.log('Final product object with images:', product);

//         await fetch('http://localhost:4000/addproduct', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(product),
//         }).then((resp) => resp.json()).then((data) => {
//             console.log('Add product response:', data);
//             data.success ? alert("Product Added") : alert("Failed");
//         });
//     }

//     return (
//         <div className='add-product'>
//             <div className="addproduct-itemfield">
//                 <p>Product title</p>
//                 <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' required />
//             </div>
//             <div className="addproduct-price">
//                 <div className="addproduct-itemfield">
//                     <p>Price</p>
//                     <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type here' required />
//                 </div>
//                 <div className="addproduct-itemfield">
//                     <p>Offer Price</p>
//                     <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type here' required />
//                 </div>
//                 <div className="addproduct-itemfield">
//                     <p>Product Nos</p>
//                     <input value={productDetails.available} onChange={changeHandler} type="text" name="available" placeholder='Type here' required />
//                 </div>
//             </div>
//             <div className="addproduct-itemfield">
//                 <p>Product Details</p>
//                 <textarea value={productDetails.description} className='description' onChange={changeHandler} name="description" placeholder='Type here' required />
//             </div>
//             <div className="addproduct-itemfield">
//                 <p>Product Category</p>
//                 <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
//                     <option value="women">Women</option>
//                     <option value="men">Men</option>
//                     <option value="kid">Kid</option>
//                 </select>
//             </div>
//             <div className="addproduct-itemfield">
//                 <label htmlFor="file-input">
//                     <img src={image.length > 0 ? URL.createObjectURL(image[0]) : upload_area} className='addproduct-thumnail-img' alt="" />
//                 </label>
//                 <input onChange={imageHandler} type="file" name='images' id='file-input' multiple hidden required />
//             </div>
//             <button onClick={Add_Product} className="addproduct-btn">Add</button>
//         </div>
//     )
// }

// export default AddProduct;


import React, { useState, useEffect } from 'react';
import './AddProduct.css';
import upload_area from '../Assets/upload_area.svg';

const AddProduct = () => {
    const [image, setImage] = useState([]);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: [],
        category: "women",
        new_price: "",
        old_price: "",
        available: "",
        description: "",
        added_by: "",
        seller: "",
    });
    const [userId, setUserId] = useState(null);
    const [seller, setSeller] = useState(null); // Add seller state

    useEffect(() => {
        const fetchUserData = async () => {
            const authToken = localStorage.getItem('auth-token');

            if (authToken) {
                try {
                    const response = await fetch('http://localhost:4000/user', {
                        method: 'GET',
                        headers: {
                            'auth-token': authToken,
                            'Content-Type': 'application/json',
                        },
                    });
                    console.log("Response headers:", response.headers); // Log response headers

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    console.log("Response from backend:", data);

                    if (data && data.user) {
                        setUserId(data.user._id);
                        setSeller(data.user.name); // Set seller name
                        console.log("User ID:", data.user._id);
                        console.log("Seller:", data.user.name);
                    } else {
                        console.error('User data fetch unsuccessful: No user data found');
                    }
                } catch (error) {
                    console.error('Fetch error:', error);
                }
            }
        };
        fetchUserData();
    }, []);

    const imageHandler = (e) => {
        let files = Array.from(e.target.files);

        // Select only the first 4 files if more than 4 are selected
        if (files.length > 4) {
            alert("You have selected more than 4 images. Only the first 4 will be uploaded.");
            files = files.slice(0, 4);
        }

        setImage(files);
        console.log('Selected images:', files);
    }

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    }

    const uploadSingleImage = async (img) => {
        let formData = new FormData();
        formData.append('product_images', img);

        console.log('Uploading image:', img);

        const response = await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        });
        return response.json();
    }

    const Add_Product = async () => {
        if (!productDetails.name || !productDetails.old_price || !productDetails.new_price || !productDetails.available || !productDetails.description || image.length === 0) {
            alert("Please fill in all fields before submitting.");
            return;
        }
    
        let responseData, product = { ...productDetails }, imageUrls = [];
    
        for (let img of image) {
            responseData = await uploadSingleImage(img);
            if (responseData.success) {
                imageUrls.push(responseData.image_urls[0]);
            }
        }
        product.image = imageUrls;
        product.added_by = userId;
        product.seller = seller;
    
        await fetch('http://localhost:4000/addproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        }).then((resp) => resp.json()).then((data) => {
            console.log('Add product response:', data);
            data.success ? alert("Product Added") : alert("Failed");
        });
    }
    

    return (
        <div className='add-product'>
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' required />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type here' required />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type here' required />
                </div>
                <div className="addproduct-itemfield">
                    <p>Product Nos</p>
                    <input value={productDetails.available} onChange={changeHandler} type="text" name="available" placeholder='Type here' required />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Details</p>
                <textarea value={productDetails.description} className='description' onChange={changeHandler} name="description" placeholder='Type here' required />
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image.length > 0 ? URL.createObjectURL(image[0]) : upload_area} className='addproduct-thumnail-img' alt="" />
                </label>
                <input onChange={imageHandler} type="file" name='images' id='file-input' multiple hidden required />
            </div>
            <button onClick={Add_Product} className="addproduct-btn">Add</button>
        </div>
    )
}

export default AddProduct;
