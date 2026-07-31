const {fruits} = require("../routes/data");

function getFruits(req, res) {
  res.render("home", { fruits });
}

module.exports = {
  getFruits,
};
