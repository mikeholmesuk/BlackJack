var nconf = require('nconf')

module.exports = nconf
                .argv()
                .env({separator:'__'})
                .file('./lib/config.json')
