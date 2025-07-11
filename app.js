const express = require("express");
const mongoose = require("mongoose");
const connectDatabase = require("./config/db");

const app = express();

connectDatabase();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

module.exports = app;
