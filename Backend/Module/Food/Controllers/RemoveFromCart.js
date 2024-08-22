let CDBS = require("../../../Model/Cart.model");

module.exports = (req, res) => {
  let { id } = req.params;
  console.log("Delete", id);

  CDBS.findByIdAndDelete({ _id: id })
    .then((data) => {
      res.json({
        status: true,
        msg: "Item Removed!",
      });
    })
    .catch((e) => {
      res.json({
        status: false,
        msg: "Error",
      });
    });
};
