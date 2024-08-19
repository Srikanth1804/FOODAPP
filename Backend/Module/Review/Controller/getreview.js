let RDBS = require("../../../Model/Review.model");

module.exports = (req, res) => {
  let { name } = req.query;
  RDBS.find({ HotelName: name })
    .then((data) => {
      res.json({
        status: true,
        reviewlist: data,
        msg: "Review Recieved!",
      });
    })
    .catch((e) => {
      res.json({
        status: false,
        msg: "Failed To Get Review!",
      });
    });
};
