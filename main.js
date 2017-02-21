'use strict';

var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var mongoose = require('mongoose');
var config = require('./config/config');
var expressConfig = require('./config/express');

expressConfig.conf(app);

//create database connection
if (!(mongoose.connection.readyState)) {
  mongoose.connect(config.dbConfig.mongodbUrl);
}

server.listen(config.expressConfig.port, config.expressConfig.ip, function() {
	console.log('Express server listening on %d', config.expressConfig.port);
});

app.use('/dist', express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile('/dist/index.html', {
      root: './'
    });
});

require('./routes')(app);

module.exports = {
  app: app
};