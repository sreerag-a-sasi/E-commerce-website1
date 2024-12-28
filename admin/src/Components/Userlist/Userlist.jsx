// import React, { useEffect, useState } from 'react';
// import './UserList.css'; // Add your styling in this CSS file
// import cross_icon from '../../assets/cross_icon.png';

// const UserList = () => {
//     const [allUsers, setAllUsers] = useState([]);

//     const fetchUsers = async () => {
//         await fetch('http://localhost:4000/allusers')
//             .then((res) => res.json())
//             .then((data) => setAllUsers(data));
//     };

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const removeUser = async (id) => {
//         const response = await fetch('http://localhost:4000/removeuser', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ id }),
//         });
//         const result = await response.json();
//         if (result.success) {
//             alert('User removed successfully!');
//         } else {
//             alert('Failed to remove user: ' + result.message);
//         }
//         await fetchUsers();
//     };

//     return (
//         <div className='user-list'>
//             <h1>All Users</h1>
//             <div className="userlist-format-main">
//                 <p>Image</p>
//                 <p>Name</p>
//                 <p>Email</p>
//                 <p>Phone</p>
//                 <p>User Type</p>
//                 <p>Remove</p>
//             </div>
//             <div className="userlist-allusers">
//                 <hr />
//                 {allUsers.map((user, index) => (
//                     <div key={index} className="userlist-format-main userlist-format">
//                         <img src={user.image} alt="" className="userlist-user-icon" />
//                         <p>{user.name}</p>
//                         <p>{user.email}</p>
//                         <p>{user.phone}</p>
//                         <p>{user.user_type || 'N/A'}</p>
//                         <img
//                             onClick={() => removeUser(user._id)}
//                             className='userlist-remove-icon'
//                             src={cross_icon}
//                             alt="Remove User"
//                         />
//                         <hr />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default UserList;

import React, { useEffect, useState } from 'react';
import './UserList.css'; // Add your styling in this CSS file
import cross_icon from '../../assets/cross_icon.png';

const UserList = () => {
    const [allUsers, setAllUsers] = useState([]);

    const fetchUsers = async () => {
        await fetch('http://localhost:4000/allusers')
            .then((res) => res.json())
            .then((data) => setAllUsers(data));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const removeUser = async (id) => {
        const response = await fetch('http://localhost:4000/removeuser', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });
        const result = await response.json();
        if (result.success) {
            alert('User removed successfully!');
        } else {
            alert('Failed to remove user: ' + result.message);
        }
        await fetchUsers();
    };

    return (
        <div className='user-list'>
            <h1>All Users</h1>
            <div className="userlist-allusers">
                <hr />
                {allUsers.map((user, index) => (
                    <div key={index} className="userlist-format-main userlist-format">
                        <img src={user.image} alt="" className="userlist-user-icon" />
                        <p>Name : {user.name}</p>
                        <p>Email : {user.email}</p>
                        <p>Phone : {user.phone}</p>
                        <p>You are : {user.user_type ? user.user_type.user_type : 'N/A'}</p> {/* Access the user_type field */}
                        <p>Since : {user.date}</p>
                        {user.user_type && user.user_type.user_type === 'Admin' ? (
                            <img className='userlist-remove-icon' src={cross_icon} alt="Cannot Remove Admin" style={{ cursor: 'not-allowed', opacity: 0.5 }} />
                        ) : (
                            <img
                                onClick={() => removeUser(user._id)}
                                className='userlist-remove-icon'
                                src={cross_icon}
                                alt="Remove User"
                            />
                        )}
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;
