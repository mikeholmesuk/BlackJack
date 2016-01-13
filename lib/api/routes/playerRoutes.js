var express = require('express');
var router = express.Router();
var playerService = require('../services/PlayerService.js');

router.get('/', function(req, res, next) {

    playerService.list()
    .then(function(results) {
        results.length > 0 ? res.status(200).send(results) : res.status(404).send('No players found');
    })
    .catch(function(err) {
        res.status(500).send(err);
    })
})

router.get('/:username', function(req, res, next) {

    playerService.findPlayerByUsername(req.params.username, {})
    .then(function(result) {
        result ? res.status(200).send(result) : res.status(404).send({message: 'Player not found'});
    })
    .catch(function(err) {
        res.status(500).send({message: 'Problem retrieving user [' + req.params.username + ']', error: err});
    })
})

router.post('/', function(req, res, next) {
    var data = req.body;

    playerService.create(data)
    .then(function(result) {
        console.log('Created player...', result);
        res.status(201).send({message: 'Created new player', data: result});
    })
    .catch(function(err) {
        console.error('Error caught: ', err);
        res.status(500).send({data: data, error: err});
    })
})

router.delete('/:_id', function(req, res, next) {

    playerService.deleteById(req.params._id)
    .then(function(result) {
        res.status(204).send({message: 'Deleted Player [' + req.params._id +']'});
    })
    .catch(function(err) {
        console.error('Error: ', err);
        res.status(500).send({message: 'Failed to delete', error: err});
    })
})

module.exports = router;
