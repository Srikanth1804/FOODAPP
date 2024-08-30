let HotelData = require("../../../Model/HotelData.model");

module.exports = (req, res) => {
  let { name } = req.query;
  console.log(name);

  HotelData.find({ HotelName: name })
    .then((data) => {
      console.log(data);

      if (data.length > 0) {
        res.status(200).send(data);
      } else {
        res.status(404).send("No data found for the given hotel name.");
      }
    })
    .catch((e) => {
      console.error(e);
      res.status(500).send("Error retrieving data.");
    });
};
