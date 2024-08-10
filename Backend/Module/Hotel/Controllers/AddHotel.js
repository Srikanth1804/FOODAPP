let HotelData = require("../../../Model/HotelData.model");
module.exports = (req, res) => {
  let {
    hotelname,
    hotelimg,
    hotelcategory,
    hotellocation,
    canbooktable,
    closetime,
    hasbar,
    hasparking,
    hoteldesc,
    opentime,
    rating,
  } = req.body;

  HotelData.create({
    HotelName: hotelname,
    HotelImg: hotelimg,
    HotelCategory: hotelcategory,
    HotelLocation: hotellocation,
    HotelTableBooking: canbooktable,
    HotelClose: closetime,
    HotelBar: hasbar,
    HotelParking: hasparking,
    HotelOpen: opentime,
    HotelDescription: hoteldesc,
    HotelRating: rating,
  })
    .then((data) => {
      res.json({
        status: true,
        info: data,
      });
    })
    .catch((e) => {
      res.json({
        status: false,
        msg: "Failled To Fetch Hotel!",
      });
    });
};
