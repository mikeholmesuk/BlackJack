var GameDataService = {};
var Promise = require('bluebird');
var Game = require('../../models/Game');
var moment = require('moment');

GameDataService.list = function (query, fields, options) {
    return Game.findAsync(query, fields, options);
}

GameDataService.findGameById = function(_id, fields) {
    var query = {};
    query._id = _id;

    return Game.findOneAsync(query, fields, {});
}

GameDataService.createNewGame = function() {
    var data = {};
    // Init game data
    data.started = moment().toDate();
    data.game_deck = [];
    data.dealer = {hand: [], score: 0};
    data.player = {hand: [], score: 0};

    console.log('DATA:', data);

    return new Game(data).saveAsync()
        .spread(function(savedGame, numberAffected) {
            return Promise.resolve(savedGame);
        })
}

GameDataService.updateById = function(_id, data) {

    return Game.findByIdAndUpdateAsync(_id,{$set:data})
        .then(function(savedGame) {
            return Game.findOneAsync(savedGame[0]._id);
        })
}

GameDataService.deleteById = function(_id) {
    var query = {};
    query._id = _id;

    return Game.removeAsync(query);
}

GameDataService.hasCard = function(_id) {
    // Returns a boolean indicating whether there are more cards to draw
    console.log('trying to find deck count');

    Game.aggregateAsync([{$match: {_id: _id}}, {$project: {game_deck: {$size: 'game_deck'}}}])
    .then(function(res) {
        console.log('logging: ', res);
    })

    return Game.aggregateAsync([{$match: {_id: _id}}, {$project: {game_deck: {$size: '$game_deck'}}}]);
}

GameDataService.drawCard = function() {
    // Returns the result of drawing a card for the current game

}

module.exports = GameDataService;
