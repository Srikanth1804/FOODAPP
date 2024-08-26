const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  itemCount: { type: Number, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
