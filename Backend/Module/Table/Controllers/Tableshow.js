let Table = require("../../../Model/Table.model");

module.exports = (req, res) => {
  let { name } = req.query;
  Table.find({ HotelName: name })
    .then((data) => {
      res.json({
        status: true,
        info: data,
        msg: "Table Data finded!",
      });
    })
    .catch((e) => {
      res.json({
        status: false,
        msg: "Error To Find Data!",
      });
    });
};
