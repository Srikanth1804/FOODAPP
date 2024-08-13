let Express = require("express");
const AddFood = require("./Controllers/AddFood");

let FoodRoutes = Express.Router();

FoodRoutes.post("/addfood", AddFood);

module.exports = FoodRoutes;
