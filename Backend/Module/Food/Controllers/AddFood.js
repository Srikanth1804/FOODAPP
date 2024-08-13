let FoodData = require("../../../Model/FoodData.model");

module.exports = (req, res) => {
  let {
    foodname,
    foodimg,
    foodcategory,
    fooddesc,
    hotelname,
    price,
    rating,
    notes,
    isavailable,
  } = req.body;

  FoodData.create({
    FoodName: foodname,
    FoodImg: foodimg,
    FoodCategory: foodcategory,
    FoodDesc: fooddesc,
    HotelName: hotelname,
    FoodPrice: price,
    FoodRating: rating,
    Notes: notes,
    FoodAvailable: isavailable,
  })
    .then((data) => {
      res.json({
        status: true,
        info: data,
        msg: "Food Available!",
      });
    })
    .catch((e) => {
      res.json({
        status: false,
        info: e,
        msg: "Food Unavailable!",
      });
    });
};
