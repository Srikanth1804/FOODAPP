let Order = require("../../../Model/Order.model");
let nodemailer = require("nodemailer");
const util = require("util");

require("dotenv").config();

module.exports = async (req, res) => {
  const { orderData } = req.body;

  try {
    // Insert the order data into the database
    const result = await Order.insertMany(orderData);
    res
      .status(201)
      .json({ message: "Order placed successfully!", data: result });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Error placing order", error });
  }
};
