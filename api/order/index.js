'use strict';

var express = require('express');
var controller = require('./order.controller');

var router = express.Router();

router.post('/', controller.createOrder);
router.post('/payment', controller.savePayment);

module.exports = router;