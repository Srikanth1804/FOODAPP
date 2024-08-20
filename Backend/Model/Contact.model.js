let Mongoose = require("mongoose");

let ContactSchema = new Mongoose.Schema({
  Name: {
    type: String,
  },
  Email: {
    type: String,
  },
  Message: {
    type: String,
  },
});

let ContactData = Mongoose.model("Contact", ContactSchema);
module.exports = ContactData;
