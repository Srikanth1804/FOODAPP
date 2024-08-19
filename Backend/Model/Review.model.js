let Mongoose = require("mongoose");

let ReviewSchema = new Mongoose.Schema({
  Comment: {
    type: String,
  },
  Username: {
    type: String,
  },
  Rating: {
    type: Number,
  },
  HotelName: {
    type: String,
  },
});

let RDBS = Mongoose.model("Comments", ReviewSchema);
module.exports = RDBS;
