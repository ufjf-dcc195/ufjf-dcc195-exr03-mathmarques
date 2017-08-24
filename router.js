var qs = require('querystring');

function route(pathname, handlers, request, response) {
    console.log('Roteado: '+ pathname);
    if(handlers[pathname]) {
        if (request.method === 'POST') {
            var body = '';

            request.on('data', function (data) {
                body += data;
            });

            request.on('end', function () {
                request.post = qs.parse(body);
                handlers[pathname](request, response);
            });
        } else
            handlers[pathname](request, response);
    } else {
        console.log("Requisição inválida em " + pathname);
        handlers['/notfound'](request, response);
    }
}

exports.route = route;