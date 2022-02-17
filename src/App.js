import './App.css'
import { Component } from 'react'
import AddToDo from './Components/AddTodo'
import Todos from './Components/Todos'

class App extends Component {
	constructor() {
		super()
		this.state = {
			todos: JSON.parse(localStorage.getItem('todos')) || [],
		}
	}
	getDataHandler(todo) {
		this.setState({ todos: [...this.state.todos, todo] })
		console.log(this.state)
	}
	componentDidMount(){
		this.setState({todos : JSON.parse(localStorage.getItem('todos')) || []})
	}
	componentDidUpdate(){
		localStorage.setItem('todos',JSON.stringify(this.state.todos))
	}
	render() {
		return (
			<div className='App'>
				<h1 className='zogo'>To Do...</h1>
				<AddToDo onGetData={this.getDataHandler.bind(this)} />
				<Todos
					setTodos={this.setState.bind(this)}
					todos={this.state.todos}
				/>
			</div>
		)
	}
}

export default App
