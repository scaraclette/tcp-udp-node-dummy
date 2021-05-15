// Simple Http Server

const http = require('http');

const hostname = '127.0.0.1';
const port = '12345';

const server = http.createServer((req, res) => {
    // req: a request object (http.IncomingMessage object)
    // Print request object
    // console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


