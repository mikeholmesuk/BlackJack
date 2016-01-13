var express = require('express');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var pjson = require('../package.json');
var bodyParser = require('body-parser');

var app = express();

var config = require('./config.js');

// App root shows basic project information
app.get('/', function(req, res, next) {
    res.status(200).send({
        app_name: pjson.name,
        app_version: pjson.version,
        app_description: pjson.description,
        app_author: pjson.author
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// API routes
app.use('/api', require('./api/index.js'));

app.listen(config.get('server_port'), function () {
    fs.readFileAsync(__dirname + '/banner.txt', 'utf8')
    .then(function(banner) {
        return console.log(banner);
    })
    .catch(function(err) {
        return console.error(err);
    })
    .finally(function() {
        return console.log('server started on port', { port: config.get('server_port') });
    })
});
