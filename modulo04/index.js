const express = require("express");
const app = express();
const ejs = require('ejs');
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
});

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Form recebido! titulo " + titulo + " " + " descricao " + descricao)
});

app.listen(8080, () => {console.log("App rodando");});
