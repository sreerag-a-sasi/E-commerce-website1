"use strict";
const nodemailer = require("nodemailer");

exports.sendEmail = async function (emails, subject, content) {
  return new Promise(async (resolve, reject) => {
    try {
      if (typeof emails == "object") emails = emails.join(", ");
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_PORT == 465 ? true : false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Manager"-support@Shopper.com', // sender address
        to: emails, // list of receivers
        subject: subject, // Subject line
        html: content, // html body
      });

      ////console.log("Email sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      resolve(true);
    } catch (error) {
      //console.log(error);
      reject(false);
    }
  });
};