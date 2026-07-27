const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  res.send("Welcome to About Page");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to Contact Page");
});

app.get("/user/:name", (req, res) => {
  // console.log(req.params);
  console.log(req.params.name);
  res.send(`Welcome ${req.params.name}`);
});

app.get("/user/:name/:age", (req, res) => {
  console.log(req.params.name);
  console.log(req.params.age);
  res.send(`Welcome ${req.params.name}, your age is ${req.params.age}`);
});

app.get("/search", (req, res) => {
  console.log(req.query);
  console.log(req.query.name);
  console.log(req.query.age);

  res.send(`Searching for ${req.query.name}, Age: ${req.query.age}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
