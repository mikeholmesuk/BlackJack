var mongoose = require('../../../mongoDB.js');
var Promise = require('bluebird');
var joigoose = require('joigoose')(mongoose);
var schema = require('./schema.js');
var Player = mongoose.model('Player', joigoose.convert(schema));
Promise.promisifyAll(Player, {multiArgs: true});
Promise.promisifyAll(Player.prototype, {multiArgs: true});

module.exports = Player;
