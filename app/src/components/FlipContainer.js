'use strict';

import React, {
	Component
} from 'react';
import {
	MessageContainer
} from './MessageContainer';
import {
	CarouselText
} from './CarouselText';
import {
	InputForm
} from './InputForm';
import {PaymentForm} from './PaymentForm';

export class FlipContainer extends Component {

	render() {

		let visible = null;

		switch (this.props.step){
			case 'form': 
				visible = < InputForm order={this.props.order} onClickFunc={this.props.submitOrder} captionText='Buy me something'/>;
				break;
			case 'orderSaved': 
				visible = < PaymentForm order={this.props.order} onClickFunc={this.props.submitPayment} onPaymentErr={this.props.submitPaymentError}/>;
				break;
			case 'paymentSaved': 
				visible = < MessageContainer captionText='Great! And now wait at the door something is coming!' buttonText='restart' onClickFunc={this.props.start}/ >;
				break;		
		}

		return(
			 <div className='button-container'> 
			 	<div className='headerText'><b>BUY ME SOMETHING</b></div>
			 	<CarouselText textList={this.props.textList} />
			 	<div>
					{visible}
				</div>	
			</div>
		);	
	}
}