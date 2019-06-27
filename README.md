# api-sdk
> ed25519 check for api key and signature certification for Treasurebox

#### Install
- npm i treasurebox.js

#### Usage
```js
// Example
const sdk = require('treasurebox.js');
const path = '/account/tx_history';
const psk = 'xxx';
const pbk = 'xxx';
const params = {
    "coin": "",
    "side": "deposit",
    "address": "",
    "max_id": "",
    "limit": "50",
    "begin_time": ""
};
let res = sdk.sign('GET', path, psk, params);
console.log(res);

// Output
{
    sig: '9a9fd5afce18347c48d640992d125b63e4cd7a837d9d647c13e1104b496799f980d2c2c82a78d4fb245cf76d22267e770a30c53029331de023c62d8e13e9740b',
    ts: 1561602428,
    query: 'address=&begin_time=&coin=&limit=50&max_id=&side=deposit'
}
```