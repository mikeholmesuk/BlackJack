var GameService = {};
var Promise = require('bluebird');
var Game = require('../models/Game');
var moment = require('moment');

GameService.list = function (query, fields, options) {
    return Game.findAsync(query, fields, options);
}

GameService.findGameById = function(_id, fields) {
    var query = {};
    query._id = _id;

    return Game.findOneAsync(query, fields, {});
}

GameService.createNewGame = function() {
    var data = {};
    // Init game data
    data.started = moment().toDate();
    data.game_deck = [];
    data.game_deck.push({suit: 'Hearts', name: '5', value: 5});
    data.dealer = {hand: []};

    return new Game(data).saveAsync()
        .spread(function(savedGame, numberAffected) {
            return Promise.resolve(savedGame);
        })
}

GameService.deleteById = function(_id) {
    var query = {};
    query._id = _id;

    return Game.removeAsync(query);
}

GameService.hasCard = function(_id) {
    // Returns a boolean indicating whether there are more cards to draw
    console.log('trying to find deck count');

    Game.aggregateAsync([{$match: {_id: _id}}, {$project: {game_deck: {$size: '$game_deck'}}}])
    .then(function(res) {
        console.log('logging: ', res);
    })

    return Game.aggregateAsync([{$match: {_id: _id}}, {$project: {game_deck: {$size: '$game_deck'}}}]);
}

GameService.drawCard = function(_id) {
    // Returns the result of drawing a card for the current game

}

GameService.addPlayerToGame = function(gameId, playerId) {
    // Add the player id to the game

    return Game.findByIdAndUpdate(gameId, {});
}

GameService.shufflePack = function(pack) {
    // Shuffle the pack using the Fisher-Yates technique
    var i = 0;
    var j = 0;
    var temp = null;

    for (i = pack.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = pack[i]
        pack[i] = pack[j]
        pack[j] = temp
    }

    return pack;
}

module.exports = GameService;
