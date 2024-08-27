let Express = require("express");
let App = Express();
let cors = require("cors");
let Mongoose = require("mongoose");

//Routes Import Section
const HotelRoutes = require("./Module/Hotel/Hotel.routes");
const FoodRoutes = require("./Module/Food/Food.routes");
const ReviewRoute = require("./Module/Review/Review.routes");
const ContactRoute = require("./Module/Contact/Contact.routes");
const OrderRoutes = require("./Module/Order/OrderRoutes.routes");
const TableRoutes = require("./Module/Table/Table.routes");

require("dotenv").config();
App.use(Express.json());
App.use(cors());

Mongoose.connect(process.env.MONGODBURL)
  .then(() => {
    console.log("Database Connected!");
  })
  .catch(() => {
    console.log("Database Connection Failed!");
  });

// Middlewire For Handler Routes
App.use("/hotel", HotelRoutes);
App.use("/food", FoodRoutes);
App.use("/review", ReviewRoute);
App.use("/cart", FoodRoutes);
App.use("/contact", ContactRoute);
App.use("/order", OrderRoutes);
App.use("/table", TableRoutes);
App.listen(8000, () => {
  console.log(process.env.PORT);
});
