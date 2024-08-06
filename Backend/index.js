let Express = require("express");
let App = Express();
let cors = require("cors");
let Mongoose = require("mongoose");
const HotelRoutes = require("./HOTELS/Hotel.routes");
require("dotenv").config();
App.use(Express.json())
App.use(cors())

Mongoose.connect(process.env.MONGODBURL)
.then(()=>{
    console.log("Database Connected!");
})
.catch(()=>{
    console.log("Database Connection Failed!");
})


// Middlewire For Handler Routes
// App.use("/api/hotel",HotelRoutes)
App.use("/api/hotel",HotelRoutes)


App.listen(8000,()=>{
    console.log(process.env.PORT);
    
})