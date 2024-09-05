let Order = require("../../../Model/Order.model");
let nodemailer = require("nodemailer");

require("dotenv").config();

module.exports = async (req, res) => {
  const { orderData } = req.body;

  try {
    // Insert the order data into the database
    const result = await Order.insertMany(orderData);

    if (result && result.length > 0) {
      const email = result[0].email;

      if (email) {
        try {
          // Create transporter
          var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          });

          // Prepare email content
          let itemsHtml = result
            .map(
              (item) => `
               <p><strong>Order ID:</strong> ${item._id}</p>
               <p><strong>Item:</strong> ${item.name}</p>
               <p><strong>Quantity:</strong> ${item.itemCount}</p>
               <p><strong>Price:</strong> ₹${item.price * item.itemCount}</p>
               <hr style="border: 1px dashed #ccc;">
              `
            )
            .join("");

          const totalSum = result.reduce((total, item) => {
            return total + item.price * item.itemCount;
          }, 0);

          var mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Order Confirmation - Receipt",
            html: `
              <div style="border: 1px solid #ccc; padding: 20px;  font-variant: small-caps;">
                <h2 style="color: #f15b2a;">Order Confirmation</h2>
                <p>Thank you for your order! Here are the details of your purchase:</p>
                <hr style="border: 1px dashed #ccc;">
                <h3 style="color: #333;">Order Details</h3>
                ${itemsHtml}
                <h3 style="color: #333;">Total: ₹${totalSum.toFixed(2)}</h3>
                <h3 style="color: #333;">Customer Information</h3>
                <p><strong>Name:</strong> ${result[0].username}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Address:</strong> ${result[0].address}</p>
                <hr style="border: 1px dashed #ccc;">
                <p style="color: #F73859;">This is your Bill. Please keep it safe. (Bill is mandatory to obtain food)</p>
              </div>
            `,
          };

          // Send email
          let info = await transporter.sendMail(mailOptions);
          console.log("Email sent successfully: " + info.response);

          res.status(201).json({
            message: "Order placed successfully!",
            data: result,
          });
        } catch (emailError) {
          console.error("Error sending email:", emailError);
          res.status(500).json({
            message: "Order placed but failed to send confirmation email.",
            error: emailError,
          });
        }
      } else {
        res
          .status(400)
          .json({ message: "No email address found in order data" });
      }
    } else {
      res.status(400).json({ message: "Order data not inserted" });
    }
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Error placing order", error });
  }
};
