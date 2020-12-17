const fs = require('fs');
const { exit } = require('process');

fs.exists('nodeserver.js', (exists) =>{
    console.log("have file nodeserver.js?");
});
console.log('Yep...');
//fs.rename('nodeserver.js', 'tmp.js');
//fs.rm('tmp.js');
