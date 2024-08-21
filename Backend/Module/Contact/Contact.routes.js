let Express = require("express");
const Addcontact = require("./Controllers/Addcontact");

let ContactRoute = Express.Router();
ContactRoute.post("/addcontact", Addcontact);

module.exports = ContactRoute;
