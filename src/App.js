import './App.css'
import { Component } from 'react'
import AddToDo from './Components/AddTodo'
import Todos from './Components/Todos'
import {TodoContext} from './Store/context-todo'

class App extends Component {
	static contextType = TodoContext
	render() {
		return (
			<div className='App'>
				<h1 className='zogo'>To Do...</h1>
				<h1 className='count'>Список задач: {this.context.todos.length}</h1>
				<AddToDo />
				<Todos
				/>
			</div>
		)
	}
}

export default App
