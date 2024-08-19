let Express = require("express");
const Review = require("./Controller/Review");
const getreview = require("./Controller/getreview");

let ReviewRoute = Express.Router();

ReviewRoute.post("/shreview", Review);
ReviewRoute.get("/getreview", getreview);

module.exports = ReviewRoute;
