
const http = require('http');

http.createServer((req, res) => {

    // res.writeHead(200, {'Content-Type': 'application/json'});

    // const persona = {
    //     id: 1,
    //     nombre: 'Jonathan'
    // }

    // res.write(JSON.stringify(persona));

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write('Hola mundo');

    res.end();
})
    .listen(8080);

console.log('Escuchando en el puerto 8080');