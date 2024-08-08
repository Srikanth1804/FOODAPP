let Express = require("express");

// Controllers Import Section
const FindHotel = require("./Controllers/FindHotel");
const AddHotel = require("./Controllers/AddHotel");

let HotelRoutes = Express.Router()


 HotelRoutes.get("/searchhotel",FindHotel)
HotelRoutes.post("/addhotel",AddHotel)

module.exports = HotelRoutes;