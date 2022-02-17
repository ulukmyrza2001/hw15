import React from 'react'
import { Component } from 'react/cjs/react.development'
import Button from './UI/Button'
import classes from './AddToDo.module.css'
import Input from './UI/Input'
import { Alert } from '@mui/material'

class AddToDo extends Component {
	constructor() {
		super()
		this.state = {
			task: '',
			isValid: true,
		}
	}
	inputChangeHandler(e) {
        if(this.state.task.trim() !== ""){
            this.setState({isValid : true})
        }
		this.setState({ task: e.target.value })
	}
	submitHandler(e) {
		e.preventDefault()
		if (this.state.task.trim() === '') {
			this.setState({ isValid: false })
			return
		}
		const newTodo = {
			task: this.state.task,
			id: Math.random().toString(),
			complete: false,
		}
		this.props.onGetData(newTodo)
		this.setState({ task: '' })
	}
	render() {
		return (
			<>
				{!this.state.isValid && (
					<Alert severity='error' className={classes.alert}>
						you filled in the fields!
					</Alert>
				)}
				<form
					className={`${classes.form}  ${!this.state.isValid && classes.invalid}`}
					onSubmit={this.submitHandler.bind(this)}
				>
					<div className={classes.input}>
						<Input
							onChange={this.inputChangeHandler.bind(this)}
							type='text'
							value={this.state.task}
                            placeholder = 'Gonna do...'
						/>
					</div>

					<Button className={classes.btnAdd} type='submit'>
						Add
					</Button>
				</form>
			</>
		)
	}
}
export default AddToDo
