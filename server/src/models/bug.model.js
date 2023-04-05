const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema({
  containerId: { type: String, required: false },
  bugs: { type: Array, required: false },
});

const Bug = mongoose.model("bug", bugSchema);

module.exports = Bug;
