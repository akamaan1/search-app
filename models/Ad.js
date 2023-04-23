const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
  companyName: String,
  primaryText: String,
  headline: String,
  description: String,
});

module.exports = mongoose.model("Ad", adSchema);
