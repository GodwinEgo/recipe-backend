const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;
const app = express();
const axios = require("axios");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
