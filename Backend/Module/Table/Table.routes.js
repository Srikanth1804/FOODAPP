let Express = require("express");
const Tablebooking = require("./Controllers/Tablebooking");
const Tableshow = require("./Controllers/Tableshow");
const TableUpdate = require("./Controllers/TableUpdate");

let TableRoutes = Express.Router();

TableRoutes.post("/booktable", Tablebooking);
TableRoutes.get("/showtable", Tableshow);
TableRoutes.put("/update", TableUpdate);

module.exports = TableRoutes;
