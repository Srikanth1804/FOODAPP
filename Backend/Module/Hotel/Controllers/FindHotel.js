let HotelData = require("../../../Model/HotelData.model");

module.exports = (req, res) => {
  let { dish, location } = req.query;
  console.log(dish, location);

  HotelData.find({ HotelCategory: dish, HotelLocation: location })
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
