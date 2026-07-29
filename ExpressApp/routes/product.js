const express = require("express"); // Express को import किया
const router = express.Router(); // Router object बनाया

const product = [];

router.get("/", (req, res) => {
  res.json(product);
});

router.post("/", (req, res) => {
  product.push(req.body);
  res.json(product);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);

  const selectedProduct = product[id];

  if (!selectedProduct) {
    return res.status(404).send("User not found");
  }

  product[id] = req.body;

  res.json(product);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  const selectedProduct = product[id];

  if (!selectedProduct) {
    return res.status(404).send("User not found");
  }

  product.splice(id, 1);

  res.json(product);
});

module.exports = router;
