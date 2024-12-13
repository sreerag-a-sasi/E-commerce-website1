// import React, { useState } from 'react';
// import './ProfilePage.css';

// const ProfilePage = () => {
//     const [profile, setProfile] = useState({
//         image: '',
//         name: '',
//         email: '',
//         password: '',
//         phone: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProfile((prevProfile) => ({
//             ...prevProfile,
//             [name]: value,
//         }));
//     };

//     return (
//         <div className="profile-container">
//             <div className="profileimage-container">
//                 <img
//                     src={profile.image || 'https://via.placeholder.com/150'}
//                     alt="Profile"
//                     className="profileimage"
//                 />
//             </div>
//             <form className="profile-form">
//                 <div className="form-group">
//                     <label>Profile Image URL:</label>
//                     <input
//                         type="text"
//                         name="image"
//                         value={profile.image}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Name:</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={profile.name}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={profile.email}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={profile.password}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Phone:</label>
//                     <input
//                         type="text"
//                         name="phone"
//                         value={profile.phone}
//                         onChange={handleChange}
//                     />
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default ProfilePage;

import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ProfilePage = () => {
    const [profile, setProfile] = useState({
        image: '',
        name: '',
        email: '',
        password: '',
        phone: '',
    });
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchProfile = async () => {
            const authToken = localStorage.getItem('auth-token');
            
            if (authToken) {
                try {
                    const response = await fetch('http://localhost:4000/user', {
                        method: 'GET',
                        headers: {
                            'auth-token': authToken, // Send the auth-token directly
                            'Content-Type': 'application/json',
                        },
                    });

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    if (data && data.user) {
                        setProfile(data.user); // Set the user data to state
                    }
                } catch (error) {
                    console.error('Fetch error:', error);
                }
            }
        };

        fetchProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle password visibility state
    };

    const handleHomeClick = () => {
        navigate('/'); // Navigate to the home page
    };

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };
    const handlewishlist = () => {
        navigate('/wishlist'); // Navigate to the home page
    };

    return (
        <div className="profile-container">
            <div className="profileimage-container">
                <img
                    src={profile.image || 'https://via.placeholder.com/150'}
                    alt="Profile"
                    className="profileimage"
                />
            </div>
            <form className="profile-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group password-group">
                    <label>Password:</label>
                    <div className="password-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={profile.password}
                            onChange={handleChange}
                        />
                        <button type="button" onClick={togglePasswordVisibility}>
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-buttons">
                    <button type="button" onClick={handleHomeClick} className="home-button">
                        Home
                    </button>
                    <button type="button" onClick={handlewishlist} className="home-button">
                        wishlist
                    </button>
                    <button type="button" onClick={handleBackClick} className="back-button">
                        Back
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfilePage;
