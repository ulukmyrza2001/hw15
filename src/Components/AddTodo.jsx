import React from 'react'
import { Component } from 'react/cjs/react.development'
import Button from './UI/Button'
import classes from './AddToDo.module.css'
import Input from './UI/Input'
import { Alert } from '@mui/material'
import { TodoContext } from '../Store/context-todo'

class AddToDo extends Component {
    static contextType = TodoContext

	inputChangeHandler(e) {
        if(this.context.task.trim() !== ""){
            this.context.setState({isValid : true})
        }
		this.context.setState({ task: e.target.value })
	}
	submitHandler(e) {
		e.preventDefault()
		if (this.context.task.trim() === '') {
			this.context.setState({ isValid: false })
            setTimeout(() => {
                this.context.setState({isValid : true})
            }, 2500)
			return
		}
		const newTodo = {
			task: this.context.task,
			id: Math.random().toString(),
			complete: false,
		}
        this.context.setState({todos : [...this.context.todos,newTodo]})
		this.context.setState({ task: '' })
	}
	render() {
		return (
			<>
				{!this.context.isValid && (
					<Alert  severity='error' className={`${classes.alert} ${!this.context.isValid && classes.isValid} `}>
						you filled in the fields!
					</Alert>
				)}
				<form
					className={`${classes.form}  ${!this.context.isValid && classes.invalid}`}
					onSubmit={this.submitHandler.bind(this)}
				>
					<div className={classes.input}>
						<Input
							onChange={this.inputChangeHandler.bind(this)}
							type='text'
							value={this.context.task}
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
