var CardDataService = {};
var Promise = require('bluebird');
var Card = require('../../models/Card');

CardDataService.list = function(query, fields, options) {
    return Card.findAsync(query, fields, options);
}

CardDataService.findCard = function(query, fields) {
    return Card.findOneAsync(query, fields, {});
}

CardDataService.create = function(data) {
    return new Card(data).saveAsync()
        .spread(function(savedCard, numberAffected) {
            return Promise.resolve(savedCard);
        })
}

module.exports = CardDataService;
