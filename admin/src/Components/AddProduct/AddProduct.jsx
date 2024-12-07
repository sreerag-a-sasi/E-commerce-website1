// import React, { useState } from 'react'
// import './AddProduct.css'
// import upload_area from '../../assets/upload_area.svg'

// const AddProduct = () => {

//     const [image, setImage] = useState(false);
//     const [productDetails, setProductDetails] = useState({
//         name: "",
//         image: "",
//         category: "women",
//         new_price: "",
//         old_price: "",
//         description: ""
//     });

//     const imageHandler = (e) => {
//         setImage(e.target.files[0]);
//     }
//     const changeHandler = (e) => {
//         setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
//     }

//     const Add_Product = async (req, res) => {
//         console.log("product details :", productDetails);
//         let responseData;
//         let product = productDetails;

//         let formData = new FormData();
//         formData.append('product', image);

//         await fetch('http://localhost:4000/upload', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//             },
//             body: formData,
//         }).then((resp) => resp.json()).then((data) => { responseData = data });

//         if (responseData.success) {
//             product.image = responseData.image_url;
//             console.log(product);
//             await fetch('http://localhost:4000/addproduct', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(product),
//             }).then((resp) => resp.json()).then((data) => {
//                 data.success ? alert("Product Added") : alert("Failed")
//             });

//         }
//     }

//     return (
//         <div className='add-product'>
//             <div className="addproduct-itemfield">
//                 <p>Product title</p>
//                 <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
//             </div>
//             <div className="addproduct-price">
//                 <div className="addproduct-itemfield">
//                     <p>Price</p>
//                     <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type here' />
//                 </div>
//                 <div className="addproduct-itemfield">
//                     <p>Offer Price</p>
//                     <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type here' />
//                 </div>
//             </div>
//             <div className="addproduct-itemfield">
//                 <p>Product details</p>
//                 <input value={productDetails.description} onChange={changeHandler} type="text" name="description" placeholder='Type here' />
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
//                     <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumnail-img' alt="" />
//                 </label>
//                 <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
//             </div>
//             <button onClick={() => { Add_Product() }} className="addproduct-btn">Add</button>
//         </div>
//     )
// }


// export default AddProduct;


// import React, { useState } from 'react';
// import './AddProduct.css';
// import upload_area from '../../assets/upload_area.svg';

// const AddProduct = () => {
//     const [image, setImages] = useState([]);
//     const [productDetails, setProductDetails] = useState({
//         name: "",
//         image: [],
//         category: "women",
//         new_price: "",
//         old_price: "",
//         description:""
//     });

//     const imageHandler = (e) => {
//         setImages(Array.from(e.target.files));
//     }

//     const changeHandler = (e) => {
//         setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
//     }

//     const Add_Product = async () => {
//         console.log("product details:", productDetails);
//         let responseData;
//         let product = productDetails;

//         let formData = new FormData();
//         image.forEach((image, index) => {
//             formData.append(`product_images`, image);
//         });

//         await fetch('http://localhost:4000/upload', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//             },
//             body: formData,
//         }).then((resp) => resp.json()).then((data) => { responseData = data });

//         if (responseData.success) {
//             product.images = responseData.image_url; // Assuming the response contains an array of image URLs
//             console.log(product);
//             await fetch('http://localhost:4000/addproduct', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(product),
//             }).then((resp) => resp.json()).then((data) => {
//                 data.success ? alert("Product Added") : alert("Failed");
//             });
//         }
//     }

//     return (
//         <div className='add-product'>
//             <div className="addproduct-itemfield">
//                 <p>Product title</p>
//                 <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
//             </div>
//             <div className="addproduct-price">
//                 <div className="addproduct-itemfield">
//                     <p>Price</p>
//                     <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type here' />
//                 </div>
//                 <div className="addproduct-itemfield">
//                     <p>Offer Price</p>
//                     <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type here' />
//                 </div>
//                 <div className="addproduct-itemfield">
//                     <p>product nos</p>
//                     <input value={productDetails.available} onChange={changeHandler} type="text" name="available" placeholder='Type here' />
//                 </div>
//             </div>
//             <div className="addproduct-itemfield">
//                 <p>Product details</p>
//                 <textarea value={productDetails.description} className='description' onChange={changeHandler} type="text" name="description" placeholder='Type here' />
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
//                 <input onChange={imageHandler} type="file" name='images' id='file-input' multiple hidden />
//             </div>
//             <button onClick={Add_Product} className="addproduct-btn">Add</button>
//         </div>
//     )
// }

// export default AddProduct;


// import React, { useState } from 'react';
// import './AddProduct.css';
// import upload_area from '../../assets/upload_area.svg';

// const AddProduct = () => {
//     const [image, setImage] = useState([]);
//     const [productDetails, setProductDetails] = useState({
//         name: "",
//         image: [],  // Using 'image' to store multiple image URLs
//         category: "women",
//         new_price: "",
//         old_price: "",
//         description:""
//     });

//     const imageHandler = (e) => {
//         setImage(Array.from(e.target.files));
//     }

//     const changeHandler = (e) => {
//         setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
//     }

//     const Add_Product = async () => {
//         console.log("product details:", productDetails);
//         let responseData;
//         let product = { ...productDetails };

//         let formData = new FormData();
//         image.forEach((img, index) => {
//             formData.append('product_images', img);
//         });

//         await fetch('http://localhost:4000/upload', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//             },
//             body: formData,
//         }).then((resp) => resp.json()).then((data) => { responseData = data });

//         if (responseData.success) {
//             product.image = responseData.image_urls; // Assuming the response contains an array of image URLs
//             console.log(product);
//             await fetch('http://localhost:4000/addproduct', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(product),
//             }).then((resp) => resp.json()).then((data) => {
//                 data.success ? alert("Product Added") : alert("Failed");
//             });
//         }
//     }

//     return (
//         <div className='add-product'>
//             <div className="addproduct-itemfield">
//                 <p>Product title</p>
//                 <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
//             </div>
//             <div className="addproduct-price">
//                 <div className="addproduct-itemfield">
//                     <p>Price</p>
//                     <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type here' />
//                 </div>
//                 <div className="addproduct-itemfield">
//                     <p>Offer Price</p>
//                     <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type here' />
//                 </div>
//                 <div className="addproduct-itemfield">
//                     <p>Product Nos</p>
//                     <input value={productDetails.available} onChange={changeHandler} type="text" name="available" placeholder='Type here' />
//                 </div>
//             </div>
//             <div className="addproduct-itemfield">
//                 <p>Product Details</p>
//                 <textarea value={productDetails.description} className='description' onChange={changeHandler} name="description" placeholder='Type here' />
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
//                 <input onChange={imageHandler} type="file" name='images' id='file-input' multiple hidden />
//             </div>
//             <button onClick={Add_Product} className="addproduct-btn">Add</button>
//         </div>
//     )
// }

// export default AddProduct;


// import React, { useState } from 'react';
// import './AddProduct.css';
// import upload_area from '../../assets/upload_area.svg';

// const AddProduct = () => {
//     const [image, setImage] = useState([]);
//     const [productDetails, setProductDetails] = useState({
//         name: "",
//         image: [],
//         category: "women",
//         new_price: "",
//         old_price: "",
//         available:"",
//         description: ""
//     });

//     const imageHandler = (e) => {
//         setImage(Array.from(e.target.files));
//     }

//     const changeHandler = (e) => {
//         setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
//     }

//     const Add_Product = async () => {
//         let responseData;
//         let product = { ...productDetails };

//         let formData = new FormData();
//         image.forEach((img, index) => {
//             formData.append('product_images', img);
//         });

//         await fetch('http://localhost:4000/upload', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//             },
//             body: formData,
//         }).then((resp) => resp.json()).then((data) => { responseData = data });

//         if (responseData.success) {
//             product.image = responseData.image_urls; // Assuming the response contains an array of image URLs
//             await fetch('http://localhost:4000/addproduct', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(product),
//             }).then((resp) => resp.json()).then((data) => {
//                 data.success ? alert("Product Added") : alert("Failed");
//             });
//         }
//     }

//     return (
//         <div className='add-product'>
//             <div className="addproduct-itemfield">
//                 <p>Product title</p>
//                 <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
//             </div>
//             <div className="addproduct-price">
//                 <div className="addproduct-itemfield">
//                     <p>Price</p>
//                     <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type here' />
//                 </div>
//                 <div className="addproduct-itemfield">
//                     <p>Offer Price</p>
//                     <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type here' />
//                 </div>
//                 <div className="addproduct-itemfield">
//                     <p>Product Nos</p>
//                     <input value={productDetails.available} onChange={changeHandler} type="text" name="available" placeholder='Type here' />
//                 </div>
//             </div>
//             <div className="addproduct-itemfield">
//                 <p>Product Details</p>
//                 <textarea value={productDetails.description} className='description' onChange={changeHandler} name="description" placeholder='Type here' />
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
//                 <input onChange={imageHandler} type="file" name='images' id='file-input' multiple hidden />
//             </div>
//             <button onClick={Add_Product} className="addproduct-btn">Add</button>
//         </div>
//     )
// }

// export default AddProduct;




// import React, { useState } from 'react';
// import './AddProduct.css';
// import upload_area from '../../assets/upload_area.svg';

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
//         setImage(Array.from(e.target.files));
//         console.log('Selected images:', Array.from(e.target.files));
//     }

//     const changeHandler = (e) => {
//         setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
//     }

//     const Add_Product = async () => {
//         let responseData;
//         let product = { ...productDetails };

//         let formData = new FormData();
//         image.forEach((img, index) => {
//             formData.append('product_images', img);
//         });

//         console.log('FormData before sending:', formData);

//         await fetch('http://localhost:4000/upload', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//             },
//             body: formData,
//         }).then((resp) => resp.json()).then((data) => {
//             console.log('Upload response data:', data);
//             responseData = data;
//         });

//         if (responseData.success) {
//             product.image = responseData.image_urls; // Assuming the response contains an array of image URLs
//             console.log('Final product object:', product);
//             await fetch('http://localhost:4000/addproduct', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(product),
//             }).then((resp) => resp.json()).then((data) => {
//                 console.log('Add product response:', data);
//                 data.success ? alert("Product Added") : alert("Failed");
//             });
//         }
//     }

//     return (
//         <div className='add-product'>
//             <div className="addproduct-itemfield">
//                 <p>Product title</p>
//                 <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
//             </div>
//             <div className="addproduct-price">
//                 <div className="addproduct-itemfield">
//                     <p>Price</p>
//                     <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type here' />
//                 </div>
//                 <div className="addproduct-itemfield">
//                     <p>Offer Price</p>
//                     <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type here' />
//                 </div>
//                 <div className="addproduct-itemfield">
//                     <p>Product Nos</p>
//                     <input value={productDetails.available} onChange={changeHandler} type="text" name="available" placeholder='Type here' />
//                 </div>
//             </div>
//             <div className="addproduct-itemfield">
//                 <p>Product Details</p>
//                 <textarea value={productDetails.description} className='description' onChange={changeHandler} name="description" placeholder='Type here' />
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
//                 <input onChange={imageHandler} type="file" name='images' id='file-input' multiple hidden />
//             </div>
//             <button onClick={Add_Product} className="addproduct-btn">Add</button>
//         </div>
//     )
// }

// export default AddProduct;


// import React, { useState } from 'react';
// import './AddProduct.css';
// import upload_area from '../../assets/upload_area.svg';

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
//         const files = Array.from(e.target.files);
//         setImage(files);
//         console.log('Selected images:', files);
//     }

//     const changeHandler = (e) => {
//         setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
//     }

//     const Add_Product = async () => {
//         let responseData;
//         let product = { ...productDetails };

//         let formData = new FormData();
//         image.forEach((img, index) => {
//             formData.append('product_images', img);
//         });

//         console.log('FormData before sending:', formData);

//         await fetch('http://localhost:4000/upload', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//             },
//             body: formData,
//         }).then((resp) => resp.json()).then((data) => {
//             console.log('Upload response data:', data);
//             responseData = data;
//         });

//         if (responseData.success) {
//             product.image = responseData.image_urls; // Assuming the response contains an array of image URLs
//             console.log('Final product object:', product);
//             await fetch('http://localhost:4000/addproduct', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(product),
//             }).then((resp) => resp.json()).then((data) => {
//                 console.log('Add product response:', data);
//                 data.success ? alert("Product Added") : alert("Failed");
//             });
//         }
//     }

//     return (
//         <div className='add-product'>
//             <div className="addproduct-itemfield">
//                 <p>Product title</p>
//                 <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
//             </div>
//             <div className="addproduct-price">
//                 <div className="addproduct-itemfield">
//                     <p>Price</p>
//                     <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type here' />
//                 </div>
//                 <div className="addproduct-itemfield">
//                     <p>Offer Price</p>
//                     <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type here' />
//                 </div>
//                 <div className="addproduct-itemfield">
//                     <p>Product Nos</p>
//                     <input value={productDetails.available} onChange={changeHandler} type="text" name="available" placeholder='Type here' />
//                 </div>
//             </div>
//             <div className="addproduct-itemfield">
//                 <p>Product Details</p>
//                 <textarea value={productDetails.description} className='description' onChange={changeHandler} name="description" placeholder='Type here' />
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
//                 <input onChange={imageHandler} type="file" name='images' id='file-input' multiple hidden />
//             </div>
//             <button onClick={Add_Product} className="addproduct-btn">Add</button>
//         </div>
//     )
// }

// export default AddProduct;



import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';

const AddProduct = () => {
    const [image, setImage] = useState([]);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: [],
        category: "women",
        new_price: "",
        old_price: "",
        available: "",
        description: ""
    });

    const imageHandler = (e) => {
        const files = Array.from(e.target.files);
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
        let responseData;
        let product = { ...productDetails };
        let imageUrls = [];

        for (let img of image) {
            responseData = await uploadSingleImage(img);
            if (responseData.success) {
                imageUrls.push(responseData.image_urls[0]); // Assuming the response contains the uploaded image URL
            }
        }

        product.image = imageUrls;
        console.log('Final product object with images:', product);

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
                <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type here' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type here' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Product Nos</p>
                    <input value={productDetails.available} onChange={changeHandler} type="text" name="available" placeholder='Type here' />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Details</p>
                <textarea value={productDetails.description} className='description' onChange={changeHandler} name="description" placeholder='Type here' />
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
                <input onChange={imageHandler} type="file" name='images' id='file-input' multiple hidden />
            </div>
            <button onClick={Add_Product} className="addproduct-btn">Add</button>
        </div>
    )
}

export default AddProduct;
