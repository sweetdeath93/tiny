'use strict'

var https = require('https');

module.exports = function tiny(options) {
    const agent = new https.Agent(options);
    return agent;
};