var mongoose = require('../../../mongoDB.js');
var Promise = require('bluebird');
var joigoose = require('joigoose')(mongoose);
var schema = require('./schema.js');
var Card = mongoose.model('Card', joigoose.convert(schema));
Promise.promisifyAll(Card, {multiArgs: true});
Promise.promisifyAll(Card.prototype, {multiArgs: true});

module.exports = Card;
