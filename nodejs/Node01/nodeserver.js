const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<html>
        <head>
        </head>
        <body>
            <h1>Sawaddee kub tai sa ma chik</h1>
            <span> testing </span>
        </body>
        </html>
        `);
    res.end();
}).listen(1111);
console.log('one');
console.log('two');
console.log('three');