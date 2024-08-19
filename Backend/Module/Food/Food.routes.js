let Express = require("express");
const AddFood = require("./Controllers/AddFood");
const GetFood = require("./Controllers/GetFood");
const AddCart = require("./Controllers/AddCart");

let FoodRoutes = Express.Router();

FoodRoutes.post("/addfood", AddFood);
FoodRoutes.get("/getfood", GetFood);
FoodRoutes.post("/addcart", AddCart);

module.exports = FoodRoutes;
