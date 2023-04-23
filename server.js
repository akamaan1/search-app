const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Connect to the MongoDB database
mongoose.connect("mongodb://localhost:27017/search-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to the database");
});

// Set up the middleware
app.use(cors());
app.use(express.json());

// Set up the routes
app.get("/api/ads", async (req, res) => {
  const { keyword } = req.query;

  // TODO: Implement the search logic

  res.send([]);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
