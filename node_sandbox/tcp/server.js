/**
 * TCP open connection!
 */

const net = require('net');

// Callback every connection
const server = net.createServer(conn => {
    console.log('new client');

    // when data is received
    conn.on('data', data => {
        console.log('received data. Sending back to client.');
        conn.write(data + '\r\n');
    });

    // Called when connection is closed
    conn.on('end', () => {
        console.log('client left');
    });
});

server.listen(9090);