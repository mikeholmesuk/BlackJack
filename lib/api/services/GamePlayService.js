var GamePlayService = {};
var Promise = require('bluebird');
var gameDataService = require('./data/GameDataService.js');
var cardDataService = require('./data/cardDataService.js');

GamePlayService.init = function() {
    // create a game
    // Retrieve the cards
    // Shuffle the pack
    // Allocate 2 cards to player
    // Allocate 2 cards to the dealer
    // push back the initial game
    return gameDataService.createNewGame()
    .then(function(result) {
        return [cardDataService.list(), Promise.resolve(result)]
    }).spread(function(allCards, game) {
        return [GamePlayService.shufflePack(allCards[0]), Promise.resolve(game)];
    }).spread(function(shuffledCards, game) {
        return gameDataService.updateById(game._id, {game_deck: shuffledCards});
    })
    // .then(function(game) {
    //     // Allocate player cards
    //     return Promise.all([gameDataService.drawCard(), gameDataService.drawCard()])
    //         .then(function(result) {
    //             console.log('players cards: ', result);
    //             return gameDataService.updateById(game._id, {player.hand: result})
    //         })
    // }).then(function(game) {
    //     // Allocate dealer cards
    //     return Promise.all([gameDataService.drawCard(), gameDataService.drawCard()])
    //         .then(function(result) {
    //             console.log('dealer cards: ', result);
    //             return gameDataService.updateById(game._id, {dealer.hand: result});
    //         })
    // })
}

GamePlayService.shufflePack = function(pack) {
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

    return Promise.resolve(pack);
}

module.exports = GamePlayService;
