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
                            background-color: #dc3545; /* Red */
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
                        <h2>Order Cancellation Notification</h2>
                    </div>
                    <div class="container">
                        <div class="content">
                            <p>Hello ${userName},</p>
                            <p>We regret to inform you that your order has been canceled by our team. Below are the details of the canceled order:</p>
                            <ul>
                                <li><b>Product Name:</b> ${orderDetails.productName}</li>
                                <li><b>Product ID:</b> ${orderDetails.productId}</li>
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
                            <p><b>Reason for Cancellation:</b> This order was canceled by the admin or seller. If you have any questions or require further clarification, please do not hesitate to reach out to our support team.</p>
                            <p>You can contact us at <b><a href="mailto:${supportEmail}">${supportEmail}</a></b>. We’re here to assist you.</p>
                            <p class="text-muted">We apologize for any inconvenience this may have caused and appreciate your understanding.</p>
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
