let HotelData = require("../../Model/HotelData.model") 
module.exports = (req,res)=>{

    let {hotelName,HotelImgO,HotelImgI,HotelCategory,HotelLocation,HotelDesc,FoodName,FoodImg,FoodType,FoodDesc,FoodPrice} = req.body
    try{
        HotelData.create({
            HotelName:hotelName,
            HotelImgO:HotelImgO,
            HotelImgI:HotelImgI,
            HotelCategory:HotelCategory,
            HotelLocation:HotelLocation,
            HotelDesc:HotelDesc,
            FoodName:FoodName,
            FoodImg:FoodImg,
            FoodType:FoodType,
            FoodDesc:FoodDesc,
            FoodPrice:FoodPrice
        })
        res.send("Datacreated!")
    }
    catch{
        res.send("Data Failed to Create!")
    }


}