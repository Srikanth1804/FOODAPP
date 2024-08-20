let CDBS = require("../../../Model/Cart.model");

module.exports = (req, res) => {
  CDBS.find({}).then((data) => {
    if (data && data.length > 0) {
      res.json({
        status: true,
        info: data,
      });
    } else {
      res.json({
        status: false,
        msg: "Yet To Added Cart Items!",
      });
    }
  });
};
