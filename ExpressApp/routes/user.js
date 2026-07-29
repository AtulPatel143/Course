const express = require("express"); // Express को import किया
const router = express.Router(); // Router object बनाया

router.post("/submit", (req, res) => {
  console.log(req.body); // Client का data देखना
  users.push(req.body);
  res.send("User added"); // Check करना कि Route चल रहा है
});

module.exports = router; // Router को app.js में use करने के लिए export किया
