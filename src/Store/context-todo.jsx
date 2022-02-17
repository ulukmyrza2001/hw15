import React from "react";
import { Component } from "react";

export const TodoContext = React.createContext()

class TodoContextProvider extends Component{
    constructor(){
        super()
        this.state = {
            todos : [],
            isValid : true,
            task: '',
        }
    }
    componentDidMount(){
		this.setState({todos : JSON.parse(localStorage.getItem('todos')) || []})
	}
	componentDidUpdate(prevProps,prevState){
        prevState.todos !== this.state.todos && localStorage.setItem('todos',JSON.stringify(this.state.todos))	
	}
    render(){
        return (
            <TodoContext.Provider value={{
                todos : this.state.todos,
                isValid : this.state.isValid,
                task : this.state.task,
                setState : this.setState.bind(this)
            }}>
             {this.props.children}
            </TodoContext.Provider>
        )
    }
}
export default TodoContextProvider