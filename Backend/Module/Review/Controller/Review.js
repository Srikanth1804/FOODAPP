let RDBS = require("../../../Model/Review.model");
module.exports = (req, res) => {
  let { username, rating, comment, hotelname } = req.body;

  RDBS.create({
    Username: username,
    Rating: rating,
    Comment: comment,
    HotelName: hotelname,
  })
    .then(() => {
      res.json({
        status: true,
        msg: "ThankYou For Providing Review!",
      });
    })
    .catch((e) => {
      res.json({
        status: false,
        msg: "Error",
      });
    });
};
