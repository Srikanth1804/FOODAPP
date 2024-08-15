let Mongoose = require("mongoose");

let FoodSchema = new Mongoose.Schema({
  FoodName: {
    type: String,
  },
  FoodImg: {
    type: String,
  },
  FoodCategory: {
    type: String,
  },
  FoodDesc: {
    type: String,
  },
  HotelName: {
    type: String,
  },
  FoodPrice: {
    type: String,
  },
  FoodRating: {
    type: Number,
  },
  Notes: {
    type: String,
  },
  FoodAvailable: {
    type: Boolean,
    default: false,
  },
});

let FoodData = Mongoose.model("FoodInfo", FoodSchema);

module.exports = FoodData;
