const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // Assuming you're using the food item's _id
  name: { type: String, required: true },
  price: { type: Number, required: true }, // Use Number for price
  itemCount: { type: Number, required: true },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
