let Express = require("express");
const Tablebooking = require("./Controllers/Tablebooking");
let TableRoutes = Express.Router();

TableRoutes.get("/gettable", Tablebooking);
TableRoutes.post("/booktable", Tablebooking);

module.exports = TableRoutes;
