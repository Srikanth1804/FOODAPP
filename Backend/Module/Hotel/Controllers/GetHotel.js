let HotelData = require("../../../Model/HotelData.model");

module.exports = (req, res) => {
  let { name } = req.query;

  HotelData.find({ HotelName: name })
    .then((data) => {
      res.json({
        status: true,
        info: data,
        msg: "Available Hotel!",
      });
    })
    .catch((e) => {
      res.json({
        status: false,
        info: e,
        msg: "No Hotel Available",
      });
    });
};
