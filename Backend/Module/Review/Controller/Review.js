let RDBS = require("../../../Model/Review.model");

module.exports = (req, res) => {
  let { review } = req.body;

  RDBS.create({
    Comment: review,
  })
    .then((data) => {
      res.json({
        status: true,
        info: data,
        msg: "comment posted!",
      });
    })
    .catch((e) => {
      res.json({
        status: false,
        info: e,
        msg: "Failed to post comment",
      });
    });
};
