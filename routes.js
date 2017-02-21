'use strict';

module.exports = function(app) {
  app.use('/api/order', require('./api/order'));
};