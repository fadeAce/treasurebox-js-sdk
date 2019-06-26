const ed25519 = require('tweetnacl');
const qs = require('querystring');

/**
 * sign request params
 * @param {string} method 
 * @param {string} path 
 * @param {string} privateKey 
 * @param {string} publicKey 
 * @param {object} params 
 */
function sign(method, path, privateKey, params) {
    method = method.toUpperCase();
    let keys = Object.keys(params).sort((a, b) => {
        if (a > b) return 1;
        else if (a === b) return 0;
        else return -1;
    });
    let data = {};
    keys.forEach(k => {
        data[k] = params[k];
    });
    let ts = parseInt(Date.now() / 1000);
    let query = qs.stringify(data);
    let msg = `${method}|${path}|${ts}|${query}`;

    let pri = Buffer.from(privateKey, 'hex');
    let sig = Buffer.from(ed25519.sign(Buffer.from(msg), pri)).toString('hex').substr(0, 128);
    return {
        sig: sig,
        ts: ts,
        query: query,
    };
}

module.exports = {
    sign,
}