var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);

    socket.write('Echo server 2\r\n');
    socket.pipe(socket);
});

// server.on('listening', function())

server.listen(12345, '127.0.0.1');