var nconf = require('nconf')

module.exports = nconf
                .env({separator:'__'})
                .file(__dirname + '/config.json')
