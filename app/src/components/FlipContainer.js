'use strict';

import React, {
	Component
} from 'react';
import {
	MessageContainer
} from './MessageContainer';
import {
	InputForm
} from './InputForm';
import {PaymentForm} from './PaymentForm';

export class FlipContainer extends Component {

	render() {

		let visible = null;

		console.log(this.props);

		switch (this.props.step){
			case 'begin': 
				visible = < MessageContainer captionText='buy me something' buttonText='ok' onClickFunc={this.props.start}/>;
				break;
			case 'form': 
				visible = < InputForm order={this.props.order} onClickFunc={this.props.submitOrder}/>;
				break;
			case 'orderSaved': 
				visible = < PaymentForm order={this.props.order} onClickFunc={this.props.submitPayment} onPaymentErr={this.props.submitPaymentError}/>;
				break;
			case 'paymentSaved': 
				visible = < MessageContainer captionText='Great! And now wait at the door something is coming!' buttonText='restart' onClickFunc={this.props.start}/ >;
				break;		
		}

		console.log(visible);

		return(
			 < div >
				{visible}
			< /div>
		);	
	}
}