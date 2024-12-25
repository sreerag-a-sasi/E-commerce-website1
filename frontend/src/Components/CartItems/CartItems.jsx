// import React, { useContext } from 'react';
// import './CartItems.css';
// import { ShopContext } from '../../Context/ShopContext';
// import remove_icon from '../Assets/dustbin.png';
// import add_icon from '../Assets/plus-button.png'
// import minus_icon from '../Assets/minus-button.png'


// const CartItems = () => {
//     const { getTotalCartAmount, allProduct, cartItems, removeFromCart, deleteFromCart,addFromCart, } = useContext(ShopContext);
//     return (
//         <div className='cartitems'>
//             <div className="cartitems-format-main">
//                 <p>Products</p>
//                 <p>Title</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Total</p>
//                 <p>Remove</p>
//             </div>
//             <hr />
//             {allProduct.map((e) => {
//                 if (cartItems[e.id] > 0) {
//                     return (
//                         <div key={e.id}>
//                             <div className="cartitems-format cartitems-format-main">
//                                 <img src={e.image[0]} alt="" className='carticon-product-icon' />
//                                 <p>{e.name}</p>
//                                 <p>${e.new_price}</p>
//                                 {/* <button className='cartitems-quantity'>{cartItems[e.id]}</button> */}
//                                 <div className="quantity">
//                                 <img className='cartitems-remove-icon' src={add_icon} onClick={() =>addFromCart(e.id) } alt="" />
//                                     <div className='cartitems-quantity'>{cartItems[e.id]}</div>
//                                     <img className='cartitems-remove-icon' src={minus_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
//                                 </div>
//                                 <p>${e.new_price * cartItems[e.id]}</p>
//                                 <img className='cartitems-delete-icon' src={remove_icon} onClick={() => { deleteFromCart(e.id) }} alt="" />
//                             </div>
//                             <hr />
//                         </div>
//                     );
//                 }
//                 return null;
//             })}
//             <div className="cartitems-down">
//                 <div className="cartitems-total">
//                     <h1>Cart Totals</h1>
//                     <div>
//                         <div className="cartitems-total-item">
//                             <p>Subtotal</p>
//                             <p>${getTotalCartAmount()}</p>
//                         </div>
//                         <hr />
//                         <div className="cartitems-total-item">
//                             <p>Shipping Fee</p>
//                             <p>Free</p>
//                         </div>
//                         <hr />
//                         <div className="cartitems-total-item">
//                             <h3>Total</h3>
//                             <h3>${getTotalCartAmount()}</h3>
//                         </div>
//                     </div>
//                     <button>PROCEED TO CHECKOUT</button>
//                 </div>
//                 <div className="cartitem-promocode">
//                     <p>If you have a promo code, enter it here:</p>
//                     <div className="cartitems-promobox">
//                         <input type="text" placeholder='Promo code' />
//                         <button>Submit</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CartItems;

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/dustbin.png';
import add_icon from '../Assets/plus-button.png';
import minus_icon from '../Assets/minus-button.png';

const CartItems = () => {
    const { getTotalCartAmount, allProduct, cartItems, removeFromCart, deleteFromCart, addFromCart } = useContext(ShopContext);
    const navigate = useNavigate(); // Initialize useNavigate

    const redirectToProductPage = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {allProduct.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img
                                    src={e.image[0]}
                                    alt=""
                                    className='carticon-product-icon'
                                    onClick={() => redirectToProductPage(e.id)}
                                />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <div className="quantity">
                                    <img className='cartitems-remove-icon' src={add_icon} onClick={() => addFromCart(e.id)} alt="" />
                                    <div className='cartitems-quantity'>{cartItems[e.id]}</div>
                                    <img className='cartitems-remove-icon' src={minus_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                                </div>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className='cartitems-delete-icon' src={remove_icon} onClick={() => { deleteFromCart(e.id) }} alt="" />
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
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={() => navigate('/checkout', { state: { products: allProduct.filter(product => cartItems[product.id] > 0) } })}>
                        PROCEED TO CHECKOUT
                    </button>
                </div>
                <div className="cartitem-promocode">
                    <p>If you have a promo code, enter it here:</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
