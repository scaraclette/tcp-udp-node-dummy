var net = require('net');

var host_name = 'www.example.com';
var web_request = `GET / HTTP/1.1\nHost: ${host_name}\nConnection: close\r\n\r\n`;

var client = new net.Socket();
// client.connect(80, host, () => {
//     console.log('Connected');
//     client.write(web_request);
// });

client.connect({
    port: 80,
    host: host_name, 
    onread: {
        buffer: Buffer.alloc(10),
        callback: (nread, buf) => {
            console.log(buf.toString('utf8', 0, nread));
            // console.log('hello');
            return false;
        }
    }
}, () => {
    console.log('Connected');
    client.write(web_request);
    client.bytesRead()
});

// net.connect({
//     port: 80,
//     onread: {
//       // Reuses a 4KiB Buffer for every read from the socket.
//       buffer: Buffer.alloc(4 * 1024),
//       callback: function(nread, buf) {
//         // Received data is available in `buf` from 0 to `nread`.
//         console.log(buf.toString('utf8', 0, nread));
//       }
//     }
//   });
// Allocate safe buffer


// Data event emitter to receive buffer
const buf = Buffer.alloc(10);
client.on('data', (buf) => {
    // var buf1 = Buffer.alloc(10);
    
    // // Create stream object
    // var stream_buf = new BufferStream(buf1);
    // stream_buf.pipe(data);

    // console.log(stream_buf);
    console.log(buf.length);
    console.log('newbuf');
    client.end();
});

client.on('close', () => {
    console.log('Connection closed!');
})