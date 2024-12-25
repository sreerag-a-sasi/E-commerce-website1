import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [mainImage, setMainImage] = useState(product.image[0]); // State for main image
    const navigate = useNavigate(); // Initialize useNavigate

    const handleBuyNow = () => {
        addToCart(product.id); // Optionally add the item to cart
        navigate('/checkout', { state: { product } }); // Navigate to the checkout page with product data
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
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    {product.description}
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <button onClick={handleBuyNow}>BUY NOW</button> {/* Add onClick to navigate to checkout */}
                <p className="productdisplay-right-category"><span>Category :</span>{product.category}</p>
                <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
