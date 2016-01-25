var cardService = require('../lib/api/services/CardService.js');
var Promise = require('bluebird');

var suits = ['HEARTS', 'CLUBS', 'DIAMONDS', 'SPADES'];
var cards = [{name: 'A', value: '1'}, {name: '2', value: '2'},
            {name: '3', value: '3'}, {name: '4', value: '4'},
            {name: '5', value: '5'}, {name: '6', value: '6'},
            {name: '7', value: '7'}, {name: '8', value: '8'},
            {name: '9', value: '9'}, {name: '10', value: '10'},
            {name: 'J', value: '10'}, {name: 'Q', value: '10'},
            {name: 'K', value: '10'}];

console.log('Importing initial cards into database...');

Promise.each(suits, function(suit) {
    return Promise.map(cards, function(card) {
        card.suit = suit;

        return cardService.findCard(card)
        .then(function(result) {
            if (! result[0]) {
                return cardService.create(card);
            }
            else {
                return Promise.resolve();
            }
        })

    })
})
.finally(function() {
    console.log('Finished importing cards');
    process.exit();
})
