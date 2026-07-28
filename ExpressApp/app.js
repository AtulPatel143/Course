const express = require("express");
const app = express();

const users = [];

app.use(express.json()); // JSON data पढ़ने के लिए
app.use(express.urlencoded({ extended: true })); // Form data पढ़ने के लिए

// ==================== CREATE ====================

app.post("/submit", (req, res) => {
  console.log(req.body); // Client द्वारा भेजा गया data देखना

  users.push(req.body); // नया user array में जोड़ना

  console.log(users); // Updated users array देखना

  res.send("Data Received"); // Client को success response भेजना
});

// ===================== READ ALL =====================

app.get("/users", (req, res) => {
  res.send(users); // सभी users भेजना
});

// ===================== READ ONE =====================

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id); // URL से user की id लेना

  const user = users[id]; // Check करना कि user मौजूद है या नहीं

  if (!user) {
    // अगर user नहीं मिला
    return res.status(404).send("User not found"); // 404 भेजकर function यहीं रोक दो
  }

  res.send(user); // Requested user भेजना
});

// ===================== UPDATE =====================

app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id); // किस user को update करना है

  const user = users[id]; // Check करना कि user मौजूद है या नहीं

  if (!user) {
    // अगर user नहीं मिला
    return res.status(404).send("User not found"); // 404 भेजकर function यहीं रोक दो
  }

  const newUser = req.body; // Client से नया data लेना

  users[id] = newUser; // पुराने user की जगह नया data रखना

  res.send("User Updated Successfully"); // Client को success response भेजना
});

// ===================== DELETE =====================

app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id); // किस user को delete करना है

  const user = users[id]; // Check करना कि user मौजूद है या नहीं

  if (!user) {
    // अगर user नहीं मिला
    return res.status(404).send("User not found"); // 404 भेजकर function यहीं रोक दो
  }

  users.splice(id, 1); // Array से उस user को delete करना

  res.send("User Deleted Successfully"); // Client को success response भेजना
});

// ===================== OTHER ROUTES =====================

app.get("/", (req, res) => {
  res.send("Hello World"); // Home page response भेजना
});

app.get("/about", (req, res) => {
  res.json({
    message: "Welcome to About Page",
  }); // JSON response भेजना
});

app.get("/ping", (req, res) => {
  res.json({
    message: "Hello World",
    name: req.query.name,
  }); // Query parameter के साथ JSON भेजना
});

app.get("/contact", (req, res) => {
  res.send("Welcome to Contact Page"); // Contact page response भेजना
});

app.get("/user/:name", (req, res) => {
  console.log(req.params.name); // URL से name पढ़ना

  res.send(`Welcome ${req.params.name}`); // Name के साथ response भेजना
});

app.get("/user/:name/:age", (req, res) => {
  console.log(req.params.name); // URL से name पढ़ना

  console.log(req.params.age); // URL से age पढ़ना

  res.send(`Welcome ${req.params.name}, your age is ${req.params.age}`); // Name और age के साथ response भेजना
});

app.get("/search", (req, res) => {
  console.log(req.query); // सभी query parameters देखना

  console.log(req.query.name); // name query पढ़ना

  console.log(req.query.age); // age query पढ़ना

  res.send(`Searching for ${req.query.name}, Age: ${req.query.age}`); // Search result भेजना
});

app.get("/status", (req, res) => {
  res.status(200); // Status code 200 सेट करना

  res.send("Status is OK"); // Success response भेजना
});

app.listen(3000, () => {
  console.log("Server is running on port 3000"); // Server start होने पर message दिखाना
});
