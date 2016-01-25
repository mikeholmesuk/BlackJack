var PlayerDataService = {};
var Promise = require('bluebird');
var Player = require('../../models/Player');

PlayerDataService.list = function(query, fields, options) {

    return Player.findAsync(query, fields, options);
}

PlayerDataService.findPlayerByUsername = function(username, fields) {
    var query = {};
    query.username = username;

    return Player.findOneAsync(query, fields, {});
}

PlayerDataService.create = function(data) {
    return new Player(data).saveAsync()
        .spread(function(savedPlayer, numberAffected) {
            return Promise.resolve(savedPlayer);
        })
}

PlayerDataService.deleteById = function(_id) {
    var query = {};
    query._id = _id;

    return Player.removeAsync(query);
}

module.exports = PlayerDataService;
