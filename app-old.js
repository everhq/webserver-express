const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'aplication/json' });

        let salida = {
            nombre: 'ever',
            edad: '28',
            url: req.url
        }

        res.write(JSON.stringify(salida));
        //res.write('hola mundo');
        res.end();
    })
    .listen(3000);

console.log('escuchando del puerto 3000');