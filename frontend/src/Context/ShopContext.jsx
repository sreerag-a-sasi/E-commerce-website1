// import React, { createContext, useEffect, useState } from "react";

// export const ShopContext = createContext("");

// const getDefaultCart = () => {
//     let cart = {};
//     for (let index = 0; index < 301; index++) { // 300 + 1 is 301
//         cart[index] = 0;
//     }
//     return cart;
// };

// const ShopContextProvider = (props) => {
//     const [allProduct, setAllProduct] = useState([]);
//     const [cartItems, setCartItems] = useState(getDefaultCart());

//     useEffect(() => {
//         fetch('http://localhost:4000/allproducts') // Fixed URL typo
//             .then((response) => response.json())
//             .then((data) => setAllProduct(data));

// if (localStorage.getItem('auth-token')) {
//     fetch('http://localhost:4000/getcart', {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json', // Correct content type
//             'auth-token': localStorage.getItem('auth-token'),
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({}) // Use an empty object for the body if necessary
//     })
//     .then((response) => response.json())
//     .then((data) => setCartItems(data));
// }
//     }, []);

//     const addToCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//         if (localStorage.getItem('auth-token')) {
//             fetch('http://localhost:4000/addtocart', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json', // Correct content type
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ "itemId": itemId })
//             })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then((data) => console.log(data))
//             .catch((error) => console.error('Fetch error:', error));
//         }
//     };


//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//         if (localStorage.getItem('auth-token')) {
//             fetch('http://localhost:4000/removefromcart', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json', // Correct content type
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ "itemId": itemId })
//             })
//             .then((response) => response.json())
//             .then((data) => console.log(data));
//         }
//     };

//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 let itemInfo = allProduct.find((product) => product.id === Number(item));
//                 if (itemInfo) {
//                     totalAmount += itemInfo.new_price * cartItems[item];
//                 }
//             }
//         }
//         return totalAmount;
//     };

// const getTotalCartItems = () => {
//     let totalItem = 0;
//     for (const item in cartItems) {
//         if (cartItems[item] > 0) {
//             totalItem += cartItems[item];
//         }
//     }
//     return totalItem;
// };

//     const contextValue = { getTotalCartItems, getTotalCartAmount, allProduct, cartItems, addToCart, removeFromCart };

//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// };

// export default ShopContextProvider;


// const addToCart = (itemId, size = '') => {
//     const updatedCart = { ...cartItems };
//     if (updatedCart[itemId]) {
//         updatedCart[itemId].quantity += 1;
//     } else {
//         updatedCart[itemId] = { quantity: 1, size };
//     }
//     updateCartState(updatedCart);

//     if (localStorage.getItem('auth-token')) {
//         fetch('http://localhost:4000/addtocart', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'auth-token': localStorage.getItem('auth-token'),
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ itemId, size })
//         })
//             .then((response) => response.json())
//             .then((data) => console.log(data))
//             .catch((error) => console.error('Error adding to cart:', error));
//         alert("Item added to cart");
//     }
// };


// const getTotalCartItems = () => {
//     let totalItem = 0;
//     for (const item in cartItems) {
//         if (cartItems[item] > 0) {
//             totalItem += cartItems[item];
//         }
//     }
//     return totalItem;
// };





import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [allProduct, setAllProduct] = useState([]);
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : {};
    });

    const [wishlistItems, setWishlistItems] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlistItems');
        const parsedWishlist = savedWishlist ? JSON.parse(savedWishlist) : {};
        console.log('Wishlist Items:', parsedWishlist); // Added console.log to see wishlist items
        return parsedWishlist;
    });

    useEffect(() => {
        fetch('http://localhost:4000/allproducts')
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched Products:', data); // Log fetched products
                setAllProduct(data);
            })
            .catch((error) => console.error('Error fetching products:', error));

        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
            })
                .then((response) => response.json())
                .then((data) => {
                    // console.log('Fetched Cart:', data);
                    setCartItems(data);
                    localStorage.setItem('cartItems', JSON.stringify(data)); // Update localStorage
                })
                .catch((error) => console.error('Error fetching cart:', error));
        }

        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/getwishlist', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Fetched Wishlist:', data);
                    if (data.success && Array.isArray(data.Wishlist)) {
                        const wishlistObj = {};
                        data.Wishlist.forEach(item => {
                            wishlistObj[item] = true; // Use a boolean to mark items in the wishlist
                        });
                        setWishlistItems(wishlistObj);
                    } else {
                        console.error('Unexpected data format:', data);
                    }
                })
                .catch((error) => console.error('Error fetching wishlist:', error));
        }
    }, []);

    const deleteFromWishlist = (itemId) => {
        // Update the local state to remove the item from the wishlist
        const updatedWishlist = { ...wishlistItems };
        delete updatedWishlist[itemId];
        setWishlistItems(updatedWishlist);

        // Update the local storage to remove the item from the wishlist
        localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));

        // Send a request to the backend to update the wishlist
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/deletefromwishlist', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ itemId })
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.error('Error deleting from wishlist:', error));
            alert("Item removed from wishlist");
        }
    };

    const updateCartState = (updatedCart) => {
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json', // Correct content type
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "itemId": itemId })
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => console.log(data))
                .catch((error) => console.error('Fetch error:', error));
        }
    };

    const addToWishlist = (itemId) => {
        // Check if the item is already in the wishlist
        if (wishlistItems[itemId]) {
            console.log('Item is already in the wishlist');
            return;
        }

        // Update the local state to add the item to the wishlist
        setWishlistItems((prev) => {
            const updatedWishlist = { ...prev, [itemId]: true }; // Use boolean true to mark presence
            localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));
            return updatedWishlist;
        });

        // Send a request to the backend to update the wishlist
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/addtowishlist', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ itemId })
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => console.log(data))
                .catch((error) => console.error('Fetch error:', error));
        }
    };

    const deleteFromCart = (itemId) => {
        const updatedCart = { ...cartItems };
        delete updatedCart[itemId];
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/deletefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ itemId })
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.error('Error deleting from cart:', error));
            alert("Item removed from cart");
        }
    };
    

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "itemId": itemId })
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
            // alert("item removed")
        }
    };

    const addFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "itemId": itemId })
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
            // alert("item added")
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        // Iterate over the cartItems object (key is item id, value is quantity)
        Object.keys(cartItems).forEach(itemId => {
            const quantity = cartItems[itemId];

            // Only consider items with a positive quantity
            if (quantity > 0) {
                // Find the product with the matching id
                const itemInfo = allProduct.find(product => product.id === Number(itemId));

                // If the product exists, add to the total amount
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * quantity;
                }
            }
        });

        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };
    // console.log(getTotalCartItems());  

    const clearCart = async () => {
        try {
            const response = await fetch('http://localhost:4000/clearcart', {
                method: 'POST',
                headers: {
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json'
                },
            });
            if (response.ok) {
                setCartItems({}); // Update state to reflect an empty cart
                localStorage.setItem('cartItems', JSON.stringify({})); // Clear cart items in localStorage
                console.log('Cart successfully cleared.');
            } else {
                console.error('Error clearing cart');
            }
        } catch (error) {
            console.error('Error clearing cart:', error);
        }
    };

    const contextValue = {
        allProduct,
        cartItems,
        addToCart,
        addFromCart,
        removeFromCart,
        deleteFromCart,
        wishlistItems,
        deleteFromWishlist,
        getTotalCartAmount,
        getTotalCartItems,
        addToWishlist,
        clearCart,
        setWishlistItems // Ensure setWishlistItems is included here 
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;




















