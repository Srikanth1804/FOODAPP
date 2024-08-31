let HotelData = require("../../../Model/HotelData.model");

module.exports = (req, res) => {
  const { name } = req.query;

  HotelData.find({ HotelName: name })
    .then((data) => {
      console.log(data);

      if (data.length > 0) {
        res.json(data);
      } else {
        res.status(404).send("No hotel found with the provided name");
      }
    })
    .catch((err) => {
      console.error("Error fetching hotel data:", err);
      res.status(500).send("Internal Server Error");
    });
};
