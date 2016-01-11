var mongoose = require('../../MongoDB.js');
var Promise = require('bluebird');
var joigoose = require('joigoose')(mongoose);
var schema = require('./schema.js');
var Card = mongoose.model('Card', joigoose.convert(schema));
Promise.promisifyAll(Card);
Promise.promisifyAll(Card.prototype);

module..exports = Card;
