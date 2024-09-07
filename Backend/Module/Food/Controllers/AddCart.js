let CDBS = require("../../../Model/Cart.model");
module.exports = (req, res) => {
  let { FoodImg, FoodCategory, FoodDesc, FoodName, FoodPrice, HotelName } =
    req.body;

  CDBS.create({
    foodimg: FoodImg,
    foodcategory: FoodCategory,
    fooddesc: FoodDesc,
    foodname: FoodName,
    foodprice: FoodPrice,
    hotelname: HotelName,
  })
    .then((data) => {
      res.json({
        status: true,
        info: data,
        msg: "cart added!",
      });
    })
    .catch((e) => {
      res.json({
        status: false,
        info: e,
        msg: "Failed to add cart!",
      });
    });
};
