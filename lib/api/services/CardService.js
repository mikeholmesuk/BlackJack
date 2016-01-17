var CardService = {};
var Promise = require('bluebird');
var Card = require('../models/Card');

CardService.list = function(query, fields, options) {
    return Card.findAsync(query, fields, options);
}

CardService.findCard = function(query, fields) {
    return Card.findOneAsync(query, fields, {});
}

CardService.create = function(data) {
    return new Card(data).saveAsync()
        .spread(function(savedCard, numberAffected) {
            return Promise.resolve(savedCard);
        })
}

module.exports = CardService;
