"use strict";

const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, "Public");
const pathOfTemp = path.join(__dirname, "Public/Templates");

app.use(express.static(staticPath));
app.set("view engine", "hbs");
hbs.registerPartials(pathOfTemp);

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/weather", (req, res) => {
    res.render("weather");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("*", (req, res) => {
    res.statusCode = 404;
    res.render("404");
})

app.listen(port, () => {
    console.log("Server is running on port ", port);
});