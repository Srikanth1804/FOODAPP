let ConfirmTable = require("../../../Model/Confirmbooking.model");

module.exports = (req, res) => {
  let { bookerName, email, numOfSeats } = req.body;

  ConfirmTable.create({
    Bookername: bookerName,
    Email: email,
    Numofseats: numOfSeats,
  })
    .then((data) => {
      res.json({
        status: true,
        info: data,
        msg: "Successfully Booked!",
      });
    })
    .catch((e) => {
      res.json({
        status: false,
        info: e,
      });
    });
};
