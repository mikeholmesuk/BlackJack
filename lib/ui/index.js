var router = require('express').Router();
var Promise = require('bluebird');
var gamedataService = require('../api/services/data/GameDataService.js');
var playerDataService = require('../api/services/data/PlayerDataService.js');

// router.get('/', function(req, res, next) {
//     console.log('rendering dashboard');
//
//     Promise.all([gamedataService.list(), playerDataService.list()])
//     .spread(function(games, players) {
//         res.render('dashboard', {
//             games: games[0],
//             players: players[0]
//         });
//     })
//     .catch(function(err) {
//         console.error('error: ', err);
//         res.status(500).send('Error caught generating dashboard');
//     });
// });

router.use('/game', require('./routes/gameRoutes.js'));

module.exports = router;
