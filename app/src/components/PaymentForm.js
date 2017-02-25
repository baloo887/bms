'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PayPalButton from './PayPalButton';

export class PaymentForm extends Component{
	constructor(props) {
	    super(props)
	    window.React = React
	    window.ReactDOM = ReactDOM
	}

	render() {
		return(
			<div>
				Payment Method
			
				<PayPalButton id='button' order={this.props.order} onClickFunc={this.props.onClickFunc} onPaymentErr={this.props.onPaymentErr}/>
			</div>
		);	
	}	
}