const superagent = require('superagent');
const supercop = require('supercop.js');
const idx = require('./index');
const path = '/account/tx_history';
const psk = 'ec83508fb19d3f60e05cefbe5c7a3fd38ea697a9d0c37c2f09b784833e950364206543ec3a9726186e3d8b83e0961557fbe1cf533bc5827cec87c217a93fb324';
const pbk = '206543ec3a9726186e3d8b83e0961557fbe1cf533bc5827cec87c217a93fb324';
const params = {
    "coin": "",
    "side": "deposit",
    "address": "",
    "max_id": "",
    "limit": "50",
    "begin_time": ""
};
let res = idx.sign('GET', path, psk, params);
console.log(res);
superagent
    .get('http://127.0.0.1:8777/client/v0' + path + '?' + res.query)
    .set({
        'API-NONCE': res.ts,
        'API-KEY': pbk,
        'API-SIGNATURE': res.sig
    })
    .query()
    .end((err, res) => {
        console.log(res.text);
    });