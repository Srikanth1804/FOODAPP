let Table = require("../../../Model/Table.model");

module.exports = async (req, res) => {
  const { tableName, hotelName } = req.body;

  Table.create({
    Tablename: tableName,
    HotelName: hotelName,
  })
    .then((data) => {
      res.json({
        status: true,
        info: data,
        msg: "Table data sended!",
      });
    })
    .catch((e) => {
      res.json({
        status: false,
        msg: "Table Data Failed To Send!",
      });
    });
};
