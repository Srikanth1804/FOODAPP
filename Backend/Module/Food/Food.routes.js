let Express = require("express");
const AddFood = require("./Controllers/AddFood");
const GetFood = require("./Controllers/GetFood");
const AddCart = require("./Controllers/AddCart");
const GetCard = require("./Controllers/GetCard");
const RemoveFromCart = require("./Controllers/RemoveFromCart");
const CartDelete = require("./Controllers/CartDelete");
const ClearCard = require("./Controllers/ClearCard");

let FoodRoutes = Express.Router();

FoodRoutes.post("/addfood", AddFood);
FoodRoutes.get("/getfood", GetFood);
FoodRoutes.post("/addcart", AddCart);
FoodRoutes.get("/getcart", GetCard);
FoodRoutes.delete("/remove/:name", RemoveFromCart);
FoodRoutes.delete("/cartdelete/:id", CartDelete);
FoodRoutes.delete("/clearcart", ClearCard);

module.exports = FoodRoutes;
