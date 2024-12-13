import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Wishlist.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/dustbin.png';

const Wishlist = () => {
    const { allProduct, wishlistItems, deleteFromWishlist } = useContext(ShopContext);
    const navigate = useNavigate(); 

    const redirectToProductPage = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div className='wishlist'>
            <div className="wishlist-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Remove</p>
            </div>
            <hr />
            {allProduct.map((e) => {
                if (wishlistItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="wishlist-format wishlist-format-main">
                                <img
                                    src={e.image[0]}
                                    alt=""
                                    className='wishlist-product-icon'
                                    onClick={() => redirectToProductPage(e.id)}
                                />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <img className='wishlist-delete-icon' src={remove_icon} onClick={() => { deleteFromWishlist(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}


export default Wishlist;