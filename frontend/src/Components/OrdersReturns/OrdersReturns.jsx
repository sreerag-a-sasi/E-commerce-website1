// import React, { useEffect, useState } from 'react';
// import './OrdersReturns.css';

// const OrdersReturns = () => {
//   const [orders, setOrders] = useState([]);

//   // Fetch all orders on page load
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/orders', {
//           method: 'GET',
//           headers: {
//             Accept: 'application/json',
//             'auth-token': localStorage.getItem('auth-token'),
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setOrders(data.orders);
//         } else {
//           alert("please order something");
//         }
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//       }
//     };
//     fetchOrders();
//   }, []);

//   return (
//     <div className="orders-returns">
//       <h1>Orders & Returns</h1>
//       <div className="orders-container">
//         {orders.length > 0 ? (
//           orders.map((order) => (
//             <div className="order-item" key={order.id}>
//               <div className="order-summary">
//                 <div className="product-image">
//                   <img
//                     src={order.product?.image || 'default-image-url.jpg'}
//                     alt={order.product?.name || 'Product Image'}
//                   />
//                 </div>
//                 <p><strong>Order ID:</strong> {order.id}</p>
//                 <p><strong>Product Name:</strong> {order.product?.name || 'Unknown'}</p>
//                 <p><strong>Price:</strong> ${order.totalPrice}</p>
//                 <p><strong>Quantity:</strong> {order.quantity}</p>
//                 <p><strong>Status:</strong> {order.shipped}</p>
//                 <p><strong>Order Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
//                 <h3>Billing Information:</h3>
//                 <ul className="billing-info">
//                   <li><strong>Full Name:</strong> {order.billingInfo.fullname}</li>
//                   <li><strong>Email:</strong> {order.billingInfo.email}</li>
//                   <li><strong>Phone:</strong> {order.billingInfo.phone}</li>
//                   <li><strong>City:</strong> {order.billingInfo.city}</li>
//                   <li><strong>State:</strong> {order.billingInfo.state}</li>
//                   <li><strong>Postal:</strong> {order.billingInfo.postal}</li>
//                   <li><strong>Country:</strong> {order.billingInfo.country}</li>
//                 </ul>
//                 <button id='cancel' onClick={cancelorder()}>Cancel My Order</button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No orders found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrdersReturns;



import React, { useEffect, useState } from 'react';
import './OrdersReturns.css';

const OrdersReturns = () => {
  const [orders, setOrders] = useState([]);

  // Fetch all orders on page load
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:4000/orders', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'auth-token': localStorage.getItem('auth-token'),
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setOrders(data.orders);
        } else {
          alert("Please order something.");
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, []);

  // Cancel order function
  const cancelOrder = async (orderId) => {
    try {
      const response = await fetch(`http://localhost:4000/orders/${orderId}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'auth-token': localStorage.getItem('auth-token'),
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
        alert('Order canceled successfully.');
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to cancel the order.');
      }
    } catch (error) {
      console.error('Error canceling order:', error);
    }
  };

  return (
    <div className="orders-returns">
      <h1>Orders & Returns</h1>
      <div className="orders-container">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div className="order-item" key={order.id}>
              <div className="order-summary">
                <div className="product-image">
                  <img
                    src={order.product?.image || 'default-image-url.jpg'}
                    alt={order.product?.name || 'Product Image'}
                  />
                </div>
                <p><strong>Order ID:</strong> {order.id}</p>
                <p><strong>Product Name:</strong> {order.product?.name || 'Unknown'}</p>
                <p><strong>Price:</strong> ${order.totalPrice}</p>
                <p><strong>Quantity:</strong> {order.quantity}</p>
                <p><strong>Status:</strong> {order.shipped}</p>
                <p><strong>Order Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
                <h3>Billing Information:</h3>
                <ul className="billing-info">
                  <li><strong>Full Name:</strong> {order.billingInfo.fullname}</li>
                  <li><strong>Email:</strong> {order.billingInfo.email}</li>
                  <li><strong>Phone:</strong> {order.billingInfo.phone}</li>
                  <li><strong>City:</strong> {order.billingInfo.city}</li>
                  <li><strong>State:</strong> {order.billingInfo.state}</li>
                  <li><strong>Postal:</strong> {order.billingInfo.postal}</li>
                  <li><strong>Country:</strong> {order.billingInfo.country}</li>
                </ul>
                <button id="cancel" onClick={() => cancelOrder(order.id)}>Cancel My Order</button>
              </div>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default OrdersReturns;









