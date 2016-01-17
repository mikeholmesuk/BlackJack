var joi = require('joi');

var joiCardSchema = joi.object({
    suit: joi.string(),
    name: joi.string().min(1).required(),
    value: joi.string().min(1).required()
})

module.exports = joiCardSchema;
