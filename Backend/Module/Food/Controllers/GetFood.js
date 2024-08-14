let FoodData = require("../../../Model/FoodData.model");
module.exports = (req, res) => {
  let { name } = req.query;
  console.log(name);
  FoodData.find({ HotelName: name })
    .then((data) => {
      res.json({
        status: true,
        info: data,
        msg: "Data Fetched Success!",
      });
    })
    .catch((e) => {
      res.json({
        status: false,
        info: e,
        msg: "Error To Fetch Data!",
      });
    });
};
