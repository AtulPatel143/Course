const express = require("express");
const app = express();
app.use(express.static("public"));


const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const fruitRouter = require("./routes/fruits");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use((req, res, next) => {
  if (req.query.admin !== "yes") {
    return res.status(403).send("Access denied");
  }
  next();
});

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/fruits", fruitRouter);
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
