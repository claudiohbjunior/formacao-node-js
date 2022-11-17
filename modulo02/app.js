var http = require("http");

http.createServer(function(requisicao, resposta) {
    resposta.end("<p>Bem vindo ao meu site</p><br><h4>Teste concluído</h4>")
}).listen(3000);
console.log("Meu servidor está rodando")