let ContactData = require("../../../Model/Contact.model");

module.exports = (req, res) => {
  let { name, mail, message } = req.body;

  ContactData.create({
    Name: name,
    Email: mail,
    Message: message,
  })
    .then((data) => {
      res.json({
        status: true,
        info: data,
        msg: "ContactData send!",
      });
    })
    .catch((e) => {
      res.json({
        status: false,
        info: e,
        msg: "ContactData failed to send!",
      });
    });
};
