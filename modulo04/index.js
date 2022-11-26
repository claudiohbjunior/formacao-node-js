const express = require("express");
const app = express();
const ejs = require('ejs');
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta")

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita")
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    Pergunta.findAll({raw: true}).then(perguntas => {
        res.render("index")
    })

    
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar", {
        perguntas: perguntas
    })
});

app.post("/salvarpergunta", (req, res) => {

    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/")
    })
});

app.listen(8080, () => {console.log("App rodando");});
