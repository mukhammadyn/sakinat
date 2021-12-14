const express = require("express");
const path = require("path");
const routes = require("../routes");
const app = express();
const port = 3000;
// view engine setup
app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "ejs");
//setup public folder
app.use(express.static("./../public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes)

module.exports = app;
