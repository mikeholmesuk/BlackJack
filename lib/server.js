var express = require('express');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

var app = express();

var config = require('./config.js');

app.get('/', function(req, res, next) {
    console.log('Hitting endpoint');
    res.status(200).send('Hello world');
})

app.listen(8080, function () {
    fs.readFileAsync(__dirname + '/banner.txt', 'utf8')
    .then(function(banner) {
        return console.log(banner);
    })
    .catch(function(err) {
        return console.error(err);
    })
    .finally(function() {
        return console.log('server started on port', { port: 8080 });
    })
});
