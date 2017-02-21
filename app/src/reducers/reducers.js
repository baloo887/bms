'use strict';

import {
	BEGIN_TRANSACTION,
	RECEIVE_PAYMENT,
	RECEIVE_ORDER_INFO
} from '../actions/actions.js';

function app(state = {
	page: 'form',
	step: 'begin',
	order: {}
}, action) {
	switch (action.type) {
		case BEGIN_TRANSACTION:
			return Object.assign({}, state, {
				step: 'form',
				order: {
					email: '',
					name: '',
					surname: '',
					address: '',
					payment: {}
				}
			});
		case RECEIVE_ORDER_INFO:
			return Object.assign({}, state, {
				step: 'orderSaved',
				order: action.order
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