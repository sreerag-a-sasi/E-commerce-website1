// // import React, { useEffect, useState } from 'react';
// // import './ListProduct.css';
// // import cross_icon from '../Assets/cross_icon.png';

// // const ListProduct = () => {
// //     const [allproducts, setAllProducts] = useState([]);

// //     const fetchInfo = async () => {
// //         await fetch('http://localhost:4000/allproducts')
// //             .then((res) => res.json())
// //             .then((data) => { setAllProducts(data); });
// //     };

// //     useEffect(() => {
// //         fetchInfo();
// //     }, []);

// //     const removeProduct = async (id) => {
// //         const response = await fetch('http://localhost:4000/removeproduct', {
// //             method: 'POST',
// //             headers: {
// //                 Accept: 'application/json',
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify({ id: id }),
// //         });
// //         const result = await response.json();
// //         if (result.success) {
// //             alert('Product removed successfully!');
// //         } else {
// //             alert('Failed to remove product: ' + result.message);
// //         }
// //         await fetchInfo();
// //     };

// //     return (
// //         <div className='list-product'>
// //             <div className="header-line">
// //             <h1>All Product List</h1>
// //             </div>
// //             <div className="listproduct-allproducts">
// //                 {allproducts.map((product) => (
// //                     <div key={product.id} className="product-list"> {/* Moved key prop here */}
// //                         <div className="product">
// //                             <div className="listproduct-format-main listproduct-format">
// //                                 <img src={product.image[0]} alt="" className="listproduct-product-icon" />
// //                                 <div className="details">
// //                                     <p className='title'>Name : {product.name}</p>
// //                                     <p>Old Price : ${product.old_price}</p>
// //                                     <p>New Price : ${product.new_price}</p>
// //                                     <p>Category : {product.category}</p>
// //                                     <p>Seller :  {product.seller}</p>
// //                                 </div>
// //                             </div>
// //                             <div className="image">
// //                                 <img onClick={() => { removeProduct(product.id); }} className='listproduct-remove-icon' src={cross_icon} alt="" />
// //                             </div>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default ListProduct;







// // {/* <div className="listproduct-format-main">
// //                 <p>Products</p>
// //                 <p>Title</p>
// //                 <p>Old Price</p>
// //                 <p>New Price</p>
// //                 <p>Category</p>
// //                 <p>Remove</p>
// //             </div> */}




// // import React, { useEffect, useState } from 'react';
// // import './ListProduct.css';
// // import remove_icon from '../Assets/dustbin.png';

// // const ListProduct = () => {
// //     const [allproducts, setAllProducts] = useState([]);

// //     const fetchInfo = async () => {
// //         await fetch('http://localhost:4000/allproducts')
// //             .then((res) => res.json())
// //             .then((data) => {
// //                 //console.log("Fetched Products:", data); 
// //                 setAllProducts(data);
// //             });
// //     };

// //     useEffect(() => {
// //         fetchInfo();
// //     }, []);

// //     const removeProduct = async (id) => {
// //         const response = await fetch('http://localhost:4000/removeproduct', {
// //             method: 'POST',
// //             headers: {
// //                 Accept: 'application/json',
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify({ id: id }),
// //         });
// //         const result = await response.json();
// //         if (result.success) {
// //             alert('Product removed successfully!');
// //         } else {
// //             alert('Failed to remove product: ' + result.message);
// //         }
// //         await fetchInfo();
// //     };

// //     return (
// //         <div className='list-product'>
// //             <div className="header-line">
// //                 <h1>All Product List</h1>
// //             </div>
// //             <div className="listproduct-allproducts">
// //                 {allproducts.map((product) => (
// //                     <div key={product.id} className="product-list">
// //                         <div className="product">
// //                             <div className="listproduct-format-main listproduct-format">
// //                                 <img src={product.image[0]} alt="" className="listproduct-product-icon" />
// //                                 <div className="details">
// //                                     <p>no. {product.id}</p>
// //                                     <p className='title'>Name : {product.name}</p>
// //                                     <p>Old Price : ${product.old_price}</p>
// //                                     <p>New Price : ${product.new_price}</p>
// //                                     <p>Category : {product.category}</p>
// //                                     <p>Added by : {product.added_by}</p>
// //                                     <p>Seller : {product.seller}</p> {/* Ensure this line exists */}
// //                                 </div>
// //                             </div>
// //                             <div>
// //                                 <button onClick={() => toggleBlockProduct(product._id, product.blocked)} className='block-unblock-btn'>
// //                                     {product.blocked ? 'Unblock' : 'Block'}
// //                                 </button>
// //                             </div>
// //                             <div className="image">
// //                                 <img onClick={() => { removeProduct(product.id); }} className='listproduct-remove-icon' src={remove_icon} alt="" />
// //                             </div>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default ListProduct;



// import React, { useEffect, useState } from 'react';
// import './ListProduct.css';
// import remove_icon from '../Assets/dustbin.png';

// const ListProduct = () => {
//     const [allproducts, setAllProducts] = useState([]);

//     const fetchInfo = async () => {
//         fetch('http://localhost:4000/allproducts', {
//             method: 'GET',
//             headers: {
//                 Accept: 'application/json',
//                 'auth-token': localStorage.getItem('auth-token'), // Added auth-token here
//                 'Content-Type': 'application/json'
//             },
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 setAllProducts(data);
//             });
//     };

//     useEffect(() => {
//         fetchInfo();
//     }, []);

//     const removeProduct = async (id) => {
//         const response = await fetch('http://localhost:4000/removeproduct', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ id: id }),
//         });
//         const result = await response.json();
//         if (result.success) {
//             alert('Product removed successfully!');
//         } else {
//             alert('Failed to remove product: ' + result.message);
//         }
//         await fetchInfo();
//     };

//     const toggleBlockProduct = async (id, blocked) => {
//         const response = await fetch('http://localhost:4000/toggleblockproduct', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'auth-token': localStorage.getItem('auth-token'), // Added auth-token here
//             },
//             body: JSON.stringify({ id, blocked: !blocked }),
//         });
//         const result = await response.json();
//         if (result.success) {
//             alert(`Product ${blocked ? 'unblocked' : 'blocked'} successfully!`);
//         } else {
//             alert(`Failed to ${blocked ? 'unblock' : 'block'} product: ${result.message}`);
//         }
//         await fetchInfo();
//     };
    

//     return (
//         <div className='list-product'>
//             <div className="header-line">
//                 <h1>All Product List</h1>
//             </div>
//             <div className="listproduct-allproducts">
//                 {allproducts.map((product) => (
//                     <div key={product.id} className="product-list">
//                         <div className="product">
//                             <div className="listproduct-format-main listproduct-format">
//                                 <img src={product.image[0]} alt="" className="listproduct-product-icon" />
//                                 <div className="details">
//                                     <p>no. {product.id}</p>
//                                     <p className='title'>Name : {product.name}</p>
//                                     <p>Old Price : ${product.old_price}</p>
//                                     <p>New Price : ${product.new_price}</p>
//                                     <p>Category : {product.category}</p>
//                                     <p>Added by : {product.added_by}</p>
//                                     <p>Seller : {product.seller}</p>
//                                 </div>
//                             </div>
//                             <div className="right">
//                                 <div className='block'>
//                                     <button
//                                         onClick={() => toggleBlockProduct(product._id, product.blocked)}
//                                         className='block-unblock-btn'
//                                         style={{ backgroundColor: product.blocked ? 'red' : '#ccc', color: product.blocked ? 'white' : 'black' }}
//                                     >
//                                         {product.blocked ? 'Unblock' : 'Block'}
//                                     </button>
//                                 </div>
//                                 <div className="image">
//                                     <img onClick={() => { removeProduct(product.id); }} className='listproduct-remove-icon' src={remove_icon} alt="" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ListProduct;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListProduct.css';
import remove_icon from '../Assets/dustbin.png';

const ListProduct = () => {
    const [allproducts, setAllProducts] = useState([]);
    const [currentUserType, setCurrentUserType] = useState(null); // To store current user's type
    const navigate = useNavigate();

    const fetchInfo = async () => {
        fetch('http://localhost:4000/allproducts', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'auth-token': localStorage.getItem('auth-token'), // Added auth-token here
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
            });
    };

    useEffect(() => {
        // Fetch current user type
        const authToken = localStorage.getItem('auth-token');
        if (authToken) {
            fetch('http://localhost:4000/getuser', {
                method: 'GET',
                headers: {
                    'auth-token': authToken,
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => res.json())
            .then((data) => {
                if (data && data.user) {
                    setCurrentUserType(data.user.user_type); // Ensuring user_type is set
                }
            });
        }

        fetchInfo();
    }, []);

    const removeProduct = async (id) => {
        const response = await fetch('http://localhost:4000/removeproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id }),
        });
        const result = await response.json();
        if (result.success) {
            alert('Product removed successfully!');
        } else {
            alert('Failed to remove product: ' + result.message);
        }
        await fetchInfo();
    };

    const toggleBlockProduct = async (id, blocked) => {
        const response = await fetch('http://localhost:4000/toggleblockproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-token'),
            },
            body: JSON.stringify({ id, blocked: !blocked }),
        });
        const result = await response.json();
        if (result.success) {
            alert(`Product ${blocked ? 'unblocked' : 'blocked'} successfully!`);
        } else {
            alert(`Failed to ${blocked ? 'unblock' : 'block'} product: ${result.message}`);
        }
        await fetchInfo();
    };

    return (
        <div className='list-product'>
            <div className="header-line">
                <h1>All Product List</h1>
            </div>
            <div className="listproduct-allproducts">
                {allproducts.map((product) => (
                    <div key={product.id} className="product-list">
                        <div className="product">
                            <div className="listproduct-format-main listproduct-format">
                                <img
                                    src={product.image[0]}
                                    alt=""
                                    className="listproduct-product-icon"
                                    onClick={() => navigate(`/product/${product.id}`)} // Navigate on click
                                />
                                <div className="details">
                                    <p>No. {product.id}</p>
                                    <p className='title'>Name: {product.name}</p>
                                    <p>Old Price: ${product.old_price}</p>
                                    <p>New Price: ${product.new_price}</p>
                                    <p>Category: {product.category}</p>
                                    <p>Added by: {product.added_by}</p>
                                    <p>Seller: {product.seller}</p>
                                </div>
                            </div>
                            <div className="right">
                                <div className='block'>
                                    <button
                                        onClick={() => toggleBlockProduct(product._id, product.blocked)}
                                        className='block-unblock-btn'
                                        style={{ 
                                            backgroundColor: product.blocked ? 'red' : '#ccc', 
                                            color: product.blocked ? 'white' : 'black',
                                            cursor: currentUserType !== '676c07e68c1c6815439b181c' ? 'not-allowed' : 'pointer' // Change cursor
                                        }}
                                        disabled={currentUserType !== '676c07e68c1c6815439b181c'} // Disable button for non-admins
                                    >
                                        {product.blocked ? 'Unblock' : 'Block'}
                                    </button>
                                </div>
                                <div className="image">
                                    <img
                                        onClick={() => removeProduct(product.id)}
                                        className='listproduct-remove-icon'
                                        src={remove_icon}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListProduct;
