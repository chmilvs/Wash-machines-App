const mongoose = require("mongoose");

const ModelWm = mongoose.model("ModelWm", {
  model: { type: String, required: true, unique: true },
  instances: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WashMachine' }]
});

module.exports = ModelWm;
