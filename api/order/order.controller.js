'use strict';
var Order = require('../../models/Order');

module.exports = {
	createOrder: createOrder,
	savePayment:savePayment
};

function createOrder(req, res) {
	var order = new Order.model({
		email: req.body.email,
		name: req.body.name,
		surname: req.body.surname,
		address: req.body.address,
	});

	order.save()
		.then(function(newOrder) {
			res.json(newOrder);
			return;
		})
		.catch(function(err) {
			res.status(500).send(err);
			return;
		});
}

function savePayment(req, res) {

	console.log(req.body.id);
	console.log(req.body.paymentInfo);

	Order.model.findById(req.body.id)
		.then(function(order) {
			order.payment = req.body.paymentInfo;
			return order.save();
		})
		.then(function(savedOrder) {
			res.json(savedOrder);
			return;
		})
		.catch(function(err) {
			res.status(500).send(err);
			return;
		});
}