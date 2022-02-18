import React from 'react'
import { Component } from 'react/cjs/react.production.min'
import classes from './Button.module.css'

class Button extends Component{
	render(){
		return (
			<button
				className={`${classes.button} ${this.props.className}`}
				type={this.props.type || 'button'}
				onClick={this.props.onClick}
				id={this.props.id}
			>
				{this.props.children}
			</button>
		)
	}
}

export default Button