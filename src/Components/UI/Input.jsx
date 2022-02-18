import React from 'react'
import { Component } from 'react/cjs/react.production.min'
import classes from './Input.module.css'


class Input extends Component{
	render(){
		return (
		<input
			className={`${classes.input} ${this.props.className}`}
			type={this.props.type}
			placeholder={this.props.placeholder}
			value={this.props.value}
			onChange={this.props.onChange}
            style={this.props.style}
		/>
	)
	}
} 

export default Input
