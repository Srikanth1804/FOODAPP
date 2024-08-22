let CDBS = require("../../../Model/Cart.model");
module.exports = (req, res) => {
  let { id } = req.params;
  CDBS.findByIdAndDelete({ _id: id })
    .then((data) => {
      res.json({
        status: true,
        msg: "Data Deleted!",
      });
    })
    .catch((e) => {
      res.json({
        status: false,
        msg: "Failled to delete",
      });
    });
};
