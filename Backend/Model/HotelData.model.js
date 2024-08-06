let Mongoose = require("mongoose");

let HotelDataschema = new Mongoose.Schema(
    {

        HotelName:{
            type:String,
            required:true
        },
        HotelImgO:{
            type:String,
            required:true

        },
        HotelImgI:{
           type:String,
        required:true
       },
       HotelCategory:{
        type:String,
        required:true,
       },
       HotelLocation:{
        type:String,
        required:true

       },
       HotelDesc:{
        type:String,
        required:true

       },
       FoodName:{
        type:String,
        required:true
       },
       FoodImg:{
        type:String,
        required:true
       },
       FoodType:{
        type:String,
        required:true
       },
       FoodDesc:{
        type:String,
        required:true
       },
       FoodPrice:{
        type:Number,
        required:true
       }
       





    }
)

let HotelData = Mongoose.model("HotelData",HotelDataschema);
module.exports = HotelData;