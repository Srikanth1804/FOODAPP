let Mongoose = require("mongoose");

let ReviewSchema = new Mongoose.Schema({
  Comment: {
    type: String,
  },
});

let RDBS = Mongoose.model("Comments", ReviewSchema);
module.exports = RDBS;
