const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to Contact Page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
