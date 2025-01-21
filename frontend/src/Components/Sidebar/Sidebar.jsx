// import React from 'react';
// import './Sidebar.css';
// import { Link } from 'react-router-dom';
// import add_product_icon from '../Assets/Product_Cart.svg';
// import list_product_icon from '../Assets/Product_list_icon.svg';
// import users_icon from '../Assets/group.png';

// const Sidebar = () => {
//     return (
//         <div className='sidebar'>
//             <Link to={'/Admin/addproduct'} style={{ textDecoration: "none" }}>
//                 <div className="sidebar-item">
//                     <img src={add_product_icon} alt="Add Product" />
//                     <p>Add Product</p>
//                 </div>
//             </Link>
//             <Link to={'/Admin/listproduct'} style={{ textDecoration: "none" }}>
//                 <div className="sidebar-item">
//                     <img src={list_product_icon} alt="Product List" />
//                     <p>Product List</p>
//                 </div>
//             </Link>
//             <Link to={'/Admin/userlist'} style={{ textDecoration: "none" }}>
//                 <div className="sidebar-item">
//                     <img className='userlist-img' src={users_icon} alt="User List" />
//                     <p>User List</p>
//                 </div>
//             </Link>
//         </div>
//     );
// };

// export default Sidebar;



import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import add_product_icon from '../Assets/Product_Cart.svg';
import list_product_icon from '../Assets/Product_list_icon.svg';
import users_icon from '../Assets/group.png';

const Sidebar = () => {
    const [userType, setUserType] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const authToken = localStorage.getItem('auth-token');

            if (authToken) {
                try {
                    const response = await fetch('http://localhost:4000/user', {
                        method: 'GET',
                        headers: {
                            'auth-token': authToken,
                            'Content-Type': 'application/json',
                        },
                    });
                    console.log("Response headers:", response.headers); // Log response headers

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    console.log("Response from backend:", data);

                    if (data && data.user && data.user.user_type) {
                        setUserType(data.user.user_type); // Set user type
                        //console.log("User type:", data.user.user_type);
                    } else {
                        console.error('User data fetch unsuccessful: No user type found');
                    }
                } catch (error) {
                    console.error('Fetch error:', error);
                }
            }
        };
        fetchUserData();
    }, []);

    //console.log("Current userType in Sidebar:", userType); // Log userType

    return (
        <div className='sidebar'>
            <Link to={'/Admin/addproduct'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={add_product_icon} alt="Add Product" />
                    <p>Add Product</p>
                </div>
            </Link>
            <Link to={'/Admin/listproduct'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={list_product_icon} alt="Product List" />
                    <p>Product List</p>
                </div>
            </Link>
            <Link to={'/Admin/neworders'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={list_product_icon} alt="order List" />
                    <p>New Orders</p>
                </div>
            </Link>
            {userType === '676c07e68c1c6815439b181c' && (
                <Link to={'/Admin/userlist'} style={{ textDecoration: "none" }}>
                    <div className="sidebar-item">
                        <img className='userlist-img' src={users_icon} alt="User List" />
                        <p>User List</p>
                    </div>
                </Link>
            )}
        </div>
    );
};

export default Sidebar;

