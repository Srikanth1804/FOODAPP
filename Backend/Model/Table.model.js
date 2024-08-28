let mongoose = require("mongoose");
const tableSchema = new mongoose.Schema({
  Tablename: {
    type: String,
  },
  IsBooked: {
    type: Boolean,
  },

  HotelName: {
    type: String,
  },
});

const Table = mongoose.model("Table", tableSchema);

module.exports = Table;
