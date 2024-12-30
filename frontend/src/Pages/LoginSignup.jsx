// // import React, { useState } from "react";
// // import './CSS/LoginSignup.css'

// // const LoginSignup = () => {


// //     const [state, setState] = useState("Login");
// //     const [formData, setFormData] = useState({
// //         username: "",
// //         email: "",
// //         password: "",
// //         phone:"",
// //         image:""
// //     })

// //     const changeHandler = (e) => {
// //         setFormData({ ...formData, [e.target.name]: e.target.value })
// //     }

// //     const login = async () => {
// //         console.log("Login function executed", formData);
// //         let responseData;
// //         await fetch('http://localhost:4000/login', {
// //             method: 'POST',
// //             headers: {
// //                 Accept: 'application/form-data',
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify(formData),
// //         }).then((response) => response.json()).then((data) => responseData = data)

// //         if (responseData.success) {
// //             localStorage.setItem('auth-token', responseData.token);
// //             window.location.replace("/");
// //             alert(responseData.success);
// //         }
// //         else {
// //             alert(responseData.errors);
// //         }

// //     }

// //     const signup = async () => {
// //         console.log("Signup function executed", formData);
// //         let responseData;
// //         await fetch('http://localhost:4000/signup', {
// //             method: 'POST',
// //             headers: {
// //                 Accept: 'application/form-data',
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify(formData),
// //         }).then((response) => response.json()).then((data) => responseData = data)

// //         if (responseData.success) {
// //             localStorage.setItem('auth-token', responseData.token);
// //             window.location.replace("/");
// //         }
// //         else {
// //             alert(responseData.errors);
// //         }

// //     }


// //     return (
// //         <div className="loginsignup">
// //             <div className="loginsignup-container">
// //                 <h1>{state}</h1>
// //                 <div className="loginsignup-fields">
// //                     {state === "Sign Up" ? <input type="text" name="username" value={formData.username} onChange={changeHandler} placeholder="Your Name" /> : <></>}
// //                     <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
// //                     <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
// //                     <input name="phone" value={formData.phone} onChange={changeHandler} type="number" placeholder="phone" />
// //                     <input name="image" value={formData.image} onChange={changeHandler} type="file" placeholder="image" />
// //                 </div>
// //                 <button onClick={() => { state === "Login" ? login() : signup() }} >Continue</button>
// //                 {state === "Sign Up" ? <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }} >Login here</span></p> : <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Sign Up") }} >Click here</span></p>}
// //                 <div className="loginsignup-agree">
// //                     <input type="checkbox" name="" id="" />
// //                     <p>By continuing, i agree to the terms of use & privacy policy.</p>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default LoginSignup;


// import React, { useState } from "react";
// import './CSS/LoginSignup.css';

// const LoginSignup = () => {
//     const [state, setState] = useState("Login");
//     const [formData, setFormData] = useState({
//         username: "",
//         email: "",
//         password: "",
//         phone: "",
//         image: "",
//     });
//     const [image, setImage] = useState(null);
//     const [preview, setPreview] = useState(null); // State for image preview

//     const changeHandler = (e) => {
//         const { name, value, files } = e.target;
//         if (name === 'profile_image' && files) {
//             const file = files[0];
//             setImage(file);
//             setPreview(URL.createObjectURL(file)); // Set preview URL
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     const uploadSingleImage = async (img) => {
//         let formData = new FormData();
//         formData.append('profile_image', img);  // Use 'profile_image' as field name

//         const response = await fetch('http://localhost:4000/profile', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//             },
//             // body: formData,
//             body: JSON.stringify(formData),
//         });
//         return response.json();
//     };

//     const login = async () => {
//         console.log("Login function executed", formData);
//         let responseData;
//         await fetch('http://localhost:4000/login', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/form-data',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         }).then((response) => response.json()).then((data) => responseData = data);

//         if (responseData.success) {
//             localStorage.setItem('auth-token', responseData.token);
//             alert('Login successful!');
//             window.location.replace("/");
//         } else {
//             alert(responseData.errors);
//         }
//     };

//     const signup = async () => {
//         console.log("Signup function executed", formData);

//         if (!image) {
//             alert("No image selected. Proceeding without image.");
//         } else {
//             const imageResponse = await uploadSingleImage(image);

//             if (imageResponse.success) {
//                 formData.image = imageResponse.image_url; // Assuming the response contains the uploaded image URL
//             } else {
//                 alert("Image upload failed. Please try again.");
//                 return;
//             }
//         }

//         let responseData;
//         await fetch('http://localhost:4000/signup', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/form-data',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         }).then((response) => response.json()).then((data) => responseData = data);

//         if (responseData.success) {
//             localStorage.setItem('auth-token', responseData.token);
//             alert('Signup successful!');
//             window.location.replace("/");
//         } else {
//             alert(responseData.errors);
//         }
//     };

//     return (
//         <div className="loginsignup">
//             <div className="loginsignup-container">
//                 <h1>{state}</h1>
//                 <div className="loginsignup-fields">
//                     {state === "Sign Up" && (
//                         <>
//                             <input type="text" name="username" value={formData.username} onChange={changeHandler} placeholder="Your Name" />
//                             <input name="phone" value={formData.phone} onChange={changeHandler} type="number" placeholder="Phone" />
//                             <input name="profile_image" type="file" onChange={changeHandler} placeholder="Image" />  {/* Field name is 'profile_image' */}
//                             {preview && <img src={preview} alt="" style={{ width: '100px', height: '100px' }} />}
//                         </>
//                     )}
//                     <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
//                     <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
//                 </div>
//                 <button onClick={() => { state === "Login" ? login() : signup() }} >Continue</button>
//                 {state === "Sign Up" ? <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }} >Login here</span></p> : <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Sign Up") }} >Click here</span></p>}
//                 <div className="loginsignup-agree">
//                     <input type="checkbox" name="" id="" />
//                     <p>By continuing, I agree to the terms of use & privacy policy.</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default LoginSignup;


import React, { useState } from "react";
import './CSS/LoginSignup.css';

const LoginSignup = () => {
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        phone: "",
        image: "",
        user_type: ""
    });
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null); // State for image preview

    const changeHandler = (e) => {
        const { name, value, files } = e.target;
        if (name === 'profile_image' && files) {
            const file = files[0];
            setImage(file);
            setPreview(URL.createObjectURL(file)); // Set preview URL
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const uploadSingleImage = async (img) => {
        let formData = new FormData();
        formData.append('profile_image', img);  // Use 'profile_image' as field name

        const response = await fetch('http://localhost:4000/profile', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData
        });
        return response.json();
    };

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
    //         } else {
    //             window.location.replace("/");
    //         }
    //     } else {
    //         alert(responseData.errors);
    //     }
    // };

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
        } else if (responseData.errors === "You are blocked by Admin") {
            alert("You are blocked by Admin");
        } else {
            alert(responseData.errors);
        }
    };
    



    const signup = async () => {
        console.log("Signup function executed", formData);

        if (!image) {
            alert("No image selected. Proceeding without image.");
        } else {
            const imageResponse = await uploadSingleImage(image);

            if (imageResponse.success) {
                formData.image = imageResponse.image_url; // Assuming the response contains the uploaded image URL
            } else {
                alert("Image upload failed. Please try again.");
                return;
            }
        }

        let responseData;
        await fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data) => responseData = data);

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            alert('Login successful!');
            if (responseData.user && responseData.user.user_type === '676c07e68c1c6815439b181c' && '676c07f88c1c6815439b181e') { // Replace with actual Admin user type ID
                window.location.replace("/Admin/addproduct");
            } else {
                window.location.replace("/");
            }
        } else {
            alert(responseData.errors);
        }
    };

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "Sign Up" && (
                        <>
                            <input type="text" name="username" value={formData.username} onChange={changeHandler} placeholder="Your Name" />
                            <input name="phone" value={formData.phone} onChange={changeHandler} type="number" placeholder="Phone" />
                            <input name="profile_image" type="file" onChange={changeHandler} placeholder="Image" />  {/* Field name is 'profile_image' */}
                            {preview && <img src={preview} alt="" style={{ width: '100px', height: '100px' }} />}
                            <select name="user_type" value={formData.user_type} onChange={changeHandler}>
                                <option value="">Select User Type</option>
                                <option value="676c07a58c1c6815439b1818">Buyer</option>
                                <option value="676c07f88c1c6815439b181e">Seller</option>
                            </select>
                        </>
                    )}
                    <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
                    <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
                </div>
                <button onClick={() => { state === "Login" ? login() : signup() }} >Continue</button>
                {state === "Sign Up" ? <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }} >Login here</span></p> : <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Sign Up") }} >Click here</span></p>}
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
