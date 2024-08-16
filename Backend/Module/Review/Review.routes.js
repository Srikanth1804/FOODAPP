let Express = require("express");
const Review = require("./Controller/Review");

let ReviewRoute = Express.Router();

ReviewRoute.post("/addcomment", Review);

module.exports = ReviewRoute;
