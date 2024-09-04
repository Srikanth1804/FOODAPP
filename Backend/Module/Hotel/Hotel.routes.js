let Express = require("express");

// Handler Import Section
const AddHotel = require("./Controllers/AddHotel");
const FindHotel = require("./Controllers/FindHotel");
const GetHotel = require("./Controllers/GetHotel");

let HotelRoutes = Express.Router();

HotelRoutes.post("/addhotel", AddHotel);
HotelRoutes.get("/findhotel", FindHotel);
HotelRoutes.get("/gethotel", GetHotel);
module.exports = HotelRoutes;
