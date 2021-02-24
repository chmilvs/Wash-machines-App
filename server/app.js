const express = require("express");
const { Config } = require("./middlewares/index");
const mainRouter = require("./routers/main");

const app = express();
Config(app);
app.use("/washmachines", mainRouter);

module.exports = app;
