const http = require('http');
http.createServer((req, res) => {
    console.log('request agin!!')
    res.write('sawaddeee kub');
    res.end();
}).listen(1111);
console.log('one');
console.log('two');
console.log('three');