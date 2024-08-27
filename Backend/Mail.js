let nodemailer = require("nodemailer");
require("dotenv").config();

async function sendTestEmail() {
  try {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    var mailOptions = {
      from: process.env.EMAIL_USER,
      to: "paramasivan645@gmail.com", // Replace with your email to test
      subject: "Test Email",
      text: "This is a test email from your Node.js app.",
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Test Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending test email:", error);
  }
}

sendTestEmail();
