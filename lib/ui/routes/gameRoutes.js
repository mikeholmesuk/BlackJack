var express = require('express');
var router = express.Router();
var gamePlayService = require('../../api/services/GamePlayService.js');


router.get('/', function(req, res, next) {
    console.log('Starting new game...');

    gamePlayService.init()
    .then(function(game) {
        console.log('game is :', game[0]);
        res.render('gameboard', {game: game[0]});
    })
    .catch(function(err) {
        console.error('error: ', err);
    });
})

module.exports = router;
