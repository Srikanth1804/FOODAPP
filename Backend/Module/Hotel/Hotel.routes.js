let Express = require("express");

// Handler Import Section
const AddHotel = require("./Controllers/AddHotel");
const FindHotel = require("./Controllers/FindHotel");

let HotelRoutes = Express.Router();

HotelRoutes.post("/addhotel", AddHotel);
HotelRoutes.get("/findhotel", FindHotel);

module.exports = HotelRoutes;
