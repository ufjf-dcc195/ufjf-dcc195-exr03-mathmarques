var http = require('http');
var url = require("url");
var queryString = require("querystring");

function start(router, handlers) {

    http.createServer(function (request, response) {
        var urlParsed =  url.parse(request.url, true);

        console.log('Requisição recebida em ' + (new Date()) + ' no caminho ' + urlParsed.pathname );
        router.route(urlParsed.pathname, handlers, request, response);

    }).listen(8888);

    console.log('Servidor rodando em http://localhost:8888/');
}

module.exports.start = start;