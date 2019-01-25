'use strict'


var https = require('https');

// module.exports = function tiny(string) {
//     if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
//     return string.replace(/\s/g, "");
// };

module.exports = function tiny(options) {
    const agent = new https.Agent(options);
    return agent;
};