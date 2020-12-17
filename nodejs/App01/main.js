const axios = require('axios');
 
axios.get('https://api.exchangeratesapi.io/latest')
    .then( function (res) {
        console.log(`สกุลเงิน ${res.data.base} ต่อหนึ่งบาทเท่ากับ ${res.data.rates.THB}`);
    });