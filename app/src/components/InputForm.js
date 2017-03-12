'use strict';

import React, { Component } from 'react';
import {
	MessageContainer
} from './MessageContainer';

export class InputForm extends Component{

	constructor(props) {
	    super(props);
	    this.state = props.order;

	    this.handleInputChange = this.handleInputChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event){
		const target = event.target;
	    const value = target.type === 'checkbox' ? target.checked : target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
	    });
	}

	handleSubmit(event){
		this.props.onClickFunc(this.state);
	}

	render() {
		return (
			<div className='input-form'>
				name<br/>
				<input type='text' name='name' value={this.state.name} onChange={this.handleInputChange}/><br/>
				surname<br/>
				<input type='text' name='surname' value={this.state.surname} onChange={this.handleInputChange}/><br/>
				email<br/>
				<input type='text' name='email' value={this.state.email} onChange={this.handleInputChange}/><br/>
				address<br/>
				<textarea name='address' value={this.state.address} onChange={this.handleInputChange}/><br/>
				<button onClick={this.handleSubmit}>Send</button>
			</div>
		);	
	}	
}