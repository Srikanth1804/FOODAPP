let Express = require("express");
const Tablebooking = require("./Controllers/Tablebooking");
const Tableshow = require("./Controllers/Tableshow");
const TableUpdate = require("./Controllers/TableUpdate");
const Confirmbooking = require("./Controllers/Confirmbooking");

let TableRoutes = Express.Router();

TableRoutes.post("/booktable", Tablebooking);
TableRoutes.get("/showtable", Tableshow);
TableRoutes.put("/update", TableUpdate);
TableRoutes.post("/confirmbooking", Confirmbooking);

module.exports = TableRoutes;
