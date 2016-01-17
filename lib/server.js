var express = require('express');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var pjson = require('../package.json');
var bodyParser = require('body-parser');

var app = express();

var config = require('./config.js');

// App root shows basic project information
app.get('/', function(req, res, next) {
    res.status(200).send({
        app_name: pjson.name,
        app_version: pjson.version,
        app_description: pjson.description,
        app_author: pjson.author
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// API routes
app.use('/api', require('./api/index.js'));

app.listen(config.get('server_port'), function () {
    fs.readFileAsync(__dirname + '/banner.txt', 'utf8')
    .then(function(banner) {
        return console.log(banner);
    })
    .catch(function(err) {
        return console.error(err);
    })
    .finally(function() {
        return console.log('server started on port', { port: config.get('server_port') });
    })
});

// Test init
var suits = ['HEARTS', 'CLUBS', 'DIAMONDS', 'SPADES'];
var cards = [{name: 'A', value: '1'}, {name: '2', value: '2'}, {name: '3', value: '3'}, {name: '4', value: '4'}, {name: '5', value: '5'}, {name: '6', value: '6'},
            {name: '7', value: '7'}, {name: '8', value: '8'}, {name: '9', value: '9'}, {name: '10', value: '10'}, {name: 'J', value: '10'}, {name: 'Q', value: '10'}, {name: 'K', value: '10'}]

var cardService = require('./api/services/CardService.js');

suits.forEach(function(suit) {
    cards.forEach(function(card) {
        card.suit = suit;
        cardService.create(card)
        .then(function(saved) {
            console.log('saved:', saved);
        })
    })
})
