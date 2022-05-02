var config = require('./app/config/config');
var mongoose = require('./app/config/mongoose');
var express = require('./app/config/express');

var db = mongoose();
var app = express();

var http = require('http').createServer(app);

// app.get('/', (req, res) => {
//     res.send("Welcome to Gobbly");
// })

// TODO: Starting the server
http.listen(config.PORT);
console.log('App running at http://' + config.HOST + ':' + config.PORT + '/');
