let UpdateForm = require("../../../Model/UpdateForm.model");

module.exports = (req, res) => {
  UpdateForm.findByIdAndUpdate({});
};
