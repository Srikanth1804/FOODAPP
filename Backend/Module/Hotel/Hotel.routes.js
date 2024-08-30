let Express = require("express");

// Handler Import Section
const AddHotel = require("./Controllers/AddHotel");
const FindHotel = require("./Controllers/FindHotel");
const GetLocatiion = require("./Controllers/GetLocatiion");

let HotelRoutes = Express.Router();

HotelRoutes.post("/addhotel", AddHotel);
HotelRoutes.get("/findhotel", FindHotel);
HotelRoutes.get("/location", GetLocatiion);

module.exports = HotelRoutes;
