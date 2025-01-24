import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewOrders.css';

const ListProduct = () => {
    const [productsWithOrderHistory, setProductsWithOrderHistory] = useState([]);
    const navigate = useNavigate();

    // Fetch all products with order history
    const fetchDetails = async (currentUserId, currentUserType) => {
        try {
            const response = await fetch('http://localhost:4000/allproducts', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const products = await response.json();
                console.log("products in list :", products);

                // Filter products based on the user type
                const filteredProducts = products.filter(product =>
                    currentUserType === 'Admin' || // Admin can see all products
                    (currentUserType === 'Seller' && product.added_by === currentUserId) // Sellers can only see their own products
                );

                console.log({ currentUserId, currentUserType, allProducts: products });
                console.log("Filtered Products:", filteredProducts);

                const productsWithHistory = await Promise.all(
                    filteredProducts.map(async (product) => {
                        try {
                            const orderHistoryResponse = await fetch(`http://localhost:4000/history/${product._id}`, {
                                method: 'GET',
                                headers: {
                                    Accept: 'application/json',
                                    'auth-token': localStorage.getItem('auth-token'),
                                    'Content-Type': 'application/json',
                                },
                            });

                            if (orderHistoryResponse.ok) {
                                const orderHistory = await orderHistoryResponse.json();
                                // Sort the orderHistory by shipped date in descending order
                                orderHistory.sort((a, b) => new Date(b.shipped) - new Date(a.shipped));
                                return { ...product, orderHistory };
                            } else {
                                return { ...product, orderHistory: [] }; // Handle no order history
                            }
                        } catch (error) {
                            console.error(`Error fetching order history for product ${product._id}:`, error);
                            return { ...product, orderHistory: [] }; // Handle fetch error
                        }
                    })
                );

                // Only include products with order history
                const productsWithOrderHistory = productsWithHistory.filter(product => product.orderHistory.length > 0);

                // Sort products based on the most recent order's shipped date
                productsWithOrderHistory.sort((a, b) =>
                    new Date(b.orderHistory[0].shipped) - new Date(a.orderHistory[0].shipped)
                );

                setProductsWithOrderHistory(productsWithOrderHistory);
            } else {
                console.error("Failed to fetch products.");
            }
        } catch (error) {
            console.error("Error fetching products with order history:", error);
        }
    };

    const cancelOrder = async (orderId, orderDetails) => {
        try {
            const response = await fetch(`http://localhost:4000/cancel/${orderId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                },
                body: JSON.stringify(orderDetails),
            });

            if (response.ok) {
                alert('Order canceled successfully.');
                window.location.reload();
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Failed to cancel the order.');
            }
        } catch (error) {
            console.error('Error canceling order:', error);
            alert('An unexpected error occurred.');
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

    return (
        <div className='list-product'>
            <div className="header-line">
                <h1>New Orders</h1>
            </div>
            <div className="listproduct-all">
                {productsWithOrderHistory.flatMap((product) =>
                    product.orderHistory.map((order) => (
                        <ul id="order" key={order._id}>
                            <li>
                                <div className="left-panel">
                                    <img
                                        src={product.image[0]}
                                        alt={product.name}
                                        className="listproduct-product-icon"
                                        onClick={() => navigate(`/product/${product.id}`)}
                                    />
                                    <p>No. {product.id}</p>
                                    <p>Nos. {product.available}</p>
                                    <p className="title">Name: {product.name}</p>
                                    <p>Category: {product.category}</p>
                                    <p>Seller: {product.seller}</p>
                                </div>
                                <div className="right-panel">
                                    <h3>Order History for {product.name}</h3>
                                    <p>Size: {order.size}</p>
                                    <p>Quantity: {order.quantity}</p>
                                    <p>Total Price: ${order.totalPrice}</p>
                                    <p>Shipped Date: {new Date(order.shipped).toLocaleDateString()}</p>
                                    <p>Full Name: {order.billingInfo.fullname}</p>
                                    <p>Email: {order.billingInfo.email}</p>
                                    <p>Phone: {order.billingInfo.phone}</p>
                                    <p>City: {order.billingInfo.city}</p>
                                    <p>State: {order.billingInfo.state}</p>
                                    <p>Postal Code: {order.billingInfo.postal}</p>
                                    <p>Country: {order.billingInfo.country}</p>
                                    <h4>User Ordered: {order.user.name}</h4>
                                    <h4>Email: {order.user.email}</h4>
                                    <h4>Phone: {order.user.phone}</h4>
                                    <button
                                        id="cancel"
                                        onClick={() => cancelOrder(order._id, {
                                            productId: product.id,
                                            productName: product.name,
                                            orderDetails: {
                                                size: order.size,
                                                quantity: order.quantity,
                                                totalPrice: order.totalPrice,
                                                billingInfo: order.billingInfo,
                                                user: order.user._id,
                                            },
                                        })}
                                    >
                                        Cancel This Order
                                    </button>
                                </div>
                            </li>
                        </ul>
                    ))
                )}
            </div>
        </div>
    );
};

export default ListProduct;
