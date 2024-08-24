let Express = require("express");
const Addorder = require("./Controllers/Addorder");

let OrderRoutes = Express.Router();
OrderRoutes.post("/placeorder", Addorder);

module.exports = OrderRoutes;
