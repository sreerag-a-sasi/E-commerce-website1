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
//         fetch('http://localhost:4000/allproducts')
//             .then((response) => response.json())
//             .then((data) => setAllProduct(data));

//         if (localStorage.getItem('auth-token')) {
//             fetch('http://localhost:4000/getcart', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({})
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
//                     Accept: 'application/json',
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
//                     Accept: 'application/json',
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ "itemId": itemId })
//             })
//             .then((response) => response.json())
//             .then((data) => console.log(data));
//         }
//     };
//     const addFromCart = (itemId) => {
//         setCartItems((prev) => {
//             const updatedCart = { ...prev };
//             if (updatedCart[itemId]) {
//                 updatedCart[itemId].quantity += 1;
//             } else {
//                 updatedCart[itemId] = { quantity: 1, size: '' }; // Default size; update as needed
//             }
//             localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//             return updatedCart;
//         });
    
//         if (localStorage.getItem('auth-token')) {
//             fetch('http://localhost:4000/addfromcart', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ itemId: itemId }),
//             })
//             .then((response) => response.json())
//             .then((data) => console.log(data));
//         }
//     };
    

//     const deleteFromCart = (itemId) => {
//         setCartItems((prev) => {
//             const updatedCart = { ...prev };
//             delete updatedCart[itemId]; // Remove the item entirely
//             localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//             return updatedCart;
//         });
    
//         if (localStorage.getItem('auth-token')) {
//             fetch('http://localhost:4000/deletefromcart', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
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

//     const contextValue = {
//         getTotalCartItems,
//         getTotalCartAmount,
//         allProduct,
//         cartItems,
//         addToCart,
//         removeFromCart,
//         deleteFromCart,
//         addFromCart,
//     };

//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// };

// export default ShopContextProvider;

   


import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext("");

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 301; index++) {
        cart[index] = { quantity: 0, size: '' }; // Initialize with quantity and size
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [allProduct, setAllProduct] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        fetch('http://localhost:4000/allproducts')
            .then((response) => response.json())
            .then((data) => setAllProduct(data));

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
            .then((data) => setCartItems(data));
        }
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
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
            alert("item added to cart")
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
            alert("item removed")
        }
    };

    const addFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId].quantity >=1) {
                updatedCart[itemId].quantity += 1;
            }
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            return updatedCart;
        });

        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/addfromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemId }),
            })
            .then((response) => response.json())
            .then((data) => console.log(data));
            alert("item added")
            window.location.reload();
        }
    };

    const deleteFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            delete updatedCart[itemId]; // Remove the item entirely
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            return updatedCart;
        });

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
            .then((data) => console.log(data));
            alert("item removed from cart")
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allProduct.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
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

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        allProduct,
        cartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        addFromCart,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
