// import React from "react";
// import './Item.css'
// import { Link } from "react-router-dom";

// const Item = (props) => {
//     return(
//         <div className="item">
//             <Link to={`/product/${props.id}`} ><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
//             <p>{props.name}</p>
//             <div className="item-prices">
//                 <div className="item-price-new">
//                     ${props.new_price}
//                 </div>
//                 <div className="item-price-old">
//                     ${props.old_price}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Item;


import React, { useContext } from 'react';
import './Item.css';
import { Link } from "react-router-dom";
import wish from "../Assets/wish.png"
import { ShopContext } from '../../Context/ShopContext';

const Item = (props) => {
    // Check if props.image is defined and is an array with at least one element
    const mainImage = Array.isArray(props.image) && props.image.length > 0 ? props.image[0] : null;

    const { addToWishlist } = useContext(ShopContext);
    return (
        <div className="item">
            <Link to={`/product/${props.id}`}>
                {/* Pass onImageClick through props to the img element */}
                <img className="mainimage"
                    onClick={props.onImageClick}  // Use the onImageClick prop passed from parent
                    src={mainImage} 
                    alt={props.name} 
                />
            </Link>
            <p>{props.name}</p>
            <div className="under">
            <div className="item-prices">
                <div className="item-price-new">
                    ${props.new_price}
                </div>
                <div className="item-price-old">
                    ${props.old_price}
                </div>
            </div>
            <div>
                <img className="wish" onClick={() => { addToWishlist(props.id) }} src={wish} alt="" />
            </div>
            </div>
        </div>
    );
}

export default Item;
