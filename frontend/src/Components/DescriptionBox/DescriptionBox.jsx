// import React, { useState } from 'react';
// import './DescriptionBox.css';

// export const DescriptionBox = (props) => {
//   const { product } = props;
//   const [activeTab, setActiveTab] = useState('description');

//   return (
//     <div className='descriptionbox'>
//       <div className="descriptionbox-navigator">
//         <div
//           className={`descriptionbox-nav-box ${activeTab === 'description' ? '' : 'fade'}`}
//           onClick={() => setActiveTab('description')}>
//           Description
//         </div>
//         <div
//           className={`descriptionbox-nav-box ${activeTab === 'reviews' ? '' : 'fade'}`}
//           onClick={() => setActiveTab('reviews')}>
//           Reviews ({product.review})
//         </div>
//       </div>
//       {activeTab === 'description' ? (
//         <div className="descriptionbox-description">
//           <p>{product.description}</p>
//         </div>
//       ) : (
//         <div className="descriptionbox-description">
//           <div className="reviews">
//             {/* Add your review content here */}
//             <p>Review content goes here.</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import './DescriptionBox.css';


// export const DescriptionBox = (props) => {
//     const { product } = props;
//     const [activeTab, setActiveTab] = useState('description');
//     const [reviews, setReviews] = useState([]);
//     const [newReview, setNewReview] = useState(''); // State to store new review input
//     const [canAddReview, setCanAddReview] = useState(false); // State to check if the user can add a review
//     const authToken = localStorage.getItem('auth-token');

//     useEffect(() => {
//         // Fetch user order history
//         const fetchOrderHistory = async () => {
//             try {
//                 const response = await fetch('http://localhost:4000/getOrderHistory', {
//                     method: 'GET',
//                     headers: {
//                         'auth-token': authToken,
//                         'Content-Type': 'application/json'
//                     }
//                 });

//                 if (response.ok) {
//                     const data = await response.json();
//                     console.log("data from box : ", data);

//                     console.log("product from description : ",product._id);

//                     // Check if the user has ordered the product
//                     const hasOrdered = data.order_history.some(order => order.product._id === product._id);
//                     setCanAddReview(hasOrdered);
//                 }
//             } catch (error) {
//                 console.error("Error fetching order history:", error);
//             }
//         };

//         fetchOrderHistory();
//     }, [authToken, product._id]);

//     const handleAddReview = () => {
//         if (newReview.trim()) {
//             setReviews([...reviews, newReview]);
//             setNewReview('');
//         }
//     };

//     return (
//         <div className='descriptionbox'>
//             <div className="descriptionbox-navigator">
//                 <div
//                     className={`descriptionbox-nav-box ${activeTab === 'description' ? '' : 'fade'}`}
//                     onClick={() => setActiveTab('description')}
//                 >
//                     Description
//                 </div>
//                 <div
//                     className={`descriptionbox-nav-box ${activeTab === 'reviews' ? '' : 'fade'}`}
//                     onClick={() => setActiveTab('reviews')}
//                 >
//                     Reviews ({reviews.length})
//                 </div>
//             </div>
//             {activeTab === 'description' ? (
//                 <div className="descriptionbox-description">
//                     <p>{product.description}</p>
//                 </div>
//             ) : (
//                 <div className="descriptionbox-description">
//                     <div className="reviews">
//                         {/* Review input field */}
//                         <textarea
//                             className="review-input"
//                             value={newReview}
//                             onChange={(e) => setNewReview(e.target.value)}
//                             placeholder="Write your review here..."
//                             disabled={!canAddReview} // Disable if user hasn't ordered the product
//                         />
//                         <button onClick={handleAddReview} disabled={!canAddReview}>Add Review</button>

//                         {/* Display review content */}
//                         {reviews.map((review, index) => (
//                             <div key={index} className="review">
//                                 <p>{review}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

import React, { useEffect, useState } from 'react';
import './DescriptionBox.css';

export const DescriptionBox = (props) => {
    const { product } = props;
    const [activeTab, setActiveTab] = useState('description');
    const [reviews, setReviews] = useState([]); // State to store reviews
    const [newReview, setNewReview] = useState(''); // State to store new review input
    const [canAddReview, setCanAddReview] = useState(false); // State to check if the user can add a review
    const authToken = localStorage.getItem('auth-token'); // Get auth token from local storage

    useEffect(() => {
        // Fetch product and reviews
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:4000/product/${product._id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    // Sort reviews in descending order by date
                    const sortedReviews = data.reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
                    setReviews(sortedReviews);
                } else {
                    const data = await response.json();
                    alert(`Error fetching product: ${data.message}`);
                }
            } catch (error) {
                console.error("Error fetching product:", error);
                alert("Error fetching product. Please try again.");
            }
        };

        fetchProduct();
    }, [product._id]);

    useEffect(() => {
        // Fetch user order history
        const fetchOrderHistory = async () => {
            try {
                const response = await fetch('http://localhost:4000/getOrderHistory', {
                    method: 'GET',
                    headers: {
                        'auth-token': authToken,
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    // Check if the user has ordered the product
                    const hasOrdered = data.order_history.some(order => order.product._id === product._id);
                    setCanAddReview(hasOrdered);
                }
            } catch (error) {
                console.error("Error fetching order history:", error);
            }
        };

        fetchOrderHistory();
    }, [authToken, product._id]);

    const handleAddReview = async () => {
        if (newReview.trim()) {
            try {
                const response = await fetch('http://localhost:4000/addreview', {
                    method: 'POST',
                    headers: {
                        'auth-token': authToken,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ productId: product._id, content: newReview })
                });

                if (response.ok) {
                    const data = await response.json();
                    setReviews([data.review, ...reviews]); // Add new review to the beginning of the array
                    setNewReview('');
                } else {
                    const data = await response.json();
                    alert(`Error adding review: ${data.message}`);
                }
            } catch (error) {
                console.error("Error adding review:", error);
                alert("Error adding review. Please try again.");
            }
        }
    };

    const formatReviewDate = (dateString) => {
        const date = new Date(dateString);
        const hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const twelveHourFormat = hours % 12 || 12; // Convert to 12-hour format, handling midnight as 12
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();
        return `${twelveHourFormat}:${minutes} ${ampm}/ ${day}-${month}-${year}`;
    };

    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div
                    className={`descriptionbox-nav-box ${activeTab === 'description' ? '' : 'fade'}`}
                    onClick={() => setActiveTab('description')}
                >
                    Description
                </div>
                <div
                    className={`descriptionbox-nav-box ${activeTab === 'reviews' ? '' : 'fade'}`}
                    onClick={() => setActiveTab('reviews')}
                >
                    Reviews ({reviews.length})
                </div>
            </div>
            {activeTab === 'description' ? (
                <div className="descriptionbox-description">
                    <p>{product.description}</p>
                </div>
            ) : (
                <div className="descriptionbox-description">
                    <div className="reviews">
                        <div className="review-input">
                            <textarea
                                className="review-input-area"
                                value={newReview}
                                onChange={(e) => setNewReview(e.target.value)}
                                placeholder="Write your review here..."
                                disabled={!canAddReview} // Disable if user hasn't ordered the product
                            />
                        </div>
                        <div className="addbutton"></div>
                            <button onClick={handleAddReview} disabled={!canAddReview}>Add Review</button>
                        <div className="review-show">
                            {reviews.map((review, index) => (
                                <div key={index} className="review">
                                    <div className="review-left">
                                    <p className='name'>{review.user.name}:</p>
                                    <p className='content'>{review.content}</p>
                                    </div>
                                    <div className="review-right">
                                    <p>{formatReviewDate(review.date)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
