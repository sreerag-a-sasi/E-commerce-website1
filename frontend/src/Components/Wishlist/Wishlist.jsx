import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Wishlist.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/dustbin.png';

const Wishlist = () => {
    const { allProduct, wishlistItems, deleteFromWishlist } = useContext(ShopContext);
    const navigate = useNavigate(); 

    // Log wishlist items and all products to debug
    useEffect(() => {
        console.log('Wishlist Items:', wishlistItems);
        console.log('All Products:', allProduct);
    }, [wishlistItems, allProduct]);

    const redirectToProductPage = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div className='wishlist'>
            <div className="wishlist-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Remove</p>
            </div>
            <hr />
            {allProduct.map((e) => {
                //console.log(`Checking product with id: ${e.id}`);
                if (wishlistItems[e.id]) {
                    console.log(`Displaying product: ${e.name}`);
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
                                <img className='wishlist-delete-icon' src={remove_icon} onClick={() => { deleteFromWishlist(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                // console.log(`Product with id: ${e.id} in wishlist`);
                return null;
            })}
        </div>
    );
}

export default Wishlist;
