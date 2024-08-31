let Express = require("express");

// Handler Import Section
const AddHotel = require("./Controllers/AddHotel");
const FindHotel = require("./Controllers/FindHotel");
const GetLocation = require("./Controllers/GetLocation"); // Correct spelling here

let HotelRoutes = Express.Router();

HotelRoutes.post("/addhotel", AddHotel);
HotelRoutes.get("/findhotel", FindHotel);
HotelRoutes.get("/location", GetLocation); // Correct spelling here

module.exports = HotelRoutes; // Export the Router correctly
