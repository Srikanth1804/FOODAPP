let CDBS = require("../../../Model/Cart.model");
module.exports = (req, res) => {
  CDBS.deleteMany({})
    .then(() => {
      res.json({
        status: true,
        msg: "data deleted",
      });
    })
    .catch((e) => {
      res.send("Errot to Delete Data!");
    });
};
