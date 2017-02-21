'use strict';

import React, { Component } from 'react';

export class MessageContainer extends Component{
	render() {
		return (
			<div>
				{this.props.captionText}
				<button onClick={this.props.onClickFunc}> {this.props.buttonText}</button>
			</div>
		);
	}	
}