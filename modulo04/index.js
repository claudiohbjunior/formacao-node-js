const express = require("express");
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(8080, () => {
    console.log("App rodando");});
