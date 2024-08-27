let Mongoose = require("mongoose");

let CartSchema = new Mongoose.Schema({
  foodname: {
    type: String,
  },
  foodcategory: {
    type: String,
  },
  fooddesc: {
    type: String,
  },
  foodimg: {
    type: String,
  },
  foodprice: {
    type: String,
  },
  incart: {
    type: Boolean,
    default: false,
  },
  total: {
    type: Number,
  },
});

let CDBS = Mongoose.model("FoodCart", CartSchema);
module.exports = CDBS;
