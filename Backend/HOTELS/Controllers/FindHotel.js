let HotelData = require("../../Model/HotelData.model");

module.exports = (req, res) => {
  let { Dish, Location } = req.query;  
    console.log(Dish, Location);

  HotelData.find({ FoodType: Dish, HotelLocation: Location })
    .then((Data) => {
      res.send(Data);
      console.log(Data);
      
      
      
    })
    .catch((e) => {
      res.send("Error TO Fetch Data");
    });
};
