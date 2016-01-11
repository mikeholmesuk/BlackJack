var joi = require('joi');

var joiCardSchema = joi.object({
    suit: joi.string(),
    value: joi.string().min(1).required()
})

module.exports = joiCardSchema;
