// // import React, { useContext } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import './CheckoutPage.css';
// // import { ShopContext } from '../../Context/ShopContext';

// // const CheckoutPage = () => {
// //     const location = useLocation();
// //     const navigate = useNavigate();
// //     const { cartItems, allProduct, getTotalCartAmount, clearCart } = useContext(ShopContext);

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

// //     const getSubtotal = () => {
// //         if (isDirectPurchase) {
// //             return cartProducts[0].new_price;
// //         }
// //         return getTotalCartAmount();
// //     };

// //     const getTotal = () => {
// //         const shippingFee = 20;
// //         return getSubtotal() + shippingFee;
// //     };

// //     const handlePlaceOrder = async () => {
// //         const orderProducts = cartProducts.map(product => ({
// //             id: product.id,
// //             quantity: isDirectPurchase ? 1 : cartItems[product.id]
// //         }));

// //         try {
// //             const response = await fetch('http://localhost:4000/placeOrder', {
// //                 method: 'POST',
// //                 headers: {
// //                     Accept: 'application/json',
// //                     'auth-token': localStorage.getItem('auth-token'),
// //                     'Content-Type': 'application/json'
// //                 },
// //                 body: JSON.stringify({ products: orderProducts })
// //             });

// //             if (response.ok) {
// //                 alert("Order placed successfully");
// //                 clearCart();
// //                 navigate('/');
// //             } else {
// //                 const data = await response.json();
// //                 alert(`Error placing order: ${data.message}`);
// //             }
// //         } catch (error) {
// //             console.error("Error placing order:", error);
// //             alert("Error placing order. Please try again.");
// //         }
// //     };

// //     return (
// //         <div className="container">
// //             <div className="product-info">
// //                 <h2>Product Information</h2>
// //                 {cartProducts.map(product => (
// //                     <div className="product-item" key={product.id}>
// //                         <img src={product.image[0]} alt="Product" className="product-image" />
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
// //                         <input type="text" id="fullname" name="fullname" required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="email">Email Address</label>
// //                         <input type="email" id="email" name="email" required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="phone">Phone Number</label>
// //                         <input type="tel" id="phone" name="phone" required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="address">Address</label>
// //                         <input type="text" id="address" name="address" required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="city">City</label>
// //                         <input type="text" id="city" name="city" required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="state">State/Province</label>
// //                         <input type="text" id="state" name="state" required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="postal">Postal Code</label>
// //                         <input type="text" id="postal" name="postal" required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="country">Country</label>
// //                         <input type="text" id="country" name="country" required />
// //                     </div>
// //                 </form>
// //             </div>
// //             <div className="payment-info">
// //                 <h2>Payment Information</h2>
// //                 <form>
// //                     <div className="form-group">
// //                         <label htmlFor="cardnumber">Card Number</label>
// //                         <input type="text" id="cardnumber" name="cardnumber" required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="expiration">Expiration Date</label>
// //                         <input type="text" id="expiration" name="expiration" required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="cvv">CVV</label>
// //                         <input type="text" id="cvv" name="cvv" required />
// //                     </div>
// //                 </form>
// //             </div>
// //             <div className="order-summary">
// //                 <h2>Order Summary</h2>
// //                 <p><strong>Subtotal:</strong> ${getSubtotal()}</p>
// //                 <p><strong>Shipping:</strong> $20</p>
// //                 <p><strong>Total:</strong> ${getTotal()}</p>
// //             </div>
// //             <div className="checkout-buttons">
// //                 <button type="button" onClick={handlePlaceOrder}>Place Order</button>
// //                 <button type="button" onClick={() => navigate('/')}>Cancel</button>
// //             </div>
// //         </div>
// //     );
// // };

// // export default CheckoutPage;





// // import React, { useContext } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import './CheckoutPage.css';
// // import { ShopContext } from '../../Context/ShopContext';

// // const CheckoutPage = () => {
// //     const location = useLocation();
// //     const navigate = useNavigate();
// //     const { cartItems, allProduct, getTotalCartAmount, clearCart } = useContext(ShopContext);

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

// //     const getSubtotal = () => {
// //         if (isDirectPurchase) {
// //             return cartProducts[0].new_price;
// //         }
// //         return getTotalCartAmount();
// //     };

// //     const getTotal = () => {
// //         const shippingFee = 0.0;
// //         return getSubtotal() + shippingFee;
// //     };

// //     const handlePlaceOrder = async () => {
// //         const orderProducts = cartProducts.map(product => ({
// //             id: product.id,
// //             quantity: isDirectPurchase ? 1 : cartItems[product.id]
// //         }));

// //         try {
// //             const response = await fetch('http://localhost:4000/placeOrder', {
// //                 method: 'POST',
// //                 headers: {
// //                     Accept: 'application/json',
// //                     'auth-token': localStorage.getItem('auth-token'),
// //                     'Content-Type': 'application/json'
// //                 },
// //                 body: JSON.stringify({ products: orderProducts })
// //             });

// //             if (response.ok) {
// //                 alert("Order placed successfully");
// //                 await clearCart(); // Clear the cart after placing the order
// //                 navigate('/');
// //             } else {
// //                 const data = await response.json();
// //                 alert(`Error placing order: ${data.message}`);
// //             }
// //         } catch (error) {
// //             console.error("Error placing order:", error);
// //             alert("Error placing order. Please try again.");
// //         }
// //     };

// //     return (
// //         <div className="container">
// //             <div className="product-info">
// //                 <h2>Product Information</h2>
// //                 {cartProducts.map(product => (
// //                     <div className="product-item" key={product.id}>
// //                         <img src={product.image[0]} alt="Product Image" className="product-image" />
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
// //                         <input type="text" id="fullname" name="fullname" required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="email">Email Address</label>
// //                         <input type="email" id="email" name="email" required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="phone">Phone Number</label>
// //                         <input type="tel" id="phone" name="phone" required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="address">Address</label>
// //                         <input type="text" id="address" name="address" required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="city">City</label>
// //                         <input type="text" id="city" name="city" required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="state">State/Province</label>
// //                         <input type="text" id="state" name="state" required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="postal">Postal Code</label>
// //                         <input type="text" id="postal" name="postal" required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="country">Country</label>
// //                         <input type="text" id="country" name="country" required />
// //                     </div>
// //                 </form>
// //             </div>
// //             <div className="payment-info">
// //                 <h2>Payment Information</h2>
// //                 <form>
// //                     <div className="form-group">
// //                         <label htmlFor="cardnumber">Card Number</label>
// //                         <input type="text" id="cardnumber" name="cardnumber" required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="expiration">Expiration Date</label>
// //                         <input type="text" id="expiration" name="expiration" required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="cvv">CVV</label>
// //                         <input type="text" id="cvv" name="cvv" required />
// //                     </div>
// //                 </form>
// //             </div>
// //             <div className="order-summary">
// //                 <h2>Order Summary</h2>
// //                 <p><strong>Subtotal:</strong> ${getSubtotal()}</p>
// //                 <p><strong>Shipping:</strong> $0.00</p>
// //                 <p><strong>Total:</strong> ${getTotal()}</p>
// //             </div>
// //             <div className="checkout-buttons">
// //                 <button type="button" onClick={handlePlaceOrder}>Place Order</button>
// //                 <button type="button" onClick={() => navigate('/')}>Cancel</button>
// //             </div>
// //         </div>
// //     );
// // };

// // export default CheckoutPage;

// import React, { useContext } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './CheckoutPage.css';
// import { ShopContext } from '../../Context/ShopContext';

// const CheckoutPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { cartItems, allProduct, getTotalCartAmount, clearCart } = useContext(ShopContext);

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

//     const getSubtotal = () => {
//         if (isDirectPurchase) {
//             return cartProducts[0].new_price;
//         }
//         return getTotalCartAmount();
//     };

//     const getTotal = () => {
//         const shippingFee = 0.00;
//         return getSubtotal() + shippingFee;
//     };

//     const handlePlaceOrder = async () => {
//         const orderProducts = cartProducts.map(product => ({
//             id: product.id,
//             quantity: isDirectPurchase ? 1 : cartItems[product.id]
//         }));

//         try {
//             const response = await fetch('http://localhost:4000/placeOrder', {
//                 method: 'POST',
//                 headers: {
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ products: orderProducts })
//             });

//             if (response.ok) {
//                 alert("Order placed successfully");
//                 await clearCart(); // Clear the cart after placing the order
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

//     return (
//         <div className="container">
//             <div className="product-info">
//                 <h2>Product Information</h2>
//                 {cartProducts.map(product => (
//                     <div className="product-item" key={product.id}>
//                         <img src={product.image[0]} alt="Product Image" className="product-image" />
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
//                 <form>
//                     <div className="form-group">
//                         <label htmlFor="fullname">Full Name</label>
//                         <input type="text" id="fullname" name="fullname" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">Email Address</label>
//                         <input type="email" id="email" name="email" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="phone">Phone Number</label>
//                         <input type="tel" id="phone" name="phone" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="address">Address</label>
//                         <input type="text" id="address" name="address" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="city">City</label>
//                         <input type="text" id="city" name="city" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="state">State/Province</label>
//                         <input type="text" id="state" name="state" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="postal">Postal Code</label>
//                         <input type="text" id="postal" name="postal" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="country">Country</label>
//                         <input type="text" id="country" name="country" required />
//                     </div>
//                 </form>
//             </div>
//             <div className="payment-info">
//                 <h2>Payment Information</h2>
//                 <form>
//                     <div className="form-group">
//                         <label htmlFor="cardnumber">Card Number</label>
//                         <input type="text" id="cardnumber" name="cardnumber" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="expiration">Expiration Date</label>
//                         <input type="text" id="expiration" name="expiration" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="cvv">CVV</label>
//                         <input type="text" id="cvv" name="cvv" required />
//                     </div>
//                 </form>
//             </div>
//             <div className="order-summary">
//                 <h2>Order Summary</h2>
//                 <p><strong>Subtotal:</strong> ${getSubtotal()}</p>
//                 <p><strong>Shipping:</strong> $0.00</p>
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


import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CheckoutPage.css';
import { ShopContext } from '../../Context/ShopContext';

const CheckoutPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { cartItems, allProduct, getTotalCartAmount, clearCart } = useContext(ShopContext);

    const [billingInfo, setBillingInfo] = useState({
        fullname: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        postal: '',
        country: ''
    });
    const [paymentInfo, setPaymentInfo] = useState({
        cardnumber: '',
        expiration: '',
        cvv: ''
    });

    let cartProducts = [];
    let isDirectPurchase = false;

    // Check if product data is passed via location.state
    if (location.state && location.state.product) {
        cartProducts = [location.state.product];
        isDirectPurchase = true;
    } else {
        // Use cartItems context if no product data in location.state
        cartProducts = allProduct.filter(product => cartItems[product.id] > 0);
    }

    const getSubtotal = () => {
        if (isDirectPurchase) {
            return cartProducts[0].new_price;
        }
        return getTotalCartAmount();
    };

    const getTotal = () => {
        const shippingFee = 0.00;
        return getSubtotal() + shippingFee;
    };

    const handleInputChange = (e, setFunction) => {
        const { name, value } = e.target;
        setFunction(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePlaceOrder = async () => {
        const orderProducts = cartProducts.map(product => ({
            _id: product._id, // Use _id for backend operations
            id: product.id,
            quantity: isDirectPurchase ? 1 : cartItems[product.id],
            new_price: product.new_price // Include new_price to calculate total price
        }));

        const orderDetails = {
            products: orderProducts,
            billingInfo,
            paymentInfo,
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
                await clearCart(); // Clear the cart after placing the order
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

    return (
        <div className="container">
            <div className="product-info">
                <h2>Product Information</h2>
                {cartProducts.map(product => (
                    <div className="product-item" key={product.id}>
                        <img src={product.image[0]} alt="Product Image" className="product-image" />
                        <div className="product-details">
                            <p><strong>Item:</strong> {product.name}</p>
                            <p><strong>Price:</strong> ${product.new_price}</p>
                            <p><strong>Size:</strong> M</p>
                            <p><strong>Quantity:</strong> {isDirectPurchase ? 1 : cartItems[product.id]}</p>
                            <p><strong>Total:</strong> ${product.new_price * (isDirectPurchase ? 1 : cartItems[product.id])}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="billing-info">
                <h2>Billing Information</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="fullname">Full Name</label>
                        <input 
                            type="text" 
                            id="fullname" 
                            name="fullname" 
                            value={billingInfo.fullname}
                            onChange={e => handleInputChange(e, setBillingInfo)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={billingInfo.email}
                            onChange={e => handleInputChange(e, setBillingInfo)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone"
                            value={billingInfo.phone}
                            onChange={e => handleInputChange(e, setBillingInfo)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input 
                            type="text" 
                            id="address" 
                            name="address"
                            value={billingInfo.address}
                            onChange={e => handleInputChange(e, setBillingInfo)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input 
                            type="text" 
                            id="city" 
                            name="city"
                            value={billingInfo.city}
                            onChange={e => handleInputChange(e, setBillingInfo)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State/Province</label>
                        <input 
                            type="text" 
                            id="state" 
                            name="state"
                            value={billingInfo.state}
                            onChange={e => handleInputChange(e, setBillingInfo)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postal">Postal Code</label>
                        <input 
                            type="text" 
                            id="postal" 
                            name="postal"
                            value={billingInfo.postal}
                            onChange={e => handleInputChange(e, setBillingInfo)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input 
                            type="text" 
                            id="country" 
                            name="country"
                            value={billingInfo.country}
                            onChange={e => handleInputChange(e, setBillingInfo)}
                            required 
                        />
                    </div>
                </form>
            </div>
            <div className="payment-info">
                <h2>Payment Information</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="cardnumber">Card Number</label>
                        <input 
                            type="text" 
                            id="cardnumber" 
                            name="cardnumber"
                            value={paymentInfo.cardnumber}
                            onChange={e => handleInputChange(e, setPaymentInfo)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="expiration">Expiration Date</label>
                        <input 
                            type="text" 
                            id="expiration" 
                            name="expiration"
                            value={paymentInfo.expiration}
                            onChange={e => handleInputChange(e, setPaymentInfo)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cvv">CVV</label>
                        <input 
                            type="text" 
                            id="cvv" 
                            name="cvv"
                            value={paymentInfo.cvv}
                            onChange={e => handleInputChange(e, setPaymentInfo)}
                            required 
                        />
                    </div>
                </form>
            </div>
            <div className="order-summary">
                <h2>Order Summary</h2>
                <p><strong>Subtotal:</strong> ${getSubtotal()}</p>
                <p><strong>Shipping:</strong> $0.00</p>
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
