import React from 'react'
import { Component } from 'react/cjs/react.development'
import classes from './Checkbox.module.css'

class Checkbox extends Component{
	render(){
		return (
		<label className={classes.label}>
			<input
				className={classes.input}
				id={this.props.id}
				type={this.props.type}
				onChange={this.props.onChange}
				checked={this.props.checked}
			/>
			<span className={classes.span}></span>
		</label>
	)
	}
}

export default Checkbox
