let Express = require("express");
const AddFood = require("./Controllers/AddFood");
const GetFood = require("./Controllers/GetFood");

let FoodRoutes = Express.Router();

FoodRoutes.post("/addfood", AddFood);
FoodRoutes.get("/getfood", GetFood);

module.exports = FoodRoutes;
