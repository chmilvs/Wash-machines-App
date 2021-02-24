const mongoose = require("mongoose");

const WashMachine = mongoose.model("WashMachine", {
  isTurnedOn: { type: Boolean, default: false },
});

module.exports = WashMachine;
