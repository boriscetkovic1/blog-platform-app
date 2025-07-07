const express = require("express");
const mongoose = require("mongoose");
const connectDatabase = require("./config/db");
const log = require("./middlewares/log");

const app = express();

connectDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(log);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

module.exports = app;
