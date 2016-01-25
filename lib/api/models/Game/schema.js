var joi = require('joi');

var cardSchema = require('../Card/schema.js');

var playerSchema = joi.object({
    player_id: joi.string().required(),
    hand: joi.array().max(5)
});

var joiGameSchema = joi.object({
    started: joi.date(),
    game_deck: joi.array().max(52),
    dealer: joi.object({hand: joi.array().max(5), score: joi.number().integer()}).required(),
    player: joi.object({hand: joi.array().max(5), score: joi.number().integer()}).required()
    // status: joi.string().valid('STARTED', 'FINISHED', 'IN_PLAY'),
    // dealer: joi.object().required(),
    // players: joi.array().max(5)
})

module.exports = joiGameSchema;
