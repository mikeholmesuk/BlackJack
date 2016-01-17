var mongoose = require('../../../mongoDB.js');
var Promise = require('bluebird');
var joigoose = require('joigoose')(mongoose);
var schema = require('./schema.js');
var Game = mongoose.model('Game', joigoose.convert(schema));
Promise.promisifyAll(Game, {multiArgs: true});
Promise.promisifyAll(Game.prototype, {multiArgs: true});

module.exports = Game;
