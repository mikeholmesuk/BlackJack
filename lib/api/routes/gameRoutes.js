var express = require('express');
var router = express.Router();
var gameDataService = require('../services/data/GameDataService.js');

router.get('/', function(req, res, next) {
    // Return list of games
    res.status(200).send({msg: 'get /'});
})

router.get('/:_id', function(req, res, next) {
    // Return a specific game
    res.status(200).send({msg: 'get /:_id'});
})

router.post('/', function(req, res, next) {
    // Create a new game (may not allow)
    res.status(200).send({msg: 'post /'});
})

router.delete('/:_id', function(req, res, next) {
    // Delete a given game (may not allow)
    res.status(200).send({msg: 'delete /'});
})

module.exports = router;
