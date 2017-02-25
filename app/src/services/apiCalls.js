'use strict';

import fetch from 'isomorphic-fetch';


import config from '../../../config/config';

const baseUrl = config.expressConfig.apiServer + '80' + config.expressConfig.apiPort;

export const saveOrderInfoAPI = (data) => {
	return fetch(baseUrl + '/api/order', {
	  method: 'POST',
	  headers: {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json',
	  },
	  body: JSON.stringify(data)
	});
};

export const savePaymentInfoAPI = (order, paymentInfo) => {
	return fetch(baseUrl + '/api/order/payment', {
	  method: 'POST',
	  headers: {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
	  	id:order._id,
	  	paymentInfo:paymentInfo
	  	})
	});
};