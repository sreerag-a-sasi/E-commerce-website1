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

//         if (localStorage.getItem('auth-token')) {
//             fetch('http://localhost:4000/getcart', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json', // Correct content type
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({}) // Use an empty object for the body if necessary
//             })
//             .then((response) => response.json())
//             .then((data) => setCartItems(data));
//         }
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

//     const getTotalCartItems = () => {
//         let totalItem = 0;
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 totalItem += cartItems[item];
//             }
//         }
//         return totalItem;
//     };

//     const contextValue = { getTotalCartItems, getTotalCartAmount, allProduct, cartItems, addToCart, removeFromCart };

//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// };

// export default ShopContextProvider;




import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [allProduct, setAllProduct] = useState([]);
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : {};
    });

    useEffect(() => {
        // Fetch all products
        fetch('http://localhost:4000/allproducts')
            .then((response) => response.json())
            .then((data) => setAllProduct(data))
            .catch((error) => console.error('Error fetching products:', error));

        // Fetch cart items if the user is authenticated
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
                .then((data) => setCartItems(data))
                .catch((error) => console.error('Error fetching cart:', error));
        }
    }, []);

    const updateCartState = (updatedCart) => {
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

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


    const deleteFromCart = (itemId) => {
        const updatedCart = { ...cartItems };
        delete updatedCart[itemId];
        updateCartState(updatedCart);

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
    

// const getTotalCartItems = () => {
//     let totalItem = 0;
//     for (const item in cartItems) {
//         if (cartItems[item] > 0) {
//             totalItem += cartItems[item];
//         }
//     }
//     return totalItem;
// };
    
const getTotalCartItems= () => {
    // The number of unique items is the number of keys in the cartItems object
    return Object.keys(cartItems).filter(itemId => cartItems[itemId] > 0).length;
};
// console.log(getTotalCartItems());  


    const contextValue = {
        allProduct,
        cartItems,
        addToCart,
        addFromCart,
        removeFromCart,
        deleteFromCart,
        getTotalCartAmount,
        getTotalCartItems,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
