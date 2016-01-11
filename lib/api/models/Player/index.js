var mongoose = require('../../MongoDB.js');
var Promise = require('bluebird');
var joigoose = require('joigoose')(mongoose);
var schema = require('./schema.js');
var Player = mongoose.model('Player', joigoose.convert(schema));
Promise.promisifyAll(Player);
Promise.promisifyAll(Player.prototype);

module.exports = Player;
