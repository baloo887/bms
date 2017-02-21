'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var orderSchema = new Schema({
	email: String,
	name: String,
	surname: String,
	address: String,
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