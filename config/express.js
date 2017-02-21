'use strict';

var bodyParser = require('body-parser');
var config = require('./config');

module.exports = {
  conf: function(app) {

    app.use(bodyParser.urlencoded({
      extended: false
    }));
    var options = {
      type: 'application/json',
      limit: 1024 * 1024 * 20
    };
    app.use(bodyParser.json(options));
  }
};