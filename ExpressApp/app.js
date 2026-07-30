const express = require("express");
const app = express();

const userRouter = require("./routes/user");
const productRouter = require("./routes/product");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});