// // import React from "react";
// // import './Item.css'
// // import { Link } from "react-router-dom";

// // const Item = (props) => {
// //     return(
// //         <div className="item">
// //             <Link to={`/product/${props.id}`} ><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
// //             <p>{props.name}</p>
// //             <div className="item-prices">
// //                 <div className="item-price-new">
// //                     ${props.new_price}
// //                 </div>
// //                 <div className="item-price-old">
// //                     ${props.old_price}
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Item;


// // import React, { useContext } from 'react';
// // import './Item.css';
// // import { Link } from "react-router-dom";
// // import wish from "../Assets/wish.png"
// // import wishlist2 from "../Assets/wishlist2.png"
// // import { ShopContext } from '../../Context/ShopContext';

// // const Item = (props) => {
// //     // Check if props.image is defined and is an array with at least one element
// //     const mainImage = Array.isArray(props.image) && props.image.length > 0 ? props.image[0] : null;

// //     const { addToWishlist } = useContext(ShopContext);
// //     return (
// //         <div className="item">
// //             <Link to={`/product/${props.id}`}>
// //                 {/* Pass onImageClick through props to the img element */}
// //                 <img className="mainimage"
// //                     onClick={props.onImageClick}  // Use the onImageClick prop passed from parent
// //                     src={mainImage} 
// //                     alt={props.name} 
// //                 />
// //             </Link>
// //             <p>{props.name}</p>
// //             <div className="under">
// //             <div className="item-prices">
// //                 <div className="item-price-new">
// //                     ${props.new_price}
// //                 </div>
// //                 <div className="item-price-old">
// //                     ${props.old_price}
// //                 </div>
// //             </div>
// //             <div>
// //                 <img className="wish" onClick={() => { addToWishlist(props.id) }} src={wish} alt="" />
// //             </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Item;

// // import React, { useContext, useEffect, useState } from 'react';
// // import './Item.css';
// // import { Link } from "react-router-dom";
// // import wish from "../Assets/wish.png";
// // import wishlist from "../Assets/wishlist.png";
// // import { ShopContext } from '../../Context/ShopContext';

// // const Item = (props) => {
// //     const mainImage = Array.isArray(props.image) && props.image.length > 0 ? props.image[0] : null;
// //     const { addToWishlist } = useContext(ShopContext);
// //     const [isInWishlist, setIsInWishlist] = useState(false);

// //     useEffect(() => {
// //         // Check if the item is in the wishlist
// //         const checkWishlist = async () => {
// //             try {
// //                 const response = await fetch(`http://localhost:4000/checkwishlist`, {
// //                     method: 'POST',
// //                     headers: {
// //                         Accept: 'application/json',
// //                         'auth-token': localStorage.getItem('auth-token'),
// //                         'Content-Type': 'application/json'
// //                     },
// //                     body: JSON.stringify({ itemId: props.id }),
// //                 });
// //                 if (!response.ok) {
// //                     throw new Error(`HTTP error! status: ${response.status}`);
// //                 }
// //                 const data = await response.json();
// //                 if (data.isInWishlist) {
// //                     setIsInWishlist(true);
// //                 }
// //             } catch (error) {
// //                 console.error('Error checking wishlist:', error);
// //             }
// //         };
// //         checkWishlist();
// //     }, [props.id]);

// //     return (
// //         <div className="item">
// //             <Link to={`/product/${props.id}`}>
// //                 <img className="mainimage"
// //                     onClick={props.onImageClick}
// //                     src={mainImage}
// //                     alt={props.name}
// //                 />
// //             </Link>
// //             <p>{props.name}</p>
// //             <div className="under">
// //                 <div className="item-prices">
// //                     <div className="item-price-new">
// //                         ${props.new_price}
// //                     </div>
// //                     <div className="item-price-old">
// //                         ${props.old_price}
// //                     </div>
// //                 </div>
// //                 <div>
// //                     {isInWishlist ? (
// //                         <img className="wish" src={wishlist} alt="In Wishlist" style={{ cursor: 'default' }}/>
// //                     ) : (
// //                         <img className="wish" onClick={() => { addToWishlist(props.id) }} src={wish} alt="Add to Wishlist" />
// //                     )}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Item;


// // import React, { useContext, useEffect, useState } from 'react';
// // import './Item.css';
// // import { Link } from "react-router-dom";
// // import wish from "../Assets/wish.png";
// // import wishlist from "../Assets/wishlist.png";
// // import { ShopContext } from '../../Context/ShopContext';

// // const Item = (props) => {
// //     const mainImage = Array.isArray(props.image) && props.image.length > 0 ? props.image[0] : null;
// //     const { addToWishlist } = useContext(ShopContext);
// //     const { deleteFromWishlist} = useContext(ShopContext);
// //     const [isInWishlist, setIsInWishlist] = useState(false);

// //     useEffect(() => {
// //         const authToken = localStorage.getItem('auth-token');

// //         if (authToken) {
// //             const checkWishlist = async () => {
// //                 try {
// //                     const response = await fetch('http://localhost:4000/checkwishlist', {
// //                         method: 'POST',
// //                         headers: {
// //                             Accept: 'application/json',
// //                             'auth-token': authToken,
// //                             'Content-Type': 'application/json'
// //                         },
// //                         body: JSON.stringify({ itemId: props.id })
// //                     });
// //                     if (!response.ok) {
// //                         throw new Error(`HTTP error! status: ${response.status}`);
// //                     }
// //                     const data = await response.json();
// //                     if (data.isInWishlist) {
// //                         setIsInWishlist(true);
// //                     }
// //                 } catch (error) {
// //                     console.error('Error checking wishlist:', error);
// //                 }
// //             };
// //             checkWishlist();
// //         }
// //     }, [props.id]);

// //     const handleAddToWishlist = (itemId) => {
// //         addToWishlist(itemId);
// //         window.location.reload(); // Reload the page to update
// //     };
    
// //     const handleRemoveFromWishlist = (itemId) => {
// //         deleteFromWishlist(itemId);
// //         window.location.reload(); // Reload the page to update
// //     };
    

// //     return (
// //         <div className="item">
// //             <Link to={`/product/${props.id}`}>
// //                 <img className="mainimage"
// //                     onClick={props.onImageClick}
// //                     src={mainImage}
// //                     alt={props.name}
// //                 />
// //             </Link>
// //             <p>{props.name}</p>
// //             <div className="under">
// //                 <div className="item-prices">
// //                     <div className="item-price-new">
// //                         ${props.new_price}
// //                     </div>
// //                     <div className="item-price-old">
// //                         ${props.old_price}
// //                     </div>
// //                 </div>
// //                 <div>
// //                     {isInWishlist ? (
// //                         <img className="wish" src={wishlist} onClick={() => { handleRemoveFromWishlist(props.id) }} alt="Remove from Wishlist" />
// //                     ) : (
// //                         <img className="wish" onClick={() => { handleAddToWishlist(props.id) }} src={wish} alt="Add to Wishlist" />
// //                     )}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Item;


// import React, { useContext, useEffect, useState } from 'react';
// import './Item.css';
// import { Link } from "react-router-dom";
// import wish from "../Assets/wish.png";
// import wishlist from "../Assets/wishlist.png";
// import { ShopContext } from '../../Context/ShopContext';

// const Item = (props) => {
//     const mainImage = Array.isArray(props.image) && props.image.length > 0 ? props.image[0] : null;
//     const { addToWishlist } = useContext(ShopContext);
//     const { deleteFromWishlist } = useContext(ShopContext);
//     const [isInWishlist, setIsInWishlist] = useState(false);

//     useEffect(() => {
//         const authToken = localStorage.getItem('auth-token');

//         if (authToken) {
//             const checkWishlist = async () => {
//                 try {
//                     const response = await fetch('http://localhost:4000/checkwishlist', {
//                         method: 'POST',
//                         headers: {
//                             Accept: 'application/json',
//                             'auth-token': authToken,
//                             'Content-Type': 'application/json',
//                         },
//                         body: JSON.stringify({ itemId: props.id }),
//                     });
//                     if (!response.ok) {
//                         throw new Error(`HTTP error! status: ${response.status}`);
//                     }
//                     const data = await response.json();
//                     setIsInWishlist(data.isInWishlist);
//                 } catch (error) {
//                     console.error('Error checking wishlist:', error);
//                 }
//             };
//             checkWishlist();
//         }
//     }, [props.id]);

//     const handleAddToWishlist = (itemId) => {
//         addToWishlist(itemId);
//         setIsInWishlist(true); // Update state instead of reloading
//     };

//     const handleRemoveFromWishlist = (itemId) => {
//         deleteFromWishlist(itemId);
//         setIsInWishlist(false); // Update state instead of reloading
//     };

//     return (
//         <div className="item">
//             <Link to={`/product/${props.id}`}>
//                 <img
//                     className="mainimage"
//                     onClick={props.onImageClick}
//                     src={mainImage}
//                     alt={props.name}
//                 />
//             </Link>
//             <p>{props.name}</p>
//             <div className="under">
//                 <div className="item-prices">
//                     <div className="item-price-new">
//                         <p>Starting from ${props.S}</p> {/* Display size S price */}
//                     </div>
//                     {props.old_price && ( /* Conditionally render old price if it exists */
//                         <div className="item-price-old">
//                             ${props.old_price}
//                         </div>
//                     )}
//                 </div>
//                 <div>
//                     {isInWishlist ? (
//                         <img
//                             className="wish"
//                             src={wishlist}
//                             onClick={() => handleRemoveFromWishlist(props.id)}
//                             alt="Remove from Wishlist"
//                         />
//                     ) : (
//                         <img
//                             className="wish"
//                             src={wish}
//                             onClick={() => handleAddToWishlist(props.id)}
//                             alt="Add to Wishlist"
//                         />
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Item;



import React, { useContext, useEffect, useState } from 'react';
import './Item.css';
import { Link } from "react-router-dom";
import wish from "../Assets/wish.png";
import wishlist from "../Assets/wishlist.png";
import { ShopContext } from '../../Context/ShopContext';

const Item = (props) => {
    const mainImage = Array.isArray(props.image) && props.image.length > 0 ? props.image[0] : null;
    const { addToWishlist } = useContext(ShopContext);
    const { deleteFromWishlist } = useContext(ShopContext);
    const [isInWishlist, setIsInWishlist] = useState(false);

    useEffect(() => {
        const authToken = localStorage.getItem('auth-token');

        if (authToken) {
            const checkWishlist = async () => {
                try {
                    const response = await fetch('http://localhost:4000/checkwishlist', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'auth-token': authToken,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ itemId: props.id }),
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    setIsInWishlist(data.isInWishlist);
                } catch (error) {
                    console.error('Error checking wishlist:', error);
                }
            };
            checkWishlist();
        }
    }, [props.id]);

    const handleAddToWishlist = (itemId) => {
        addToWishlist(itemId);
        setIsInWishlist(true); // Update state instead of reloading
    };

    const handleRemoveFromWishlist = (itemId) => {
        deleteFromWishlist(itemId);
        setIsInWishlist(false); // Update state instead of reloading
    };

    return (
        <div className="item">
            <Link to={`/product/${props.id}`}>
                <img
                    className="mainimage"
                    onClick={props.onImageClick}
                    src={mainImage}
                    alt={props.name}
                />
            </Link>
            <p id='name'>{props.name}</p>
            <div className="under">
                <div className="item-prices">
                    <div className="item-price-new">
                        <p>
                            Starting: ${props.S} {/* Display size S with price */}
                        </p>
                    </div>
                    <div className="item-price-old">
                        <p>
                            Upto : ${props.XXL} {/* Display size XXL with price */}
                        </p>
                    </div>
                </div>
                <div>
                    {isInWishlist ? (
                        <img
                            className="wish"
                            src={wishlist}
                            onClick={() => handleRemoveFromWishlist(props.id)}
                            alt="Remove from Wishlist"
                        />
                    ) : (
                        <img
                            className="wish"
                            src={wish}
                            onClick={() => handleAddToWishlist(props.id)}
                            alt="Add to Wishlist"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Item;
