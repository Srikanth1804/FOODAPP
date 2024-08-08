let HotelData = require("../../Model/HotelData.model") 
module.exports = (req,res)=>{

    let { hotelname,hotelimgO,hotelimgI,hotellocation,hotelcategory,hoteldesc, foodname,foodimg,foodtype,fooddesc,foodprice} = req.body
    try{
        HotelData.create({
            HotelName:hotelname,
            HotelImgO:hotelimgO,
            HotelImgI:hotelimgI,
            HotelCategory:hotelcategory,
            HotelLocation:hotellocation,
            HotelDesc:hoteldesc,
            FoodName:foodname,
            FoodImg:foodimg,
            FoodType:foodtype,
            FoodDesc:fooddesc,
            FoodPrice:foodprice
        })
        res.send("Datacreated!")
    }
    catch{
        res.send("Data Failed to Create!")
    }


}