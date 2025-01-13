// // // // // import React, { useEffect, useState } from 'react';
// // // // // import './ListProduct.css';
// // // // // import cross_icon from '../Assets/cross_icon.png';

// // // // // const ListProduct = () => {
// // // // //     const [allproducts, setAllProducts] = useState([]);

// // // // //     const fetchInfo = async () => {
// // // // //         await fetch('http://localhost:4000/allproducts')
// // // // //             .then((res) => res.json())
// // // // //             .then((data) => { setAllProducts(data); });
// // // // //     };

// // // // //     useEffect(() => {
// // // // //         fetchInfo();
// // // // //     }, []);

// // // // //     const removeProduct = async (id) => {
// // // // //         const response = await fetch('http://localhost:4000/removeproduct', {
// // // // //             method: 'POST',
// // // // //             headers: {
// // // // //                 Accept: 'application/json',
// // // // //                 'Content-Type': 'application/json',
// // // // //             },
// // // // //             body: JSON.stringify({ id: id }),
// // // // //         });
// // // // //         const result = await response.json();
// // // // //         if (result.success) {
// // // // //             alert('Product removed successfully!');
// // // // //         } else {
// // // // //             alert('Failed to remove product: ' + result.message);
// // // // //         }
// // // // //         await fetchInfo();
// // // // //     };

// // // // //     return (
// // // // //         <div className='list-product'>
// // // // //             <div className="header-line">
// // // // //             <h1>All Product List</h1>
// // // // //             </div>
// // // // //             <div className="listproduct-allproducts">
// // // // //                 {allproducts.map((product) => (
// // // // //                     <div key={product.id} className="product-list"> {/* Moved key prop here */}
// // // // //                         <div className="product">
// // // // //                             <div className="listproduct-format-main listproduct-format">
// // // // //                                 <img src={product.image[0]} alt="" className="listproduct-product-icon" />
// // // // //                                 <div className="details">
// // // // //                                     <p className='title'>Name : {product.name}</p>
// // // // //                                     <p>Old Price : ${product.old_price}</p>
// // // // //                                     <p>New Price : ${product.new_price}</p>
// // // // //                                     <p>Category : {product.category}</p>
// // // // //                                     <p>Seller :  {product.seller}</p>
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                             <div className="image">
// // // // //                                 <img onClick={() => { removeProduct(product.id); }} className='listproduct-remove-icon' src={cross_icon} alt="" />
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 ))}
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default ListProduct;







// // // // // {/* <div className="listproduct-format-main">
// // // // //                 <p>Products</p>
// // // // //                 <p>Title</p>
// // // // //                 <p>Old Price</p>
// // // // //                 <p>New Price</p>
// // // // //                 <p>Category</p>
// // // // //                 <p>Remove</p>
// // // // //             </div> */}




// // // // // import React, { useEffect, useState } from 'react';
// // // // // import './ListProduct.css';
// // // // // import remove_icon from '../Assets/dustbin.png';

// // // // // const ListProduct = () => {
// // // // //     const [allproducts, setAllProducts] = useState([]);

// // // // //     const fetchInfo = async () => {
// // // // //         await fetch('http://localhost:4000/allproducts')
// // // // //             .then((res) => res.json())
// // // // //             .then((data) => {
// // // // //                 //console.log("Fetched Products:", data); 
// // // // //                 setAllProducts(data);
// // // // //             });
// // // // //     };

// // // // //     useEffect(() => {
// // // // //         fetchInfo();
// // // // //     }, []);

// // // // //     const removeProduct = async (id) => {
// // // // //         const response = await fetch('http://localhost:4000/removeproduct', {
// // // // //             method: 'POST',
// // // // //             headers: {
// // // // //                 Accept: 'application/json',
// // // // //                 'Content-Type': 'application/json',
// // // // //             },
// // // // //             body: JSON.stringify({ id: id }),
// // // // //         });
// // // // //         const result = await response.json();
// // // // //         if (result.success) {
// // // // //             alert('Product removed successfully!');
// // // // //         } else {
// // // // //             alert('Failed to remove product: ' + result.message);
// // // // //         }
// // // // //         await fetchInfo();
// // // // //     };

// // // // //     return (
// // // // //         <div className='list-product'>
// // // // //             <div className="header-line">
// // // // //                 <h1>All Product List</h1>
// // // // //             </div>
// // // // //             <div className="listproduct-allproducts">
// // // // //                 {allproducts.map((product) => (
// // // // //                     <div key={product.id} className="product-list">
// // // // //                         <div className="product">
// // // // //                             <div className="listproduct-format-main listproduct-format">
// // // // //                                 <img src={product.image[0]} alt="" className="listproduct-product-icon" />
// // // // //                                 <div className="details">
// // // // //                                     <p>no. {product.id}</p>
// // // // //                                     <p className='title'>Name : {product.name}</p>
// // // // //                                     <p>Old Price : ${product.old_price}</p>
// // // // //                                     <p>New Price : ${product.new_price}</p>
// // // // //                                     <p>Category : {product.category}</p>
// // // // //                                     <p>Added by : {product.added_by}</p>
// // // // //                                     <p>Seller : {product.seller}</p> {/* Ensure this line exists */}
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                             <div>
// // // // //                                 <button onClick={() => toggleBlockProduct(product._id, product.blocked)} className='block-unblock-btn'>
// // // // //                                     {product.blocked ? 'Unblock' : 'Block'}
// // // // //                                 </button>
// // // // //                             </div>
// // // // //                             <div className="image">
// // // // //                                 <img onClick={() => { removeProduct(product.id); }} className='listproduct-remove-icon' src={remove_icon} alt="" />
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 ))}
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default ListProduct;



// // // // import React, { useEffect, useState } from 'react';
// // // // import './ListProduct.css';
// // // // import remove_icon from '../Assets/dustbin.png';

// // // // const ListProduct = () => {
// // // //     const [allproducts, setAllProducts] = useState([]);

// // // //     const fetchInfo = async () => {
// // // //         fetch('http://localhost:4000/allproducts', {
// // // //             method: 'GET',
// // // //             headers: {
// // // //                 Accept: 'application/json',
// // // //                 'auth-token': localStorage.getItem('auth-token'), // Added auth-token here
// // // //                 'Content-Type': 'application/json'
// // // //             },
// // // //         })
// // // //             .then((res) => res.json())
// // // //             .then((data) => {
// // // //                 setAllProducts(data);
// // // //             });
// // // //     };

// // // //     useEffect(() => {
// // // //         fetchInfo();
// // // //     }, []);

// // // //     const removeProduct = async (id) => {
// // // //         const response = await fetch('http://localhost:4000/removeproduct', {
// // // //             method: 'POST',
// // // //             headers: {
// // // //                 Accept: 'application/json',
// // // //                 'Content-Type': 'application/json',
// // // //             },
// // // //             body: JSON.stringify({ id: id }),
// // // //         });
// // // //         const result = await response.json();
// // // //         if (result.success) {
// // // //             alert('Product removed successfully!');
// // // //         } else {
// // // //             alert('Failed to remove product: ' + result.message);
// // // //         }
// // // //         await fetchInfo();
// // // //     };

// // // //     const toggleBlockProduct = async (id, blocked) => {
// // // //         const response = await fetch('http://localhost:4000/toggleblockproduct', {
// // // //             method: 'POST',
// // // //             headers: {
// // // //                 Accept: 'application/json',
// // // //                 'Content-Type': 'application/json',
// // // //                 'auth-token': localStorage.getItem('auth-token'), // Added auth-token here
// // // //             },
// // // //             body: JSON.stringify({ id, blocked: !blocked }),
// // // //         });
// // // //         const result = await response.json();
// // // //         if (result.success) {
// // // //             alert(`Product ${blocked ? 'unblocked' : 'blocked'} successfully!`);
// // // //         } else {
// // // //             alert(`Failed to ${blocked ? 'unblock' : 'block'} product: ${result.message}`);
// // // //         }
// // // //         await fetchInfo();
// // // //     };


// // // //     return (
// // // //         <div className='list-product'>
// // // //             <div className="header-line">
// // // //                 <h1>All Product List</h1>
// // // //             </div>
// // // //             <div className="listproduct-allproducts">
// // // //                 {allproducts.map((product) => (
// // // //                     <div key={product.id} className="product-list">
// // // //                         <div className="product">
// // // //                             <div className="listproduct-format-main listproduct-format">
// // // //                                 <img src={product.image[0]} alt="" className="listproduct-product-icon" />
// // // //                                 <div className="details">
// // // //                                     <p>no. {product.id}</p>
// // // //                                     <p className='title'>Name : {product.name}</p>
// // // //                                     <p>Old Price : ${product.old_price}</p>
// // // //                                     <p>New Price : ${product.new_price}</p>
// // // //                                     <p>Category : {product.category}</p>
// // // //                                     <p>Added by : {product.added_by}</p>
// // // //                                     <p>Seller : {product.seller}</p>
// // // //                                 </div>
// // // //                             </div>
// // // //                             <div className="right">
// // // //                                 <div className='block'>
// // // //                                     <button
// // // //                                         onClick={() => toggleBlockProduct(product._id, product.blocked)}
// // // //                                         className='block-unblock-btn'
// // // //                                         style={{ backgroundColor: product.blocked ? 'red' : '#ccc', color: product.blocked ? 'white' : 'black' }}
// // // //                                     >
// // // //                                         {product.blocked ? 'Unblock' : 'Block'}
// // // //                                     </button>
// // // //                                 </div>
// // // //                                 <div className="image">
// // // //                                     <img onClick={() => { removeProduct(product.id); }} className='listproduct-remove-icon' src={remove_icon} alt="" />
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 ))}
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default ListProduct;

// // // import React, { useEffect, useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import './ListProduct.css';
// // // import remove_icon from '../Assets/dustbin.png';

// // // const ListProduct = () => {
// // //     const [allproducts, setAllProducts] = useState([]);
// // //     const [currentUserType, setCurrentUserType] = useState(null); // To store current user's type
// // //     const navigate = useNavigate();

// // //     const fetchInfo = async () => {
// // //         fetch('http://localhost:4000/allproducts', {
// // //             method: 'GET',
// // //             headers: {
// // //                 Accept: 'application/json',
// // //                 'auth-token': localStorage.getItem('auth-token'), // Added auth-token here
// // //                 'Content-Type': 'application/json'
// // //             },
// // //         })
// // //             .then((res) => res.json())
// // //             .then((data) => {
// // //                 setAllProducts(data);
// // //             });
// // //     };

// // //     useEffect(() => {
// // //         // Fetch current user type
// // //         const authToken = localStorage.getItem('auth-token');
// // //         if (authToken) {
// // //             fetch('http://localhost:4000/getuser', {
// // //                 method: 'GET',
// // //                 headers: {
// // //                     'auth-token': authToken,
// // //                     'Content-Type': 'application/json',
// // //                 },
// // //             })
// // //             .then((res) => res.json())
// // //             .then((data) => {
// // //                 if (data && data.user) {
// // //                     setCurrentUserType(data.user.user_type); // Ensuring user_type is set
// // //                 }
// // //             });
// // //         }

// // //         fetchInfo();
// // //     }, []);

// // //     const removeProduct = async (id) => {
// // //         const response = await fetch('http://localhost:4000/removeproduct', {
// // //             method: 'POST',
// // //             headers: {
// // //                 Accept: 'application/json',
// // //                 'Content-Type': 'application/json',
// // //             },
// // //             body: JSON.stringify({ id: id }),
// // //         });
// // //         const result = await response.json();
// // //         if (result.success) {
// // //             alert('Product removed successfully!');
// // //         } else {
// // //             alert('Failed to remove product: ' + result.message);
// // //         }
// // //         await fetchInfo();
// // //     };

// // //     const toggleBlockProduct = async (id, blocked) => {
// // //         const response = await fetch('http://localhost:4000/toggleblockproduct', {
// // //             method: 'POST',
// // //             headers: {
// // //                 Accept: 'application/json',
// // //                 'Content-Type': 'application/json',
// // //                 'auth-token': localStorage.getItem('auth-token'),
// // //             },
// // //             body: JSON.stringify({ id, blocked: !blocked }),
// // //         });
// // //         const result = await response.json();
// // //         if (result.success) {
// // //             alert(`Product ${blocked ? 'unblocked' : 'blocked'} successfully!`);
// // //         } else {
// // //             alert(`Failed to ${blocked ? 'unblock' : 'block'} product: ${result.message}`);
// // //         }
// // //         await fetchInfo();
// // //     };

// // //     return (
// // //         <div className='list-product'>
// // //             <div className="header-line">
// // //                 <h1>All Product List</h1>
// // //             </div>
// // //             <div className="listproduct-allproducts">
// // //                 {allproducts.map((product) => (
// // //                     <div key={product.id} className="product-list">
// // //                         <div className="product">
// // //                             <div className="listproduct-format-main listproduct-format">
// // //                                 <img
// // //                                     src={product.image[0]}
// // //                                     alt=""
// // //                                     className="listproduct-product-icon"
// // //                                     onClick={() => navigate(`/product/${product.id}`)} // Navigate on click
// // //                                 />
// // //                                 <div className="details">
// // //                                     <p>No. {product.id}</p>
// // //                                     <p className='title'>Name: {product.name}</p>
// // //                                     <p>Old Price: ${product.old_price}</p>
// // //                                     <p>New Price: ${product.new_price}</p>
// // //                                     <p>Category: {product.category}</p>
// // //                                     <p>Added by: {product.added_by}</p>
// // //                                     <p>Seller: {product.seller}</p>
// // //                                 </div>
// // //                             </div>
// // //                             <div className="right">
// // //                                 <div className='block'>
// // //                                     <button
// // //                                         onClick={() => toggleBlockProduct(product._id, product.blocked)}
// // //                                         className='block-unblock-btn'
// // //                                         style={{ 
// // //                                             backgroundColor: product.blocked ? 'red' : '#ccc', 
// // //                                             color: product.blocked ? 'white' : 'black',
// // //                                             cursor: currentUserType !== '676c07e68c1c6815439b181c' ? 'not-allowed' : 'pointer' // Change cursor
// // //                                         }}
// // //                                         disabled={currentUserType !== '676c07e68c1c6815439b181c'} // Disable button for non-admins
// // //                                     >
// // //                                         {product.blocked ? 'Unblock' : 'Block'}
// // //                                     </button>
// // //                                 </div>
// // //                                 <div className="image">
// // //                                     <img
// // //                                         onClick={() => removeProduct(product.id)}
// // //                                         className='listproduct-remove-icon'
// // //                                         src={remove_icon}
// // //                                         alt=""
// // //                                     />
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 ))}
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default ListProduct;

// // import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './ListProduct.css';
// // import remove_icon from '../Assets/dustbin.png';

// // const ListProduct = () => {
// //     const [allproducts, setAllProducts] = useState([]);
// //     const navigate = useNavigate();

// //     // Fetch all products
// //     const fetchInfo = async () => {
// //         try {
// //             const response = await fetch('http://localhost:4000/allproducts', {
// //                 method: 'GET',
// //                 headers: {
// //                     Accept: 'application/json',
// //                     'auth-token': localStorage.getItem('auth-token'), // Added auth-token here
// //                     'Content-Type': 'application/json'
// //                 },
// //             });
// //             if (response.ok) {
// //                 const data = await response.json();
// //                 setAllProducts(data);
// //             } else {
// //                 console.error("Failed to fetch products.");
// //             }
// //         } catch (error) {
// //             console.error("Error fetching products:", error);
// //         }
// //     };

// //     useEffect(() => {
// //         const authToken = localStorage.getItem('auth-token');
// //         if (!authToken) {
// //             alert('Unauthorized: Please login as an admin.');
// //             navigate('/login');
// //             return;
// //         }

// //         // Verify if the user is an admin
// //         const verifyAdmin = async () => {
// //             try {
// //                 const response = await fetch('http://localhost:4000/getuser', {
// //                     method: 'GET',
// //                     headers: {
// //                         'auth-token': authToken,
// //                         'Content-Type': 'application/json',
// //                     },
// //                 });
// //                 if (response.ok) {
// //                     const data = await response.json();
// //                     if (!data || data.user.user_type !== '676c07e68c1c6815439b181c') {
// //                         alert('Unauthorized: Only admins can access this page.');
// //                         navigate('/login');
// //                     } else {
// //                         fetchInfo();
// //                     }
// //                 } else {
// //                     alert('Unauthorized: Please login again.');
// //                     navigate('/login');
// //                 }
// //             } catch (error) {
// //                 console.error('Error verifying admin:', error);
// //                 navigate('/login');
// //             }
// //         };

// //         verifyAdmin();
// //     }, [navigate]);

// //     // Remove product
// //     const removeProduct = async (id) => {
// //         try {
// //             const response = await fetch('http://localhost:4000/removeproduct', {
// //                 method: 'POST',
// //                 headers: {
// //                     Accept: 'application/json',
// //                     'Content-Type': 'application/json',
// //                     'auth-token': localStorage.getItem('auth-token'),
// //                 },
// //                 body: JSON.stringify({ id }),
// //             });
// //             const result = await response.json();
// //             if (result.success) {
// //                 alert('Product removed successfully!');
// //                 fetchInfo();
// //             } else {
// //                 alert('Failed to remove product: ' + result.message);
// //             }
// //         } catch (error) {
// //             console.error('Error removing product:', error);
// //         }
// //     };

// //     // Toggle block/unblock product
// //     const toggleBlockProduct = async (id, blocked) => {
// //         try {
// //             const response = await fetch('http://localhost:4000/toggleblockproduct', {
// //                 method: 'POST',
// //                 headers: {
// //                     Accept: 'application/json',
// //                     'Content-Type': 'application/json',
// //                     'auth-token': localStorage.getItem('auth-token'),
// //                 },
// //                 body: JSON.stringify({ id, blocked: !blocked }),
// //             });
// //             const result = await response.json();
// //             if (result.success) {
// //                 alert(`Product ${blocked ? 'unblocked' : 'blocked'} successfully!`);
// //                 fetchInfo();
// //             } else {
// //                 alert(`Failed to ${blocked ? 'unblock' : 'block'} product: ${result.message}`);
// //             }
// //         } catch (error) {
// //             console.error('Error toggling block status:', error);
// //         }
// //     };

// //     return (
// //         <div className='list-product'>
// //             <div className="header-line">
// //                 <h1>All Product List</h1>
// //             </div>
// //             <div className="listproduct-allproducts">
// //                 {allproducts.map((product) => (
// //                     <div key={product._id} className="product-list">
// //                         <div className="product">
// //                             <div className="listproduct-format-main listproduct-format">
// //                                 <img
// //                                     src={product.image[0]}
// //                                     alt=""
// //                                     className="listproduct-product-icon"
// //                                     onClick={() => navigate(`/product/${product.id}`)} // Navigate on click
// //                                 />
// //                                 <div className="details">
// //                                     <p>No. {product.id}</p>
// //                                     <p>nos. {product.available}</p> 
// //                                     <p className='title'>Name: {product.name}</p>
// //                                     <p>Old Price: ${product.old_price}</p>
// //                                     <p>New Price: ${product.new_price}</p>
// //                                     <p>Category: {product.category}</p>
// //                                     <p>Added by: {product.added_by}</p>
// //                                     <p>Seller: {product.seller}</p>
// //                                 </div>
// //                             </div>
// //                             <div className="right">
// //                                 <div className='block'>
// //                                     <button
// //                                         onClick={() => toggleBlockProduct(product._id, product.blocked)}
// //                                         className='block-unblock-btn'
// //                                         style={{ 
// //                                             backgroundColor: product.blocked ? 'red' : '#ccc', 
// //                                             color: product.blocked ? 'white' : 'black'
// //                                         }}
// //                                     >
// //                                         {product.blocked ? 'Unblock' : 'Block'}
// //                                     </button>
// //                                 </div>
// //                                 <div className="image">
// //                                     <img
// //                                         onClick={() => removeProduct(product._id)}
// //                                         className='listproduct-remove-icon'
// //                                         src={remove_icon}
// //                                         alt=""
// //                                     />
// //                                 </div>
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
// import { useNavigate } from 'react-router-dom';
// import './ListProduct.css';
// import remove_icon from '../Assets/dustbin.png';

// const ListProduct = () => {
//     const [allproducts, setAllProducts] = useState([]);
//     const [orderHistory, setOrderHistory] = useState([]);
//     const [isOrderHistoryVisible, setIsOrderHistoryVisible] = useState(false);
//     const navigate = useNavigate();

//     // Fetch all products
//     const fetchInfo = async () => {
//         try {
//             const response = await fetch('http://localhost:4000/allproducts', {
//                 method: 'GET',
//                 headers: {
//                     Accept: 'application/json',
//                     'auth-token': localStorage.getItem('auth-token'), // Added auth-token here
//                     'Content-Type': 'application/json'
//                 },
//             });
//             if (response.ok) {
//                 const data = await response.json();
//                 setAllProducts(data);
//             } else {
//                 console.error("Failed to fetch products.");
//             }
//         } catch (error) {
//             console.error("Error fetching products:", error);
//         }
//     };

//     useEffect(() => {
//         const authToken = localStorage.getItem('auth-token');
//         if (!authToken) {
//             alert('Unauthorized: Please login as an admin.');
//             navigate('/login');
//             return;
//         }

//         // Verify if the user is an admin
//         const verifyAdmin = async () => {
//             try {
//                 const response = await fetch('http://localhost:4000/getuser', {
//                     method: 'GET',
//                     headers: {
//                         'auth-token': authToken,
//                         'Content-Type': 'application/json',
//                     },
//                 });
//                 if (response.ok) {
//                     const data = await response.json();
//                     if (!data || data.user.user_type !== '676c07e68c1c6815439b181c') {
//                         alert('Unauthorized: Only admins can access this page.');
//                         navigate('/login');
//                     } else {
//                         fetchInfo();
//                     }
//                 } else {
//                     alert('Unauthorized: Please login again.');
//                     navigate('/login');
//                 }
//             } catch (error) {
//                 console.error('Error verifying admin:', error);
//                 navigate('/login');
//             }
//         };

//         verifyAdmin();
//     }, [navigate]);

//     // Fetch order history for the product
//     const fetchOrderHistory = async (productId) => {
//         try {
//             const response = await fetch(`http://localhost:4000/orderhistory/${productId}`, {
//                 method: 'GET',
//                 headers: {
//                     Accept: 'application/json',
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json',
//                 },
//             });
//             const data = await response.json();
//             if (response.ok) {
//                 setOrderHistory(data);
//                 setIsOrderHistoryVisible(true);
//             } else {
//                 alert('No order history found for this product.');
//             }
//         } catch (error) {
//             console.error('Error fetching order history:', error);
//         }
//     };

//     // Remove product
//     const removeProduct = async (id) => {
//         try {
//             const response = await fetch('http://localhost:4000/removeproduct', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                     'auth-token': localStorage.getItem('auth-token'),
//                 },
//                 body: JSON.stringify({ id }),
//             });
//             const result = await response.json();
//             if (result.success) {
//                 alert('Product removed successfully!');
//                 fetchInfo();
//             } else {
//                 alert('Failed to remove product: ' + result.message);
//             }
//         } catch (error) {
//             console.error('Error removing product:', error);
//         }
//     };

//     // Toggle block/unblock product
//     const toggleBlockProduct = async (id, blocked) => {
//         try {
//             const response = await fetch('http://localhost:4000/toggleblockproduct', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                     'auth-token': localStorage.getItem('auth-token'),
//                 },
//                 body: JSON.stringify({ id, blocked: !blocked }),
//             });
//             const result = await response.json();
//             if (result.success) {
//                 alert(`Product ${blocked ? 'unblocked' : 'blocked'} successfully!`);
//                 fetchInfo();
//             } else {
//                 alert(`Failed to ${blocked ? 'unblock' : 'block'} product: ${result.message}`);
//             }
//         } catch (error) {
//             console.error('Error toggling block status:', error);
//         }
//     };

//     return (
//         <div className='list-product'>
//             <div className="header-line">
//                 <h1>All Product List</h1>
//             </div>
//             <div className="listproduct-allproducts">
//                 {allproducts.map((product) => (
//                     <div key={product._id} className="product-list">
//                         <div className="product">
//                             <div className="listproduct-format-main listproduct-format">
//                                 <img
//                                     src={product.image[0]}
//                                     alt=""
//                                     className="listproduct-product-icon"
//                                     onClick={() => fetchOrderHistory(product._id)} // Fetch order history on click
//                                 />
//                                 <div className="details">
//                                     <p>No. {product.id}</p>
//                                     <p>nos. {product.available}</p>
//                                     <p className='title'>Name: {product.name}</p>
//                                     <p>Old Price: ${product.old_price}</p>
//                                     <p>New Price: ${product.new_price}</p>
//                                     <p>Category: {product.category}</p>
//                                     <p>Added by: {product.added_by}</p>
//                                     <p>Seller: {product.seller}</p>
//                                 </div>
//                             </div>
//                             <div className="right">
//                                 <div className='block'>
//                                     <button
//                                         onClick={() => toggleBlockProduct(product._id, product.blocked)}
//                                         className='block-unblock-btn'
//                                         style={{
//                                             backgroundColor: product.blocked ? 'red' : '#ccc',
//                                             color: product.blocked ? 'white' : 'black'
//                                         }}
//                                     >
//                                         {product.blocked ? 'Unblock' : 'Block'}
//                                     </button>
//                                 </div>
//                                 <div className="image">
//                                     <img
//                                         onClick={() => removeProduct(product._id)}
//                                         className='listproduct-remove-icon'
//                                         src={remove_icon}
//                                         alt=""
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Order History Modal/Display */}
//             {isOrderHistoryVisible && (
//                 <div className="order-history-modal">
//                     <h2>Order History</h2>
//                     <button onClick={() => setIsOrderHistoryVisible(false)}>Close</button>
//                     <ul>
//                         {orderHistory.map((order) => (
//                             <li key={order._id}>
//                                 <p>Quantity: {order.quantity}</p>
//                                 <p>Total Price: ${order.totalPrice}</p>
//                                 <p>Shipped Date: {new Date(order.shipped).toLocaleDateString()}</p>
//                                 <p>Billing Info: {order.billingInfo.fullname}, {order.billingInfo.email}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
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
    const [orderHistories, setOrderHistories] = useState({}); // Object to store order histories per product
    const navigate = useNavigate();

    // Fetch all products
    const fetchInfo = async () => {
        try {
            const response = await fetch('http://localhost:4000/allproducts', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'auth-token': localStorage.getItem('auth-token'), // Added auth-token here
                    'Content-Type': 'application/json'
                },
            });
            if (response.ok) {
                const data = await response.json();
                setAllProducts(data);
            } else {
                console.error("Failed to fetch products.");
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const fetchDetails = async (currentUserId, currentUserType) => {
        try {
            const response = await fetch('http://localhost:4000/allproducts', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json'
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("products in list :", data);

                // Filter products based on the user type
                const filteredProducts = data.filter(product =>
                    currentUserType === 'Admin' || // Admin can see all products
                    (currentUserType === 'Seller' && product.added_by === currentUserId) // Sellers can only see their own products
                );                                

                console.log({ currentUserId, currentUserType, allProducts: data });
                console.log("Filtered Products:", filteredProducts);
                console.log("Blocked Products:", data.filter(product => product.blocked));
                console.log("Current User ID:", currentUserId);
                console.log("Current User Type:", currentUserType);
                


                const failingProducts = data.filter(product =>
                    !(currentUserType === '676c07e68c1c6815439b181c' ||
                        product.added_by === currentUserId ||
                        !product.added_by)
                );
                

                console.log("Failing Products:", failingProducts);

                setAllProducts(filteredProducts); // Set the filtered products
            } else {
                console.error("Failed to fetch products.");
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };


    useEffect(() => {
        const authToken = localStorage.getItem('auth-token');
        if (!authToken) {
            alert('Unauthorized: Please login.');
            navigate('/login');
            return;
        }

        // Verify if the user is logged in and fetch their type
        const verifyUser = async () => {
            try {
                const response = await fetch('http://localhost:4000/getuser', {
                    method: 'GET',
                    headers: {
                        'auth-token': authToken,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data); // Check if the user is fetched correctly

                    if (!data || !data.user || !data.user.user_type) {
                        alert('Unauthorized: Please login again.');
                        navigate('/login');
                        return;
                    }

                    const currentUserId = data.user._id; // Get the current user ID
                    const currentUserType = data.user.user_type.user_type; // Get the current user type (Seller, Admin, etc.)

                    if (currentUserType === 'Admin' || currentUserType === 'Seller') {
                        fetchDetails(currentUserId, currentUserType); // Fetch products based on the user type
                    } else {
                        alert('Unauthorized: Buyers cannot view products.');
                        navigate('/login');
                    }
                } else {
                    alert('Unauthorized: Please login again.');
                    navigate('/login');
                }
            } catch (error) {
                console.error('Error verifying user:', error);
                navigate('/login');
            }
        };

        verifyUser();
    }, [navigate]);

    // Fetch order history for the product
    const fetchOrderHistory = async (productId) => {
        // If the order history for this product is already displayed, remove it
        if (orderHistories[productId]) {
            setOrderHistories((prev) => {
                const updated = { ...prev };
                delete updated[productId]; // Remove the specific product's order history
                return updated;
            });
            return; // Exit early to toggle visibility
        }

        // Otherwise, fetch and display the order history
        try {
            const response = await fetch(`http://localhost:4000/orderhistory/${productId}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const data = await response.json();
                setOrderHistories((prev) => ({
                    ...prev,
                    [productId]: data, // Add the fetched order history for this product
                }));
            } else {
                alert('No order history found for this product.');
            }
        } catch (error) {
            console.error('Error fetching order history:', error);
        }
    };


    // Remove product
    const removeProduct = async (id) => {
        try {
            const response = await fetch('http://localhost:4000/removeproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                },
                body: JSON.stringify({ id }),
            });
            const result = await response.json();
            if (result.success) {
                alert('Product removed successfully!');
                fetchInfo();
            } else {
                alert('Failed to remove product: ' + result.message);
            }
        } catch (error) {
            console.error('Error removing product:', error);
        }
    };

    // Toggle block/unblock product
    const toggleBlockProduct = async (id, blocked) => {
        try {
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
                fetchInfo();
            } else {
                alert(`Failed to ${blocked ? 'unblock' : 'block'} product: ${result.message}`);
            }
        } catch (error) {
            console.error('Error toggling block status:', error);
        }
    };

    return (
        <div className='list-product'>
            <div className="header-line">
                <h1>All Product List</h1>
            </div>
            <div className="listproduct-allproducts">
                {allproducts.map((product) => (
                    <div key={product._id} className="product-list">
                        <div className="product">
                            <div className="listproduct-format-main listproduct-format">
                                <img
                                    src={product.image[0]}
                                    alt=""
                                    className="listproduct-product-icon"
                                    onClick={() => navigate(`/product/${product.id}`)}
                                />
                                <div className="details">
                                    <p>No. {product.id}</p>
                                    <p>nos. {product.available}</p>
                                    <p className='title'>Name: {product.name}</p>
                                    <p>Old Price: ${product.old_price}</p>
                                    <p>New Price: ${product.new_price}</p>
                                    <p>Category: {product.category}</p>
                                    {/* <p>Added by: {product.added_by}</p> */}
                                    <p>Seller: {product.seller}</p>
                                    <div className="price-details">
                                        <h4>Prices by Size:</h4>
                                        <ul>
                                            {Object.entries(product.price || {}).map(([size, price]) => (
                                                <li key={size}>
                                                    <strong>{size}:</strong> ${price || 'N/A'}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button id='order-button' onClick={() => fetchOrderHistory(product._id)}>Order History</button>
                                </div>
                            </div>
                            <div className="right">
                                <div className='block'>
                                    <button
                                        onClick={() => toggleBlockProduct(product._id, product.blocked)}
                                        className='block-unblock-btn'
                                        style={{
                                            backgroundColor: product.blocked ? 'red' : '#ccc',
                                            color: product.blocked ? 'white' : 'black'
                                        }}
                                    >
                                        {product.blocked ? 'Unblock' : 'Block'}
                                    </button>
                                </div>
                                <div className="image">
                                    <img
                                        onClick={() => removeProduct(product._id)}
                                        className='listproduct-remove-icon'
                                        src={remove_icon}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Show Order History below the product */}
                        {orderHistories[product._id] && (
                            <div className="order-history">
                                <h3>Order History for {product.name}</h3>
                                <ul id='order-details'>
                                    {orderHistories[product._id].map((order) => (
                                        <li key={order._id}>
                                            <p>Quantity: {order.quantity}</p>
                                            <p>Total Price: ${order.totalPrice}</p>
                                            <p>Shipped Date: {new Date(order.shipped).toLocaleDateString()}</p>
                                            <p>Full Name : {order.billingInfo.fullname}</p>
                                            <p>email : {order.billingInfo.email}</p>
                                            <p>Phone :{order.billingInfo.phone}</p>
                                            <p>City :{order.billingInfo.city}</p>
                                            <p>State :{order.billingInfo.state}</p>
                                            <p>Postal Code :{order.billingInfo.postal}</p>
                                            <p>Country :{order.billingInfo.country}</p>
                                            <h4>User orderd : {order.user.name}</h4>
                                            <h4>email: {order.user.email}</h4>
                                            <h4>phone:{order.user.phone}</h4>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListProduct;
