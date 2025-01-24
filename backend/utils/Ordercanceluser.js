// exports.canceledOrderTemplate = function (userName, userEmail, orderDetails, supportEmail) {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let template = `
//               <html style="box-sizing: border-box; --bs-blue: #0d6efd; --bs-green: #198754; --bs-warning: #ffc107; --bs-danger: #dc3545;">
//                 <head>
//                     <meta name="viewport" content="width=device-width, initial-scale=1">
//                     <style>
//                         body, html {
//                             padding: 0px !important;
//                             margin: 0px !important;
//                             font-family: sans-serif !important;
//                         }
//                         .container {
//                             padding: 20px;
//                         }
//                         .banner {
//                             background-color: #198754; /* Green */
//                             color: white;
//                             padding: 20px;
//                             text-align: center;
//                         }
//                         .content {
//                             padding: 20px;
//                             background-color: #f8f9fa; /* Light gray */
//                             border-radius: 10px;
//                         }
//                         .text-muted {
//                             color: #6c757d !important;
//                         }
//                         .text-warning {
//                             color: #ffc107 !important;
//                         }
//                         .text-dark {
//                             color: #212529 !important;
//                         }
//                         .footer {
//                             margin-top: 20px;
//                             text-align: center;
//                             font-size: 12px;
//                             color: #6c757d;
//                         }
//                         ul {
//                             padding-left: 20px;
//                         }
//                         li {
//                             margin-bottom: 5px;
//                         }
//                     </style>
//                 </head>

//                 <body>
//                     <div class="banner">
//                         <h2>Order Cancellation Confirmation</h2>
//                     </div>
//                     <div class="container">
//                         <div class="content">
//                             <p>Hello ${userName},</p>
//                             <p>We’re writing to confirm that your order has been successfully canceled. Below are the details of your canceled order:</p>
//                             <ul>
//                                 <li><b>Product Name:</b> ${orderDetails.productName}</li>
//                                 <li><b>Product ID:</b> ${orderDetails.productId}</li>
//                                 <li><b>Size:</b> ${orderDetails.size}</li>
//                                 <li><b>Quantity:</b> ${orderDetails.quantity}</li>
//                                 <li><b>Total Price:</b> $${orderDetails.totalPrice}</li>
//                                 <li><b>Billing Information:</b>
//                                     <ul>
//                                         <li><b>Full Name:</b> ${orderDetails.billingInfo.fullname}</li>
//                                         <li><b>Email:</b> ${orderDetails.billingInfo.email}</li>
//                                         <li><b>Phone:</b> ${orderDetails.billingInfo.phone}</li>
//                                         <li><b>Address:</b> ${orderDetails.billingInfo.city}, ${orderDetails.billingInfo.state}, ${orderDetails.billingInfo.postal}, ${orderDetails.billingInfo.country}</li>
//                                     </ul>
//                                 </li>
//                             </ul>
//                             <p>If this cancellation was made in error, or if you have any questions, please reach out to our support team at <b>${supportEmail}</b>.</p>
//                             <p>Thank you for shopping with us. We hope to serve you again in the future!</p>
//                             <p class="text-muted">Best regards,<br>Shopper</p>
//                         </div>
//                         <div class="footer">
//                             &copy; ${new Date().getFullYear()} Shopper. All rights reserved.
//                         </div>
//                     </div>
//                 </body>
//               </html>
//             `;
//             resolve(template);
//         } catch (error) {
//             console.error(error);
//             reject(error);
//         }
//     });
// };


exports.canceledOrderTemplate = function (userName, userEmail, orderDetails, supportEmail) {
    return new Promise(async (resolve, reject) => {
        try {
            let template = `
              <html style="box-sizing: border-box; --bs-blue: #0d6efd; --bs-green: #198754; --bs-warning: #ffc107; --bs-danger: #dc3545;">
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <style>
                        body, html {
                            padding: 0px !important;
                            margin: 0px !important;
                            font-family: sans-serif !important;
                        }
                        .container {
                            padding: 20px;
                        }
                        .banner {
                            background-color: #198754; /* Green */
                            color: white;
                            padding: 20px;
                            text-align: center;
                        }
                        .content {
                            padding: 20px;
                            background-color: #f8f9fa; /* Light gray */
                            border-radius: 10px;
                        }
                        .text-muted {
                            color: #6c757d !important;
                        }
                        .text-warning {
                            color: #ffc107 !important;
                        }
                        .text-dark {
                            color: #212529 !important;
                        }
                        .footer {
                            margin-top: 20px;
                            text-align: center;
                            font-size: 12px;
                            color: #6c757d;
                        }
                        ul {
                            padding-left: 20px;
                        }
                        li {
                            margin-bottom: 5px;
                        }
                    </style>
                </head>

                <body>
                    <div class="banner">
                        <h2>Order Cancellation Confirmation</h2>
                    </div>
                    <div class="container">
                        <div class="content">
                            <p>Hello ${userName},</p>
                            <p>We’re sorry to see your order canceled. Below are the details of your canceled order:</p>
                            <ul>
                                <li><b>Order Date:</b> ${new Date(orderDetails.orderDate).toLocaleDateString()}</li>
                                <li><b>Product Name:</b> ${orderDetails.productName}</li>
                                <li><b>Size:</b> ${orderDetails.size}</li>
                                <li><b>Quantity:</b> ${orderDetails.quantity}</li>
                                <li><b>Total Price:</b> $${orderDetails.totalPrice}</li>
                                <li><b>Billing Information:</b>
                                    <ul>
                                        <li><b>Full Name:</b> ${orderDetails.billingInfo.fullname}</li>
                                        <li><b>Email:</b> ${orderDetails.billingInfo.email}</li>
                                        <li><b>Phone:</b> ${orderDetails.billingInfo.phone}</li>
                                        <li><b>Address:</b> ${orderDetails.billingInfo.city}, ${orderDetails.billingInfo.state}, ${orderDetails.billingInfo.postal}, ${orderDetails.billingInfo.country}</li>
                                    </ul>
                                </li>
                            </ul>
                            <p>If this cancellation was made in error, or if you have any questions, please contact our support team at <a href="mailto:${supportEmail}">${supportEmail}</a>.</p>
                            <p>Thank you for shopping with us. We hope to serve you again in the future!</p>
                            <p class="text-muted">Best regards,<br>Shopper</p>
                        </div>
                        <div class="footer">
                            &copy; ${new Date().getFullYear()} Shopper. All rights reserved.
                        </div>
                    </div>
                </body>
              </html>
            `;
            resolve(template);
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
};
