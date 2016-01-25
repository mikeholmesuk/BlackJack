var express = require('express');
var router = express.Router();
var cardDataService = require('../services/data/CardDataService.js');

router.get('/', function(req, res, next) {
    // Get all cards, or filter by query params
    var query = req.query.q ? JSON.parse(req.query.q) : {};
    console.log('query params', query);

    // res.status(200).send({msg: 'get card /', cards: cardService.findCard(query, {})});
    cardDataService.list(query, {})
    .then(function(result) {
        res.status(200).send({msg: 'get card', cards: result});
    })
})

module.exports = router;
