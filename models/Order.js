'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var defaults = require('../config/config').defaults;
mongoose.Promise = global.Promise;

var orderSchema = new Schema({
	email: String,
	name: String,
	surname: String,
	address: String,
	currency:{
		type: String,
		default: defaults.currency
	},
	total:{
		type: Number,
		default: defaults.total
	}
	,
	payment: {
		type: Object,
		default: {}
	},
	processed:{
		type:Boolean,
		default:false
	}
});

var Order = mongoose.model('Order', orderSchema);

module.exports = {
	schema: orderSchema,
	model: Order
};