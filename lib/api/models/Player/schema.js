var joi = require('joi');

var joiPlayerSchema = joi.object({
    firstname: joi.string().min(1).required(),
    lastname: joi.string().min(1).required(),
    username: joi.string().min(3).required()
});

module.exports = joiPlayerSchema;
