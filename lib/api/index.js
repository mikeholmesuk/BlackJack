var router = require('express').Router();

router.use('/player', require('./routes/playerRoutes.js'));

module.exports = router;
