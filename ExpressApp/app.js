const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("data received");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.json({
    message: "Welcome to About Page",
  });
});

app.get("/ping", (req, res) => {
  res.json({ message: "Hello World", name: req.query.name });
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

app.get("/status", (req, res) => {
  res.status(200);
  res.send("Status is OK");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
