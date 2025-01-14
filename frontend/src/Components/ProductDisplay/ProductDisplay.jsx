// // // // // // import React, { useState, useContext, useMemo } from 'react';
// // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // import './ProductDisplay.css';
// // // // // // import star_icon from "../Assets/star_icon.png";
// // // // // // import star_dull_icon from "../Assets/star_dull_icon.png";
// // // // // // import { ShopContext } from '../../Context/ShopContext';

// // // // // // const ProductDisplay = (props) => {
// // // // // //     const { product } = props;
// // // // // //     const { addToCart, cartItems } = useContext(ShopContext);
// // // // // //     const [mainImage, setMainImage] = useState(product.image[0]); // State for main image
// // // // // //     const navigate = useNavigate(); // Initialize useNavigate

// // // // // //     // Check if the product is already in the cart
// // // // // //     const isInCart = useMemo(() => cartItems[product.id] > 0, [cartItems, product.id]);

// // // // // //     const handleBuyNow = () => {
// // // // // //         addToCart(product.id); // Optionally add the item to cart
// // // // // //         navigate('/checkout', { state: { product } }); // Navigate to the checkout page with product data
// // // // // //     };

// // // // // //     const handleAddToCart = () => {
// // // // // //         addToCart(product.id); // Add the item to the cart
// // // // // //         window.location.reload(); // Refresh the page silently without showing a reload to the user
// // // // // //     };

// // // // // //     return (
// // // // // //         <div className='productdisplay'>
// // // // // //             <div className="productdisplay-left">
// // // // // //                 <div className="productdisplay-img-list">
// // // // // //                     {product.image.map((img, index) => (
// // // // // //                         <img key={index} src={img} alt="" onClick={() => setMainImage(img)} /> // Update main image on click
// // // // // //                     ))}
// // // // // //                 </div>
// // // // // //                 <div className="productdisplay-img">
// // // // // //                     <img className='productdisplay-main-img' src={mainImage} alt="" />
// // // // // //                 </div>
// // // // // //             </div>
// // // // // //             <div className="productdisplay-right">
// // // // // //                 <h1>{product.name}</h1>
// // // // // //                 <div className="productdisplay-right-stars">
// // // // // //                     <img src={star_icon} alt="" />
// // // // // //                     <img src={star_icon} alt="" />
// // // // // //                     <img src={star_icon} alt="" />
// // // // // //                     <img src={star_icon} alt="" />
// // // // // //                     <img src={star_dull_icon} alt="" />
// // // // // //                     <p>{product.available}</p>
// // // // // //                 </div>
// // // // // //                 <div className="productdisplay-right-prices">
// // // // // //                     <div className="productdisplay-right-price-old">
// // // // // //                         ${product.old_price}
// // // // // //                     </div>
// // // // // //                     <div className="productdisplay-right-price-new">
// // // // // //                         ${product.new_price}
// // // // // //                     </div>
// // // // // //                 </div>
// // // // // //                 <div className="productdisplay-right-description">
// // // // // //                     {product.description}
// // // // // //                 </div>
// // // // // //                 <div className="productdisplay-right-size">
// // // // // //                     <h1>Select Size</h1>
// // // // // //                     <div className="productdisplay-right-sizes">
// // // // // //                         <div>S</div>
// // // // // //                         <div>M</div>
// // // // // //                         <div>L</div>
// // // // // //                         <div>XL</div>
// // // // // //                         <div>XXL</div>
// // // // // //                     </div>
// // // // // //                 </div>
// // // // // //                 <button 
// // // // // //                     onClick={handleAddToCart} 
// // // // // //                     disabled={isInCart} 
// // // // // //                     style={{ backgroundColor: isInCart ? '#ccc' : '#000', color: isInCart ? '#666' : '#fff' }}
// // // // // //                 >
// // // // // //                     {isInCart ? 'IN CART' : 'ADD TO CART'}
// // // // // //                 </button>
// // // // // //                 <button onClick={handleBuyNow}>BUY NOW</button> {/* Add onClick to navigate to checkout */}
// // // // // //                 <p className="productdisplay-right-category"><span>Category :</span>{product.category}</p>
// // // // // //                 <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
// // // // // //             </div>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default ProductDisplay;


// // // // // import React, { useState, useContext, useMemo } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import './ProductDisplay.css';
// // // // // import star_icon from "../Assets/star_icon.png";
// // // // // import star_dull_icon from "../Assets/star_dull_icon.png";
// // // // // import { ShopContext } from '../../Context/ShopContext';

// // // // // const ProductDisplay = (props) => {
// // // // //     const { product } = props;
// // // // //     const { addToCart, cartItems } = useContext(ShopContext);
// // // // //     const [mainImage, setMainImage] = useState(product.image[0]); // State for main image
// // // // //     const [isModalVisible, setIsModalVisible] = useState(false); // Modal state
// // // // //     const navigate = useNavigate(); // Initialize useNavigate


// // // // //     console.log("product from display : ",product);


// // // // //     // Check if the product is already in the cart
// // // // //     const isInCart = useMemo(() => cartItems[product.id] > 0, [cartItems, product.id]);

// // // // //     const handleBuyNow = () => {
// // // // //         addToCart(product.id); // Optionally add the item to cart
// // // // //         navigate('/checkout', { state: { product } }); // Navigate to the checkout page with product data
// // // // //     };

// // // // //     const handleAddToCart = () => {
// // // // //         addToCart(product.id); // Add the item to the cart
// // // // //         setIsModalVisible(true); // Show the modal

// // // // //         // Wait a short time, then reload the page in the background
// // // // //         setTimeout(() => {
// // // // //             setIsModalVisible(false); // Hide the modal after a short time
// // // // //             window.location.reload(); // Trigger page reload without interrupting the modal
// // // // //         }, 1500); // Modal stays for 1.5 seconds
// // // // //     };

// // // // //     return (
// // // // //         <div className='productdisplay'>
// // // // //             <div className="productdisplay-left">
// // // // //                 <div className="productdisplay-img-list">
// // // // //                     {product.image.map((img, index) => (
// // // // //                         <img key={index} src={img} alt="" onClick={() => setMainImage(img)} /> // Update main image on click
// // // // //                     ))}
// // // // //                 </div>
// // // // //                 <div className="productdisplay-img">
// // // // //                     <img className='productdisplay-main-img' src={mainImage} alt="" />
// // // // //                 </div>
// // // // //             </div>
// // // // //             <div className="productdisplay-right">
// // // // //                 <h1>{product.name}</h1>
// // // // //                 <div className="productdisplay-right-stars">
// // // // //                     <img src={star_icon} alt="" />
// // // // //                     <img src={star_icon} alt="" />
// // // // //                     <img src={star_icon} alt="" />
// // // // //                     <img src={star_icon} alt="" />
// // // // //                     <img src={star_dull_icon} alt="" />
// // // // //                     <p>{product.available}</p>
// // // // //                 </div>
// // // // //                 <div className="productdisplay-right-prices">
// // // // //                     <div className="productdisplay-right-price-old">
// // // // //                         ${product.old_price}
// // // // //                     </div>
// // // // //                     <div className="productdisplay-right-price-new">
// // // // //                         ${product.new_price}
// // // // //                     </div>
// // // // //                 </div>
// // // // //                 <div className="productdisplay-right-description">
// // // // //                     {product.description}
// // // // //                 </div>
// // // // //                 <div className="productdisplay-right-size">
// // // // //                     <h1>Select Size</h1>
// // // // //                     <div className="productdisplay-right-sizes">
// // // // //                         <div>S</div>
// // // // //                         <div>M</div>
// // // // //                         <div>L</div>
// // // // //                         <div>XL</div>
// // // // //                         <div>XXL</div>
// // // // //                     </div>
// // // // //                 </div>
// // // // //                 <button 
// // // // //                     onClick={handleAddToCart} 
// // // // //                     disabled={isInCart} 
// // // // //                     style={{ backgroundColor: isInCart ? '#ccc' : '#000', color: isInCart ? '#666' : '#fff' }}
// // // // //                 >
// // // // //                     {isInCart ? 'IN CART' : 'ADD TO CART'}
// // // // //                 </button>
// // // // //                 <button onClick={handleBuyNow}>BUY NOW</button> {/* Add onClick to navigate to checkout */}
// // // // //                 <p className="productdisplay-right-category"><span>Category :</span>{product.category}</p>
// // // // //                 <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
// // // // //             </div>

// // // // //             {/* Modal for item added to cart */}
// // // // //             {isModalVisible && (
// // // // //                 <div className="modal-overlay">
// // // // //                     <div className="modal-content">
// // // // //                         <p>Item Added to Cart!</p>
// // // // //                     </div>
// // // // //                 </div>
// // // // //             )}
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default ProductDisplay;




// // // // import React, { useState, useContext, useMemo, useEffect } from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import './ProductDisplay.css';
// // // // import star_icon from "../Assets/star_icon.png";
// // // // import star_dull_icon from "../Assets/star_dull_icon.png";
// // // // import { ShopContext } from '../../Context/ShopContext';

// // // // const ProductDisplay = (props) => {
// // // //     const { product } = props;
// // // //     const { addToCart, cartItems } = useContext(ShopContext);
// // // //     const [mainImage, setMainImage] = useState(product.image[0]);
// // // //     const [isModalVisible, setIsModalVisible] = useState(false);
// // // //     const [showPopup, setShowPopup] = useState(false);
// // // //     const [newQuantity, setNewQuantity] = useState(product.available);
// // // //     const [currentUserId, setCurrentUserId] = useState(null);
// // // //     const [currentUserType, setCurrentUserType] = useState(null);
// // // //     const [selectedSize, setSelectedSize] = useState(null); // Track selected size
// // // //     const [priceForSize, setPriceForSize] = useState(null); // Price based on selected size
// // // //     const navigate = useNavigate();

// // // //     useEffect(() => {
// // // //         const authToken = localStorage.getItem('auth-token');
// // // //         if (authToken) {
// // // //             fetch('http://localhost:4000/getuser', {
// // // //                 method: 'GET',
// // // //                 headers: {
// // // //                     'auth-token': authToken,
// // // //                     'Content-Type': 'application/json',
// // // //                 },
// // // //             })
// // // //                 .then((res) => res.json())
// // // //                 .then((data) => {
// // // //                     if (data && data.user) {
// // // //                         setCurrentUserId(data.user._id);
// // // //                         setCurrentUserType(data.user.user_type);
// // // //                     }
// // // //                 });
// // // //         }
// // // //     }, []);

// // // //     const isInCart = useMemo(() => cartItems[`${product.id}_${selectedSize}`] > 0, [cartItems, product.id, selectedSize]);

// // // //     const handleBuyNow = () => {
// // // //         if (!selectedSize) {
// // // //             alert("Please select a size before buying.");
// // // //             return;
// // // //         }
// // // //         addToCart(`${product.id}_${selectedSize}`);
// // // //         navigate('/checkout', { state: { product, selectedSize } });
// // // //     };

// // // //     const handleAddToCart = () => {
// // // //         if (!selectedSize) {
// // // //             alert("Please select a size before adding to the cart.");
// // // //             return;
// // // //         }
// // // //         addToCart(`${product.id}_${selectedSize}`);
// // // //         setIsModalVisible(true);

// // // //         setTimeout(() => {
// // // //             setIsModalVisible(false);
// // // //             window.location.reload();
// // // //         }, 1500);
// // // //     };

// // // //     const handleSizeClick = (size) => {
// // // //         setSelectedSize(size);
// // // //         setPriceForSize(product.price[size]);
// // // //     };

// // // //     const handleQuantityClick = () => {
// // // //         setShowPopup(true);
// // // //     };

// // // //     const handleQuantityUpdate = async () => {
// // // //         const authToken = localStorage.getItem('auth-token');

// // // //         if (!authToken) {
// // // //             alert("Please log in to update the quantity.");
// // // //             return;
// // // //         }

// // // //         const response = await fetch('http://localhost:4000/updatequantity', {
// // // //             method: 'POST',
// // // //             headers: {
// // // //                 Accept: 'application/json',
// // // //                 'auth-token': authToken,
// // // //                 'Content-Type': 'application/json',
// // // //             },
// // // //             body: JSON.stringify({ id: product._id, quantity: newQuantity }),
// // // //         });
// // // //         const result = await response.json();
// // // //         if (result.success) {
// // // //             alert('Quantity updated successfully!');
// // // //             setShowPopup(false);
// // // //             setNewQuantity(product.available + 1);
// // // //             window.location.reload();
// // // //         } else {
// // // //             alert('Failed to update quantity: ' + result.message);
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className='productdisplay'>
// // // //             <div className="productdisplay-left">
// // // //                 <div className="productdisplay-img-list">
// // // //                     {product.image.map((img, index) => (
// // // //                         <img key={index} src={img} alt="" onClick={() => setMainImage(img)} />
// // // //                     ))}
// // // //                 </div>
// // // //                 <div className="productdisplay-img">
// // // //                     <img className='productdisplay-main-img' src={mainImage} alt="" />
// // // //                 </div>
// // // //             </div>
// // // //             <div className="productdisplay-right">
// // // //                 <h1>{product.name}</h1>
// // // //                 <div className="productdisplay-right-stars">
// // // //                     <img src={star_icon} alt="" />
// // // //                     <img src={star_icon} alt="" />
// // // //                     <img src={star_icon} alt="" />
// // // //                     <img src={star_icon} alt="" />
// // // //                     <img src={star_dull_icon} alt="" />
// // // //                     <p>{product.available}</p>
// // // //                 </div>
// // // //                 <div className="productdisplay-right-prices">
// // // //                     {priceForSize ? (
// // // //                         <div className="productdisplay-right-price-new">Price: ${priceForSize}</div>
// // // //                     ) : (
// // // //                         <p>Select a size to view the price</p>
// // // //                     )}
// // // //                 </div>
// // // //                 <div className="productdisplay-right-description">
// // // //                     {product.description}
// // // //                 </div>
// // // //                 <div className="productdisplay-right-size">
// // // //                     <h1>Select Size</h1>
// // // //                     <div className="productdisplay-right-sizes">
// // // //                         {Object.keys(product.price || {}).map((size) => (
// // // //                             <div
// // // //                                 key={size}
// // // //                                 onClick={() => handleSizeClick(size)}
// // // //                                 className={`size-option ${selectedSize === size ? 'selected' : ''}`}
// // // //                             >
// // // //                                 {size}
// // // //                             </div>
// // // //                         ))}
// // // //                     </div>
// // // //                 </div>
// // // //                 <button
// // // //                     onClick={handleAddToCart}
// // // //                     disabled={isInCart || !selectedSize}
// // // //                     style={{ backgroundColor: isInCart ? '#ccc' : '#000', color: isInCart ? '#666' : '#fff' }}
// // // //                 >
// // // //                     {isInCart ? 'IN CART' : 'ADD TO CART'}
// // // //                 </button>
// // // //                 <button onClick={handleBuyNow}>BUY NOW</button>
// // // //                 {(product.added_by === currentUserId || currentUserType === '676c07e68c1c6815439b181c') && (
// // // //                     <div className="update-quantity-btn-container">
// // // //                         <button onClick={handleQuantityClick}>UPDATE QUANTITY</button>
// // // //                         {showPopup && (
// // // //                             <div className="popup">
// // // //                                 <input
// // // //                                     className='newquantity'
// // // //                                     type="number"
// // // //                                     value={newQuantity}
// // // //                                     onChange={(e) => setNewQuantity(Number(e.target.value))}
// // // //                                     placeholder="Enter new quantity"
// // // //                                 />
// // // //                                 <button onClick={handleQuantityUpdate}>Update</button>
// // // //                                 <button onClick={() => setShowPopup(false)}>Cancel</button>
// // // //                             </div>
// // // //                         )}
// // // //                     </div>
// // // //                 )}
// // // //                 <p className="productdisplay-right-category"><span>Category :</span>{product.category}</p>
// // // //                 <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
// // // //             </div>
// // // //             {isModalVisible && (
// // // //                 <div className="modal-overlay">
// // // //                     <div className="modal-content">
// // // //                         <p>Item Added to Cart!</p>
// // // //                     </div>
// // // //                 </div>
// // // //             )}
// // // //         </div>
// // // //     );
// // // // };

// // // // export default ProductDisplay;



// // // import React, { useState, useContext, useMemo, useEffect } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import './ProductDisplay.css';
// // // import star_icon from "../Assets/star_icon.png";
// // // import star_dull_icon from "../Assets/star_dull_icon.png";
// // // import { ShopContext } from '../../Context/ShopContext';

// // // const ProductDisplay = (props) => {
// // //     const { product } = props;
// // //     const { addToCart, cartItems } = useContext(ShopContext);
// // //     const [mainImage, setMainImage] = useState(product.image[0]); // State for main image
// // //     const [isModalVisible, setIsModalVisible] = useState(false); // Modal state
// // //     const [showPopup, setShowPopup] = useState(false);
// // //     const [newQuantity, setNewQuantity] = useState(product.available); // Initialize with current available quantity
// // //     const [currentUserId, setCurrentUserId] = useState(null); // To store current user's ID
// // //     const [currentUserType, setCurrentUserType] = useState(null); // To store current user's type
// // //     const navigate = useNavigate(); // Initialize useNavigate

// // //     // Fetch current user ID and user type once when component mounts
// // //     useEffect(() => {
// // //         const authToken = localStorage.getItem('auth-token');
// // //         if (authToken) {
// // //             fetch('http://localhost:4000/getuser', {
// // //                 method: 'GET',
// // //                 headers: {
// // //                     'auth-token': authToken,
// // //                     'Content-Type': 'application/json',
// // //                 },
// // //             })
// // //                 .then((res) => res.json())
// // //                 .then((data) => {
// // //                     if (data && data.user) {
// // //                         setCurrentUserId(data.user._id);
// // //                         setCurrentUserType(data.user.user_type); // Ensuring user_type is set
// // //                     }
// // //                 });
// // //         }
// // //     }, []);


// // //     // Check if the product is already in the cart
// // //     const isInCart = useMemo(() => cartItems[product.id] > 0, [cartItems, product.id]);

// // //     const handleBuyNow = () => {
// // //         addToCart(product.id); // Optionally add the item to cart
// // //         navigate('/checkout', { state: { product } }); // Navigate to the checkout page with product data
// // //     };

// // //     const handleAddToCart = () => {
// // //         addToCart(product.id); // Add the item to the cart
// // //         setIsModalVisible(true); // Show the modal

// // //         // Wait a short time, then reload the page in the background
// // //         setTimeout(() => {
// // //             setIsModalVisible(false); // Hide the modal after a short time
// // //             window.location.reload(); // Trigger page reload without interrupting the modal
// // //         }, 1500); // Modal stays for 1.5 seconds
// // //     };

// // //     // Handle quantity update button click
// // //     const handleQuantityClick = () => {
// // //         setShowPopup(true);
// // //     };

// // //     // Handle quantity update
// // //     const handleQuantityUpdate = async () => {
// // //         const authToken = localStorage.getItem('auth-token');

// // //         if (!authToken) {
// // //             alert("Please log in to update the quantity.");
// // //             return;
// // //         }

// // //         const response = await fetch('http://localhost:4000/updatequantity', {
// // //             method: 'POST',
// // //             headers: {
// // //                 Accept: 'application/json',
// // //                 'auth-token': authToken,
// // //                 'Content-Type': 'application/json',
// // //             },
// // //             body: JSON.stringify({ id: product._id, quantity: newQuantity }),
// // //         });
// // //         const result = await response.json();
// // //         if (result.success) {
// // //             alert('Quantity updated successfully!');
// // //             setShowPopup(false);
// // //             setNewQuantity(product.available + 1);
// // //             window.location.reload();
// // //         } else {
// // //             alert('Failed to update quantity: ' + result.message);
// // //         }
// // //     };


// // //     return (
// // //         <div className='productdisplay'>
// // //             <div className="productdisplay-left">
// // //                 <div className="productdisplay-img-list">
// // //                     {product.image.map((img, index) => (
// // //                         <img key={index} src={img} alt="" onClick={() => setMainImage(img)} /> // Update main image on click
// // //                     ))}
// // //                 </div>
// // //                 <div className="productdisplay-img">
// // //                     <img className='productdisplay-main-img' src={mainImage} alt="" />
// // //                 </div>
// // //             </div>
// // //             <div className="productdisplay-right">
// // //                 <h1>{product.name}</h1>
// // //                 <div className="productdisplay-right-stars">
// // //                     <img src={star_icon} alt="" />
// // //                     <img src={star_icon} alt="" />
// // //                     <img src={star_icon} alt="" />
// // //                     <img src={star_icon} alt="" />
// // //                     <img src={star_dull_icon} alt="" />
// // //                     <p>{product.available}</p>
// // //                 </div>
// // //                 <div className="productdisplay-right-prices">
// // //                     <div className="productdisplay-right-price-old">
// // //                         ${product.old_price}
// // //                     </div>
// // //                     <div className="productdisplay-right-price-new">
// // //                         ${product.new_price}
// // //                     </div>
// // //                 </div>
// // //                 <div className="productdisplay-right-description">
// // //                     {product.description}
// // //                 </div>
// // //                 <div className="productdisplay-right-size">
// // //                     <h1>Select Size</h1>
// // //                     <div className="productdisplay-right-sizes">
// // //                         <div>S</div>
// // //                         <div>M</div>
// // //                         <div>L</div>
// // //                         <div>XL</div>
// // //                         <div>XXL</div>
// // //                     </div>
// // //                 </div>
// // //                 <button
// // //                     onClick={handleAddToCart}
// // //                     disabled={isInCart}
// // //                     style={{ backgroundColor: isInCart ? '#ccc' : '#000', color: isInCart ? '#666' : '#fff' }}
// // //                 >
// // //                     {isInCart ? 'IN CART' : 'ADD TO CART'}
// // //                 </button>
// // //                 <button onClick={handleBuyNow}>BUY NOW</button> {/* Add onClick to navigate to checkout */}
// // //                 {(product.added_by === currentUserId || currentUserType === '676c07e68c1c6815439b181c') && (
// // //                     <div className="update-quantity-btn-container">
// // //                         <button onClick={handleQuantityClick}>UPDATE QUANTITY</button>
// // //                         {showPopup && (
// // //                             <div className="popup">
// // //                                 <input
// // //                                 className='newquantity'
// // //                                     type="number"
// // //                                     value={newQuantity}
// // //                                     onChange={(e) => setNewQuantity(Number(e.target.value))}
// // //                                     placeholder="Enter new quantity"
// // //                                 />
// // //                                 <button onClick={handleQuantityUpdate}>Update</button>
// // //                                 <button onClick={() => setShowPopup(false)}>Cancel</button>
// // //                             </div>
// // //                         )}
// // //                     </div>
// // //                 )}
// // //                 <p className="productdisplay-right-category"><span>Category :</span>{product.category}</p>
// // //                 <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>

// // //                 {/* Show the "UPDATE QUANTITY" button if the current user added the product or is an admin */}
// // //             </div>

// // //             {/* Modal for item added to cart */}
// // //             {isModalVisible && (
// // //                 <div className="modal-overlay">
// // //                     <div className="modal-content">
// // //                         <p>Item Added to Cart!</p>
// // //                     </div>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default ProductDisplay;




// import React, { useState, useContext, useMemo, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ProductDisplay.css';
// import star_icon from "../Assets/star_icon.png";
// import star_dull_icon from "../Assets/star_dull_icon.png";
// import { ShopContext } from '../../Context/ShopContext';

// const ProductDisplay = (props) => {
//     const { product } = props;
//     const { addToCart, cartItems } = useContext(ShopContext);
//     const [mainImage, setMainImage] = useState(product.image[0]); // State for main image
//     const [isModalVisible, setIsModalVisible] = useState(false); // Modal state
//     const [showPopup, setShowPopup] = useState(false);
//     const [newQuantity, setNewQuantity] = useState(product.available); // Initialize with current available quantity
//     const [currentUserId, setCurrentUserId] = useState(null); // To store current user's ID
//     const [currentUserType, setCurrentUserType] = useState(null); // To store current user's type
//     const navigate = useNavigate(); // Initialize useNavigate

//     console.log("product : ",product);
    
//     // Fetch current user ID and user type once when component mounts
//     useEffect(() => {
//         const authToken = localStorage.getItem('auth-token');
//         if (authToken) {
//             fetch('http://localhost:4000/getuser', {
//                 method: 'GET',
//                 headers: {
//                     'auth-token': authToken,
//                     'Content-Type': 'application/json',
//                 },
//             })
//                 .then((res) => res.json())
//                 .then((data) => {
//                     if (data && data.user) {
//                         setCurrentUserId(data.user._id);
//                         setCurrentUserType(data.user.user_type); // Ensuring user_type is set
//                     }
//                 });
//         }
//     }, []);

//     // Check if the product is already in the cart
//     const isInCart = useMemo(() => cartItems[product.id] > 0, [cartItems, product.id]);

//     const handleBuyNow = () => {
//         addToCart(product.id); // Optionally add the item to cart
//         navigate('/checkout', { state: { product } }); // Navigate to the checkout page with product data
//     };

//     const handleAddToCart = () => {
//         addToCart(product.id); // Add the item to the cart
//         setIsModalVisible(true); // Show the modal

//         // Wait a short time, then reload the page in the background
//         setTimeout(() => {
//             setIsModalVisible(false); // Hide the modal after a short time
//             window.location.reload(); // Trigger page reload without interrupting the modal
//         }, 1500); // Modal stays for 1.5 seconds
//     };

//     // Handle quantity update button click
//     const handleQuantityClick = () => {
//         setShowPopup(true);
//     };

//     // Handle quantity update
//     const handleQuantityUpdate = async () => {
//         const authToken = localStorage.getItem('auth-token');

//         if (!authToken) {
//             alert("Please log in to update the quantity.");
//             return;
//         }

//         const response = await fetch('http://localhost:4000/updatequantity', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'auth-token': authToken,
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ id: product._id, quantity: newQuantity }),
//         });
//         const result = await response.json();
//         if (result.success) {
//             alert('Quantity updated successfully!');
//             setShowPopup(false);
//             setNewQuantity(product.available + 1);
//             window.location.reload();
//         } else {
//             alert('Failed to update quantity: ' + result.message);
//         }
//     };

//     return (
//         <div className='productdisplay'>
//             <div className="productdisplay-left">
//                 <div className="productdisplay-img-list">
//                     {product.image.map((img, index) => (
//                         <img key={index} src={img} alt="" onClick={() => setMainImage(img)} /> // Update main image on click
//                     ))}
//                 </div>
//                 <div className="productdisplay-img">
//                     <img className='productdisplay-main-img' src={mainImage} alt="" />
//                 </div>
//             </div>
//             <div className="productdisplay-right">
//                 <h1>{product.name}</h1>
//                 <div className="productdisplay-right-stars">
//                     <img src={star_icon} alt="" />
//                     <img src={star_icon} alt="" />
//                     <img src={star_icon} alt="" />
//                     <img src={star_icon} alt="" />
//                     <img src={star_dull_icon} alt="" />
//                     <p>{product.available}</p>
//                 </div>
//                 <div className="productdisplay-right-prices">
//                     <div className="productdisplay-right-price-old">
//                         ${product.old_price}
//                     </div>
//                     <div className="productdisplay-right-price-new">
//                         ${product.new_price}
//                     </div>
//                 </div>
//                 <div className="productdisplay-right-description">
//                     {product.description}
//                 </div>
//                 <div className="productdisplay-right-size">
//                     <h1>Select Size</h1>
//                     <div className="productdisplay-right-sizes">
//                         <div>S : ${product?.S || 'N/A'}</div>
//                         <div>M : ${product?.M || 'N/A'}</div>
//                         <div>L : ${product?.L || 'N/A'}</div>
//                         <div>XL : ${product?.XL || 'N/A'}</div>
//                         <div>XXL : ${product?.XXL || 'N/A'}</div>
//                     </div>
//                 </div>
//                 <button
//                     onClick={handleAddToCart}
//                     disabled={isInCart}
//                     style={{ backgroundColor: isInCart ? '#ccc' : '#000', color: isInCart ? '#666' : '#fff' }}
//                 >
//                     {isInCart ? 'IN CART' : 'ADD TO CART'}
//                 </button>
//                 <button onClick={handleBuyNow}>BUY NOW</button> {/* Add onClick to navigate to checkout */}
//                 {(product.added_by === currentUserId || currentUserType === '676c07e68c1c6815439b181c') && (
//                     <div className="update-quantity-btn-container">
//                         <button onClick={handleQuantityClick}>UPDATE QUANTITY</button>
//                         {showPopup && (
//                             <div className="popup">
//                                 <input
//                                 className='newquantity'
//                                     type="number"
//                                     value={newQuantity}
//                                     onChange={(e) => setNewQuantity(Number(e.target.value))}
//                                     placeholder="Enter new quantity"
//                                 />
//                                 <button onClick={handleQuantityUpdate}>Update</button>
//                                 <button onClick={() => setShowPopup(false)}>Cancel</button>
//                             </div>
//                         )}
//                     </div>
//                 )}
//                 <p className="productdisplay-right-category"><span>Category :</span>{product.category}</p>
//                 <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>

//                 {/* Show the "UPDATE QUANTITY" button if the current user added the product or is an admin */}
//             </div>

//             {/* Modal for item added to cart */}
//             {isModalVisible && (
//                 <div className="modal-overlay">
//                     <div className="modal-content">
//                         <p>Item Added to Cart!</p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ProductDisplay;



import React, { useState, useContext, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { cartItems } = useContext(ShopContext);
    const [mainImage, setMainImage] = useState(product.image[0]); // State for main image
    const [isModalVisible, setIsModalVisible] = useState(false); // Modal state
    const [showPopup, setShowPopup] = useState(false);
    const [newQuantity, setNewQuantity] = useState(product.available); // Initialize with current available quantity
    const [currentUserId, setCurrentUserId] = useState(null); // To store current user's ID
    const [currentUserType, setCurrentUserType] = useState(null); // To store current user's type
    const [selectedSize, setSelectedSize] = useState(null); // State for selected size
    const navigate = useNavigate(); // Initialize useNavigate

    console.log("product : ",product);
    
    // Fetch current user ID and user type once when component mounts
    useEffect(() => {
        const authToken = localStorage.getItem('auth-token');
        if (authToken) {
            fetch('http://localhost:4000/getuser', {
                method: 'GET',
                headers: {
                    'auth-token': authToken,
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data && data.user) {
                        setCurrentUserId(data.user._id);
                        setCurrentUserType(data.user.user_type); // Ensuring user_type is set
                    }
                });
        }
    }, []);

    // Check if the product is already in the cart
    const isInCart = useMemo(() => cartItems[product.id] > 0, [cartItems, product.id]);

    const handleBuyNow = () => {
        navigate('/checkout', { state: { product } }); // Navigate to the checkout page with product data
    };

    const handleAddToCart = async () => {
        if (!selectedSize) {
            alert("Please select a size before adding to cart.");
            return;
        }

        const authToken = localStorage.getItem('auth-token');

        if (!authToken) {
            alert("Please log in to add items to the cart.");
            return;
        }

        const selectedPrice = product[selectedSize];

        const cartData = {
            id: product.id,
            quantity: 1,
            size: selectedSize,
            price: selectedPrice,
        };

        const response = await fetch('http://localhost:4000/addtocart', {
            method: 'POST',
            headers: {
                'auth-token': authToken,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartData),
        });

        const result = await response.json();
        if (result.success) {
            setIsModalVisible(true); // Show the modal
            alert(result.message);
            // Wait a short time, then hide the modal
            setTimeout(() => {
                setIsModalVisible(false);
            }, 1500); // Modal stays for 1.5 seconds
        } else {
            alert(result.message);
        }
    };

    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    // Handle quantity update button click
    const handleQuantityClick = () => {
        setShowPopup(true);
    };

    // Handle quantity update
    const handleQuantityUpdate = async () => {
        const authToken = localStorage.getItem('auth-token');

        if (!authToken) {
            alert("Please log in to update the quantity.");
            return;
        }

        const response = await fetch('http://localhost:4000/updatequantity', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'auth-token': authToken,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: product._id, quantity: newQuantity }),
        });
        const result = await response.json();
        if (result.success) {
            alert('Quantity updated successfully!');
            setShowPopup(false);
            setNewQuantity(product.available + 1);
            window.location.reload();
        } else {
            alert('Failed to update quantity: ' + result.message);
        }
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    {product.image.map((img, index) => (
                        <img key={index} src={img} alt="" onClick={() => setMainImage(img)} /> // Update main image on click
                    ))}
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={mainImage} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>{product.available}</p>
                </div>
                {/* <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                </div> */}
                <div className="productdisplay-right-description">
                    {product.description}
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div 
                            className={`size-option ${selectedSize === 'S' ? 'selected' : ''}`}
                            style={{ backgroundColor: selectedSize === 'S' ? 'red' : 'transparent' }}
                            onClick={() => handleSizeSelection('S')}
                        >
                            S : ${product?.S || 'N/A'}
                        </div>
                        <div 
                            className={`size-option ${selectedSize === 'M' ? 'selected' : ''}`}
                            style={{ backgroundColor: selectedSize === 'M' ? 'red' : 'transparent' }}
                            onClick={() => handleSizeSelection('M')}
                        >
                            M : ${product?.M || 'N/A'}
                        </div>
                        <div 
                            className={`size-option ${selectedSize === 'L' ? 'selected' : ''}`}
                            style={{ backgroundColor: selectedSize === 'L' ? 'red' : 'transparent' }}
                            onClick={() => handleSizeSelection('L')}
                        >
                            L : ${product?.L || 'N/A'}
                        </div>
                        <div 
                            className={`size-option ${selectedSize === 'XL' ? 'selected' : ''}`}
                            style={{ backgroundColor: selectedSize === 'XL' ? 'red' : 'transparent' }}
                            onClick={() => handleSizeSelection('XL')}
                        >
                            XL : ${product?.XL || 'N/A'}
                        </div>
                        <div 
                            className={`size-option ${selectedSize === 'XXL' ? 'selected' : ''}`}
                            style={{ backgroundColor: selectedSize === 'XXL' ? 'red' : 'transparent' }}
                            onClick={() => handleSizeSelection('XXL')}
                        >
                            XXL : ${product?.XXL || 'N/A'}
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleAddToCart}
                    disabled={isInCart}
                    style={{ backgroundColor: isInCart ? '#ccc' : '#000', color: isInCart ? '#666' : '#fff' }}
                >
                    {isInCart ? 'IN CART' : 'ADD TO CART'}
                </button>
                <button onClick={handleBuyNow}>BUY NOW</button> {/* Add onClick to navigate to checkout */}
                {(product.added_by === currentUserId || currentUserType === '676c07e68c1c6815439b181c') && (
                    <div className="update-quantity-btn-container">
                        <button onClick={handleQuantityClick}>UPDATE QUANTITY</button>
                        {showPopup && (
                            <div className="popup">
                                <input
                                className='newquantity'
                                    type="number"
                                    value={newQuantity}
                                    onChange={(e) => setNewQuantity(Number(e.target.value))}
                                    placeholder="Enter new quantity"
                                />
                                <button onClick={handleQuantityUpdate}>Update</button>
                                <button onClick={() => setShowPopup(false)}>Cancel</button>
                            </div>
                        )}
                    </div>
                )}
                <p className="productdisplay-right-category"><span>Category :</span>{product.category}</p>
                <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>

                {/* Show the "UPDATE QUANTITY" button if the current user added the product or is an admin */}
            </div>

            {/* Modal for item added to cart */}
            {isModalVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <p>Item Added to Cart!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDisplay;






