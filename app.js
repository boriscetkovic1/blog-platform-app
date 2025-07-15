const express = require("express");
const mongoose = require("mongoose");
const connectDatabase = require("./config/db");
const log = require("./middlewares/log");

const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
const tagRoutes = require("./routes/tagRoutes");

const app = express();

connectDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(log);
app.use("/posts", postRoutes);
app.use("/posts", commentRoutes);
app.use("/comments", commentRoutes);
app.use("/tags", tagRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

module.exports = app;
