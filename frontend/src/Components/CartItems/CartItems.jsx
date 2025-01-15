// // // // import React, { useContext } from 'react';
// // // // import './CartItems.css';
// // // // import { ShopContext } from '../../Context/ShopContext';
// // // // import remove_icon from '../Assets/dustbin.png';
// // // // import add_icon from '../Assets/plus-button.png'
// // // // import minus_icon from '../Assets/minus-button.png'


// // // // const CartItems = () => {
// // // //     const { getTotalCartAmount, allProduct, cartItems, removeFromCart, deleteFromCart,addFromCart, } = useContext(ShopContext);
// // // //     return (
// // // //         <div className='cartitems'>
// // // //             <div className="cartitems-format-main">
// // // //                 <p>Products</p>
// // // //                 <p>Title</p>
// // // //                 <p>Price</p>
// // // //                 <p>Quantity</p>
// // // //                 <p>Total</p>
// // // //                 <p>Remove</p>
// // // //             </div>
// // // //             <hr />
// // // //             {allProduct.map((e) => {
// // // //                 if (cartItems[e.id] > 0) {
// // // //                     return (
// // // //                         <div key={e.id}>
// // // //                             <div className="cartitems-format cartitems-format-main">
// // // //                                 <img src={e.image[0]} alt="" className='carticon-product-icon' />
// // // //                                 <p>{e.name}</p>
// // // //                                 <p>${e.new_price}</p>
// // // //                                 {/* <button className='cartitems-quantity'>{cartItems[e.id]}</button> */}
// // // //                                 <div className="quantity">
// // // //                                 <img className='cartitems-remove-icon' src={add_icon} onClick={() =>addFromCart(e.id) } alt="" />
// // // //                                     <div className='cartitems-quantity'>{cartItems[e.id]}</div>
// // // //                                     <img className='cartitems-remove-icon' src={minus_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
// // // //                                 </div>
// // // //                                 <p>${e.new_price * cartItems[e.id]}</p>
// // // //                                 <img className='cartitems-delete-icon' src={remove_icon} onClick={() => { deleteFromCart(e.id) }} alt="" />
// // // //                             </div>
// // // //                             <hr />
// // // //                         </div>
// // // //                     );
// // // //                 }
// // // //                 return null;
// // // //             })}
// // // //             <div className="cartitems-down">
// // // //                 <div className="cartitems-total">
// // // //                     <h1>Cart Totals</h1>
// // // //                     <div>
// // // //                         <div className="cartitems-total-item">
// // // //                             <p>Subtotal</p>
// // // //                             <p>${getTotalCartAmount()}</p>
// // // //                         </div>
// // // //                         <hr />
// // // //                         <div className="cartitems-total-item">
// // // //                             <p>Shipping Fee</p>
// // // //                             <p>Free</p>
// // // //                         </div>
// // // //                         <hr />
// // // //                         <div className="cartitems-total-item">
// // // //                             <h3>Total</h3>
// // // //                             <h3>${getTotalCartAmount()}</h3>
// // // //                         </div>
// // // //                     </div>
// // // //                     <button>PROCEED TO CHECKOUT</button>
// // // //                 </div>
// // // //                 <div className="cartitem-promocode">
// // // //                     <p>If you have a promo code, enter it here:</p>
// // // //                     <div className="cartitems-promobox">
// // // //                         <input type="text" placeholder='Promo code' />
// // // //                         <button>Submit</button>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // }

// // // // export default CartItems;

// // // import React, { useContext } from 'react';
// // // import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
// // // import './CartItems.css';
// // // import { ShopContext } from '../../Context/ShopContext';
// // // import remove_icon from '../Assets/dustbin.png';
// // // import add_icon from '../Assets/plus-button.png';
// // // import minus_icon from '../Assets/minus-button.png';

// // // const CartItems = () => {
// // //     const { getTotalCartAmount, allProduct, cartItems, removeFromCart, deleteFromCart, addFromCart } = useContext(ShopContext);
// // //     const navigate = useNavigate(); // Initialize useNavigate

// // //     const redirectToProductPage = (productId) => {
// // //         navigate(`/product/${productId}`);
// // //     };

// // //     return (
// // //         <div className='cartitems'>
// // //             <div className="cartitems-format-main">
// // //                 <p>Products</p>
// // //                 <p>Title</p>
// // //                 <p>Price</p>
// // //                 <p>Quantity</p>
// // //                 <p>Total</p>
// // //                 <p>Remove</p>
// // //             </div>
// // //             <hr />
// // //             {allProduct.map((e) => {
// // //                 if (cartItems[e.id] > 0) {
// // //                     return (
// // //                         <div key={e.id}>
// // //                             <div className="cartitems-format cartitems-format-main">
// // //                                 <img
// // //                                     src={e.image[0]}
// // //                                     alt=""
// // //                                     className='carticon-product-icon'
// // //                                     onClick={() => redirectToProductPage(e.id)}
// // //                                 />
// // //                                 <p>{e.name}</p>
// // //                                 <p>${e.new_price}</p>
// // //                                 <div className="quantity">
// // //                                     <img className='cartitems-remove-icon' src={add_icon} onClick={() => addFromCart(e.id)} alt="" />
// // //                                     <div className='cartitems-quantity'>{cartItems[e.id]}</div>
// // //                                     <img className='cartitems-remove-icon' src={minus_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
// // //                                 </div>
// // //                                 <p>${e.new_price * cartItems[e.id]}</p>
// // //                                 <img className='cartitems-delete-icon' src={remove_icon} onClick={() => { deleteFromCart(e.id) }} alt="" />
// // //                             </div>
// // //                             <hr />
// // //                         </div>
// // //                     );
// // //                 }
// // //                 return null;
// // //             })}
// // //             <div className="cartitems-down">
// // //                 <div className="cartitems-total">
// // //                     <h1>Cart Totals</h1>
// // //                     <div>
// // //                         <div className="cartitems-total-item">
// // //                             <p>Subtotal</p>
// // //                             <p>${getTotalCartAmount()}</p>
// // //                         </div>
// // //                         <hr />
// // //                         <div className="cartitems-total-item">
// // //                             <p>Shipping Fee</p>
// // //                             <p>Free</p>
// // //                         </div>
// // //                         <hr />
// // //                         <div className="cartitems-total-item">
// // //                             <h3>Total</h3>
// // //                             <h3>${getTotalCartAmount()}</h3>
// // //                         </div>
// // //                     </div>
// // //                     <button onClick={() => navigate('/checkout', { state: { products: allProduct.filter(product => cartItems[product.id] > 0) } })}>
// // //                         PROCEED TO CHECKOUT
// // //                     </button>
// // //                 </div>
// // //                 <div className="cartitem-promocode">
// // //                     <p>If you have a promo code, enter it here:</p>
// // //                     <div className="cartitems-promobox">
// // //                         <input type="text" placeholder='Promo code' />
// // //                         <button>Submit</button>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default CartItems;




// // import React, { useContext, useEffect, useMemo } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './CartItems.css';
// // import { ShopContext } from '../../Context/ShopContext';
// // import remove_icon from '../Assets/dustbin.png';
// // import add_icon from '../Assets/plus-button.png';
// // import minus_icon from '../Assets/minus-button.png';

// // const CartItems = () => {
// //     const {
// //         getTotalCartAmount,
// //         allProduct,
// //         cartItems,
// //         removeFromCart,
// //         deleteFromCart,
// //         addFromCart,
// //         fetchCartData,
// //     } = useContext(ShopContext);

// //     const navigate = useNavigate();

// //     // Fetch the latest cart data when the component loads
// //     useEffect(() => {
// //         fetchCartData();
// //     }, [fetchCartData]);

// //     // Calculate the total amount using useMemo for optimization
// //     const totalAmount = useMemo(() => getTotalCartAmount(), [cartItems]);

// //     const redirectToProductPage = (productId) => {
// //         navigate(`/product/${productId}`);
// //     };

// //     const handleCheckout = () => {
// //         const productsInCart = cartItems.map((item) => {
// //             const product = allProduct.find((p) => p.productId === item.id);
// //             if (product) {
// //                 return {
// //                     ...product,
// //                     quantity: item.quantity,
// //                     size: item.size,
// //                     total: product.new_price * item.quantity,
// //                 };
// //             }
// //             return null;
// //         }).filter(Boolean);

// //         if (productsInCart.length > 0) {
// //             navigate('/checkout', { state: { products: productsInCart } });
// //         } else {
// //             alert('Your cart is empty!');
// //         }
// //     };

// //     return (
// //         <div className="cartitems">
// //             {cartItems.length > 0 ? (
// //                 <>
// //                     <div className="cartitems-format-main">
// //                         <p>Title</p>
// //                         <p>Price</p>
// //                         <p>Quantity</p>
// //                         <p>Size</p>
// //                         <p>Total</p>
// //                         <p>Remove</p>
// //                     </div>
// //                     <hr />
// //                     {cartItems.map((item) => {
// //                         const product = allProduct.find((p) => p.productId === item.id);
// //                         if (product) {
// //                             return (
// //                                 <div key={item.id}>
// //                                     <div className="cartitems-format cartitems-format-main">
// //                                         <img
// //                                             src={product.image[0]}
// //                                             alt="product"
// //                                             className="carticon-product-icon"
// //                                             onClick={() => redirectToProductPage(item.id)}
// //                                         />
// //                                         <p>{product.name}</p>
// //                                         <p>${product.new_price}</p>
// //                                         <div className="quantity">
// //                                             <img
// //                                                 className="cartitems-remove-icon"
// //                                                 src={add_icon}
// //                                                 onClick={() => addFromCart(item.id, item.size)}
// //                                                 alt="Add"
// //                                             />
// //                                             <div className="cartitems-quantity">{item.quantity}</div>
// //                                             <img
// //                                                 className="cartitems-remove-icon"
// //                                                 src={minus_icon}
// //                                                 onClick={() => removeFromCart(item.id, item.size)}
// //                                                 alt="Remove"
// //                                             />
// //                                         </div>
// //                                         <p>{item.size}</p>
// //                                         <p>${(product.new_price * item.quantity).toFixed(2)}</p>
// //                                         <img
// //                                             className="cartitems-delete-icon"
// //                                             src={remove_icon}
// //                                             onClick={() => deleteFromCart(item.id, item.size)}
// //                                             alt="Delete"
// //                                         />
// //                                     </div>
// //                                     <hr />
// //                                 </div>
// //                             );
// //                         }
// //                         return null;
// //                     })}
// //                     <div className="cartitems-down">
// //                         <div className="cartitems-total">
// //                             <h1>Cart Totals</h1>
// //                             <div>
// //                                 <div className="cartitems-total-item">
// //                                     <p>Subtotal</p>
// //                                     <p>${totalAmount.toFixed(2)}</p>
// //                                 </div>
// //                                 <hr />
// //                                 <div className="cartitems-total-item">
// //                                     <p>Shipping Fee</p>
// //                                     <p>Free</p>
// //                                 </div>
// //                                 <hr />
// //                                 <div className="cartitems-total-item">
// //                                     <h3>Total</h3>
// //                                     <h3>${totalAmount.toFixed(2)}</h3>
// //                                 </div>
// //                             </div>
// //                             <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
// //                         </div>
// //                         <div className="cartitem-promocode">
// //                             <p>If you have a promo code, enter it here:</p>
// //                             <div className="cartitems-promobox">
// //                                 <input type="text" placeholder="Promo code" />
// //                                 <button>Submit</button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </>
// //             ) : (
// //                 <div className="cartitems-empty">
// //                     <h2>Your cart is empty!</h2>
// //                     <button onClick={() => navigate('/')}>Go Shopping</button>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default CartItems;

// // import React, { useContext, useEffect, useMemo } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './CartItems.css';
// // import { ShopContext } from '../../Context/ShopContext';
// // import remove_icon from '../Assets/dustbin.png';
// // import add_icon from '../Assets/plus-button.png';
// // import minus_icon from '../Assets/minus-button.png';

// // const CartItems = () => {
// //     const {
// //         getTotalCartAmount,
// //         allProduct,
// //         cartItems,
// //         removeFromCart,
// //         deleteFromCart,
// //         addFromCart,
// //         fetchCartData,
// //     } = useContext(ShopContext);

// //     const navigate = useNavigate();

// //     console.log("cart items in cart: ", cartItems);

// //     // Fetch the latest cart data when the component loads
// //     useEffect(() => {
// //         fetchCartData();
// //     }, [fetchCartData]);

// //     // Calculate the total amount using useMemo for optimization
// //     const totalAmount = useMemo(() => {
// //         return Object.values(cartItems).reduce((total, cartItem) => {
// //             // Find the product by id
// //             const product = allProduct.find((prod) => prod.id === cartItem.id);
// //             if (product) {
// //                 // Find the price for the specific size
// //                 const sizePrice = product[cartItem.size];
// //                 return total + sizePrice * cartItem.quantity;
// //             }
// //             return total;
// //         }, 0);
// //     }, [cartItems, allProduct]);

// //     const redirectToProductPage = (productId) => {
// //         navigate(`/product/${productId}`);
// //     };

// //     const handleCheckout = () => {
// //         const productsInCart = Object.values(cartItems).map((cartItem) => {
// //             const product = allProduct.find((prod) => prod.id === cartItem.id);
// //             return { ...cartItem, product };
// //         });
// //         if (productsInCart.length > 0) {
// //             navigate('/checkout', { state: { products: productsInCart } });
// //         } else {
// //             alert('Your cart is empty!');
// //         }
// //     };

// //     return (
// //         <div className="cartitems">
// //             {Object.keys(cartItems).length > 0 ? (
// //                 <>
// //                     <div className="cartitems-format-main">
// //                         <p>Products</p>
// //                         <p>Title</p>
// //                         <p>Size</p>
// //                         <p>Price</p>
// //                         <p>Quantity</p>
// //                         <p>Total</p>
// //                         <p>Remove</p>
// //                     </div>
// //                     <hr />
// //                     {Object.values(cartItems).map((cartItem, index) => {
// //                         const product = allProduct.find((prod) => prod.id === cartItem.id);
// //                         if (product) {
// //                             const sizePrice = product[cartItem.size];
// //                             return (
// //                                 <div key={`${cartItem.id}-${index}`}>
// //                                     <div className="cartitems-format cartitems-format-main">
// //                                         <img
// //                                             src={product.image[0]}
// //                                             alt="product"
// //                                             className="carticon-product-icon"
// //                                             onClick={() => redirectToProductPage(product.id)}
// //                                         />
// //                                         <p>{product.name}</p>
// //                                         <p>{cartItem.size}</p>
// //                                         <p>${sizePrice}</p>
// //                                         <div className="quantity">
// //                                             <img
// //                                                 className="cartitems-remove-icon"
// //                                                 src={add_icon}
// //                                                 onClick={() => addFromCart(cartItem.id)}
// //                                                 alt="Add"
// //                                             />
// //                                             <div className="cartitems-quantity">{cartItem.quantity}</div>
// //                                             <img
// //                                                 className="cartitems-remove-icon"
// //                                                 src={minus_icon}
// //                                                 onClick={() => removeFromCart(cartItem.id)}
// //                                                 alt="Remove"
// //                                             />
// //                                         </div>
// //                                         <p>${sizePrice * cartItem.quantity}</p>
// //                                         <img
// //                                             className="cartitems-delete-icon"
// //                                             src={remove_icon}
// //                                             onClick={() => deleteFromCart(cartItem.id)}
// //                                             alt="Delete"
// //                                         />
// //                                     </div>
// //                                     <hr />
// //                                 </div>
// //                             );
// //                         }
// //                         return null;
// //                     })}
// //                     <div className="cartitems-down">
// //                         <div className="cartitems-total">
// //                             <h1>Cart Totals</h1>
// //                             <div>
// //                                 <div className="cartitems-total-item">
// //                                     <p>Subtotal</p>
// //                                     <p>${totalAmount}</p>
// //                                 </div>
// //                                 <hr />
// //                                 <div className="cartitems-total-item">
// //                                     <p>Shipping Fee</p>
// //                                     <p>Free</p>
// //                                 </div>
// //                                 <hr />
// //                                 <div className="cartitems-total-item">
// //                                     <h3>Total</h3>
// //                                     <h3>${totalAmount}</h3>
// //                                 </div>
// //                             </div>
// //                             <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
// //                         </div>
// //                         <div className="cartitem-promocode">
// //                             <p>If you have a promo code, enter it here:</p>
// //                             <div className="cartitems-promobox">
// //                                 <input type="text" placeholder="Promo code" />
// //                                 <button>Submit</button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </>
// //             ) : (
// //                 <div className="cartitems-empty">
// //                     <h2>Your cart is empty!</h2>
// //                     <button onClick={() => navigate('/')}>Go Shopping</button>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default CartItems;

// // //                         <p>Products</p>






// import React, { useContext, useEffect, useMemo } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CartItems.css';
// import { ShopContext } from '../../Context/ShopContext';
// import remove_icon from '../Assets/dustbin.png';
// import add_icon from '../Assets/plus-button.png';
// import minus_icon from '../Assets/minus-button.png';

// const CartItems = () => {
//     const {
//         getTotalCartAmount,
//         allProduct,
//         cartItems,
//         fetchCartData,
//         removeFromCart,
//         addFromCart,
//     } = useContext(ShopContext);

//     const navigate = useNavigate();

//     console.log("cart items in cart: ", cartItems);

//     // Fetch the latest cart data when the component loads
//     useEffect(() => {
//         fetchCartData();
//     }, [fetchCartData]);

//     // Calculate the total amount using useMemo for optimization
//     const totalAmount = useMemo(() => {
//         // Calculate the initial total amount
//         let total = Object.values(cartItems).reduce((total, cartItem) => {
//             // Find the product by id
//             const product = allProduct.find((prod) => prod.id === cartItem.id);
//             if (product) {
//                 // Find the price for the specific size
//                 const sizePrice = product[cartItem.size];
//                 return total + sizePrice * cartItem.quantity;
//             }
//             return total;
//         }, 0);

//         // If total is less than 1000, add a fee of 50
//         if (total < 1000) {
//             total += 50;
//         }

//         return total;
//     }, [cartItems, allProduct]);

//     const redirectToProductPage = (productId) => {
//         navigate(`/product/${productId}`);
//     };

//     const handleCheckout = () => {
//         const productsInCart = Object.values(cartItems).map((cartItem) => {
//             const product = allProduct.find((prod) => prod.id === cartItem.id);
//             return { ...cartItem, product };
//         });
//         if (productsInCart.length > 0) {
//             navigate('/checkout', { state: { products: productsInCart } });
//         } else {
//             alert('Your cart is empty!');
//         }
//     };

//     // Handle delete from cart with direct API call
//     const deleteFromCart = async (itemId, size) => {
//         try {
//             console.log("Request to delete item from cart:", { itemId, size }); // Log the request data
    
//             const response = await fetch('http://localhost:4000/deletefromcart', {
//                 method: 'POST',
//                 headers: {
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ itemId, size }), // Pass both itemId and size
//             });
    
//             console.log("Response status:", response.status); // Log the response status
//             console.log("Response headers:", response.headers); // Log the response headers
    
//             if (!response.ok) {
//                 const contentType = response.headers.get('content-type');
//                 console.log("Response content type:", contentType); // Log the content type
    
//                 if (contentType && contentType.includes('application/json')) {
//                     const errorData = await response.json();
//                     console.log("Error data:", errorData); // Log the error data
//                     throw new Error(`Failed to delete item from cart: ${errorData.message}`);
//                 } else {
//                     throw new Error('Failed to delete item from cart: Server returned an unexpected response');
//                 }
//             }
    
//             console.log("Item successfully deleted from cart"); // Log success message
//             console.log("Deleted item id:", itemId); // Log the itemId
//             console.log("Deleted item size:", size); // Log the size
    
//             // Fetch the updated cart data after successful deletion
//             fetchCartData();
//         } catch (error) {
//             console.error("Error deleting item from cart:", error);
//             // Optionally, display an error message to the user
//         }
//     };


//     return (
//         <div className="cartitems">
//             {Object.keys(cartItems).length > 0 ? (
//                 <>
//                     <div className="cartitems-format-main">
//                         <p>Products</p>
//                         <p>Title</p>
//                         <p>Size</p>
//                         <p>Price</p>
//                         <p>Quantity</p>
//                         <p>Total</p>
//                         <p>Remove</p>
//                     </div>
//                     <hr />
//                     {Object.values(cartItems).map((cartItem, index) => {
//                         const product = allProduct.find((prod) => prod.id === cartItem.id);
//                         if (product) {
//                             const sizePrice = product[cartItem.size];
//                             return (
//                                 <div key={`${cartItem.id}-${index}`}>
//                                     <div className="cartitems-format cartitems-format-main">
//                                         <img
//                                             src={product.image[0]}
//                                             alt="product"
//                                             className="carticon-product-icon"
//                                             onClick={() => redirectToProductPage(product.id)}
//                                         />
//                                         <p>{product.name}</p>
//                                         <p>{cartItem.size}</p>
//                                         <p>${sizePrice}</p>
//                                         <div className="quantity">
//                                             <img
//                                                 className="cartitems-remove-icon"
//                                                 src={add_icon}
//                                                 onClick={() => addFromCart(cartItem.id, cartItem.size)}
//                                                 alt="Add"
//                                             />
//                                             <div className="cartitems-quantity">{cartItem.quantity}</div>
//                                             <img
//                                                 className="cartitems-remove-icon"
//                                                 src={minus_icon}
//                                                 onClick={() => removeFromCart(cartItem.id, cartItem.size)}
//                                                 alt="Remove"
//                                             />
//                                         </div>
//                                         <p>${sizePrice * cartItem.quantity}</p>
//                                         <img
//                                             className="cartitems-delete-icon"
//                                             src={remove_icon}
//                                             onClick={() => deleteFromCart(cartItem.id, cartItem.size)} // Pass both itemId and size
//                                             alt="Delete"
//                                         />
//                                     </div>
//                                     <hr />
//                                 </div>
//                             );
//                         }
//                         return null;
//                     })}
//                     <div className="cartitems-down">
//                         <div className="cartitems-total">
//                             <h1>Cart Totals</h1>
//                             <div>
//                                 <div className="cartitems-total-item">
//                                     <p>Subtotal</p>
//                                     <p>${totalAmount}</p>
//                                 </div>
//                                 <hr />
//                                 <div className="cartitems-total-item">
//                                     <p>Shipping Fee</p>
//                                     <p>{totalAmount < 1000 ? 'Fee: 50' : 'Free'}</p>
//                                 </div>
//                                 <hr />
//                                 <div className="cartitems-total-item">
//                                     <h3>Total</h3>
//                                     <h3>${totalAmount}</h3>
//                                 </div>
//                             </div>
//                             <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
//                         </div>
//                         <div className="cartitem-promocode">
//                             <p>If you have a promo code, enter it here:</p>
//                             <div className="cartitems-promobox">
//                                 <input type="text" placeholder="Promo code" />
//                                 <button>Submit</button>
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             ) : (
//                 <div className="cartitems-empty">
//                     <h2>Your cart is empty!</h2>
//                     <button onClick={() => navigate('/')}>Go Shopping</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CartItems;



import React, { useContext, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/dustbin.png';
import add_icon from '../Assets/plus-button.png';
import minus_icon from '../Assets/minus-button.png';

const CartItems = () => {
    const {
        allProduct,
        cartItems,
        fetchCartData,
        removeFromCart,
        addFromCart,
    } = useContext(ShopContext);

    const navigate = useNavigate();

    console.log("cart items in cart: ", cartItems);

    useEffect(() => {
        fetchCartData();
    }, [fetchCartData]);

    const subtotalAmount = useMemo(() => {
        return Object.values(cartItems).reduce((total, cartItem) => {
            const product = allProduct.find((prod) => prod.id === cartItem.id);
            if (product) {
                const sizePrice = product[cartItem.size];
                return total + sizePrice * cartItem.quantity;
            }
            return total;
        }, 0);
    }, [cartItems, allProduct]);

    const totalAmount = useMemo(() => {
        let total = subtotalAmount;
        if (total < 1000) {
            total += 50;
        }
        return total;
    }, [subtotalAmount]);

    const redirectToProductPage = (productId) => {
        navigate(`/product/${productId}`);
    };

    const handleCheckout = () => {
        const productsInCart = Object.values(cartItems).map((cartItem) => {
            const product = allProduct.find((prod) => prod.id === cartItem.id);
            if (!product) {
                console.error(`Product not found for cart item ID: ${cartItem.id}`);
                return null;
            }
            return {
                _id: cartItem._id, // Use the _id from cartData
                id: product.id,
                name: product.name,
                image: Array.isArray(product.image) ? product.image[0] : 'default-image-url.jpg',
                size: cartItem.size,
                price: product[cartItem.size],
                quantity: cartItem.quantity
            };
        }).filter(item => item !== null);
    
        if (productsInCart.length > 0) {
            navigate('/checkout', { state: { products: productsInCart } });
        } else {
            alert('Your cart is empty!');
        }
    };
    

    const deleteFromCart = async (itemId, size) => {
        try {
            const response = await fetch('http://localhost:4000/deletefromcart', {
                method: 'POST',
                headers: {
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ itemId, size }),
            });

            if (!response.ok) {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const errorData = await response.json();
                    throw new Error(`Failed to delete item from cart: ${errorData.message}`);
                } else {
                    throw new Error('Failed to delete item from cart: Server returned an unexpected response');
                }
            }

            fetchCartData();
        } catch (error) {
            console.error("Error deleting item from cart:", error);
        }
    };

    return (
        <div className="cartitems">
            {Object.keys(cartItems).length > 0 ? (
                <>
                    <div className="cartitems-format-main">
                        <p>Products</p>
                        <p>Title</p>
                        <p>Size</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <hr />
                    {Object.values(cartItems).map((cartItem, index) => {
                        const product = allProduct.find((prod) => prod.id === cartItem.id);
                        if (product) {
                            const sizePrice = product[cartItem.size];
                            return (
                                <div key={`${cartItem.id}-${index}`}>
                                    <div className="cartitems-format cartitems-format-main">
                                        <img
                                            src={product.image[0]}
                                            alt="product"
                                            className="carticon-product-icon"
                                            onClick={() => redirectToProductPage(product.id)}
                                        />
                                        <p>{product.name}</p>
                                        <p>{cartItem.size}</p>
                                        <p>${sizePrice}</p>
                                        <div className="quantity">
                                            <img
                                                className="cartitems-remove-icon"
                                                src={add_icon}
                                                onClick={() => addFromCart(cartItem.id, cartItem.size)}
                                                alt="Add"
                                            />
                                            <div className="cartitems-quantity">{cartItem.quantity}</div>
                                            <img
                                                className="cartitems-remove-icon"
                                                src={minus_icon}
                                                onClick={() => removeFromCart(cartItem.id, cartItem.size)}
                                                alt="Remove"
                                            />
                                        </div>
                                        <p>${sizePrice * cartItem.quantity}</p>
                                        <img
                                            className="cartitems-delete-icon"
                                            src={remove_icon}
                                            onClick={() => deleteFromCart(cartItem.id, cartItem.size)}
                                            alt="Delete"
                                        />
                                    </div>
                                    <hr />
                                </div>
                            );
                        }
                        return null;
                    })}
                    <div className="cartitems-down">
                        <div className="cartitems-total">
                            <h1>Cart Totals</h1>
                            <div>
                                <div className="cartitems-total-item">
                                    <p>Subtotal</p>
                                    <p>${subtotalAmount}</p> {/* Updated to show subtotal without shipping fee */}
                                </div>
                                <hr />
                                <div className="cartitems-total-item">
                                    <p>Shipping Fee</p>
                                    <p>{subtotalAmount < 1000 ? 'Fee: 50' : 'Free'}</p>
                                </div>
                                <hr />
                                <div className="cartitems-total-item">
                                    <h3>Total</h3>
                                    <h3>${totalAmount}</h3>
                                </div>
                            </div>
                            <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
                        </div>
                        <div className="cartitem-promocode">
                            <p>If you have a promo code, enter it here:</p>
                            <div className="cartitems-promobox">
                                <input type="text" placeholder="Promo code" />
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="cartitems-empty">
                    <h2>Your cart is empty!</h2>
                    <button onClick={() => navigate('/')}>Go Shopping</button>
                </div>
            )}
        </div>
    );
};

export default CartItems;
