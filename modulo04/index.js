const express = require("express");
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Guia",
        inscritos: 8000,
        msg: exibirMsg
    });
})

app.listen(8080, () => {
    console.log("App rodando");});
