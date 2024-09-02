let mongoose = require("mongoose");
const ConfirmtableSchema = new mongoose.Schema({
  Bookername: {
    type: String,
  },
  Email: {
    type: String,
  },

  Numofseats: {
    type: Number,
  },
});

const ConfirmTable = mongoose.model("ConfirmTable", ConfirmtableSchema);

module.exports = ConfirmTable;
