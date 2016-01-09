var express = require('express');

var app = express();

var config = require('./config.js');

app.get('/', function(req, res, next) {
    console.log('Hitting endpoint');
    res.status(200).send('Hello world');
})

app.listen(8080, function () {
    console.log('server started on port', { port: 8080 });
});
