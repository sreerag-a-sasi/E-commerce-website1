// // // // import React, { useContext } from 'react';
// // // // import { useLocation, useNavigate } from 'react-router-dom';
// // // // import './CheckoutPage.css';
// // // // import { ShopContext } from '../../Context/ShopContext';

// // // // const CheckoutPage = () => {
// // // //     const location = useLocation();
// // // //     const navigate = useNavigate();
// // // //     const { cartItems, allProduct, getTotalCartAmount, clearCart } = useContext(ShopContext);

// // // //     let cartProducts = [];
// // // //     let isDirectPurchase = false;

// // // //     // Check if product data is passed via location.state
// // // //     if (location.state && location.state.product) {
// // // //         cartProducts = [location.state.product];
// // // //         isDirectPurchase = true;
// // // //     } else {
// // // //         // Use cartItems context if no product data in location.state
// // // //         cartProducts = allProduct.filter(product => cartItems[product.id] > 0);
// // // //     }

// // // //     const getSubtotal = () => {
// // // //         if (isDirectPurchase) {
// // // //             return cartProducts[0].new_price;
// // // //         }
// // // //         return getTotalCartAmount();
// // // //     };

// // // //     const getTotal = () => {
// // // //         const shippingFee = 20;
// // // //         return getSubtotal() + shippingFee;
// // // //     };

// // // //     const handlePlaceOrder = async () => {
// // // //         const orderProducts = cartProducts.map(product => ({
// // // //             id: product.id,
// // // //             quantity: isDirectPurchase ? 1 : cartItems[product.id]
// // // //         }));

// // // //         try {
// // // //             const response = await fetch('http://localhost:4000/placeOrder', {
// // // //                 method: 'POST',
// // // //                 headers: {
// // // //                     Accept: 'application/json',
// // // //                     'auth-token': localStorage.getItem('auth-token'),
// // // //                     'Content-Type': 'application/json'
// // // //                 },
// // // //                 body: JSON.stringify({ products: orderProducts })
// // // //             });

// // // //             if (response.ok) {
// // // //                 alert("Order placed successfully");
// // // //                 clearCart();
// // // //                 navigate('/');
// // // //             } else {
// // // //                 const data = await response.json();
// // // //                 alert(`Error placing order: ${data.message}`);
// // // //             }
// // // //         } catch (error) {
// // // //             console.error("Error placing order:", error);
// // // //             alert("Error placing order. Please try again.");
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className="container">
// // // //             <div className="product-info">
// // // //                 <h2>Product Information</h2>
// // // //                 {cartProducts.map(product => (
// // // //                     <div className="product-item" key={product.id}>
// // // //                         <img src={product.image[0]} alt="Product" className="product-image" />
// // // //                         <div className="product-details">
// // // //                             <p><strong>Item:</strong> {product.name}</p>
// // // //                             <p><strong>Price:</strong> ${product.new_price}</p>
// // // //                             <p><strong>Size:</strong> M</p>
// // // //                             <p><strong>Quantity:</strong> {isDirectPurchase ? 1 : cartItems[product.id]}</p>
// // // //                             <p><strong>Total:</strong> ${product.new_price * (isDirectPurchase ? 1 : cartItems[product.id])}</p>
// // // //                         </div>
// // // //                     </div>
// // // //                 ))}
// // // //             </div>
// // // //             <div className="billing-info">
// // // //                 <h2>Billing Information</h2>
// // // //                 <form>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="fullname">Full Name</label>
// // // //                         <input type="text" id="fullname" name="fullname" required />
// // // //                     </div>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="email">Email Address</label>
// // // //                         <input type="email" id="email" name="email" required />
// // // //                     </div>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="phone">Phone Number</label>
// // // //                         <input type="tel" id="phone" name="phone" required />
// // // //                     </div>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="address">Address</label>
// // // //                         <input type="text" id="address" name="address" required />
// // // //                     </div>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="city">City</label>
// // // //                         <input type="text" id="city" name="city" required />
// // // //                     </div>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="state">State/Province</label>
// // // //                         <input type="text" id="state" name="state" required />
// // // //                     </div>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="postal">Postal Code</label>
// // // //                         <input type="text" id="postal" name="postal" required />
// // // //                     </div>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="country">Country</label>
// // // //                         <input type="text" id="country" name="country" required />
// // // //                     </div>
// // // //                 </form>
// // // //             </div>
// // // //             <div className="payment-info">
// // // //                 <h2>Payment Information</h2>
// // // //                 <form>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="cardnumber">Card Number</label>
// // // //                         <input type="text" id="cardnumber" name="cardnumber" required />
// // // //                     </div>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="expiration">Expiration Date</label>
// // // //                         <input type="text" id="expiration" name="expiration" required />
// // // //                     </div>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="cvv">CVV</label>
// // // //                         <input type="text" id="cvv" name="cvv" required />
// // // //                     </div>
// // // //                 </form>
// // // //             </div>
// // // //             <div className="order-summary">
// // // //                 <h2>Order Summary</h2>
// // // //                 <p><strong>Subtotal:</strong> ${getSubtotal()}</p>
// // // //                 <p><strong>Shipping:</strong> $20</p>
// // // //                 <p><strong>Total:</strong> ${getTotal()}</p>
// // // //             </div>
// // // //             <div className="checkout-buttons">
// // // //                 <button type="button" onClick={handlePlaceOrder}>Place Order</button>
// // // //                 <button type="button" onClick={() => navigate('/')}>Cancel</button>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default CheckoutPage;





// // // // import React, { useContext } from 'react';
// // // // import { useLocation, useNavigate } from 'react-router-dom';
// // // // import './CheckoutPage.css';
// // // // import { ShopContext } from '../../Context/ShopContext';

// // // // const CheckoutPage = () => {
// // // //     const location = useLocation();
// // // //     const navigate = useNavigate();
// // // //     const { cartItems, allProduct, getTotalCartAmount, clearCart } = useContext(ShopContext);

// // // //     let cartProducts = [];
// // // //     let isDirectPurchase = false;

// // // //     // Check if product data is passed via location.state
// // // //     if (location.state && location.state.product) {
// // // //         cartProducts = [location.state.product];
// // // //         isDirectPurchase = true;
// // // //     } else {
// // // //         // Use cartItems context if no product data in location.state
// // // //         cartProducts = allProduct.filter(product => cartItems[product.id] > 0);
// // // //     }

// // // //     const getSubtotal = () => {
// // // //         if (isDirectPurchase) {
// // // //             return cartProducts[0].new_price;
// // // //         }
// // // //         return getTotalCartAmount();
// // // //     };

// // // //     const getTotal = () => {
// // // //         const shippingFee = 0.0;
// // // //         return getSubtotal() + shippingFee;
// // // //     };

// // // //     const handlePlaceOrder = async () => {
// // // //         const orderProducts = cartProducts.map(product => ({
// // // //             id: product.id,
// // // //             quantity: isDirectPurchase ? 1 : cartItems[product.id]
// // // //         }));

// // // //         try {
// // // //             const response = await fetch('http://localhost:4000/placeOrder', {
// // // //                 method: 'POST',
// // // //                 headers: {
// // // //                     Accept: 'application/json',
// // // //                     'auth-token': localStorage.getItem('auth-token'),
// // // //                     'Content-Type': 'application/json'
// // // //                 },
// // // //                 body: JSON.stringify({ products: orderProducts })
// // // //             });

// // // //             if (response.ok) {
// // // //                 alert("Order placed successfully");
// // // //                 await clearCart(); // Clear the cart after placing the order
// // // //                 navigate('/');
// // // //             } else {
// // // //                 const data = await response.json();
// // // //                 alert(`Error placing order: ${data.message}`);
// // // //             }
// // // //         } catch (error) {
// // // //             console.error("Error placing order:", error);
// // // //             alert("Error placing order. Please try again.");
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className="container">
// // // //             <div className="product-info">
// // // //                 <h2>Product Information</h2>
// // // //                 {cartProducts.map(product => (
// // // //                     <div className="product-item" key={product.id}>
// // // //                         <img src={product.image[0]} alt="Product Image" className="product-image" />
// // // //                         <div className="product-details">
// // // //                             <p><strong>Item:</strong> {product.name}</p>
// // // //                             <p><strong>Price:</strong> ${product.new_price}</p>
// // // //                             <p><strong>Size:</strong> M</p>
// // // //                             <p><strong>Quantity:</strong> {isDirectPurchase ? 1 : cartItems[product.id]}</p>
// // // //                             <p><strong>Total:</strong> ${product.new_price * (isDirectPurchase ? 1 : cartItems[product.id])}</p>
// // // //                         </div>
// // // //                     </div>
// // // //                 ))}
// // // //             </div>
// // // //             <div className="billing-info">
// // // //                 <h2>Billing Information</h2>
// // // //                 <form>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="fullname">Full Name</label>
// // // //                         <input type="text" id="fullname" name="fullname" required />
// // // //                     </div>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="email">Email Address</label>
// // // //                         <input type="email" id="email" name="email" required />
// // // //                     </div>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="phone">Phone Number</label>
// // // //                         <input type="tel" id="phone" name="phone" required />
// // // //                     </div>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="address">Address</label>
// // // //                         <input type="text" id="address" name="address" required />
// // // //                     </div>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="city">City</label>
// // // //                         <input type="text" id="city" name="city" required />
// // // //                     </div>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="state">State/Province</label>
// // // //                         <input type="text" id="state" name="state" required />
// // // //                     </div>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="postal">Postal Code</label>
// // // //                         <input type="text" id="postal" name="postal" required />
// // // //                     </div>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="country">Country</label>
// // // //                         <input type="text" id="country" name="country" required />
// // // //                     </div>
// // // //                 </form>
// // // //             </div>
// // // //             <div className="payment-info">
// // // //                 <h2>Payment Information</h2>
// // // //                 <form>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="cardnumber">Card Number</label>
// // // //                         <input type="text" id="cardnumber" name="cardnumber" required />
// // // //                     </div>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="expiration">Expiration Date</label>
// // // //                         <input type="text" id="expiration" name="expiration" required />
// // // //                     </div>
// // // //                     <div className="form-group">
// // // //                         <label htmlFor="cvv">CVV</label>
// // // //                         <input type="text" id="cvv" name="cvv" required />
// // // //                     </div>
// // // //                 </form>
// // // //             </div>
// // // //             <div className="order-summary">
// // // //                 <h2>Order Summary</h2>
// // // //                 <p><strong>Subtotal:</strong> ${getSubtotal()}</p>
// // // //                 <p><strong>Shipping:</strong> $0.00</p>
// // // //                 <p><strong>Total:</strong> ${getTotal()}</p>
// // // //             </div>
// // // //             <div className="checkout-buttons">
// // // //                 <button type="button" onClick={handlePlaceOrder}>Place Order</button>
// // // //                 <button type="button" onClick={() => navigate('/')}>Cancel</button>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default CheckoutPage;

// // // import React, { useContext } from 'react';
// // // import { useLocation, useNavigate } from 'react-router-dom';
// // // import './CheckoutPage.css';
// // // import { ShopContext } from '../../Context/ShopContext';

// // // const CheckoutPage = () => {
// // //     const location = useLocation();
// // //     const navigate = useNavigate();
// // //     const { cartItems, allProduct, getTotalCartAmount, clearCart } = useContext(ShopContext);

// // //     let cartProducts = [];
// // //     let isDirectPurchase = false;

// // //     // Check if product data is passed via location.state
// // //     if (location.state && location.state.product) {
// // //         cartProducts = [location.state.product];
// // //         isDirectPurchase = true;
// // //     } else {
// // //         // Use cartItems context if no product data in location.state
// // //         cartProducts = allProduct.filter(product => cartItems[product.id] > 0);
// // //     }

// // //     const getSubtotal = () => {
// // //         if (isDirectPurchase) {
// // //             return cartProducts[0].new_price;
// // //         }
// // //         return getTotalCartAmount();
// // //     };

// // //     const getTotal = () => {
// // //         const shippingFee = 0.00;
// // //         return getSubtotal() + shippingFee;
// // //     };

// // //     const handlePlaceOrder = async () => {
// // //         const orderProducts = cartProducts.map(product => ({
// // //             id: product.id,
// // //             quantity: isDirectPurchase ? 1 : cartItems[product.id]
// // //         }));

// // //         try {
// // //             const response = await fetch('http://localhost:4000/placeOrder', {
// // //                 method: 'POST',
// // //                 headers: {
// // //                     'auth-token': localStorage.getItem('auth-token'),
// // //                     'Content-Type': 'application/json'
// // //                 },
// // //                 body: JSON.stringify({ products: orderProducts })
// // //             });

// // //             if (response.ok) {
// // //                 alert("Order placed successfully");
// // //                 await clearCart(); // Clear the cart after placing the order
// // //                 navigate('/');
// // //             } else {
// // //                 const data = await response.json();
// // //                 alert(`Error placing order: ${data.message}`);
// // //             }
// // //         } catch (error) {
// // //             console.error("Error placing order:", error);
// // //             alert("Error placing order. Please try again.");
// // //         }
// // //     };

// // //     return (
// // //         <div className="container">
// // //             <div className="product-info">
// // //                 <h2>Product Information</h2>
// // //                 {cartProducts.map(product => (
// // //                     <div className="product-item" key={product.id}>
// // //                         <img src={product.image[0]} alt="Product Image" className="product-image" />
// // //                         <div className="product-details">
// // //                             <p><strong>Item:</strong> {product.name}</p>
// // //                             <p><strong>Price:</strong> ${product.new_price}</p>
// // //                             <p><strong>Size:</strong> M</p>
// // //                             <p><strong>Quantity:</strong> {isDirectPurchase ? 1 : cartItems[product.id]}</p>
// // //                             <p><strong>Total:</strong> ${product.new_price * (isDirectPurchase ? 1 : cartItems[product.id])}</p>
// // //                         </div>
// // //                     </div>
// // //                 ))}
// // //             </div>
// // //             <div className="billing-info">
// // //                 <h2>Billing Information</h2>
// // //                 <form>
// // //                     <div className="form-group">
// // //                         <label htmlFor="fullname">Full Name</label>
// // //                         <input type="text" id="fullname" name="fullname" required />
// // //                     </div>
// // //                     <div className="form-group">
// // //                         <label htmlFor="email">Email Address</label>
// // //                         <input type="email" id="email" name="email" required />
// // //                     </div>
// // //                     <div className="form-group">
// // //                         <label htmlFor="phone">Phone Number</label>
// // //                         <input type="tel" id="phone" name="phone" required />
// // //                     </div>
// // //                     <div className="form-group">
// // //                         <label htmlFor="address">Address</label>
// // //                         <input type="text" id="address" name="address" required />
// // //                     </div>
// // //                     <div className="form-group">
// // //                         <label htmlFor="city">City</label>
// // //                         <input type="text" id="city" name="city" required />
// // //                     </div>
// // //                     <div className="form-group">
// // //                         <label htmlFor="state">State/Province</label>
// // //                         <input type="text" id="state" name="state" required />
// // //                     </div>
// // //                     <div className="form-group">
// // //                         <label htmlFor="postal">Postal Code</label>
// // //                         <input type="text" id="postal" name="postal" required />
// // //                     </div>
// // //                     <div className="form-group">
// // //                         <label htmlFor="country">Country</label>
// // //                         <input type="text" id="country" name="country" required />
// // //                     </div>
// // //                 </form>
// // //             </div>
// // //             <div className="payment-info">
// // //                 <h2>Payment Information</h2>
// // //                 <form>
// // //                     <div className="form-group">
// // //                         <label htmlFor="cardnumber">Card Number</label>
// // //                         <input type="text" id="cardnumber" name="cardnumber" required />
// // //                     </div>
// // //                     <div className="form-group">
// // //                         <label htmlFor="expiration">Expiration Date</label>
// // //                         <input type="text" id="expiration" name="expiration" required />
// // //                     </div>
// // //                     <div className="form-group">
// // //                         <label htmlFor="cvv">CVV</label>
// // //                         <input type="text" id="cvv" name="cvv" required />
// // //                     </div>
// // //                 </form>
// // //             </div>
// // //             <div className="order-summary">
// // //                 <h2>Order Summary</h2>
// // //                 <p><strong>Subtotal:</strong> ${getSubtotal()}</p>
// // //                 <p><strong>Shipping:</strong> $0.00</p>
// // //                 <p><strong>Total:</strong> ${getTotal()}</p>
// // //             </div>
// // //             <div className="checkout-buttons">
// // //                 <button className='checkoutbutton' type="button" onClick={handlePlaceOrder}>Place Order</button>
// // //                 <button className='checkoutbutton' type="button" onClick={() => navigate('/')}>Cancel</button>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default CheckoutPage;


// // import React, { useContext, useState } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import './CheckoutPage.css';
// // import { ShopContext } from '../../Context/ShopContext';

// // const CheckoutPage = () => {
// //     const location = useLocation();
// //     const navigate = useNavigate();
// //     const { cartItems, allProduct, getTotalCartAmount, clearCart } = useContext(ShopContext);

// //     const [billingInfo, setBillingInfo] = useState({
// //         fullname: '',
// //         email: '',
// //         phone: '',
// //         city: '',
// //         state: '',
// //         postal: '',
// //         country: ''
// //     });

// //     let cartProducts = [];
// //     let isDirectPurchase = false;

// //     // Check if product data is passed via location.state
// //     if (location.state && location.state.product) {
// //         cartProducts = [location.state.product];
// //         isDirectPurchase = true;
// //     } else {
// //         // Use cartItems context if no product data in location.state
// //         cartProducts = allProduct.filter(product => cartItems[product.id] > 0);
// //     }

// //     const redirectToProductPage = (productId) => {
// //         navigate(`/product/${productId}`);
// //     };

// //     const getSubtotal = () => {
// //         if (isDirectPurchase) {
// //             return cartProducts[0].new_price;
// //         }
// //         return getTotalCartAmount();
// //     };

// //     const getShippingFee = () =>{
// //         const subtotal = getSubtotal();
// //         return subtotal < 1000? "50.00" : "0.00";
// //     };

// //     const getTotal = () => {
// //         const subtotal = getSubtotal();
// //         const shippingFee = subtotal < 1000 ? 50.00 : 0.00;
// //         return subtotal + shippingFee;
// //     };


// //     const handleInputChange = (e, setFunction) => {
// //         const { name, value } = e.target;
// //         setFunction(prevState => ({
// //             ...prevState,
// //             [name]: value
// //         }));
// //     };

    // const handlePlaceOrder = async () => {
    //     const orderProducts = cartProducts.map(product => ({
    //         _id: product._id, // Use _id for backend operations
    //         id: product.id,
    //         quantity: isDirectPurchase ? 1 : cartItems[product.id],
    //         new_price: product.new_price // Include new_price to calculate total price
    //     }));

    //     const orderDetails = {
    //         products: orderProducts,
    //         billingInfo,
    //         totalAmount: getTotal()
    //     };

    //     try {
    //         const response = await fetch('http://localhost:4000/placeOrder', {
    //             method: 'POST',
    //             headers: {
    //                 'auth-token': localStorage.getItem('auth-token'),
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(orderDetails)
    //         });

    //         if (response.ok) {
    //             alert("Order placed successfully");
    //             await clearCart(); // Clear the cart after placing the order
    //             navigate('/');
    //         } else {
    //             const data = await response.json();
    //             alert(`Error placing order: ${data.message}`);
    //         }
    //     } catch (error) {
    //         console.error("Error placing order:", error);
    //         alert("Error placing order. Please try again.");
    //     }
    // };

// //     return (
// //         <div className="container">
// //             <div className="product-info">
// //                 <h2>Product Information</h2>
// //                 {cartProducts.map(product => (
// //                     <div className="product-item" key={product.id}>
// //                         <img src={product.image[0]} alt="Product" className="product-image"
// //                         onClick={() => redirectToProductPage(product.id)} />
// //                         <div className="product-details">
// //                             <p><strong>Item:</strong> {product.name}</p>
// //                             <p><strong>Price:</strong> ${product.new_price}</p>
// //                             <p><strong>Size:</strong> M</p>
// //                             <p><strong>Quantity:</strong> {isDirectPurchase ? 1 : cartItems[product.id]}</p>
// //                             <p><strong>Total:</strong> ${product.new_price * (isDirectPurchase ? 1 : cartItems[product.id])}</p>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //             <div className="billing-info">
// //                 <h2>Billing Information</h2>
// //                 <form>
// //                     <div className="form-group">
// //                         <label htmlFor="fullname">Full Name</label>
// //                         <input 
// //                             type="text" 
// //                             id="fullname" 
// //                             name="fullname" 
// //                             value={billingInfo.fullname}
// //                             onChange={e => handleInputChange(e, setBillingInfo)}
// //                             required 
// //                         />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="email">Email Address</label>
// //                         <input 
// //                             type="email" 
// //                             id="email" 
// //                             name="email"
// //                             value={billingInfo.email}
// //                             onChange={e => handleInputChange(e, setBillingInfo)}
// //                             required 
// //                         />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="phone">Phone Number</label>
// //                         <input 
// //                             type="tel" 
// //                             id="phone" 
// //                             name="phone"
// //                             value={billingInfo.phone}
// //                             onChange={e => handleInputChange(e, setBillingInfo)}
// //                             required 
// //                         />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="city">City</label>
// //                         <input 
// //                             type="text" 
// //                             id="city" 
// //                             name="city"
// //                             value={billingInfo.city}
// //                             onChange={e => handleInputChange(e, setBillingInfo)} 
// //                             required 
// //                         />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="state">State/Province</label>
// //                         <input 
// //                             type="text" 
// //                             id="state" 
// //                             name="state"
// //                             value={billingInfo.state}
// //                             onChange={e => handleInputChange(e, setBillingInfo)}
// //                             required 
// //                         />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="postal">Postal Code</label>
// //                         <input 
// //                             type="text" 
// //                             id="postal" 
// //                             name="postal"
// //                             value={billingInfo.postal}
// //                             onChange={e => handleInputChange(e, setBillingInfo)}
// //                             required 
// //                         />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="country">Country</label>
// //                         <input 
// //                             type="text" 
// //                             id="country" 
// //                             name="country"
// //                             value={billingInfo.country}
// //                             onChange={e => handleInputChange(e, setBillingInfo)}
// //                             required 
// //                         />
// //                     </div>
// //                 </form>
// //             </div>
// //             <div className="order-summary">
// //                 <h2>Order Summary</h2>
// //                 <p><strong>Subtotal:</strong> ${getSubtotal()}</p>
// //                 <p  id='fee'>*on orders above 1000 shipping fee will be $ 0.00</p>
// //                 <p><strong>Shipping:</strong> ${getShippingFee()}</p>
// //                 <p><strong>Total:</strong> ${getTotal()}</p>
// //             </div>
// //             <div className="checkout-buttons">
// //                 <button className='checkoutbutton' type="button" onClick={handlePlaceOrder}>Place Order</button>
// //                 <button className='checkoutbutton' type="button" onClick={() => navigate('/')}>Cancel</button>
// //             </div>
// //         </div>
// //     );
// // };

// // export default CheckoutPage;





// import React, { useContext, useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './CheckoutPage.css';
// import { ShopContext } from '../../Context/ShopContext';

// const CheckoutPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { cartItems, allProduct, getTotalCartAmount, clearCart } = useContext(ShopContext);

//     const [addresses, setAddresses] = useState([]); // Store saved addresses
//     const [selectedAddress, setSelectedAddress] = useState(null); // Currently selected address
//     const [billingInfo, setBillingInfo] = useState({
//         fullname: '',
//         email: '',
//         phone: '',
//         city: '',
//         state: '',
//         postal: '',
//         country: ''
//     });

//     let cartProducts = [];
//     let isDirectPurchase = false;

//     // Check if product data is passed via location.state
//     if (location.state && location.state.product) {
//         cartProducts = [location.state.product];
//         isDirectPurchase = true;
//     } else {
//         // Use cartItems context if no product data in location.state
//         cartProducts = allProduct.filter(product => cartItems[product.id] > 0);
//     }

//     const redirectToProductPage = (productId) => {
//         navigate(`/product/${productId}`);
//     };

//     const getSubtotal = () => {
//         if (isDirectPurchase) {
//             return cartProducts[0].new_price;
//         }
//         return getTotalCartAmount();
//     };

//     const getShippingFee = () => {
//         const subtotal = getSubtotal();
//         return subtotal < 1000 ? "50.00" : "0.00";
//     };

//     const getTotal = () => {
//         const subtotal = getSubtotal();
//         const shippingFee = subtotal < 1000 ? 50.00 : 0.00;
//         return subtotal + shippingFee;
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setBillingInfo((prevState) => {
//             const updatedState = { ...prevState, [name]: value };
//             console.log('Updated Billing Info:', updatedState); // Debugging log
//             return updatedState;
//         });
//     };

    // const handleSelectAddress = (address) => {
    //     setSelectedAddress(address);
    //     setBillingInfo({
    //         fullname: address.fullname || '',
    //         email: address.email || '',
    //         phone: address.phone || '',
    //         city: address.city || '',
    //         state: address.state || '',
    //         postal: address.postalCode || '',
    //         country: address.country || ''
    //     });
    // };

    // const fetchAddresses = async () => {
    //     try {
    //         const response = await fetch('http://localhost:4000/getAddresses', {
    //             method: 'GET',
    //             headers: {
    //                 'auth-token': localStorage.getItem('auth-token'),  // Token should be here
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify()
    //         });

    //         if (response.ok) {
    //             const data = await response.json();
    //             setAddresses(data.addresses);
    //         } else {
    //             console.error('Error fetching addresses');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };

    // const handlePlaceOrder = async () => {
    //     // Ensure billingInfo is valid
    //     if (!billingInfo.fullname || !billingInfo.postal || !billingInfo.email) {
    //         alert('Please complete all billing fields.');
    //         return;
    //     }

    //     const orderProducts = cartProducts.map((product) => ({
    //         _id: product._id,
    //         id: product.id,
    //         quantity: isDirectPurchase ? 1 : cartItems[product.id],
    //         new_price: product.new_price,
    //     }));

    //     const orderDetails = {
    //         products: orderProducts,
    //         billingInfo, // Always use the current billingInfo state
    //         totalAmount: getTotal(),
    //     };

    //     try {
    //         const response = await fetch('http://localhost:4000/placeOrder', {
    //             method: 'POST',
    //             headers: {
    //                 'auth-token': localStorage.getItem('auth-token'),
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(orderDetails),
    //         });

    //         if (response.ok) {
    //             alert('Order placed successfully');
    //             await clearCart();
    //             navigate('/');
    //         } else {
    //             const data = await response.json();
    //             alert(`Error placing order: ${data.message}`);
    //         }
    //     } catch (error) {
    //         console.error('Error placing order:', error);
    //         alert('Error placing order. Please try again.');
    //     }
    // };

//     useEffect(() => {
//         fetchAddresses();  // Fetch addresses on component load
//     }, []);

//     return (
//         <div className="container">
//             <div className="product-info">
//                 <h2>Product Information</h2>
//                 {cartProducts.map(product => (
//                     <div className="product-item" key={product.id}>
//                         <img src={product.image[0]} alt="Product" className="product-image"
//                             onClick={() => redirectToProductPage(product.id)} />
//                         <div className="product-details">
//                             <p><strong>Item:</strong> {product.name}</p>
//                             <p><strong>Price:</strong> ${product.new_price}</p>
//                             <p><strong>Size:</strong> M</p>
//                             <p><strong>Quantity:</strong> {isDirectPurchase ? 1 : cartItems[product.id]}</p>
//                             <p><strong>Total:</strong> ${product.new_price * (isDirectPurchase ? 1 : cartItems[product.id])}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="billing-info">
//                 <h2>Billing Information</h2>
//                 <div className="address-selection">
//                     <h3>Select an Address</h3>
//                     {addresses.length > 0 ? (
//                         <ul>
//                             {addresses.map((address, index) => (
//                                 <li
//                                     key={index}
//                                     onClick={() => handleSelectAddress(address)}
//                                     className={selectedAddress === address ? 'selected-address' : ''}
//                                     style={{ cursor: 'pointer' }}  // Added cursor pointer style
//                                 >
//                                     <p>{address.fullname}, {address.email}, {address.phone}</p>
//                                     <p>{address.city}, {address.state}, {address.postalCode}, {address.country}</p>
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p>No saved addresses. Add a new one below.</p>
//                     )}
//                 </div>

//                 <form>
//                     <div className="form-group">
//                         <label htmlFor="fullname">Full Name</label>
//                         <input
//                             type="text"
//                             id="fullname"
//                             name="fullname"
//                             value={billingInfo.fullname || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">Email Address</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={billingInfo.email || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="phone">Phone Number</label>
//                         <input
//                             type="tel"
//                             id="phone"
//                             name="phone"
//                             value={billingInfo.phone || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="city">City</label>
//                         <input
//                             type="text"
//                             id="city"
//                             name="city"
//                             value={billingInfo.city || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="state">State/Province</label>
//                         <input
//                             type="text"
//                             id="state"
//                             name="state"
//                             value={billingInfo.state || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="postal">Postal Code</label>
//                         <input
//                             type="text"
//                             id="postal"
//                             name="postal" // Ensure this matches the key in billingInfo
//                             value={billingInfo.postal || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="country">Country</label>
//                         <input
//                             type="text"
//                             id="country"
//                             name="country"
//                             value={billingInfo.country || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                 </form>
//             </div>

//             <div className="order-summary">
//                 <h2>Order Summary</h2>
//                 <p><strong>Subtotal:</strong> ${getSubtotal()}</p>
//                 <p id='fee'>*On orders above $1000, shipping is free.</p>
//                 <p><strong>Shipping:</strong> ${getShippingFee()}</p>
//                 <p><strong>Total:</strong> ${getTotal()}</p>
//             </div>

//             <div className="checkout-buttons">
//                 <button className='checkoutbutton' type="button" onClick={handlePlaceOrder}>Place Order</button>
//                 <button className='checkoutbutton' type="button" onClick={() => navigate('/')}>Cancel</button>
//             </div>
//         </div>
//     );
// };

// export default CheckoutPage;


    // const handlePlaceOrder = async () => {
    //     // Ensure billingInfo is valid
    //     if (!billingInfo.fullname || !billingInfo.postal || !billingInfo.email) {
    //         alert('Please complete all billing fields.');
    //         return;
    //     }

    //     const orderProducts = cartProducts.map((product) => ({
    //         _id: product._id,
    //         id: product.id,
    //         size: product.size, // Include size in the order details
    //         quantity: isDirectPurchase ? 1 : cartItems[product.id],
    //         price: product.price,
    //     }));
    //     console.log("order products : ",orderProducts);
        

    //     const orderDetails = {
    //         products: orderProducts,
    //         billingInfo, // Always use the current billingInfo state
    //         totalAmount: getTotal(),
    //     };

    //     try {
    //         const response = await fetch('http://localhost:4000/placeOrder', {
    //             method: 'POST',
    //             headers: {
    //                 'auth-token': localStorage.getItem('auth-token'),
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(orderDetails),
    //         });

    //         if (response.ok) {
    //             alert('Order placed successfully');
    //             await clearCart();
    //             navigate('/');
    //         } else {
    //             const data = await response.json();
    //             alert(`Error placing order: ${data.message}`);
    //         }
    //     } catch (error) {
    //         console.error('Error placing order:', error);
    //         alert('Error placing order. Please try again.');
    //     }
    // };



// import React, { useContext, useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './CheckoutPage.css';
// import { ShopContext } from '../../Context/ShopContext';

// const CheckoutPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { cartItems, allProduct, getTotalCartAmount, clearCart } = useContext(ShopContext);

//     const [addresses, setAddresses] = useState([]);
//     const [selectedAddress, setSelectedAddress] = useState(null);
//     const [billingInfo, setBillingInfo] = useState({
//         fullname: '',
//         email: '',
//         phone: '',
//         city: '',
//         state: '',
//         postal: '',
//         country: ''
//     });

//     let cartProducts = [];
//     let isDirectPurchase = false;

//     if (location.state && location.state.product) {
//         cartProducts = [{
//             ...location.state.product,
//             size: location.state.size,
//             price: location.state.price
//         }];
//         isDirectPurchase = true;
//     } else {
//         cartProducts = allProduct.filter(product => cartItems[product.id] > 0);
//     }

//     const redirectToProductPage = (productId) => {
//         navigate(`/product/${productId}`);
//     };

//     const getSubtotal = () => {
//         if (isDirectPurchase) {
//             return cartProducts[0].price;
//         }
//         return getTotalCartAmount();
//     };

//     const getShippingFee = () => {
//         const subtotal = getSubtotal();
//         return subtotal < 1000 ? 50.00 : 0.00;
//     };

//     const getTotal = () => {
//         const subtotal = getSubtotal();
//         const shippingFee = getShippingFee();
//         return subtotal + shippingFee;
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setBillingInfo(prevState => ({ ...prevState, [name]: value }));
//     };

//     const handleSelectAddress = (address) => {
//         setSelectedAddress(address);
//         setBillingInfo({
//             fullname: address.fullname || '',
//             email: address.email || '',
//             phone: address.phone || '',
//             city: address.city || '',
//             state: address.state || '',
//             postal: address.postal || '',
//             country: address.country || ''
//         });
//     };

//     const fetchAddresses = async () => {
//         try {
//             const response = await fetch('http://localhost:4000/getAddresses', {
//                 method: 'GET',
//                 headers: {
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json'
//                 }
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setAddresses(data.addresses);
//             } else {
//                 console.error('Error fetching addresses');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     const handlePlaceOrder = async () => {
//         const orderProducts = cartProducts.map(product => ({
//             _id: product._id,
//             id: product.id,
//             quantity: isDirectPurchase ? 1 : cartItems[product.id],
//             size: product.size,
//             price: product.price
//         }));

//         const orderDetails = {
//             products: orderProducts,
//             billingInfo,
//             totalAmount: getTotal()
//         };

//         try {
//             const response = await fetch('http://localhost:4000/placeOrder', {
//                 method: 'POST',
//                 headers: {
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(orderDetails)
//             });

//             if (response.ok) {
//                 alert("Order placed successfully");
//                 await clearCart();
//                 navigate('/');
//             } else {
//                 const data = await response.json();
//                 alert(`Error placing order: ${data.message}`);
//             }
//         } catch (error) {
//             console.error("Error placing order:", error);
//             alert("Error placing order. Please try again.");
//         }
//     };

//     useEffect(() => {
//         fetchAddresses();
//     }, []);
//     return (
//         <div className="container">
//             <div className="product-info">
//                 <h2>Product Information</h2>
//                 {cartProducts.map(product => (
//                     <div className="product-item" key={product.id}>
//                         <img src={product.image[0]} alt="Product" className="product-image"
//                             onClick={() => redirectToProductPage(product.id)} />
//                         <div className="product-details">
//                             <p><strong>Item:</strong> {product.name}</p>
//                             <p><strong>Price:</strong> ${product.price}</p>
//                             <p><strong>Size:</strong> {product.size}</p> {/* Display size */}
//                             <p><strong>Quantity:</strong> {isDirectPurchase ? 1 : cartItems[product.id]}</p>
//                             <p><strong>Total:</strong> ${product.price * (isDirectPurchase ? 1 : cartItems[product.id])}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="billing-info">
//                 <h2>Billing Information</h2>
//                 <div className="address-selection">
//                     <h3>Select an Address</h3>
//                     {addresses.length > 0 ? (
//                         <ul>
//                             {addresses.map((address, index) => (
//                                 <li
//                                     key={index}
//                                     onClick={() => handleSelectAddress(address)}
//                                     className={selectedAddress === address ? 'selected-address' : ''}
//                                     style={{ cursor: 'pointer' }}  // Added cursor pointer style
//                                 >
//                                     <p>{address.fullname}, {address.email}, {address.phone}</p>
//                                     <p>{address.city}, {address.state}, {address.postalCode}, {address.country}</p>
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p>No saved addresses. Add a new one below.</p>
//                     )}
//                 </div>

//                 <form>
//                     <div className="form-group">
//                         <label htmlFor="fullname">Full Name</label>
//                         <input
//                             type="text"
//                             id="fullname"
//                             name="fullname"
//                             value={billingInfo.fullname || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">Email Address</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={billingInfo.email || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="phone">Phone Number</label>
//                         <input
//                             type="tel"
//                             id="phone"
//                             name="phone"
//                             value={billingInfo.phone || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="city">City</label>
//                         <input
//                             type="text"
//                             id="city"
//                             name="city"
//                             value={billingInfo.city || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="state">State/Province</label>
//                         <input
//                             type="text"
//                             id="state"
//                             name="state"
//                             value={billingInfo.state || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="postal">Postal Code</label>
//                         <input
//                             type="text"
//                             id="postal"
//                             name="postal" // Ensure this matches the key in billingInfo
//                             value={billingInfo.postal || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="country">Country</label>
//                         <input
//                             type="text"
//                             id="country"
//                             name="country"
//                             value={billingInfo.country || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                 </form>
//             </div>
//             <div className="order-summary">
//                 <h2>Order Summary</h2>
//                 <p><strong>Subtotal:</strong> ${getSubtotal()}</p>
//                 <p id='fee'>*On orders above $1000, shipping is free.</p>
//                 <p><strong>Shipping:</strong> ${getShippingFee()}</p>
//                 <p><strong>Total:</strong> ${getTotal()}</p>
//             </div>
//             <div className="checkout-buttons">
//                 <button className='checkoutbutton' type="button" onClick={handlePlaceOrder}>Place Order</button>
//                 <button className='checkoutbutton' type="button" onClick={() => navigate('/')}>Cancel</button>
//             </div>
//         </div>
//     );
// };

// export default CheckoutPage;












// import React, { useContext, useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './CheckoutPage.css';
// import { ShopContext } from '../../Context/ShopContext';

// const CheckoutPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { cartItems, allProduct, getTotalCartAmount, clearCart } = useContext(ShopContext);

//     const [addresses, setAddresses] = useState([]);
//     const [selectedAddress, setSelectedAddress] = useState(null);
//     const [billingInfo, setBillingInfo] = useState({
//         fullname: '',
//         email: '',
//         phone: '',
//         city: '',
//         state: '',
//         postal: '',
//         country: ''
//     });

//     let cartProducts = [];
//     let isDirectPurchase = false;

//     if (location.state && location.state.products) {
//         cartProducts = location.state.products.map(product => ({
//             ...product,
//             quantity: cartItems[product.id] || 1
//         }));
//         isDirectPurchase = cartProducts.length === 1;
//     } else {
//         cartProducts = allProduct.filter(product => cartItems[product.id] > 0).map(product => ({
//             ...product,
//             quantity: cartItems[product.id]
//         }));
//     }

//     const redirectToProductPage = (productId) => {
//         navigate(`/product/${productId}`);
//     };

//     const getSubtotal = () => {
//         return cartProducts.reduce((subtotal, product) => subtotal + product.price * product.quantity, 0);
//     };

//     const getShippingFee = () => {
//         const subtotal = getSubtotal();
//         return subtotal < 1000 ? 50.00 : 0.00;
//     };

//     const getTotal = () => {
//         return getSubtotal() + getShippingFee();
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setBillingInfo(prevState => ({ ...prevState, [name]: value }));
//     };

//     const handleSelectAddress = (address) => {
//         setSelectedAddress(address);
//         setBillingInfo({
//             fullname: address.fullname || '',
//             email: address.email || '',
//             phone: address.phone || '',
//             city: address.city || '',
//             state: address.state || '',
//             postal: address.postal || '',
//             country: address.country || ''
//         });
//     };

//     const fetchAddresses = async () => {
//         try {
//             const response = await fetch('http://localhost:4000/getAddresses', {
//                 method: 'GET',
//                 headers: {
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json'
//                 }
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setAddresses(data.addresses);
//             } else {
//                 console.error('Error fetching addresses');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     const handlePlaceOrder = async () => {
//         const orderProducts = cartProducts.map(product => ({
//             _id: product._id,
//             id: product.id,
//             quantity: product.quantity,
//             size: product.size,
//             price: product.price
//         }));

//         const orderDetails = {
//             products: orderProducts,
//             billingInfo,
//             totalAmount: getTotal()
//         };

//         try {
//             const response = await fetch('http://localhost:4000/placeOrder', {
//                 method: 'POST',
//                 headers: {
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(orderDetails)
//             });

//             if (response.ok) {
//                 alert("Order placed successfully");
//                 await clearCart();
//                 navigate('/');
//             } else {
//                 const data = await response.json();
//                 alert(`Error placing order: ${data.message}`);
//             }
//         } catch (error) {
//             console.error("Error placing order:", error);
//             alert("Error placing order. Please try again.");
//         }
//     };

//     useEffect(() => {
//         fetchAddresses();
//     }, []);

//     return (
//         <div className="container">
//             <div className="product-info">
//                 <h2>Product Information</h2>
//                 {cartProducts.map(product => (
//                     <div className="product-item" key={product.id}>
//                         <img src={product.image[0]} alt="Product" className="product-image"
//                             onClick={() => redirectToProductPage(product.id)} />
//                         <div className="product-details">
//                             <p><strong>Item:</strong> {product.name}</p>
//                             <p><strong>Price:</strong> ${product.price}</p>
//                             <p><strong>Size:</strong> {product.size}</p>
//                             <p><strong>Quantity:</strong> {product.quantity}</p>
//                             <p><strong>Total:</strong> ${product.price * product.quantity}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="billing-info">
//                 <h2>Billing Information</h2>
//                 <div className="address-selection">
//                     <h3>Select an Address</h3>
//                     {addresses.length > 0 ? (
//                         <ul>
//                             {addresses.map((address, index) => (
//                                 <li
//                                     key={index}
//                                     onClick={() => handleSelectAddress(address)}
//                                     className={selectedAddress === address ? 'selected-address' : ''}
//                                     style={{ cursor: 'pointer' }}
//                                 >
//                                     <p>{address.fullname}, {address.email}, {address.phone}</p>
//                                     <p>{address.city}, {address.state}, {address.postalCode}, {address.country}</p>
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p>No saved addresses. Add a new one below.</p>
//                     )}
//                 </div>
//                 <form>
//                     <div className="form-group">
//                         <label htmlFor="fullname">Full Name</label>
//                         <input
//                             type="text"
//                             id="fullname"
//                             name="fullname"
//                             value={billingInfo.fullname || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">Email Address</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={billingInfo.email || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="phone">Phone Number</label>
//                         <input
//                             type="tel"
//                             id="phone"
//                             name="phone"
//                             value={billingInfo.phone || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="city">City</label>
//                         <input
//                             type="text"
//                             id="city"
//                             name="city"
//                             value={billingInfo.city || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="state">State/Province</label>
//                         <input
//                             type="text"
//                             id="state"
//                             name="state"
//                             value={billingInfo.state || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="postal">Postal Code</label>
//                         <input
//                             type="text"
//                             id="postal"
//                             name="postal" // Ensure this matches the key in billingInfo
//                             value={billingInfo.postal || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="country">Country</label>
//                         <input
//                             type="text"
//                             id="country"
//                             name="country"
//                             value={billingInfo.country || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                 </form>
//             </div>
//             <div className="order-summary">
//                 <h2>Order Summary</h2>
//                 <p><strong>Subtotal:</strong> ${getSubtotal()}</p>
//                 <p id='fee'>*On orders above $1000, shipping is free.</p>
//                 <p><strong>Shipping:</strong> ${getShippingFee()}</p>
//                 <p><strong>Total:</strong> ${getTotal()}</p>
//             </div>
//             <div className="checkout-buttons">
//                 <button className='checkoutbutton' type="button" onClick={handlePlaceOrder}>Place Order</button>
//                 <button className='checkoutbutton' type="button" onClick={() => navigate('/')}>Cancel</button>
//             </div>
//         </div>
//     );
// };

// export default CheckoutPage;






// import React, { useContext, useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './CheckoutPage.css';
// import { ShopContext } from '../../Context/ShopContext';

// const CheckoutPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { cartItems, allProduct, getTotalCartAmount, clearCart } = useContext(ShopContext);

//     const [addresses, setAddresses] = useState([]);
//     const [selectedAddress, setSelectedAddress] = useState(null);
//     const [billingInfo, setBillingInfo] = useState({
//         fullname: '',
//         email: '',
//         phone: '',
//         city: '',
//         state: '',
//         postal: '',
//         country: ''
//     });

//     let cartProducts = [];
//     let isDirectPurchase = false;

//     if (location.state && location.state.products) {
//         cartProducts = location.state.products.map(product => ({
//             ...product,
//             quantity: cartItems[product.id] || product.quantity
//         }));
//         isDirectPurchase = cartProducts.length === 1;
//     } else {
//         cartProducts = allProduct.filter(product => cartItems[product.id] > 0).map(product => ({
//             ...product,
//             quantity: cartItems[product.id]
//         }));
//     }

//     const redirectToProductPage = (productId) => {
//         navigate(`/product/${productId}`);
//     };

//     const getSubtotal = () => {
//         return cartProducts.reduce((subtotal, product) => subtotal + product.price * product.quantity, 0);
//     };

//     const getShippingFee = () => {
//         const subtotal = getSubtotal();
//         return subtotal < 1000 ? 50.00 : 0.00;
//     };

//     const getTotal = () => {
//         return getSubtotal() + getShippingFee();
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setBillingInfo(prevState => ({ ...prevState, [name]: value }));
//     };

//     const handleSelectAddress = (address) => {
//         setSelectedAddress(address);
//         setBillingInfo({
//             fullname: address.fullname || '',
//             email: address.email || '',
//             phone: address.phone || '',
//             city: address.city || '',
//             state: address.state || '',
//             postal: address.postal || '',
//             country: address.country || ''
//         });
//     };

//     const fetchAddresses = async () => {
//         try {
//             const response = await fetch('http://localhost:4000/getAddresses', {
//                 method: 'GET',
//                 headers: {
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json'
//                 }
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setAddresses(data.addresses);
//             } else {
//                 console.error('Error fetching addresses');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     const handlePlaceOrder = async () => {
//         const orderProducts = cartProducts.map(product => ({
//             _id: product._id,
//             id: product.id,
//             quantity: product.quantity,
//             size: product.size,
//             price: product.price
//         }));

//         const orderDetails = {
//             products: orderProducts,
//             billingInfo,
//             totalAmount: getTotal()
//         };

//         try {
//             const response = await fetch('http://localhost:4000/placeOrder', {
//                 method: 'POST',
//                 headers: {
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(orderDetails)
//             });

//             if (response.ok) {
//                 alert("Order placed successfully");
//                 await clearCart();
//                 navigate('/');
//             } else {
//                 const data = await response.json();
//                 alert(`Error placing order: ${data.message}`);
//             }
//         } catch (error) {
//             console.error("Error placing order:", error);
//             alert("Error placing order. Please try again.");
//         }
//     };

//     useEffect(() => {
//         fetchAddresses();
//     }, []);

//     return (
//         <div className="container">
//             <div className="product-info">
//                 <h2>Product Information</h2>
//                 {cartProducts.map((product, index) => (
//                     <div className="product-item" key={`${product.id}-${index}`}>
//                         <img src={product.image} alt="Product" className="product-image"
//                             onClick={() => redirectToProductPage(product.id)} />
//                         <div className="product-details">
//                             <p><strong>Item:</strong> {product.name}</p>
//                             <p><strong>Price:</strong> ${product.price}</p>
//                             <p><strong>Size:</strong> {product.size}</p>
//                             <p><strong>Quantity:</strong> {product.quantity}</p>
//                             <p><strong>Total:</strong> ${product.price * product.quantity}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="billing-info">
//                 <h2>Billing Information</h2>
//                 <div className="address-selection">
//                     <h3>Select an Address</h3>
//                     {addresses.length > 0 ? (
//                         <ul>
//                             {addresses.map((address, index) => (
//                                 <li
//                                     key={index}
//                                     onClick={() => handleSelectAddress(address)}
//                                     className={selectedAddress === address ? 'selected-address' : ''}
//                                     style={{ cursor: 'pointer' }}
//                                 >
//                                     <p>{address.fullname}, {address.email}, {address.phone}</p>
//                                     <p>{address.city}, {address.state}, {address.postalCode}, {address.country}</p>
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p>No saved addresses. Add a new one below.</p>
//                     )}
//                 </div>
//                 <form>
//                     <div className="form-group">
//                         <label htmlFor="fullname">Full Name</label>
//                         <input
//                             type="text"
//                             id="fullname"
//                             name="fullname"
//                             value={billingInfo.fullname || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">Email Address</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={billingInfo.email || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="phone">Phone Number</label>
//                         <input
//                             type="tel"
//                             id="phone"
//                             name="phone"
//                             value={billingInfo.phone || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="city">City</label>
//                         <input
//                             type="text"
//                             id="city"
//                             name="city"
//                             value={billingInfo.city || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="state">State/Province</label>
//                         <input
//                             type="text"
//                             id="state"
//                             name="state"
//                             value={billingInfo.state || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="postal">Postal Code</label>
//                         <input
//                             type="text"
//                             id="postal"
//                             name="postal" // Ensure this matches the key in billingInfo
//                             value={billingInfo.postal || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="country">Country</label>
//                         <input
//                             type="text"
//                             id="country"
//                             name="country"
//                             value={billingInfo.country || ''}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                 </form>
//             </div>
//             <div className="order-summary">
//                 <h2>Order Summary</h2>
//                 <p><strong>Subtotal:</strong> ${getSubtotal()}</p>
//                 <p id='fee'>*On orders above $1000, shipping is free.</p>
//                 <p><strong>Shipping:</strong> ${getShippingFee()}</p>
//                 <p><strong>Total:</strong> ${getTotal()}</p>
//             </div>
//             <div className="checkout-buttons">
//                 <button className='checkoutbutton' type="button" onClick={handlePlaceOrder}>Place Order</button>
//                 <button className='checkoutbutton' type="button" onClick={() => navigate('/')}>Cancel</button>
//             </div>
//         </div>
//     );
// };

// export default CheckoutPage;

                

import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CheckoutPage.css';
import { ShopContext } from '../../Context/ShopContext';

const CheckoutPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { cartItems, allProduct, clearCart } = useContext(ShopContext);

    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [billingInfo, setBillingInfo] = useState({
        fullname: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        postal: '',
        country: ''
    });

    let cartProducts = [];
    let isDirectPurchase = false;

    if (location.state) {
        if (location.state.product) {
            // Direct purchase from the product page
            const { product, size, price } = location.state;
            cartProducts = [{
                ...product,
                size,
                price,
                quantity: 1, // Assume 1 item for direct purchase
            }];
            isDirectPurchase = true;
        } else if (location.state.products) {
            // Multiple products from the cart
            cartProducts = location.state.products.map(product => ({
                ...product,
                quantity: cartItems[product.id] || product.quantity
            }));
        }
    } else {
        // Default: Products from the cart
        cartProducts = allProduct.filter(product => cartItems[product.id] > 0).map(product => ({
            ...product,
            quantity: cartItems[product.id]
        }));
    }

    const redirectToProductPage = (productId) => {
        navigate(`/product/${productId}`);
    };

    const getSubtotal = () => {
        return cartProducts.reduce((subtotal, product) => subtotal + product.price * product.quantity, 0);
    };

    const getShippingFee = () => {
        const subtotal = getSubtotal();
        return subtotal < 1000 ? 50.00 : 0.00;
    };

    const getTotal = () => {
        return getSubtotal() + getShippingFee();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBillingInfo(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSelectAddress = (address) => {
        setSelectedAddress(address);
        setBillingInfo({
            fullname: address.fullname || '',
            email: address.email || '',
            phone: address.phone || '',
            city: address.city || '',
            state: address.state || '',
            postal: address.postalCode || '',
            country: address.country || ''
        });
    };

    const fetchAddresses = async () => {
        try {
            const response = await fetch('http://localhost:4000/getAddresses', {
                method: 'GET',
                headers: {
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                setAddresses(data.addresses);
            } else {
                console.error('Error fetching addresses');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handlePlaceOrder = async () => {
        const orderProducts = cartProducts.map(product => ({
            _id: product._id,
            id: product.id,
            quantity: product.quantity,
            size: product.size,
            price: getTotal(),
        }));
        const orderDetails = {
            products: orderProducts,
            billingInfo,
            totalAmount: getTotal()
        };

        try {
            const response = await fetch('http://localhost:4000/placeOrder', {
                method: 'POST',
                headers: {
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderDetails)
            });

            if (response.ok) {
                alert("Order placed successfully");
                await clearCart();
                navigate('/');
            } else {
                const data = await response.json();
                alert(`Error placing order: ${data.message}`);
            }
        } catch (error) {
            console.error("Error placing order:", error);
            alert("Error placing order. Please try again.");
        }
    };

    useEffect(() => {
        fetchAddresses();
    }, []);

    return (
        <div className="container">
            <div className="product-info">
                <h2>Product Information</h2>
                {cartProducts.map((product, index) => (
                    <div className="product-item" key={`${product.id}-${index}`}>
                        <img src={product.image} alt="Product" className="product-image"
                            onClick={() => redirectToProductPage(product.id)} />
                        <div className="product-details">
                            <p><strong>Item:</strong> {product.name}</p>
                            <p><strong>Price:</strong> ${product.price}</p>
                            <p><strong>Size:</strong> {product.size}</p>
                            <p><strong>Quantity:</strong> {product.quantity}</p>
                            <p><strong>Total:</strong> ${product.price * product.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="billing-info">
                <h2>Billing Information</h2>
                <div className="address-selection">
                    <h3>Select an Address</h3>
                    {addresses.length > 0 ? (
                        <ul>
                            {addresses.map((address, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSelectAddress(address)}
                                    className={selectedAddress === address ? 'selected-address' : ''}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <p>{address.fullname}, {address.email}, {address.phone}</p>
                                    <p>{address.city}, {address.state}, {address.postalCode}, {address.country}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No saved addresses. Add a new one below.</p>
                    )}
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="fullname">Full Name</label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            value={billingInfo.fullname || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={billingInfo.email || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={billingInfo.phone || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={billingInfo.city || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State/Province</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={billingInfo.state || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postal">Postal Code</label>
                        <input
                            type="text"
                            id="postal"
                            name="postal" // Ensure this matches the key in billingInfo
                            value={billingInfo.postal || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={billingInfo.country || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </form>
            </div>
            <div className="order-summary">
                <h2>Order Summary</h2>
                <p><strong>Subtotal:</strong> ${getSubtotal()}</p>
                <p id='fee'>*On orders above $1000, shipping is free.</p>
                <p><strong>Shipping:</strong> ${getShippingFee()}</p>
                <p><strong>Total:</strong> ${getTotal()}</p>
            </div>
            <div className="checkout-buttons">
                <button className='checkoutbutton' type="button" onClick={handlePlaceOrder}>Place Order</button>
                <button className='checkoutbutton' type="button" onClick={() => navigate('/')}>Cancel</button>
            </div>
        </div>
    );
};

export default CheckoutPage;























                
