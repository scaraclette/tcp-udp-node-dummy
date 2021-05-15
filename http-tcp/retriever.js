var net = require('net');

var host_name = 'www.google.com';
var web_request = `GET / HTTP/1.1\nHost: ${host_name}\nConnection: close\r\n\r\n`;

var client = new net.Socket();
// client.connect({
//     port: 80,
//     host: host_name, 
// }, () => {
//     console.log('Connected');
    // client.write(web_request);
// });

// client.connect(12345, '127.0.0.1', () => {
//     console.log('Connected');
// 	client.write('Hello, server! Love, Client.');
// })


net.connect({
  port: 12345,
  host: '127.0.0.1',
  onread: {
    // Reuses a 4KiB Buffer for every read from the socket.
    buffer: Buffer.alloc(10),
    callback: function(nread, buf) {
      // Received data is available in `buf` from 0 to `nread`.
      console.log(nread);
      console.log(buf.toString('utf8', 0, nread));
    }
  }
});


// connect -> optioms

// client.write('hello test')

// Data event emitter to receive buffer
// client.on('data', (buf) => {
//     console.log(buf.toString());
//     // client.end();
// });

// client.on('close', () => {
//     console.log('Connection closed!');
// })