const Config = (app) => {
  const express = require("express");
  const morgan = require("morgan");
  const cors = require("cors");
  const { dbConnect } = require("./dbConnect");

  dbConnect();
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan("dev"));
};

module.exports = { Config };
