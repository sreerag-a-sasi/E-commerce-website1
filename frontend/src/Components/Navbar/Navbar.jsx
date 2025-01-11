// import React, { useState, useEffect, useContext, useRef } from "react";
// import './Navbar.css';
// import logo from '../Assets/logo.png';
// import cart_icon from '../Assets/cart_icon.png';
// import { Link } from "react-router-dom";
// import { ShopContext } from "../../Context/ShopContext";
// import nav_dropdown from '../Assets/nav_dropdown.png';
// import profileimage from '../Assets/profileimage.png';

// const Navbar = () => {
//     const [menu, setMenu] = useState("shop");
//     const { getTotalCartItems } = useContext(ShopContext);
//     const menuRef = useRef();
//     const [user, setUser] = useState(null);
//     const [userImage, setUserImage] = useState(profileimage); // Default image

//     useEffect(() => {
//         const fetchUserData = async () => {
//             const authToken = localStorage.getItem('auth-token');
//             console.log("Auth token from localStorage:", authToken); // Log token fetched from localStorage

//             if (authToken) {
//                 try {
//                     const response = await fetch('http://localhost:4000/user', {
//                         method: 'GET',
//                         headers: {
//                             'auth-token': authToken, // Send the auth-token directly
//                             'Content-Type': 'application/json',
//                         },
//                     });
//                     console.log("Response headers:", response.headers); // Log response headers

//                     if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     const data = await response.json();
//                     console.log("Response from backend:", data);

//                     if (data && data.user && data.user.image) {
//                         setUser(data.user); // Set the user object
//                         console.log("user data in the navbar : ",data.user);
//                         setUserImage(data.user.image); // Set the user image
//                         console.log("User image:", data.user.image);
//                     } else {
//                         console.error('User data fetch unsuccessful: No user image found');
//                     }
//                 } catch (error) {
//                     console.error('Fetch error:', error);
//                 }
//             }
//         };
//         fetchUserData();
//     }, []);

//     const dropdown_toggle = (e) => {
//         menuRef.current.classList.toggle('nav-menu-visible');
//         e.target.classList.toggle('open');
//     };

//     return (
//         <div className="navbar">
//             <div className="nav-logo">
//                 <img src={logo} alt="Logo" />
//                 <p>SHOPPER</p>
//             </div>
//             <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="Menu Toggle" />
//             <ul ref={menuRef} className="nav-menu">
//                 <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
//                 <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
//                 <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
//                 <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
//             </ul>
//             <div className="nav-login-cart">
//                 {localStorage.getItem('auth-token')
//                     ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
//                     : <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>}

//                 <Link style={{ textDecoration: 'none' }} to='/cart'><img src={cart_icon} alt="Cart" /></Link>
//                 <div className="nav-cart-count">{getTotalCartItems()}</div>
//                 <div className="profile-image">
//                     <img src={userImage} alt="Profile" />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Navbar;











// import React, { useState, useEffect, useContext, useRef } from "react";
// import './Navbar.css';
// import logo from '../Assets/logo.png';
// import cart_icon from '../Assets/cart_icon.png';
// import { Link } from "react-router-dom";
// import { ShopContext } from "../../Context/ShopContext";
// import nav_dropdown from '../Assets/nav_dropdown.png';
// import profileimage from '../Assets/profileimage.png';

// const Navbar = () => {
//     const [menu, setMenu] = useState("shop");
//     const { getTotalCartItems } = useContext(ShopContext);
//     const menuRef = useRef();
//     const [user, setUser] = useState(null);
//     const [userImage, setUserImage] = useState(profileimage); // Default image

//     useEffect(() => {
//         const fetchUserData = async () => {
//             const authToken = localStorage.getItem('auth-token');
//             console.log("Auth token from localStorage:", authToken); // Log token fetched from localStorage

//             if (authToken) {
//                 try {
//                     const response = await fetch('http://localhost:4000/user', {
//                         method: 'GET',
//                         headers: {
//                             'auth-token': authToken, // Send the auth-token directly
//                             'Content-Type': 'application/json',
//                         },
//                     });
//                     console.log("Response headers:", response.headers); // Log response headers

//                     if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     const data = await response.json();
//                     console.log("Response from backend:", data);

//                     if (data && data.user && data.user.image) {
//                         setUser(data.user); // Set the user object
//                         setUserImage(data.user.image); // Set the user image
//                         console.log("User image:", data.user.image);
//                     } else {
//                         console.error('User data fetch unsuccessful: No user image found');
//                     }
//                 } catch (error) {
//                     console.error('Fetch error:', error);
//                 }
//             }
//         };
//         fetchUserData();
//     }, []);

//     const dropdown_toggle = (e) => {
//         menuRef.current.classList.toggle('nav-menu-visible');
//         e.target.classList.toggle('open');
//     };

//     return (
//         <div className="navbar">
//             <div className="nav-logo">
//                 <img src={logo} alt="Logo" />
//                 <p>SHOPPER</p>
//             </div>
//             <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="Menu Toggle" />
//             <ul ref={menuRef} className="nav-menu">
//                 <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
//                 <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
//                 <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
//                 <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
//             </ul>
//             <div className="nav-login-cart">
//                 {localStorage.getItem('auth-token')
//                     ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
//                     : <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>}

//                 <Link style={{ textDecoration: 'none' }} to='/cart'><img src={cart_icon} alt="Cart" /></Link>
//                 <div className="nav-cart-count">{getTotalCartItems()}</div>
//                 <div className="profile-image">
//                     <img src={userImage} alt="Profile" />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Navbar;

















// import React, { useState, useEffect, useContext, useRef } from "react";
// import './Navbar.css';
// import logo from '../Assets/logo.png';
// import cart_icon from '../Assets/cart_icon.png';
// import { Link } from "react-router-dom";
// import { ShopContext } from "../../Context/ShopContext";
// import nav_dropdown from '../Assets/nav_dropdown.png';
// import profileimage from '../Assets/profileimage.png';

// const Navbar = () => {
//     const [menu, setMenu] = useState("shop");
//     const { getTotalCartItems } = useContext(ShopContext);
//     const menuRef = useRef();
//     const [user, setUser] = useState(null);
//     const [userImage, setUserImage] = useState(profileimage); // Default image

//     useEffect(() => {
//         const fetchUserData = async () => {
//             const authToken = localStorage.getItem('auth-token');
//             console.log("Auth token from localStorage:", authToken); // Log token fetched from localStorage

//             if (authToken) {
//                 try {
//                     const response = await fetch('http://localhost:4000/user', {
//                         method: 'GET',
//                         headers: {
//                             'auth-token': authToken, // Send the auth-token directly
//                             'Content-Type': 'application/json',
//                         },
//                     });
//                     console.log("Response headers:", response.headers); // Log response headers

//                     if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     const data = await response.json();
//                     console.log("Response from backend:", data);

//                     if (data && data.user && data.user.image) {
//                         setUser(data.user); // Set the user object
//                         console.log("user data in the navbar : ",data.user);
//                         setUserImage(data.user.image); // Set the user image
//                         console.log("User image:", data.user.image);
//                     } else {
//                         console.error('User data fetch unsuccessful: No user image found');
//                     }
//                 } catch (error) {
//                     console.error('Fetch error:', error);
//                 }
//             }
//         };
//         fetchUserData();
//     }, []);

//     const dropdown_toggle = (e) => {
//         menuRef.current.classList.toggle('nav-menu-visible');
//         e.target.classList.toggle('open');
//     };

//     const handleCartClick = (e) => {
//         if (!localStorage.getItem('auth-token')) {
//             e.preventDefault();
//             alert("Please login to access the cart.");
//         }
//     };

//     return (
//         <div className="navbar">
//             <div className="nav-logo">
//                 <img src={logo} alt="Logo" />
//                 <p>SHOPPER</p>
//             </div>
//             <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="Menu Toggle" />
//             <ul ref={menuRef} className="nav-menu">
//                 <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
//                 <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
//                 <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
//                 <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
//             </ul>
//             <div className="nav-login-cart">
//                 {localStorage.getItem('auth-token')
//                     ? (
//                         <>
//                             <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
//                             <Link style={{ textDecoration: 'none' }} to='/cart' onClick={handleCartClick}><img src={cart_icon} alt="Cart" /></Link>
//                             <div className="nav-cart-count">{getTotalCartItems()}</div>
//                             <div className="profile-image">
//                                 <img src={userImage} alt="Profile" />
//                             </div>
//                         </>
//                     )
//                     : (
//                         <>
//                             <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>
//                             <Link style={{ textDecoration: 'none' }} to='/cart' onClick={handleCartClick}><img src={cart_icon} alt="Cart" /></Link>
//                             <div className="nav-cart-count">{getTotalCartItems()}</div>
//                         </>
//                     )
//                 }
//             </div>
//         </div>
//     );
// }

// export default Navbar;

















// import React, { useState, useEffect, useContext, useRef } from "react";
// import './Navbar.css';
// import logo from '../Assets/logo.png';
// import cart_icon from '../Assets/cart_icon.png';
// import { Link } from "react-router-dom";
// import { ShopContext } from "../../Context/ShopContext";
// import nav_dropdown from '../Assets/nav_dropdown.png';
// import profileimage from '../Assets/profileimage.png';

// const Navbar = () => {
//     const [menu, setMenu] = useState("shop");
//     const { getTotalCartItems } = useContext(ShopContext);
//     const menuRef = useRef();
//     const [user, setUser] = useState(null);
//     const [userImage, setUserImage] = useState(profileimage); // Default image

//     useEffect(() => {
//         const fetchUserData = async () => {
//             const authToken = localStorage.getItem('auth-token');
//             console.log("Auth token from localStorage:", authToken); // Log token fetched from localStorage

//             if (authToken) {
//                 try {
//                     const response = await fetch('http://localhost:4000/user', {
//                         method: 'GET',
//                         headers: {
//                             'auth-token': authToken, // Send the auth-token directly
//                             'Content-Type': 'application/json',
//                         },
//                     });
//                     console.log("Response headers:", response.headers); // Log response headers

//                     if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     const data = await response.json();
//                     console.log("Response from backend:", data);

//                     if (data && data.user && data.user.image) {
//                         setUser(data.user); // Set the user object
//                         console.log("user data in the navbar : ",data.user);
//                         setUserImage(data.user.image); // Set the user image
//                         console.log("User image:", data.user.image);
//                     } else {
//                         console.error('User data fetch unsuccessful: No user image found');
//                     }
//                 } catch (error) {
//                     console.error('Fetch error:', error);
//                 }
//             }
//         };
//         fetchUserData();
//     }, []);

//     const dropdown_toggle = (e) => {
//         menuRef.current.classList.toggle('nav-menu-visible');
//         e.target.classList.toggle('open');
//     };

//     const handleCartClick = (e) => {
//         if (!localStorage.getItem('auth-token')) {
//             e.preventDefault();
//             alert("Please login to access the cart.");
//         }
//     };

//     return (
//         <div className="navbar">
//             <div className="nav-logo">
//                 <img src={logo} alt="Logo" />
//                 <p>SHOPPER</p>
//             </div>
//             <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="Menu Toggle" />
//             <ul ref={menuRef} className="nav-menu">
//                 <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
//                 <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
//                 <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
//                 <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
//             </ul>
//             <div className="nav-login-cart">
//                 {localStorage.getItem('auth-token')
//                     ? (
//                         <>
//                             <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
//                             <Link style={{ textDecoration: 'none' }} to='/cart' onClick={handleCartClick}><img src={cart_icon} alt="Cart" /></Link>
//                             <div className="nav-cart-count">{getTotalCartItems()}</div>
//                             <div className="profile-image">
//                                 <img src={userImage} alt="Profile" />
//                             </div>
//                         </>
//                     )
//                     : (
//                         <>
//                             <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>
//                             <Link style={{ textDecoration: 'none' }} to='/cart' onClick={handleCartClick}><img src={cart_icon} alt="Cart" /></Link>
//                             <div className="nav-cart-count">{getTotalCartItems()}</div>
//                         </>
//                     )
//                 }
//             </div>
//         </div>
//     );
// }

// export default Navbar;







// import React, { useState, useEffect, useContext, useRef } from "react";
// import './Navbar.css';
// import logo from '../Assets/logo.png';
// import cart_icon from '../Assets/cart_icon.png';
// import { Link } from "react-router-dom";
// import { ShopContext } from "../../Context/ShopContext";
// import nav_dropdown from '../Assets/nav_dropdown.png';
// import profileimage from '../Assets/profileimage.png';

// const Navbar = () => {
//     const [menu, setMenu] = useState("shop");
//     const { getTotalCartItems } = useContext(ShopContext);
//     const menuRef = useRef();
//     const [user, setUser] = useState(null);
//     const [userImage, setUserImage] = useState(profileimage); // Default image

//     useEffect(() => {
//         const fetchUserData = async () => {
//             const authToken = localStorage.getItem('auth-token');

//             if (authToken) {
//                 try {
//                     const response = await fetch('http://localhost:4000/user', {
//                         method: 'GET',
//                         headers: {
//                             'auth-token': authToken,
//                             'Content-Type': 'application/json',
//                         },
//                     });

//                     if (response.ok) {
//                         const data = await response.json();
//                         if (data?.user?.image) {
//                             setUser(data.user);
//                             setUserImage(data.user.image);
//                         }
//                     }
//                 } catch (error) {
//                     console.error('Error fetching user data:', error);
//                 }
//             }
//         };
//         fetchUserData();
//     }, []);

//     const dropdown_toggle = (e) => {
//         menuRef.current.classList.toggle('nav-menu-visible');
//         e.target.classList.toggle('open');
//     };

//     return (
//         <div className="navbar">
//             <div className="nav-logo">
//                 <img src={logo} alt="Logo" />
//                 <p>SHOPPER</p>
//             </div>
//             <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="Menu Toggle" />
//             <ul ref={menuRef} className="nav-menu">
//                 <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
//                 <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
//                 <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
//                 <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
//             </ul>
//             <div className="nav-login-cart">
//                 {localStorage.getItem('auth-token')
//                     ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
//                     : <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>}

//                 <Link style={{ textDecoration: 'none' }} to='/cart'><img src={cart_icon} alt="Cart" /></Link>
//                 <div className="nav-cart-count">
//                     {Number.isFinite(getTotalCartItems()) ? getTotalCartItems() : 0}
//                 </div>
//                 <div className="profile-image">
//                     <img src={userImage} alt="Profile" />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Navbar;

import React, { useState, useEffect, useContext, useRef } from "react";
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from '../Assets/nav_dropdown.png';
import profileimage from '../Assets/profileimage.png';
import logoutIcon from '../Assets/logout.png';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();
    // eslint-disable-next-line
    const [user, setUser] = useState(null);
    const [userImage, setUserImage] = useState(profileimage); // Default image
    const navigate = useNavigate(); // Initialize useNavigate

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
                    //console.log("Response headers:", response.headers); // Log response headers

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    console.log("Response from backend:", data);

                    if (data && data.user && data.user.image) {
                        setUser(data.user); // Set the user object
                        // console.log("User data in the navbar:", data.user);
                        setUserImage(data.user.image); // Set the user image
                        // console.log("User image:", data.user.image);
                    } else {
                        console.error('User data fetch unsuccessful: No user image found');
                    }
                } catch (error) {
                    console.error('Fetch error:', error);
                }
            }
        };
        fetchUserData();
    }, []);

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    };

    const handleCartClick = (e) => {
        if (!localStorage.getItem('auth-token')) {
            e.preventDefault();
            alert("Please login to access the cart.");
        }
    };

    const handleProfileClick = () => {
        navigate('/profile'); // Navigate to the profile page
    };

    const handleLogout = () => {
        localStorage.clear(); // Clear all local storage
        window.location.replace('/');
    };

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="navbar">
            <div className="nav-logo">
                <span className="menu-icon" style={{ cursor: 'pointer' }}
                    onClick={toggleSidebar}>&#9776;</span> {/* Pass the function reference */}
                <img src={logo} alt="Logo" />
                <p>SHOPPER</p>
                <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="Menu Toggle" />

                {isSidebarOpen && <div className="overlay" onClick={closeSidebar}>
                    <div className={`side ${isSidebarOpen ? 'open' : ''}`}>
                        <ul ref={menuRef} className="nav-menu">
                            <li
                                onClick={() => { setMenu("shop") }}
                                style={{ backgroundColor: menu === "shop" ? 'red' : 'transparent' }}>
                                <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
                                {menu === "shop" && <hr />}
                            </li>
                            <li
                                onClick={() => { setMenu("mens") }}
                                style={{ backgroundColor: menu === "mens" ? 'red' : 'transparent' }}>
                                <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>
                                {menu === "mens" && <hr />}
                            </li>
                            <li
                                onClick={() => { setMenu("womens") }}
                                style={{ backgroundColor: menu === "womens" ? 'red' : 'transparent' }}>
                                <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>
                                {menu === "womens" && <hr />}
                            </li>
                            <li
                                onClick={() => { setMenu("kids") }}
                                style={{ backgroundColor: menu === "kids" ? 'red' : 'transparent' }}>
                                <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
                                {menu === "kids" && <hr />}
                            </li>
                            {localStorage.getItem('auth-token') && (
                                <li
                                    onClick={() => { setMenu("wishlist") }}
                                    style={{ backgroundColor: menu === "wishlist" ? 'red' : 'transparent' }}>
                                    <Link style={{ textDecoration: 'none' }} to='/wishlist'>Wishlist</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>}
            </div>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                    ? (
                        <>
                            <img
                                src={logoutIcon}
                                alt="Logout"
                                onClick={handleLogout}
                                className="logout"
                                style={{ cursor: 'pointer' }}
                            />
                            <Link style={{ textDecoration: 'none' }} to='/cart' onClick={handleCartClick}><img src={cart_icon} alt="Cart" /></Link>
                            <div className="nav-cart-count">{getTotalCartItems()}</div>
                            <div className="profile-image" onClick={handleProfileClick}>
                                <img src={userImage} alt="Profile" />
                            </div>
                        </>
                    )
                    : (
                        <>
                            <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>
                            <Link style={{ textDecoration: 'none' }} to='/cart' onClick={handleCartClick}><img src={cart_icon} alt="Cart" /></Link>
                            <div className="nav-cart-count">{getTotalCartItems()}</div>
                        </>
                    )
                }
            </div>
        </div>
    );
}

export default Navbar;
