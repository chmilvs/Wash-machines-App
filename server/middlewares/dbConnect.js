const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose.connect("mongodb://localhost:27017/ApplianceControl", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

module.exports = {dbConnect};
