var net = require('net');

var host_name = 'www.example.com';
var web_request = `GET / HTTP/1.1\nHost: ${host_name}\nConnection: close\r\n\r\n`;

var client = new net.Socket();
client.connect({
    port: 80,
    host: host_name, 
}, () => {
    console.log('Connected');
    client.write(web_request);
});


// Data event emitter to receive buffer
client.on('data', (buf) => {
    console.log(buf.toString());
    client.end();
});

client.on('close', () => {
    console.log('Connection closed!');
})