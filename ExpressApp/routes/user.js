const express = require("express"); // Express को import किया
const router = express.Router(); // Router object बनाया

const users = require("../routes/data"); // Shared users array लिया

// ==================== CREATE ====================

router.post("/submit", (req, res) => {
  console.log(req.body); // Client का data देखना

  users.push(req.body); // Data array में add करना

  res.send("User added"); // Success response भेजना
});

// ==================== READ ALL ====================

router.get("/users", (req, res) => {
  res.send(users); // सभी users भेजना
});

// ==================== READ ONE ====================

router.get("/:id", (req, res) => {
  const id = Number(req.params.id); // URL से id लेना

  const user = users[id]; // उस id का user निकालना

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.send(user);
});

// ==================== UPDATE ====================

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users[id];

  if (!user) {
    return res.status(404).send("User not found");
  }

  users[id] = req.body;

  res.send("User Updated Successfully");
});

// ==================== DELETE ====================

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users[id];

  if (!user) {
    return res.status(404).send("User not found");
  }

  users.splice(id, 1);

  res.send("User Deleted Successfully");
});

module.exports = router;
