'use strict';

import {
	BEGIN_TRANSACTION,
	RECEIVE_PAYMENT,
	RECEIVE_ORDER_INFO,
	SUBMIT_ORDER_ERROR,
	SAVE_PAYMENT_ERROR
} from '../actions/actions.js';

function app(state = {
	page: 'form',
	step: 'form',
	textList: ['cool','nice','blue','nerdy','geeky','juicy', 'carlo'],
	order: {
		email: '',
		name: '',
		surname: '',
		address: '',
		payment: {}
	}
}, action) {
	switch (action.type) {
		case RECEIVE_ORDER_INFO:
			return Object.assign({}, state, {
				step: 'orderSaved',
				order: action.order
			});
		case SUBMIT_ORDER_ERROR:
			return Object.assign({}, state, {
				step: 'form',
				order: action.order,
				error: action.error
			});	
		case SAVE_PAYMENT_ERROR:
			return Object.assign({}, state, {
				step: 'orderSaved',
				order: action.order,
				error: action.error
			});
		case RECEIVE_PAYMENT:
			return Object.assign({}, state, {
				step: 'paymentSaved',
				order: action.order
			});
		default:
			return state;
	}
}

module.exports = {
	app: app
};