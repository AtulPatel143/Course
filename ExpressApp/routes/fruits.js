const express = require("express");
const { getFruits } = require("../controllers/fruitsController");
const router = express.Router();

router.get("/", getFruits);


module.exports = router;
