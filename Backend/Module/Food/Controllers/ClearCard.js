let CDBS = require("../../../Model/Cart.model");
module.exports = (req, res) => {
  let { orderData } = req.query; // Access orderData from query parameters
  console.log(orderData);

  // Continue with your logic to clear the cart
  // ...

  CDBS.deleteMany({ orderData })
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
