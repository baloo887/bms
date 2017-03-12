'use strict';

import React, {
	Component
} from 'react';

export class CarouselText extends Component {

	constructor(props) {
		super(props);
		this.state = {
			textList: props.textList,
			index: 0
		};

	}

	render() {

		setTimeout(() => {
			if(this.state.index + 1 === this.state.textList.length){
				this.setState({index: 0})
			}else{
				this.setState({index: this.state.index + 1})
			}
		},1000);

		return (
			<div className='carousel-text-container'>
				<b>{this.state.textList[this.state.index]}</b>
			</div>
		);
	}
}