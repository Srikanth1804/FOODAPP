let Mongoose = require("mongoose");

let Hotelschema = new Mongoose.Schema({
  HotelName: {
    type: String,
  },
  HotelImg: {
    type: String,
  },
  HotelCategory: {
    type: String,
  },
  HotelLocation: {
    type: String,
  },
  HotelOpen: {
    type: String,
  },
  HotelClose: {
    type: String,
  },
  HotelRating: {
    type: Number,
  },
  HotelDescription: {
    type: String,
  },
  HotelBar: {
    type: Boolean,
    default: false,
  },
  HotelParking: {
    type: Boolean,
    default: false,
  },
  HotelTableBooking: {
    type: Boolean,
    default: false,
  },
});

let HotelData = Mongoose.model("HotelInfo", Hotelschema);

module.exports = HotelData;
