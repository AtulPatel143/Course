const express = require("express");
const app = express();
const port = 3000;
const users = [
  {
    name: "john_doe",
    image: "https://picsum.photos/500/350",
    caption: "Beautiful sunset 🌅",
  },

  {
    name: "alex",
    image: "https://picsum.photos/500/351",
    caption: "Weekend vibes ❤️",
  },
];

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/posts", (req, res) => {
  res.render("index", {
    title: "Instagram Project",
    users,
  });
});

app.get("/post/:id", (req, res) => {
  const id = req.params.id - 1;

  const user = users[id];

  if (!user) {
    return res.send("Post Not Found");
  }

  res.render("post", {
    user,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
