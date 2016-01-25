var router = require('express').Router();

router.use('/card', require('./routes/cardRoutes.js'));
router.use('/game', require('./routes/gameRoutes.js'));
router.use('/player', require('./routes/playerRoutes.js'));

module.exports = router;
