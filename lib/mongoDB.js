var config = require('./config.js');
var Promise = require('bluebird');
var mongoose = require('mongoose');
var mongoConnection = mongoose.createConnection(config.get('mongodb_url'));
Promise.promisifyAll(mongoConnection);

module.exports = mongoConnection;
