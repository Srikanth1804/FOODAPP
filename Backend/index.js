let Express = require("express");
let App = Express();
let Mongoose = require("mongoose");
require("dotenv").config();

Mongoose.connect(process.env.MONGODBURI)
.then(()=>{
    console.log("Database Connected!");
})
.catch(()=>{
    console.log("Database Connection Failed!");
})



App.listen(8000,()=>{
    console.log(process.env.PORT);
    
})