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





import React, { createContext, useState, useCallback, useEffect } from 'react';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [allProduct, setAllProduct] = useState([]);
    const [cartItems, setCartItems] = useState({});
    // eslint-disable-next-line
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        image: '',
        cartData: [],
        Wishlist: [],
        date: '',
        user_type: '',
    });
    const [wishlistItems, setWishlistItems] = useState({});

    // useEffect(() => {
    //     // Fetch all products
    //     fetch('http://localhost:4000/allproducts', {
    //         method: 'GET',
    //         headers: {
    //             Accept: 'application/json',
    //             'auth-token': localStorage.getItem('auth-token'), // Added auth-token here
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             // Filter out blocked products and set the state
    //             const unblockedProducts = data.filter((product) => !product.blocked);
    //             setAllProduct(unblockedProducts);
    //         })
    //         .catch((error) => console.error('Error fetching products:', error));
    // }, []); // This useEffect runs once on component mount

    useEffect(() => {
        fetch('http://localhost:4000/allproducts', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'auth-token': localStorage.getItem('auth-token') || '', // Optional: Include token if available
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // Filter out blocked products directly
                const unblockedProducts = data.filter((product) => !product.blocked);
                setAllProduct(unblockedProducts);
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);




    useEffect(() => {
        // Fetch wishlist data if auth-token is present
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/getwishlist', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success && Array.isArray(data.Wishlist)) {
                        // Convert wishlist array to an object with boolean flags
                        const wishlistObj = {};
                        data.Wishlist.forEach((item) => {
                            wishlistObj[item] = true; // Mark items in the wishlist
                        });
                        setWishlistItems(wishlistObj);
                    } else {
                        console.error('Unexpected data format:', data);
                    }
                })
                .catch((error) => console.error('Error fetching wishlist:', error));
        }
    }, []); // This useEffect runs once on component mount

    const fetchCartData = useCallback(() => {
        fetch('http://localhost:4000/getcart', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'auth-token': localStorage.getItem('auth-token'),
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                if (data && data.cartData) {
                    console.log("data:", data, "cartdata", data.cartData);
                    setCartItems(data.cartData);
                } else {
                    console.log('Invalid cart data or cart is empty:', data);
                }
            })
            .catch((error) => {
                console.error('Error fetching cart data:', error);
            });
    }, []);

    useEffect(() => {
        if (localStorage.getItem('auth-token')) {
            fetchCartData();
        }
    }, [fetchCartData]); // Include fetchCartData in the dependency array



    // const login = async () => {
    //     console.log("Login function executed", formData);
    //     let responseData;
    //     await fetch('http://localhost:4000/login', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/form-data',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(formData),
    //     }).then((response) => response.json()).then((data) => responseData = data);

    //     console.log("responseData:", responseData); // Log responseData
    //     if (responseData) {
    //         console.log("responseData.user:", responseData.user); // Log responseData.user
    //         if (responseData.user) {
    //             console.log("responseData.user.user_type:", responseData.user.user_type); // Log responseData.user.user_type
    //         }
    //     }

    //     if (responseData.success) {
    //         localStorage.setItem('auth-token', responseData.token);
    //         alert('Login successful!');
    //         if (responseData.user && (responseData.user.user_type === '676c07e68c1c6815439b181c' || responseData.user.user_type === '676c07f88c1c6815439b181e')) {
    //             window.location.replace("/Admin/addproduct");
    //         }
    //         else {
    //             window.location.replace("/");
    //         }
    //     } else {
    //         alert(responseData.errors);
    //     }
    // };



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

    // const addToWishlist = (itemId) => {
    //     // Update the local state to add the item to the wishlist
    //     const updatedWishlist = { ...wishlistItems, [itemId]: true };
    //     setWishlistItems(updatedWishlist);

    //     // Update the local storage to add the item to the wishlist
    //     localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));

    //     // Send a request to the backend to update the wishlist
    //     if (localStorage.getItem('auth-token')) {
    //         fetch('http://localhost:4000/addtowishlist', {
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'auth-token': localStorage.getItem('auth-token'),
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ itemId })
    //         })
    //             .then((response) => response.json())
    //             .then((data) => console.log(data))
    //             .catch((error) => console.error('Error adding to wishlist:', error));
    //     }
    // };



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
            //alert("Item removed from wishlist");
        }
    };

    // const updateCartState = (updatedCart) => {
    //     setCartItems(updatedCart);
    //     localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    // };

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

    const login = async () => {
        console.log("Login function executed", formData);
        let responseData;
        await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data) => responseData = data);

        console.log("responseData:", responseData); // Log responseData
        if (responseData) {
            console.log("responseData.user:", responseData.user); // Log responseData.user
            if (responseData.user) {
                console.log("responseData.user.user_type:", responseData.user.user_type); // Log responseData.user.user_type
            }
        }

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            alert('Login successful!');
            if (responseData.user &&
                (responseData.user.user_type === '676c07e68c1c6815439b181c' ||
                    responseData.user.user_type === '676c07f88c1c6815439b181e')) {
                window.location.replace("/Admin/addproduct");
            } else {
                window.location.replace("/");
            }
        } else {
            alert(responseData.errors); // Handle blocked state by showing error
        }
    };



    const deleteFromCart = async (itemId, size) => {
        try {
            console.log("Request to delete item from cart:", { itemId, size }); // Log the request data

            const response = await fetch('http://localhost:4000/deletefromcart', {
                method: 'POST',
                headers: {
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ itemId, size }), // Pass both itemId and size
            });

            console.log("Response status:", response.status); // Log the response status
            console.log("Response headers:", response.headers); // Log the response headers

            if (!response.ok) {
                const contentType = response.headers.get('content-type');
                console.log("Response content type:", contentType); // Log the content type

                if (contentType && contentType.includes('application/json')) {
                    const errorData = await response.json();
                    console.log("Error data:", errorData); // Log the error data
                    throw new Error(`Failed to delete item from cart: ${errorData.message}`);
                } else {
                    throw new Error('Failed to delete item from cart: Server returned an unexpected response');
                }
            }

            console.log("Item successfully deleted from cart"); // Log success message
            console.log("Deleted item id:", itemId); // Log the itemId
            console.log("Deleted item size:", size); // Log the size

            // Fetch the updated cart data after successful deletion
            fetchCartData();
        } catch (error) {
            console.error("Error deleting item from cart:", error);
            // Optionally, display an error message to the user
        }
    };



    // const removeFromCart = (itemId) => {
    //     setCartItems((prev) => {
    //         const updatedCart = { ...prev };
    //         updatedCart[itemId] = (updatedCart[itemId] || 0) - 1;
    //         return updatedCart;
    //     });
    //     if (localStorage.getItem('auth-token')) {
    //         fetch('http://localhost:4000/removefromcart', {
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'auth-token': localStorage.getItem('auth-token'),
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ itemId }),
    //         })
    //             .then((response) => {
    //                 if (!response.ok) {
    //                     throw new Error('Failed to remove item from cart');
    //                 }
    //                 return response.json();
    //             })
    //             .then((data) => {
    //                 console.log('Updated Cart after removal:', data);
    //                 setCartItems(data.cartData); // Sync state with backend data
    //             })
    //             .catch((error) => console.error('Error:', error));
    //     }
    // };



    // const addFromCart = (itemId) => {
    //     setCartItems((prev) => {
    //         const updatedCart = { ...prev };
    //         updatedCart[itemId] = (updatedCart[itemId] || 0) + 1;
    //         return updatedCart;
    //     });

    //     if (localStorage.getItem('auth-token')) {
    //         fetch('http://localhost:4000/addfromcart', {
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'auth-token': localStorage.getItem('auth-token'),
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ itemId }),
    //         })
    //             .then((response) => {
    //                 if (!response.ok) {
    //                     throw new Error('Failed to add item to cart');
    //                 }
    //                 return response.json();
    //             })
    //             .then((data) => {
    //                 setCartItems(data.cartData); // Sync state with updated cartData from backend
    //             })
    //             .catch((error) => console.error('Error:', error));
    //     }
    // };

    const removeFromCart = (itemId, size) => {
        console.log("Attempting to remove item from cart:", { itemId, size }); // Log the request data

        setCartItems((prev) => {
            const updatedCart = { ...prev };
            updatedCart[itemId] = (updatedCart[itemId] || 0) - 1;
            return updatedCart;
        });

        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemId, size }), // Pass both itemId and size
            })
                .then((response) => {
                    console.log("Response status:", response.status); // Log the response status
                    console.log("Response headers:", response.headers); // Log the response headers

                    if (!response.ok) {
                        throw new Error('Failed to remove item from cart');
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log('Updated Cart after removal:', data); // Log the updated cart data
                    setCartItems(data.cartData); // Sync state with backend data
                })
                .catch((error) => console.error('Error:', error));
        }
    };



    const addFromCart = async (itemId, size) => {
        console.log("Attempting to add item to cart:", { itemId, size }); // Log the request data

        if (localStorage.getItem('auth-token')) {
            try {
                const response = await fetch('http://localhost:4000/addfromcart', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'auth-token': localStorage.getItem('auth-token'),
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ itemId, size }), // Pass both itemId and size
                });

                console.log("Response status:", response.status); // Log the response status
                console.log("Response headers:", response.headers); // Log the response headers

                if (response.status === 400) {
                    const errorData = await response.json();
                    console.log("Error data:", errorData); // Log the error data
                    alert(errorData.message); // Alert user if stock limit is exceeded
                } else if (response.ok) {
                    const data = await response.json();
                    console.log('Updated Cart after addition:', data); // Log the updated cart data
                    setCartItems(data.cartData); // Sync state with updated cartData from backend only if successful
                } else {
                    throw new Error('Failed to add item to cart');
                }
            } catch (error) {
                console.error('Error:', error);
            }
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

    // const getTotalCartItems = () => {
    //     // The number of unique items is the number of keys in the cartItems object
    //     return Object.keys(cartItems).length;
    // };
    const getTotalCartItems = () => {
        // Check if cartItems is defined and is an object
        if (cartItems && typeof cartItems === 'object') {
            // Return the number of unique keys in the cartItems object
            return Object.keys(cartItems).length;
        }
        // If cartItems is not valid, return 0
        return 0;
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
        login,
        allProduct,
        cartItems,
        addToCart,
        formData,
        fetchCartData,
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




















