const express = require("express");
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) => {
    res.send("Form recebido!")
});

app.listen(8080, () => {console.log("App rodando");});
