'use strict';
import {saveOrderInfoAPI, savePaymentInfoAPI} from '../services/apiCalls';

// Actions 

const BEGIN_TRANSACTION = 'BEGIN_TRANSACTION';
const SUBMIT_ORDER_INFO = 'SUBMIT_ORDER_INFO';
const INVALIDATE_ORDER_INFO = 'INVALIDATE_ORDER_INFO';
const SUBMIT_ORDER_ERROR = 'SUBMIT_ORDER_ERROR';
const RECEIVE_ORDER_INFO = 'RECEIVE_ORDER_INFO';
const SUBMIT_PAYMENT = 'SUBMIT_PAYMENT';
const SAVE_PAYMENT_ERROR = 'SAVE_PAYMENT_ERROR';
const SUBMIT_PAYMENT_ERROR = 'SAVE_PAYMENT_ERROR';
const INVALIDATE_PAYMENT = 'INVALIDATE_PAYMENT';
const RECEIVE_PAYMENT = 'RECEIVE_PAYMENT';

// Actions creators

const beginTransaction = () => {
	return {
		type: BEGIN_TRANSACTION
	};
};

const submitNewOrder = (order) => {
	return dispatch => {
		return saveOrderInfoAPI(order)
			.then(response => response.json())
			.then(json => dispatch(receiveOrderInfo(json)))
			.catch(err => dispatch(submitOrderError(order, err)));
	};		
};

const submitOrderError = (order, error) => {
	return {
		type: SUBMIT_ORDER_ERROR,
		order: order,
		error: error
	};
};

const receiveOrderInfo = (order) => {
	return {
		type: RECEIVE_ORDER_INFO,
		order: order
	};
};

const submitPayment = (order, data) => {
	return dispatch => {
		return savePaymentInfoAPI(order, data)
			.then(response => response.json())
			.then(json => dispatch(receivePayment(json)))
			.catch(err => dispatch(savePaymentError(order, err)));
	};	
};

const submitPaymentError = (order, error) => {
	return {
		type: SUBMIT_PAYMENT_ERROR,
		order: order,
		error: error
	};
};

const savePaymentError = (order, error) => {
	return {
		type: SAVE_PAYMENT_ERROR,
		order: order,
		error: error
	};
};

const receivePayment = (order) => {
	return {
		type: RECEIVE_PAYMENT,
		order: order
	};
};

module.exports = {
	BEGIN_TRANSACTION: BEGIN_TRANSACTION,
	SUBMIT_ORDER_INFO: SUBMIT_ORDER_INFO,
	SUBMIT_PAYMENT: SUBMIT_PAYMENT,
	INVALIDATE_ORDER_INFO: INVALIDATE_ORDER_INFO,
	RECEIVE_ORDER_INFO: RECEIVE_ORDER_INFO,
	INVALIDATE_PAYMENT: INVALIDATE_PAYMENT,
	RECEIVE_PAYMENT: RECEIVE_PAYMENT,
	beginTransaction: beginTransaction,
	submitNewOrder: submitNewOrder,
	submitOrderError: submitOrderError,
	receiveOrderInfo: receiveOrderInfo,
	submitPayment: submitPayment,
	savePaymentError:savePaymentError,
	receivePayment: receivePayment,
	submitPaymentError:submitPaymentError
};